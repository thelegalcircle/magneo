import { createHash } from 'node:crypto';

export const origins = ['https://magneo.ca', 'https://www.magneo.ca'];
export function reply(res, status, data) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(status).json(data);
}
export function allowed(req) {
  return origins.includes(req.headers.origin) || (process.env.INTAKE_PREVIEW_ORIGIN && req.headers.origin === process.env.INTAKE_PREVIEW_ORIGIN);
}
export function body(req) {
  const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  if (!data || Buffer.byteLength(JSON.stringify(data)) > 24000) throw new Error('Invalid request');
  return data;
}
export function text(value, max = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}
export async function request(url, options = {}) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Upstream status ${response.status}`);
  return response.json();
}
export async function redis(...command) {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) throw new Error('Storage is not configured');
  const data = await request(process.env.UPSTASH_REDIS_REST_URL, {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command)
  });
  if (data.error) throw new Error('Storage error');
  return data.result;
}
export async function protect(req, token, action) {
  if (!allowed(req)) return 403;
  if (!process.env.TURNSTILE_SECRET_KEY) throw new Error('Bot protection is not configured');
  const ip = text(req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || 'unknown', 200).split(',')[0].trim();
  const hash = createHash('sha256').update(ip).digest('hex');
  const result = await redis('EVAL', "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],60) end; return n", 1, `magneo:rate:${action}:${hash}`);
  if (result > (action === 'chat' ? 15 : 5)) return 429;
  const verification = await request('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: text(token, 3000), remoteip: ip })
  });
  const permittedHosts = origins.map(origin => new URL(origin).hostname);
  if (process.env.INTAKE_PREVIEW_ORIGIN) permittedHosts.push(new URL(process.env.INTAKE_PREVIEW_ORIGIN).hostname);
  return verification.success && permittedHosts.includes(verification.hostname) && verification.action === action ? 200 : 403;
}
export function transcript(messages) {
  if (!Array.isArray(messages) || messages.length > 20) throw new Error('Conversation is too long');
  return messages.map(message => {
    if (!['user', 'assistant'].includes(message.role) || typeof message.content !== 'string' || message.content.length > 2000) throw new Error('Invalid message');
    return { role: message.role, content: message.content.trim() };
  });
}
export function lead(data) {
  const value = {
    name: text(data.name, 100), email: text(data.email, 254).toLowerCase(), phone: text(data.phone, 40),
    company: text(data.company, 200), message: text(data.message, 3000), messages: transcript(data.messages || [])
  };
  if (!value.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email) || !value.message || data.consent !== true) throw new Error('Please complete your name, email, request and consent');
  if (data.website) throw new Error('Invalid request');
  return value;
}
export function digest(value) {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

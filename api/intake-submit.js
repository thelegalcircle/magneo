import { allowed, body, digest, lead, protect, redis, reply, request } from '../lib/intake.js';

async function email(value, id) {
  const conversation = value.messages.map(message => `${message.role === 'user' ? 'Visitor' : 'AI'}: ${message.content}`).join('\n');
  return request('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `magneo-intake-${id}` },
    body: JSON.stringify({ from: process.env.INTAKE_EMAIL_FROM, to: [process.env.INTAKE_EMAIL_TO], reply_to: value.email,
      subject: 'New Magneo website inquiry', text: `Name: ${value.name}\nEmail: ${value.email}\nPhone: ${value.phone || 'Not provided'}\nCompany: ${value.company || 'Not provided'}\n\nRequest:\n${value.message}\n\nConversation:\n${conversation}\n\nSubmitted with consent to follow up. No marketing subscription requested.` })
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(res, 405, { error: 'Method not allowed' }); }
  if (!allowed(req)) return reply(res, 403, { error: 'Request not allowed' });
  const keys = ['RESEND_API_KEY', 'INTAKE_EMAIL_FROM', 'INTAKE_EMAIL_TO'];
  if (process.env.INTAKE_ENABLED !== 'true' || keys.some(key => !process.env[key])) return reply(res, 503, { error: 'Intake is temporarily unavailable. Please use the contact page.' });
  let data, value;
  try {
    data = body(req); value = lead(data);
    if (typeof data.id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data.id)) throw new Error('Invalid inquiry ID');
  } catch { return reply(res, 400, { error: 'Please complete your name, valid email, request and consent.' }); }
  const id = data.id, key = `magneo:intake:${id}`, hash = digest(value);
  let locked = false;
  try {
    const status = await protect(req, data.token, 'submit');
    if (status !== 200) return reply(res, status, { error: status === 429 ? 'Please wait a minute before trying again.' : 'Please complete the security check again.' });
    locked = await redis('SET', `${key}:lock`, '1', 'NX', 'EX', 300);
    if (!locked) return reply(res, 409, { error: 'This inquiry is being processed. Please wait before retrying.' });
    const previous = await redis('GET', key);
    const state = previous ? JSON.parse(previous) : { hash };
    if (state.hash !== hash) return reply(res, 409, { error: 'Details changed. Please start a new inquiry.' });
    // Retain delivery markers, not contact details or transcripts, for seven days.
    const save = () => redis('SET', key, JSON.stringify(state), 'EX', 604800);
    if (!state.email) { await email(value, id); state.email = true; await save(); }
    return reply(res, 200, { success: true });
  } catch {
    return reply(res, 503, { error: 'We could not confirm email delivery. Please retry; your details are still here.' });
  } finally {
    if (locked) { try { await redis('DEL', `${key}:lock`); } catch { /* lock expires automatically */ } }
  }
}

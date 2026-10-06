import { allowed, body, protect, reply, request, transcript } from '../lib/intake.js';

const instructions = `You are Magneo's AI intake assistant, not a live employee. Magneo is a Toronto-based marketing business serving Canada and the USA. It offers websites, branding, SEO, paid advertising, content, social media and AI automation for professional services and technology businesses, including law, finance and healthcare. Help visitors describe their marketing needs. Keep replies under 100 words and ask one helpful follow-up question at a time. Invite them to use the Send an inquiry button to share their name, email, optional phone/company and request for a human follow-up. Do not invent prices, availability, results, guarantees or response times. Do not claim to have sent, saved or booked anything: only the separate inquiry form can submit. Never request passwords, payment details, case details or sensitive personal information. Stay within marketing inquiries; do not give legal, medical or financial advice. The team may be offline. Do not claim that a human is currently online.`;

export default async function handler(req, res) {
  if (req.method === 'GET') return reply(res, 200, {
    enabled: process.env.INTAKE_ENABLED === 'true',
    siteKey: process.env.TURNSTILE_SITE_KEY || ''
  });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return reply(res, 405, { error: 'Method not allowed' }); }
  if (!allowed(req)) return reply(res, 403, { error: 'Request not allowed' });
  if (process.env.INTAKE_ENABLED !== 'true' || !process.env.OPENAI_API_KEY) return reply(res, 503, { error: 'Chat is temporarily unavailable. You can use the contact page.' });
  let data, messages;
  try {
    data = body(req); messages = transcript(data.messages);
    if (!messages.length || messages.at(-1).role !== 'user' || !messages.at(-1).content) throw new Error();
  } catch { return reply(res, 400, { error: 'Please send a shorter message.' }); }
  try {
    const status = await protect(req, data.token, 'chat');
    if (status !== 200) return reply(res, status, { error: status === 429 ? 'Please wait a minute before sending another message.' : 'Please complete the security check again.' });
    const result = await request('https://api.openai.com/v1/responses', {
      method: 'POST', headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4.1-mini', instructions, input: messages, max_output_tokens: 300, store: false })
    });
    const answer = result.output?.filter(item => item.type === 'message').flatMap(item => item.content || []).filter(item => item.type === 'output_text').map(item => item.text).join('\n');
    if (!answer) throw new Error('Empty AI response');
    return reply(res, 200, { answer });
  } catch {
    return reply(res, 503, { error: 'AI chat is temporarily unavailable. You can still send an inquiry.' });
  }
}

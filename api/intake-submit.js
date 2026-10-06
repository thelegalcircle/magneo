import { allowed, body, digest, lead, protect, redis, reply, request } from '../lib/intake.js';

async function hubspot(value) {
  const headers = { Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_TOKEN}`, 'Content-Type': 'application/json' };
  const words = value.name.split(/\s+/);
  // Reuse existing contacts without overwriting CRM data. The note keeps the new inquiry details.
  const lookup = `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(value.email)}?idProperty=email`;
  const existing = await fetch(lookup, { headers, signal: AbortSignal.timeout(15000) });
  if (existing.ok) return (await existing.json()).id;
  if (existing.status !== 404) throw new Error('Contact lookup failed');
  const properties = { email: value.email, firstname: words.shift(), lastname: words.join(' ') };
  if (value.phone) properties.phone = value.phone;
  if (value.company) properties.company = value.company;
  const created = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST', headers, body: JSON.stringify({ properties }), signal: AbortSignal.timeout(15000)
  });
  if (created.status === 409) return (await request(lookup, { headers })).id;
  if (!created.ok) throw new Error('Contact was not saved');
  const result = await created.json();
  if (!result.id) throw new Error('Contact was not saved');
  return result.id;
}
async function note(value, contactId) {
  const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const fullConversation = value.messages.map(message => `${message.role === 'user' ? 'Visitor' : 'AI'}: ${message.content}`).join('\n');
  const conversation = fullConversation.length > 6000 ? `${fullConversation.slice(0, 6000)}\n[Long transcript shortened here; full conversation included in the inquiry email.]` : fullConversation;
  await request('https://api.hubapi.com/crm/v3/objects/notes', {
    method: 'POST', headers: { Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ properties: { hs_timestamp: new Date().toISOString(), hs_note_body: `<p>Website AI intake — magneo.ca</p><p>Name: ${escape(value.name)}<br>Email: ${escape(value.email)}<br>Phone: ${escape(value.phone)}<br>Company: ${escape(value.company)}</p><p>${escape(value.message).replace(/\n/g, '<br>')}</p><p>${escape(conversation).replace(/\n/g, '<br>')}</p><p>Visitor agreed to contact about this inquiry. No marketing subscription requested.</p>` }, associations: [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }] })
  });
}
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
  const keys = ['HUBSPOT_PRIVATE_APP_TOKEN', 'RESEND_API_KEY', 'INTAKE_EMAIL_FROM', 'INTAKE_EMAIL_TO'];
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
    if (!state.contactId) { state.contactId = await hubspot(value); await save(); }
    if (!state.note) { await note(value, state.contactId); state.note = true; await save(); }
    if (!state.email) { await email(value, id); state.email = true; await save(); }
    return reply(res, 200, { success: true });
  } catch {
    return reply(res, 503, { error: 'We could not confirm delivery to both destinations. Please retry; your details are still here.' });
  } finally {
    if (locked) { try { await redis('DEL', `${key}:lock`); } catch { /* lock expires automatically */ } }
  }
}

import { readFile } from 'node:fs/promises';

const GUIDE_PATH = new URL('./_private/magneo-personal-branding-guide-legal-professionals.pdf', import.meta.url);
const HUBSPOT_ENDPOINT = 'https://api.hsforms.com/submissions/v3/integration/submit/342136473/ff7b6ed0-a222-476a-ac58-191ec4e0ab67';

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store, private');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Submit the guide request form to download this file.' });
  }

  const body = request.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return response.status(400).json({ error: 'Please complete the required fields and consent.' });
  }
  const { firstname = '', lastname = '', email = '', consent = false, website = '' } = body;
  if ([firstname, lastname, email, website].some(value => typeof value !== 'string') || firstname.length > 200 || lastname.length > 200 || email.length > 254 || website.length > 2048) {
    return response.status(400).json({ error: 'Please complete the required fields and consent.' });
  }
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
  if (website || !firstname.trim() || !lastname.trim() || !validEmail || consent !== true) {
    return response.status(400).json({ error: 'Please complete the required fields and consent.' });
  }

  const submission = {
    submittedAt: Date.now(),
    fields: [
      { name: 'firstname', value: firstname.trim() },
      { name: 'lastname', value: lastname.trim() },
      { name: 'email', value: email.trim() }
    ],
    context: {
      pageUri: 'https://magneo.ca/personal-branding-ultimate-guide-legal-professionals/',
      pageName: 'Magneo Personal Branding Guide for Legal Professionals'
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'I agree that Magneo may store and use my information to provide the requested guide.'
      }
    }
  };

  try {
  const hubspotResponse = await fetch(HUBSPOT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission),
    signal: AbortSignal.timeout(10000)
  });

  if (!hubspotResponse.ok) {
    return response.status(502).json({ error: 'The request could not be recorded.' });
  }

  const pdf = await readFile(GUIDE_PATH);
  response.setHeader('Content-Type', 'application/pdf');
  response.setHeader('Content-Disposition', 'attachment; filename="magneo-personal-branding-guide-legal-professionals.pdf"');
  return response.status(200).send(pdf);
  } catch {
    return response.status(502).json({ error: 'The guide is temporarily unavailable. Please try again.' });
  }
}

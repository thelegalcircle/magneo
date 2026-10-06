# Magneo AI intake

The floating chat is available whenever enabled, including when the team is offline. It identifies itself as AI; it does not imply a live agent is online. OpenAI answers basic marketing questions. Visitors explicitly submit their name, email, optional phone/company, request and conversation with permission to follow up. This does not subscribe them to marketing.

## Activation

1. In the existing Magneo Vercel project, add the server-side environment variables in `.env.example`. Never prefix secret variables with `VITE_` or commit actual credentials.
2. Set `OPENAI_API_KEY` to a billed OpenAI API project key. The default model is `gpt-4.1-mini`; set `OPENAI_MODEL` to another compatible Responses API text model if needed. Set an OpenAI project budget and monitor usage.
3. Create a HubSpot private app in the Magneo account (portal 342767601), with access to read/create contacts and create notes. Set its token as `HUBSPOT_PRIVATE_APP_TOKEN`. The chat connector's authorization is separate from this website credential. New contacts are created by email; existing contact properties are preserved, and the note contains the latest visitor-supplied details and transcript.
4. Configure Resend with a verified sending domain. Set `RESEND_API_KEY`, `INTAKE_EMAIL_FROM` to a verified sender and `INTAKE_EMAIL_TO` to the owner's confirmed destination address. No emails are sent by the local mock tests. Sending must be tested on the actual domain before launch.
5. Create a Cloudflare Turnstile widget allowing magneo.ca and www.magneo.ca. Set its site key and secret. The site key is public; the secret stays on the server. Tokens are validated for hostname and action on each request. For preview testing, allow its hostname in Turnstile and set its exact origin as `INTAKE_PREVIEW_ORIGIN`.
6. Provision an Upstash Redis database and set the REST URL/token. Redis is required for distributed per-IP limits and delivery markers. Markers expire after seven days and contain a payload hash, contact ID and delivery states, not the transcript/contact details. IP-based rate keys are hashed and expire after one minute.
7. Deploy a preview with `INTAKE_ENABLED=true`, check mobile/desktop layout, and submit an explicitly marked test inquiry using an email you control. Confirm the HubSpot contact and associated note, and inbox receipt, before enabling production.
8. Set production `INTAKE_ENABLED=true` and redeploy. Setting it to false and redeploying hides the widget and blocks both submission endpoints.

## Behavior and limits

- The server allows only the main site origins plus one explicit preview origin. The client loads bot protection only after the visitor opens the chat. Chat requires a valid Turnstile token and has a 15 requests/minute/IP limit; intake submission has a 5 requests/minute/IP limit.
- Conversation inputs are limited to 20 messages, 2,000 characters each and a 200 KB request. AI output is capped at 300 tokens. Inquiries require valid name/email/request and explicit consent. A honeypot adds basic spam protection.
- OpenAI requests use `store:false`. This does not imply that the provider has zero retention. Conversations are kept in browser memory only and disappear on page reload unless submitted. Submitted details go to HubSpot and the configured inbox; review the site's privacy policy to ensure these processors and uses are accurately covered.
- The frontend confirms success only after HubSpot contact/note and email API acceptance. Email API acceptance does not prove inbox delivery. Follow delivery status in Resend. HubSpot notes shorten transcripts beyond 6,000 characters to remain within its note-size limit; the email contains the full submitted conversation.
- Redis delivery markers prevent repeated completed steps during normal retries. The email provider also applies its 24-hour idempotency window. HubSpot notes do not provide idempotency: a timeout after HubSpot accepted a note but before the marker was written can cause a duplicate note on retry. A full background queue and automatic retries are not included.
- If any delivery step fails, visitors see an error and can retry with retained form details. If they close/reload before retrying, remaining delivery steps are not automatically completed. The contact page remains available as a fallback.
- The assistant uses a small, explicitly provided business description, not a crawl of every page. It does not quote prices, promise results or book appointments. Live human takeover/presence detection is not included.

## Verification

Run `node --test tests/intake.test.mjs`. These tests mock OpenAI, HubSpot, Resend, Turnstile and Redis; they do not spend credits or contact anyone. Run the existing Vite build to check the website compilation. Browser tests use mock endpoints and do not confirm live provider configuration.

Official API references: [OpenAI text generation](https://developers.openai.com/api/docs/guides/text), [HubSpot contacts](https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide), [HubSpot notes](https://developers.hubspot.com/docs/api-reference/legacy/crm/activities/notes/guide), [Resend email API](https://resend.com/docs/api-reference/emails/send-email), [Turnstile validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

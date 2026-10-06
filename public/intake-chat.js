(async function () {
  if (document.getElementById('magneo-intake')) return;
  let config;
  try {
    const response = await fetch('/api/intake-chat');
    if (!response.ok) return;
    config = await response.json();
  } catch { return; }
  if (!config.enabled || !config.siteKey) return;

  const host = document.createElement('div');
  host.id = 'magneo-intake';
  document.body.appendChild(host);
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>
    :host{position:fixed;bottom:22px;right:22px;z-index:90;font-family:'DM Sans',system-ui,sans-serif;color:#111;font-size:15px}
    *{box-sizing:border-box}button,input,textarea{font:inherit}button{cursor:pointer}button:disabled{cursor:wait;opacity:.6}
    button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #578d00;outline-offset:3px}
    .launch{display:flex;align-items:center;gap:10px;background:#8fef00;border:1px solid #111;border-radius:30px;padding:15px 22px;font-weight:700;box-shadow:0 6px 30px #0002;color:#111}
    .spark{font-size:22px}.panel{width:380px;max-width:calc(100vw - 32px);height:620px;max-height:calc(100dvh - 110px);display:flex;flex-direction:column;border-radius:22px;background:#fff;box-shadow:0 12px 60px #0004;border:1px solid #ddd;overflow:hidden;margin-bottom:12px}
    [hidden]{display:none!important}.header{padding:20px;background:#0a0a0a;color:white;display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.header b{font-size:18px}.header p{margin:6px 0 0;color:#ccc;font-size:12px}.close{border:0;background:transparent;color:#fff;font-size:24px;line-height:1}
    .content{padding:18px;overflow:auto;flex:1}.message{padding:13px 15px;border-radius:14px;background:#f1f2ee;line-height:1.5;margin-bottom:12px;white-space:pre-wrap;overflow-wrap:anywhere}.user{background:#e3f9c3;margin-left:30px}.who{display:block;font-size:11px;font-weight:700;margin-bottom:4px;color:#59604f}
    .composer{display:flex;gap:8px;padding:12px 16px;border-top:1px solid #eee}.composer input{flex:1;min-width:0}.primary{background:#8fef00;color:#111;border:0;border-radius:10px;padding:12px 16px;font-weight:700}.secondary{background:#fff;border:1px solid #ccc;border-radius:10px;padding:10px 14px;color:#111}
    input,textarea{border:1px solid #ccc;border-radius:9px;padding:11px;width:100%;color:#111;background:#fff}textarea{resize:vertical;min-height:85px}.field{display:block;margin-bottom:13px;font-size:13px;font-weight:600}.field input,.field textarea{display:block;margin-top:6px;font-weight:400}
    .notice{font-size:12px;line-height:1.5;color:#666;margin:0 0 14px}.notice a{color:#315900;text-decoration:underline}.consent{font-size:12px;display:flex;gap:8px;align-items:flex-start;line-height:1.5;margin-bottom:16px}.consent input{width:16px;height:16px;flex-shrink:0;margin:2px 0 0}.row{display:flex;gap:8px;flex-wrap:wrap}
    .error{color:#a12525;font-size:13px;padding:0 18px 10px;line-height:1.5}.security{padding:0 16px 8px;min-height:1px}.footer{padding:12px 16px;font-size:12px;display:flex;justify-content:space-between;align-items:center;gap:8px;border-top:1px solid #eee}.footer a{color:#555}.trap{position:absolute;left:-9999px}
    @media(max-width:480px){:host{bottom:16px;right:16px}.panel{width:calc(100vw - 32px);max-height:calc(100dvh - 100px)}.launch{padding:12px 18px}}
    @media(prefers-reduced-motion:no-preference){.panel{animation:appear .18s ease-out}@keyframes appear{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}}
  </style>
  <section class="panel" id="panel" hidden aria-label="Magneo AI intake assistant">
    <header class="header"><div><b>Magneo assistant</b><p>AI intake · Leave a request anytime</p></div><button class="close" aria-label="Close chat">×</button></header>
    <div class="content">
      <div id="conversation" role="log" aria-live="polite" aria-label="Conversation"></div>
      <form id="lead" hidden>
        <p class="notice">Leave your details for a human follow-up, even when the team is offline. Your inquiry and chat will be sent to Magneo by email and saved in HubSpot.</p>
        <label class="field">Name<input name="name" autocomplete="name" maxlength="100" required></label>
        <label class="field">Email<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
        <label class="field">Phone (optional)<input name="phone" type="tel" autocomplete="tel" maxlength="40"></label>
        <label class="field">Company (optional)<input name="company" autocomplete="organization" maxlength="200"></label>
        <label class="field">How can we help?<textarea name="message" maxlength="3000" required></textarea></label>
        <label class="trap" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <label class="consent"><input name="consent" type="checkbox" required><span>I agree that Magneo may store my details and conversation and contact me about this inquiry. <a href="/privacy-policy/">Privacy policy</a>.</span></label>
        <div class="row"><button class="primary" id="submit-lead" type="submit">Send inquiry</button><button class="secondary" type="button" id="back">Back to chat</button></div>
      </form>
      <div id="success" hidden role="status"><h3>Thanks. Your inquiry was sent.</h3><p>The Magneo team has your details and will follow up by email.</p><button class="secondary" id="new">Start a new chat</button></div>
    </div>
    <div class="error" role="status" id="error"></div>
    <div class="security" id="security"></div>
    <form class="composer" id="composer"><input id="message" aria-label="Your message" placeholder="What can we help with?" maxlength="2000" required><button class="primary" type="submit">Send</button></form>
    <div class="footer" id="footer"><button class="secondary" id="inquiry">Send an inquiry</button><a href="/contact/">Contact page</a></div>
  </section>
  <button class="launch" aria-controls="panel" aria-expanded="false"><span class="spark" aria-hidden="true">✦</span>Chat with Magneo</button>`;

  const $ = selector => root.querySelector(selector);
  let messages = [], id = crypto.randomUUID(), widget, token = '', busy = false, action = 'chat', turnstileReady;
  const greeting = 'Hi! I’m Magneo’s AI assistant. Tell me what you need help with—your website, branding or marketing. You can leave an inquiry anytime, even when the team is offline.';
  const error = message => { $('#error').textContent = message; };
  function add(role, content) {
    const bubble = document.createElement('div'); bubble.className = `message ${role === 'user' ? 'user' : ''}`;
    const label = document.createElement('span'); label.className = 'who'; label.textContent = role === 'user' ? 'You' : 'Magneo AI';
    bubble.append(label, document.createTextNode(content)); $('#conversation').appendChild(bubble);
    $('.content').scrollTop = $('.content').scrollHeight;
  }
  add('assistant', greeting);
  const notice = document.createElement('p'); notice.className = 'notice'; notice.textContent = 'AI messages are processed by OpenAI. Please share only business and contact information.'; $('#conversation').appendChild(notice);
  function loadSecurity() {
    if (turnstileReady) return turnstileReady;
    turnstileReady = new Promise((resolve, reject) => {
      if (window.turnstile) return resolve();
      const script = document.createElement('script'); script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'; script.async = true;
      script.onload = () => resolve(); script.onerror = reject; document.head.appendChild(script);
    });
    return turnstileReady;
  }
  async function security(nextAction = action) {
    action = nextAction; token = '';
    try {
      await loadSecurity();
      if (widget !== undefined) window.turnstile.remove(widget);
      widget = window.turnstile.render($('#security'), { sitekey: config.siteKey, action,
        callback: value => { token = value; }, 'expired-callback': () => { token = ''; }, 'error-callback': () => { token = ''; error('The security check could not load. Please use the contact page or try again.'); } });
    } catch { error('The security check could not load. Please use the contact page.'); }
  }
  function setBusy(value) {
    busy = value;
    root.querySelectorAll('form button, #inquiry, #back, #new').forEach(button => { button.disabled = value; });
    $('#message').disabled = value;
    $('#submit-lead').textContent = value ? 'Sending…' : 'Send inquiry';
  }
  function open(value) {
    $('#panel').hidden = !value; $('.launch').setAttribute('aria-expanded', String(value));
    if (value) { security(); ($('#lead').hidden ? $('#message') : $('#lead input')).focus(); }
    else $('.launch').focus();
  }
  $('.launch').onclick = () => open($('#panel').hidden);
  $('.close').onclick = () => open(false);
  root.addEventListener('keydown', event => { if (event.key === 'Escape') open(false); });
  $('#inquiry').onclick = () => {
    $('#conversation').hidden = true; $('#composer').hidden = true; $('#lead').hidden = false; $('#footer').hidden = true; error('');
    if (!$('#lead textarea').value) $('#lead textarea').value = messages.filter(message => message.role === 'user').map(message => message.content).join('\n').slice(0, 3000);
    security('submit'); $('#lead input').focus();
  };
  $('#back').onclick = () => { $('#lead').hidden = true; $('#conversation').hidden = false; $('#composer').hidden = false; $('#footer').hidden = false; error(''); security('chat'); $('#message').focus(); };
  async function post(path, payload) {
    const response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, token }), signal: AbortSignal.timeout(190000) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Please try again.');
    return data;
  }
  $('#composer').onsubmit = async event => {
    event.preventDefault(); if (busy) return;
    if (!token) { error('Please wait for the security check to finish.'); return; }
    if (messages.length >= 20) { error('Please send an inquiry to continue with the team.'); return; }
    const content = $('#message').value.trim(); if (!content) return;
    setBusy(true); error('');
    const pending = [...messages, { role: 'user', content }];
    try {
      const data = await post('/api/intake-chat', { messages: pending });
      messages = [...pending, { role: 'assistant', content: data.answer }]; add('user', content); add('assistant', data.answer); $('#message').value = '';
    } catch (err) { error(err.message || 'Chat could not connect. You can send an inquiry instead.'); }
    finally { setBusy(false); security('chat'); $('#message').focus(); }
  };
  let submittedPayload;
  $('#lead').onsubmit = async event => {
    event.preventDefault(); if (busy) return;
    if (!token) { error('Please wait for the security check to finish.'); return; }
    const data = Object.fromEntries(new FormData($('#lead'))); data.consent = data.consent === 'on'; data.messages = messages;
    const current = JSON.stringify(data);
    if (submittedPayload && submittedPayload !== current) id = crypto.randomUUID();
    submittedPayload = current;
    setBusy(true); error('');
    try {
      await post('/api/intake-submit', { ...data, id }); $('#lead').hidden = true; $('#security').hidden = true; $('#success').hidden = false;
    } catch (err) { error(err.message || 'Could not send. Your details are still here.'); security('submit'); }
    finally { setBusy(false); }
  };
  $('#new').onclick = () => {
    messages = []; id = crypto.randomUUID(); submittedPayload = undefined; $('#lead').reset(); $('#conversation').replaceChildren(); add('assistant', greeting); $('#conversation').appendChild(notice);
    $('#success').hidden = true; $('#security').hidden = false; $('#conversation').hidden = false; $('#composer').hidden = false; $('#footer').hidden = false; error(''); security('chat'); $('#message').focus();
  };
})();

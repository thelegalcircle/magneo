import { useEffect, useState } from 'react';

const HUBSPOT_ENDPOINT = 'https://api.hsforms.com/submissions/v3/integration/submit/342767601/46c6b70f-b1ee-4907-a137-be8b2faff1e8';
const initialValues = { name: '', email: '', company: '', service: '', message: '' };

function useContactSeo() {
  useEffect(() => {
    document.title = 'Contact Magneo | Discuss Your Project';
    const description = 'Contact Adele Salikhova at Magneo to discuss a website, content, search, advertising, or AI marketing project.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://magneo.ca/contact/';
  }, []);
}

export default function ContactTest() {
  useContactSeo();
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setStatus('sending');
    const nameParts = values.name.trim().split(/\s+/).filter(Boolean);
    const firstName = nameParts.shift() || '';
    const lastName = nameParts.join(' ') || '-';
    const message = [
      values.service ? `Requested help: ${values.service}` : 'Requested help: Not sure yet',
      values.message.trim() || 'No additional message provided.'
    ].join('\n\n');

    try {
      const response = await fetch(HUBSPOT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedAt: Date.now(),
          fields: [
            { name: 'firstname', value: firstName },
            { name: 'lastname', value: lastName },
            { name: 'email', value: values.email.trim() },
            { name: 'company', value: values.company.trim() },
            { name: 'phone', value: 'Not provided' },
            { name: 'message', value: message }
          ],
          context: {
            pageUri: window.location.href,
            pageName: 'Contact Magneo | Discuss Your Project'
          }
        })
      });
      if (!response.ok) throw new Error('Submission rejected');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return <div className="ct-page">
    <section className="ct-contact" aria-labelledby="ct-title">
      <div className="container ct-shell">
        <div className="ct-intro">
          <span className="ct-kicker">Discuss your project</span>
          <h1 id="ct-title">Let’s talk about your next project.</h1>
          <p>Need a website, clearer content, or help using AI in your marketing? Tell us what you want to improve. You don’t need a finished brief to get in touch.</p>

          <figure className="ct-profile">
            <img src="/adele-salikhova.jpg" alt="Adele Salikhova, Founder of Magneo"/>
            <figcaption>
              <strong>Adele Salikhova</strong>
              <span>Founder, Magneo</span>
              <a className="ct-linkedin" href="https://www.linkedin.com/in/adele-salikhova/" target="_blank" rel="noopener noreferrer">
                Chat with Adele on LinkedIn <b aria-hidden="true">↗</b>
              </a>
            </figcaption>
          </figure>

          <div className="ct-direct">
            <div><span>Prefer email?</span><a href="mailto:contact@magneo.ca">contact@magneo.ca</a></div>
            <div><span>Prefer to call?</span><a href="tel:+14378731155">437 873 1155</a></div>
          </div>
        </div>

        <div className="ct-form-panel" id="contact-enquiry">
          <span className="ct-kicker">Start a conversation</span>
          <h2>Tell us what you have in mind.</h2>
          <p className="ct-next">Your message comes directly to Magneo. We’ll review what you share and reply with any questions or a suggested next step.</p>
          <p className="ct-response">We usually reply within one business day.</p>

          {status === 'success' ? <div className="ct-result" role="status" tabIndex="-1">
            <span aria-hidden="true">✓</span>
            <h3>Thanks - your enquiry has been sent to Magneo.</h3>
            <p>We’ll review your message and reply by email.</p>
          </div> : <form className="ct-form" id="contact-form" onSubmit={submit}>
            <label>Your name <span aria-hidden="true">*</span><input name="name" value={values.name} onChange={update} autoComplete="name" required/></label>
            <label>Email <span aria-hidden="true">*</span><input name="email" type="email" value={values.email} onChange={update} autoComplete="email" required/></label>
            <label>Website or company name <small>Optional</small><input name="company" value={values.company} onChange={update} autoComplete="organization"/></label>
            <label>What would you like help with? <small>Optional</small>
              <select name="service" value={values.service} onChange={update}>
                <option value="">Select an option</option>
                <option>Website</option>
                <option>Social media and content</option>
                <option>AI tools and automation</option>
                <option>Search visibility or advertising</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>Short message <small>Optional</small><textarea name="message" rows="4" value={values.message} onChange={update} aria-describedby="ct-message-help"/></label>
            <p className="ct-helper" id="ct-message-help">A sentence or two about your plans is enough.</p>
            {status === 'error' && <p className="ct-error" role="alert">Your message couldn’t be sent. Please try again, or email <a href="mailto:contact@magneo.ca">contact@magneo.ca</a>.</p>}
            <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send your enquiry'}</button>
            <p className="ct-privacy">By sending this form, you agree that Magneo may use your details to respond to your enquiry. Read the <a href="/privacy-policy/">privacy notice</a>.</p>
          </form>}
        </div>
      </div>
    </section>
  </div>;
}

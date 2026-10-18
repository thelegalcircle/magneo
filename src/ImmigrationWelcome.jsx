import { useEffect, useState } from 'react';

const services = [
  ['01', 'Join family in Canada', 'Understand family sponsorship options, the information needed, and the steps involved in preparing an application.'],
  ['02', 'Work in Canada', 'Explore work-permit options and the requirements that may apply to you and a prospective employer.'],
  ['03', 'Study in Canada', 'Understand study-permit requirements and how your plans relate to your immigration status.'],
  ['04', 'Make Canada your long-term home', 'Review potential pathways to permanent residence and the factors that may affect your options.'],
];

const steps = [
  ['01', 'Tell us about your plans', 'Share a general outline of what you hope to do and mention any known deadline. We establish whether we can assist.'],
  ['02', 'Understand your options', 'If we proceed to a consultation, we discuss the relevant requirements, information gaps, and possible next steps.'],
  ['03', 'Agree on the work', 'Before you retain us, we explain the proposed scope, fees, and responsibilities. You decide whether to proceed.'],
];

const faqs = [
  ['Do I need to know which program to apply for?', 'No. Start with what you hope to do in Canada. A consultation can help identify which options may be relevant and what further information is needed.'],
  ['Can I enquire from outside Canada?', 'Yes. You can make an initial enquiry from outside Canada. Include your time zone if you would like to arrange a call.'],
  ['What should I send with my first enquiry?', 'A general outline of your plans and any known deadline is enough. Please do not send passports, identification numbers, or immigration documents through this form.'],
  ['How are fees explained?', 'We explain any consultation fee before you book. Before further work begins, we set out the proposed services, legal fees, and other anticipated costs.'],
  ['Can you guarantee approval?', 'No. Immigration decisions are made by the relevant authorities. Legal advice can help you understand the requirements and prepare your case, but cannot guarantee an outcome.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function ImmigrationWelcome(){
  const [demoMessage, setDemoMessage] = useState(false);

  useEffect(() => {
    document.title = 'Maple & Harbour Immigration Law - Fictional Website Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A warm, welcoming fictional Canadian immigration-law website concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/immigration-welcome/';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setDemoMessage(true);
  };

  return <div className="mh7" id="mh7-top">
    <header className="mh7-header">
      <a className="mh7-brand" href="/portfolio/" aria-label="Back to portfolio">
        <span>← Back to portfolio</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#mh7-help">How we help</a>
        <a href="#mh7-process">What to expect</a>
        <a href="#mh7-lawyer">Your lawyer</a>
        <a href="#mh7-faq">Questions</a>
      </nav>
      <a className="mh7-button mh7-header-cta" href="#mh7-enquiry">Discuss your plans <Arrow/></a>
    </header>

    <main>
      <section className="mh7-hero">
        <div className="mh7-leaves" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <div className="mh7-hero-copy">
          <span className="mh7-disclosure">Fictional website concept</span>
          <span className="mh7-eyebrow">Canadian immigration law</span>
          <h1>A new chapter.<br/><em>A clearer next step.</em></h1>
          <p>Whether you want to join family, work, study, or make Canada your long-term home, start by understanding your options and what your next step may involve.</p>
          <div className="mh7-actions">
            <a className="mh7-button" href="#mh7-enquiry">Discuss your plans <Arrow/></a>
            <a className="mh7-text-link" href="#mh7-help">Explore how we help <span aria-hidden="true">↓</span></a>
          </div>
          <small className="mh7-supporting-line">Not sure where to begin? You do not need to know the name of an immigration program to make an enquiry.</small>
        </div>
        <div className="mh7-hero-image">
          <div className="mh7-arch"><img src="/immigration-welcome-hero.png" alt="An illustrative couple settling into a new home in Canada"/></div>
        </div>
      </section>

      <section className="mh7-help" id="mh7-help">
        <div className="mh7-section-heading">
          <span>How we help</span>
          <h2>What brings you here?</h2>
          <p>Start with your plans. We help you understand the legal questions, requirements, and decisions involved.</p>
        </div>
        <div className="mh7-service-grid">
          {services.map(([number, title, text]) => <a href="#mh7-enquiry" key={number} className="mh7-service-card">
            <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↘</i>
          </a>)}
        </div>
      </section>

      <section className="mh7-process" id="mh7-process">
        <div className="mh7-journey-line" aria-hidden="true"><i/><i/><i/></div>
        <div className="mh7-section-heading">
          <span>What to expect</span>
          <h2>Understand the process before taking the next step.</h2>
        </div>
        <div className="mh7-steps">
          {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="mh7-lawyer" id="mh7-lawyer">
        <div className="mh7-lawyer-image"><img src="/immigration-alex-morgan.png" alt="A welcoming group of fictional immigration lawyers featured in this website concept"/></div>
        <div className="mh7-lawyer-copy">
          <span>Fictional lawyer profile</span>
          <strong>Alex Morgan</strong>
          <h2>Clear explanations.<br/><em>Room for your questions.</em></h2>
          <p>Alex helps individuals and families understand Canadian immigration options and the work involved in pursuing them. The approach is straightforward: listen carefully, explain clearly, and identify what needs attention next.</p>
          <a className="mh7-button" href="#mh7-enquiry">Discuss your plans <Arrow/></a>
        </div>
      </section>

      <section className="mh7-faq" id="mh7-faq">
        <div className="mh7-section-heading"><h2>Before you get in touch</h2></div>
        <div className="mh7-faq-list">
          {faqs.map(([question, answer], index) => <details key={question} defaultOpen={index === 0}>
            <summary>{question}<i aria-hidden="true"/></summary><p>{answer}</p>
          </details>)}
        </div>
      </section>

      <section className="mh7-enquiry" id="mh7-enquiry">
        <div className="mh7-enquiry-copy">
          <h2>Tell us about your next chapter.</h2>
          <p>Share a little about your plans and how to reach you. You can mention a known deadline without sending documents.</p>
          <small>Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mh7-form-row">
            <label>Your name<input name="name" type="text" autoComplete="name" required/></label>
            <label>Email<input name="email" type="email" autoComplete="email" required/></label>
          </div>
          <label>Phone - optional<input name="phone" type="tel" autoComplete="tel"/></label>
          <label>What would you like help with?
            <select name="help" defaultValue="" required>
              <option value="" disabled>Select an option</option>
              <option>Joining family</option><option>Working in Canada</option><option>Studying in Canada</option><option>Permanent residence</option><option>Not sure yet</option>
            </select>
          </label>
          <label>Short outline - optional<small>Please do not include passport numbers, identification numbers, or confidential documents.</small><textarea name="outline" rows="4"/></label>
          <label className="mh7-ack"><input type="checkbox" required/><span>Sending an enquiry does not create a lawyer-client relationship.</span></label>
          <button type="submit">Request a conversation <Arrow/></button>
          {demoMessage && <p className="mh7-demo-message" role="status">This is a portfolio demonstration. Your enquiry has not been sent.</p>}
        </form>
      </section>
    </main>

    <footer className="mh7-footer">
      <p>Maple &amp; Harbour and Alex Morgan are fictional. This website concept was created by Magneo and does not offer legal services. Imagery is illustrative, and the form does not send enquiries.</p>
      <div><a href="/portfolio/">Back to portfolio</a><a href="#mh7-top">Back to top ↑</a></div>
    </footer>
  </div>;
}

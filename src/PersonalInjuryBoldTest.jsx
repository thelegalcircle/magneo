import { useEffect, useState } from 'react';
import './styles/legal-concept-notice.css';
import LegalConceptNotice from './LegalConceptNotice.jsx';

const cases = [
  ['01', 'Motor vehicle collisions', 'Injuries involving cars, motorcycles, pedestrians, cyclists, and rideshare vehicles.'],
  ['02', 'Catastrophic injuries', 'Life-changing injuries involving the brain, spinal cord, amputation, or serious orthopaedic damage.'],
  ['03', 'Slip, trip & property injuries', 'Injuries involving unsafe property conditions or inadequate maintenance.'],
  ['04', 'Wrongful death', 'Guidance for families exploring their options after a preventable death.'],
];

const steps = [
  ['01', 'Tell us what happened', 'Share the basics and the questions you want answered.'],
  ['02', 'Understand your options', 'We discuss whether we can help, the proposed fees, and possible next steps.'],
  ['03', 'Decide what comes next', 'If we agree to work together, we explain how your claim will be handled and how we will keep you informed.'],
];

const supportItems = [
  ['Insurance communication', 'Handle claim-related correspondence and explain questions or requests from the insurer.'],
  ['Documents and evidence', 'Identify the records and other information needed to assess and prepare your claim.'],
  ['The impact of your injury', 'Understand how the injury affects your work, daily life, and future needs.'],
];

// Populate only with purchasing-firm details that have been supplied and verified.
const firmDetails = {
  lawyerName: '',
  lawyerPhotograph: '',
  verifiedExperience: '',
  credentials: '',
  matterHandling: '',
  serviceArea: '',
  meetingFormats: '',
  languages: '',
  intakeHours: '',
  responseExpectations: '',
};

function Mark(){ return <span aria-hidden="true">↗</span>; }

export default function PersonalInjuryBoldTest(){
  const [sent, setSent] = useState(false);
  const [contactMethod, setContactMethod] = useState('none');

  useEffect(() => {
    document.title = 'Arden Vale Injury Law - Modern PI Lawyer Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional, modern personal injury lawyer landing page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-bold/';
  }, []);

  return <div className="av2 av2-bold-test">
    <LegalConceptNotice/>
    <header className="av2-nav">
      <a href="/portfolio/" className="av2-logo" aria-label="Back to portfolio"><b aria-hidden="true">←</b><span>BACK TO PORTFOLIO</span></a>
      <nav aria-label="Primary navigation"><a href="#av2-cases">Cases</a><a href="#av2-process">Process</a><a href="#av2-lawyer">Lawyer</a><a href="#av2-faq">FAQ</a></nav>
      <a className="av2-nav-cta" href="#av2-consult">Free consultation <Mark/></a>
    </header>

    <main id="av2-top">
      <section className="av2-hero">
        <div className="av2-hero-copy">
          <div className="av2-status"><i/> Toronto personal injury law</div>
          <h1>After an injury,<br/><em>know where you stand.</em></h1>
          <p>Questions about insurance, missed work, or what comes next? We explain your options and help you decide whether to pursue a claim.</p>
          <div className="av2-hero-actions"><a href="#av2-consult">Talk about your injury <Mark/></a><a href="#av2-process">See how it works ↓</a></div>
        </div>
        <div className="av2-portrait">
          <img src="/pi-lawyer-hero-generated.png" alt="Fictional attorney Maya Arden in a modern law office"/>
          <div className="av2-name"><small>Lead counsel</small><strong>Maya<br/>Arden</strong><span>Trial lawyer · Ontario</span></div>
          <div className="av2-orbit">AV</div>
        </div>
        <div className="av2-quick-form">
          <span className="av2-label">Free initial assessment</span><h2>Do I have<br/>a claim?</h2><p>You do not need to know before contacting us. Share a few details so we can discuss whether we may be able to help.</p>
          <a href="#av2-consult">Request a free assessment <Mark/></a><small>A few details are enough to start.</small>
        </div>
      </section>

      <section className="av2-support" aria-labelledby="av2-support-heading">
        {/* Internal implementation note: these illustrative service descriptions must be confirmed by a purchasing firm before live use. */}
        <div className="av2-support-head"><span className="av2-label">Practical support</span><h2 id="av2-support-heading">Your claim.<br/>Practical support.</h2><p>If we agree to represent you, we explain what we will handle and what we will need from you.</p></div>
        <div className="av2-support-grid">{supportItems.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="av2-cases" id="av2-cases">
        <div className="av2-head"><span className="av2-label">01 / Cases we handle</span><h2>Serious injury.<br/>Practical legal help.</h2><p>Explore the injury matters we handle. If you are unsure whether your situation fits, contact us to ask.</p></div>
        <div className="av2-case-grid">{cases.map(([n,title,text])=><a href="#av2-consult" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><small>Ask about your situation</small><b><Mark/></b></a>)}</div>
      </section>

      <section className="av2-lawyer" id="av2-lawyer">
        <div className="av2-lawyer-photo"><img src={firmDetails.lawyerPhotograph || '/pi-lawyer-hero-generated.png'} alt={firmDetails.lawyerName ? `${firmDetails.lawyerName}, lawyer` : 'Maya Arden, fictional lead counsel'}/><span>CALM IN THE ROOM.<br/>RELENTLESS ON THE FILE.</span></div>
        <div className="av2-lawyer-copy"><span className="av2-label">02 / Your lawyer · Fictional profile</span><blockquote>“You deserve straight answers and a clear understanding of your options.”</blockquote><p>We start by listening to what happened and what concerns you most. Then we explain your options, answer your questions, and discuss the next steps in plain language.</p>{Object.entries({Name:firmDetails.lawyerName,Experience:firmDetails.verifiedExperience,Credentials:firmDetails.credentials,'Matter handling and updates':firmDetails.matterHandling}).some(([,value])=>value) && <dl className="av2-firm-details">{Object.entries({Name:firmDetails.lawyerName,Experience:firmDetails.verifiedExperience,Credentials:firmDetails.credentials,'Matter handling and updates':firmDetails.matterHandling}).filter(([,value])=>value).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}<div className="av2-mini-proof"><div><b>Clear advice</b><span>Understand your options</span></div><div><b>Personal attention</b><span>Discuss your concerns</span></div></div></div>
      </section>

      <section className="av2-process" id="av2-process">
        <div className="av2-head av2-head-light"><span className="av2-label">03 / What happens next</span><h2>Know your options.<br/>Choose your next step.</h2></div>
        <div className="av2-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="av2-faq" id="av2-faq">
        <div><span className="av2-label">04 / Good to know</span><h2>Answers before<br/>you get in touch.</h2></div>
        <div className="av2-faq-list">
          <details open><summary>How much does a consultation cost?<span>+</span></summary><p>Your initial assessment is free. Before you decide whether to hire us, we explain the proposed legal fees, expenses, applicable taxes, and when payments may be required. You can review the written terms and ask questions before deciding.</p></details>
          <details><summary>How long do I have to start a claim?<span>+</span></summary><p>Limitation periods and notice deadlines vary. Some can be short, especially where a municipality or public body is involved. Get advice promptly.</p></details>
          <details><summary>Will my case go to court?<span>+</span></summary><p>Whether a matter goes to court depends on its circumstances. We explain the available options and advise you about any settlement offer so you can make an informed decision.</p></details>
          <details><summary>What should I bring to the first call?<span>+</span></summary><p>If you have them, keep the incident date, photographs, insurance details, and any insurer correspondence nearby. You do not need to gather every document before making an initial enquiry.</p></details>
          <details><summary>Can a family member help me make an enquiry?<span>+</span></summary><p>If you are helping someone who has been injured, you can ask the firm how to arrange an initial conversation. Before discussing personal information or taking instructions, the firm will need to confirm who it can speak with and any permission required.</p></details>
          <details><summary>What if travelling to an office is difficult?<span>+</span></summary><p>Mention any travel or accessibility needs when you enquire. Ask what meeting arrangements are available before booking an appointment.</p></details>
        </div>
      </section>

      <section className="av2-consult" id="av2-consult">
        <div className="av2-consult-title"><span className="av2-label">05 / Free confidential consultation</span><h2>Tell us what happened.<br/>Start with what you know.</h2><p>A few details are enough to begin. Share your question and how you would like to be contacted.</p><div className="av2-assessment"><strong>Your initial assessment</strong><ul><li>Discuss what happened and the questions you have.</li><li>Explore whether the firm may be able to help.</li><li>Understand proposed next steps and fees before deciding whether to hire the firm.</li></ul><p>The initial assessment is free. There is no obligation to hire the firm.</p></div>{Object.entries({'Service area':firmDetails.serviceArea,'Meeting formats':firmDetails.meetingFormats,Languages:firmDetails.languages,'Intake hours':firmDetails.intakeHours,'Response expectations':firmDetails.responseExpectations}).some(([,value])=>value) && <dl className="av2-firm-details av2-contact-details">{Object.entries({'Service area':firmDetails.serviceArea,'Meeting formats':firmDetails.meetingFormats,Languages:firmDetails.languages,'Intake hours':firmDetails.intakeHours,'Response expectations':firmDetails.responseExpectations}).filter(([,value])=>value).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}</div>
        <form onSubmit={(e)=>{e.preventDefault(); const contact=e.currentTarget.elements.contact; const value=contact.value.trim(); contact.setCustomValidity(contactMethod==='phone' && !/^[+\d][\d\s().-]{6,}$/.test(value)?'Please provide a phone number.':contactMethod==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)?'Please provide an email address.':''); if(!e.currentTarget.reportValidity()) return; setSent(true)}}>
          {sent ? <div className="av2-success" role="status"><b>✓</b><h3>This is a demonstration form.</h3><p>No enquiry has been sent.</p><button type="button" onClick={()=>setSent(false)}>Back to form</button></div> : <>
            <p className="concept-demo-note">Demonstration form - nothing is sent or stored. Use example details only; this does not contact a lawyer.</p>
            <label><span>01 · Full name</span><input required placeholder="Your name" autoComplete="name"/></label>
            <label><span>02 · Phone or email</span><input name="contact" required placeholder="How should we reach you?" onInput={(e)=>e.currentTarget.setCustomValidity('')}/></label>
            <label><span>03 · Preferred contact method (optional)</span><select value={contactMethod} onChange={(e)=>{setContactMethod(e.target.value); e.currentTarget.form.elements.contact.setCustomValidity('')}}><option value="none">No preference</option><option value="phone">Phone</option><option value="email">Email</option></select><small className="av2-field-note">Provide the phone number or email address you would like us to use.</small></label>
            <label><span>04 · Briefly, what happened?</span><textarea required rows="4" placeholder="A few details are enough to start."/><small className="av2-field-note">Please do not include medical records, identification numbers, or detailed confidential information.</small></label>
            <label className="av2-check"><input type="checkbox" required/><span>I understand this form does not create a lawyer-client relationship.</span></label>
            <button type="submit">Request my consultation <Mark/></button><small>Demo only · Information is not sent or stored.</small>
          </>}
        </form>
      </section>
    </main>

    <footer className="av2-footer"><div className="av2-logo"><b>AV</b><span>ARDEN VALE<small>INJURY LAW</small></span></div><p>Fictional law firm and lawyer concept created as a design demonstration for Magneo. Names, identity, credentials, practice information, and service details are illustrative only.</p><a href="#av2-top">Back to top ↑</a></footer>
    <div className="av2-mobile"><a href="#av2-consult">Free consultation</a></div>
  </div>;
}

import { useEffect, useState } from 'react';
import './styles/legal-concept-notice.css';
import LegalConceptNotice from './LegalConceptNotice.jsx';

const practiceAreas = [
  ['01', 'Motor vehicle collisions', 'Injuries involving cars, motorcycles, pedestrians, cyclists, and rideshare vehicles.'],
  ['02', 'Catastrophic injuries', 'Life-changing injuries involving the brain, spinal cord, amputation, or serious orthopaedic damage.'],
  ['03', 'Slip, trip & property injuries', 'Injuries involving unsafe property conditions or inadequate maintenance.'],
  ['04', 'Wrongful death', 'Guidance for families exploring their options after a preventable death.'],
];

const steps = [
  ['01', 'Tell us what happened', 'Share a few details about your injury and the questions you have.'],
  ['02', 'Understand your options', 'We explain whether we may be able to help, what the next steps could involve, and how fees would work.'],
  ['03', 'Decide whether to move forward', 'If we agree to work together, we explain the plan for your claim and how we will keep you informed.'],
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

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function PersonalInjuryClassic(){
  const [sent, setSent] = useState(false);
  const [contactMethod, setContactMethod] = useState('none');
  useEffect(() => {
    document.title = 'Arden Vale Injury Law | Fictional PI Lawyer Website Concept';
    const description = 'A fictional, conversion-focused personal injury lawyer landing page concept created by Magneo.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-classic/';
  }, []);

  return <div className="avalon-law avalon-law-classic">
    <LegalConceptNotice/>
    <header className="al-nav">
      <a className="al-brand" href="/portfolio/" aria-label="Back to portfolio"><i aria-hidden="true">←</i><span>Back to portfolio</span></a>
      <nav aria-label="Primary navigation">
        <a href="#cases">Cases we handle</a><a href="#approach">Our approach</a><a href="#lawyer">Your lawyer</a><a href="#faq">FAQ</a>
      </nav>
      <div className="al-nav-actions"><a className="al-btn al-btn-small" href="#consultation">Free consultation <Arrow/></a></div>
    </header>

    <main id="top" className="al-main">
      <section className="al-hero">
        <div className="al-hero-copy">
          <div className="al-eyebrow"><span/> Toronto personal injury law</div>
          <h1>Injured and unsure<br/>what comes <em>next?</em></h1>
          <p className="al-lead">After a serious injury, an insurance claim can feel overwhelming. We explain your options, what pursuing a claim may involve, and the next steps to consider.</p>
          <div className="al-actions"><a className="al-btn" href="#consultation">Tell us what happened <Arrow/></a><a className="al-text-link" href="#cases">See how we can help</a></div>
          <div className="al-assurance"><span><b>Free</b> initial assessment</span><span><b>Clear</b> next steps</span><span><b>Personal</b> attention</span></div>
        </div>
        <div className="al-hero-media">
          <img src="/pi-lawyer-hero-generated.png" alt="Fictional attorney Maya Arden in a modern law office"/>
          <div className="al-profile-card"><small>Lead counsel</small><strong>Maya Arden</strong><span>Trial lawyer · Called to the Ontario Bar</span></div>
          <div className="al-availability"><i/> Start with a free case assessment</div>
        </div>
      </section>

      <section className="al-proof al-help-manage" aria-labelledby="help-manage-heading">
        {/* Internal implementation note: these illustrative service descriptions must be confirmed by a purchasing firm before live use. */}
        <div className="al-help-intro"><span className="al-kicker">Practical support</span><h2 id="help-manage-heading">What we help you manage.</h2><p>If we agree to represent you, we explain what we will handle and what we will need from you.</p></div>
        <div className="al-help-grid">{supportItems.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="al-section al-cases" id="cases">
        <div className="al-section-intro"><span className="al-kicker">Cases we handle</span><h2>Help after a<br/>serious injury.</h2><p>Explore the types of injury matters we handle. If you are unsure where your situation fits, you can start by asking us.</p></div>
        <div className="al-case-list">{practiceAreas.map(([n,title,text])=><a href="#consultation" className="al-case" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p><small>Ask about your situation</small></div><b><Arrow/></b></a>)}</div>
      </section>

      <section className="al-story" id="lawyer">
        <div className="al-story-quote"><span className="al-kicker">Meet your lawyer · Fictional profile</span>{firmDetails.lawyerPhotograph && <img className="al-firm-photo" src={firmDetails.lawyerPhotograph} alt={firmDetails.lawyerName || 'Lawyer portrait'}/>}<blockquote>“You deserve to understand your options and know what happens next.”</blockquote><p>A serious injury brings difficult questions. Our approach starts with listening to your concerns, explaining your options, and helping you understand each decision along the way.</p>{Object.entries({Name:firmDetails.lawyerName,Experience:firmDetails.verifiedExperience,Credentials:firmDetails.credentials,'Matter handling and updates':firmDetails.matterHandling}).some(([,value])=>value) && <dl className="al-firm-details">{Object.entries({Name:firmDetails.lawyerName,Experience:firmDetails.verifiedExperience,Credentials:firmDetails.credentials,'Matter handling and updates':firmDetails.matterHandling}).filter(([,value])=>value).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}<a className="al-light-link" href="#consultation">Request a consultation <Arrow/></a></div>
        <div className="al-story-panel"><small>Our promise</small><h3>Clarity at every turn.</h3><ul><li><span>01</span>Plain-language explanations of your options</li><li><span>02</span>Clear next steps for documents and preparation</li><li><span>03</span>An agreed approach to communication and updates</li><li><span>04</span>Advice to help you make informed decisions</li></ul></div>
      </section>

      <section className="al-section al-process" id="approach">
        <div className="al-section-intro"><span className="al-kicker">What happens next</span><h2>A clear path through<br/>an uncertain time.</h2></div>
        <div className="al-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="al-eligibility">
        <div><span className="al-kicker">Not sure if you have a case?</span><h2>You do not need all the answers<br/>before you contact us.</h2><p>Tell us what happened and what you are unsure about. An initial conversation can help you understand whether we may be able to assist and what to do next.</p></div>
        <a className="al-btn al-btn-cream" href="#consultation">Ask about your situation <Arrow/></a>
      </section>

      <section className="al-section al-faq" id="faq">
        <div className="al-section-intro"><span className="al-kicker">Common questions</span><h2>Answers before<br/>you call.</h2></div>
        <div className="al-faq-list">
          <details open><summary>How much does a consultation cost?<span>+</span></summary><p>Your initial case assessment is free. Before you decide whether to hire us, we explain the proposed legal fees, expenses, applicable taxes, and when payments may be required. You can review the written terms and ask questions before deciding.</p></details>
          <details><summary>How long do I have to start a claim?<span>+</span></summary><p>Limitation periods and notice deadlines vary. Some can be short, especially where a municipality or public body is involved. Get advice promptly.</p></details>
          <details><summary>Will my case go to court?<span>+</span></summary><p>Whether a matter goes to court depends on its circumstances. We explain the available options and advise you about any settlement offer so you can make an informed decision.</p></details>
          <details><summary>What should I bring to the first call?<span>+</span></summary><p>If you have them, keep the incident date, photographs, insurance details, and any insurer correspondence nearby. You do not need to gather every document before making an initial enquiry.</p></details>
          <details><summary>Can a family member help me make an enquiry?<span>+</span></summary><p>If you are helping someone who has been injured, you can ask the firm how to arrange an initial conversation. Before discussing personal information or taking instructions, the firm will need to confirm who it can speak with and any permission required.</p></details>
          <details><summary>What if travelling to an office is difficult?<span>+</span></summary><p>Mention any travel or accessibility needs when you enquire. Ask what meeting arrangements are available before booking an appointment.</p></details>
        </div>
      </section>

      <section className="al-consult" id="consultation">
        <div className="al-consult-copy"><span className="al-kicker">Free confidential consultation</span><h2>Tell us what<br/>happened.</h2><p>Share a few details and how you would like to be contacted. You do not need to write a complete account to make an initial enquiry.</p><div className="al-assessment"><strong>Your initial assessment</strong><ul><li>Discuss what happened and the questions you have.</li><li>Explore whether the firm may be able to help.</li><li>Understand proposed next steps and fees before deciding whether to hire the firm.</li></ul><p>The initial assessment is free. There is no obligation to hire the firm.</p></div>{Object.entries({'Service area':firmDetails.serviceArea,'Meeting formats':firmDetails.meetingFormats,Languages:firmDetails.languages,'Intake hours':firmDetails.intakeHours,'Response expectations':firmDetails.responseExpectations}).some(([,value])=>value) && <dl className="al-firm-details al-contact-details">{Object.entries({'Service area':firmDetails.serviceArea,'Meeting formats':firmDetails.meetingFormats,Languages:firmDetails.languages,'Intake hours':firmDetails.intakeHours,'Response expectations':firmDetails.responseExpectations}).filter(([,value])=>value).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}</div>
        <form className="al-form" onSubmit={(e)=>{e.preventDefault(); const contact=e.currentTarget.elements.contact; const value=contact.value.trim(); contact.setCustomValidity(contactMethod==='phone' && !/^[+\d][\d\s().-]{6,}$/.test(value)?'Please provide a phone number.':contactMethod==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)?'Please provide an email address.':''); if(!e.currentTarget.reportValidity()) return; setSent(true)}}>
          {sent ? <div className="al-success" role="status"><span>✓</span><h3>This is a demonstration form.</h3><p>No enquiry has been sent.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <>
            <p className="concept-demo-note">Demonstration form - nothing is sent or stored. Use example details only; this does not contact a lawyer.</p>
            <div className="al-form-grid"><label>Full name<input required placeholder="Your name" autoComplete="name"/></label><label>Phone or email<input name="contact" required placeholder="How should we reach you?" onInput={(e)=>e.currentTarget.setCustomValidity('')}/></label></div>
            <label>Preferred contact method (optional)<select value={contactMethod} onChange={(e)=>{setContactMethod(e.target.value); e.currentTarget.form.elements.contact.setCustomValidity('')}}><option value="none">No preference</option><option value="phone">Phone</option><option value="email">Email</option></select><span className="al-field-note">Provide the phone number or email address you would like us to use.</span></label>
            <label>Briefly, what happened?<textarea required rows="5" placeholder="A few details are enough to start."/><span className="al-field-note">Please do not include medical records, identification numbers, or detailed confidential information.</span></label>
            <label className="al-check"><input type="checkbox" required/><span>I understand that sending this form does not create a lawyer-client relationship.</span></label>
            <button className="al-btn" type="submit">Request my consultation <Arrow/></button><small>Demo only · Information is not sent or stored.</small>
          </>}
        </form>
      </section>
    </main>

    <footer className="al-footer"><div className="al-brand"><i>AV</i><span>Arden Vale<small>Injury Law</small></span></div><p>Fictional law firm and lawyer concept created as a design demonstration for Magneo. The name, identity, credentials, practice information, and service details are illustrative only.</p><div><a href="#top">Back to top ↑</a><span>Toronto, Ontario</span></div></footer>
    <div className="al-mobile-bar"><a href="#consultation">Request a consultation</a><a href="#consultation">Free consultation</a></div>
  </div>;
}

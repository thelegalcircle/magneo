import { useEffect, useState } from 'react';

const impacts = [
  ['01', 'Thinking and concentration', 'Changes in memory, concentration, and decision-making can affect everyday tasks and work.'],
  ['02', 'Daily life and relationships', 'Changes in mood, routines, and independence may affect both the injured person and those close to them.'],
  ['03', 'Work and finances', 'We look at how the injury has affected work, income, expenses, and support needs.'],
  ['04', 'Family and support', 'We consider the help family members provide and how daily responsibilities have changed.'],
];

const steps = [
  ['01', 'Talk through what happened', 'We discuss the incident, any known deadlines, and whether the matter fits our practice.'],
  ['02', 'Gather the relevant information', 'We explain which records and other information are needed and how they will help assess the claim.'],
  ['03', 'Review the options together', 'We explain the proposed next steps, costs, and decisions that need your instructions.'],
];

const evidence = [
  ['Medical records', 'Relevant treatment records and professional assessments.'],
  ['Daily life', 'Changes to routines, independence, and support needs.'],
  ['Work and finances', 'The effect on employment, income, and expenses.'],
  ['Family observations', 'What people close to you have noticed since the injury.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function BrainInjury3DTest(){
  const [sent, setSent] = useState(false);
  const [modelPlaying, setModelPlaying] = useState(false);

  useEffect(() => {
    document.title = 'Northline Brain Injury Law - Fictional Website Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional brain injury law-firm website concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/brain-injury-3d/';
  }, []);

  return <div className="nl4 nl4-revised">
    <header className="nl4-nav">
      <a href="/portfolio/" className="nl4-logo" aria-label="Back to portfolio"><i aria-hidden="true">←</i><span>BACK TO PORTFOLIO</span></a>
      <nav aria-label="Primary navigation"><a href="#nl4-injury">Life after injury</a><a href="#nl4-proof">How we help</a><a href="#nl4-process">What to expect</a><a href="#nl4-faq">FAQ</a></nav>
      <a href="#nl4-contact" className="nl4-nav-cta">Discuss your situation <Arrow/></a>
    </header>

    <main id="nl4-top">
      <section className="nl4-hero">
        <div className="nl4-hero-copy">
          <span className="nl4-eyebrow">Fictional website concept</span>
          <span className="nl4-location-line">Brain injury law · Toronto</span>
          <h1>Life after a brain injury.<br/><em>Understand your legal options.</em></h1>
          <p>If you or someone close to you has suffered a brain injury, we can help you understand the legal questions, the information needed, and the next steps.</p>
          <div className="nl4-actions"><a href="#nl4-contact">Discuss your situation <Arrow/></a></div>
        </div>
        <div className={`nl4-visual${modelPlaying ? ' is-playing' : ''}`} aria-label="Controllable 3D illustration representing brain injury">
          <div className="nl4-halo" aria-hidden="true"><span/><span/><span/></div>
          <div className="nl4-model-stage">
            <div className="nl4-model-orbit"><div className="nl4-model-tilt"><span className="nl4-model-shadow"/><img src="/brain-injury-head-3d-v2.png" alt="Fictional 3D head with both hands touching the temples"/></div></div>
          </div>
          <button className="nl4-motion-toggle" type="button" onClick={()=>setModelPlaying((playing)=>!playing)} aria-pressed={modelPlaying}>{modelPlaying ? 'Pause animation' : 'Play animation'}</button>
        </div>
        <div className="nl4-hero-side">
          <span>Start here</span><h2>Enquiring for someone close to you?</h2><p>You can make the first enquiry. Start with a general outline; you do not need to gather every document before getting in touch.</p><a href="#nl4-contact">Start an enquiry <Arrow/></a>
        </div>
      </section>

      <section className="nl4-strip" aria-label="Brain injury legal information"><span>DAILY LIFE</span><i>●</i><span>WORK AND FINANCES</span><i>●</i><span>FAMILY SUPPORT</span><i>●</i><span>LEGAL OPTIONS</span></section>

      <section className="nl4-injury" id="nl4-injury">
        <div className="nl4-title"><span>01 / Life after injury</span><h2>The damage may be<br/><em>invisible.</em><br/>The impact is not.</h2><p>A legal claim needs to explain how the injury has affected daily life, work, and support needs. Medical records are one part of that picture.</p></div>
        <div className="nl4-impact-grid">{impacts.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="nl4-proof" id="nl4-proof">
        <div className="nl4-proof-art"><div className="nl4-rings" aria-hidden="true"><i/><i/><i/><i/></div><b>EVIDENCE<br/>CREATES<br/>FOCUS</b></div>
        <div className="nl4-proof-copy"><span>02 / How we help</span><h2>How we help<br/>explain the impact.</h2><p>We bring together the available records and accounts of daily life to explain what has changed and what support may be needed.</p><ul>{evidence.map(([title,text])=><li key={title}><b>{title}</b><span>{text}</span></li>)}</ul></div>
      </section>

      <section className="nl4-process" id="nl4-process">
        <div className="nl4-section-head"><span>03 / What to expect</span><h2>From uncertainty<br/>to a clear legal plan.</h2></div>
        <div className="nl4-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><i><Arrow/></i></article>)}</div>
      </section>

      <section className="nl4-statement nl4-lawyer-intro">
        <div><span>Fictional lawyer profile</span><h2>Elena North</h2><p>Elena helps individuals and families understand the legal questions after a brain injury, the information needed, and the next steps.</p><a href="#nl4-contact">Start an enquiry <Arrow/></a></div>
        <img src="/pi-lawyer-hero-generated.png" alt="Elena North, a fictional lawyer featured in this website concept"/>
        <blockquote>“A person is more than a scan, a score, or a line in a medical chart.”</blockquote>
      </section>

      <section className="nl4-faq" id="nl4-faq">
        <div><span>04 / Before you enquire</span><h2>Questions<br/>families ask.</h2><p>If symptoms are new, severe, or worsening, seek medical attention immediately. This demonstration is legal marketing, not medical advice.</p></div>
        <div className="nl4-faq-list">
          <details open><summary>Can I enquire on behalf of a family member?<span aria-hidden="true"/></summary><p>Yes. You can make an initial enquiry for someone close to you. We will explain what permission or authority may be needed before discussing their information or taking instructions.</p></details>
          <details><summary>What if scans appear normal?<span aria-hidden="true"/></summary><p>Some symptoms may not be fully explained by routine imaging. A legal case considers the complete medical and functional evidence. Speak with qualified medical professionals about diagnosis and treatment.</p></details>
          <details><summary>How soon should we get legal advice?<span aria-hidden="true"/></summary><p>Deadlines and benefit applications can arise quickly. Early advice may help preserve evidence and prevent avoidable procedural problems.</p></details>
          <details><summary>How are fees explained?<span aria-hidden="true"/></summary><p>Before you decide whether to proceed, we explain the proposed fees, expenses, and payment responsibilities in writing.</p></details>
          <details><summary>Will the injured person have to go to court?<span aria-hidden="true"/></summary><p>Many matters resolve without a trial. A legal team can prepare the available evidence so any settlement decision is informed and voluntary.</p></details>
        </div>
      </section>

      <section className="nl4-contact" id="nl4-contact">
        <div className="nl4-contact-copy"><span>Initial enquiry</span><h2>Tell us how<br/>we can help.</h2><p>A general outline is enough to start. You can enquire for yourself or someone close to you.</p></div>
        <form onSubmit={(event)=>{event.preventDefault();setSent(true)}}>{sent ? <div className="nl4-success" role="status"><b>✓</b><h3>This is a demonstration.</h3><p>Your information has not been sent or retained.</p><button type="button" onClick={()=>setSent(false)}>Back to form</button></div> : <><label><span>Your name</span><input required autoComplete="name"/></label><label><span>Phone or email</span><input required/></label><label><span>Short outline - optional</span><small className="nl4-field-help">Please do not include medical records or confidential details.</small><textarea rows="5"/></label><label className="nl4-check"><input type="checkbox" required/><span>I understand this form does not create a lawyer-client relationship.</span></label><button type="submit">Request a conversation <Arrow/></button><small>Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small></>}</form>
      </section>
    </main>
    <footer className="nl4-footer"><div className="nl4-logo"><i>N</i><span>NORTHLINE<small>BRAIN INJURY LAW</small></span></div><p>Fictional law-firm concept and illustrative 3D imagery created for Magneo. Northline and Elena North are fictional. This page does not offer legal services, and its form does not send or retain information.</p><a href="#nl4-top">Back to top ↑</a></footer>
    <div className="nl4-mobile"><a href="#nl4-contact">Discuss your situation</a></div>
  </div>;
}

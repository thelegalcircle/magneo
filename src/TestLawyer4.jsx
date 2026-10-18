import { useEffect, useState } from 'react';

const impacts = [
  ['01', 'Cognition', 'Memory, focus, processing speed, judgment, and executive function can reshape daily life and work.'],
  ['02', 'Identity', 'Personality, mood, relationships, and independence may change in ways others cannot immediately see.'],
  ['03', 'Livelihood', 'Income loss, interrupted education, care needs, and future capacity require careful long-term evidence.'],
  ['04', 'Family', 'Brain injuries affect households. The legal strategy should account for caregivers and the support system.'],
];

const steps = [
  ['01', 'Stabilize the record', 'Preserve the incident evidence, benefit applications, medical timeline, and witness accounts.'],
  ['02', 'Understand the whole injury', 'Coordinate the medical, cognitive, vocational, financial, and family evidence.'],
  ['03', 'Build the future case', 'Measure long-term loss and prepare every claim as though it may need to be proven at trial.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer4(){
  const [sent, setSent] = useState(false);
  const [modelPaused, setModelPaused] = useState(false);
  useEffect(() => {
    document.title = 'Northline Brain Injury Law - Fictional PI Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional award-style serious brain injury law-firm landing-page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/brain-injury-3d/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer4 = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  return <div className="nl4">
    <header className="nl4-nav">
      <a href="#nl4-top" className="nl4-logo"><i>N</i><span>NORTHLINE<small>BRAIN INJURY LAW</small></span></a>
      <nav aria-label="Primary navigation"><a href="#nl4-injury">The injury</a><a href="#nl4-proof">Building proof</a><a href="#nl4-process">Your case</a><a href="#nl4-faq">FAQ</a></nav>
      <a href="tel:+14378731155" className="nl4-number"><small>24/7 confidential line</small>437 873 1155</a>
      <a href="#nl4-contact" className="nl4-nav-cta">Free consultation <Arrow/></a>
    </header>

    <main id="nl4-top">
      <section className="nl4-hero">
        <div className="nl4-hero-copy">
          <span className="nl4-eyebrow">Serious brain injury counsel · Toronto</span>
          <h1>A brain injury<br/>changes<br/><em>the map.</em></h1>
          <p>When the injury is complex and the future is uncertain, your legal team must see the whole person - not only the diagnosis.</p>
          <div className="nl4-actions"><a href="#nl4-contact">Tell us what changed <Arrow/></a><a href="tel:+14378731155">Call 437 873 1155</a></div>
        </div>
        <div className={`nl4-visual${modelPaused ? ' is-paused' : ''}`} aria-label="Animated head-only 3D portrait representing serious head pain">
          <div className="nl4-halo"><span/><span/><span/></div>
          <div className="nl4-model-stage" onPointerMove={(event)=>{
            const box = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty('--model-x', `${((event.clientX - box.left) / box.width - .5) * 10}deg`);
            event.currentTarget.style.setProperty('--model-y', `${((event.clientY - box.top) / box.height - .5) * -8}deg`);
          }} onPointerLeave={(event)=>{
            event.currentTarget.style.setProperty('--model-x', '0deg');
            event.currentTarget.style.setProperty('--model-y', '0deg');
          }}>
            <div className="nl4-model-orbit">
              <div className="nl4-model-tilt">
                <span className="nl4-model-shadow"/>
                <img src="/brain-injury-head-3d-v2.png" alt="Fictional 3D head with both hands touching the temples"/>
                <span className="nl4-model-sweep"/>
              </div>
            </div>
          </div>
          <div className="nl4-scan"><span>3D HEAD STUDY · LIVE</span><b>NEURAL IMPACT / VISIBLE + INVISIBLE</b></div>
          <button className="nl4-motion-toggle" type="button" onClick={()=>setModelPaused((paused)=>!paused)} aria-pressed={modelPaused}>{modelPaused ? 'Play motion' : 'Pause motion'}</button>
          <div className="nl4-coord">43.6532° N<br/>79.3832° W</div>
        </div>
        <div className="nl4-hero-side">
          <span>Start here</span><h2>Was someone seriously injured?</h2><p>A short confidential call can help protect evidence, benefit deadlines, and your options.</p><a href="#nl4-contact">Check the case <Arrow/></a><small>Free · No pressure · No upfront legal fee*</small>
        </div>
      </section>

      <section className="nl4-strip" aria-label="Firm commitments"><span>TRAUMATIC BRAIN INJURY</span><i>●</i><span>CONCUSSION & POST-CONCUSSION</span><i>●</i><span>NEUROLOGICAL IMPAIRMENT</span><i>●</i><span>CATASTROPHIC INJURY</span></section>

      <section className="nl4-injury" id="nl4-injury">
        <div className="nl4-title"><span>01 / The injury</span><h2>The damage may be<br/><em>invisible.</em><br/>The impact is not.</h2><p>A serious brain injury can affect every system around a person. The case must translate those changes into evidence an insurer, mediator, or court cannot overlook.</p></div>
        <div className="nl4-impact-grid">{impacts.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="nl4-proof" id="nl4-proof">
        <div className="nl4-proof-art"><div className="nl4-rings"><i/><i/><i/><i/></div><b>EVIDENCE<br/>CREATES<br/>FOCUS</b></div>
        <div className="nl4-proof-copy"><span>02 / Building proof</span><h2>One injury.<br/>Many forms<br/>of evidence.</h2><p>Strong brain-injury cases connect the clinical picture to the person’s real life before and after the incident.</p><ul><li><b>Medical</b><span>Neurology, rehabilitation, symptom history, and treatment trajectory</span></li><li><b>Functional</b><span>Daily routines, fatigue, cognition, relationships, and independence</span></li><li><b>Vocational</b><span>Work demands, accommodations, interrupted career, and earning capacity</span></li><li><b>Human</b><span>Family observations and the lived pattern behind the records</span></li></ul></div>
      </section>

      <section className="nl4-process" id="nl4-process">
        <div className="nl4-section-head"><span>03 / Your case</span><h2>From uncertainty<br/>to a clear legal plan.</h2></div>
        <div className="nl4-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><i><Arrow/></i></article>)}</div>
      </section>

      <section className="nl4-statement"><span>Our position</span><blockquote>“A person is more than a scan, a score, or a line in a medical chart.”</blockquote><p>Northline is a fictional specialist concept built around dignity, rigorous evidence, and direct communication with families navigating serious injury.</p></section>

      <section className="nl4-faq" id="nl4-faq">
        <div><span>04 / Before you call</span><h2>Questions<br/>families ask.</h2><p>If symptoms are new, severe, or worsening, seek medical attention immediately. This demonstration is legal marketing, not medical advice.</p></div>
        <div className="nl4-faq-list"><details open><summary>What if scans appear normal?<span>+</span></summary><p>Some symptoms may not be fully explained by routine imaging. A legal case considers the complete medical and functional evidence. Speak with qualified medical professionals about diagnosis and treatment.</p></details><details><summary>How soon should we get legal advice?<span>+</span></summary><p>Deadlines and benefit applications can arise quickly. Early advice may help preserve evidence and prevent avoidable procedural problems.</p></details><details><summary>Who pays the legal fees?<span>+</span></summary><p>The initial assessment is free. If the fictional firm accepted a case on contingency, all fees and disbursements would be explained in a written retainer before the client decided.</p></details><details><summary>Will the injured person have to go to court?<span>+</span></summary><p>Many matters resolve without a trial. A strong legal team still prepares the evidence carefully so any settlement decision is informed and voluntary.</p></details></div>
      </section>

      <section className="nl4-contact" id="nl4-contact">
        <div className="nl4-contact-copy"><span>Free confidential consultation</span><h2>Tell us what<br/>changed.</h2><p>You do not need every document or answer. A few facts are enough to begin the conversation.</p><a href="tel:+14378731155">24/7 · 437 873 1155</a></div>
        <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>{sent ? <div className="nl4-success" role="status"><b>✓</b><h3>Demo request ready.</h3><p>This fictional concept does not send or store information. A live firm would use a secure intake and conflicts-review process.</p><button type="button" onClick={()=>setSent(false)}>Back to form</button></div> : <><label><span>Full name</span><input required autoComplete="name"/></label><label><span>Phone or email</span><input required/></label><label><span>What changed after the injury?</span><textarea required rows="5"/></label><label className="nl4-check"><input type="checkbox" required/><span>I understand this form does not create a lawyer-client relationship.</span></label><button type="submit">Request a consultation <Arrow/></button><small>Demo only · Information is not sent or stored.</small></>}</form>
      </section>
    </main>
    <footer className="nl4-footer"><div className="nl4-logo"><i>N</i><span>NORTHLINE<small>BRAIN INJURY LAW</small></span></div><p>Fictional law-firm concept and illustrative 3D imagery created for Magneo. Names, services, credentials, and contact information are not real.</p><a href="#nl4-top">Back to top ↑</a></footer>
    <div className="nl4-mobile"><a href="tel:+14378731155">Call 24/7</a><a href="#nl4-contact">Free consultation</a></div>
  </div>;
}

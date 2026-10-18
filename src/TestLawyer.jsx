import { useEffect, useState } from 'react';

const practiceAreas = [
  ['01', 'Motor vehicle collisions', 'Car, motorcycle, pedestrian, cyclist, and rideshare injury claims.'],
  ['02', 'Catastrophic injuries', 'Life-changing brain, spinal, amputation, and serious orthopaedic injuries.'],
  ['03', 'Slip, trip & property injuries', 'Unsafe premises, negligent maintenance, and occupier-liability claims.'],
  ['04', 'Wrongful death', 'Clear, compassionate guidance for families after a preventable loss.'],
];

const steps = [
  ['01', 'Tell us what happened', 'A confidential conversation with a member of the legal team - not a call centre.'],
  ['02', 'Get a clear case plan', 'We explain deadlines, evidence, benefits, fees, and the next best action in plain language.'],
  ['03', 'Focus on your recovery', 'We manage insurers, records, experts, negotiations, and litigation while keeping you informed.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer(){
  const [sent, setSent] = useState(false);
  useEffect(() => {
    document.title = 'Arden Vale Injury Law | Fictional PI Lawyer Website Concept';
    const description = 'A fictional, conversion-focused personal injury lawyer landing page concept created by Magneo.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-classic/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  return <div className="avalon-law">
    <header className="al-nav">
      <a className="al-brand" href="#top" aria-label="Arden Vale Injury Law home"><i>AV</i><span>Arden Vale<small>Injury Law</small></span></a>
      <nav aria-label="Primary navigation">
        <a href="#cases">Cases we handle</a><a href="#approach">Our approach</a><a href="#lawyer">Your lawyer</a><a href="#faq">FAQ</a>
      </nav>
      <div className="al-nav-actions"><a className="al-phone" href="tel:+14378731155">437 873 1155</a><a className="al-btn al-btn-small" href="#consultation">Free consultation <Arrow/></a></div>
    </header>

    <main id="top" className="al-main">
      <section className="al-hero">
        <div className="al-hero-copy">
          <div className="al-eyebrow"><span/> Toronto personal injury counsel · Available 24/7</div>
          <h1>Your recovery<br/>deserves <em>leverage.</em></h1>
          <p className="al-lead">Serious injuries change everything. We bring calm, clarity, and determined advocacy to your claim - starting with one confidential conversation.</p>
          <div className="al-actions"><a className="al-btn" href="#consultation">Tell us what happened <Arrow/></a><a className="al-text-link" href="tel:+14378731155">Call now: 437 873 1155</a></div>
          <div className="al-assurance"><span><b>No fee</b> unless we recover*</span><span><b>Free</b> case assessment</span><span><b>Direct</b> lawyer access</span></div>
        </div>
        <div className="al-hero-media">
          <img src="/pi-lawyer-hero-generated.png" alt="Fictional attorney Maya Arden in a modern law office"/>
          <div className="al-profile-card"><small>Lead counsel</small><strong>Maya Arden</strong><span>Trial lawyer · Called to the Ontario Bar</span></div>
          <div className="al-availability"><i/> Now accepting select serious-injury files</div>
        </div>
      </section>

      <section className="al-proof" aria-label="Firm commitments">
        <div><strong>24/7</strong><span>Confidential intake</span></div><div><strong>15 min</strong><span>Daytime response target</span></div><div><strong>1:1</strong><span>Lawyer-led strategy</span></div><div><strong>$0</strong><span>Upfront legal fee*</span></div>
      </section>

      <section className="al-section al-cases" id="cases">
        <div className="al-section-intro"><span className="al-kicker">Cases we handle</span><h2>Built for the cases that<br/>change a life.</h2><p>We deliberately limit our caseload so every client receives focused strategy, responsive communication, and careful preparation.</p></div>
        <div className="al-case-list">{practiceAreas.map(([n,title,text])=><a href="#consultation" className="al-case" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><b><Arrow/></b></a>)}</div>
      </section>

      <section className="al-story" id="lawyer">
        <div className="al-story-quote"><span className="al-kicker">Why Arden Vale</span><blockquote>“You should never feel like a file number - especially when your future is on the line.”</blockquote><p>Our fictional founding lawyer, Maya Arden, created Arden Vale around a simple idea: excellent advocacy should feel clear, human, and relentlessly prepared.</p><a className="al-light-link" href="#consultation">Meet Maya <Arrow/></a></div>
        <div className="al-story-panel"><small>Our promise</small><h3>Clarity at every turn.</h3><ul><li><span>01</span>Plain-language advice and honest risk assessment</li><li><span>02</span>A documented plan for evidence, treatment, and deadlines</li><li><span>03</span>Proactive updates before you need to ask</li><li><span>04</span>Settlement decisions stay in your hands</li></ul></div>
      </section>

      <section className="al-section al-process" id="approach">
        <div className="al-section-intro"><span className="al-kicker">What happens next</span><h2>A clear path through<br/>an uncertain time.</h2></div>
        <div className="al-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="al-eligibility">
        <div><span className="al-kicker">Not sure if you have a case?</span><h2>Start with the facts.<br/>We’ll help with the rest.</h2><p>Deadlines can apply quickly. A short call can help preserve evidence and clarify the benefits or compensation that may be available.</p></div>
        <a className="al-btn al-btn-cream" href="#consultation">Check my case <Arrow/></a>
      </section>

      <section className="al-section al-faq" id="faq">
        <div className="al-section-intro"><span className="al-kicker">Common questions</span><h2>Answers before<br/>you call.</h2></div>
        <div className="al-faq-list">
          <details open><summary>How much does a consultation cost?<span>+</span></summary><p>The initial case assessment is free. If we accept the matter on contingency, the written retainer explains fees and disbursements before you decide.</p></details>
          <details><summary>How long do I have to start a claim?<span>+</span></summary><p>Limitation periods and notice deadlines vary. Some can be short, especially where a municipality or public body is involved. Get advice promptly.</p></details>
          <details><summary>Will my case go to court?<span>+</span></summary><p>Many claims resolve without trial, but strong outcomes begin with trial-ready preparation. We discuss every offer and you decide whether to settle.</p></details>
          <details><summary>What should I bring to the first call?<span>+</span></summary><p>If available, bring the incident date, photos, insurance information, medical providers, and any communication from an insurer. Do not delay if you lack documents.</p></details>
        </div>
      </section>

      <section className="al-consult" id="consultation">
        <div className="al-consult-copy"><span className="al-kicker">Free confidential consultation</span><h2>Tell us what<br/>happened.</h2><p>No pressure. No legal jargon. Just a focused conversation about what comes next.</p><a href="tel:+14378731155">Prefer to speak now?<br/><strong>437 873 1155</strong></a></div>
        <form className="al-form" onSubmit={(e)=>{e.preventDefault(); setSent(true)}}>
          {sent ? <div className="al-success" role="status"><span>✓</span><h3>Your demo request is ready.</h3><p>This fictional template does not transmit information. On a live firm site, the intake would be routed securely and a response expectation shown here.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <>
            <div className="al-form-grid"><label>Full name<input required placeholder="Your name" autoComplete="name"/></label><label>Phone or email<input required placeholder="How should we reach you?"/></label></div>
            <label>What happened?<textarea required rows="5" placeholder="A few details are enough to start…"/></label>
            <label className="al-check"><input type="checkbox" required/><span>I understand that sending this form does not create a lawyer-client relationship.</span></label>
            <button className="al-btn" type="submit">Request my consultation <Arrow/></button><small>Demo only · Your information is not sent or stored.</small>
          </>}
        </form>
      </section>
    </main>

    <footer className="al-footer"><div className="al-brand"><i>AV</i><span>Arden Vale<small>Injury Law</small></span></div><p>Fictional law firm concept created as a conversion-focused design demonstration for Magneo. Names, credentials, phone number, and services are illustrative only.</p><div><a href="#top">Back to top ↑</a><span>Toronto, Ontario</span></div></footer>
    <div className="al-mobile-bar"><a href="tel:+14378731155">Call now</a><a href="#consultation">Free consultation</a></div>
  </div>;
}

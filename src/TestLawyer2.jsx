import { useEffect, useState } from 'react';

const cases = [
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

function Mark(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer2(){
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Arden Vale Injury Law - Modern PI Lawyer Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional, modern personal injury lawyer landing page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-bold/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer2 = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  return <div className="av2">
    <header className="av2-nav">
      <a href="#av2-top" className="av2-logo" aria-label="Arden Vale Injury Law home"><b>AV</b><span>ARDEN VALE<small>INJURY LAW</small></span></a>
      <nav aria-label="Primary navigation"><a href="#av2-cases">Cases</a><a href="#av2-process">Process</a><a href="#av2-lawyer">Lawyer</a><a href="#av2-faq">FAQ</a></nav>
      <a className="av2-call" href="tel:+14378731155"><span>24/7 line</span><b>437 873 1155</b></a>
      <a className="av2-nav-cta" href="#av2-consult">Free consultation <Mark/></a>
    </header>

    <main id="av2-top">
      <section className="av2-hero">
        <div className="av2-hero-copy">
          <div className="av2-status"><i/> Now accepting select serious-injury files</div>
          <h1>Your recovery<br/>deserves<br/><em>leverage.</em></h1>
          <p>Serious injuries change everything. We bring calm, clarity, and determined advocacy to your claim - starting with one confidential conversation.</p>
          <div className="av2-hero-actions"><a href="#av2-consult">Tell us what happened <Mark/></a><a href="#av2-process">See how it works ↓</a></div>
        </div>
        <div className="av2-portrait">
          <img src="/pi-lawyer-hero-generated.png" alt="Fictional attorney Maya Arden in a modern law office"/>
          <div className="av2-name"><small>Lead counsel</small><strong>Maya<br/>Arden</strong><span>Trial lawyer · Ontario</span></div>
          <div className="av2-orbit">AV</div>
        </div>
        <div className="av2-quick-form">
          <span className="av2-label">Free case check</span><h2>Do I have<br/>a claim?</h2><p>Tell us the basics. We’ll explain the next best step.</p>
          <a href="#av2-consult">Check my case <Mark/></a><small>Free · Confidential · No pressure</small>
        </div>
      </section>

      <div className="av2-marquee" aria-label="Firm commitments"><div><span>No fee unless we recover*</span><i>✦</i><span>Free case assessment</span><i>✦</i><span>Direct lawyer access</span><i>✦</i><span>Available 24/7</span><i>✦</i><span>No fee unless we recover*</span><i>✦</i></div></div>

      <section className="av2-cases" id="av2-cases">
        <div className="av2-head"><span className="av2-label">01 / Cases we handle</span><h2>Built for the cases<br/>that change a life.</h2><p>We deliberately limit our caseload so every client receives focused strategy, responsive communication, and careful preparation.</p></div>
        <div className="av2-case-grid">{cases.map(([n,title,text])=><a href="#av2-consult" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b><Mark/></b></a>)}</div>
      </section>

      <section className="av2-lawyer" id="av2-lawyer">
        <div className="av2-lawyer-photo"><img src="/pi-lawyer-hero-generated.png" alt="Maya Arden, fictional lead counsel"/><span>CALM IN THE ROOM.<br/>RELENTLESS ON THE FILE.</span></div>
        <div className="av2-lawyer-copy"><span className="av2-label">02 / Your lawyer</span><blockquote>“You should never feel like a file number - especially when your future is on the line.”</blockquote><p>Our fictional founding lawyer, Maya Arden, created Arden Vale around a simple idea: excellent advocacy should feel clear, human, and relentlessly prepared.</p><div className="av2-mini-proof"><div><b>1:1</b><span>Lawyer-led strategy</span></div><div><b>15 min</b><span>Daytime response target</span></div></div></div>
      </section>

      <section className="av2-process" id="av2-process">
        <div className="av2-head av2-head-light"><span className="av2-label">03 / What happens next</span><h2>A clear path through<br/>an uncertain time.</h2></div>
        <div className="av2-steps">{steps.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="av2-faq" id="av2-faq">
        <div><span className="av2-label">04 / Good to know</span><h2>Answers<br/>before<br/>you call.</h2></div>
        <div className="av2-faq-list">
          <details open><summary>How much does a consultation cost?<span>+</span></summary><p>The initial case assessment is free. If we accept the matter on contingency, the written retainer explains fees and disbursements before you decide.</p></details>
          <details><summary>How long do I have to start a claim?<span>+</span></summary><p>Limitation periods and notice deadlines vary. Some can be short, especially where a municipality or public body is involved. Get advice promptly.</p></details>
          <details><summary>Will my case go to court?<span>+</span></summary><p>Many claims resolve without trial, but strong outcomes begin with trial-ready preparation. We discuss every offer and you decide whether to settle.</p></details>
          <details><summary>What should I bring to the first call?<span>+</span></summary><p>If available, bring the incident date, photos, insurance information, medical providers, and any communication from an insurer. Do not delay if you lack documents.</p></details>
        </div>
      </section>

      <section className="av2-consult" id="av2-consult">
        <div className="av2-consult-title"><span className="av2-label">05 / Free confidential consultation</span><h2>Let’s start<br/>with the facts.</h2><p>No pressure. No legal jargon. Just a focused conversation about what comes next.</p><a href="tel:+14378731155">Call now · 437 873 1155</a></div>
        <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
          {sent ? <div className="av2-success" role="status"><b>✓</b><h3>Demo request ready.</h3><p>This fictional concept does not transmit information. A real intake would be securely routed to the legal team.</p><button type="button" onClick={()=>setSent(false)}>Back to form</button></div> : <>
            <label><span>01 · Full name</span><input required placeholder="Your name" autoComplete="name"/></label>
            <label><span>02 · Phone or email</span><input required placeholder="How should we reach you?"/></label>
            <label><span>03 · What happened?</span><textarea required rows="4" placeholder="A few details are enough to start…"/></label>
            <label className="av2-check"><input type="checkbox" required/><span>I understand this form does not create a lawyer-client relationship.</span></label>
            <button type="submit">Request my consultation <Mark/></button><small>Demo only · Information is not sent or stored.</small>
          </>}
        </form>
      </section>
    </main>

    <footer className="av2-footer"><div className="av2-logo"><b>AV</b><span>ARDEN VALE<small>INJURY LAW</small></span></div><p>Fictional law-firm concept created as a conversion-focused design demonstration for Magneo. Names, credentials, number, and services are illustrative only.</p><a href="#av2-top">Back to top ↑</a></footer>
    <div className="av2-mobile"><a href="tel:+14378731155">Call 24/7</a><a href="#av2-consult">Free case check</a></div>
  </div>;
}

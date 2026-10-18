import { useEffect, useState } from 'react';

const capabilities = [
  ['01', 'Commercial disputes', 'Contract breaches, partnership conflicts, shareholder remedies, and urgent business disputes.'],
  ['02', 'Injunctions & emergency relief', 'Rapid strategy where assets, evidence, reputation, or business continuity are at risk.'],
  ['03', 'Regulatory investigations', 'Clear counsel through enforcement, professional discipline, and complex regulatory proceedings.'],
  ['04', 'Appeals & judicial review', 'Focused written and oral advocacy when the record - and the standard of review - matters most.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer3(){
  const [sequence, setSequence] = useState(0);
  const [sent, setSent] = useState(false);
  const [heroSent, setHeroSent] = useState(false);

  useEffect(() => {
    document.title = 'Ashcroft Rowe Litigation - 3D Legal Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional, modern litigation law-firm landing-page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/litigation-editorial/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer3 = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  return <div className="lt3">
    <header className="lt3-nav">
      <a className="lt3-logo" href="#lt3-top"><b>A/R</b><span>ASHCROFT ROWE<small>TRIAL & APPELLATE COUNSEL</small></span></a>
      <nav aria-label="Primary navigation"><a href="#lt3-capabilities">Capabilities</a><a href="#lt3-method">Method</a><a href="#lt3-counsel">Counsel</a><a href="#lt3-contact">Contact</a></nav>
      <a className="lt3-phone" href="tel:+14378731155">Toronto · 437 873 1155</a>
      <a className="lt3-btn lt3-btn-dark" href="#lt3-contact">Discuss a matter <Arrow/></a>
    </header>

    <main id="lt3-top">
      <section className="lt3-hero">
        <div className="lt3-edition"><span>Litigation brief</span><b>Vol. 01 · Toronto</b><span>Fictional concept</span></div>
        <div className="lt3-hero-stage" key={sequence}>
          <p className="lt3-overline">Premium litigation counsel for complex matters</p>
          <h1><span>COMPLICATED</span><span>LEGAL</span><span className="lt3-cases-word">CASES</span></h1>
          <img className="lt3-web" src="/litigation-web-transparent.png" alt=""/>
          <img className="lt3-spider" src="/litigation-spider-transparent.png" alt=""/>
          <div className="lt3-stamp" aria-label="Solved">SOLVED</div>
          <div className="lt3-impact"/>
          <button className="lt3-replay" type="button" onClick={()=>setSequence((n)=>n+1)}>Replay opening ↻</button>
          <form className="lt3-hero-form" onSubmit={(e)=>{e.preventDefault();setHeroSent(true)}}>
            {heroSent ? <div className="lt3-hero-success" role="status"><span>INTAKE / RECEIVED</span><b>Thank you.</b><p>This design demonstration does not transmit or retain information.</p><button type="button" onClick={()=>setHeroSent(false)}>Return to form</button></div> : <>
              <div className="lt3-form-index"><span>Private intake</span><b>01 / 04</b></div>
              <h2>Start with the<br/><em>decisive fact.</em></h2>
              <div className="lt3-hero-fields"><label><span>Your name</span><input required autoComplete="name"/></label><label><span>Email or phone</span><input required autoComplete="email"/></label></div>
              <label><span>What kind of matter?</span><select defaultValue="" required><option value="" disabled>Select one</option><option>Commercial dispute</option><option>Emergency relief</option><option>Regulatory matter</option><option>Appeal or judicial review</option><option>Other complex matter</option></select></label>
              <label><span>One-sentence summary</span><textarea required rows="2"/></label>
              <button type="submit">Request a confidential call <Arrow/></button>
              <small>Demo only · No information is sent or stored.</small>
            </>}
          </form>
        </div>
        <div className="lt3-hero-foot">
          <p>Disputes are rarely simple. Strategy should be. We find the decisive fact, frame the strongest argument, and move with purpose.</p>
          <div><span>Commercial litigation</span><span>Emergency relief</span><span>Appeals</span><span>Regulatory defence</span></div>
          <a href="#lt3-contact">Bring us the problem <Arrow/></a>
        </div>
      </section>

      <section className="lt3-ticker" aria-label="Firm positioning"><span>THEORY OF THE CASE</span><i>◆</i><span>EVIDENCE BEFORE NOISE</span><i>◆</i><span>TRIAL-READY FROM DAY ONE</span><i>◆</i><span>DECISIVE ADVOCACY</span></section>

      <section className="lt3-capabilities" id="lt3-capabilities">
        <div className="lt3-section-head"><span>Section 01</span><h2>When the dispute<br/>becomes the business.</h2><p>We act in high-stakes matters where timing, reputation, and commercial judgment are as important as the law.</p></div>
        <div className="lt3-cap-grid">{capabilities.map(([n,title,text])=><a href="#lt3-contact" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b><Arrow/></b></a>)}</div>
      </section>

      <section className="lt3-brief" id="lt3-method">
        <div className="lt3-brief-title"><span>Section 02 · The method</span><h2>Reduce the noise.<br/><em>Reveal the leverage.</em></h2></div>
        <div className="lt3-columns"><p>Complex litigation creates volume: documents, personalities, competing narratives, procedural pressure. More information does not automatically create a stronger case.</p><p>Our work begins by isolating the issue that changes the outcome. We test the evidence against the remedy, expose the weak assumption, and build a theory a judge can understand and trust.</p><blockquote>“The strongest argument is not the loudest. It is the one the record makes inevitable.”</blockquote></div>
        <div className="lt3-rules"><article><b>01</b><h3>Diagnose</h3><p>Map the dispute, the evidence, the commercial objective, and the real pressure points.</p></article><article><b>02</b><h3>Design</h3><p>Build a disciplined theory of the case and sequence every procedural move around it.</p></article><article><b>03</b><h3>Decide</h3><p>Negotiate from readiness, litigate with precision, and keep the client in control of the decision.</p></article></div>
      </section>

      <section className="lt3-counsel" id="lt3-counsel">
        <div className="lt3-counsel-photo"><img src="/pi-lawyer-hero-generated.png" alt="Fictional litigation counsel Elena Rowe"/><div className="lt3-photo-code">AR / 01</div></div>
        <div className="lt3-counsel-copy"><span>Lead counsel</span><h2>Elena<br/>Rowe</h2><p>Fictional trial and appellate lawyer representing businesses, directors, professionals, and institutions in complex disputes.</p><dl><div><dt>Approach</dt><dd>Prepared. Candid. Unflinching.</dd></div><div><dt>Forum</dt><dd>Ontario courts and tribunals</dd></div><div><dt>Focus</dt><dd>Commercial and public-law disputes</dd></div></dl><a href="#lt3-contact">Speak with counsel <Arrow/></a></div>
      </section>

      <section className="lt3-contact" id="lt3-contact">
        <div><span>Confidential case conference</span><h2>What is the<br/>matter really<br/>about?</h2><p>Send a short outline. We will identify conflicts, urgency, and the right next conversation.</p><a href="tel:+14378731155">437 873 1155</a></div>
        <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
          {sent ? <div className="lt3-success" role="status"><b>FILE RECEIVED</b><h3>Demo only.</h3><p>This fictional concept does not transmit or retain information. A live firm would route the inquiry securely after a conflicts check.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <>
            <label><span>Your name</span><input required autoComplete="name"/></label><label><span>Email or phone</span><input required/></label><label><span>Organization</span><input/></label><label><span>Brief description of the dispute</span><textarea required rows="5"/></label><label className="lt3-check"><input type="checkbox" required/><span>I understand that this message does not create a lawyer-client relationship.</span></label><button type="submit">Request a confidential call <Arrow/></button><small>Demo only · Information is not sent or stored.</small>
          </>}
        </form>
      </section>
    </main>
    <footer className="lt3-footer"><div className="lt3-logo"><b>A/R</b><span>ASHCROFT ROWE<small>TRIAL & APPELLATE COUNSEL</small></span></div><p>Fictional litigation-firm concept created for Magneo. Names, credentials, contact details, and services are illustrative only.</p><a href="#lt3-top">Back to top ↑</a></footer>
    <div className="lt3-mobile"><a href="tel:+14378731155">Call counsel</a><a href="#lt3-contact">Discuss a matter</a></div>
  </div>;
}

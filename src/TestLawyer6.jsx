import { useEffect, useState } from 'react';
import './styles/legal-concept-notice.css';
import LegalConceptNotice from './LegalConceptNotice.jsx';

const needs = [
  { key: 'answers', label: 'Clear answers', title: 'Understand what comes next.', text: 'We explain the process in plain language, answer the questions keeping you up at night, and give your family a practical plan for the days ahead.' },
  { key: 'care', label: 'Long-term care', title: 'Plan for the care life now requires.', text: 'A strong case looks beyond today. We work to understand future treatment, accessibility, caregiving, and the support your family may need over time.' },
  { key: 'stability', label: 'Financial stability', title: 'Protect the life around the injury.', text: 'Lost income and unexpected expenses affect the whole household. We document the full financial impact so no important detail is treated as an afterthought.' },
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer6(){
  const [activeNeed, setActiveNeed] = useState('answers');
  const [sent, setSent] = useState(false);
  const selected = needs.find((item) => item.key === activeNeed) || needs[0];

  useEffect(() => {
    document.title = 'Harbour & Lane Injury Law - Family-Focused PI Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional, family-focused personal-injury law-firm landing-page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-family-focused/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer6 = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  return <div className="hl6">
    <LegalConceptNotice/>
    <header className="hl6-nav" id="hl6-top">
      <a className="hl6-brand" href="/portfolio/" aria-label="Back to portfolio"><i aria-hidden="true">←</i><span>Back to portfolio</span></a>
      <nav aria-label="Primary navigation"><a href="#hl6-support">How we help</a><a href="#hl6-process">What happens next</a><a href="#hl6-contact">Contact</a></nav>
      <a className="hl6-top-cta" href="#hl6-contact">View demo form <Arrow/></a>
    </header>

    <main>
      <section className="hl6-hero">
        <div className="hl6-hero-copy">
          <span className="hl6-eyebrow"><i/> Personal injury counsel for families</span>
          <h1>When life changes,<br/>your family should<br/><em>not face it alone.</em></h1>
          <p>Compassionate legal guidance for the decisions, care, and uncertainty that follow a serious injury.</p>
          <div className="hl6-actions"><a href="#hl6-contact">View demonstration form <Arrow/></a></div>
          <small>Fictional firm · No legal enquiries are sent</small>
        </div>
        <div className="hl6-hero-photo">
          <img src="/test6-family-hero.png" alt="A fictional family sharing a quiet moment together at home"/>
          <div className="hl6-photo-note"><b>There is no perfect first call.</b><span>Start with whatever you know.</span></div>
          <span className="hl6-photo-caption">Care begins by listening.</span>
        </div>
      </section>

      <section className="hl6-reassurance" aria-label="Illustrative consultation highlights"><span>Free first conversation</span><span>Direct lawyer access</span><span>Plain-language guidance</span><span>Demonstration only</span></section>

      <section className="hl6-intro">
        <span>For the people around the injury, too.</span>
        <h2>A serious injury never<br/>happens to just one person.</h2>
        <p>It changes routines, plans, roles, and the feeling of safety at home. Our work begins with the whole picture - because a legal strategy should protect more than a file.</p>
      </section>

      <section className="hl6-support" id="hl6-support">
        <div className="hl6-support-image"><img src="/test6-family-detail-v2.png" alt="A family reviewing a personal-injury legal action plan together around a kitchen table"/><span>THE WHOLE PICTURE / 01</span></div>
        <div className="hl6-support-copy">
          <span className="hl6-kicker">What does your family need most?</span>
          <div className="hl6-tabs" role="tablist" aria-label="Ways we support families">{needs.map((item)=><button key={item.key} type="button" role="tab" aria-selected={activeNeed===item.key} onClick={()=>setActiveNeed(item.key)}>{item.label}</button>)}</div>
          <div className="hl6-need" role="tabpanel" key={selected.key}><h3>{selected.title}</h3><p>{selected.text}</p><a href="#hl6-contact">Tell us what your family needs <Arrow/></a></div>
        </div>
      </section>

      <section className="hl6-process" id="hl6-process">
        <div className="hl6-process-heading"><span>A gentler first step</span><h2>You do not have to<br/>figure this out today.</h2><p>We will help you take it one clear step at a time.</p></div>
        <ol>
          <li><span>01</span><div><h3>We listen</h3><p>You tell us what changed - in your own words, without pressure or legal jargon.</p></div></li>
          <li><span>02</span><div><h3>We make a plan</h3><p>We identify urgent needs, explain your options, and map the evidence your case requires.</p></div></li>
          <li><span>03</span><div><h3>We carry the legal work</h3><p>Your family focuses on recovery while we manage insurers, deadlines, records, and strategy.</p></div></li>
        </ol>
      </section>

      <section className="hl6-promise"><span aria-hidden="true">“</span><blockquote>Your family is not an interruption to the case.<br/><em>Your family is the reason for it.</em></blockquote><p>Harbour &amp; Lane’s fictional approach is built on a simple promise: listen closely, explain clearly, and prepare every matter with care.</p></section>

      <section className="hl6-contact" id="hl6-contact">
        <div className="hl6-contact-copy"><span>Demonstration consultation section</span><h2>Tell us what<br/>life looks like now.</h2><p>This fictional form shows how a law firm might introduce its enquiry process. It does not contact a lawyer or send a message.</p><small>Fictional concept · Toronto, Ontario</small></div>
        <div className="hl6-form-card">{sent ? <div className="hl6-success" role="status"><span>Demo only</span><h3>Form preview complete.</h3><p>No information was sent or stored. To discuss the website concept, contact Magneo separately.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <form onSubmit={(event)=>{event.preventDefault();setSent(true)}}><p className="hl6-demo-note">Demonstration form - no information is sent or stored. Do not enter personal or case details.</p><div><span>01 / Your name</span><input aria-label="Your name" required autoComplete="name" placeholder="Example name"/></div><div><span>02 / Best way to reach you</span><input aria-label="Phone or email" required placeholder="Example contact"/></div><div><span>03 / What happened?</span><textarea aria-label="What happened" required rows="4" placeholder="Use example details only."/></div><label><input type="checkbox" required/><span>I understand this is a fictional demo and does not create a lawyer-client relationship.</span></label><button type="submit">Preview demo request <Arrow/></button><small>Demo only · Information is not sent or stored.</small></form>}</div>
      </section>
    </main>

    <footer className="hl6-footer"><div className="hl6-brand"><i>H</i><span>Harbour <em>&amp;</em> Lane<small>Injury law · Toronto</small></span></div><p>Harbour &amp; Lane is a fictional law-firm concept created for Magneo. Names, services, statements, and imagery are illustrative. The demonstration form does not send or store information.</p><a href="#hl6-top">Back to top ↑</a></footer>
    <a className="hl6-mobile-cta" href="#hl6-contact">View demo form <Arrow/></a>
  </div>;
}

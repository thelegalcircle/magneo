import { useEffect, useRef, useState } from 'react';

const needs = [
  { key: 'answers', label: 'Clear answers', title: 'Understand your options.', text: 'We explain the legal process, answer your questions, and identify the information needed to assess your situation.' },
  { key: 'care', label: 'Care and support needs', title: 'Account for the support you need.', text: 'We gather relevant information about treatment, daily assistance, and future care needs to help explain the impact of the injury in your claim.' },
  { key: 'finances', label: 'Work and expenses', title: 'Explain the financial impact.', text: 'We review lost income, injury-related expenses, and changes to work and household responsibilities as part of assessing the claim.' },
];

const faqs = [
  ['Can I enquire for someone in my family?', 'Yes. You can make an initial enquiry for someone close to you. We will explain what permission may be needed before discussing their information or taking instructions.'],
  ['What should I have ready?', 'A general outline of what happened and when is enough to start. Mention any known deadline. We can explain which documents may be useful next.'],
  ['How are fees explained?', 'Before you decide whether to proceed, we explain the proposed fees, expenses, and payment responsibilities in writing.'],
  ['Does contacting you mean starting a lawsuit?', 'No. An initial enquiry helps establish whether we can assist. Any decision to retain us or begin proceedings would be discussed separately.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function PersonalInjuryFamilyTest(){
  const [activeNeed, setActiveNeed] = useState('answers');
  const [sent, setSent] = useState(false);
  const tabRefs = useRef([]);
  const selected = needs.find((item) => item.key === activeNeed) || needs[0];

  useEffect(() => {
    document.title = 'Harbour & Lane Injury Law - Family-Focused PI Concept Preview';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional, family-focused personal-injury law-firm website concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-family-focused/test/';
    const robots = document.createElement('meta');
    robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.familyFocusedTest = 'true'; document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  const selectTabByIndex = (index) => {
    const next = needs[index];
    setActiveNeed(next.key);
    requestAnimationFrame(() => tabRefs.current[index]?.focus());
  };
  const handleTabKey = (event, index) => {
    let nextIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % needs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + needs.length) % needs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = needs.length - 1;
    else return;
    event.preventDefault();
    selectTabByIndex(nextIndex);
  };

  return <div className="hl6 hl6-revised">
    <header className="hl6-nav" id="hl6-top">
      <a className="hl6-brand hl6-back" href="/portfolio/" aria-label="Back to portfolio"><i aria-hidden="true">←</i><span>Back to portfolio</span></a>
      <nav aria-label="Primary navigation"><a href="#hl6-support">How we help</a><a href="#hl6-process">What happens next</a><a href="#hl6-contact">Contact</a></nav>
      <a className="hl6-top-cta" href="#hl6-contact">Talk with us <Arrow/></a>
    </header>

    <main>
      <section className="hl6-hero">
        <div className="hl6-hero-copy">
          <span className="hl6-eyebrow"><i/> Personal injury counsel for families</span>
          <span className="hl6-disclosure">Fictional website concept</span>
          <h1>After a serious injury,<br/>you don’t have to<br/><em>face it alone.</em></h1>
          <p>We help injured people and their families understand their legal options, the information needed for a claim, and what happens next.</p>
          <div className="hl6-actions"><a href="#hl6-contact">Talk with us <Arrow/></a></div>
        </div>
        <div className="hl6-hero-photo">
          <img src="/test6-family-hero.png" alt="A fictional family sharing a quiet moment together at home"/>
          <div className="hl6-photo-note"><b>There is no perfect first call.</b><span>Start with whatever you know.</span></div>
          <span className="hl6-photo-caption">Care begins by listening.</span>
        </div>
      </section>

      <section className="hl6-reassurance" aria-label="Consultation highlights"><span>Plain-language explanations</span><span>Enquiries from family welcome</span><span>Clear next steps</span></section>

      <section className="hl6-intro">
        <span>For the people around the injury, too.</span>
        <h2>A serious injury can change life for the whole household.</h2>
        <div className="hl6-intro-copy"><p>Work, routines, expenses, and caring responsibilities may all change. We listen to the injured person and, with their permission, the people supporting them, to understand the impact on everyday life.</p><p>We help people injured in motor-vehicle accidents and falls on unsafe property understand their options for pursuing a personal-injury claim.</p></div>
      </section>

      <section className="hl6-support" id="hl6-support">
        <div className="hl6-support-image"><img src="/test6-legal-options-detail.png" alt="A legal advisor explaining personal-injury claim options to an injured person and a family member"/><span>THE WHOLE PICTURE / 01</span></div>
        <div className="hl6-support-copy">
          <span className="hl6-kicker">How we help</span>
          <div className="hl6-tabs" role="tablist" aria-label="How we help injured people and families">{needs.map((item,index)=><button ref={(element)=>{tabRefs.current[index]=element}} id={`hl6-tab-${item.key}`} aria-controls="hl6-need-panel" tabIndex={activeNeed===item.key ? 0 : -1} key={item.key} type="button" role="tab" aria-selected={activeNeed===item.key} onKeyDown={(event)=>handleTabKey(event,index)} onClick={()=>setActiveNeed(item.key)}>{item.label}</button>)}</div>
          <div className="hl6-need" id="hl6-need-panel" role="tabpanel" aria-labelledby={`hl6-tab-${selected.key}`} key={selected.key}><h3>{selected.title}</h3><p>{selected.text}</p><a href="#hl6-contact">Talk with us <Arrow/></a></div>
        </div>
      </section>

      <section className="hl6-process" id="hl6-process">
        <div className="hl6-process-heading"><span>A gentler first step</span><h2>You do not need all the answers to take the first step.</h2><p>We will help you take it one clear step at a time.</p></div>
        <ol>
          <li><span>01</span><div><h3>We listen</h3><p>Tell us generally what happened and mention any known deadline. We establish whether the matter fits our practice.</p></div></li>
          <li><span>02</span><div><h3>We explain the next steps</h3><p>We discuss the information needed, available options, and proposed fees before you decide whether to proceed.</p></div></li>
          <li><span>03</span><div><h3>We handle the agreed legal work</h3><p>If you retain us, we manage the work within our agreed scope and keep you informed about decisions that need your instructions.</p></div></li>
        </ol>
      </section>

      <section className="hl6-promise hl6-lawyer-intro">
        <div><span>Fictional lawyer profile</span><h2>Maya Lane</h2><p>Maya helps injured people and their families understand the claim process and make informed decisions about the next steps.</p><a href="#hl6-contact">Talk with us <Arrow/></a></div>
        <div className="hl6-lawyer-photo"><img src="/pi-lawyer-hero-generated.png" alt="Maya Lane, a fictional lawyer featured in this website concept"/></div>
      </section>

      <section className="hl6-faq" aria-labelledby="hl6-faq-title">
        <div><span>Good to know</span><h2 id="hl6-faq-title">Before you<br/>get in touch</h2></div>
        <div className="hl6-faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0 ? true : undefined}><summary>{question}<span aria-hidden="true"/></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="hl6-contact" id="hl6-contact">
        <div className="hl6-contact-copy"><span>Initial enquiry</span><h2>Tell us what<br/>life looks like now.</h2><p>You can enquire for yourself or someone close to you. Start with a general outline and any known deadline; you do not need every document ready.</p><small>Fictional concept · Toronto, Ontario</small></div>
        <div className="hl6-form-card">{sent ? <div className="hl6-success" role="status"><span>Demonstration only</span><h3>This is a portfolio demonstration.</h3><p>Your information has not been sent or retained.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <form onSubmit={(event)=>{event.preventDefault();setSent(true)}}><div><span>Your name</span><input aria-label="Your name" required autoComplete="name"/></div><div><span>Phone or email</span><input aria-label="Phone or email" required/></div><div><span>Short outline - optional</span><small className="hl6-field-help">Please do not include medical records or confidential details.</small><textarea aria-label="Short outline" rows="4"/></div><label><input type="checkbox" required/><span>I understand this message does not create a lawyer-client relationship.</span></label><button type="submit">Request a conversation <Arrow/></button><small>Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small></form>}</div>
      </section>
    </main>

    <footer className="hl6-footer"><div className="hl6-brand"><i>H</i><span>Harbour <em>&amp;</em> Lane<small>Injury law · Toronto</small></span></div><p>Harbour &amp; Lane and Maya Lane are fictional. This website concept was created for Magneo and does not offer legal services. Its form does not send or retain information.</p><a href="#hl6-top">Back to top ↑</a></footer>
    <a className="hl6-mobile-cta" href="#hl6-contact">Talk with us <Arrow/></a>
  </div>;
}

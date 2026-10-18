import { useEffect, useRef, useState } from 'react';

const chapters = [
  ['01', 'The moment', 'We start with what happened, when it happened, and any known deadlines. You do not need every document ready.'],
  ['02', 'The disruption', 'We listen to how the injury has affected daily life, work, expenses, and the people supporting you.'],
  ['03', 'The evidence', 'We explain which records and other information are needed to assess the claim and describe its impact.'],
  ['04', 'The next step', 'We discuss the available options, proposed costs, and decisions that need your instructions.'],
];

const faqs = [
  ['What should I have ready?', 'A general outline of what happened and when is enough for an initial enquiry. We can explain which documents may be useful next.'],
  ['Can I enquire for a family member?', 'Yes. You can make the first enquiry for someone close to you. We will explain any permission needed before discussing their information or taking instructions.'],
  ['How are fees explained?', 'Before you decide whether to proceed, we explain the proposed fees, expenses, and payment responsibilities in writing.'],
  ['Will I have to go to court?', 'Some claims resolve through negotiation; others require court proceedings. We explain the available routes and what your involvement may include.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function PersonalInjuryCinematicTest(){
  const [activeScene, setActiveScene] = useState(0);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [inlineSent, setInlineSent] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const openerRef = useRef(null);

  const openIntake = (event) => {
    openerRef.current = event.currentTarget;
    setIntakeOpen(true);
  };
  const closeIntake = () => setIntakeOpen(false);

  useEffect(() => {
    document.title = 'Fielding North Injury Law - Cinematic PI Concept Preview';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional cinematic personal-injury law-firm website concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-cinematic/';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveScene(Number(entry.target.dataset.scene));
    }), { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
    document.querySelectorAll('.fn5-revised .fn5-chapter').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!intakeOpen) return undefined;
    const background = [...document.querySelectorAll('.fn5-revised > :not(.fn5-drawer-shell)')];
    const previousOverflow = document.body.style.overflow;
    background.forEach((element) => { element.inert = true; });
    document.body.style.overflow = 'hidden';
    const focusables = () => [...dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')];
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); closeIntake(); return; }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) { event.preventDefault(); return; }
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    requestAnimationFrame(() => titleRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      background.forEach((element) => { element.inert = false; });
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => openerRef.current?.focus());
    };
  }, [intakeOpen]);

  return <div className={`fn5 fn5-revised${motionPaused ? ' is-paused' : ''}`}>
    <header className="fn5-nav">
      <a className="fn5-logo" href="/portfolio/" aria-label="Back to portfolio"><b aria-hidden="true">←</b><span>BACK TO PORTFOLIO</span></a>
      <nav aria-label="Primary navigation"><a href="#fn5-story">After an injury</a><a href="#fn5-proof">How we help</a><a href="#fn5-lawyer">Your lawyer</a></nav>
      <button className="fn5-nav-cta" type="button" onClick={openIntake}>Tell us what happened <Arrow/></button>
    </header>

    <main id="fn5-top">
      <section className="fn5-hero">
        <div className="fn5-hero-frame"><img src="/test5-cinematic-hero.png" alt="Fictional injured man sitting quietly beside a rain-streaked window"/><div className="fn5-rain"/></div>
        <div className="fn5-shade"/>
        <div className="fn5-film-meta"><span>FIELD NOTE / 001</span><span>FICTIONAL WEBSITE CONCEPT</span></div>
        <div className="fn5-hero-copy"><span>Personal injury counsel · Toronto</span><h1>One second<br/>changed<br/><em>everything.</em></h1><p>After a serious injury, questions about work, expenses, and the future can feel overwhelming. We help you understand your legal options and what happens next.</p><div className="fn5-actions"><button type="button" onClick={openIntake}>Tell us what happened <Arrow/></button></div></div>
        <button className="fn5-motion" type="button" aria-pressed={motionPaused} onClick={()=>setMotionPaused((value)=>!value)}>{motionPaused ? 'Play scene' : 'Pause scene'} <i/></button>
        <a className="fn5-scroll" href="#fn5-story"><span>Scroll through the story</span><i/></a>
      </section>

      <section className="fn5-opening"><div><span>Before / After</span><h2>Every serious injury<br/>creates two timelines.</h2></div><div className="fn5-opening-copy"><p>There is life before the injury, and the practical questions that follow it. Our role is to understand the difference and explain the legal steps available to you.</p><p>We help people injured in motor-vehicle accidents and falls on unsafe property understand their options for pursuing a personal-injury claim.</p></div></section>

      <section className="fn5-story" id="fn5-story">
        <div className="fn5-story-visual">
          <img className={activeScene < 2 || activeScene === 3 ? 'active' : ''} src="/test5-cinematic-hero.png" alt=""/>
          <img className={activeScene === 2 ? 'active' : ''} src="/test5-cinematic-evidence.png" alt="Anonymous evidence being organized on a legal case table"/>
          <div className="fn5-story-wash"/><span>{String(activeScene + 1).padStart(2,'0')} / 04</span><b>{chapters[activeScene][1]}</b>
        </div>
        <div className="fn5-chapters">{chapters.map(([n,title,text],index)=><article className="fn5-chapter" data-scene={index} key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p>{index === 2 && <a href="#fn5-proof">How we build the claim <Arrow/></a>}</div></article>)}</div>
      </section>

      <section className="fn5-proof" id="fn5-proof">
        <div className="fn5-proof-image"><img src="/test5-cinematic-evidence.png" alt="Fictional legal and medical evidence arranged for review"/><span>THE RECORD / ORGANIZED</span></div>
        <div className="fn5-proof-copy"><span>Evidence, made human</span><h2>A case is not<br/>a stack of paper.</h2><p>It should explain what happened, how the injury has affected your life, and what support may be needed in the future.</p><ol><li><b>01</b><span>Review the incident records</span></li><li><b>02</b><span>Document changes to daily life</span></li><li><b>03</b><span>Assess losses and support needs</span></li><li><b>04</b><span>Prepare for negotiation or court</span></li></ol></div>
      </section>

      <section className="fn5-approach fn5-lawyer" id="fn5-lawyer">
        <div><span>Fictional lawyer profile</span><h2>Maya Fielding</h2><p>Maya helps individuals and families understand the legal questions after a serious injury, the information needed, and the next steps.</p><button type="button" onClick={openIntake}>Tell us what happened <Arrow/></button></div>
        <img src="/pi-lawyer-hero-generated.png" alt="Maya Fielding, a fictional lawyer featured in this website concept"/>
      </section>

      <section className="fn5-faq" aria-labelledby="fn5-faq-title">
        <div><span>Good to know</span><h2 id="fn5-faq-title">Before you<br/>get in touch</h2></div>
        <div className="fn5-faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index === 0 ? true : undefined}><summary>{question}<span aria-hidden="true"/></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="fn5-contact" id="fn5-contact">
        <div><span>The first conversation</span><h2>You do not need<br/>the whole story<br/>ready.</h2><p>Start with a general outline of what happened and any known deadline. The first step is to establish whether we can help and what information is needed next.</p></div>
        {inlineSent ? <div className="fn5-inline-success" role="status"><span>Demonstration only</span><h3>Thank you.</h3><p>Your information was not sent or retained.</p><button type="button" onClick={()=>setInlineSent(false)}>Return to form</button></div> :
          <form className="fn5-inline-form" onSubmit={(event)=>{event.preventDefault();setInlineSent(true)}}>
            <span className="fn5-inline-kicker">Initial enquiry</span>
            <label htmlFor="fn5-inline-name">Your name<input id="fn5-inline-name" required autoComplete="name"/></label>
            <label htmlFor="fn5-inline-contact">Email or phone<input id="fn5-inline-contact" required autoComplete="email"/></label>
            <label className="fn5-inline-outline" htmlFor="fn5-inline-outline">Short outline - optional<small>A general description is enough. Do not include medical records or confidential details.</small><textarea id="fn5-inline-outline" rows="3"/></label>
            <label className="fn5-inline-check"><input type="checkbox" required/><span>I understand this message does not create a lawyer-client relationship.</span></label>
            <button type="submit">Request a conversation <Arrow/></button>
            <small className="fn5-inline-notice">Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small>
          </form>}
      </section>
    </main>

    <footer className="fn5-footer"><div className="fn5-logo"><b>F/N</b><span>FIELDING NORTH<small>INJURY COUNSEL</small></span></div><p>Fictional law-firm concept and documentary imagery created for Magneo. Fielding North and Maya Fielding are fictional. This page does not offer legal services, and its form does not send or retain information.</p><a href="#fn5-top">Back to beginning ↑</a></footer>
    <button className="fn5-intake-tab" type="button" onClick={openIntake}>Tell us what happened <Arrow/></button>

    {intakeOpen && <div className="fn5-drawer-shell" onMouseDown={(event)=>{if(event.target===event.currentTarget)closeIntake()}}><aside ref={dialogRef} className="fn5-drawer" role="dialog" aria-modal="true" aria-labelledby="fn5-intake-title" aria-describedby="fn5-intake-notice"><button className="fn5-close" type="button" aria-label="Close enquiry panel" onClick={closeIntake}>×</button>{sent ? <div className="fn5-success" role="status"><span>DEMONSTRATION ONLY</span><h2 ref={titleRef} id="fn5-intake-title" tabIndex="-1">This is a portfolio demonstration.</h2><p id="fn5-intake-notice">Your information has not been sent or retained.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <form onSubmit={(event)=>{event.preventDefault();setSent(true)}}><span>Initial enquiry</span><h2 ref={titleRef} id="fn5-intake-title" tabIndex="-1">Tell us what happened.</h2><label>Your name<input required autoComplete="name"/></label><label>Email or phone<input required/></label><label>Short outline - optional<small className="fn5-field-help">Please do not include medical records or confidential details.</small><textarea rows="5"/></label><label className="fn5-check"><input type="checkbox" required/><span>I understand this message does not create a lawyer-client relationship.</span></label><button type="submit">Request a conversation <Arrow/></button><small id="fn5-intake-notice">Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small></form>}</aside></div>}
  </div>;
}

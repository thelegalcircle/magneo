import { useEffect, useState } from 'react';

const chapters = [
  ['01', 'The moment', 'An ordinary day becomes a dividing line. The first legal step is preserving what happened before details disappear.'],
  ['02', 'The disruption', 'Pain, appointments, missed work, and a family reorganizing itself. The claim must reflect the whole change - not only the diagnosis.'],
  ['03', 'The proof', 'Records become a timeline. Specialists explain the future. The scattered pieces become a case another person can understand.'],
  ['04', 'The next chapter', 'A resolution cannot undo the event. It can create room for care, stability, choice, and a life rebuilt on new terms.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }

export default function TestLawyer5(){
  const [activeScene, setActiveScene] = useState(0);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    document.title = 'Fielding North Injury Law - Cinematic PI Concept';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional cinematic personal-injury law-firm landing-page concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/personal-injury-cinematic/';
    const isPrivatePreview = window.location.pathname.startsWith('/test');
    const robots = isPrivatePreview ? document.createElement('meta') : null;
    if (robots) { robots.name = 'robots'; robots.content = 'noindex, nofollow, noarchive'; robots.dataset.testLawyer5 = 'true'; document.head.appendChild(robots); }
    return () => robots?.remove();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveScene(Number(entry.target.dataset.scene));
    }), { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
    document.querySelectorAll('.fn5-chapter').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setIntakeOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return <div className={`fn5${motionPaused ? ' is-paused' : ''}`}>
    <header className="fn5-nav">
      <a className="fn5-logo" href="#fn5-top"><b>F/N</b><span>FIELDING NORTH<small>INJURY COUNSEL</small></span></a>
      <nav aria-label="Primary navigation"><a href="#fn5-story">The story</a><a href="#fn5-proof">The proof</a><a href="#fn5-approach">Our work</a></nav>
      <a className="fn5-phone" href="tel:+14378731155">437 873 1155</a>
      <button className="fn5-nav-cta" type="button" onClick={()=>setIntakeOpen(true)}>Tell us what happened <Arrow/></button>
    </header>

    <main id="fn5-top">
      <section className="fn5-hero">
        <div className="fn5-hero-frame"><img src="/test5-cinematic-hero.png" alt="Fictional injured man sitting quietly beside a rain-streaked window"/><div className="fn5-rain"/></div>
        <div className="fn5-shade"/>
        <div className="fn5-film-meta"><span>FIELD NOTE / 001</span><span>TORONTO · 06:42</span><span>FICTIONAL STORY</span></div>
        <div className="fn5-hero-copy"><span>Personal injury counsel · Toronto</span><h1>One second<br/>changed<br/><em>everything.</em></h1><p>The legal work begins with understanding what changed next.</p><div className="fn5-actions"><button type="button" onClick={()=>setIntakeOpen(true)}>Tell us what happened <Arrow/></button><a href="tel:+14378731155">Call 437 873 1155</a></div></div>
        <button className="fn5-motion" type="button" aria-pressed={motionPaused} onClick={()=>setMotionPaused((value)=>!value)}>{motionPaused ? 'Play scene' : 'Pause scene'} <i/></button>
        <a className="fn5-scroll" href="#fn5-story"><span>Scroll through the story</span><i/></a>
      </section>

      <section className="fn5-opening"><div><span>Before / After</span><h2>Every serious injury<br/>creates two timelines.</h2></div><p>There is the life that was planned - and the life that now needs support. Fielding North is a fictional injury firm built around the distance between those two realities.</p></section>

      <section className="fn5-story" id="fn5-story">
        <div className="fn5-story-visual">
          <img className={activeScene < 2 || activeScene === 3 ? 'active' : ''} src="/test5-cinematic-hero.png" alt=""/>
          <img className={activeScene === 2 ? 'active' : ''} src="/test5-cinematic-evidence.png" alt="Anonymous evidence being organized on a legal case table"/>
          <div className="fn5-story-wash"/><span>{String(activeScene + 1).padStart(2,'0')} / 04</span><b>{chapters[activeScene][1]}</b>
        </div>
        <div className="fn5-chapters">{chapters.map(([n,title,text],index)=><article className="fn5-chapter" data-scene={index} key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p>{index === 2 && <a href="#fn5-proof">See how evidence becomes leverage <Arrow/></a>}</div></article>)}</div>
      </section>

      <section className="fn5-proof" id="fn5-proof">
        <div className="fn5-proof-image"><img src="/test5-cinematic-evidence.png" alt="Fictional legal and medical evidence arranged for review"/><span>THE RECORD / ORGANIZED</span></div>
        <div className="fn5-proof-copy"><span>Evidence, made human</span><h2>A case is not<br/>a stack of paper.</h2><p>It is a precise account of what was lost, what will be needed, and why the future deserves to be protected.</p><ol><li><b>01</b><span>Preserve the incident</span></li><li><b>02</b><span>Document the disruption</span></li><li><b>03</b><span>Measure the future</span></li><li><b>04</b><span>Prepare for trial</span></li></ol></div>
      </section>

      <section className="fn5-approach" id="fn5-approach"><span>Our position</span><blockquote>“You are not a claim number.<br/>You are the life the evidence must explain.”</blockquote><div><p>We listen before we build the strategy. We prepare every matter with discipline. We explain every decision in language a family can use.</p><button type="button" onClick={()=>setIntakeOpen(true)}>Start a confidential conversation <Arrow/></button></div></section>

      <section className="fn5-contact"><div><span>The first conversation</span><h2>You do not need<br/>the whole story<br/>ready.</h2></div><div><p>A few facts are enough to begin: what happened, when it happened, and what life looks like now.</p><a href="tel:+14378731155">437 873 1155</a><button type="button" onClick={()=>setIntakeOpen(true)}>Open secure intake <Arrow/></button><small>Free · Confidential · No upfront legal fee*</small></div></section>
    </main>

    <footer className="fn5-footer"><div className="fn5-logo"><b>F/N</b><span>FIELDING NORTH<small>INJURY COUNSEL</small></span></div><p>Fictional law-firm concept and documentary imagery created for Magneo. Names, credentials, services, story, and contact details are illustrative.</p><a href="#fn5-top">Back to beginning ↑</a></footer>
    <button className="fn5-intake-tab" type="button" onClick={()=>setIntakeOpen(true)}>Tell us what happened <Arrow/></button>

    {intakeOpen && <div className="fn5-drawer-shell" role="presentation" onMouseDown={(event)=>{if(event.target===event.currentTarget)setIntakeOpen(false)}}><aside className="fn5-drawer" role="dialog" aria-modal="true" aria-labelledby="fn5-intake-title"><button className="fn5-close" type="button" aria-label="Close intake" onClick={()=>setIntakeOpen(false)}>×</button>{sent ? <div className="fn5-success" role="status"><span>REQUEST / READY</span><h2>Thank you.</h2><p>This fictional demonstration does not send or store information. A live firm would use a secure intake and conflicts-review process.</p><button type="button" onClick={()=>setSent(false)}>Return to form</button></div> : <form onSubmit={(event)=>{event.preventDefault();setSent(true)}}><span>Free confidential consultation</span><h2 id="fn5-intake-title">Tell us what changed.</h2><label>Your name<input required autoComplete="name"/></label><label>Email or phone<input required/></label><label>What happened?<textarea required rows="5"/></label><label className="fn5-check"><input type="checkbox" required/><span>I understand this message does not create a lawyer-client relationship.</span></label><button type="submit">Request a private call <Arrow/></button><small>Demo only · Information is not sent or stored.</small></form>}</aside></div>}
  </div>;
}

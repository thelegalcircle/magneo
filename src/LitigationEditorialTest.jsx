import { useEffect, useState } from 'react';

const disputes = [
  ['01', 'Commercial disputes', 'Contract breaches, shareholder and partnership conflicts, and disputes arising from business transactions.'],
  ['02', 'Injunctions & urgent relief', 'Time-sensitive disputes involving assets, evidence, or business operations, where an urgent court application may be needed.'],
  ['03', 'Regulatory & professional matters', 'Advice and representation during regulatory investigations, enforcement proceedings, and professional discipline matters.'],
  ['04', 'Appeals & judicial review', 'Assessing grounds to challenge a court or tribunal decision and preparing focused written and oral arguments.'],
];

const faqs = [
  ['Do I need to know which legal service I need?', 'No. Start with a general outline of the dispute and any known deadline. The initial discussion helps establish whether the matter fits our practice and what information is needed next.'],
  ['Will my dispute have to go to court?', 'Not every dispute requires a trial. Negotiation or mediation may be appropriate, depending on the circumstances. We discuss the available routes and their trade-offs before recommending a course of action.'],
  ['How are costs discussed?', 'Before you authorize paid work, we explain the proposed scope, how fees will be calculated, and any initial payment required. If the scope changes, we discuss the implications with you.'],
  ['What if there is an urgent deadline?', 'Mention the deadline at the start of your enquiry. Sending a message does not confirm that a lawyer can act or that any deadline is being managed.'],
];

function Arrow(){ return <span aria-hidden="true">↗</span>; }
function DemoSuccess({ onReset }){ return <div className="lt3-success lt3-demo-success" role="status"><b>DEMONSTRATION ONLY</b><h3>This is a portfolio demonstration.</h3><p>Your enquiry has not been sent.</p><button type="button" onClick={onReset}>Return to form</button></div>; }

export default function LitigationEditorialTest(){
  const [sequence, setSequence] = useState(0);
  const [heroSent, setHeroSent] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Ashcroft Rowe Litigation - Editorial Concept Preview';
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.appendChild(description); }
    description.content = 'A fictional editorial litigation law-firm website concept created by Magneo.';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://magneo.ca/portfolio/legal-websites/litigation-editorial/';
  }, []);

  return <div className="lt3 lt3-updated">
    <header className="lt3-nav">
      <a className="lt3-logo lt3-back-link" href="/portfolio/" aria-label="Back to portfolio"><b aria-hidden="true">←</b><span>BACK TO PORTFOLIO</span></a>
      <nav aria-label="Primary navigation"><a href="#lt3-capabilities">Disputes we handle</a><a href="#lt3-method">Our approach</a><a href="#lt3-counsel">Counsel</a><a href="#lt3-contact">Contact</a></nav>
      <span className="lt3-location">Toronto</span>
      <a className="lt3-btn lt3-btn-dark" href="#lt3-contact">Discuss a matter <Arrow/></a>
    </header>

    <main id="lt3-top">
      <section className="lt3-hero">
        <div className="lt3-edition"><span>Litigation brief</span><b>Vol. 01 · Toronto</b><span>Fictional concept</span></div>
        <div className="lt3-hero-stage" key={sequence}>
          <p className="lt3-overline">Toronto litigation counsel for businesses and professionals</p>
          <div className="lt3-banner-art">
            <h1><span>COMPLEX</span><span>LEGAL</span><span className="lt3-cases-word">DISPUTES</span></h1>
            <div className="lt3-banner-portrait">
              <img className="lt3-pose-initial" src="/litigation-counsel-group-transparent.png" alt="Elena Rowe with two fictional legal professionals"/>
              <img className="lt3-pose-protective" src="/litigation-counsel-group-crossed-transparent.png" alt="" aria-hidden="true"/>
              <div className="lt3-stamp" aria-label="Strategy first">STRATEGY FIRST</div>
            </div>
          </div>
          <form className="lt3-hero-form" onSubmit={(e)=>{e.preventDefault();setHeroSent(true)}}>
            {heroSent ? <DemoSuccess onReset={()=>setHeroSent(false)}/> : <>
              <div className="lt3-form-index"><span>Initial enquiry</span></div>
              <h2>Tell us<br/><em>what happened.</em></h2>
              <div className="lt3-hero-fields"><label><span>Your name</span><input required autoComplete="name"/></label><label><span>Email or phone</span><input required/></label></div>
              <label><span>What kind of dispute?</span><select defaultValue="" required><option value="" disabled>Select one</option><option>Business, contract, or shareholder dispute</option><option>Urgent injunction or court relief</option><option>Regulatory investigation or professional discipline</option><option>Appeal or judicial review</option><option>Not sure / other dispute</option></select></label>
              <label><span>Short outline - optional</span><small className="lt3-field-help">A general description is enough. Please do not include confidential documents or detailed evidence.</small><textarea rows="2"/></label>
              <button type="submit">Request a call <Arrow/></button>
              <small>Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small>
            </>}
          </form>
          <button className="lt3-replay" type="button" onClick={()=>setSequence((n)=>n+1)}>Replay opening ↻</button>
        </div>
        <div className="lt3-hero-foot">
          <p>When a dispute puts your business, reputation, or professional future at risk, you need to understand your options. We assess the facts, explain the risks, and plan the next step with you.</p>
          <div><span>Commercial litigation</span><span>Urgent relief</span><span>Appeals</span><span>Regulatory matters</span></div>
          <a href="#lt3-contact">Discuss your dispute <Arrow/></a>
        </div>
      </section>

      <section className="lt3-ticker" aria-label="Firm positioning"><span>CLEAR OPTIONS</span><i>◆</i><span>EVIDENCE-LED STRATEGY</span><i>◆</i><span>COMMERCIAL PERSPECTIVE</span><i>◆</i><span>PREPARED FOR COURT</span></section>

      <section className="lt3-capabilities" id="lt3-capabilities">
        <div className="lt3-section-head"><span>Section 01</span><h2>When the dispute<br/>becomes the business.</h2><p>We advise businesses, directors, shareholders, and professionals on disputes affecting their operations, finances, and reputation.</p></div>
        <div className="lt3-cap-grid">{disputes.map(([n,title,text])=><a href="#lt3-contact" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b><Arrow/></b></a>)}</div>
      </section>

      <section className="lt3-brief" id="lt3-method">
        <div className="lt3-brief-title"><span>Section 02 · Our approach</span><h2>Understand the stakes.<br/><em>Choose the next move.</em></h2></div>
        <div className="lt3-columns"><p>Before choosing a legal step, we need to understand what you want to protect: your business, finances, reputation, or ability to move forward. We review the available information and explain where your position is strong - and where it is exposed.</p><p>We consider negotiation, mediation, and court proceedings against your priorities, likely costs, and timing. As the matter develops, we explain the options and seek your instructions on key decisions.</p><blockquote>A clear strategy explains the risks as well as the options.</blockquote></div>
        <div className="lt3-rules"><article><b>01</b><h3>Assess</h3><p>Understand the dispute, identify deadlines, and clarify the outcome you want to pursue.</p></article><article><b>02</b><h3>Plan</h3><p>Compare the available routes, discuss costs, and agree on the scope of the next stage.</p></article><article><b>03</b><h3>Act</h3><p>Carry out the agreed strategy, explain material developments, and revisit the plan when circumstances change.</p></article></div>
      </section>

      <section className="lt3-counsel" id="lt3-counsel">
        <div className="lt3-counsel-photo"><img src="/pi-lawyer-hero-generated.png" alt="Fictional litigation counsel Elena Rowe"/><div className="lt3-photo-code">AR / 01</div></div>
        <div className="lt3-counsel-copy"><span>Lead counsel · Fictional profile</span><h2>Elena<br/>Rowe</h2><p>Elena Rowe is a fictional trial and appellate lawyer representing businesses, directors, professionals, and institutions in complex disputes.</p><dl><div><dt>Approach</dt><dd>Prepared. Candid. Practical.</dd></div><div><dt>Forum</dt><dd>Ontario courts and tribunals</dd></div><div><dt>Focus</dt><dd>Commercial and public-law disputes</dd></div></dl><a href="#lt3-contact">Discuss a matter <Arrow/></a></div>
      </section>

      <section className="lt3-faq" id="lt3-faq">
        {/* Internal implementation note: a purchasing firm must approve its actual intake and fee arrangements before deployment. */}
        <div><span>Good to know</span><h2>Before you<br/>get in touch</h2></div>
        <div className="lt3-faq-list">{faqs.map(([question,answer],index)=><details key={question} defaultOpen={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="lt3-contact" id="lt3-contact">
        <div><span>Initial enquiry</span><h2>Let’s discuss<br/>your next step.</h2><p>Start with a brief, general outline and any known deadline. The first step is to check whether we can assist, including whether there is a conflict of interest, before arranging a further discussion.</p></div>
        <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
          {sent ? <DemoSuccess onReset={()=>setSent(false)}/> : <>
            <label><span>Your name</span><input required autoComplete="name"/></label><label><span>Email or phone</span><input required/></label><label><span>Organization - optional</span><input/></label><label><span>Short outline - optional</span><small className="lt3-field-help">Please do not include confidential documents or detailed evidence.</small><textarea rows="5"/></label><label className="lt3-check"><input type="checkbox" required/><span>I understand that this message does not create a lawyer-client relationship.</span></label><button type="submit">Request a call <Arrow/></button><small>Demonstration form only. Do not enter personal or confidential information. No enquiry will be sent.</small>
          </>}
        </form>
      </section>
    </main>
    <footer className="lt3-footer"><div className="lt3-logo"><b>A/R</b><span>ASHCROFT ROWE<small>TRIAL &amp; APPELLATE COUNSEL</small></span></div><p>A fictional law-firm website concept by Magneo. Ashcroft Rowe and Elena Rowe are fictional. This page does not offer legal services, and its forms do not send enquiries.</p><a href="#lt3-top">Back to top ↑</a></footer>
    <div className="lt3-mobile"><a href="#lt3-contact">Discuss a matter</a></div>
  </div>;
}

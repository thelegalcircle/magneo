import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const websiteGallery = [
  ['/portfolio/websites/personal-injury-classic-preview.webp','Personal injury · Classic','mockup'],
  ['/portfolio/websites/personal-injury-bold-preview.webp','Personal injury · Bold','mockup'],
  ['/portfolio/websites/litigation-editorial-preview.webp','Litigation · Editorial','mockup'],
  ['/brain-injury-head-3d-v2.png','Brain injury · 3D','brain'],
  ['/test5-cinematic-hero.png','Personal injury · Cinematic','cinematic'],
  ['/test6-family-hero.png','Personal injury · Family','family'],
];

const socialGallery = [
  ['/portfolio/social/immersive-scenario.webp','Immersive scenario reel'],
  ['/portfolio/social/commentary-reel.webp','Commentary reel'],
  ['/portfolio/social/podcast-interview-reel-cover-v3.jpg','Podcast interview reel'],
  ['/portfolio/social/conversational-reel.webp','Conversational reel'],
];

const aiGallery = [
  ['/portfolio/ai/custom-gpt.webp','Custom GPT'],
  ['/portfolio/ai/ai-content-system.webp','AI content systems'],
  ['/portfolio/ai/hubspot-automation.webp','HubSpot automation'],
];

function PreviewGallery({items, className, title, summary, offset=0, cta, id}){
  const [active,setActive]=useState(0);

  useEffect(()=>{
    if(items.length<2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let cycle;
    const start=window.setTimeout(()=>{
      setActive(current=>(current+1)%items.length);
      cycle=window.setInterval(()=>setActive(current=>(current+1)%items.length),4200);
    },4200+offset);
    return ()=>{window.clearTimeout(start);window.clearInterval(cycle);};
  },[items,offset]);

  const [src,label,style='']=items[active];
  const ctaContent=<><span><small>{cta.eyebrow}</small><b>{cta.label}</b></span><i aria-hidden="true">→</i></>;
  return <section className={`pf-mini-gallery ${className}`} id={id} aria-label={`${title}: rotating portfolio previews`}>
    <div className="pf-mini-head"><span>{title}</span><small>{summary}</small></div>
    <div className="pf-mini-stage">
      <figure className={`pf-mini-card ${style}`} key={`${label}-${active}`}>
        <img src={src} alt={label} loading="lazy"/>
        <figcaption><span>{String(active+1).padStart(2,'0')}</span>{label}</figcaption>
      </figure>
      <div className="pf-mini-progress" aria-hidden="true">{items.map((item,index)=><i className={index===active?'active':''} key={item[1]}/>)}</div>
    </div>
    {cta.href
      ? <Link className="pf-gallery-cta" to={cta.href} aria-label={cta.label}>{ctaContent}</Link>
      : <div className="pf-gallery-cta is-disabled" aria-disabled="true">{ctaContent}</div>}
  </section>;
}

export default function Portfolio(){
  useEffect(()=>{
    document.title='Portfolio | Magneo - Web, Social & AI Marketing';
    let description=document.querySelector('meta[name="description"]');
    if(!description){description=document.createElement('meta');description.name='description';document.head.appendChild(description);}
    description.content='Explore Magneo website concepts, social media creative, and AI-powered marketing ideas for businesses in regulated industries.';
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical);}
    canonical.href='https://magneo.ca/portfolio/';
  },[]);

  return <div className="pf-main pf-portfolio-hub">
    <section className="pf-hero">
      <div className="container pf-hero-inner">
        <div className="pf-kicker"><span>Magneo portfolio · Concepts &amp; demonstrations</span><span>Websites · Social media · AI marketing</span></div>
        <h1>Distinctive websites.<br/>Engaging content.<br/><em>AI-powered marketing.</em></h1>
        <div className="pf-hero-foot"><div><p>Explore website concepts, social media creative, and AI marketing demonstrations for businesses in regulated industries. Discover ideas for your next website, content campaign, or custom AI tool.</p><small className="pf-hero-disclosure">The examples shown are original Magneo concepts and demonstrations, not commissioned client projects.</small></div><a href="#portfolio-previews">Explore the portfolio <span>↓</span></a></div>
      </div>
      <div className="pf-hero-code" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
    </section>

    <section className="pf-index" id="portfolio-categories">
      <div className="pf-index-line" aria-hidden="true"/>
      <div className="container pf-index-heading"><h2>Portfolio</h2></div>
      <div className="container pf-index-grid">
        <div className="pf-index-card"><small>01 / Explore</small><strong>Websites</strong><span>Design, content &amp; development</span><i aria-hidden="true">↓</i></div>
        <div className="pf-index-card"><small>02 / Explore</small><strong>Social media</strong><span>Posts, video &amp; content strategy</span><i aria-hidden="true">↓</i></div>
        <div className="pf-index-card"><small>03 / Explore</small><strong>AI-powered marketing</strong><span>Custom tools, video &amp; automation</span><i aria-hidden="true">↓</i></div>
      </div>
      <div className="container pf-category-galleries" id="portfolio-previews" aria-label="Portfolio concepts and demonstrations">
        <PreviewGallery items={websiteGallery} className="pf-mini-web" id="website-gallery" title="Website concepts" summary="06 original concepts" cta={{eyebrow:'Featured collection · Websites',label:'View portfolio',href:'/portfolio/'}}/>
        <PreviewGallery items={socialGallery} className="pf-mini-social" id="social-gallery" title="Social media concepts" summary="04 reel concepts" offset={700} cta={{eyebrow:'Social media videos',label:'Watch video examples ↗'}}/>
        <PreviewGallery items={aiGallery} className="pf-mini-ai" id="ai-gallery" title="AI marketing concepts" summary="03 original concepts" offset={1400} cta={{eyebrow:'AI video & ad concepts',label:'Explore AI examples ↗'}}/>
      </div>
      <div className="container pf-web-meta"><span>Explore now</span><span>6 law firm website concepts</span><span>Personal injury + litigation</span></div>
    </section>

    <section className="pf-web-info" aria-labelledby="website-development-title">
      <div className="container pf-web-info-grid">
        <div><span>01 / Website development</span><h2 id="website-development-title">Show what sets you apart.<br/><em>Make the next step clear.</em></h2></div>
        <div><p>We bring strategy, copy, design, and development together to explain what you offer, help visitors assess whether you are the right fit, and make it easy to contact you.</p><div className="pf-capabilities"><span>Website strategy</span><span>Copy &amp; design</span><span>Development</span><span>SEO foundations</span></div><Link to="/services/website-design-for-regulated-professional-industries-magneo/">Explore website development ↗</Link></div>
      </div>
    </section>

    <section className="pf-discipline pf-social" id="social-media">
      <div className="container pf-social-grid">
        <div className="pf-social-copy"><span>02 / Social media marketing</span><h2>Share your expertise.<br/>Give people a reason to <em>follow.</em></h2><p>We turn your expertise and your audience’s questions into LinkedIn posts, short videos, and recurring content series - with a clear message and a consistent voice.</p><div className="pf-capabilities"><span>Content strategy</span><span>LinkedIn</span><span>Short-form video</span><span>Personal branding</span></div><Link to="/services/social-media-linkedin-marketing-for-regulated-industries/">Explore social media marketing ↗</Link></div>
        <div className="pf-social-board" aria-label="Illustrative social content series">
          <article className="pf-post pf-post-one"><small>Client questions / 01</small><b>Answer what people<br/>want to know.</b><i>↗</i></article>
          <article className="pf-post pf-post-two"><small>Your perspective</small><b>Explain what you think.<br/>Show why it matters.</b><div><i/><i/><i/><i/></div></article>
          <article className="pf-post pf-post-three"><span>03</span><b>One idea.<br/>Multiple formats.</b><small>Article → carousel → video</small></article>
          <div className="pf-board-label">EXAMPLE CONTENT SERIES</div>
        </div>
      </div>
    </section>

    <section className="pf-discipline pf-ai" id="ai-marketing">
      <div className="container">
        <div className="pf-discipline-head"><div><span>03 / AI-powered digital marketing</span><h2>Your brand.<br/><em>More possibilities with AI.</em></h2></div><div><p>From brand voice tools and custom GPTs to UGC-style videos, advertising creative, and automation, explore how AI can support your marketing.</p><Link to="/services/ai-powered-digital-marketing/">Explore AI-powered marketing ↗</Link></div></div>
        <div className="pf-ai-system">
          <div className="pf-ai-map" aria-label="AI marketing capabilities"><span className="pf-node node-one">Brand voice<small>Consistent messaging</small></span><i/><span className="pf-node node-two">Custom GPTs<small>Tailored assistants</small></span><i/><span className="pf-node node-three">Video &amp; ads<small>UGC-style video &amp; ad creative</small></span><i/><span className="pf-node node-four">Automation<small>Repeatable marketing tasks</small></span></div>
          <div className="pf-ai-detail"><span>AI marketing capabilities</span><h3>Create for your brand.<br/>Simplify the everyday.</h3><p>Give your team tools to write in your brand’s voice, explore new video and ad concepts, and automate repetitive marketing tasks.</p><div><b>AI brand voice</b><b>Custom GPTs</b><b>AI UGC-style video</b><b>AI ad creative</b><b>AI automation</b></div><small>AI tools &amp; creative possibilities</small></div>
        </div>
      </div>
    </section>

    <section className="pf-system"><div className="container"><span>How the work connects</span><div className="pf-system-flow"><b>Plan</b><i>→</i><b>Build</b><i>→</i><b>Publish</b><i>→</i><b>Review</b><i>→</i><b>Refine</b></div><p>Start with the service you need now. When your project spans several services, we keep the message, visual identity, and priorities consistent across them.</p></div></section>

    <section className="pf-cta"><div className="container"><span>Your next project</span><h2>Let’s talk about<br/><em>what you want to create.</em></h2><div><p>Need a new website, a clearer content direction, or help using AI in your marketing? Tell us what you have in mind and where you need support.</p><Link className="btn" to="/contact/">Discuss your project ↗</Link></div></div></section>
  </div>;
}

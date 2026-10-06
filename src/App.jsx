import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PersonalInjuryBoldTest from './PersonalInjuryBoldTest.jsx';
import LitigationEditorialTest from './LitigationEditorialTest.jsx';
import BrainInjury3DTest from './BrainInjury3DTest.jsx';
import PersonalInjuryCinematicTest from './PersonalInjuryCinematicTest.jsx';
import TestLawyer6 from './TestLawyer6.jsx';
import ImmigrationWelcome from './ImmigrationWelcome.jsx';
import NotaryDocumentDesk from './NotaryDocumentDesk.jsx';
import PersonalInjuryClassic from './PersonalInjuryClassic.jsx';
import PortfolioTest from './PortfolioTest.jsx';
import AboutTest from './AboutTest.jsx';
import AboutLegalTest from './AboutLegalTest.jsx';
import ContactTest from './ContactTest.jsx';
import HomeTest from './HomeTest.jsx';
import SiteSearch from './SiteSearch.jsx';
import { PrivacyPolicy, TermsOfUse } from './PolicyPages.jsx';
import FoundingClients from './FoundingClients.jsx';
import { LegalMarketingHub, LegalPracticePage, legalPracticeSlugs, legalPracticeSearchDescription } from './LegalMarketingPages.jsx';
import { FinancialMarketingHub, FinancialSpecialistPage, financialSpecialistSlugs, financialSpecialistSearchDescription } from './FinancialMarketingPages.jsx';
import { HealthcareMarketingHub, HealthcareSpecialistPage, healthcareSpecialistSlugs, healthcareSpecialistSearchDescription } from './HealthcareMarketingPages.jsx';
import { TechnologyMarketingHub, TechnologySpecialistPage, technologySpecialistSlugs, technologySpecialistSearchDescription } from './TechnologyMarketingPages.jsx';
import { ServicesDirectoryReview, ServicesOverviewReview, useServicesPageSeo } from './ServicesStaging.jsx';
import ServiceContentReview from './ServiceContentReview.jsx';
import { childServiceSlugs, getChildServiceData } from './data/child-service-review-data.js';
import { relatedArticlesFor } from './data/related-articles.js';
import './styles/test-lawyer.css';
import './styles/personal-injury-classic.css';
import './styles/test-lawyer2.css';
import './styles/personal-injury-bold-test.css';
import './styles/litigation-editorial-test.css';
import './styles/test-lawyer3.css';
import './styles/test-lawyer4.css';
import './styles/brain-injury-3d-test.css';
import './styles/test-lawyer5.css';
import './styles/personal-injury-cinematic-test.css';
import './styles/test-lawyer6.css';
import './styles/personal-injury-family-test.css';
import './styles/immigration-welcome.css';
import './styles/notary-document-desk.css';
import './styles/portfolio.css';
import './styles/portfolio-hub.css';
import './styles/portfolio-test.css';
import './styles/contact-test.css';
import './styles/home-test.css';
import './styles/footer.css';
import './styles/industries-hub.css';

const BLOG = 'https://blog.magneo.ca';
const BASE = 'https://magneo.ca';
const LEGAL_CIRCLE = 'https://thelegalcircle.ca/';

const industries = {
  law: { route: '/law-firm-marketing/', label: 'Law Firm Marketing Agency', short: 'Law Firms', hero: 'Marketing that wins clients<br/>without crossing <em>the line.</em>', intro: 'Magneo is a law firm marketing agency built for compliance-first growth. We help law firms build authority, rank higher, and generate qualified consultation requests within advertising guidelines.', stats: [['160%', 'More qualified case inquiries'], ['Top 3', 'Legal keyword rankings'], ['100%', 'Compliance-aware workflows'], ['6', 'Specialised services']], subs: [['Employment Lawyers Marketing', '/law-firm-marketing/employment-lawyers/'], ['Immigration Lawyers Marketing', '/law-firm-marketing/immigration-lawyers/'], ['Family Lawyers Marketing', '/law-firm-marketing/family-lawyers/'], ['Personal Injury Lawyers Marketing', '/law-firm-marketing/personal-injury-lawyers/'], ['Litigation Lawyers Marketing', '/law-firm-marketing/litigation-lawyers/']], guard: 'Law Society and state bar advertising rules' },
  finance: { route: '/financial-firm-marketing/', label: 'Financial Firm Marketing Agency', short: 'Financial Firms', hero: 'Grow financial trust<br/>with clearer authority and <em>safer demand.</em>', intro: 'Magneo builds marketing systems for wealth advisors, portfolio managers, investment firms, insurance advisors, tax advisors, and mutual fund dealers that need trust and qualified demand.', stats: [['Top 3', 'Finance rankings'], ['40+', 'Monthly inquiries'], ['100%', 'Compliance-aware messaging'], ['6', 'Financial verticals']], subs: [['Marketing for Wealth Advisors', '/financial-firm-marketing/marketing-for-wealth-advisors/'], ['Insurance Advisor Marketing', '/financial-firm-marketing/insurance-advisors/'], ['Investment Firm Marketing', '/financial-firm-marketing/investment-firms/'], ['Marketing for Mutual Fund Dealers', '/financial-firm-marketing/mutual-fund-dealers/'], ['Tax Advisor Marketing', '/financial-firm-marketing/tax-advisors/'], ['Portfolio Manager Marketing', '/financial-firm-marketing/portfolio-managers/']], guard: 'CIRO, CSA, fiduciary, disclaimer, and performance-claim review' },
  healthcare: { route: '/healthcare-marketing/', label: 'Healthcare Marketing Agency', short: 'Healthcare', hero: 'Grow patient demand<br/>with clarity, privacy, and <em>trust.</em>', intro: 'Marketing systems for clinics and providers that improve visibility, simplify patient decisions, and respect healthcare advertising expectations.', stats: [['90%', 'Patient booking growth'], ['11', 'Healthcare verticals'], ['100%', 'Privacy-aware content'], ['Top 3', 'Local search targets']], subs: [['Mental Health Clinic Marketing', '/healthcare-marketing/mental-health-clinics/'], ['Chiropractic Clinic Marketing', '/healthcare-marketing/chiropractic-clinics/'], ['Family Medicine Marketing', '/healthcare-marketing/family-medicine-clinics/'], ['Aesthetic Clinic Marketing', '/healthcare-marketing/aesthetic-clinics/'], ['Physiotherapy Clinic Marketing', '/healthcare-marketing/physiotherapy-clinics/'], ['Dental Clinics Marketing', '/healthcare-marketing/dental-clinics/']], guard: 'Healthcare advertising, privacy, patient trust, and evidence-aware messaging' },
  tech: { route: '/tech-company-marketing/', label: 'Tech Company Marketing Agency', short: 'Tech Companies', hero: 'Turn technical credibility<br/>into demos, users, and <em>deals.</em>', intro: 'Growth systems for FinTech, LegalTech, Crypto, AI, and SaaS companies that need authority, clarity, and demand without hype.', stats: [['70%', 'Organic lead share'], ['5', 'Tech verticals'], ['8-16', 'Monthly leadership posts'], ['100%', 'Accuracy-first messaging']], subs: [['SaaS Marketing Agency', '/tech-company-marketing/saas-marketing/'], ['FinTech Marketing Agency', '/tech-company-marketing/fintech-marketing/'], ['LegalTech Marketing Agency', '/tech-company-marketing/legaltech-marketing/'], ['Crypto Marketing Agency', '/tech-company-marketing/crypto-marketing/'], ['AI Marketing Agency', '/tech-company-marketing/ai-marketing/']], guard: 'Accuracy, investor scrutiny, technical proof, security, and regulatory sensitivity' }
};

const coreServices = [
  ['SEO for Regulated Industries', '/services/seo-for-regulated-industries/', 'Authority-driven rankings that respect professional rules.'],
  ['PPC & Landing Pages for Regulated Industries', '/services/ppc-landing-pages-for-regulated-industries/', 'High-intent Google Ads and compliant conversion pages.'],
  ['Social Media Marketing for Regulated Industries', '/services/social-media-linkedin-marketing-for-regulated-industries/', 'Leadership content and outreach systems.'],
  ['AI Automation & CRM', '/services/ai-automation-for-regulated-industries-magneo/', 'CRM setup and connected workflows for enquiries, follow-up, review, and reporting.'],
  ['Personal Branding for Regulated Expert-Driven Industries', '/services/personal-branding-for-regulated-professionals/', 'Expert positioning for trusted professionals.'],
  ['AI-Powered Digital Marketing', '/services/ai-powered-digital-marketing/', 'AI SEO, AI social, AI UGC, AI video, web design, conversion, and content marketing.']
];

const serviceMenus = [
  ['Website Design', '/services/website-design-for-regulated-professional-industries-magneo/', [['Website Design & Rebrand for Law Firms', '/services/website-design-rebrand-for-law-firms-magneo/'], ['Website Design for Healthcare Clinics & Doctors', '/services/website-design-for-healthcare-clinics-doctors-magneo/'], ['Website Design for Financial Advisors & Wealth Firms', '/services/website-design-for-financial-advisors-wealth-firms-magneo/'], ['Website Design for Tech Companies & SaaS Products', '/services/website-design-for-tech-companies-saas-products-magneo/']]],
  ['SEO for Regulated Industries', '/services/seo-for-regulated-industries/', [['SEO for Law Firms & Legal Professionals', '/services/seo-for-the-legal-industry/'], ['SEO for Financial Advisors & Wealth Firms', '/services/seo-for-financial-advisors-wealth-firms/'], ['SEO for Healthcare & MedTech Industry', '/services/seo-for-the-healthcare-medtech-industry/']]],
  ['Social Media Marketing', '/services/social-media-linkedin-marketing-for-regulated-industries/', [['Social Media Marketing for Law Firms', '/services/linkedin-growth-law-firms/'], ['Social Media Marketing for Financial Advisors & FinTech', '/services/linkedin-growth-financial-advisors/'], ['Social Media Marketing for Healthcare Providers & Clinics', '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/'], ['Social Media for Tech & SaaS Companies', '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/'], ['Social Media Marketing for Crypto & AI Companies', '/services/crypto-and-ai-social-media/']]],
  ['AI Automation & CRM', '/services/ai-automation-for-regulated-industries-magneo/', [['AI Automation & CRM Implementation for Law Firms', '/services/ai-automation-for-law-firms-legal-departments-magneo/'], ['CRM & AI Automation for Financial Advisors & FinTech', '/services/ai-automation-for-financial-advisors-firms-fintech-magneo/'], ['CRM & AI Automation for Tech, SaaS & AI Companies', '/services/ai-marketing-automation-for-tech-saas-ai-companies-magneo/'], ['CRM & AI Automation for Healthcare Providers & Clinics', '/services/ai-automation-for-healthcare-providers-clinics-magneo/']]],
  ['AI-Powered Digital Marketing', '/services/ai-powered-digital-marketing/', [['AI SEO', '/services/ai-seo/'], ['AI Social Media Marketing', '/services/ai-social-media-marketing/'], ['AI UGC & AI Video Production', '/services/ai-ugc-ai-video-production/'], ['AI Web Design & Conversion', '/services/ai-web-design-conversion/'], ['AI Content Marketing', '/services/ai-content-marketing/']]],
  ['PPC & Landing Pages', '/services/ppc-landing-pages-for-regulated-industries/', [['PPC & Landing Pages for Law Firms', '/services/ppc-landing-pages-for-law-firms/'], ['PPC & Landing Pages for Healthcare & MedTech', '/services/ppc-landing-pages-for-healthcare-medtech/'], ['PPC & Landing Pages for Financial Advisors & FinTech', '/services/ppc-landing-pages-for-financial-advisors-fintech/']]],
  ['Personal Branding', '/services/personal-branding-for-regulated-professionals/', [['Personal Branding for Lawyers & Legal Professionals', '/services/personal-branding-for-lawyers-legal-professionals/'], ['Personal Branding for Financial Advisors & Wealth Professionals', '/services/personal-branding-for-financial-advisors-wealth-professionals/']]]
];

const aiServices = [
  ['Search', 'AI SEO', '/services/ai-seo/', 'Search architecture, entity strategy, content briefs, internal linking, and optimization workflows built for regulated topics.'],
  ['Social', 'AI Social Media Marketing', '/services/ai-social-media-marketing/', 'LinkedIn and social content systems that turn expertise into consistent, reviewable authority content.'],
  ['Video', 'AI UGC & AI Video Production', '/services/ai-ugc-ai-video-production/', 'Scripts, short-form video concepts, avatar-assisted production, and UGC-style campaigns with brand guardrails.'],
  ['Conversion', 'AI Web Design & Conversion', '/services/ai-web-design-conversion/', 'Landing pages, UX testing ideas, CRO messaging, and conversion paths informed by buyer intent.'],
  ['Content', 'AI Content Marketing', '/services/ai-content-marketing/', 'Editorial calendars, topical maps, long-form content, repurposing systems, and expert-led review workflows.'],
  ['Workflow', 'Content Review & Approval Workflows', '/services/ai-automation-for-regulated-industries-magneo/#content-review-workflows', 'Organised stages for checking drafts, gathering feedback, and approving content before publication.']
];

const verticals = Object.values(industries).flatMap((i) => i.subs.map(([label, path]) => ({ label, path, intro: `Compliance-aware SEO, website, PPC, LinkedIn, AI automation, and authority systems for ${label.toLowerCase()}.` })));
const extraServiceSlugs = serviceMenus.flatMap(([, path, items]) => [path, ...items.map(([, itemPath]) => itemPath)]).map((path) => path.split('/').filter(Boolean).pop()).concat(['healthcare-medtech']);
const specialistSearchDescription = { law: legalPracticeSearchDescription, finance: financialSpecialistSearchDescription, healthcare: healthcareSpecialistSearchDescription, tech: technologySpecialistSearchDescription };
const serviceSearchDescriptions = {
  'Website Design': 'Clear service pages, distinctive design and straightforward enquiry routes for your website.',
  'SEO for Regulated Industries': 'Search-focused service pages, useful articles and local listings that explain your expertise.',
  'Social Media Marketing': 'Plan and produce posts and videos that explain your services in your brand’s voice.',
  'AI Automation & CRM': 'Organise enquiries, assign follow-up and connect your team’s CRM and marketing tools.',
  'AI-Powered Digital Marketing': 'Use AI-assisted research, content, video and website production with human review.',
  'PPC & Landing Pages': 'Campaign strategy, ad creative and focused landing pages with measurable enquiry reporting.',
  'Personal Branding': 'Clarify your expertise, improve your professional profile and plan useful content.'
};
const industrySearchDescriptions = {
  law: 'Websites, local search, practical content and enquiry follow-up for law firms.',
  finance: 'Explain financial services through clear websites, educational content and organised enquiries.',
  healthcare: 'Clinic websites, accurate listings and useful information about services and booking options.',
  tech: 'Explain your technology product through websites, demonstrations, content and focused campaigns.'
};
const searchItems = [
  ...serviceMenus.flatMap(([group, groupPath, children]) => [
    { title: group, url: groupPath, type: 'Service', description: serviceSearchDescriptions[group], keywords: `${group} service agency support` },
    ...children.map(([title, url]) => {
      const slug = url.split('/').filter(Boolean).pop();
      const page = getChildServiceData(slug);
      return { title, url, type: 'Service', description: page?.metaDescription || page?.description || `Explore ${title} services, project options and next steps.`, keywords: `${group} ${title}` };
    })
  ]),
  ...Object.entries(industries).flatMap(([key, industry]) => [
    { title: industry.short, url: industry.route, type: 'Industry', description: industrySearchDescriptions[key], keywords: `${industry.label} ${industry.short}` },
    ...industry.subs.map(([title, url]) => ({ title, url, type: 'Industry', description: specialistSearchDescription[key](url.split('/').filter(Boolean).pop()) || `Explore ${title} services, website content and contact routes.`, keywords: `${industry.short} ${title}` }))
  ]),
  { title: 'Magneo Portfolio', url: '/portfolio/', type: 'Portfolio', description: 'Explore Magneo website concepts, social creative and AI marketing demonstrations.', keywords: 'work examples projects designs reels video' },
  { title: 'Personal injury · Classic', url: '/portfolio/legal-websites/personal-injury-classic/', type: 'Portfolio', description: 'A classic personal-injury law website concept.', keywords: 'lawyer law firm website design legal' },
  { title: 'Immigration law · Welcome', url: '/portfolio/legal-websites/immigration-welcome/', type: 'Portfolio', description: 'A welcoming immigration-law website concept.', keywords: 'immigration lawyer law firm website design legal' },
  { title: 'Personal injury · Family-focused', url: '/portfolio/legal-websites/personal-injury-family-focused/', type: 'Portfolio', description: 'A family-focused personal-injury website concept.', keywords: 'lawyer law firm website design legal' },
  { title: 'Litigation · Editorial', url: '/portfolio/legal-websites/litigation-editorial/', type: 'Portfolio', description: 'An editorial litigation-law website concept.', keywords: 'litigator lawyer law firm website design legal' },
  { title: 'Personal injury · Bold', url: '/portfolio/legal-websites/personal-injury-bold/', type: 'Portfolio', description: 'A bold personal-injury law website concept.', keywords: 'lawyer law firm website design legal' },
  { title: 'Brain injury · 3D', url: '/portfolio/legal-websites/brain-injury-3d/', type: 'Portfolio', description: 'A dimensional brain-injury law website concept.', keywords: 'lawyer law firm website design legal' },
  { title: 'Personal injury · Cinematic', url: '/portfolio/legal-websites/personal-injury-cinematic/', type: 'Portfolio', description: 'A cinematic personal-injury law website concept.', keywords: 'lawyer law firm website design legal' },
  { title: 'Notary services · Document desk', url: '/portfolio/notary-services/', type: 'Portfolio', description: 'A practical notary-services website concept.', keywords: 'notary legal website design' }
];
const correctedParentServiceSlugs = ['website-design-for-regulated-professional-industries-magneo', 'seo-for-regulated-industries', 'social-media-linkedin-marketing-for-regulated-industries', 'ai-automation-for-regulated-industries-magneo', 'ppc-landing-pages-for-regulated-industries', 'personal-branding-for-regulated-professionals'];
const correctedServiceSlugs = new Set([...correctedParentServiceSlugs, ...childServiceSlugs]);
const blogInsights = [['Hyper-Personalization with AI for SaaS & Tech Brands', `${BLOG}/blog/hyper-personalization-with-ai-for-saas-tech-brands/`], ['Community Building & User-Generated Content for SaaS & AI Companies', `${BLOG}/blog/community-building-user-generated-content-for-saas-ai-companies/`], ['Reimagining Digital Marketing Fundamentals for Law Firms', `${BLOG}/blog/reimagining-digital-marketing-fundamentals-for-law-firms-2025/`], ['Reputation Management for Clinics', `${BLOG}/blog/reputation-management-for-clinics-growing-your-google-profile-in-2025/`]];
const process = [['01', 'Discovery & Audit', 'We review positioning, search visibility, conversion paths, and compliance constraints.'], ['02', 'Strategy Blueprint', 'We map page architecture, messaging, campaigns, and proof points needed to earn trust.'], ['03', 'Execution', 'We build content, pages, funnels, automation, and reporting around the approved strategy.'], ['04', 'Optimization', 'We refine based on rankings, qualified inquiries, booked calls, and pipeline quality.']];
const serviceProcesses = {
  'seo-for-regulated-industries': {
    heading: 'We turn search priorities into practical improvements.',
    items: [['01', 'We review your search presence', 'We assess your website, content, and available search data to identify relevant opportunities and technical issues.'], ['02', 'We recommend the priorities', 'We propose the pages, topics, and improvements to focus on. You confirm which services and audiences matter most to your business.'], ['03', 'We implement the agreed work', 'We complete the improvements included in the scope. You confirm specialist information and approve content before publication.'], ['04', 'We review progress', 'We explain the work completed and the available performance data. For ongoing engagements, we use those findings to refine the next priorities.']],
  },
  'healthcare-medtech': {
    heading: 'We plan and deliver the agreed healthcare marketing work.',
    items: [['01', 'We define the audience and scope', 'We discuss whether the work is intended for patients, healthcare professionals, or MedTech buyers, then propose the priorities and deliverables for your approval.'], ['02', 'We create the agreed materials', 'We develop the work included in the scope using the service, product, and audience information you provide.'], ['03', 'We refine with your review', 'You confirm the accuracy of healthcare or product information and arrange any required specialist approvals. We complete the agreed revisions.'], ['04', 'We deliver and explain the next steps', 'We provide the approved work and explain how to use it. Publishing, campaign management, updates, and ongoing support are included only where stated in the agreed scope.']],
  },
};

function useSeo(title, description, canonical) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
  }, [title, description, canonical]);
}
function useNoIndexSeo(title, description, canonical) {
  useSeo(title, description, canonical);
  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, follow';
    robots.dataset.magneoPrivateReview = 'true';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);
}
function ScrollTop(){ const { pathname } = useLocation(); useEffect(() => { scrollTo(0,0); }, [pathname]); return null; }
function titleFromSlug(slug='regulated-industries'){ const acronyms={seo:'SEO',ppc:'PPC',ai:'AI',saas:'SaaS',ugc:'UGC',cro:'CRO'}; return slug.replace(/magneo/g,'').split('-').filter(Boolean).map((w)=>['for','and','the'].includes(w)?w:(acronyms[w]||w[0].toUpperCase()+w.slice(1))).join(' ').replace(/\s+/g,' ').trim(); }
const serviceTitleOverrides = {
  'personal-branding-for-financial-advisors-wealth-professionals': 'Personal Branding for Financial Advisors',
  'social-media-linkedin-leadership-for-healthcare-providers-magneo': 'Social Media Marketing for Healthcare Providers & Clinics',
  'social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo': 'LinkedIn Marketing for Tech & SaaS Companies',
  'social-media-linkedin-marketing-for-regulated-industries': 'LinkedIn Marketing for Regulated Industries',
  'website-design-for-regulated-professional-industries-magneo': 'Web Design for Regulated Industries'
};
function kindFromText(text=''){ const s=text.toLowerCase(); if(s.includes('financial')||s.includes('advisor')||s.includes('wealth')||s.includes('fintech')) return 'finance'; if(s.includes('health')||s.includes('clinic')||s.includes('medical')) return 'healthcare'; if(s.includes('tech')||s.includes('saas')||s.includes('crypto')||s.includes('ai')) return 'tech'; return 'law'; }

function Mega({ label, to, groups }) { return <div className="nav-item"><Link className="nav-trigger" to={to}>{label}</Link><div className="mega"><div className="mega-grid">{groups.map(([heading, href, items]) => <div className="mega-col" key={heading}><Link className="mega-head" to={href}>{heading}</Link>{items.map(([name, path]) => <Link className="mega-link" to={path} key={path}>{name}</Link>)}</div>)}</div></div></div>; }
function HomeMenu(){ return <div className="nav-item nav-home"><Link className="nav-trigger" to="/">Home</Link><div className="nav-home-menu"><Link to="/about/">About Magneo</Link><a href={BLOG}>Insights &amp; Blog</a><a href={LEGAL_CIRCLE} target="_blank" rel="noopener noreferrer">The Legal Circle Community <span aria-hidden="true">↗</span></a></div></div>; }
const legalConceptRoutes = {'/portfolio/legal-websites/personal-injury-classic':PersonalInjuryClassic,'/portfolio/legal-websites/personal-injury-bold':PersonalInjuryBoldTest,'/portfolio/legal-websites/litigation-editorial':LitigationEditorialTest,'/portfolio/legal-websites/brain-injury-3d':BrainInjury3DTest,'/portfolio/legal-websites/personal-injury-cinematic':PersonalInjuryCinematicTest,'/portfolio/legal-websites/personal-injury-family-focused':TestLawyer6,'/portfolio/legal-websites/immigration-welcome':ImmigrationWelcome,'/portfolio/notary-services':NotaryDocumentDesk};
function Layout({ children }) { const { pathname } = useLocation(); const cleanPath=pathname.replace(/\/$/,'')||'/'; const Concept=legalConceptRoutes[cleanPath]; if(Concept) return <Concept/>; if(cleanPath==='/portfolio/legal-websites') return <Navigate to="/portfolio/" replace/>; if(cleanPath==='/portfolio') children=<PortfolioTest/>; const contactPage=cleanPath==='/contact'; return <><nav className="nav"><div className="container nav-inner"><Link className="brand" to="/">Magneo</Link><div className="nav-links"><HomeMenu/><Mega label="Services" to="/services/" groups={serviceMenus}/><Mega label="Industries" to="/industries/" groups={Object.values(industries).map((i)=>[i.label,i.route,i.subs])}/><Link to="/portfolio/">Portfolio</Link>{contactPage?<a href="#contact-enquiry">Contact</a>:<Link to="/contact/">Contact</Link>}<SiteSearch items={searchItems} mobile/></div><SiteSearch items={searchItems}/>{contactPage?<a className="btn" href="#contact-enquiry">Discuss your project</a>:<Link className="btn" to="/contact/">Discuss your project</Link>}</div></nav><main>{children}</main><Footer/></>; }
function Hero({ label, title, intro, stat='SEO', statText='Compliance-aware digital marketing systems for regulated industries.' }) { return <section className="hero"><div className="container hero-grid"><div><div className="crumb">Home / {label}</div><div className="label">{label}</div><h1 dangerouslySetInnerHTML={{__html:title}}/><p className="intro">{intro}</p><div className="actions"><Link className="btn" to="/contact/">Request a free audit</Link><Link className="btn outline" to="/services/">Explore services</Link></div></div><div className="glass"><span className="label">Magneo system</span><strong>{stat}</strong><p>{statText}</p></div></div></section>; }
function Marquee({ items }) { const list = items || ['AI SEO','AI Social Media','AI UGC','AI Video Production','AI Web Design','AI Content Marketing','Compliance-Aware AI','Regulated Growth']; return <div className="marquee ai-marquee">{list.map(([label,path]) => <Link key={label} to={path}>{label}</Link>)}</div>; }
function ServicesGrid(){ return <section className="section"><div className="container"><div className="section-head"><div><div className="label">What we do</div><h2>A full growth system<br/>for high-trust industries</h2></div><Link to="/services/">View all services</Link></div><div className="svc-grid">{coreServices.map(([title,path,desc],i)=><Link className="svc" to={path} key={path}><div className="svc-top"><span>0{i+1}</span><b>↗</b></div><h3>{title}</h3><p>{desc}</p><small>Regulated growth</small></Link>)}</div></div></section>; }
function RelatedLinks(){ return <section className="related-section"><div className="container related-grid"><div><h2>Related Services</h2><i/><ul>{coreServices.slice(0,5).map(([n,p])=><li key={p}><Link to={p}>{n}</Link></li>)}</ul></div><div><h2>Related Industries</h2><i/><ul>{Object.values(industries).map((i)=><li key={i.route}><Link to={i.route}>{i.short}</Link></li>)}</ul></div><div><h2>Related Insights</h2><i/><ul>{blogInsights.map(([n,p])=><li key={p}><a href={p}>{n}</a></li>)}</ul></div></div></section>; }
function ServiceRelatedLinks({ slug }){ const selected=relatedArticlesFor({slug}); useEffect(()=>{ if(window.location.hash==='#related-resources') document.getElementById('related-resources')?.scrollIntoView(); },[]); return <section id="related-resources" className="related-section scr-related scr-related-with-articles"><div className="container related-grid"><div><h2>Related Services</h2><i/><ul>{coreServices.slice(0,5).map(([n,p])=><li key={p}><Link to={p}>{n}</Link></li>)}</ul></div><div><h2>Related Industries</h2><i/><ul>{Object.values(industries).map((i)=><li key={i.route}><Link to={i.route}>{i.short}</Link></li>)}</ul></div><div><h2>Related Articles</h2><i/><ul>{selected.map(([n,p])=><li key={p}><a href={p}>{n}</a></li>)}</ul></div></div></section>; }
function Process({ heading = 'Strategy first, then execution with guardrails.', items = process }){ return <section className="section dark"><div className="container"><div className="label">How we work</div><h2>{heading}</h2><div className="process">{items.map(([n,t,d])=><div className="process-row" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>; }
function CTA(){ return <section className="section"><div className="container"><div className="cta"><h2>Ready to build the most trusted<br/>version of your <em>brand?</em></h2><div className="actions"><Link className="btn" to="/contact/">Request a free audit</Link><span>Free · No commitment · 30 min call</span></div></div></div></section>; }

function Home(){ useSeo('Magneo | Digital Marketing for Regulated Industries','Authority-first marketing systems for regulated industries.',`${BASE}/`); return <><section className="home-hero"><div className="container"><div className="hero-tag"><span/>Compliance-safe marketing · Canada & USA</div><h1>Marketing that works<br/>in <em>regulated</em><br/>industries.</h1><p className="hero-sub">Authority-first systems for law firms, financial advisors, healthcare providers, and tech companies. Built to rank, convert, and stay compliant.</p><div className="actions"><Link className="btn" to="/contact/">Request a brand audit</Link><Link className="btn outline" to="/services/">See our work</Link></div><div className="home-stats">{[['160%','More qualified case inquiries'],['90%','Patient booking growth'],['Top 3','Google rankings'],['70%','Organic lead share']].map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></div></section><ServicesGrid/><Process/><CTA/></>; }
function ServicesHub(){ useServicesPageSeo('Marketing Services for Regulated Industries | Magneo','Explore website design, SEO, social media, paid advertising, AI creative, and automation for regulated industries and expert-led businesses.',`${BASE}/services/`); return <><Hero label="All Services" title="Every service, built for<br/><em>regulated industries.</em>" intro="Core service areas designed around compliance, authority, and measurable ROI." stat="43+" statText="Service pages across law, finance, healthcare, technology, SaaS, AI, and regulated professional markets."/><section className="section"><div className="container"><div className="label">Service areas</div><h2>Everything you need to grow in a regulated market.</h2>{serviceMenus.map(([t,h,items])=><div className="service-card" key={t}><div className="service-head"><div><h3>{t}</h3><p>Strategy, execution, and reporting for regulated industries.</p></div><Link to={h}>View service ↗</Link></div><div className="subgrid">{items.map(([label,path])=><Link className="sub" to={path} key={path}><b>{label}</b><br/><small>{t}</small></Link>)}</div></div>)}</div></section><RelatedLinks/><CTA/></>; }
function IndustryPage({ kind }){ const i=industries[kind]; useSeo(`${i.label} | Magneo`,i.intro,`${BASE}${i.route}`); return <><Hero label={i.label} title={i.hero} intro={i.intro} stat={i.stats[0][0]} statText={i.stats[0][1]}/><Marquee items={[[`${i.short} SEO`,'/services/seo-for-regulated-industries/'],['Compliant PPC','/services/ppc-landing-pages-for-regulated-industries/'],['LinkedIn Growth','/services/social-media-linkedin-marketing-for-regulated-industries/'],['AI Automation','/services/ai-automation-for-regulated-industries-magneo/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/'],['Regulated Growth','/services/']]}/><section className="section soft"><div className="container"><div className="label">Markets we serve</div><h2>Specialised marketing for every buyer journey.</h2><div className="grid">{i.subs.map(([n,p])=><Link className="card" to={p} key={p}><small>Explore</small><h3>{n}</h3><p>SEO, website, PPC, LinkedIn, automation, and authority systems tailored for {n.toLowerCase()}.</p></Link>)}</div></div></section><ServicesGrid/><Process/><RelatedLinks/><CTA/></>; }
const industriesHubCards = [
  ['LAW FIRMS', 'Marketing for law firms', 'Websites, practice-area content, expert-led video, and campaigns that explain your legal services and help prospective clients understand how to contact the firm.', '/law-firm-marketing/', 'Explore law firm marketing'],
  ['FINANCIAL FIRMS', 'Marketing for financial professionals', 'Clear positioning, educational content, websites, and campaigns for advisors and financial firms that want to communicate their services and approach.', '/financial-firm-marketing/', 'Explore financial marketing'],
  ['HEALTHCARE', 'Marketing for healthcare providers', 'Clinic websites, service content, video, and campaigns that make care information easier to understand and booking options easier to find.', '/healthcare-marketing/', 'Explore healthcare marketing'],
  ['TECHNOLOGY', 'Marketing for technology companies', 'Product websites, demonstrations, founder-led content, and campaigns that explain what your technology does and why it matters to potential buyers.', '/tech-company-marketing/', 'Explore technology marketing']
];
const industriesHubServices = [
  ['Website design', '/services/website-design-for-regulated-professional-industries-magneo/'],
  ['SEO', '/services/seo-for-regulated-industries/'],
  ['Social media marketing', '/services/social-media-linkedin-marketing-for-regulated-industries/'],
  ['Video and AI content production', '/services/ai-ugc-ai-video-production/'],
  ['PPC and landing pages', '/services/ppc-landing-pages-for-regulated-industries/'],
  ['Personal branding', '/services/personal-branding-for-regulated-professionals/'],
  ['AI automation and CRM implementation', '/services/ai-automation-for-regulated-industries-magneo/']
];
const industriesHubInsights = [
  ['Reimagining Digital Marketing Fundamentals for Law Firms', `${BLOG}/blog/reimagining-digital-marketing-fundamentals-for-law-firms-2025/`],
  ['Quality Over Quantity: Creating Engaging Financial Content That Converts', 'https://blog.magneo.ca/blog/quality-over-quantity-creating-engaging-financial-content-that-converts/'],
  ['Reputation Management for Clinics', `${BLOG}/blog/reputation-management-for-clinics-growing-your-google-profile-in-2025/`],
  ['Hyper-Personalization with AI for SaaS & Tech Brands', `${BLOG}/blog/hyper-personalization-with-ai-for-saas-tech-brands/`]
];
function IndustriesHub(){
  const title='Industries We Serve | Legal, Finance, Healthcare & Tech | Magneo';
  const description='Explore Magneo’s marketing services for law firms, financial professionals, healthcare providers, and technology companies.';
  useSeo(title,description,`${BASE}/industries/`);
  useEffect(()=>{
    const tags=[['property','og:title',title],['property','og:description',description],['property','og:url',`${BASE}/industries/`],['name','twitter:title',title],['name','twitter:description',description]];
    const created=[];
    tags.forEach(([attribute,key,content])=>{ let tag=document.head.querySelector(`meta[${attribute}="${key}"]`); if(!tag){ tag=document.createElement('meta'); tag.setAttribute(attribute,key); document.head.appendChild(tag); created.push(tag); } tag.setAttribute('content',content); });
    return ()=>created.forEach((tag)=>tag.remove());
  },[title,description]);
  return <div className="industries-hub">
    <section className="industries-hero"><div className="container industries-hero-copy"><div className="crumb">Home / Industries</div><div className="label">Industries</div><h1>Marketing for regulated industries and expert-led businesses.</h1><p>Website design, content, video, paid campaigns, and automation for law firms, financial professionals, healthcare providers, and technology companies. Each project starts with your services, your audience, and what they need to understand before choosing your business.</p><div className="actions"><a className="btn" href="#industries">Find your industry</a><Link className="btn outline" to="/services/">Explore services</Link></div></div></section>
    <section id="industries" className="section industries-card-section" aria-labelledby="industries-title"><div className="container"><div className="label">Industry marketing</div><h2 id="industries-title">Find the marketing approach for your industry.</h2><div className="industries-card-grid">{industriesHubCards.map(([eyebrow,heading,copy,path,link])=><article className="industries-card" key={path}><small>{eyebrow}</small><h3>{heading}</h3><p>{copy}</p><Link to={path}>{link} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
    <section className="section soft industries-positioning" aria-labelledby="industries-positioning-title"><div className="container"><div className="industries-positioning-copy"><div className="label">Built for context</div><h2 id="industries-positioning-title">Your industry shapes the message.</h2><p>A clinic website needs clear service and booking information. A law firm needs to explain its practice and the first conversation. An advisor needs to communicate their approach, while a technology company needs to demonstrate its product.</p><p>Magneo develops the content, design, and marketing around those specific needs.</p></div></div></section>
    <section className="section industries-services" aria-labelledby="industries-services-title"><div className="container"><div className="industries-services-head"><div><div className="label">Services</div><h2 id="industries-services-title">Explore the services behind the work.</h2></div><p>Choose a focused service or combine the disciplines needed for a larger project.</p></div><div className="industries-service-grid">{industriesHubServices.map(([name,path])=><Link to={path} key={path}><span>{name}</span><span aria-hidden="true">↗</span></Link>)}</div><Link className="industries-all-services" to="/services/">View all services <span aria-hidden="true">→</span></Link></div></section>
    <section className="related-section industries-insights" aria-labelledby="industries-insights-title"><div className="container"><h2 id="industries-insights-title">Related Insights</h2><i/><ul>{industriesHubInsights.map(([name,path])=><li key={path}><a href={path}>{name}</a></li>)}</ul></div></section>
    <section className="section industries-contact" aria-labelledby="industries-contact-title"><div className="container"><div className="cta"><h2 id="industries-contact-title">Let’s discuss your business and its next priority.</h2><p>Whether you need a clearer website, stronger content, or a more organised marketing process, Magneo can help define the project.</p><Link className="btn" to="/contact/#contact-enquiry">Discuss your project</Link></div></div></section>
  </div>;
}
function AIPage(){ useSeo('AI-Powered Digital Marketing | Magneo','AI SEO, AI social media marketing, AI UGC and video production, AI web design, conversion, and content marketing for regulated industries.',`${BASE}/services/ai-powered-digital-marketing/`); return <><Hero label="AI Marketing Systems" title="AI-powered digital marketing<br/>for <em>regulated industries.</em>" intro="Magneo builds AI-assisted marketing systems that help regulated businesses publish better content, improve search visibility, create trustworthy video and UGC, and convert more qualified demand without losing compliance discipline." stat="AI" statText="Search, social, video, web, content, and governance workflows."/><Marquee items={aiServices.map(([,name,path])=>[name,path]).concat([['Regulated Growth','/services/ai-powered-digital-marketing/']])}/><section className="section"><div className="container"><div className="label">AI service areas</div><h2>Use AI where it strengthens quality, speed, and trust.</h2><div className="grid">{aiServices.map(([tag,name,path,desc])=><Link className="card" to={path} key={path}><small>{tag}</small><h3>{name}</h3><p>{desc}</p></Link>)}</div></div></section><Process/><RelatedLinks/><CTA/></>; }
function ServicePage({ name }){ const title = serviceTitleOverrides[name] || titleFromSlug(name); const kind = kindFromText(title); const ai = name?.startsWith('ai-') || name?.includes('ai-') || name?.includes('compliance-aware-ai'); const intro = ai ? `${title} for regulated industries, built with human review, compliance guardrails, and measurable conversion paths.` : `A compliance-aware ${title.toLowerCase()} service page for regulated industries, built around authority, qualified demand, and measurable conversion.`; const serviceProcess = serviceProcesses[name]; useSeo(`${title} | Magneo`, intro, `${BASE}/services/${name}/`); return <><Hero label={`Service · ${title}`} title={`${title}<br/>for <em>regulated markets.</em>`} intro={intro} stat={ai ? 'AI' : 'SEO'} statText="Current URL preserved for SEO and launch migration."/><section className="section"><div className="container"><div className="label">Who this is for</div><h2>Built for teams where trust is the conversion asset.</h2><div className="grid four">{Object.values(industries).map((i)=><Link className="card" to={i.route} key={i.route}><small>{i.short}</small><h3>{title}</h3><p>{i.intro}</p></Link>)}</div></div></section><Process heading={serviceProcess?.heading} items={serviceProcess?.items}/><ServiceRelatedLinks slug={name}/><CTA/></>; }
function Vertical({ item }){ const kind=kindFromText(item.label); useSeo(`${item.label} | Magneo`,item.intro,`${BASE}${item.path}`); return <><Hero label={item.label} title={`${item.label}<br/>built for <em>qualified demand.</em>`} intro={item.intro} stat={kind.toUpperCase()}/><ServicesGrid/><Process/><RelatedLinks/><CTA/></>; }
function About(){ useNoIndexSeo('Our Team | Magneo','This legacy Magneo team page is no longer intended for search indexing.',`${BASE}/our-team/`); return <><Hero label="About Magneo" title="Where regulated industries<br/>come to grow <em>safely.</em>" intro="Magneo is a precision-built growth partner for teams that need more than marketing fluff. They need results they can trust." stat="CA+US"/><Process/><RelatedLinks/><CTA/></>; }
function Contact(){ return <ContactTest/>; }
function Generic({ title='Page', path='/' }){ useSeo(`${title} | Magneo`,'Magneo React rebuild page preserving the existing SEO route.',`${BASE}${path}`); return <><Hero label="Magneo" title={`${title}<br/><em>route preserved.</em>`} intro="This page is preserved in the React migration and ready for final copy expansion."/><RelatedLinks/><CTA/></>; }
function GuideInitial(){
  useSeo('Personal Branding Guide for Legal Professionals | Magneo','Download Magneo’s free personal-branding guide for legal professionals. Explore audience focus, content topics and a consistent online presence.',`${BASE}/personal-branding-ultimate-guide-legal-professionals/`);
  return <section className="guide-hero"><div className="container guide-grid"><div>
    <div className="hero-tag"><span/>Free guide for legal professionals</div><div className="label">The must-read guide</div>
    <h1>Build a personal brand that reflects your <em>legal expertise.</em></h1>
    <p className="guide-intro">A practical guide to explaining your expertise, choosing useful content topics and building a consistent presence online.</p>
    <div className="guide-actions"><a className="btn guide-form-cta" href="#guide-form">Download Guide <span className="guide-form-arrow" aria-hidden="true">→</span></a><a className="btn outline" href="#tools-legal-niche">What is inside</a></div>
    <div className="guide-points"><span>Areas of expertise</span><span>Channel choices</span><span>Educational content</span><span>Content review and professional requirements</span></div>
  </div><aside className="guide-form-card" id="guide-form-section"><div className="label">Fill out the form</div><h2>Get your free guide</h2><p>Complete the form to receive your guide.</p>
    <div className="guide-hubspot-form" id="guide-form" tabIndex={-1} aria-label="Request the free guide"/><p className="guide-form-privacy">Read the <a href="/privacy-policy/">Magneo Privacy Policy</a>.</p><p className="guide-form-fallback">If the form does not appear, <a href="https://share-na3.hsforms.com/1dsi69O67QPaUBxdLhoq8AQ5o2p69">open the guide form</a>.</p><div className="guide-download-ready" hidden><strong>Your guide is ready.</strong><a className="btn guide-download-button" href="/downloads/personal-branding-guide-legal-professionals.pdf">Download Guide <span aria-hidden="true">→</span></a></div>
  </aside></div></section>;
}
function Footer(){
  const footerServices = [
    ['Website Design','/services/website-design-for-regulated-professional-industries-magneo/'],
    ['SEO & Content','/services/seo-for-regulated-industries/'],
    ['Social Media Marketing','/services/social-media-linkedin-marketing-for-regulated-industries/'],
    ['PPC & Landing Pages','/services/ppc-landing-pages-for-regulated-industries/'],
    ['AI Automation & CRM','/services/ai-automation-for-regulated-industries-magneo/'],
    ['Personal Branding','/services/personal-branding-for-regulated-professionals/'],
    ['AI-Powered Marketing','/services/ai-powered-digital-marketing/']
  ];
  const footerIndustries = [['Law Firms','/law-firm-marketing/'],['Financial Firms','/financial-firm-marketing/'],['Healthcare','/healthcare-marketing/'],['Technology Companies','/tech-company-marketing/']];
  return <footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-column footer-brand-column"><Link className="brand" to="/">Magneo</Link><p>Digital marketing, websites and content for professional services and technology companies.</p><div className="footer-contact"><span>Toronto, ON — serving Canada and the USA</span><a href="mailto:contact@magneo.ca">contact@magneo.ca</a><a href="tel:+14378731155">437 873 1155</a></div></div><div className="footer-column"><b>Services</b>{footerServices.map(([label,path])=><Link key={path} to={path}>{label}</Link>)}</div><div className="footer-column"><b>Industries</b>{footerIndustries.map(([label,path])=><Link key={path} to={path}>{label}</Link>)}</div><div className="footer-column"><b>Company</b><Link to="/portfolio/">Portfolio</Link><Link to="/about/">About Magneo</Link><Link to="/contact/">Contact</Link><a href={BLOG}>Insights &amp; Blog</a><a href={LEGAL_CIRCLE} target="_blank" rel="noopener noreferrer">The Legal Circle Community <span aria-hidden="true">↗</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Magneo</span><div><Link to="/privacy-policy/">Privacy Policy</Link><Link to="/terms-of-service/">Website Terms of Use</Link></div></div></div></footer>;
}

export default function App(){ return <Layout><ScrollTop/><Routes>
  <Route path="/" element={<HomeTest/>}/>
  <Route path="/founding-clients/" element={<FoundingClients/>}/>
  <Route path="/services" element={<ServicesOverviewReview/>}/><Route path="/services/" element={<ServicesOverviewReview/>}/>
  <Route path="/services/directory" element={<ServicesDirectoryReview/>}/><Route path="/services/directory/" element={<ServicesDirectoryReview/>}/>
  <Route path="/services/ai-powered-digital-marketing" element={<ServiceContentReview serviceSlugOverride="ai-powered-digital-marketing"/>}/><Route path="/services/ai-powered-digital-marketing/" element={<ServiceContentReview serviceSlugOverride="ai-powered-digital-marketing"/>}/>
  <Route path="/industries" element={<IndustriesHub/>}/><Route path="/industries/" element={<IndustriesHub/>}/>
  <Route path="/about" element={<AboutLegalTest/>}/><Route path="/about/" element={<AboutLegalTest/>}/>
  <Route path="/about/adele-salikhova" element={<AboutTest/>}/><Route path="/about/adele-salikhova/" element={<AboutTest/>}/>
  <Route path="/our-team" element={<About/>}/><Route path="/our-team/" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/><Route path="/contact/" element={<Contact/>}/>
  <Route path="law-firm-marketing" element={<LegalMarketingHub/>}/>
  {legalPracticeSlugs.map((slug)=><Route key={slug} path={`law-firm-marketing/${slug}`} element={<LegalPracticePage slug={slug}/>}/>) }
  <Route path="financial-firm-marketing" element={<FinancialMarketingHub/>}/>
  {financialSpecialistSlugs.map((slug)=><Route key={slug} path={`financial-firm-marketing/${slug}`} element={<FinancialSpecialistPage slug={slug}/>}/>) }
  <Route path="healthcare-marketing" element={<HealthcareMarketingHub/>}/>
  {healthcareSpecialistSlugs.map((slug)=><Route key={slug} path={`healthcare-marketing/${slug}`} element={<HealthcareSpecialistPage slug={slug}/>}/>) }
  <Route path="tech-company-marketing" element={<TechnologyMarketingHub/>}/>
  {technologySpecialistSlugs.map((slug)=><Route key={slug} path={`tech-company-marketing/${slug}`} element={<TechnologySpecialistPage slug={slug}/>}/>) }
  {Object.entries(industries).filter(([k])=>!['law','finance','healthcare','tech'].includes(k)).map(([k,i])=><Route key={k} path={i.route.replace(/^\//,'').replace(/\/$/,'')} element={<IndustryPage kind={k}/>}/>) }
  {verticals.filter((v)=>!legalPracticeSlugs.some((slug)=>v.path===`/law-firm-marketing/${slug}/`)&&!financialSpecialistSlugs.some((slug)=>v.path===`/financial-firm-marketing/${slug}/`)&&!healthcareSpecialistSlugs.some((slug)=>v.path===`/healthcare-marketing/${slug}/`)&&!technologySpecialistSlugs.some((slug)=>v.path===`/tech-company-marketing/${slug}/`)).map((v)=><Route key={v.path} path={v.path.replace(/^\//,'').replace(/\/$/,'')} element={<Vertical item={v}/>}/>) }
  {[...new Set(extraServiceSlugs.concat(aiServices.map(([, , path])=>path.split('/').filter(Boolean).pop())) )].map((slug)=><Route key={slug} path={`services/${slug}`} element={correctedServiceSlugs.has(slug)?<ServiceContentReview serviceSlugOverride={slug}/>:<ServicePage name={slug}/>}/>) }
  <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
  <Route path="terms-of-service" element={<TermsOfUse/>}/>
  <Route path="blog" element={<Generic title="Insights" path="/blog/"/>}/>
  <Route path="personal-branding-ultimate-guide-legal-professionals" element={<GuideInitial/>}/>
  <Route path="*" element={<Home/>}/>
</Routes></Layout>; }


import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { foundingTitle, foundingDescription, foundingMarkup } from '../src/data/founding-client-offer.js';
import { childServiceSlugs, getChildServiceData } from '../src/data/child-service-review-data.js';

const BASE_URL = 'https://magneo.ca';
const DIST_DIR = 'dist';
const INDEX_PATH = join(DIST_DIR, 'index.html');
const SITEMAP_PATH = join(DIST_DIR, 'sitemap.xml');
const EXTRA_PATHS = [
  '/founding-clients/',
  '/personal-branding-ultimate-guide-legal-professionals/',
  '/about/adele-salikhova/',
  '/services/ai-seo/',
  '/services/ai-social-media-marketing/',
  '/services/ai-ugc-ai-video-production/',
  '/services/ai-web-design-conversion/',
  '/services/ai-content-marketing/',
  ...childServiceSlugs.map((slug) => `/services/${slug}/`)
];
const NOINDEX_PATHS = [
  '/portfolio/legal-websites/',
  '/our-team/',
  '/about/adele-salikhova/'
];

const descriptions = {
  '/': 'Website design, content, and AI-powered marketing for regulated and expert-led businesses.',
  '/personal-branding-ultimate-guide-legal-professionals/': 'Download Magneo’s free personal-branding guide for legal professionals. Explore audience focus, content topics and a consistent online presence.',
  '/about/': 'Meet Adele Salikhova, founder of Magneo. Explore marketing, creative, and AI services for regulated industries, with legal marketing as the flagship focus.',
  '/about/adele-salikhova/': 'Meet Adele Salikhova, founder of Magneo, and learn about her approach to websites, content, and AI-supported marketing.',
  '/services/': 'Explore website design, SEO, social media, paid advertising, AI creative, and automation for regulated industries and expert-led businesses.',
  '/services/directory/': 'Browse Magneo’s marketing services by industry, including websites, SEO, social media, AI creative, automation, and paid advertising.',
  '/services/website-design-for-regulated-professional-industries-magneo/': 'Website strategy, copy, design, and development for regulated industries. Explore industry-specific services, website concepts, and project options.',
  '/services/seo-for-regulated-industries/': 'Technical SEO, search strategy, and content for regulated industries. Explore project scopes, industry-specific services, and practical measurement.',
  '/services/seo-for-the-legal-industry/': 'Law firm SEO covering practice-area content, technical improvements, local search, and enquiry measurement, with firm review before publication.',
  '/services/seo-for-financial-advisors-wealth-firms/': 'SEO for financial advisors and wealth firms, including advisory-service pages, reviewed educational content, technical improvements, and reporting.',
  '/services/seo-for-the-healthcare-medtech-industry/': 'SEO for healthcare providers and MedTech companies, with patient-focused service pages, professional product content, technical reviews, and reporting.',
  '/services/social-media-linkedin-marketing-for-regulated-industries/': 'Social media and LinkedIn content for regulated industries: strategy, posts, visuals, and short-form video, with clear review and publishing arrangements.',
  '/services/ai-automation-for-regulated-industries-magneo/': 'Connect enquiries, content approvals and reporting with AI automation for regulated industries. Explore workflow mapping, integrations, testing and handover.',
  '/services/ppc-landing-pages-for-regulated-industries/': 'PPC management and landing pages for regulated industries. Explore campaign strategy, ad creative, tracking, and ongoing optimisation with Magneo.',
  '/services/personal-branding-for-regulated-professionals/': 'Personal brand strategy, LinkedIn profile writing, and professional bios for lawyers, financial advisors, healthcare professionals, and tech founders.',
  '/services/ai-powered-digital-marketing/': 'Explore practical uses of AI across content, video, search, websites, and marketing workflows, with a defined purpose and agreed human review process.',
  '/industries/': 'Explore Magneo’s marketing services for law firms, financial professionals, healthcare providers, and technology companies.',
  '/contact/': 'Contact Adele Salikhova at Magneo to discuss a website, content, search, advertising, or AI marketing project.',
  '/privacy-policy/': 'How Magneo collects, uses, shares, and protects information across magneo.ca and blog.magneo.ca.',
  '/terms-of-service/': 'Terms governing access to and use of Magneo’s websites, content, forms, portfolio materials, and downloadable resources.',
  '/law-firm-marketing/': 'Website design, legal SEO, video, paid campaigns, personal branding, and CRM implementation for law firms and their practice areas.',
  '/law-firm-marketing/employment-lawyers/': 'Website design, search content, campaigns, and lawyer-led video for employment firms representing employees, employers, or both.',
  '/law-firm-marketing/immigration-lawyers/': 'Websites, educational content, search marketing, and campaigns that explain immigration services and make the consultation route clear.',
  '/law-firm-marketing/personal-injury-lawyers/': 'Website design, search content, and campaigns for personal injury firms, with clear case information and straightforward contact routes.',
  '/law-firm-marketing/litigation-lawyers/': 'Websites, search content, lawyer-led video, and campaigns that present a litigation firm’s disputes, experience, and contact route clearly.',
  '/financial-firm-marketing/': 'Marketing services for financial firms, including websites, educational content, video, campaigns, personal branding, and CRM workflows.',
  '/financial-firm-marketing/marketing-for-wealth-advisors/': 'Marketing for wealth advisors, including websites, personal branding, educational video, SEO, and campaigns shaped around your advisory approach.',
  '/financial-firm-marketing/investment-firms/': 'Marketing for investment firms: positioning, websites, thought leadership, video, and communications developed around your firm’s capabilities.',
  '/financial-firm-marketing/mutual-fund-dealers/': 'Websites, advisor profiles, educational content, and review workflows for mutual fund dealers seeking consistent marketing across their organisation.',
  '/financial-firm-marketing/tax-advisors/': 'Website design, SEO, educational content, and seasonal campaigns for tax advisors. Make your services clearer and enquiries easier to manage.',
  '/financial-firm-marketing/portfolio-managers/': 'Marketing for portfolio managers: websites, team profiles, commentary, and expert-led video that explain your philosophy and client approach.',
  '/healthcare-marketing/': 'Healthcare marketing for clinics and providers, including website design, local SEO, educational content, video, campaigns, and administrative automation.',
  '/healthcare-marketing/mental-health-clinics/': 'Website design, local SEO, practitioner profiles, and educational content for mental health clinics, with clear enquiry and referral information.',
  '/healthcare-marketing/chiropractic-clinics/': 'Website design, local SEO, first-visit information, and clinic content for chiropractic practices seeking a clearer local presence.',
  '/healthcare-marketing/family-medicine-clinics/': 'Websites, local listings, patient information, and clinic updates for family medicine practices serving new or existing patients.',
  '/healthcare-marketing/aesthetic-clinics/': 'Website design, treatment education, search marketing, video, and consultation campaigns for aesthetic clinics.',
  '/healthcare-marketing/physiotherapy-clinics/': 'Website design, local SEO, service pages, and assessment information for physiotherapy clinics and their genuine locations.',
  '/healthcare-marketing/dental-clinics/': 'Website design, local SEO, new-patient information, educational content, and focused campaigns for dental clinics.',
  '/tech-company-marketing/': 'Marketing for technology companies: product websites, SEO, video, social content, paid campaigns and CRM automation for SaaS, FinTech, LegalTech and AI.',
  '/tech-company-marketing/saas-marketing/': 'SaaS marketing with clear product messaging, SEO, demo videos, landing pages and CRM follow-up. Help prospective customers understand and explore your software.',
  '/tech-company-marketing/fintech-marketing/': 'FinTech marketing for financial technology products: websites, product explainers, SEO, video, landing pages and enquiry follow-up.',
  '/tech-company-marketing/legaltech-marketing/': 'LegalTech marketing through product websites, SEO, demo videos and campaigns that explain software to law firms and legal departments.',
  '/tech-company-marketing/crypto-marketing/': 'Marketing for crypto and Web3 products through clear websites, educational content, product videos, social media and launch campaigns.',
  '/tech-company-marketing/ai-marketing/': 'Marketing for AI companies through clear positioning, product websites, SEO, real demonstrations, video content and campaigns for relevant use cases.',
  '/services/ai-seo/': 'AI SEO, blog automation, and content generation in your brand voice. Plan, review, and publish useful website content with Magneo.',
  '/services/ai-social-media-marketing/': 'AI social media marketing in your brand voice. Explore posts, carousels, video, content repurposing, and publishing support from Magneo.',
  '/services/ai-ugc-ai-video-production/': 'AI video production, UGC-style creative, product demos, explainers, and ad variations. Explore scripting, editing, and finished video with Magneo.',
  '/services/ai-web-design-conversion/': 'AI-powered web design and development for business websites and landing pages. Explore copy, responsive builds, and conversion-focused improvements.',
  '/services/ai-content-marketing/': 'AI content marketing for regulated industries, including editorial calendars, topical maps, repurposing, and expert review workflows.',
  '/portfolio/': 'Explore Magneo work across website design, social media marketing, and AI-powered digital marketing for regulated industries.',
  '/portfolio/legal-websites/': 'Explore seven original Magneo website concepts for personal injury, brain injury, litigation, immigration, and notary services.',
  '/portfolio/legal-websites/personal-injury-classic/': 'A timeless, conversion-focused personal injury law firm website concept by Magneo.',
  '/portfolio/legal-websites/personal-injury-bold/': 'A bold, expressive personal injury law firm website concept designed to make the advocate memorable.',
  '/portfolio/legal-websites/litigation-editorial/': 'An editorial litigation law firm website concept combining monochrome typography, motion, and decisive positioning.',
  '/portfolio/legal-websites/brain-injury-3d/': 'An immersive 3D brain injury law firm website concept built around specialist expertise and human dignity.',
  '/portfolio/legal-websites/personal-injury-cinematic/': 'A cinematic personal injury law firm website concept that turns recovery and evidence into a human story.',
  '/portfolio/legal-websites/personal-injury-family-focused/': 'A warm, family-focused personal injury law firm website concept designed to build reassurance and trust.',
  '/portfolio/legal-websites/immigration-welcome/': 'A warm, welcoming fictional Canadian immigration law firm website concept created by Magneo.',
  '/portfolio/notary-services/': 'A refined fictional notary-services website concept organized around documents, preparation, and appointment clarity.'
};

const titleOverrides = {
  '/founding-clients/': foundingTitle,
  '/': 'Magneo | Marketing That Makes Your Expertise Clear',
  '/personal-branding-ultimate-guide-legal-professionals/': 'Personal Branding Guide for Legal Professionals | Magneo',
  '/about/': 'About Magneo | Marketing for Regulated Industries',
  '/about/adele-salikhova/': 'Adele Salikhova, Founder of Magneo | Magneo',
  '/services/': 'Marketing Services for Regulated Industries | Magneo',
  '/services/directory/': 'Marketing Service Directory by Industry | Magneo',
  '/services/website-design-for-regulated-professional-industries-magneo/': 'Website Design for Regulated Industries | Magneo',
  '/services/seo-for-regulated-industries/': 'SEO for Regulated Industries | Magneo',
  '/services/seo-for-the-legal-industry/': 'SEO for Law Firms & Lawyers | Magneo',
  '/services/seo-for-financial-advisors-wealth-firms/': 'SEO for Financial Advisors & Wealth Firms | Magneo',
  '/services/seo-for-the-healthcare-medtech-industry/': 'Healthcare & MedTech SEO Services | Magneo',
  '/services/social-media-linkedin-marketing-for-regulated-industries/': 'Social Media Marketing for Regulated Industries | Magneo',
  '/services/ai-automation-for-regulated-industries-magneo/': 'AI Automation for Regulated Industries | Magneo',
  '/services/ppc-landing-pages-for-regulated-industries/': 'PPC Management & Landing Pages for Regulated Industries | Magneo',
  '/services/personal-branding-for-regulated-professionals/': 'Personal Branding for Regulated Professionals | Magneo',
  '/services/ai-powered-digital-marketing/': 'AI-Powered Digital Marketing for Regulated Industries | Magneo',
  '/industries/': 'Industries We Serve | Legal, Finance, Healthcare & Tech | Magneo',
  '/contact/': 'Contact Magneo | Discuss Your Project',
  '/privacy-policy/': 'Privacy Policy | Magneo',
  '/terms-of-service/': 'Website Terms of Use | Magneo',
  '/law-firm-marketing/': 'Law Firm Marketing Agency | Magneo',
  '/law-firm-marketing/employment-lawyers/': 'Marketing for Employment Lawyers | Magneo',
  '/law-firm-marketing/immigration-lawyers/': 'Marketing for Immigration Lawyers | Magneo',
  '/law-firm-marketing/personal-injury-lawyers/': 'Marketing for Personal Injury Lawyers | Magneo',
  '/law-firm-marketing/litigation-lawyers/': 'Marketing for Litigation Lawyers | Magneo',
  '/financial-firm-marketing/': 'Financial Firm Marketing Agency | Magneo',
  '/financial-firm-marketing/marketing-for-wealth-advisors/': 'Marketing for Wealth Advisors | Magneo',
  '/financial-firm-marketing/investment-firms/': 'Investment Firm Marketing | Magneo',
  '/financial-firm-marketing/mutual-fund-dealers/': 'Marketing for Mutual Fund Dealers | Magneo',
  '/financial-firm-marketing/tax-advisors/': 'Marketing for Tax Advisors | Magneo',
  '/financial-firm-marketing/portfolio-managers/': 'Marketing for Portfolio Managers | Magneo',
  '/healthcare-marketing/': 'Healthcare Marketing & Website Design | Magneo',
  '/healthcare-marketing/mental-health-clinics/': 'Mental Health Clinic Marketing & Websites | Magneo',
  '/healthcare-marketing/chiropractic-clinics/': 'Chiropractic Marketing & Website Design | Magneo',
  '/healthcare-marketing/family-medicine-clinics/': 'Family Medicine Websites & Clinic Marketing | Magneo',
  '/healthcare-marketing/aesthetic-clinics/': 'Aesthetic Clinic Marketing & Websites | Magneo',
  '/healthcare-marketing/physiotherapy-clinics/': 'Physiotherapy Marketing & Website Design | Magneo',
  '/healthcare-marketing/dental-clinics/': 'Dental Marketing & Website Design | Magneo',
  '/tech-company-marketing/': 'Technology Marketing Agency | Websites, SEO & Content | Magneo',
  '/tech-company-marketing/saas-marketing/': 'SaaS Marketing Agency | Websites, SEO & Video | Magneo',
  '/tech-company-marketing/fintech-marketing/': 'FinTech Marketing Agency | Product Websites & Content | Magneo',
  '/tech-company-marketing/legaltech-marketing/': 'LegalTech Marketing Agency | Websites & Product Content | Magneo',
  '/tech-company-marketing/crypto-marketing/': 'Crypto & Web3 Marketing Agency | Content & Video | Magneo',
  '/tech-company-marketing/ai-marketing/': 'Marketing for AI Companies & Products | Magneo',
  '/services/ai-seo/': 'AI SEO & Blog Automation Services | Magneo',
  '/services/ai-social-media-marketing/': 'AI Social Media Marketing & Content Creation | Magneo',
  '/services/ai-ugc-ai-video-production/': 'AI Video Production & UGC-Style Creative | Magneo',
  '/services/ai-web-design-conversion/': 'AI Web Design & Conversion-Focused Development | Magneo',
  '/services/ai-content-marketing/': 'AI Content Marketing | Magneo',
  '/services/personal-branding-for-financial-advisors-wealth-professionals/': 'Personal Branding for Financial Advisors | Magneo',
  '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/': 'Healthcare Social Media & LinkedIn Marketing | Magneo',
  '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/': 'Social Media & LinkedIn for SaaS and AI Companies | Magneo',
  '/portfolio/': 'Portfolio | Magneo — Web, Social & AI Marketing',
  '/portfolio/legal-websites/': 'Legal Website Design Portfolio | Magneo',
  '/portfolio/legal-websites/personal-injury-classic/': 'Classic Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-bold/': 'Bold Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/litigation-editorial/': 'Editorial Litigation Website Concept | Magneo',
  '/portfolio/legal-websites/brain-injury-3d/': '3D Brain Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-cinematic/': 'Cinematic Personal Injury Website Concept | Magneo',
  '/portfolio/legal-websites/personal-injury-family-focused/': 'Family-Focused Injury Website Concept | Magneo',
  '/portfolio/legal-websites/immigration-welcome/': 'Immigration Law Website Concept | Magneo',
  '/portfolio/notary-services/': 'Notary Services Website Concept | Magneo'
};

const imageOverrides = {
  '/about/': '/adele-salikhova.jpg',
  '/about/adele-salikhova/': '/adele-salikhova.jpg',
  '/personal-branding-ultimate-guide-legal-professionals/': '/adele-salikhova.jpg',
  '/services/': '/portfolio-og.png',
  '/services/directory/': '/portfolio-og.png',
  '/services/social-media-linkedin-marketing-for-regulated-industries/': '/portfolio-og.png',
  '/portfolio/': '/portfolio-og.png',
  '/portfolio/legal-websites/': '/legal-websites-og.png',
  '/portfolio/legal-websites/personal-injury-classic/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/personal-injury-bold/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/litigation-editorial/': '/pi-lawyer-hero-generated.png',
  '/portfolio/legal-websites/brain-injury-3d/': '/brain-injury-head-3d-v2.png',
  '/portfolio/legal-websites/personal-injury-cinematic/': '/test5-cinematic-hero.png',
  '/portfolio/legal-websites/personal-injury-family-focused/': '/test6-family-hero.png',
  '/portfolio/legal-websites/immigration-welcome/': '/immigration-welcome-hero.png',
  '/portfolio/notary-services/': '/notary-document-desk-hero-v5.png'
};

const imageAltOverrides = {
  '/about/': 'Adele Salikhova, founder of Magneo.',
  '/about/adele-salikhova/': 'Adele Salikhova, founder of Magneo.',
  '/personal-branding-ultimate-guide-legal-professionals/': 'Magneo personal branding guide for lawyers and legal professionals.',
  '/services/': 'Magneo service system for website design, social media, and AI-powered marketing.',
  '/services/directory/': 'Magneo service system for website design, social media, and AI-powered marketing.',
  '/services/social-media-linkedin-marketing-for-regulated-industries/': 'Magneo social media, visual content, and short-form video concepts.'
};

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function normalizePath(urlOrPath) {
  const pathname = urlOrPath.startsWith('http') ? new URL(urlOrPath).pathname : urlOrPath;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function titleCase(pathname) {
  const acronyms = new Map([['seo', 'SEO'], ['ppc', 'PPC'], ['ai', 'AI'], ['saas', 'SaaS'], ['ugc', 'UGC'], ['cro', 'CRO'], ['ux', 'UX']]);
  return pathname.split('/').filter(Boolean).pop()?.split('-').filter((word) => word && word !== 'magneo').map((word) => acronyms.get(word) || word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Magneo';
}

function titleFor(pathname) {
  if (titleOverrides[pathname]) return titleOverrides[pathname];
  const child = childServiceDataForPath(pathname);
  if (child) return child.seoTitle || `${child.title} | Magneo`;
  return `${titleCase(pathname)} | Magneo`;
}

function descriptionFor(pathname) {
  if (pathname === '/founding-clients/') return foundingDescription;
  if (descriptions[pathname]) return descriptions[pathname];
  const child = childServiceDataForPath(pathname);
  if (child) return child.metaDescription || child.description;
  const label = titleCase(pathname);
  if (pathname.startsWith('/services/')) return `${label} from Magneo for regulated industries, built around authority, compliance-aware messaging, qualified demand, and measurable conversion.`;
  if (pathname.includes('law-firm-marketing')) return `${label} with Magneo: compliance-aware SEO, website, PPC, LinkedIn, AI automation, and authority systems for legal practices.`;
  if (pathname.includes('financial-firm-marketing')) return `${label} with Magneo: trust-led marketing systems for financial professionals and regulated advisory businesses.`;
  if (pathname.includes('healthcare-marketing')) return `${label} with Magneo: privacy-aware marketing systems for healthcare clinics, providers, and patient-facing practices.`;
  if (pathname.includes('tech-company-marketing')) return `${label} with Magneo: authority, content, website, and demand systems for tech, SaaS, AI, FinTech, and LegalTech companies.`;
  return `${label} from Magneo, a digital marketing agency for regulated industries in Canada and the USA.`;
}

function childServiceDataForPath(pathname) {
  const match = pathname.match(/^\/services\/([^/]+)\/$/);
  return match ? getChildServiceData(match[1]) : null;
}

function injectSeo(html, { title, description, canonical, image, imageAlt, robots, schema }) {
  const clean = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/i, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/i, '')
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<script\s+type=["']application\/ld\+json["']\s+data-magneo-page-schema[\s\S]*?<\/script>/gi, '');
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    ...(robots ? [`<meta name="robots" content="${escapeHtml(robots)}" />`] : []),
    ...(image ? [`<meta property="og:image" content="${escapeHtml(image)}" />`, `<meta property="og:image:alt" content="${escapeHtml(imageAlt || '')}" />`, `<meta name="twitter:image" content="${escapeHtml(image)}" />`, `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt || '')}" />`] : []),
    ...(schema ? [`<script type="application/ld+json" data-magneo-page-schema>${JSON.stringify(schema)}</script>`] : [])
  ].map((tag) => `    ${tag}`).join('\n');
  return clean.replace(/(\s*<meta\s+name=["']viewport["'][^>]*>)/i, (_match, viewport) => `${viewport}\n${tags}`);
}

function injectGuideStaticHtml(html) {
  const markup = `<main data-guide-static="true">
    <section class="guide-hero"><div class="container guide-grid"><div>
      <div class="hero-tag"><span></span>Free guide for legal professionals</div>
      <div class="label">The must-read guide</div>
      <h1>Build a personal brand that reflects your <em>legal expertise.</em></h1>
      <p class="guide-intro">A practical guide to explaining your expertise, choosing useful content topics and building a consistent presence online.</p>
      <div class="guide-actions"><a class="btn guide-form-cta" href="#guide-form" onclick="return window.magneoGuideFormCta ? window.magneoGuideFormCta(event) : true">Download Guide <span class="guide-form-arrow" aria-hidden="true">→</span></a><a class="btn outline" href="#tools-legal-niche">What is inside</a></div>
    </div><aside class="guide-form-card" id="guide-form-section">
      <div class="label">Fill out the form</div><h2>Get your free guide</h2><p>Complete the form to receive your guide.</p>
      <div class="guide-hubspot-form" id="guide-form" tabindex="-1" aria-label="Request the free guide"></div><p class="guide-form-privacy">Read the <a href="/privacy-policy/">Magneo Privacy Policy</a>.</p><p class="guide-form-fallback">If the form does not appear, <a href="https://share-na3.hsforms.com/1dsi69O67QPaUBxdLhoq8AQ5o2p69">open the guide form</a>.</p><div class="guide-download-ready" hidden><strong>Your guide is ready.</strong><a class="btn guide-download-button" href="/downloads/personal-branding-guide-legal-professionals.pdf">Download Guide <span aria-hidden="true">→</span></a></div>
    </aside></div></section>
    <section class="guide-about"><div class="container guide-two"><div><div class="label">About the guide</div><h2 id="tools-legal-niche">A clearer way to explain your legal practice.</h2><p>The guide covers your intended audience, professional presentation, useful content topics and the channels that fit your work. Review any marketing material against your own professional requirements before publishing.</p></div><ul class="guide-checklist"><li>What a personal brand is and why it matters</li><li>How to identify the people you want to reach</li><li>Professional presentation and profile messaging</li><li>Eight content types to consider for your practice</li><li>How to choose platforms for your audience</li><li>Relationships and referrals beyond online content</li></ul></div></section>
    <section class="guide-detail"><div class="container">
      <h2>10 practical tips to grow your personal brand</h2>
      <p class="guide-tip-intro">Discover practical advice from the guide to make your expertise more visible, strengthen your professional image and build valuable connections.</p>
      <ol class="guide-tip-list">
        <li><strong>Define your expertise.</strong> Get clear about what you want to be known for.</li>
        <li><strong>Know your ideal clients.</strong> Understand their needs and explain how your expertise helps.</li>
        <li><strong>Strengthen your first impression.</strong> Present a professional image online and in person.</li>
        <li><strong>Improve your bio.</strong> Explain who you help and what makes your approach different.</li>
        <li><strong>Create useful content.</strong> Turn client questions and professional insights into engaging posts.</li>
        <li><strong>Repurpose your ideas.</strong> Turn articles, interviews and videos into multiple pieces of content.</li>
        <li><strong>Choose the right platforms.</strong> Focus on the channels your audience actually uses.</li>
        <li><strong>Expand your visibility.</strong> Explore podcasts, guest articles, webinars and speaking opportunities.</li>
        <li><strong>Build referral relationships.</strong> Make meaningful connections and follow up consistently.</li>
        <li><strong>Support your business growth.</strong> Connect your reputation, specialisation and services with your goals.</li>
      </ol>
    </div></section>
    <section class="guide-final"><div class="container"><h2>Ready to make your expertise easier to trust?</h2><a class="btn guide-form-cta" href="#guide-form" onclick="return window.magneoGuideFormCta ? window.magneoGuideFormCta(event) : true">Download Guide <span class="guide-form-arrow" aria-hidden="true">→</span></a></div></section>
  </main>`;
  return html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

const indexHtml = await readFile(INDEX_PATH, 'utf8');
const sitemapXml = await readFile(SITEMAP_PATH, 'utf8');
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim()).filter((url) => url.startsWith(BASE_URL)).map(normalizePath);
const paths = [...new Set([...sitemapPaths, ...EXTRA_PATHS.map(normalizePath), ...NOINDEX_PATHS.map(normalizePath)])];

for (const pathname of paths) {
  const canonical = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
  const image = imageOverrides[pathname] ? `${BASE_URL}${imageOverrides[pathname]}` : undefined;
  const imageAlt = imageAltOverrides[pathname];
  const schema = pathname === '/about/' ? {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: titleFor(pathname),
    description: descriptionFor(pathname),
    url: canonical,
    mainEntity: {
      '@type': 'Organization',
      name: 'Magneo',
      url: BASE_URL,
      founder: { '@type': 'Person', name: 'Adele Salikhova' }
    }
  } : undefined;
  const robots = NOINDEX_PATHS.includes(pathname) ? 'noindex, follow' : pathname === '/personal-branding-ultimate-guide-legal-professionals/' ? 'index, follow' : undefined;
  let html = injectSeo(indexHtml, { title: titleFor(pathname), description: descriptionFor(pathname), canonical, image, imageAlt, robots, schema });
  if (pathname === '/personal-branding-ultimate-guide-legal-professionals/') html = injectGuideStaticHtml(html);
  if (pathname === '/founding-clients/') html = html.replace('<div id="root"></div>', `<div id="root"><main>${foundingMarkup}</main></div>`);
  const outputPath = pathname === '/' ? INDEX_PATH : join(DIST_DIR, pathname.replace(/^\//, ''), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

console.log(`Generated static SEO HTML for ${paths.length} routes.`);


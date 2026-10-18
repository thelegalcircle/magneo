import { useEffect, useState, useRef } from 'react';
import { applyServiceContentUpdates } from './data/service-content-updates.js';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import './styles/service-content-review.css';
import { getChildServiceData } from './data/child-service-review-data.js';
import { relatedArticlesFor } from './data/related-articles.js';

const portfolioLinks = {
  websites: '/portfolio/#portfolio-websites',
  social: '/portfolio/#social-media',
  ai: '/portfolio/#ai-marketing',
};

const audiences = [
  ['Law firms', '/law-firm-marketing/'],
  ['Financial firms', '/financial-firm-marketing/'],
  ['Healthcare providers', '/healthcare-marketing/'],
  ['Tech and SaaS companies', '/tech-company-marketing/'],
];

const pageData = {
  'website-design-for-regulated-professional-industries-magneo': {
    title: 'Website Design for Regulated Industries',
    description: 'A professional website should explain your services, make your expertise easy to assess, and give visitors a clear next step. Magneo brings website strategy, copy, design, and development together for regulated industries and expert-led businesses.',
    seoTitle: 'Website Design for Regulated Industries | Magneo',
    metaDescription: 'Website strategy, copy, design, and development for regulated industries. Explore industry-specific services, website concepts, and project options.',
    primary: ['Discuss your website', '/contact/#contact-enquiry'], secondary: ['Explore website concepts', portfolioLinks.websites],
    card: ['WEBSITES', 'Positioning, copy, design, and development.'],
    heroPortfolio: {
      label: 'WEBSITE CONCEPT',
      title: 'Personal Injury · Modern',
      image: '/portfolio/websites/personal-injury-modern-hero-preview.webp',
      imageAlt: 'Preview of Magneo’s modern personal-injury website concept',
      demoUrl: '/portfolio/legal-websites/personal-injury-bold/',
      portfolioUrl: '/portfolio/',
    },
    audienceHeading: 'Find the website approach for your industry.',
    audienceIntro: 'Different visitors need different information before they enquire. Explore the website service shaped around your audience.',
    audiences: [
      ['Law firms', '/services/website-design-rebrand-for-law-firms-magneo/', 'Practice areas, lawyer profiles, and clear routes for prospective client enquiries.'],
      ['Financial advisors and wealth firms', '/services/website-design-for-financial-advisors-wealth-firms-magneo/', 'Service explanations, advisor credentials, and information about starting a professional relationship.'],
      ['Healthcare clinics and doctors', '/services/website-design-for-healthcare-clinics-doctors-magneo/', 'Treatment and service information, practitioner profiles, locations, and appointment guidance.'],
      ['Tech companies and SaaS products', '/services/website-design-for-tech-companies-saas-products-magneo/', 'Product messaging, use cases, and journeys towards a demo or trial.'],
    ],
    scopeHeading: 'From website planning to launch.',
    scopeIntro: 'Your proposal confirms the pages, functionality, review stages, and support included.',
    included: [
      ['Structure and messaging','A page plan based on your services, audience, and the information visitors need before making contact.'],
      ['Copy and design','Website copy and visual layouts developed together so the message and presentation support each other.'],
      ['Development and connections','Responsive pages, enquiry forms, and agreed integrations with the tools your business uses.'],
      ['Search foundations','Descriptive page titles, headings, internal links, and agreed technical checks to support a usable, discoverable website.'],
      ['Launch and handover','Testing, launch preparation, and guidance for managing the finished website.'],
    ],
    examples: [
      ['New business website','A clear introduction to your business, services, and expertise, with a practical route from browsing to enquiry.'],
      ['Existing website redesign','An updated structure, message, and visual presentation for a website that no longer reflects your business.'],
      ['Additional service pages','New pages that explain a growing service range without making the website harder to navigate.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'A new website, a redesign, or a focused addition.',
    purposeVisual: {
      eyebrow: 'DESIGN WITH A PURPOSE',
      heading: 'Every page should help visitors make a decision.',
      image: '/portfolio/websites/personal-injury-modern-hero-preview.webp',
      imageAlt: 'Personal-injury website concept showing service information, a lawyer profile, and a free-assessment enquiry route',
      conceptLabel: 'WEBSITE CONCEPT',
      caption: 'Original Magneo concept',
      linkLabel: 'Explore this website concept →',
      url: '/portfolio/legal-websites/personal-injury-bold/',
      points: [
        ['Understand the offer', 'Service descriptions explain what the business provides and who it is for.', 'Service explanation'],
        ['Assess the fit', 'Relevant experience, professional profiles, and practical information help visitors decide whether to enquire.', 'Relevant profile or practical information'],
        ['Take the next step', 'Clear contact options connect that decision with an enquiry, booking, or demo request.', 'Contact button or enquiry route'],
      ],
    },
    processEyebrow: 'How we work',
    processHeading: 'A clear route from brief to launch.',
    process: [['Project definition','Magneo reviews your goals and existing materials, then proposes the website scope and direction.'],['Copy and visual direction','The agreed content and layouts are developed for your review. You confirm business information and provide feedback.'],['Development and testing','Approved designs become responsive pages, with checks on navigation, forms, and included functionality.'],['Launch and handover','Following approval, Magneo completes the agreed launch tasks and provides guidance on managing the website.']],
    faq: [
      ['Is website copy included?','Copywriting can be included in the scope. The proposal will specify which pages we write and which information or materials you provide.'],
      ['Can you redesign an existing website?','Yes. We first review the existing website, content, and platform to determine what can be retained and what needs to change.'],
      ['How long does a website project take?','Timing depends on the number of pages, required functionality, content readiness, and review stages. Your proposal will include a project timeline.'],
      ['Who handles content approval?','You approve the final content. Where industry-specific claims need specialist review, we agree who reviews them before publication.'],
      ['What happens after launch?','Handover and any ongoing maintenance, hosting, or content support are defined in the proposal. Recurring services are scoped separately.'],
      ['What affects the cost of a website?','Page count, content requirements, design scope, integrations, and migration work all affect the cost. A proposal confirms the deliverables and fees before the project begins.'],
      ['Does website design include ongoing SEO?','A website project can include on-page and technical search foundations. Ongoing keyword research, content development, and SEO monitoring are separate services unless included in the proposal.'],
      ['Can an existing website be redesigned without changing every URL?','Existing URLs and content can be reviewed before the new structure is agreed. Where a URL needs to change, the launch plan should include the appropriate redirect. A redesign cannot guarantee unchanged search rankings.'],
    ],
    cta: ['What does your next website need to do?','Share your existing website or describe what you are planning. Include the services it needs to explain and the next step you want visitors to take.'],
    ctaButton: ['Discuss your website', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: audiences,
    related: [['SEO & Content','/services/seo-for-regulated-industries/'],['PPC & Landing Pages','/services/ppc-landing-pages-for-regulated-industries/']],
  },
  'seo-for-regulated-industries': {
    title: 'SEO for Regulated Industries',
    seoTitle: 'SEO for Regulated Industries | Magneo',
    metaDescription: 'Technical SEO, search strategy, and content for regulated industries. Explore project scopes, industry-specific services, and practical measurement.',
    description: 'Relevant search visibility starts with a website that answers the right questions. Magneo combines technical SEO, search research, and content development to help regulated businesses present their services clearly and address the information prospective clients need.',
    primary: ['Discuss your SEO priorities', '/contact/#contact-enquiry'],
    secondary: ['Explore SEO services by industry', '#seo-industries'],
    cardEyebrow: 'SEARCH WITH A PURPOSE',
    card: ['Relevant searches.\nUseful pages.', 'A focused plan connecting your services, website content, and enquiry routes.'],
    seoPage: true,
    audienceId: 'seo-industries',
    audienceHeading: 'SEO shaped around your audience.',
    audiences: [
      ['Law firms', '/services/seo-for-the-legal-industry/', 'Practice-area content and local search information for people researching legal help.'],
      ['Financial advisors and wealth firms', '/services/seo-for-financial-advisors-wealth-firms/', 'Service explanations and reviewed educational content for prospective advisory clients.'],
      ['Healthcare and MedTech', '/services/seo-for-the-healthcare-medtech-industry/', 'Patient-facing service information or product content for professional buyers.'],
    ],
    audienceClosing: ['Working in another regulated or expert-led sector? Describe your business when you ', 'enquire', '.'],
    scopeHeading: 'What an SEO engagement can include.',
    scopeIntro: 'Your proposal identifies the priorities, deliverables, implementation responsibilities, and reporting included.',
    included: [
      ['Technical review', 'Checks on crawling, indexing, page structure, and technical issues affecting the agreed website scope.'],
      ['Search and page mapping', 'Research connecting relevant searches with existing pages or clearly justified new content.'],
      ['Content improvement', 'Revised service information, headings, internal links, and supporting content developed around visitor questions.'],
      ['Local search', 'Accurate location information and eligible business-profile work where local visibility is relevant.'],
      ['Implementation', 'Agreed changes completed by Magneo or coordinated with your developer, with responsibilities confirmed in advance.'],
      ['Reporting', 'A record of completed work, available search data, and agreed enquiry measurements.'],
    ],
    progress: {
      heading: 'A clear view of the work and its progress.',
      items: [
        ['Completed work', 'The pages, fixes, and content delivered during the engagement.'],
        ['Search visibility', 'Relevant queries, impressions, clicks, and landing-page trends where data is available.'],
        ['Enquiry activity', 'Agreed website actions and enquiries, with business outcomes assessed separately.'],
      ],
      closing: 'Search visibility is one part of the picture. Enquiry relevance and the services attracting interest help inform the next priorities.',
    },
    examplesHeading: 'Start with a defined SEO priority.',
    examplesSoft: false,
    examples: [
      ['Website review and action plan', 'An assessment of the agreed website scope, with prioritised recommendations and a clear distinction between findings and implementation.'],
      ['Focused improvement project', 'A defined set of page, content, or technical changes addressing an agreed priority.'],
      ['Ongoing SEO support', 'Continued implementation, content work, and review within an agreed recurring scope.'],
    ],
    examplesNote: 'Availability, fees, reporting frequency, and terms are confirmed in the proposal.',
    processHeading: 'From search questions to practical improvements.',
    process: [
      ['Baseline and priorities', 'Magneo reviews the website, available data, and business goals to identify the work worth prioritising.'],
      ['Agreed action plan', 'You receive a proposed scope explaining the changes, responsibilities, and measures of progress.'],
      ['Implementation and review', 'Technical and content work proceeds within the agreed scope. Your designated reviewer confirms specialist information before publication.'],
      ['Progress and next steps', 'Completed work and available performance data guide the next recommendations.'],
    ],
    faq: [
      ['How long does SEO take?', 'Timing depends on the website’s starting point, competition, implementation, and how search engines process changes. The proposal sets delivery milestones; ranking or enquiry improvements cannot be promised by a fixed date.'],
      ['What affects the cost?', 'Website size, technical complexity, content requirements, and the amount of implementation affect the scope. Fees and any recurring commitment are confirmed before work begins.'],
      ['Can you work with our existing developer?', 'Yes. The scope can separate recommendations from implementation and identify which changes Magneo handles and which remain with your developer.'],
      ['Is content approval included in the process?', 'The project can include your internal review stages. Your designated reviewers remain responsible for confirming specialist facts and publication approval.'],
    ],
    cta: ['What should the right people find you for?', 'Share your website, priority services, and the markets you serve. Those details help establish whether the next step is a review, a focused project, or ongoing support.'],
    ctaButton: ['Discuss your SEO priorities', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: audiences,
    related: [
      ['SEO for Law Firms & Legal Professionals', '/services/seo-for-the-legal-industry/'],
      ['SEO for Financial Advisors & Wealth Firms', '/services/seo-for-financial-advisors-wealth-firms/'],
      ['SEO for Healthcare & MedTech', '/services/seo-for-the-healthcare-medtech-industry/'],
    ],
  },
  'seo-for-the-legal-industry': {
    title: 'SEO for Law Firms & Legal Professionals',
    seoTitle: 'SEO for Law Firms & Lawyers | Magneo',
    metaDescription: 'Law firm SEO covering practice-area content, technical improvements, local search, and enquiry measurement, with firm review before publication.',
    description: 'People searching for legal help need to understand whether your firm handles their matter and serves their location. Magneo develops legal SEO strategies around relevant practice areas, clear service pages, and the questions prospective clients ask before making contact.',
    primary: ['Discuss your law firm’s SEO', '/contact/#contact-enquiry'],
    secondary: ['Explore the legal SEO scope', '#legal-seo-scope'],
    cardEyebrow: 'PRACTICE-AREA SEARCH',
    card: ['The right matter.\nThe relevant page.', 'Search planning based on the services your firm actually offers.'],
    seoPage: true,
    hideAudience: true,
    scopeId: 'legal-seo-scope',
    scopeHeading: 'Search foundations for the matters your firm handles.',
    scopeIntro: '',
    included: [
      ['Practice-area mapping', 'Relevant searches matched to the appropriate service pages, with overlapping pages reviewed before new ones are proposed.'],
      ['Legal content', 'Service explanations and supporting articles developed from approved information and reviewed by the firm.'],
      ['Local visibility', 'Accurate office and service-area information, with eligible business-profile work where included.'],
      ['Technical improvements', 'Agreed checks and fixes affecting the accessibility, indexing, and organisation of website content.'],
      ['Enquiry measurement', 'Reporting that distinguishes website activity and enquiries from retained clients.'],
    ],
    workedExample: {
      eyebrow: 'EXAMPLE CONTENT SERIES',
      heading: 'A service page and an information article have different jobs.',
      pages: [
        ['Service page', 'An employment-law service page explains the matters handled, the people the firm advises, its service area, and how to enquire.'],
        ['Supporting article', 'An article explains a relevant question in more detail and links to the service page where appropriate. Legal statements require firm review.'],
      ],
      explanationTitle: 'Why the distinction matters',
      explanation: 'The service page helps visitors assess the offer. The article supports their research. Both should have a clear purpose rather than repeat the same content.',
      label: null,
    },
    examples: [],
    processHeading: 'A focused plan for your practice areas.',
    process: [
      ['Practice priorities', 'Magneo reviews the firm’s services, locations, website, and available search data.'],
      ['Page and content plan', 'The proposed scope identifies pages to improve, content gaps, and any overlap requiring attention.'],
      ['Firm review and implementation', 'Approved changes are implemented, with legal information checked by your designated reviewer.'],
      ['Performance review', 'Search trends and agreed enquiry data inform the next priorities. Retained-client outcomes require the firm’s own intake information.'],
    ],
    faq: [
      ['Do all practice areas need separate pages?', 'Distinct services may justify separate pages when visitors need different information. Closely overlapping topics should be assessed before creating additional pages.'],
      ['Can location pages be included?', 'Yes, where they accurately reflect the firm’s offices or services and provide useful local information. Repeated city pages with little meaningful difference are not the default approach.'],
      ['Who approves legal content?', 'The firm’s designated reviewer confirms legal accuracy, professional details, and approval before publication.'],
      ['How is progress measured?', 'Reporting can cover completed work, relevant search queries, landing-page activity, and agreed enquiries. Enquiries and retained clients are measured separately.'],
    ],
    cta: ['Which matters should prospective clients find your firm for?', 'Share your website, priority practice areas, and the locations you serve. Include any concerns about visibility or irrelevant enquiries.'],
    ctaButton: ['Discuss your law firm’s SEO', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: [['Law firms', '/law-firm-marketing/']],
    related: [
      ['SEO services', '/services/seo-for-regulated-industries/'],
      ['Website Design for Law Firms', '/services/website-design-rebrand-for-law-firms-magneo/'],
      ['PPC & Landing Pages for Law Firms', '/services/ppc-landing-pages-for-law-firms/'],
    ],
  },
  'seo-for-financial-advisors-wealth-firms': {
    title: 'SEO for Financial Advisors & Wealth Firms',
    seoTitle: 'SEO for Financial Advisors & Wealth Firms | Magneo',
    metaDescription: 'SEO for financial advisors and wealth firms, including advisory-service pages, reviewed educational content, technical improvements, and reporting.',
    description: 'Search traffic is useful when it connects with the advice your firm actually provides. Magneo develops SEO and content priorities around your services, intended clients, and approved areas of expertise, with financial-content review built into the workflow.',
    primary: ['Discuss your firm’s SEO', '/contact/#contact-enquiry'],
    secondary: ['Explore the SEO scope', '#financial-seo-scope'],
    cardEyebrow: 'ADVISORY SEARCH',
    card: ['Your services.\nYour intended clients.', 'Content priorities grounded in the advice your firm provides.'],
    seoPage: true,
    hideAudience: true,
    scopeId: 'financial-seo-scope',
    scopeHeading: 'SEO built around your advisory services.',
    scopeIntro: '',
    included: [
      ['Service-page clarity', 'Pages that explain the advice available, intended clients, and how a relationship begins.'],
      ['Search research', 'Relevant service and educational topics prioritised according to your offer, rather than traffic volume alone.'],
      ['Reviewed financial content', 'Drafts developed from approved information, with specialist review and publication responsibilities defined.'],
      ['Firm and advisor information', 'Accurate biographies, service details, and business information that support a consistent website.'],
      ['Technical and local foundations', 'Agreed website improvements and local-search work where relevant to the business.'],
      ['Progress reporting', 'Completed work, search activity, and agreed enquiry measures presented separately.'],
    ],
    decision: {
      eyebrow: 'TOPIC SELECTION',
      heading: 'Useful traffic starts with a relevant topic.',
      text: 'A widely searched financial question is not automatically the right content opportunity for an advisory firm. Topic selection should consider the service available, the intended audience, and whether the page gives visitors a relevant next step.',
      example: 'For a firm offering retirement planning, a service page can explain the scope of advice and client fit. A supporting article can address a specific planning question using approved information.',
      label: null,
    },
    examples: [
      ['Advisory-service content', 'Clearer pages for services that are currently buried within broad descriptions.'],
      ['Educational content planning', 'A focused set of topics reflecting the firm’s expertise and review capacity.'],
      ['Existing-content refresh', 'A review of older pages for relevance, accuracy, and alignment with the current offer.'],
    ],
    examplesHeading: 'Search content shaped around your advisory services.',
    processHeading: 'From advisory priorities to reviewed search content.',
    process: [
      ['Service and audience review', 'Magneo assesses the firm’s offer, existing website, and available search data.'],
      ['Topic selection', 'The proposed priorities connect relevant searches with your services and approved areas of expertise.'],
      ['Review and implementation', 'Copy and technical changes follow the agreed scope. Your designated reviewers approve financial information before publication.'],
      ['Progress assessment', 'Reporting explains the work completed and the search or enquiry trends available, with recommendations for the next stage.'],
    ],
    faq: [
      ['Can the work follow our compliance review process?', 'Yes. Reviewers, approval stages, and publication responsibilities can be included in the project plan.'],
      ['Do you publish financial content without approval?', 'Financial content follows the agreed approval process before publication. Business-specific claims and specialist information require your designated reviewer’s confirmation.'],
      ['Is local SEO relevant to every advisory firm?', 'Not equally. Its relevance depends on the firm’s service area, business model, and eligibility for local-search features.'],
      ['Can existing content be improved instead of creating more articles?', 'Yes. Existing pages may benefit from clearer service information, updated content, or better internal connections before additional articles are needed.'],
      ['How are results assessed?', 'Reporting distinguishes visibility and visits from enquiries. Whether an enquiry becomes a suitable client depends on the firm’s intake and engagement process.'],
    ],
    cta: ['Is your search content attracting interest in the advice you offer?', 'Share your website, priority services, and intended client audience. The next conversation can focus on where the current content supports - or misses - that fit.'],
    ctaButton: ['Discuss your firm’s SEO', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: [['Financial firms', '/financial-firm-marketing/']],
    related: [
      ['SEO services', '/services/seo-for-regulated-industries/'],
      ['Website Design for Financial Advisors', '/services/website-design-for-financial-advisors-wealth-firms-magneo/'],
      ['PPC & Landing Pages for Financial Advisors', '/services/ppc-landing-pages-for-financial-advisors-fintech/'],
    ],
  },
  'seo-for-the-healthcare-medtech-industry': {
    title: 'SEO for Healthcare Providers & MedTech Companies',
    seoTitle: 'Healthcare & MedTech SEO Services | Magneo',
    metaDescription: 'SEO for healthcare providers and MedTech companies, with patient-focused service pages, professional product content, technical reviews, and reporting.',
    description: 'Help prospective patients and buyers find your services through search. Magneo develops SEO strategies for clinics, healthcare providers, and MedTech companies, including website improvements, service and product content, and local visibility where relevant.',
    primary: ['Discuss your SEO priorities', '/contact/#contact-enquiry'],
    secondary: ['Explore your audience’s needs', '#healthcare-seo-audiences'],
    cardEyebrow: 'SEARCH VISIBILITY',
    card: ['Make your services easier to find.', 'Clearer pages. Useful content. A stronger technical foundation.'],
    cardClass: 'scr-hero-card-healthcare-seo',
    pageClass: 'scr-page-healthcare-seo',
    seoPage: true,
    hideAudience: true,
    audienceSplit: {
      id: 'healthcare-seo-audiences',
      heading: 'SEO shaped around your business.',
      items: [
        ['Healthcare providers and clinics', 'Local visibility and service pages that help people find your clinic, understand the care available, and locate appointment information.'],
        ['MedTech companies', 'Product and application pages that explain what the technology does, who it is for, and how to request further information.'],
      ],
    },
    scopeHeading: 'A scope matched to the audience.',
    scopeIntro: '',
    included: [
      ['Search and content mapping', 'Patient-service searches or professional product queries connected to the appropriate pages.'],
      ['Service or product explanations', 'Clear content addressing the information relevant to the intended visitor.'],
      ['Specialist review', 'Defined approval responsibilities for health statements, product capabilities, and supporting information.'],
      ['Technical foundations', 'Agreed checks and improvements affecting website crawling, indexing, and content organisation.'],
      ['Local search where relevant', 'Accurate clinic and location information, with eligible business-profile work where included.'],
      ['Measurement', 'Search and website activity assessed alongside agreed appointment-enquiry or commercial-enquiry measures.'],
    ],
    examplesHeading: 'SEO work shaped around healthcare and MedTech needs.',
    examples: [
      ['Clinic service-page improvements', 'Available care, practitioner information, practical details, and the appointment route brought into a clearer page structure.'],
      ['Multiple-location content', 'Distinct information for real clinic locations, reflecting the services and practical details available at each.'],
      ['MedTech product-content planning', 'Product and application pages organised around professional questions and approved supporting materials.'],
    ],
    processHeading: 'From audience needs to reviewed content.',
    process: [
      ['Audience and website review', 'Magneo identifies whether the project serves patients, professional buyers, or clearly separated groups.'],
      ['Content priorities', 'The proposed plan maps the relevant services or products to useful page improvements and content gaps.'],
      ['Specialist approval and implementation', 'Your designated reviewers confirm health information and product statements before approved changes are published.'],
      ['Progress review', 'Reporting separates search activity from the agreed enquiry measures and identifies the next priorities.'],
    ],
    faq: [
      ['Do clinics and MedTech companies need the same SEO approach?', 'No. Clinics often need service and local information for patients, while MedTech companies may need product and application content for professional buyers.'],
      ['Who reviews medical and product statements?', 'Your designated clinical or technical reviewers confirm accuracy and publication approval. Magneo’s content work does not replace specialist judgement.'],
      ['Can this support a clinic with several locations?', 'Yes. Each location should have accurate, useful information rather than identical pages with different place names.'],
      ['Is Google Business Profile work relevant to MedTech?', 'It depends on the business model and eligibility. It is not automatically part of every MedTech engagement.'],
      ['How will enquiries be measured?', 'The scope identifies relevant actions, such as appointment enquiries or product-demo requests. Analytics should not receive medical details or the contents of enquiry forms.'],
    ],
    cta: ['Who does your website need to reach?', 'Share your website and whether the priority is patient enquiries, professional product interest, or both. Include the services or products that matter most.'],
    ctaButton: ['Discuss your SEO priorities', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: [['Healthcare providers', '/healthcare-marketing/']],
    related: [
      ['SEO services', '/services/seo-for-regulated-industries/'],
      ['Website Design for Healthcare Clinics', '/services/website-design-for-healthcare-clinics-doctors-magneo/'],
      ['PPC & Landing Pages for Healthcare & MedTech', '/services/ppc-landing-pages-for-healthcare-medtech/'],
    ],
  },
  'social-media-linkedin-marketing-for-regulated-industries': {
    title: 'Social Media Marketing for Regulated Industries',
    seoTitle: 'Social Media Marketing for Regulated Industries | Magneo',
    metaDescription: 'Social media and LinkedIn content for regulated industries: strategy, posts, visuals, and short-form video, with clear review and publishing arrangements.',
    description: 'Turn your expertise into useful posts, Reels, carousels and video for the platforms your audience uses. Content strategy, production and publishing support keep your message consistent across your selected channels.',
    primary: ['Discuss your social media', '/contact/#contact-enquiry'], secondary: ['Explore content examples', portfolioLinks.social],
    pageClass: 'scr-page-social',
    card: ['CONTENT', 'Posts, reels, and LinkedIn content shaped around your expertise.'],
    heroPortfolio: {
      variant: 'social',
      label: 'ORIGINAL CONCEPTS',
      title: 'Video & Reels',
      image: '/portfolio/social/podcast-interview-reel-cover-v3.jpg',
      imageAlt: 'Preview of Magneo’s podcast interview reel concept',
      primaryUrl: '/portfolio/#social-media',
      primaryLabel: 'Explore video and reels ↗',
      ariaLabel: 'Explore social media video and reel concepts',
    },
    audienceHeading: 'Content shaped around your professional audience.',
    audiences: [
      ['Law firms and lawyers', '/services/linkedin-growth-law-firms/', 'Practice commentary, service explanations, and professional perspectives for the audiences your firm wants to reach.'],
      ['Financial advisors and FinTech', '/services/linkedin-growth-financial-advisors/', 'Educational content and business updates developed around your audience and internal review requirements.'],
      ['Healthcare providers', '/services/social-media-linkedin-leadership-for-healthcare-providers-magneo/', 'Practitioner introductions, service information, and educational content based on approved source material.'],
      ['Tech, SaaS, and AI companies', '/services/social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo/', 'Product explanations, founder perspectives, and use-case content for prospective users and buyers.'],
    ],
    scopeHeading: 'From content direction to publish-ready work.',
    scopeIntro: 'The proposal confirms channels, content quantities, formats, revision rounds, and publishing responsibilities.',
    included: [
      ['Audience and channel direction', 'A focused plan for whom the content should reach, what it should communicate, and where it belongs.'],
      ['Content themes and calendar', 'A practical editorial plan connecting your expertise, services, and recurring audience questions.'],
      ['Social media copy', 'Posts developed from your perspective, approved information, and the purpose of each channel.'],
      ['Visual content', 'Post graphics and carousel layouts that make the message easy to follow.'],
      ['Short-form video', 'Agreed concepts, scripts, editing, and production arrangements for reels or other short videos.'],
      ['Approval and delivery', 'A defined review process followed by organised asset delivery or scheduling where included.'],
    ],
    decision: {
      eyebrow: 'SERVICE OPTIONS',
      heading: 'Content creation or ongoing social media support?',
      panels: [
        ['Content creation', 'A defined set of posts, visuals, or videos delivered for your business to publish. Suitable when someone already manages your channels but needs help producing the work.'],
        ['Ongoing content support', 'An agreed recurring scope covering planning, production, reviews, and scheduling where included.'],
      ],
    },
    examples: [
      ['Social content series', 'A connected set of posts exploring audience questions, professional observations, or a service theme in your brand’s voice.'],
      ['Interview-based content', 'Selected ideas from an approved recorded conversation developed into clips, posts, and supporting copy.'],
      ['Service-focused content', 'A sequence explaining a particular service: who it is for, what it involves, and how an interested reader can learn more.'],
    ],
    examplesEyebrow: 'CONTENT FORMATS',
    examplesHeading: 'Several ways to share a useful idea.',
    visualExamples: true,
    processEyebrow: 'PROJECT PROCESS',
    processHeading: 'Your expertise, developed into a clear content plan.',
    process: [
      ['Direction', 'Magneo reviews your audience, current channels, goals, and available source material to recommend the content approach.'],
      ['Production', 'The agreed posts, visuals, and scripts are developed using your information and brand guidance.'],
      ['Feedback and approval', 'You confirm specialist details and provide feedback. Revisions follow the agreed scope, with internal approval completed before publication.'],
      ['Delivery and review', 'Approved assets are delivered or scheduled where included. For ongoing engagements, available performance data informs the next content priorities.'],
    ],
    faq: [
      ['Which social platforms should my business use?', 'Channel selection depends on your audience, goals, and ability to maintain useful content. The plan identifies a manageable focus rather than requiring a presence on every platform.'],
      ['How much of my time will this require?', 'For most experts, no more than two hours a week - for sharing insights, reviewing drafts, and approving content. Magneo handles the planning and production, with any additional time needed for initial setup agreed in advance.'],
      ['Do I need to appear on camera?', 'It depends on the format. For expert-led video, we strongly recommend appearing on camera yourself so your audience can get to know your voice, perspective, and personality. Text posts, graphics, and carousels can complement video or provide a starting point if you’re not ready to film.'],
      ['Can you write in my professional voice?', 'Yes. A custom GPT configured around your expertise, writing samples, and preferences can help develop and maintain your brand voice. If you’re starting from scratch, Magneo can shape that voice with you, then refine the content through editing and your feedback.'],
      ['Who approves and publishes the content?', 'Your designated reviewer approves business-specific information and any required internal checks. Publishing is handled by your business or by Magneo where scheduling is included.'],
      ['How many posts or videos are included?', 'We recommend publishing video content daily where it suits your niche and chosen format. The number of posts and videos included depends on your selected package. Your proposal confirms the channels, content quantities, formats, and revision rounds.'],
      ['Is personal branding included?', <>This service focuses on content strategy and production. A broader review of your positioning, professional biography, and profile messaging can be scoped through the <Link to="/services/personal-branding-for-regulated-professionals/">Personal Branding service</Link>.</>],
      ['How will progress be assessed?', 'Reporting can cover the work delivered and available measures such as engagement, website visits, and attributed enquiries. Likes and views alone do not establish client acquisition or revenue.'],
      ['Do you use AI in content production?', 'Yes. AI supports research, drafting, editing, and creative production wherever it adds value. Your expertise, perspective, and professional judgment remain at the centre. AI helps communicate what you know; it does not replace you as a specialist.'],
    ],
    cta: ['What would you like your audience to understand?', 'Share your current channels, the people you want to reach, and whether you need a defined content project or ongoing support.'],
    ctaButton: ['Discuss your social media', '/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    relatedIndustries: audiences,
    related: [['Personal Branding','/services/personal-branding-for-regulated-professionals/'],['AI Creative & Brand Voice','/services/ai-powered-digital-marketing/']],
  },
  'ai-automation-for-regulated-industries-magneo': {
    pageClass: 'scr-page-crm-automation',
    title: 'AI Automation & CRM Implementation for Regulated Industries',
    seoTitle: 'AI Automation & CRM Implementation | Magneo',
    metaDescription: 'CRM implementation and AI automation for regulated industries. Organise contacts, enquiries and follow-up with configured systems, integrations and training.',
    description: 'Bring enquiries, contacts, and follow-up into a clearer process. Magneo implements CRM systems and connects marketing workflows, with AI-assisted steps where useful and defined responsibilities for review and ongoing use.',
    primary: ['Discuss your workflow', '/contact/#contact-enquiry'], secondary: ['See a workflow example', '#workflow-example'],
    heroMicrocopy: 'Start with one recurring task. No technical brief required.',
    card: ['WORKFLOWS', 'Connect repetitive tasks with clear review and approval steps.'],
    heroOrbit: {
      url: '/portfolio/#ai-marketing',
      tools: ['ChatGPT', 'Claude', 'Make', 'AI agents', 'HubSpot', 'Zapier'],
    },
    hideAudience: true,
    scopeHeading: 'A CRM built around your working process.',
    scopeIntro: 'The proposal confirms the platform, licences, data-import requirements, integrations, and support included. CRM setup does not require AI at every step.',
    included: [
      ['Requirements and platform planning','Platform selection based on the agreed requirements, or a review of your existing CRM.'],
      ['Records and pipeline configuration','Contact fields, pipeline stages, and record organisation shaped around your working process.'],
      ['User roles and access','Agreed user roles and access permissions for the people responsible for the system.'],
      ['Forms and integrations','Agreed website forms and integrations connected within the confirmed technical scope.'],
      ['Tasks and follow-up','Task assignments, notifications, and follow-up workflows configured around clear ownership.'],
      ['Existing-data import','Import of existing information where included, following review of compatibility and cleanup requirements.'],
      ['Testing and adoption','Testing, documentation, and user training for the configured CRM and connected workflows.'],
    ],
    industryCards: {
      heading: 'Automation for your industry.',
      items: [
        ['Law firms and legal departments','/services/ai-automation-for-law-firms-legal-departments-magneo/','CRM setup, enquiry handoffs, follow-up tasks, and content-review workflows organised around your firm’s responsibilities.'],
        ['Financial advisors and firms','/services/ai-automation-for-financial-advisors-firms-fintech-magneo/','CRM handoffs, reviewed communications, and recurring marketing reporting.'],
        ['Healthcare providers and clinics','/services/ai-automation-for-healthcare-providers-clinics-magneo/','Administrative enquiry routing and content approvals, with information boundaries defined before setup.'],
        ['Tech, SaaS and AI companies','/services/ai-marketing-automation-for-tech-saas-ai-companies-magneo/','Demo enquiries, CRM routing, launch-content handoffs, and reporting workflows.'],
      ],
    },
    examples: [
      ['CRM implementation and setup','A CRM configured around how your business manages enquiries and relationships, including contact fields, pipeline stages, task assignments, and follow-up workflows.'],
      ['Enquiry routing and follow-up','Form details move into the agreed CRM, the right person receives a notification, and a follow-up task is created. A defined handoff makes responsibility clear after an enquiry arrives.'],
      ['Marketing reporting summaries','Selected marketing data is brought together in a draft summary for review. AI can assist with the written explanation, while a responsible person checks the figures and conclusions.'],
    ],
    examplesEyebrow: 'Automation examples',
    examplesHeading: 'Less manual work between the steps.',
    examplesIntro: 'Useful automation connects a recurring task to a clear next action. The right starting point depends on your tools, review requirements, and where work currently slows down.',
    examplesNote: 'Examples illustrate possible project scopes. Tool compatibility and required access are confirmed before implementation.',
    automationWorkflow: {
      heading: 'From a new enquiry to a clear next step.',
      label: 'EXAMPLE WORKFLOW',
      steps: ['Website enquiry','CRM record','Owner notification','Follow-up task','Human response'],
      copy: 'A new enquiry can trigger the routine administrative steps that follow. The responsible person receives the details and next action without manually moving the same information between tools.',
      panelHeading: 'Where AI could help',
      panelCopy: 'An optional AI step could draft a short enquiry summary for the recipient to check. The record creation, notification, and task assignment may only need standard automation rules.',
      note: 'If required information is missing or a connection fails, the workflow should flag the issue for attention.',
    },
    approvalWorkflow: {
      id: 'content-review-workflows',
      heading: 'Content review and approval workflows',
      description: 'Keep drafts, feedback, and approvals organised. Magneo connects the steps between content creation and publication so your team can see what needs review, who is responsible, and which version is ready to use.',
      items: ['Drafts assigned to designated reviewers.','Supporting sources stored alongside the content.','Clear statuses for changes requested and approval.','Reminders for outstanding reviews.','Approved content passed to the agreed publishing stage.'],
      supporting: 'Magneo sets up content workflows around your organisation’s review requirements. Your designated reviewers approve specialist claims and content before publication.',
    },
    processEyebrow: 'Project process',
    processHeading: 'From a recurring task to a working workflow.',
    processIntro: 'Magneo handles workflow planning, configuration, and testing. Your input confirms the business rules, access permissions, and approval responsibilities.',
    process: [
      ['Workflow discovery','The starting point is the task itself: how often it happens, which tools it touches, and where delays or repeated manual work occur.'],
      ['Configuration','The agreed connections, rules, and AI steps are configured around the approved scope and available system access.'],
      ['Testing and review','Typical scenarios and exceptions are checked before release. Your review confirms that the setup follows the intended process.'],
      ['Launch and handover','Documentation and a practical walkthrough explain how the workflow operates, what needs monitoring, and how to pause it. Any ongoing support is agreed separately.'],
    ],
    startingPoint: {
      heading: 'Start with one workflow worth improving.',
      body: 'A focused first project makes the scope easier to define and the outcome easier to assess. A recurring enquiry handoff, content-approval sequence, or reporting task can provide a practical starting point.',
      intro: 'The initial discussion covers:',
      items: ['The task and how often it repeats.','The tools and people involved.','The steps that require review.','What a successful setup would change.'],
      closing: 'From there, the proposed scope can identify the build requirements, software costs, and support needs.',
      button: ['Discuss your workflow','/contact/#contact-enquiry'],
    },
    faq: [
      ['Can you work with our existing tools?','Compatibility depends on the tools, subscription plans, available integrations, and access permissions. These are checked before the build scope is confirmed.'],
      ['Does every automation need AI?','No. Routing information, creating tasks, and sending notifications often work well with standard rules. AI is considered where interpretation, classification, or drafting adds a useful step.'],
      ['What stays under human control?','Approval responsibilities are defined during planning. External messages, published content, and other important actions can require review before they proceed.'],
      ['How is information handled?','The scope identifies what information moves between systems, which tools receive it, and who can access it. Sensitive information should not be included without an explicitly agreed requirement and appropriate review.'],
      ['What does an automation project cost?','Pricing depends on the number of steps, systems involved, access requirements, testing needs, and support scope. The proposal should distinguish implementation costs from software subscriptions and ongoing services.'],
      ['Who maintains the workflow?','Handover documentation identifies the routine checks and responsible owner. Ongoing monitoring, maintenance, and changes are included only when agreed in the support scope.'],
      ['What happens if a connection fails?','Testing includes agreed failure scenarios and exception handling. The handover explains how issues are flagged and who is responsible for investigating them.'],
      ['Can a project start with one task?','Yes. A focused workflow allows the process, responsibilities, and requirements to be established before considering additional automations.'],
      ['Can you implement a CRM from scratch?','Yes. A project can include requirements planning, CRM configuration, agreed integrations, testing, and training. The setup is shaped around how your business manages contacts, enquiries, and follow-up.'],
      ['Can you improve an existing CRM or import our contacts?','Yes. Existing fields, pipelines, and workflows can be reviewed. Data import or migration is scoped after checking the source information, compatibility, and cleanup requirements.'],
    ],
    cta: ['Which task would you like to stop repeating?','Share the process that slows you down and the tools involved. The first conversation can establish whether automation is a practical fit and what a focused project would include.'],
    ctaButton: ['Discuss your workflow','/contact/#contact-enquiry'],
    ctaEmail: 'contact@magneo.ca',
    resourcesAfterCta: true,
    related: [['AI Creative & Brand Voice','/services/ai-powered-digital-marketing/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/']],
  },
  'ppc-landing-pages-for-regulated-industries': {
    pageClass: 'scr-page-ppc-expanded',
    title: 'PPC Management & Landing Pages for Regulated Industries',
    seoTitle: 'PPC Management & Landing Pages for Regulated Industries | Magneo',
    metaDescription: 'PPC management and landing pages for regulated industries. Explore campaign strategy, ad creative, tracking, and ongoing optimisation with Magneo.',
    description: 'Connect your advertising budget to a clear offer and a straightforward enquiry process. Magneo plans paid campaigns, creates ads, and builds landing pages around the services you want to promote, with tracking and ongoing management available within the agreed scope.',
    primary: ['Discuss your campaign', '/contact/#contact-enquiry'], secondary: ['Explore campaign services', '#campaign-services'],
    cardEyebrow: 'PPC & LANDING PAGES',
    card: ['From ad to enquiry.', 'Campaign strategy, ad creative, and landing pages with a clear next step.'],
    cardClass: 'scr-hero-card-campaigns',
    ppcServices: { id: 'campaign-services', heading: 'Campaign strategy, ads, and landing pages in one project.', items: [
      ['Campaign strategy','The offer, audience, locations, platform, and budget organised around a defined business objective.'],
      ['Paid search','Keyword research, campaign structure, negative keywords, and ad copy aligned with the services being promoted.'],
      ['Paid social','Creative and campaigns developed for selected platforms, with the audience and placement assessed for the offer.'],
      ['Landing-page development','Copy, responsive design, forms, and implementation that connect the advertisement to a relevant next step.'],
      ['Tracking and enquiry routing','Agreed measurement for forms, calls, or bookings, with enquiries directed to the appropriate person.'],
      ['Ongoing management','Campaign monitoring, search-term reviews, budget adjustments, and creative improvements guided by available data.'],
    ]},
    ppcFlows: [{ heading: 'Make the next step clear after the click.', text: 'An ad introduces the offer. The landing page explains it, answers immediate questions, and makes contact easy. The enquiry then needs to reach someone who can respond.', steps: ['Relevant ad','Focused landing page','Enquiry or booking','Team follow-up'] }],
    ppcSections: [
      { eyebrow: 'Starting options', heading: 'Choose the support your campaign needs.', items: [['New campaign','Strategy, setup, ads, and an agreed landing page.'],['Existing campaign improvement','Review and refinement of targeting, messaging, pages, and tracking.'],['Landing page only','A focused destination for an existing campaign.'],['Ongoing management','Monitoring, reporting, and agreed adjustments after launch.']] },
      { eyebrow: 'Landing-page scope', heading: 'A page that helps visitors make a decision.', items: ['Clear offer and intended audience.','Headline consistent with the advertisement.','Useful service details.','Relevant, verified evidence.','Answers to common questions.','A focused contact or booking route.','Mobile and performance checks.','Agreed tracking.'] },
      { compact: true, eyebrow: 'CAMPAIGN REPORTING', heading: 'See which ads bring enquiries.', text: 'Reports show advertising spend, tracked enquiries, and cost per enquiry. Where your team records follow-up outcomes, reporting can also show which enquiries led to meetings or new business.' },
    ],
    industryLinks: [['Law-firm PPC','/services/ppc-landing-pages-for-law-firms/'],['Healthcare & MedTech PPC','/services/ppc-landing-pages-for-healthcare-medtech/'],['Financial advisor & FinTech PPC','/services/ppc-landing-pages-for-financial-advisors-fintech/']],
    portfolioExample: { title: 'Personal Injury · Modern', feature: 'A focused service introduction and visible enquiry route help visitors understand what to do after reading the page.', image: '/portfolio/websites/personal-injury-modern-hero-preview.webp', alt: 'Preview of a focused personal-injury website concept by Magneo', link: '/portfolio/legal-websites/personal-injury-bold/' },
    processEyebrow: 'Campaign process', processHeading: 'From campaign strategy to ongoing management.',
    process: [
      ['Strategy','Magneo defines the offer, audience, budget, and measurement plan.'],
      ['Production','Ads and landing pages are developed around the approved direction.'],
      ['Launch checks','Forms, tracking, destinations, and settings are tested.'],
      ['Management','Performance and enquiry feedback inform agreed adjustments.'],
    ],
    faq: [
      ['Can you manage the ads and build the landing page?','Yes. The scope can combine campaign setup, creative, landing-page development, tracking, and ongoing management.'],
      ['Can you improve an existing campaign?','Yes. Existing targeting, search terms, messaging, landing pages, and measurement can be reviewed before changes are prioritised.'],
      ['How much advertising budget is needed?','The starting budget depends on competition, the market, the offer, and the intended action. Research informs the proposed budget and testing scope.'],
      ['Is advertising spend included in your fee?','No. Advertising spend is separate from Magneo’s fees. Any additional software or hosting costs are identified in the proposal.'],
      ['How quickly can a campaign launch?','Timing depends on access, content readiness, page production, tracking, and platform review. The proposal sets out the planned stages.'],
    ],
    cta: ['Give your next campaign a clearer route to enquiry.','Share the offer, audience, and any campaigns already running.'], ctaButton: ['Discuss your campaign','/contact/#contact-enquiry'],
    resourcesAfterCta: true,
    related: [['Website Design','/services/website-design-for-regulated-professional-industries-magneo/'],['SEO & Content','/services/seo-for-regulated-industries/']],
  },
  'personal-branding-for-regulated-professionals': {
    pageClass: 'scr-page-personal-branding',
    title: 'Personal Branding for Regulated Professionals',
    description: 'Personal branding for lawyers, financial advisors, healthcare professionals, and technology founders. Magneo develops your positioning, professional profiles, brand voice, and content direction so potential clients can understand your expertise. Expert-led video brings your perspective and personality into that presence.',
    seoTitle: 'Personal Branding for Regulated Professionals | Magneo',
    metaDescription: 'Personal brand strategy, LinkedIn profile writing, and professional bios for lawyers, financial advisors, healthcare professionals, and tech founders.',
    primary: ['Talk about your personal brand', '/contact/#contact-enquiry'], secondary: ['View all services', '/services/'],
    card: ['YOUR VOICE', 'Positioning, profile messaging, and content direction.'],
    audiences: [
      ['Lawyers & law firm leaders', '/law-firm-marketing/'],
      ['Financial advisors & wealth professionals', '/financial-firm-marketing/'],
      ['Healthcare practitioners & clinic founders', '/healthcare-marketing/'],
      ['Technology founders & executives', '/tech-company-marketing/'],
    ],
    included: [
      ['Personal brand strategy','Your audience, professional focus, key messages, and how your experience supports your positioning.'],
      ['LinkedIn profile writing','Headline and About copy that explain your work, your expertise, and who you help.'],
      ['Professional biography','An introduction for your website, speaking opportunities, and professional profiles, adapted to the agreed formats.'],
      ['Content strategy and brand voice','Content themes, tone, and messaging guidance for profiles, articles, posts, and video scripts, with a custom GPT setup available as part of the agreed scope.'],
      ['Expert-led video','Topic planning, scripting, and recording guidance to help you communicate your expertise on camera. Editing and recurring production are defined in the selected package.'],
      ['Visual direction','Recommendations for profile imagery and a consistent presentation across your professional channels.'],
      ['Putting your positioning into practice','Guidance on using the approved messages and materials across your profiles and content.'],
    ],
    examples: [
      ['A clear professional focus','When your profile lists everything you do but leaves your specialism unclear, Magneo develops messaging that explains your focus, audience, and relevant experience.'],
      ['A profile that reflects your experience','An outdated headline or biography can miss what matters about your work today. Your profile copy is refreshed to reflect your current expertise and professional direction.'],
      ['One clear story across multiple roles','If you lead several businesses or work across different disciplines, Magneo develops a coherent introduction that explains how those roles connect.'],
    ],
    examplesEyebrow: 'What we can create',
    examplesHeading: 'Personal-brand assets grounded in your real expertise.',
    brandVoice: {
      eyebrow: 'Brand voice',
      heading: 'A recognisable voice, grounded in your expertise.',
      paragraphs: ['Your personal brand includes how you explain ideas, express opinions, and speak to the people you want to reach. Interviews, existing writing, and feedback help define a voice that reflects your personality and professional judgement.','That direction becomes practical guidance for your profile, articles, posts, and video scripts. A custom GPT can also be configured with approved examples, preferred terminology, and writing instructions to support consistent drafting.'],
      items: [['Your tone','The level of formality, vocabulary, and style that feels natural to you.'],['Your perspective','The experience, ideas, and explanations that give your content substance.'],['Your AI writing assistant','A custom GPT configured around your brand-voice guidance, with editing and review shaping the final output.']],
      closing: 'AI helps express your expertise consistently. It does not replace your knowledge, judgement, or presence.',
    },
    processEyebrow: 'How we work',
    processHeading: 'From professional experience to a clear personal brand.',
    process: [['Positioning','A conversation about your experience, audience, and goals gives Magneo the foundation to recommend your professional focus and key messages.'],['Profile development','Magneo develops the agreed biographies, profile copy, and content direction using information and examples you provide.'],['Feedback and refinement','You confirm accuracy and share feedback. The agreed revisions refine the wording so it reflects your experience and point of view.'],['Delivery and guidance','You receive the approved materials and guidance for using them consistently. Ongoing content creation or profile management is scoped separately.']],
    faq: [
      ['How is personal branding different from social media management?','Personal branding defines your positioning, message, and voice. Social media management handles ongoing content and publishing. They can be combined, but are scoped separately.'],
      ['What do you need from me?','We need your background, areas of expertise, goals, and examples of how you communicate. Interviews and feedback help the work reflect your actual perspective.'],
      ['Do I need to appear on video?',<>Yes - appearing on camera is a core part of the expert-led personal-branding approach recommended by Magneo. Potential clients should be able to see you, hear your perspective, and get a sense of how you explain your work.<br/><br/>You do not need to arrive with polished presentation skills. Topic planning, scripts, and recording guidance help you prepare, while editing shapes the finished video. Written content and visuals support your presence alongside video.</>],
      ['What if I am not comfortable on camera?','Start with short, guided recordings about subjects you know well. An interview-style conversation can feel more natural than delivering a prepared speech. The format and pace can develop as your confidence grows.'],
      ['Can you write in my professional voice?','Yes. Your writing, interviews, and feedback help establish how you communicate. Brand-voice guidance captures your tone, terminology, and perspective, and a custom GPT can support drafting from that foundation. Editing and review keep the finished content aligned with what you actually think and want to say.'],
      ['How much of my time will this require?','For most experts, the ongoing content process is designed to require no more than two hours a week for sharing ideas, recording, and reviewing material. Initial positioning work or a larger recording session may require additional time, agreed in advance.'],
      ['Can you help me communicate more than one role or business?','Yes. The work can clarify how your roles connect while keeping the message understandable to your intended audience.'],
      ['Is ongoing content included?','Only where specified. Your proposal distinguishes positioning and profile work from recurring content production.'],
      ['Can personal branding help people find me online?',<>Clear, consistent profiles help people understand your expertise when they search for your name or visit your professional pages. Personal branding can support your wider online presence, but <Link to="/services/seo-for-regulated-industries/">website SEO</Link> and ongoing search optimisation are separate services.</>],
      ['Can my personal brand fit within my firm’s brand?','Yes. Your positioning and profile can reflect your individual expertise while following your firm’s tone, visual identity, and approval requirements.'],
    ],
    cta: ['What do you want to be known for?','Tell us about your work, the people you want to reach, and what your current profile does not yet communicate.'],
    ctaButton: ['Talk about your personal brand', '/contact/#contact-enquiry'],
related: [['Social Media Marketing','/services/social-media-linkedin-marketing-for-regulated-industries/'],['Website Design','/services/website-design-for-regulated-professional-industries-magneo/']],
  },
};

const aiOverview = {
  title: 'AI-Powered Digital Marketing for Regulated Industries',
  seoTitle: 'AI Digital Marketing for Regulated Industries | Magneo',
  metaDescription: 'AI-powered digital marketing for regulated industries. Explore content, video, social media, brand-voice tools, and creative production with Magneo.',
  heroEyebrow: 'AI MARKETING SERVICES',
  description: 'Turn your expertise into articles, social content, video, and websites that explain what your business offers. Magneo brings together marketing strategy, creative production, and AI tools to develop your brand voice, create content, and organise recurring marketing work.',
  primary: ['Discuss your marketing project','/contact/#contact-enquiry'], secondary: ['Explore AI examples',portfolioLinks.ai],
  heroMicrocopy: 'Start with one project or combine services around a broader marketing plan.',
  heroFlow: { label: 'WHAT YOU CAN CREATE', steps: ['Articles','Social content','Video','Websites'], note: 'Combine content, video, website updates and automation around your marketing goals.' },
  brandVoice: {
    heading: 'Your brand voice, built into the content process.',
    paragraphs: ['Your content should reflect how your business communicates. Existing writing, interviews, preferred terminology, and feedback help establish a consistent voice across your website, social channels, and campaigns.','A custom GPT can be configured with that guidance and approved reference material to support recurring drafting tasks. Editing and feedback refine the output so the finished content reflects your perspective.'],
    items: [['Brand-voice development','Practical guidance for tone, vocabulary, key messages, and writing style.'],['Custom GPT setup','Instructions and approved examples organised around specific content tasks.'],['Editorial refinement','Drafts checked for clarity, accuracy, and consistency before approval.']],
    closing: 'AI supports the production process. Your expertise gives the content its substance.',
  },
  contentPlan: {
    heading: 'One expert conversation. Several useful pieces of content.',
    intro: 'An interview, approved article, or product walkthrough can provide the starting point for a coordinated content series.',
    items: [['Short video','A focused script and edited clip explaining one useful idea.'],['Social posts and carousels','Posts and visual sequences adapted to selected platforms.'],['Website or email content','A fuller explanation of the topic with a relevant next step.']],
    supporting: "Turn one useful idea into a short video, social posts, carousels and website or email content. Each version keeps your brand's voice and gives your audience a clear next step.",
    label: 'EXAMPLE CONTENT SERIES',
  },
  deliverables: {
    heading: 'What your project can include.',
    intro: 'The proposal turns your priorities into a defined set of deliverables.',
    items: ['Audience and messaging direction.','Content themes and campaign planning.','Scripts, copy, visuals, and edited video.','Versions for selected platforms.','Brand-voice guidance and custom GPT configuration.','Review and revision stages.','Final files, publishing support, or tool handover.','Agreed reporting and recommendations.'],
    note: 'Content quantities, channels, revision rounds, software costs, and ongoing support are specified before production begins.',
  },
  industries: {
    heading: 'Content shaped around your field.',
    items: [['Law firms','/law-firm-marketing/','Educational content and service explanations grounded in the firm’s practice areas and professional perspective.'],['Financial firms','/financial-firm-marketing/','Clear explanations of services and complex topics using approved messaging and the firm’s review process.'],['Healthcare providers','/healthcare-marketing/','Accessible educational content and service information developed from appropriate source material.'],['Tech, SaaS & AI companies','/tech-company-marketing/','Product demonstrations, feature explanations, and founder-led content showing how the product is used.']],
  },
  processEyebrow: 'FROM IDEA TO DELIVERY',
  processHeading: 'How your project takes shape.',
  process: [['Direction','Magneo defines the audience, message, and intended use, then recommends the formats and production approach.'],['Production','The agreed content, creative assets, or custom tools are developed using your brand guidance and approved information.'],['Review','Editorial and creative checks refine the work. Your feedback confirms the professional perspective and business facts, with specialist approval where required.'],['Delivery','Approved assets are prepared for their channels, or the agreed tools are configured and handed over with practical guidance.']],
  faqItems: [
    ['What can I hire Magneo to create?','Projects can include social content, articles, scripts, AI-assisted visuals and video, websites, brand-voice guidance, and custom GPT setups. The proposal identifies the deliverables that fit your goals.'],
    ['Can I start with one project?','Yes. A content series, video project, website, or brand-voice setup can be a practical starting point. Additional services can be introduced as your needs develop.'],
    ['Can the content sound like me?','Yes. Your writing, interviews, and feedback establish the voice. A custom GPT can support drafting with that guidance, while editing and review keep the content aligned with your perspective.'],
    ['Do I need to appear on camera?','For expert-led personal branding, appearing on camera is a core part of Magneo’s recommended approach. Your audience should be able to see you and hear your perspective. Other projects may use product demonstrations, voiceovers, graphics, or clearly presented AI creative, depending on the format.'],
    ['Does AI replace my role as the expert?','No. Your knowledge and judgement remain central. AI supports production tasks, while your perspective and approved information give the content its substance.'],
    ['How many posts or videos are included?','The package specifies quantities, formats, channels, and revision rounds. Daily video can be considered where it suits the niche and content plan; the final schedule follows the selected scope.'],
    ['Can this work alongside our existing marketing team?','Yes. Magneo can handle a defined part of production or provide finished assets for your team. Responsibilities for editing, approval, publishing, and reporting are agreed at the start.'],
    ['How will results be measured?','Measurement follows the project’s purpose. A campaign may track enquiries or website actions, while a content workflow may track production time and output. Relevant measures and tracking requirements are agreed in the scope.'],
    ['Can you also implement a CRM?',{ before: 'Yes. CRM implementation and connected administrative workflows are available through Magneo’s ', label: 'AI automation service', path: '/services/ai-automation-for-regulated-industries-magneo/', after: ' and can be scoped alongside a marketing project.' }],
  ],
  cta: ['Turn your expertise into your next marketing project.','Start with a content idea, a video, a website, or a recurring task that needs a better process. Magneo can help shape it into a clear project.'],
  ctaButton: ['Discuss your marketing project','/contact/#contact-enquiry'],
  ctaMicrocopy: 'You do not need a finished brief.',
};

const aiServices = [
  ['AI SEO & Blog Automation','/services/ai-seo/','Search-focused articles, existing-page improvements, and blog workflows connecting planning, drafting, review, and approved publication.'],
  ['AI Social Media Marketing','/services/ai-social-media-marketing/','Posts, carousels, scripts, and short-form content developed in your brand voice and adapted for selected platforms.'],
  ['AI UGC & Video Production','/services/ai-ugc-ai-video-production/','Product demonstrations, service explainers, presenter-led videos, and campaign variations, from concept and script to finished edit.'],
  ['AI Web Design & Development','/services/ai-web-design-conversion/','Website copy, design, and responsive development for business websites and focused landing pages.'],
  ['AI Content Marketing','/services/ai-content-marketing/','Articles, email content, and campaign assets developed from your expertise and approved source material.'],
  ['Content Review & Approval Workflows','/services/ai-automation-for-regulated-industries-magneo/#content-review-workflows','Organised stages for checking drafts, gathering feedback, and approving content before publication.'],
];

function useReviewMetadata(data, slug, isReview) {
  useEffect(() => {
    const title = data.seoTitle || `${data.title.replace(/\.$/, '')} | Magneo`;
    const description = data.metaDescription || data.description;
    document.title = title;
    const canonicalUrl = `https://magneo.ca/services/${slug}/`;
    const setMeta = (selector, attributes, content) => {
      const matches = [...document.head.querySelectorAll(selector)];
      const element = matches.shift() || document.createElement('meta');
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      element.setAttribute('content', content);
      if (!element.parentNode) document.head.appendChild(element);
      matches.forEach((duplicate) => duplicate.remove());
    };
    setMeta('meta[name="description"]', { name: 'description' }, description);
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    const canonicals = [...document.head.querySelectorAll('link[rel="canonical"]')];
    const canonical = canonicals.shift() || document.createElement('link');
    canonical.rel = 'canonical'; canonical.href = canonicalUrl;
    if (!canonical.parentNode) document.head.appendChild(canonical);
    canonicals.forEach((duplicate) => duplicate.remove());
    const robots = document.createElement('meta');
    robots.name = 'robots'; robots.content = isReview ? 'noindex, nofollow, noarchive' : 'index, follow'; robots.dataset.serviceContentReview = 'true';
    document.head.appendChild(robots);
    let structuredData;
    if (['ai-powered-digital-marketing','ai-content-marketing'].includes(slug)) {
      const faqItems = (data.faqItems || []).map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: typeof answer === 'string' ? answer : `${answer.before || ''}${answer.label || ''}${answer.after || ''}` },
      }));
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.dataset.aiOverviewSchema = 'true';
      structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', name: data.title, description, url: canonicalUrl, provider: { '@type': 'Organization', name: 'Magneo', url: 'https://magneo.ca/' } }, { '@type': 'FAQPage', mainEntity: faqItems }] });
      document.head.appendChild(structuredData);
    }
    return () => { robots.remove(); structuredData?.remove(); };
  }, [data, slug, isReview]);
}

function PortfolioHeroCard({ preview }) {
  const primaryUrl = preview.primaryUrl || preview.demoUrl;
  const primaryLabel = preview.primaryLabel || 'View website demo →';
  const secondaryUrl = preview.secondaryUrl || preview.portfolioUrl;
  const secondaryLabel = preview.secondaryLabel || 'Explore website designs →';
  return <aside className={`scr-portfolio-card${preview.variant ? ` scr-portfolio-card-${preview.variant}` : ''}`} aria-label={preview.ariaLabel || `${preview.title} website concept`}>
    <Link className="scr-portfolio-image-link" to={primaryUrl} aria-label={preview.ariaLabel || `View ${preview.title} website demo`}>
      <span className="scr-browser-chrome" aria-hidden="true"><i/><i/><i/></span>
      <img src={preview.image} alt={preview.imageAlt} width="1440" height="720" loading="eager" decoding="async"/>
    </Link>
    <div className="scr-portfolio-card-copy">
      <span>{preview.label}</span>
      <h2>{preview.title}</h2>
      <div className="scr-portfolio-actions">
        <Link to={primaryUrl}>{primaryLabel}</Link>
        {secondaryUrl && <Link to={secondaryUrl}>{secondaryLabel}</Link>}
      </div>
    </div>
  </aside>;
}

function AutomationOrbitCard({ orbit }) {
  return <Link className="scr-orbit-card" to={orbit.url} aria-label={orbit.linkLabel || 'Explore AI marketing and automation concepts'}>
    <span className="scr-orbit-eyebrow">{orbit.label || 'AI AUTOMATION CONCEPT'}</span>
    <div className="scr-orbit-scene" aria-hidden="true">
      <span className="scr-orbit-line scr-orbit-line-one"/>
      <span className="scr-orbit-line scr-orbit-line-two"/>
      <span className="scr-orbit-core"><strong>AI</strong><small>automation</small></span>
      {orbit.tools.map((tool, index) => <span className={`scr-orbit-tool scr-orbit-tool-${index + 1}`} key={tool}>{tool}</span>)}
    </div>
    <div className="scr-orbit-copy"><h2>{orbit.heading || <>Connected tools.<br/>Practical workflows.</>}</h2><p>{orbit.copy || 'See how AI and automation can support a defined marketing task.'}</p><b>{orbit.linkLabel || 'Explore AI marketing'} <span aria-hidden="true">↗</span></b></div>
  </Link>;
}

function CompactHeroFlow({ flow }) {
  return <aside className={`scr-hero-flow scr-hero-flow-${flow.steps.length}`} aria-label={flow.label}><span className="scr-orbit-eyebrow">{flow.label}</span><div className="scr-hero-flow-steps">{flow.steps.map((step,index)=><div key={step}><span>{String(index + 1).padStart(2,'0')}</span><strong>{step}</strong>{index < flow.steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div><p>{flow.note}</p></aside>;
}

function VideoHeroPreview({ preview }) {
  return <aside className="scr-video-hero"><div className="scr-video-hero-media"><video controls playsInline preload="metadata" poster={preview.poster} aria-label={`Play ${preview.title}`}><source src={preview.video} type="video/mp4"/>Your browser does not support embedded video.</video></div><div><span>{preview.format}</span><h2>{preview.title}</h2></div></aside>;
}

function ReviewHero({ data }) {
  const hasFeatureCard = data.heroPortfolio || data.heroOrbit || data.heroFlow || data.heroVideo;
  return <section className={`hero scr-hero${hasFeatureCard ? ' scr-hero-with-portfolio' : ''}`}><div className="container hero-grid"><div><div className="crumb">Home / Services / {data.title.replace(/\.$/, '')}</div><div className="label">{data.heroEyebrow || 'Marketing service'}</div><h1>{data.title}</h1><p className="intro">{data.description}</p><div className="actions"><Link className="btn" to={data.primary[1]}>{data.primary[0]}</Link><Link className="btn outline" to={data.secondary[1]}>{data.secondary[0]}</Link></div>{data.heroMicrocopy && <p className="scr-hero-microcopy">{data.heroMicrocopy}</p>}</div>{data.heroPortfolio ? <PortfolioHeroCard preview={data.heroPortfolio}/> : data.heroOrbit ? <AutomationOrbitCard orbit={data.heroOrbit}/> : data.heroFlow ? <CompactHeroFlow flow={data.heroFlow}/> : data.heroVideo ? <VideoHeroPreview preview={data.heroVideo}/> : <div className={`glass scr-hero-card ${data.cardClass || ''}`}>{data.cardEyebrow && <span className="label">{data.cardEyebrow}</span>}<strong>{data.card[0].split('\n').map((line,index)=><span key={line}>{index > 0 && <br/>}{line}</span>)}</strong><p>{data.card[1]}</p></div>}</div></section>;
}

function ProcessSection({ items, eyebrow = 'How we work', heading = 'We define the work, responsibilities, and next steps.', intro }) {
  return <section className="section dark"><div className="container"><div className="label">{eyebrow}</div><h2>{Array.isArray(heading) ? <>{heading[0]}<br/>{heading[1]}</> : heading}</h2>{intro && <p className="scr-process-intro">{intro}</p>}<div className="process">{items.map(([title,copy],index)=><div className="process-row" key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>;
}

function DecisionSection({ decision }) {
  if (!decision) return null;
  return <section className="section soft scr-decision"><div className="container"><div className="label">{decision.eyebrow || 'Website journey'}</div><h2>{decision.heading}</h2>{decision.paragraphs?.map(copy => <p className="scr-decision-copy" key={copy}>{copy}</p>)}{decision.text && <p className="scr-decision-copy">{decision.text}</p>}{decision.supporting && <p className="scr-decision-supporting">{decision.supporting}</p>}{decision.example && <div className="scr-decision-example"><strong>Example</strong><p>{decision.example}</p></div>}{decision.panels && <div className="scr-decision-grid">{decision.panels.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>}{decision.closing && <p className="scr-decision-closing"><FaqAnswer answer={decision.closing}/></p>}{decision.label && <p className="scr-decision-label">{decision.label}</p>}</div></section>;
}

function PurposeVisualSection({ visual }) {
  if (!visual) return null;
  return <section className="section scr-purpose"><div className="container"><div className="label">{visual.eyebrow}</div><h2>{visual.heading}</h2><div className="scr-purpose-grid"><figure className="scr-purpose-figure"><Link className="scr-purpose-image-link" to={visual.url} aria-label={visual.linkLabel}><span className="scr-browser-chrome" aria-hidden="true"><i/><i/><i/></span><span className="scr-purpose-image"><img src={visual.image} alt={visual.imageAlt} width="1440" height="720" loading="lazy" decoding="async"/>{visual.points.map(([, , markerLabel], index)=><span className={`scr-purpose-marker scr-purpose-marker-${index + 1}`} aria-label={`${index + 1}. ${markerLabel}`} key={markerLabel}>{index + 1}</span>)}</span></Link><figcaption><strong>{visual.conceptLabel}</strong><span>{visual.caption}</span><Link to={visual.url}>{visual.linkLabel}</Link></figcaption></figure><ol className="scr-purpose-points">{visual.points.map(([title, description], index)=><li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></div></section>;
}

function ProgressSection({ progress }) {
  if (!progress) return null;
  return <section className="section soft scr-progress"><div className="container"><h2>{progress.heading}</h2><div className="grid scr-progress-grid">{progress.items.map(([title, copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-progress-closing">{progress.closing}</p></div></section>;
}

function AudienceSplitSection({ audience }) {
  if (!audience) return null;
  return <section id={audience.id} className="section soft scr-audience-split"><div className="container"><div className="label">Audience</div><h2>{audience.heading}</h2><div className="scr-audience-split-grid">{audience.items.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>{audience.closing && <p className="scr-audience-split-closing">{audience.closing}</p>}</div></section>;
}

function PlatformSection({ content }) {
  if (!content) return null;
  return <section className="section scr-platforms"><div className="container"><div className="label">{content.eyebrow}</div><h2>{content.heading}</h2>{content.intro && <p className="scr-platforms-intro">{content.intro}</p>}<div className="scr-platforms-grid">{content.items.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-platforms-closing">{content.closing}</p></div></section>;
}

function PracticalContentExample({ content }) {
  if (!content) return null;
  return <section id={content.id} className="section scr-practical-content"><div className="container"><div className="label">{content.eyebrow}</div><h2>{content.heading}</h2><div className="scr-practical-content-grid">{content.items.map(([title, question, formats])=><article key={title}><span>{title}</span><h3>{question}</h3><ul>{formats.map(format=><li key={format}>{format}</li>)}</ul></article>)}</div><div className="scr-practical-content-footer">{content.label && <p>{content.label}</p>}<Link to={content.link[0]}>{content.link[1]} <span aria-hidden="true">→</span></Link></div></div></section>;
}

function ContentCarousel({ healthcare = false }) {
  const slides = healthcare ? [
    ['CLINIC INFORMATION', 'Before your first visit.', 'Find your clinic’s location, booking details and any referral requirements before you arrive.'],
    ['CLINIC INFORMATION', 'Come prepared.', 'Check your clinic’s instructions for documents to bring and any preparation needed for your visit.'],
    ['CLINIC INFORMATION', 'Know what to expect.', 'Get familiar with your care team and how your first visit will work, with clear information from your clinic.'],
  ] : [
    ['YOUR PERSPECTIVE', 'Explain what you think.\nShow why it matters.'],
    ['YOUR EXPERTISE', 'Answer real questions.\nMake complex ideas clear.'],
    ['YOUR BRAND VOICE', 'Sound like yourself.\nBuild a recognisable voice.'],
    ['YOUR VISIBILITY', 'Share your knowledge.\nGive people a reason to follow.'],
  ];
  const [active, setActive] = useState(0);
  const touch = useRef(null);
  const select = index => setActive((index + slides.length) % slides.length);
  return <div className={`${healthcare ? 'scr-healthcare-carousel' : 'scr-social-concept scr-social-carousel'} scr-working-carousel`} role="region" aria-roledescription="carousel" aria-label={healthcare ? 'Clinic information example' : 'Professional content example'} tabIndex={0}
    onKeyDown={event => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) { event.preventDefault(); select(event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : active + (event.key === 'ArrowRight' ? 1 : -1)); } }}
    onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
    onTouchEnd={event => { const start = touch.current; touch.current = null; if (!start) return; const dx = event.changedTouches[0].clientX - start.x; const dy = event.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(active + (dx < 0 ? 1 : -1)); }}>
    <small>{slides[active][0]}{healthcare ? ` · ${String(active + 1).padStart(2, '0')}` : ''}</small>{!healthcare && <i aria-hidden="true"/>}
    <div className="scr-carousel-message" aria-live="polite" aria-atomic="true"><strong>{slides[active][1]}</strong>{slides[active][2] && <p>{slides[active][2]}</p>}</div>
    <div className="scr-carousel-controls" aria-label="Choose slide">{slides.map((slide, index) => <button type="button" key={slide[1]} aria-label={`Slide ${index + 1}: ${slide[1].replace('\n', ' ')}`} aria-pressed={active === index} onClick={() => select(index)}><span/></button>)}</div>
  </div>;
}

function HealthcareVisualExamples({ content }) {
  if (!content) return null;
  return <section className="section scr-healthcare-visuals"><div className="container"><div className="scr-healthcare-visual-grid"><article><div className="scr-social-video"><video controls playsInline preload="metadata" poster={content.poster} aria-label={content.videoAlt} onPlay={(event)=>{event.currentTarget.nextElementSibling.hidden=true;}} onEnded={(event)=>{event.currentTarget.nextElementSibling.hidden=false;}}><source src={content.video} type="video/mp4"/>Your browser does not support embedded video.</video><button type="button" aria-label={content.videoAlt} onClick={(event)=>{event.currentTarget.previousElementSibling.play();}}><span aria-hidden="true">▶</span></button></div><div className="scr-healthcare-visual-copy"><span>{content.videoLabel}</span><h3>{content.videoTitle}</h3><p>{content.videoCopy}</p></div></article><article><ContentCarousel healthcare/><div className="scr-healthcare-visual-copy"><span>{content.carouselLabel}</span><h3>{content.carouselTitle}</h3><p>{content.carouselCopy}</p></div></article></div><Link className="scr-healthcare-portfolio-link" to={content.portfolio[0]}>{content.portfolio[1]} <span aria-hidden="true">→</span></Link></div></section>;
}

function EngagementSection({ content }) {
  if (!content) return null;
  const gridClass = content.items.length === 4 ? ' scr-engagement-grid-four' : content.items.length === 5 ? ' scr-engagement-grid-five' : '';
  return <section className="section soft scr-engagement"><div className="container"><div className="label">{content.eyebrow}</div><h2>{content.heading}</h2><p className="scr-engagement-intro">{content.intro}</p><div className={`scr-engagement-grid${gridClass}`}>{content.items.map(([title, copy], index)=><article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>{content.note && <p className="scr-engagement-note">{content.note}</p>}{content.clarification && <p className="scr-engagement-clarification">{content.clarification}</p>}</div></section>;
}

function SocialVisualExamples() {
  return <section className="section scr-social-visuals" aria-labelledby="scr-social-visuals-title"><div className="container"><div className="label">Content examples</div><h2 id="scr-social-visuals-title">See the content, not just the list of services.</h2><div className="scr-social-visual-grid">
    <article className="scr-social-example"><div className="scr-social-concept scr-social-text-post" role="img" aria-label="Text-led social post concept reading Answer what people want to know"><small>Client questions / 01</small><strong>Answer what people<br/>want to know.</strong><span aria-hidden="true">↗</span></div><div className="scr-social-example-copy"><span>Original Magneo concept · Text-led LinkedIn post</span><h3>A useful question, answered clearly.</h3><p>Designed to turn a recurring audience question into a concise professional explanation.</p></div></article>
    <article className="scr-social-example"><ContentCarousel/><div className="scr-social-example-copy"><span>Original Magneo concept · Visual carousel</span><h3>A perspective structured for the format.</h3><p>Designed to break a professional observation into readable, connected visual points.</p></div></article>
    <article className="scr-social-example scr-social-video-example"><div className="scr-social-video"><video controls playsInline preload="metadata" poster="/portfolio/social/commentary-reel-cover.jpg" aria-label="Play the commentary reel concept" onPlay={(event)=>{event.currentTarget.nextElementSibling.hidden=true;}} onEnded={(event)=>{event.currentTarget.nextElementSibling.hidden=false;}}><source src="/portfolio/social/commentary-reel.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><button type="button" aria-label="Play the commentary reel concept" onClick={(event)=>{event.currentTarget.previousElementSibling.play();}}><span aria-hidden="true">▶</span></button></div><div className="scr-social-example-copy"><span>Original Magneo concept · Short-form video</span><h3>Commentary reel</h3><p>Designed to connect a timely observation with a clear service-related message.</p></div></article>
  </div><Link className="scr-social-portfolio-link" to="/portfolio/#social-media">Explore the content portfolio <span aria-hidden="true">→</span></Link></div></section>;
}

function WorkedExampleSection({ example }) {
  if (!example) return null;
  return <section className="section soft scr-worked-example"><div className="container"><div className="label">{example.eyebrow}</div><h2>{example.heading}</h2><div className="scr-worked-grid"><div className="scr-page-diagram" aria-label="Illustration showing a service page linking with a supporting article">{example.pages.map(([title, copy], index)=><article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p>{index === 0 && <i aria-hidden="true">↔</i>}</article>)}</div><aside><h3>{example.explanationTitle}</h3><p>{example.explanation}</p>{example.label && <strong>{example.label}</strong>}</aside></div></div></section>;
}

function IndustryCardsSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-industry-cards"><div className="container"><div className="label">Industry services</div><h2>{content.heading}</h2><div className="grid four">{content.items.map(([title,path,copy])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{title}</h3><p>{copy}</p></Link>)}</div></div></section>;
}

function AutomationWorkflowSection({ workflow }) {
  if (!workflow) return null;
  const stepNames = workflow.steps.map(step=>Array.isArray(step) ? step[0] : step);
  return <section id="workflow-example" className="section scr-automation-workflow"><div className="container"><div className="label">{workflow.label}</div><h2>{workflow.heading}</h2>{workflow.intro && <p className="scr-workflow-intro">{workflow.intro}</p>}<div className="scr-workflow-grid"><div><div className={`scr-workflow-flow${workflow.steps.some(Array.isArray) ? ' scr-workflow-flow-detailed' : ''}`} role="img" aria-label={`Workflow: ${stepNames.join(' to ')}`}>{workflow.steps.map((step,index)=>{const [title,copy]=Array.isArray(step)?step:[step,null];return <div className="scr-workflow-step" key={title}><span>{String(index + 1).padStart(2,'0')}</span><strong>{title}</strong>{copy && <small>{copy}</small>}{index < workflow.steps.length - 1 && <i aria-hidden="true">→</i>}</div>;})}</div><p className="scr-workflow-copy">{workflow.copy}</p>{workflow.note && <p className="scr-workflow-note">{workflow.note}</p>}</div><aside><span>{workflow.panelEyebrow || 'Optional AI step'}</span><h3>{workflow.panelHeading}</h3><p>{workflow.panelCopy}</p></aside></div><Link className="scr-workflow-portfolio" to={workflow.portfolioUrl || '/portfolio/#ai-marketing'}>{workflow.portfolioLabel || 'Explore more AI marketing concepts'} <span aria-hidden="true">→</span></Link></div></section>;
}

function LegalCrmSection({ content }) {
  return <section className="section scr-legal-crm"><div className="container"><div className="label">CRM implementation</div><div className="scr-legal-crm-head"><h2>{content.heading}</h2><p>{content.text}</p></div><ul className={content.items.some(Array.isArray) ? 'scr-legal-crm-detailed' : ''}>{content.items.map((item,index)=>{const [title,copy]=Array.isArray(item)?item:[item,null];return <li key={title}><span>{String(index + 1).padStart(2,'0')}</span><div><strong>{title}</strong>{copy && <small>{copy}</small>}</div></li>;})}</ul><p className="scr-legal-note">{content.note}</p></div></section>;
}

function LegalDepartmentSection({ content }) {
  return <section className="section soft scr-legal-department"><div className="container"><div><div className="label">Legal departments</div><h2>{content.heading}</h2></div><div><p>{content.text}</p><p className="scr-legal-note">{content.boundary}</p></div></div></section>;
}

function LegalStartingPoint({ content }) {
  return <section className="section soft scr-legal-starting"><div className="container"><div className="label">A practical first project</div><h2>{content.heading}</h2><p>{content.body}</p>{content.supporting && <p className="scr-starting-supporting">{content.supporting}</p>}<Link className="btn" to={content.button[1]}>{content.button[0]}</Link></div></section>;
}

function AutomationAiFitSection({ content }) {
  if (!content) return null;
  return <section className="section scr-ai-fit"><div className="container"><div className="label">{content.label || 'Appropriate automation'}</div><h2>{content.heading}</h2><p className="scr-ai-fit-intro">{content.text}</p>{content.items?.length > 0 && <div className="scr-ai-fit-grid">{content.items.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>}</div></section>;
}

function ContentApprovalWorkflowSection({ content }) {
  useEffect(() => {
    if (content && window.location.hash === `#${content.id}`) document.getElementById(content.id)?.scrollIntoView();
  }, [content]);
  if (!content) return null;
  return <section id={content.id} className="section soft scr-content-approval"><div className="container"><div className="label">Review workflow</div><div className="scr-content-approval-head"><h2>{content.heading}</h2><p>{content.description}</p></div><ul>{content.items.map((item,index)=><li key={item}><span>{String(index + 1).padStart(2,'0')}</span><strong>{item}</strong></li>)}</ul><p className="scr-content-approval-note">{content.supporting}</p></div></section>;
}

function AutomationExpansionSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-automation-expansion"><div className="container"><div><div className="label">A practical starting point</div><h2>{content.heading}</h2><p>{content.text}</p></div><div><strong>Potential later scopes</strong><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul><p className="scr-legal-note">{content.note}</p></div></div></section>;
}

function IndustryAutomationReview({ data }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);
  const serviceLinks = data.related.filter(([,path]) => path.startsWith('/services/'));
  const industryLinks = data.related.filter(([,path]) => !path.startsWith('/services/'));
  const resources = <RelatedColumns serviceLinks={serviceLinks} industryLinks={industryLinks} articles={relatedArticlesFor(data)}/>;
  return <div className={`scr-page ${data.pageClass}`}><ReviewHero data={data}/>
    <section className="section soft scr-legal-services"><div className="container"><div className="label">{data.servicesEyebrow || 'Automation services'}</div><h2>{data.examplesHeading}</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>{data.examplesNote && <p className="scr-examples-note">{data.examplesNote}</p>}</div></section>
    <LegalCrmSection content={data.crmSection}/>
    <AudienceSplitSection audience={data.audienceSplit}/>
    <AutomationWorkflowSection workflow={data.automationWorkflow}/>
    <AutomationAiFitSection content={data.aiFit}/>
    {data.legalDepartment && <LegalDepartmentSection content={data.legalDepartment}/>}<AutomationExpansionSection content={data.expansion}/>
    {!data.hideDeliverables && <section id={data.scopeId} className="section"><div className="container scr-included"><div><div className="label">{data.scopeEyebrow || 'Project scope'}</div><h2>{data.scopeHeading}</h2>{data.scopeIntro && <p>{data.scopeIntro}</p>}</div><ul>{data.included.map(([title,copy])=><li key={title}><strong>{title}</strong><span>{copy}</span></li>)}</ul></div>{data.scopeNote && <div className="container"><p className="scr-scope-note">{data.scopeNote}</p></div>}</section>}
    <ProcessSection items={data.process} eyebrow={data.processEyebrow || 'How we work'} heading={data.processHeading} intro={data.processIntro}/>
    {data.startingPoint && <LegalStartingPoint content={data.startingPoint}/>}
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <FinalCta data={data}/>
    {resources}
  </div>;
}

function StartingPointSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-starting-point"><div className="container"><div className="scr-starting-card"><div><div className="label">A practical first project</div><h2>{content.heading}</h2><p>{content.body}</p></div><div><strong>{content.intro}</strong><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul><p>{content.closing}</p><Link className="btn" to={content.button[1]}>{content.button[0]}</Link></div></div></div></section>;
}

function FinalCta({ data }) {
  const button = data.ctaButton || ['Discuss your project', '/contact/#contact-enquiry'];
  return <section className="section"><div className="container"><div className="cta scr-cta"><h2>{data.cta[0]}</h2><p>{data.cta[1]}</p><div className="actions"><Link className="btn" to={button[1]}>{button[0]}</Link>{data.ctaEmail && <a className="scr-cta-email" href={`mailto:${data.ctaEmail}`}>{data.ctaEmail}</a>}</div>{data.ctaMicrocopy && <small className="scr-cta-microcopy">{data.ctaMicrocopy}</small>}</div></div></section>;
}

function RelatedColumns({ serviceLinks, industryLinks, articles }) {
  useEffect(() => {
    if (window.location.hash === '#related-resources') document.getElementById('related-resources')?.scrollIntoView();
  }, []);
  return <section id="related-resources" className="related-section scr-related scr-related-with-articles"><div className="container">
    <div><h2>Related Services</h2><i/><ul>{serviceLinks.map(([label,path])=><li key={`${path}-${label}`}><Link to={path}>{label}</Link></li>)}</ul></div>
    <div><h2>Related Industries</h2><i/><ul>{industryLinks.map(([label,path])=><li key={`${path}-${label}`}><Link to={path}>{label}</Link></li>)}</ul></div>
    <div><h2>Related Articles</h2><i/><ul>{articles.map(([label,path])=><li key={path}><a href={path}>{label}</a></li>)}</ul></div>
  </div></section>;
}

function AiSeoScopeCards({ content }) {
  return <section className="section soft scr-ai-seo-scope"><div className="container"><div className="label">{content.eyebrow}</div><h2>{content.heading}</h2><p className="scr-ai-seo-intro">{content.intro}</p><div className="scr-ai-seo-card-grid">{content.items.map(([title, copy], index)=><article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function BlogAutomationSection({ content }) {
  return <section id="blog-automation" className="section dark scr-blog-automation"><div className="container"><div className="label">Blog automation</div><h2>{content.heading}</h2><p className="scr-ai-seo-intro">{content.text}</p><ol>{content.steps.map(([title, copy], index)=><li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><p className="scr-ai-seo-note">{content.note}</p></div></section>;
}

function BrandVoiceSection({ content }) {
  return <section className="section soft scr-brand-voice"><div className="container"><div className="label">{content.eyebrow || 'AI brand voice'}</div><h2>{content.heading}</h2><div className="scr-brand-voice-copy">{content.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div><div className="scr-brand-voice-grid">{content.items.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-ai-seo-note">{content.closing}</p></div></section>;
}

function ContentGenerationSection({ content }) {
  return <section className="section scr-content-generation"><div className="container"><div className="label">Content generation</div><h2>{content.heading}</h2><p className="scr-ai-seo-intro">{content.intro}</p><div className="scr-content-generation-grid">{content.items.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-ai-seo-note">{content.note}</p><Link className="scr-ai-seo-text-link" to={content.link[1]}>{content.link[0]} <span aria-hidden="true">→</span></Link></div></section>;
}

function ApprovedTopicExample({ content }) {
  return <section className="section soft scr-topic-example"><div className="container"><div className="label">Example content series</div><h2>{content.heading}</h2><div className="scr-topic-example-grid"><div className="scr-topic-prompt"><span>Source topic</span><strong>{content.prompt}</strong></div><ol>{content.items.map((item, index)=><li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol></div>{content.caption && <p className="scr-topic-caption">{content.caption}</p>}</div></section>;
}

function AiSeoReview({ data }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);
  const resources = <RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries} articles={relatedArticlesFor({ slug: 'ai-seo' })}/>;
  return <div className={`scr-page ${data.pageClass}`}><ReviewHero data={data}/>
    <AiSeoScopeCards content={data.scopeCards}/>
    <BlogAutomationSection content={data.blogAutomation}/>
    <BrandVoiceSection content={data.brandVoice}/>
    <ContentGenerationSection content={data.contentGeneration}/>
    <ApprovedTopicExample content={data.approvedTopicExample}/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faqItems.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <FinalCta data={data}/>
    {resources}
  </div>;
}

function BrandingReasonSection({ content }) {
  return <section className="section soft scr-branding-reason"><div className="container"><div className="label">Why personal branding</div><h2>{content.heading}</h2><div>{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div></div></section>;
}

function BrandingServicesSection({ content }) {
  return <section id={content.id} className="section scr-branding-services"><div className="container"><div className="label">Personal brand services</div><h2>{content.heading}</h2><div className="scr-branding-service-grid">{content.items.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>{content.note && <p className="scr-branding-note">{content.note}</p>}{content.guideLink && <Link className="scr-examples-link" to={content.guideLink[0]}>{content.guideLink[1]} <span aria-hidden="true">→</span></Link>}</div></section>;
}

function BrandingVideoSection({ content }) {
  return <section className="section dark scr-branding-video"><div className="container"><div className="label">Expert-led video</div><h2>{content.heading}</h2><div className={`scr-branding-video-grid${content.video ? ' has-video' : ''}`}>{content.video && <figure><video controls playsInline preload="metadata" poster={content.poster} aria-label="Play the interview-style personal-branding video concept"><source src={content.video} type="video/mp4"/>Your browser does not support embedded video.</video><figcaption>{content.videoLabel}</figcaption></figure>}<div><div className="scr-branding-video-copy">{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul><p className="scr-branding-video-note">{content.note}</p></div></div></div></section>;
}

function BrandingVoiceSection({ content }) {
  return <section className="section soft scr-specialist-voice"><div className="container"><div className="label">Brand voice and custom GPT</div><h2>{content.heading}</h2><div className="scr-specialist-voice-grid"><div>{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul></div><p className="scr-branding-note">{content.closing}</p></div></section>;
}

function BrandingExamplesSection({ content, eyebrow }) {
  return <section className="section scr-branding-examples"><div className="container"><div className="label">{eyebrow}</div><h2>{content.heading}</h2>{content.text && <p className="scr-branding-examples-intro">{content.text}</p>}<div className="scr-branding-example-grid">{content.items.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-branding-note">{content.caption}</p></div></section>;
}

function FirmAlignmentSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-firm-alignment"><div className="container"><div><div className="label">Firm alignment</div><h2>{content.heading}</h2></div><div><p>{content.text}</p><strong>{content.note}</strong></div></div></section>;
}

function BrandingContentSeries({ content }) {
  if (!content) return null;
  return <section className="section scr-branding-series"><div className="container"><div className="label">Example content series</div><h2>{content.heading}</h2><p className="scr-branding-examples-intro">{content.text}</p><p className="scr-branding-series-supporting">{content.supporting}</p><div className="scr-branding-series-flow" role="img" aria-label={content.items.join(' to ')}>{content.items.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong>{index<content.items.length-1&&<i aria-hidden="true">→</i>}</div>)}</div>{content.caption && <p className="scr-branding-note">{content.caption}</p>}</div></section>;
}

function SpecialistBrandingReview({ data }) {
  useEffect(()=>{const targetId=window.location.hash.slice(1);if(targetId)document.getElementById(targetId)?.scrollIntoView();},[]);
  const resources=<RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries} articles={relatedArticlesFor(data)}/>;
  return <div className={`scr-page ${data.pageClass}`}><ReviewHero data={data}/>
    <BrandingReasonSection content={data.buyReason}/>
    <BrandingServicesSection content={data.brandingServices}/>
    <BrandingVideoSection content={data.videoSection}/>
    <BrandingVoiceSection content={data.voiceSection}/>
    <BrandingExamplesSection content={data.practiceExamples || data.positioningExamples} eyebrow={data.practiceExamples ? 'Practice-specific content' : 'Positioning examples'}/>
    <BrandingContentSeries content={data.contentSeries}/>
    {data.boundaryNote && <section className="scr-branding-boundary"><div className="container"><p>{data.boundaryNote}</p></div></section>}
    <FirmAlignmentSection content={data.firmAlignment}/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faqItems.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    <FinalCta data={data}/>{resources}
  </div>;
}

function ExpandedServiceCards({ content, eyebrow = 'Services' }) {
  if (!content) return null;
  return <section id={content.id} className="section soft scr-expanded-services"><div className="container"><div className="label">{eyebrow}</div><h2>{content.heading}</h2><div className="scr-expanded-card-grid">{content.items.map(([title, copy], index)=><article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>{content.note && <p className="scr-expanded-note">{content.note}</p>}</div></section>;
}

function PpcIndustryLinks({ links }) {
  if (!links) return null;
  return <section className="scr-ppc-industry-links"><div className="container"><strong>Explore industry-specific PPC services</strong><div>{links.map(([label,path])=><Link to={path} key={path}>{label} <span aria-hidden="true">→</span></Link>)}</div></div></section>;
}

function PpcPortfolioExample({ content }) {
  if (!content) return null;
  return <section className="section dark scr-ppc-portfolio"><div className="container"><div><div className="label">Website design example</div><h2>How a focused page guides the next step.</h2><p>{content.feature}</p></div><figure><Link to={content.link} aria-label={`Explore ${content.title}`}><img src={content.image} alt={content.alt} width="1440" height="900" loading="lazy" decoding="async"/></Link><figcaption><strong>{content.title}</strong><span>Original Magneo concept</span><Link to={content.link}>Explore the concept <span aria-hidden="true">→</span></Link></figcaption></figure></div></section>;
}

function PpcCommercialScope() {
  return <section className="scr-ppc-commercial"><div className="container"><strong>Clear campaign costs and responsibilities</strong><p>The proposal separates advertising spend, campaign setup and production, landing-page development, and ongoing management. Any hosting, software, or platform costs are identified separately.</p></div></section>;
}

function PpcCompactSection({ content, soft = false }) {
  return <section className={`section${soft ? ' soft' : ''} scr-ppc-compact${content.cards ? ' scr-ppc-consolidated' : ''}`}><div className="container"><div className="label">{content.eyebrow}</div><h2>{content.heading}</h2><p>{content.text}</p>{content.cards && <div className="scr-ppc-consolidated-cards">{content.cards.map(([heading,text])=><article key={heading}><h3>{heading}</h3><p>{text}</p></article>)}</div>}{content.belowHeading && <div className="scr-ppc-consolidated-report"><h3>{content.belowHeading}</h3><p>{content.belowText}</p></div>}</div></section>;
}

function PpcReview({ data, slug }) {
  useEffect(()=>{const targetId=window.location.hash.slice(1);if(targetId)document.getElementById(targetId)?.scrollIntoView();},[]);
  const related = data.related || [];
  const serviceLinks = related.filter(([,path])=>path.startsWith('/services/') || path.startsWith('/portfolio/'));
  const industryLinks = related.filter(([,path])=>!path.startsWith('/services/') && !path.startsWith('/portfolio/'));
  const resources = <RelatedColumns serviceLinks={serviceLinks} industryLinks={industryLinks.length ? industryLinks : audiences} articles={relatedArticlesFor({ slug, family: 'ppc', industry: data.industry })}/>;
  return <div className={`scr-page ${data.pageClass || 'scr-page-ppc-expanded'}`}><ReviewHero data={data}/>
    <ExpandedServiceCards content={data.ppcServices} eyebrow="Campaign services"/>
    {(data.ppcFlows || []).map((flow,index)=><CampaignFlowSection content={flow} key={`${flow.heading}-${index}`}/>)}
    {(data.ppcSections || []).map((section,index)=>section.compact ? <PpcCompactSection content={section} soft={index % 2 === 1} key={section.heading}/> : <DetailedListSection content={section} eyebrow={section.eyebrow} soft={index % 2 === 1} key={section.heading}/>)}
    <PpcIndustryLinks links={data.industryLinks}/>
    <PpcCommercialScope/>
    <PpcPortfolioExample content={data.portfolioExample}/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow || 'Campaign process'} heading={data.processHeading}/>
    <ExpandedFaq items={data.faq}/>
    <FinalCta data={data}/>
    {resources}
  </div>;
}

function ExpandedPlatformSection({ content }) {
  if (!content) return null;
  return <section className="section scr-expanded-platforms"><div className="container"><div className="label">Selected platforms</div><h2>{content.heading}</h2><p className="scr-expanded-intro">{content.intro}</p><div>{content.items.map(([title, copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-expanded-note">{content.note}</p></div></section>;
}

function ExpandedBrandVoice({ content }) {
  if (!content) return null;
  return <section className="section dark scr-expanded-brand"><div className="container"><div className="label">Your brand voice</div><h2>{content.heading}</h2><div className="scr-expanded-brand-grid"><div>{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul></div></div></section>;
}

function SocialProductionExample({ content }) {
  if (!content) return null;
  return <section id="content-examples" className="section soft scr-social-production-example"><div className="container"><div className="label">Interview format example</div><h2>{content.heading}</h2><p className="scr-expanded-intro">{content.text}</p><div className="scr-social-production-grid"><div className="scr-social-video"><video controls playsInline preload="metadata" poster={content.poster} aria-label="Play the expert interview reel concept"><source src={content.video} type="video/mp4"/>Your browser does not support embedded video.</video></div><ol>{content.items.map((item,index)=><li key={item}><span>{String(index + 1).padStart(2,'0')}</span><p>{item}</p></li>)}</ol></div></div></section>;
}

function PlayableVideoExamples({ content }) {
  if (!content) return null;
  return <section id="video-examples" className="section dark scr-playable-examples"><div className="container"><div className="label">Video portfolio</div><h2>{content.heading}</h2><div className="scr-playable-grid">{content.items.map(([title,format,use,video,poster])=><article key={title}><video controls playsInline preload="metadata" poster={poster} aria-label={`Play ${title}`}><source src={video} type="video/mp4"/>Your browser does not support embedded video.</video><div><span>{format}</span><h3>{title}</h3><p>{use}</p></div></article>)}</div><Link className="scr-expanded-dark-link" to="/portfolio/#social-media">Explore the video portfolio <span aria-hidden="true">→</span></Link></div></section>;
}

function DetailedListSection({ content, eyebrow, soft = false }) {
  if (!content) return null;
  return <section className={`section${soft ? ' soft' : ''} scr-detailed-list`}><div className="container"><div><div className="label">{eyebrow}</div><h2>{content.heading}</h2>{content.text && <p>{content.text}</p>}</div><div>{content.items && <ul>{content.items.map(item=>Array.isArray(item)?<li key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></li>:<li key={item}>{item}</li>)}</ul>}{content.note && <p className="scr-expanded-note">{content.note}</p>}</div></div></section>;
}

function CampaignFlowSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-campaign-flow"><div className="container"><div className="label">Example workflow</div><h2>{content.heading}</h2>{content.text && <p className="scr-expanded-intro">{content.text}</p>}{content.variants ? <div className="scr-campaign-flow-variants">{content.variants.map(variant=><article key={variant.heading}><h3>{variant.heading}</h3><ol>{variant.steps.map((step,index)=><li key={step}><span>{String(index + 1).padStart(2,'0')}</span>{step}</li>)}</ol><p>{variant.nextStep}</p></article>)}</div> : <div className="scr-campaign-flow-steps" role="img" aria-label={content.steps.join(' to ')}>{content.steps.map((step,index)=><div key={step}><span>{String(index + 1).padStart(2,'0')}</span><strong>{step}</strong>{index < content.steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>}{content.note && <p className="scr-expanded-note">{content.note}</p>}</div></section>;
}

function WebsiteExamplesSection({ content }) {
  if (!content) return null;
  return <section id="website-examples" className="section dark scr-website-examples"><div className="container"><div className="label">Website portfolio</div><h2>{content.heading}</h2><div className="scr-website-example-grid">{content.items.map(([title,type,label,image,path])=><article key={title}><Link to={path} aria-label={`Explore ${title}`}><img src={image} alt={`${title} ${type.toLowerCase()} preview`} width="1440" height="720" loading="lazy" decoding="async"/></Link><div><span>{label} · {type}</span><h3>{title}</h3><Link to={path}>View website concept <span aria-hidden="true">→</span></Link></div></article>)}</div><Link className="scr-expanded-dark-link" to="/portfolio/#portfolio-websites">Explore all website concepts <span aria-hidden="true">→</span></Link></div></section>;
}

function AiRoleSection({ content }) {
  if (!content) return null;
  return <section className="section soft scr-ai-role"><div className="container"><div className="label">AI's role</div><h2>{content.heading}</h2><div>{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><p className="scr-expanded-note">{content.note}</p></div></section>;
}

function ExpandedFaq({ items }) {
  return <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{items.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>;
}

function ExpandedAiServiceReview({ data, slug }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);
  const resources = <RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries} articles={relatedArticlesFor({ slug })}/>;
  return <div className={`scr-page scr-page-expanded-ai ${data.pageClass}`}><ReviewHero data={data}/>
    <ExpandedServiceCards content={data.coreServices} eyebrow={slug === 'ai-ugc-ai-video-production' ? 'Video formats' : 'Services'}/>
    <ExpandedPlatformSection content={data.platforms}/>
    <ExpandedBrandVoice content={data.brandVoice}/>
    <SocialProductionExample content={data.socialExample}/>
    <PlayableVideoExamples content={data.videoExamples}/>
    <DetailedListSection content={data.productionScope} eyebrow="Production scope"/>
    <DetailedListSection content={data.cameraFormats} eyebrow="Camera and format" soft/>
    <CampaignFlowSection content={data.campaignFlow}/>
    <WebsiteExamplesSection content={data.websiteExamples}/>
    <AiRoleSection content={data.aiRole}/>
    <DetailedListSection content={data.conversion} eyebrow="Conversion"/>
    <DetailedListSection content={data.deliverables} eyebrow="Website deliverables" soft/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <ExpandedFaq items={data.faqItems}/>
    <FinalCta data={data}/>
    {resources}
  </div>;
}

function FaqAnswer({ answer }) {
  if (typeof answer !== 'object' || answer === null || !answer.path) return answer;
  return <>{answer.before}<Link to={answer.path}>{answer.label}</Link>{answer.after}</>;
}

function ChildVisualExample({ example }) {
  if (!example) return null;
  return <section id={example.id} className="section scr-child-visual"><div className="container"><div className="label">{example.eyebrow}</div><h2>{example.heading}</h2><article className="scr-child-visual-card"><div className="scr-social-video"><video controls playsInline preload="metadata" poster={example.poster} aria-label={example.alt} onPlay={(event)=>{event.currentTarget.nextElementSibling.hidden=true;}} onEnded={(event)=>{event.currentTarget.nextElementSibling.hidden=false;}}><source src={example.video} type="video/mp4"/>Your browser does not support embedded video.</video><button type="button" aria-label={example.alt} onClick={(event)=>{event.currentTarget.previousElementSibling.play();}}><span aria-hidden="true">▶</span></button></div><div><span className="label">{example.label}</span><h3>{example.title}</h3><p>{example.copy}</p><Link to={example.link}>Explore social content examples <span aria-hidden="true">→</span></Link></div></article></div></section>;
}

function ContentPlanSection({ plan }) {
  if (!plan) return null;
  return <section id={plan.id} className="section scr-content-plan"><div className="container"><div className="label">{plan.eyebrow}</div><h2>{plan.heading}</h2><div className="grid scr-content-plan-grid">{plan.items.map(([title,copy],index)=><article className="card" key={title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-content-plan-closing">{plan.closing}</p>{plan.label && <p className="scr-content-plan-label">{plan.label}</p>}{plan.link && <Link className="scr-content-plan-link" to={plan.link[0]}>{plan.link[1]} <span aria-hidden="true">→</span></Link>}</div></section>;
}

function StandardReview({ data, slug }) {
  const relatedArticles = relatedArticlesFor({ slug });
  const pageAudiences = data.audiences || audiences;
  const resources = <RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries || pageAudiences} articles={relatedArticles}/>;
  return <div className={`scr-page${data.seoPage ? ' scr-page-seo' : ''}${data.pageClass ? ` ${data.pageClass}` : ''}`}><ReviewHero data={data}/>
    {!data.hideAudience && <section id={data.audienceId} className="section soft"><div className="container"><div className="label">Audience</div><h2>{data.audienceHeading || 'Who this service is for.'}</h2>{data.audienceIntro && <p className="scr-section-intro">{data.audienceIntro}</p>}<div className={`grid ${pageAudiences.length === 4 ? 'four ' : ''}scr-audience`}>{pageAudiences.map(([label,path,copy])=><Link className="card" to={path} key={path}><small>Explore</small><h3>{label}</h3>{copy && <p>{copy}</p>}</Link>)}</div>{data.audienceClosing && <p className="scr-audience-closing">{data.audienceClosing[0]}<Link to="/contact/#contact-enquiry">{data.audienceClosing[1]}</Link>{data.audienceClosing[2]}</p>}</div></section>}
    <AudienceSplitSection audience={data.audienceSplit}/>
    <section id={data.scopeId} className="section"><div className="container scr-included"><div><div className="label">{data.scopeEyebrow || 'Project scope'}</div><h2>{data.scopeHeading || 'What your project can include.'}</h2>{data.scopeIntro !== '' && <p>{data.scopeIntro || 'Your proposal will confirm the deliverables, responsibilities, and any ongoing support.'}</p>}</div><ul className={data.numberedScope ? 'scr-numbered-scope' : undefined}>{data.included.map(item=>Array.isArray(item)?<li key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></li>:<li key={item}>{item}</li>)}</ul></div>{data.scopeNote && <div className="container"><p className="scr-scope-note">{data.scopeNote}</p></div>}</section>
    <IndustryCardsSection content={data.industryCards}/>
    <ProgressSection progress={data.progress}/>
    <DecisionSection decision={data.decision}/>
    {data.workedExample ? <WorkedExampleSection example={data.workedExample}/> : <section className={`section${data.examplesSoft === false ? '' : ' soft'}`}><div className="container"><div className="label">{data.examplesEyebrow || 'What we can create'}</div><h2>{data.examplesHeading || 'Services shaped around your goals.'}</h2>{data.examplesIntro && <p className="scr-examples-intro">{data.examplesIntro}</p>}<div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>{data.examplesNote && <p className="scr-examples-note">{data.examplesNote}</p>}</div></section>}
    <AutomationWorkflowSection workflow={data.automationWorkflow}/>
    <ContentApprovalWorkflowSection content={data.approvalWorkflow}/>
    {data.visualExamples && <SocialVisualExamples/>}
    <PurposeVisualSection visual={data.purposeVisual}/>
    {data.brandVoice && <BrandVoiceSection content={data.brandVoice}/>}
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading} intro={data.processIntro}/>
    <StartingPointSection content={data.startingPoint}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p><FaqAnswer answer={answer}/></p></details>)}</div></div></section>
    {!data.resourcesAfterCta && resources}
    <FinalCta data={data}/>
    {data.resourcesAfterCta && resources}
  </div>;
}

function ChildReview({ data }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId && (targetId === data.scopeId || targetId === data.examplesId || targetId === data.visualExample?.id || targetId === data.contentExample?.id || targetId === data.contentPlan?.id)) document.getElementById(targetId)?.scrollIntoView();
  }, [data.scopeId, data.examplesId, data.visualExample?.id, data.contentExample?.id, data.contentPlan?.id]);
  const serviceLinks = data.related.filter(([,path]) => path.startsWith('/services/') || path.startsWith('/portfolio/'));
  const industryLinks = data.related.filter(([,path]) => !path.startsWith('/services/') && !path.startsWith('/portfolio/'));
  const relatedArticles = relatedArticlesFor(data);
  const resources = <RelatedColumns serviceLinks={serviceLinks} industryLinks={industryLinks} articles={relatedArticles}/>;
  return <div className={`scr-page${data.pageClass ? ` ${data.pageClass}` : ''}`}><ReviewHero data={data}/>
    {data.showAudience && <section className="section soft"><div className="container scr-child-audience"><div className="label">Audience</div><h2>AI-assisted marketing with the review your work requires.</h2><p>Suitable for expert-led and regulated businesses when the task, source material, responsibilities, and approval process are clearly defined.</p></div></section>}
    {!data.audienceAfterPlatforms && <AudienceSplitSection audience={data.audienceSplit}/>}
    <section id={data.scopeId} className="section"><div className="container scr-included"><div><div className="label">{data.scopeEyebrow || 'Project scope'}</div><h2>{data.scopeHeading || 'What your project can include.'}</h2>{data.scopeIntro !== '' && <p>{data.scopeIntro || 'Your proposal confirms the deliverables, responsibilities, tools, and any ongoing support.'}</p>}</div><ul className={data.numberedScope ? 'scr-numbered-scope' : undefined}>{data.included.map(item=>Array.isArray(item)?<li key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></li>:<li key={item}>{item}</li>)}</ul></div>{data.scopeNote && <div className="container"><p className="scr-scope-note">{data.scopeNote}</p></div>}</section>
    <PlatformSection content={data.platforms}/>
    {data.audienceAfterPlatforms && <AudienceSplitSection audience={data.audienceSplit}/>}
    <ContentPlanSection plan={data.contentPlan}/>
    <DecisionSection decision={data.decision}/>
    {!data.hideExamples && <section id={data.examplesId} className="section soft"><div className="container"><div className="label">{data.examplesEyebrow || 'What we can create'}</div><h2>{data.examplesHeading || 'Services shaped around your goals.'}</h2><div className="grid scr-examples">{data.examples.map(([title,copy])=><article className="card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>{data.examplesNote && <p className="scr-examples-note">{data.examplesNote}</p>}{data.examplesLink && <Link className="scr-examples-link" to={data.examplesLink[0]}>{data.examplesLink[1]} <span aria-hidden="true">→</span></Link>}</div></section>}
    <PracticalContentExample content={data.contentExample}/>
    <HealthcareVisualExamples content={data.healthcareVisualExamples}/>
    <ChildVisualExample example={data.visualExample}/>
    <EngagementSection content={data.engagement}/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading} intro={data.processIntro}/>
    <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{data.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p><FaqAnswer answer={answer}/></p></details>)}</div></div></section>
    {!data.resourcesAfterCta && resources}
    <FinalCta data={data}/>
    {data.resourcesAfterCta && resources}
  </div>;
}

function AiContentBrandVoice({ content }) {
  return <section className="section dark scr-ai-content-voice"><div className="container"><div className="label">BRAND VOICE & CUSTOM GPT</div><h2>{content.heading}</h2><div className="scr-ai-content-copy">{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><div className="scr-ai-content-voice-grid">{content.items.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-ai-content-note">{content.closing}</p></div></section>;
}

function AiContentReels({ content }) {
  return <section className="section scr-ai-content-reels"><div className="container"><div><div className="label">REELS & SHORT-FORM VIDEO</div><h2>{content.heading}</h2>{content.paragraphs.map(text=><p key={text}>{text}</p>)}<ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul><p className="scr-ai-content-note">{content.note}</p><Link className="scr-examples-link" to={content.link[0]}>{content.link[1]} <span aria-hidden="true">→</span></Link></div><figure><video controls playsInline preload="metadata" poster={content.poster} aria-label="Play the expert interview Reel concept"><source src={content.video} type="video/mp4"/>Your browser does not support embedded video.</video><figcaption>Original Magneo concept · Expert-led short-form video</figcaption></figure></div></section>;
}

function AiContentSeries({ content }) {
  return <section className="section soft scr-ai-content-series"><div className="container"><div className="label">EXAMPLE CONTENT SERIES</div><h2>{content.heading}</h2><p className="scr-ai-content-lead">{content.text}</p><div className="scr-ai-content-series-flow" role="img" aria-label={`${content.source} adapted into five content formats`}><div className="scr-ai-content-source"><span>01</span><strong>{content.source}</strong></div><i aria-hidden="true">→</i><ul>{content.items.map((item,index)=><li key={item}><span>{String(index + 2).padStart(2,'0')}</span>{item}</li>)}</ul></div>{content.caption && <p className="scr-ai-content-caption">{content.caption}</p>}</div></section>;
}

function AiContentWorkflow({ content }) {
  return <section id={content.id} className="section dark scr-ai-content-workflow"><div className="container"><div className="label">AUTOMATED CONTENT SYSTEMS</div><h2>{content.heading}</h2><p className="scr-ai-content-lead">{content.text}</p><div className="scr-ai-content-workflow-grid">{content.stages.map(([title,copy],index)=><article key={title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>{content.reviewHeading && <div className="scr-ai-content-review"><h3>{content.reviewHeading}</h3><p>{content.reviewText}</p><strong>{content.reviewSupporting}</strong></div>}<p className="scr-ai-content-note">{content.note}</p></div></section>;
}

function AiContentSupport({ content }) {
  return <section className="section scr-ai-content-support"><div className="container"><div className="label">PROJECT OPTIONS</div><h2>{content.heading}</h2><div className="scr-ai-content-support-grid">{content.items.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-ai-content-note">{content.note}</p></div></section>;
}

function AiContentExamples() {
  return <section className="section dark scr-ai-content-examples"><div className="container"><div className="label">CONTENT EXAMPLES</div><h2>Explore the content and creative.</h2><div className="scr-ai-content-example-grid">
    <article><video controls playsInline preload="metadata" poster="/portfolio/social/commentary-reel-cover.jpg" aria-label="Play the commentary Reel concept"><source src="/portfolio/social/commentary-reel.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><div><span>ORIGINAL MAGNEO CONCEPT · PLAYABLE REEL</span><h3>Commentary Reel</h3><p>A short video format for presenting one timely professional idea.</p></div></article>
    <article><a className="scr-ai-content-writing-preview" href="https://blog.magneo.ca/blog/using-ai-to-repurpose-content-and-personalize-advisor-outreach/" target="_blank" rel="noreferrer"><small>ARTICLE SAMPLE</small><strong>From one source idea to useful, connected content.</strong><b>READ ARTICLE ↗</b></a><div><span>PUBLISHED ARTICLE · WRITING SAMPLE</span><h3>AI content repurposing</h3><p>A long-form example intended to explain a topic and support further exploration.</p></div></article>
    <article><Link className="scr-ai-content-carousel" to="/portfolio/#social-media" aria-label="Explore the illustrative social carousel"><small>YOUR PERSPECTIVE</small><strong>One idea.<br/>Several useful formats.</strong><i aria-hidden="true"/><b aria-hidden="true"><em/><em/><em/></b></Link><div><span>ORIGINAL MAGNEO CONCEPT · CAROUSEL</span><h3>Coordinated social series</h3><p>A visual format for adapting the key points of a larger topic.</p></div></article>
  </div><Link className="scr-expanded-dark-link" to="/portfolio/#ai-marketing">Explore the portfolio <span aria-hidden="true">→</span></Link></div></section>;
}

function AiContentMarketingReview({ data }) {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);
  const resources = <RelatedColumns serviceLinks={data.related} industryLinks={data.relatedIndustries} articles={relatedArticlesFor({ slug: 'ai-content-marketing' })}/>;
  return <div className={`scr-page scr-page-expanded-ai ${data.pageClass}`}><ReviewHero data={data}/>
    <ExpandedServiceCards content={data.services} eyebrow="Content services"/>
    <AiContentBrandVoice content={data.brandVoice}/>
    <AiContentReels content={data.reels}/>
    <AiContentSeries content={data.contentSeries}/>
    <AiContentWorkflow content={data.workflow}/>
    <AiContentSupport content={data.support}/>
    <AiContentExamples/>
    <ProcessSection items={data.process} eyebrow={data.processEyebrow} heading={data.processHeading}/>
    <ExpandedFaq items={data.faqItems}/>
    <FinalCta data={data}/>
    {resources}
  </div>;
}

function AiOverviewServices() {
  return <section className="section soft scr-ai-overview-services"><div className="container"><div className="label">AI MARKETING SERVICES</div><h2>What Magneo can create for your business.</h2><p className="scr-ai-overview-intro">Projects can focus on one deliverable or combine several services, from a blog production workflow to a coordinated video and social content series.</p><div className="scr-ai-overview-service-grid">{aiServices.map(([title,path,copy],index)=><Link to={path} key={path}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p><b>Explore service <i aria-hidden="true">→</i></b></Link>)}</div></div></section>;
}

function AiOverviewBrandVoice() {
  const content = aiOverview.brandVoice;
  return <section className="section dark scr-ai-overview-voice"><div className="container"><div className="label">BRAND VOICE & CUSTOM GPT</div><h2>{content.heading}</h2><div className="scr-ai-overview-voice-copy">{content.paragraphs.map(text=><p key={text}>{text}</p>)}</div><div className="scr-ai-overview-voice-grid">{content.items.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="scr-ai-overview-closing">{content.closing}</p></div></section>;
}

function AiOverviewContentPlan() {
  const content = aiOverview.contentPlan;
  return <section className="section scr-ai-overview-plan"><div className="container"><div className="label">{content.label}</div><h2>{content.heading}</h2><p className="scr-ai-overview-intro">{content.intro}</p><p className="scr-ai-overview-supporting">{content.supporting}</p><div className="scr-ai-overview-plan-grid">{content.items.map(([title,copy],index)=><article key={title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function AiOverviewPortfolio() {
  return <section className="section dark scr-ai-overview-portfolio"><div className="container"><div className="label">EXISTING EXAMPLES</div><h2>Explore the creative possibilities.</h2><div className="scr-ai-overview-portfolio-grid">
    <article><video controls playsInline preload="metadata" poster="/portfolio/social/podcast-interview-reel-cover-v3.jpg" aria-label="Play the expert interview reel concept"><source src="/portfolio/social/podcast-interview-reel.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><div><span>ORIGINAL MAGNEO CONCEPT · PRESENTER-LED VIDEO</span><h3>Expert interview reel</h3><p>A short-form deliverable for introducing a professional perspective or educational idea.</p></div></article>
    <article><Link to="/portfolio/#social-media" aria-label="Explore the commentary reel concept"><img src="/portfolio/social/commentary-reel.webp" alt="Preview of Magneo’s commentary reel social-content concept" width="1080" height="1350" loading="lazy" decoding="async"/></Link><div><span>ORIGINAL MAGNEO CONCEPT · SOCIAL CAMPAIGN VISUAL</span><h3>Commentary content</h3><p>A visual format intended for concise expert commentary across selected social channels.</p></div></article>
    <article><Link to="/portfolio/legal-websites/personal-injury-bold/" aria-label="Explore the Personal Injury Modern website concept"><img src="/portfolio/websites/personal-injury-modern-hero-preview.webp" alt="Preview of Magneo’s Personal Injury Modern website concept" width="1440" height="720" loading="lazy" decoding="async"/></Link><div><span>WEBSITE CONCEPT · RESPONSIVE SERVICE WEBSITE</span><h3>Personal Injury · Modern</h3><p>A website demonstration showing clear service information and a focused enquiry route.</p></div></article>
  </div><Link className="scr-expanded-dark-link" to="/portfolio/#ai-marketing">Explore the portfolio <span aria-hidden="true">→</span></Link></div></section>;
}

function AiOverviewDeliverables() {
  const content = aiOverview.deliverables;
  return <section className="section soft scr-ai-overview-deliverables"><div className="container"><div><div className="label">PROJECT DELIVERABLES</div><h2>{content.heading}</h2><p>{content.intro}</p></div><div><ul>{content.items.map(item=><li key={item}>{item}</li>)}</ul><p>{content.note}</p></div></div></section>;
}

function AiOverviewIndustries() {
  const content = aiOverview.industries;
  return <section className="section scr-ai-overview-industries"><div className="container"><div className="label">INDUSTRY CONTEXT</div><h2>{content.heading}</h2><div className="scr-ai-overview-industry-grid">{content.items.map(([title,path,copy])=><Link to={path} key={path}><h3>{title}</h3><p>{copy}</p><span>Explore industry <i aria-hidden="true">→</i></span></Link>)}</div></div></section>;
}

function AiOverviewFaq() {
  return <section className="section scr-faq"><div className="container"><div className="label">FAQ</div><h2>Questions before starting.</h2><div className="scr-faq-list">{aiOverview.faqItems.map(([question,answer])=><details key={question}><summary>{question}</summary><p><FaqAnswer answer={answer}/></p></details>)}</div></div></section>;
}

function AiOverviewReview() {
  const relatedArticles = relatedArticlesFor({ slug: 'ai-powered-digital-marketing' });
  return <div className="scr-page scr-page-ai-overview"><ReviewHero data={aiOverview}/>
    <AiOverviewServices/>
    <AiOverviewBrandVoice/>
    <AiOverviewContentPlan/>
    <AiOverviewPortfolio/>
    <AiOverviewDeliverables/>
    <AiOverviewIndustries/>
    <ProcessSection items={aiOverview.process} eyebrow={aiOverview.processEyebrow} heading={aiOverview.processHeading}/>
    <AiOverviewFaq/>
    <FinalCta data={aiOverview}/>
    <RelatedColumns serviceLinks={[["AI SEO & Blog Automation", "/services/ai-seo/"], ["AI Social Media Marketing", "/services/ai-social-media-marketing/"], ["AI Automation & CRM Implementation", "/services/ai-automation-for-regulated-industries-magneo/"]]} industryLinks={audiences} articles={relatedArticles}/>
  </div>;
}

export default function ServiceContentReview({ serviceSlugOverride }) {
  const params = useParams();
  const isReview = useLocation().pathname.split('/').includes('test');
  const serviceSlug = serviceSlugOverride || params.serviceSlug;
  const childData = applyServiceContentUpdates(serviceSlug, getChildServiceData(serviceSlug));
  const parentData = pageData[serviceSlug];
  const data = applyServiceContentUpdates(serviceSlug, parentData || childData || (serviceSlug === 'ai-powered-digital-marketing' ? aiOverview : undefined));
  useReviewMetadata(data || aiOverview, serviceSlug || 'ai-powered-digital-marketing', isReview);
  if (!data) return <Navigate to="/services/" replace/>;
  const industryAutomationSlugs = ['ai-automation-for-law-firms-legal-departments-magneo', 'ai-automation-for-financial-advisors-firms-fintech-magneo', 'ai-marketing-automation-for-tech-saas-ai-companies-magneo', 'ai-automation-for-healthcare-providers-clinics-magneo'];
  const ppcSlugs = ['ppc-landing-pages-for-regulated-industries','ppc-landing-pages-for-law-firms','ppc-landing-pages-for-healthcare-medtech','ppc-landing-pages-for-financial-advisors-fintech'];
  if (ppcSlugs.includes(serviceSlug)) return <PpcReview data={data} slug={serviceSlug}/>;
  if (childData && !parentData) {
    if (serviceSlug === 'ai-seo') return <AiSeoReview data={childData}/>;
    if (serviceSlug === 'ai-content-marketing') return <AiContentMarketingReview data={childData}/>;
    if (['personal-branding-for-lawyers-legal-professionals','personal-branding-for-financial-advisors-wealth-professionals'].includes(serviceSlug)) return <SpecialistBrandingReview data={childData}/>;
    if (['ai-social-media-marketing','ai-ugc-ai-video-production','ai-web-design-conversion'].includes(serviceSlug)) return <ExpandedAiServiceReview data={childData} slug={serviceSlug}/>;
    return industryAutomationSlugs.includes(serviceSlug) ? <IndustryAutomationReview data={childData}/> : <ChildReview data={childData}/>;
  }
  return serviceSlug === 'ai-powered-digital-marketing' ? <AiOverviewReview/> : <StandardReview data={data} slug={serviceSlug}/>;
}

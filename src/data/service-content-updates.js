const shared = [
  ['Keyword research and competitor analysis', 'Your SEO strategy starts with research into relevant searches, customer questions and competing websites, identifying opportunities for your business.'],
  ['Keyword mapping and topic planning', 'Your semantic core - a structured collection of relevant keywords and topics - is mapped to existing and planned pages. Each priority page receives a clear search focus, with gaps and overlapping content identified.'],
  ['Page titles, meta descriptions and headings', 'Each priority page receives tailored title tags, meta descriptions and headings that clearly communicate its subject. URL improvements are included where needed.'],
  ['Technical SEO, robots.txt and XML sitemaps', 'Magneo reviews crawl settings, indexing instructions and XML sitemaps, and implements fixes for broken links, redirect issues, duplicate content and incorrect canonical tags.'],
  ['Internal linking and website structure', 'Your related services, profiles and resources are connected through relevant internal links, making information easier to find and your website’s structure clearer.'],
  ['Local SEO and Google Business Profile', 'Your eligible business profiles, location pages and listings are optimised to help local customers find accurate information about your business.'],
  ['Website speed and mobile usability', 'Your website is checked for loading and mobile usability issues, followed by targeted improvements that make it easier to browse and contact your business.'],
  ['Tracking and measurement setup', 'Magneo sets up or refines Google Search Console, analytics and relevant conversion tracking so you can understand how organic visitors find and interact with your website. Tracking reflects your website’s privacy and consent requirements.'],
  ['Google ranking monitoring and reporting', 'You receive reporting on target keyword positions, search visibility, organic traffic and tracked enquiries, with clear explanations of completed work and next priorities.'],
  ['Ongoing optimisation', 'Your SEO work continues with content updates and technical improvements informed by performance data and new search opportunities.'],
];
const seo = {
  'seo-for-regulated-industries': ['What your SEO strategy includes.', 'Your SEO strategy connects what potential clients search for with the services you offer. From keyword research and technical fixes to stronger content and tracking, each part helps people find your business, understand your expertise and take the next step.', [['Content improvement and supporting articles', 'Your service pages are rewritten and optimised to clearly explain your offer. Magneo creates supporting articles that answer the questions potential clients ask when comparing services and choosing a provider.']]],
  'seo-for-the-legal-industry': ['What your law firm’s SEO includes', 'Your potential clients search for specific legal services, questions and locations. Your SEO strategy connects those searches to clear practice-area pages, supported by technical improvements, useful content and measurable performance.', [['Practice-area pages, lawyer profiles and legal content', 'Your practice-area pages and lawyer profiles are refined to explain your firm’s expertise, the matters you handle and how to request a consultation. Supporting articles answer prospective clients’ questions, with legal information reviewed by your firm.']]],
  'seo-for-financial-advisors-wealth-firms': ['What your financial services SEO includes', 'Your SEO strategy helps prospective clients find your firm when searching for financial planning, wealth management and specialist advisory services. Keyword research, useful content, technical improvements and performance tracking work together to support your visibility.', [['Service pages, advisor profiles and educational content', 'Your service pages and advisor biographies are developed to clearly explain your expertise and who you help. Supporting articles address prospective clients’ financial questions, with technical information reviewed by your specialists.']]],
  'seo-for-the-healthcare-medtech-industry': ['What your healthcare and MedTech SEO includes', 'Your SEO strategy helps patients find your clinic’s services and healthcare buyers discover your MedTech products. The approach reflects your audience, whether their next step is booking a visit, understanding a referral process or requesting a product demonstration.', [['Clinic service pages and patient information', 'Your service pages, practitioner profiles, referral information and booking instructions are refined so patients can understand their options and next steps.'], ['MedTech product pages and educational content', 'Your product pages explain features, applications and supporting evidence in language healthcare buyers understand. Magneo develops supporting content with medical and technical claims reviewed by your specialists.']]],
};
const social = {
  'linkedin-growth-financial-advisors': ['From your expertise to content your audience wants to watch.', [
    ['Your content plan, agreed in advance', 'Magneo researches your audience’s questions, concerns and financial priorities, alongside video formats gaining traction in your niche. You receive a proposed content plan with topics, hooks and platform recommendations, ready to discuss and refine together.'],
    ['Scripts and video recording', 'Your topics become scripts and talking points shaped around your expertise and brand voice. Recording guidance helps you deliver each message naturally, with a strong opening and a clear takeaway for your audience.'],
    ['Editing and your approval', 'Your footage is edited into platform-ready videos with captions, supporting visuals and pacing suited to each format. You receive the finished content for feedback and approval, with revisions completed before publication.'],
    ['Publishing and improving', 'Once approved, Magneo schedules and publishes your content across the agreed platforms. Audience response, watch time and engagement help shape the next round of topics, hooks and videos.'],
  ]],
  'linkedin-growth-law-firms': ['From your legal expertise to videos that connect.', [
    ['A content plan built around your audience', 'Magneo researches the questions and concerns your potential clients face and reviews videos gaining traction in your legal niche. You receive a proposed plan with topics, opening hooks and recommended formats, ready to discuss and agree on before recording.'],
    ['Scripts and guided recording', 'Your expertise becomes clear scripts and talking points in your professional voice. Magneo prepares the structure and provides recording guidance so you can confidently explain legal topics, answer common questions and share your perspective on camera.'],
    ['Video editing and your approval', 'Magneo edits your footage with captions, supporting visuals and strong pacing, adapting each video for its intended platform. Your firm reviews the content for accuracy and tone, and revisions are completed before publication.'],
    ['Publishing and ongoing improvement', 'Approved videos and supporting posts are scheduled and published across your selected platforms. Watch time, engagement and audience feedback inform the next content plan, helping refine the topics, hooks and formats over time.'],
  ]],
  'social-media-linkedin-leadership-for-healthcare-providers-magneo': ['From your clinical expertise to videos that connect.', [
    ['Topics, hooks and a clear content plan', 'Magneo researches your audience’s questions and concerns and reviews successful video formats in your healthcare niche. You receive a proposed plan with topics, opening hooks and recommended platforms, ready to discuss and agree on before recording.'],
    ['Scripts and guided recording', 'Your clinical expertise becomes clear scripts and talking points in your clinic’s voice. Magneo prepares the structure and provides recording guidance so your practitioners can confidently explain services, answer common questions and help patients know what to expect.'],
    ['Editing and your approval', 'Your footage is edited with captions, supporting visuals and pacing suited to each platform. Your clinic receives the finished videos for review of accuracy, patient privacy and tone. Magneo completes revisions before publication.'],
    ['Publishing and improving', 'Once approved, Magneo schedules and publishes your videos across the agreed platforms. Watch time, engagement and audience feedback help shape the next round of topics, hooks and formats.'],
  ]],
};
const techSocial = {
  'social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo': {
    scopeEyebrow: 'CONTENT PLANNING', scopeHeading: 'Your content plan, ready before recording.',
    included: [
      ['Understand your audience', 'Magneo researches your potential customers’ problems, questions and reasons for choosing a product like yours. Your product benefits and team’s expertise shape the direction.'],
      ['Research formats and select hooks', 'Successful videos and emerging formats in your niche inform the creative approach. Magneo develops opening hooks and content ideas suited to your audience, product and brand voice.'],
      ['Agree on the plan together', 'You receive a proposed content calendar with topics, formats and recommended platforms. Together, the plan is refined around your priorities, product launches and available recording time.'],
      ['Prepare scripts and recording notes', 'Approved ideas become scripts, talking points and shot lists. Your team knows what to explain on camera and which product features or workflows to demonstrate.'],
    ],
    processEyebrow: 'VIDEO PRODUCTION', processHeading: 'From recording to published videos.',
    process: [
      ['Guided recording and product demos', 'Magneo guides your founders or team members through recording, with direction on delivery, framing and sound. Screen recordings show the actual product features and workflows featured in the scripts.'],
      ['Editing and platform versions', 'Your footage becomes polished videos with captions, supporting visuals, product close-ups and clear pacing. Each version is adapted to the format and viewing habits of its intended platform.'],
      ['Your review and final revisions', 'You receive the edited videos to review messaging, product accuracy and brand voice. Magneo completes revisions and prepares the approved versions for publication.'],
      ['Publishing and performance review', 'Magneo schedules and publishes the approved videos across your selected platforms. Watch time, engagement and audience feedback inform the next round of content.'],
    ],
  },
  'crypto-and-ai-social-media': {
    scopeEyebrow: 'SOCIAL MEDIA STRATEGY', scopeHeading: 'Your social content, planned and managed.',
    included: [
      ['Audience research and platform selection', 'Magneo researches your audience’s questions, interests and challenges, alongside the conversations happening in your niche. Your platform plan reflects where those audiences are active, including X, YouTube and other relevant channels.'],
      ['Topics, hooks and your brand voice', 'Successful posts and videos in your niche inform a content plan built around your product and perspective. You receive proposed topics, opening hooks and formats - from product updates and educational threads to founder videos - ready to discuss before production.'],
      ['Content creation and approval', 'Magneo creates your posts, graphics and supporting copy in a consistent brand voice. Your team reviews the content for product accuracy and provides feedback before final revisions and scheduling.'],
      ['Publishing and ongoing improvement', 'Approved content is published across your selected platforms. Engagement, audience questions and content performance help shape the next calendar, with room for timely updates and launches.'],
    ],
    processEyebrow: 'VIDEO PRODUCTION', processHeading: 'From your expertise to videos worth watching.',
    process: [
      ['Scripts and recording preparation', 'Your agreed topics become scripts, talking points and shot lists. Magneo prepares strong openings, clear explanations and a plan for the on-camera footage, screen recordings or product demonstrations each video needs.'],
      ['Guided filming and screen recording', 'Your founders or team members receive guidance on framing, lighting, sound and delivery. Product recordings demonstrate real workflows, helping viewers understand how your technology works and why it is useful.'],
      ['Editing and your review', 'Magneo combines your footage with captions, graphics and supporting visuals, creating versions suited to each platform. You receive the edited videos for feedback and product checks, with revisions completed before publication.'],
      ['Publishing and performance review', 'Approved videos are prepared with platform-specific titles, descriptions and covers, then scheduled and published. Watch time, audience retention and engagement inform the next round of scripts, hooks and edits.'],
    ],
  },
};

export function applyServiceContentUpdates(slug, original) {
  if (!original) return original;
  let data = original;
  if (seo[slug]) {
    const [scopeHeading, scopeIntro, extra] = seo[slug];
    const included = shared.map(item => [...item]);
    if (slug.includes('legal-industry')) {
      included[0][1] = 'Your SEO strategy starts with research into legal services, prospective clients’ questions, location searches and competing law firm websites, identifying opportunities for your firm.';
      included[1][1] = 'Your semantic core - a structured collection of relevant keywords and topics - is mapped to practice-area pages, location pages and legal articles. Each priority page receives a clear search focus, with gaps and overlapping content identified.';
      included[4][1] = 'Your practice areas, lawyer profiles and legal articles are connected through relevant internal links, making information easier to find and your website’s structure clearer.';
    } else if (slug.includes('financial-advisors')) {
      included[0][1] = 'Your SEO strategy starts with research into financial services, client needs, location searches and competing websites, identifying opportunities for your firm.';
      included[1][1] = 'Your semantic core - a structured collection of relevant keywords and topics - is mapped to service pages and educational articles. Each priority page receives a clear search focus, with gaps and overlapping content identified.';
      included[4][1] = 'Your services, advisor profiles and educational resources are connected through relevant internal links, making information easier to find and your website’s structure clearer.';
    } else if (slug.includes('healthcare')) {
      included[0][1] = 'Your SEO strategy starts with research into patient searches and professional buyers researching MedTech products and applications, alongside relevant questions and competing websites.';
      included[1][1] = 'Your semantic core - a structured collection of relevant keywords and topics - is mapped to service, location, product and educational pages. Each priority page receives a clear search focus, with gaps and overlapping content identified.';
      included[4][1] = 'Your services, practitioner profiles, product pages and educational resources are connected through relevant internal links, making information easier to find and your website’s structure clearer.';
      included[5][1] = 'Eligible clinics and healthcare providers’ business profiles, location pages and listings are optimised to help patients find accurate service, location and contact information.';
      included[7][1] = 'Magneo sets up or refines Google Search Console, analytics and appropriate booking and demo-request tracking so you can understand how organic visitors find and interact with your website. Tracking reflects privacy and consent requirements, with sensitive patient information kept out of analytics tools.';
      included[8][1] = 'You receive reporting on target keyword positions, search visibility, organic traffic and appropriate booking and demo-request actions, with clear explanations of completed work and next priorities.';
    }
    if (slug.includes('legal-industry') || slug.includes('financial-advisors')) {
      included[5][1] = included[5][1].replace('local customers', 'prospective clients');
      included[8][1] = included[8][1].replace('tracked enquiries', 'tracked consultation enquiries');
    }
    data = { ...data, scopeEyebrow: 'SEO SERVICES', scopeHeading, scopeIntro, included: [...included.slice(0, 2), ...extra, ...included.slice(2)] };
    if (slug === 'seo-for-regulated-industries') data = { ...data, scopeNote: 'Your proposal confirms the services included, implementation priorities and reporting schedule.', examplesNote: undefined, progress: { ...data.progress, closing: undefined }, faq: data.faq.map(([q, a]) => q === 'How long does SEO take?' ? ['How long does the initial SEO work take?', 'The initial SEO setup and agreed website improvements typically take around three weeks, depending on your website’s size and the work required. This covers implementation; improvements in search visibility, traffic and enquiries develop over time.'] : [q, a]) };
  }
  if (social[slug]) {
    const [processHeading, process] = social[slug];
    data = { ...data, processHeading, process, processIntro: undefined };
    if (slug !== 'linkedin-growth-law-firms' && data.engagement) data.engagement = { ...data.engagement, note: undefined, clarification: undefined };
  }
  if (slug === 'website-design-for-healthcare-clinics-doctors-magneo') data = { ...data, decision: { ...data.decision, text: undefined, paragraphs: [
    'Your patients should be able to find the information they need before contacting your clinic: which services are available, whether a referral is required, whether you are accepting new patients and how to book. Bringing these details together helps visitors understand their next step without searching through several pages.',
    'Your website can connect patients to your existing booking platform, provide a clear phone contact or explain your clinic’s referral process. Service pages can also include practitioner information, locations, opening hours and practical details about preparing for a first visit.',
    'Magneo organises this content around how your clinic operates, with clear navigation and booking links that are easy to use on mobile. Even when your practice is full, an informative website helps existing patients find updates and answers to common administrative questions.',
  ] } };
  if (techSocial[slug]) {
    data = { ...data, ...techSocial[slug], numberedScope: true, scopeIntro: '', processIntro: undefined };
    if (slug === 'social-media-linkedin-leadership-for-tech-saas-ai-companies-magneo') data = { ...data, scopeNote: undefined, contentPlan: { ...data.contentPlan, closing: undefined } };
  }
  return data;
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/policy-pages.css';

const BASE = 'https://magneo.ca';
const EFFECTIVE_DATE = 'September 15, 2026';

function usePolicySeo(title, description, path) {
  useEffect(() => {
    document.title = `${title} | Magneo`;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = `${BASE}${path}`;
  }, [title, description, path]);
}

function PolicyHeader({ eyebrow, title, intro, effectiveDate = EFFECTIVE_DATE }) {
  return <header className="policy-hero"><div className="container policy-hero-inner">
    <div className="label">{eyebrow}</div>
    <h1>{title}</h1>
    <p>{intro}</p>
    <span>Effective date: {effectiveDate}</span>
  </div></header>;
}

function PolicyLayout({ children }) {
  return <div className="policy-page"><main className="policy-main"><div className="container policy-grid">
    <aside aria-label="Policy contact information"><strong>Magneo</strong><span>Toronto, ON — serving Canada and the USA</span><a href="mailto:contact@magneo.ca">contact@magneo.ca</a><a href="tel:+14378731155">437 873 1155</a></aside>
    <article>{children}</article>
  </div></main></div>;
}

export function PrivacyPolicy() {
  usePolicySeo('Privacy Policy', 'How Magneo collects, uses, shares, and protects information across magneo.ca and blog.magneo.ca.', '/privacy-policy/');
  return <>
    <PolicyHeader eyebrow="Privacy" title="Privacy Policy" effectiveDate="October 6, 2026" intro="This policy explains how Magneo handles information when you visit our websites, contact us, request a resource, or work with us."/>
    <PolicyLayout>
      <section><h2>Scope</h2><p>This policy applies to <a href="https://magneo.ca/">magneo.ca</a>, <a href="https://blog.magneo.ca/blog/">blog.magneo.ca</a>, and the forms, pages, and services made available through them. Magneo is responsible for the information it controls.</p></section>

      <section><h2>Information we collect</h2><h3>Information you provide</h3><p>When you submit an enquiry or request a guide, we may collect your name, email address, telephone number, company, role, message, form responses, consent choices, and any information you choose to include. If you become a client, we may also keep project communications, service records, billing information, and materials needed to provide the agreed work.</p><h3>Information collected through the websites</h3><p>Our hosting and security systems may process IP address, browser and device details, request logs, referring pages, dates and times, and security events. The site search records search terms, result counts, and result clicks through a data layer; obvious email addresses, telephone numbers, and URLs are removed from search terms before an event is recorded. Please do not enter confidential or sensitive personal information into site search.</p></section>

      <section><h2>Cookies and tracking technologies</h2><p>Our preference cookie, <code>magneo_cookie_preferences</code>, stores your choice for up to 180 days on both magneo.ca and blog.magneo.ca. WordPress may also use essential security, login and form-related cookies where those functions are used. Essential functions remain available when you reject optional cookies.</p><p>With Analytics enabled, the main website loads Google Analytics 4 using measurement ID G-R6LHHX00NR. The blog loads Google Tag Manager container GTM-N5CMG47S, which currently contains Google Analytics 4. Google receives usage information such as page visits and browser details. Its <code>_ga</code> and <code>_ga_*</code> cookies distinguish visitors and sessions; Google lists a default duration of two years, subject to browser limits and account configuration. We do not load this optional tag before you allow Analytics.</p><p>With Marketing enabled, the blog loads the HubSpot tracking code. HubSpot can receive visit information and use cookies including <code>__hstc</code> and <code>hubspotutk</code> (six months), <code>__hssc</code> (30 minutes), and <code>__hssrc</code> (session). This is separate from the information you choose to submit through a Magneo enquiry or guide form. We do not load this optional tracking code before you allow Marketing.</p><p>Choose Reject optional, Accept optional, or Manage preferences in the banner. Use Cookie settings in either website footer to change or withdraw your choice. On withdrawal, we stop loading optional scripts on the next page load and attempt to remove their first-party cookies; third-party or browser-managed data may require your browser controls. The videos reviewed for this policy use native website playback rather than a third-party video-tracking embed.</p><p>Provider cookie details: <a href="https://support.google.com/analytics/answer/11397207">Google Analytics</a> and <a href="https://knowledge.hubspot.com/privacy-and-consent/what-cookies-does-hubspot-set-in-a-visitor-s-browser">HubSpot</a>. Provider-side data retention is governed by the actual account configuration and service terms; cookie lifespan alone does not establish how long provider records are held.</p></section>

      <section><h2>How we use information</h2><ul><li>Respond to enquiries and arrange conversations.</li><li>Deliver requested guides and other resources.</li><li>Prepare proposals, provide services, and manage client relationships.</li><li>Operate, secure, troubleshoot, and improve the websites.</li><li>Understand aggregate website and search usage.</li><li>Meet legal, accounting, and regulatory obligations, and protect our rights.</li></ul><p>Submitting an enquiry does not subscribe you to optional marketing. Where marketing consent is requested, it is presented separately and can be withdrawn.</p></section>

      <section><h2>Service providers and disclosures</h2><p>Information may be processed by providers that help operate the websites and business, including HubSpot for forms and customer-relationship management, Vercel for main-site hosting and server functions, the WordPress hosting and security environment for the blog, and analytics or tag-management providers where enabled. These providers process information under their own infrastructure and contractual terms and may operate outside Canada.</p><p>We may also disclose information when required by law, to protect people or property, in connection with professional advisers, or as part of a business transaction. We do not sell personal information.</p></section>

      <section><h2>AI intake chat</h2><p>When enabled, our intake assistant uses OpenAI to process the messages you send and generate replies. It identifies itself as AI and can take an enquiry while our team is offline. Please share business information only, and do not include passwords, payment details, confidential case information, or sensitive personal information.</p><p>Chat messages remain in your browser's memory until you reload the page. When you choose to send an enquiry and agree to follow-up, your contact details, request and conversation are sent to our inbox through Resend. This does not subscribe you to marketing. OpenAI requests are configured not to store responses for later retrieval through its API; provider retention remains subject to the applicable service terms.</p><p>Cloudflare Turnstile checks requests for abuse when you open the chat. Upstash stores short-lived hashed IP rate-limit keys and delivery markers containing a request hash and delivery status. Rate-limit keys expire after one minute; delivery markers expire after seven days. The delivery markers do not contain your contact details or conversation. These providers may process information outside Canada.</p></section>

      <section><h2>Retention</h2><p>Retention depends on the purpose and the system involved. Enquiry and CRM records are kept while we respond, manage a prospective or active relationship, maintain necessary business records, and meet legal requirements. Hosting, security, analytics, and form providers retain technical records according to the applicable account configuration and their service terms. Information is deleted or anonymized when it is no longer reasonably required, subject to backups, legal holds, and record-keeping obligations.</p></section>

      <section><h2>Your choices and rights</h2><p>You may ask to access or correct personal information we control, withdraw consent where processing depends on consent, or ask a privacy question. Depending on your location, additional rights may apply. We may need to verify your identity and may retain information where the law permits or requires it.</p><p>Use Cookie settings in either footer or your browser controls to manage optional cookies. You can also unsubscribe through any marketing message you receive.</p></section>

      <section><h2>Security and third-party links</h2><p>We use reasonable administrative and technical measures appropriate to the information handled, but no website or transmission method is completely secure. Our websites link to third-party services and websites whose privacy practices we do not control.</p></section>

      <section><h2>Changes and contact</h2><p>We may update this policy as our websites, tools, or legal obligations change. The effective date above identifies the current version. Questions or requests can be sent to <a href="mailto:contact@magneo.ca">contact@magneo.ca</a> or discussed through the <Link to="/contact/">contact page</Link>.</p></section>
    </PolicyLayout>
  </>;
}

export function TermsOfUse() {
  usePolicySeo('Website Terms of Use', 'Terms governing access to and use of Magneo’s websites, content, forms, portfolio materials, and downloadable resources.', '/terms-of-service/');
  return <>
    <PolicyHeader eyebrow="Website terms" title="Website Terms of Use" intro="These terms govern your use of magneo.ca, blog.magneo.ca, and the public content and resources available through them."/>
    <PolicyLayout>
      <section><h2>Acceptance and scope</h2><p>By using these websites, you agree to these Website Terms of Use. If you do not agree, do not use the websites. “Magneo,” “we,” and “us” refer to the business operating the Magneo websites from Toronto, Ontario.</p></section>

      <section><h2>General information only</h2><p>Website content is provided for general information and marketing purposes. It is not legal, financial, medical, regulatory, or other professional advice, and it does not create a professional-client, fiduciary, or agency relationship. Examples and portfolio concepts may be illustrative and should not be treated as promises of results.</p></section>

      <section><h2>No guarantee of results</h2><p>Search rankings, advertising performance, audience growth, enquiries, sales, and other outcomes depend on factors outside Magneo’s control. Nothing on the websites guarantees a particular result. Project deliverables, responsibilities, fees, and support are governed only by a separate written agreement accepted by Magneo and the client.</p></section>

      <section><h2>Permitted use</h2><p>You may access and use the websites for lawful personal or business evaluation. You must not interfere with website operation, attempt unauthorized access, introduce malicious code, misuse forms, scrape the websites in a way that creates an unreasonable load, impersonate another person, or use the content to violate law or third-party rights.</p></section>

      <section><h2>Intellectual property</h2><p>The websites and their original copy, designs, graphics, videos, downloadable resources, and branding are owned by Magneo or used with permission and are protected by applicable intellectual-property laws. You may view and share links to public pages. You may not reproduce, sell, publish, modify, or commercially exploit substantial website content without written permission, except where law permits.</p></section>

      <section><h2>Forms, downloads, and communications</h2><p>You are responsible for providing accurate information through forms and for having authority to submit it. Do not submit confidential, privileged, health, financial-account, or other sensitive information unless Magneo has specifically agreed to an appropriate method. Downloadable materials are provided for the recipient’s informational use and may have additional access conditions.</p></section>

      <section><h2>Third-party services and links</h2><p>The websites may use or link to services operated by third parties, including form, hosting, analytics, video, and social platforms. Magneo does not control third-party availability, content, security, or terms. Your use of a third-party service is governed by that provider’s terms.</p></section>

      <section><h2>Availability and changes</h2><p>We may change, suspend, or discontinue website content or functionality without notice. We aim to keep information useful and current but do not warrant that every page is complete, accurate, uninterrupted, secure, or error-free.</p></section>

      <section><h2>Limitation of liability</h2><p>To the fullest extent permitted by applicable law, Magneo is not liable for indirect, incidental, special, consequential, or punitive loss arising from use of or inability to use the websites. Nothing in these terms excludes liability that cannot lawfully be excluded.</p></section>

      <section><h2>Governing law</h2><p>These terms are governed by the laws of Ontario and the applicable federal laws of Canada, without regard to conflict-of-law rules. Courts located in Ontario will have jurisdiction, subject to any mandatory rights that apply in your location.</p></section>

      <section><h2>Changes and contact</h2><p>We may revise these terms by publishing an updated version and effective date. Questions can be sent to <a href="mailto:contact@magneo.ca">contact@magneo.ca</a> or submitted through the <Link to="/contact/">contact page</Link>.</p></section>
    </PolicyLayout>
  </>;
}

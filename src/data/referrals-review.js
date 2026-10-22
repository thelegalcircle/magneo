// MAGNEO-only review content. No AIgenist configuration or submission integration.
export const referralTitle = 'Refer & Earn | MAGNEO - Review';
export const referralDescription = 'Introduce a law firm to MAGNEO for websites, AI video content or ongoing marketing support. Review referral rewards, eligibility and terms.';
export const referralPath = '/test/referrals';
export const referralTerms = [
  'Website and marketing rewards are one-time payments. The AI video production reward applies only to the referred client’s first video project and is not a recurring commission on subsequent projects or orders.',
  'Only genuinely new leads qualify. Current clients, past clients, and firms previously in conversation with MAGNEO do not qualify.',
  'Anyone may refer, including existing clients. Referring your own business does not qualify.',
  'The referred client must sign within six months of the referral being received.',
  'The referrer or prospective client may report the referral by form, email, or direct message. The introduction must be confirmed by both parties before payout.',
  'If multiple people refer the same firm, the earliest valid referral received takes priority. Submitting a firm name without a genuine introduction does not establish priority.',
  'Only one reward category is available per new client across MAGNEO and AIgenist. If multiple reward categories apply, the highest qualifying reward is paid; rewards do not stack.',
  'MAGNEO may decline any prospective project. No reward is owed unless the referral is accepted, an agreement is signed, and the first payment clears.',
  'The AI video production reward is 10% of qualifying service fees actually collected for the referred client’s first video project. Taxes, advertising spend, separately billed third-party costs, unpaid contract amounts, subsequent projects, and recurring orders are excluded.',
  'If qualifying fees for that first video project are paid in instalments, each corresponding commission portion is subject to its own 30-day hold. The cancellation and refund conditions apply to each instalment before its commission becomes payable.',
  'The referral fee is paid by e-transfer 30 days after the client’s first payment clears, provided the project is underway. If the client cancels or receives a refund within those 30 days, no referral fee is owed. If the project has not started by day 30, payment is deferred until work begins, provided the agreement remains active and the qualifying payment has not been refunded.',
  'All amounts are in Canadian dollars. Any applicable taxes are excluded when determining qualifying project or retainer value.'
];
export const referralMarkup = `<div class="mg-referrals">
  <section class="mg-ref-hero"><div class="container">
    <p class="mg-ref-eyebrow">MAGNEO · Referral program</p>
    <p class="mg-ref-review">Review page · HubSpot form pending</p>
    <h1>Refer <em>&amp;</em> Earn</h1>
    <p class="mg-ref-deck">Know a law firm ready for a better website, AI video content, or ongoing marketing support? Introduce them to MAGNEO and earn a reward when they become a paying client.</p>
    <p class="mg-ref-follow-up">No need to share this page with the firm - just make the introduction and we’ll take it from there.</p>
    <a class="btn mg-ref-cta" href="#make-a-referral">Make a Referral <span aria-hidden="true">↓</span></a>
  </div></section>
  <section class="mg-ref-rewards" aria-labelledby="ref-rewards"><div class="container">
    <p class="mg-ref-eyebrow">A good introduction goes further</p><h2 id="ref-rewards">The rewards</h2>
    <div class="mg-ref-reward-grid">
      <article class="mg-ref-reward"><p class="mg-ref-amount">$300 <span>CAD</span></p><h3>Website referral</h3><p>Refer a law firm that needs a new website or a complete redesign. Projects can include strategy, copy, custom design, development, CMS setup, and analytics.</p><p class="mg-ref-ideal"><strong>Ideal for:</strong> Law firms with an outdated website, no website, or a site that makes it difficult for prospective clients to enquire.</p><div class="mg-ref-qualification"><span>Qualifying project</span><strong>$1,800 CAD or more.</strong></div></article>
      <article class="mg-ref-reward"><p class="mg-ref-amount">$500 <span>CAD</span></p><h3>Marketing referral</h3><p>Refer a law firm looking for ongoing marketing support. Monthly services can combine content creation, social media, SEO, Google Business Profile optimisation, website updates, and campaign management.</p><p class="mg-ref-ideal"><strong>Ideal for:</strong> Law firms that need consistent marketing direction and delivery without hiring an in-house marketer.</p><div class="mg-ref-qualification"><span>Qualifying retainer</span><strong>$3,500 CAD or more per month.</strong></div></article>
      <article class="mg-ref-reward"><p class="mg-ref-amount">10%</p><h3>AI video referral</h3><p>Refer a law firm that needs explainer videos, promotional ads, or social media content. Production can include creative concepts, scripts, AI visuals, editing, captions, and platform-ready formats.</p><p class="mg-ref-ideal"><strong>Ideal for:</strong> Law firms explaining their services, introducing their team, or refreshing their social content.</p><div class="mg-ref-qualification"><span>Your reward</span><strong>10% of service fees collected for the client’s first qualifying AI video project, excluding taxes, advertising spend, and separately billed third-party costs.</strong></div></article>
    </div>
    <p class="mg-ref-note">Service scope varies by project. Rewards are for eligible new clients, with one reward category per client. If multiple categories apply, the highest qualifying reward is paid. A 30-day hold and <a href="#referral-terms" data-ref-terms>referral terms</a> apply.</p>
  </div></section>
  <section class="mg-ref-process" aria-labelledby="ref-process"><div class="container">
    <p class="mg-ref-eyebrow">From introduction to reward</p><h2 id="ref-process">How it works</h2>
    <ol class="mg-ref-steps">
      <li><h3>Make an introduction</h3><p>Introduce the firm by email, or ask them to contact MAGNEO and mention your name and email. The referral form will be added here later. Get their permission before sharing contact details.</p></li>
      <li><h3>Referral review and follow-up</h3><p>MAGNEO reviews each referral for eligibility and service fit, contacts eligible firms, and lets you know whether the referral qualifies.</p></li>
      <li><h3>Stay informed</h3><p>MAGNEO lets you know if your introduction leads to a signed agreement and confirms the qualifying reward and expected payout date.</p></li>
      <li><h3>Receive your reward</h3><p>MAGNEO pays the reward after the 30-day hold, provided the project is underway and the client has not cancelled or received a refund. Referral terms apply.</p></li>
    </ol>
  </div></section>
  <section class="mg-ref-relationship" aria-labelledby="ref-relationship"><div class="container mg-ref-relationship-grid"><h2 id="ref-relationship">Good connections can become lasting partnerships.</h2><div><p>Know law firms that regularly need websites or marketing support? Ongoing referral relationships are welcome. Each eligible new client you introduce can earn a separate reward - so your first introduction doesn’t have to be your last.</p><p class="mg-ref-confidence"><strong>Refer with confidence.</strong> MAGNEO brings more than 10 years of marketing experience to each referral. We work directly with the firm to understand its goals, recommend a practical approach, and agree a clear scope before work begins.</p></div></div></section>
  <section class="mg-ref-form-section" id="make-a-referral" aria-labelledby="ref-form-heading"><div class="container mg-ref-form-grid">
    <div><p class="mg-ref-eyebrow">Make the connection</p><h2 id="ref-form-heading">Make a Referral</h2><p>Introduce a law firm that could benefit from a better website, AI video content, or ongoing marketing support.</p>
    <div class="mg-ref-methods" aria-label="Referral methods"><a href="mailto:contact@magneo.ca?subject=MAGNEO%20referral%20introduction"><span>Introduce a firm by email<strong>contact@magneo.ca</strong></span><span aria-hidden="true">↗</span></a><div><span>Referral form<strong>Coming soon - embed pending</strong></span></div></div><p class="mg-ref-method-guidance">All referral methods follow the same eligibility, confirmation, and terms-acceptance process.</p>
    <p class="mg-ref-permission">Only share someone’s contact details with their permission. You can also introduce them by email or ask them to contact MAGNEO directly and mention your name.</p>
    <p>Read the <a href="#referral-terms" data-ref-terms>referral terms</a> before making an introduction.</p></div>
    <!-- Future HubSpot embed only. Planned fields: referrer name/email (required), firm name (required), website, service interest, contact name/email/phone, additional information, required terms agreement, and permission confirmation when third-party contact details are provided. -->
    <div><div class="mg-ref-form-placeholder" aria-label="Non-interactive referral form placeholder"><div><span class="mg-ref-placeholder-label">Form placement only</span><h3>HubSpot referral form will be added here.</h3><p>Embed details pending. This review page does not collect submissions.</p></div></div><p class="mg-ref-privacy"><a href="/privacy-policy/">Privacy Policy</a></p></div>
  </div></section>
  <section class="mg-ref-terms" id="referral-terms" aria-label="Referral terms and eligibility"><div class="container"><details><summary><span>Referral Program Terms</span><span class="mg-ref-summary-action" aria-hidden="true"><span class="mg-ref-show">View terms</span><span class="mg-ref-hide">Hide terms</span><b>+</b></span></summary>
    <ol>${referralTerms.map(term=>`<li>${term}</li>`).join('')}</ol>
    <p class="mg-ref-clarification">This program rewards introductions of law firms seeking marketing services. It does not concern referrals of legal clients or legal matters.</p>
  </details></div></section>
</div>`;

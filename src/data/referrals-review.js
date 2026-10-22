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
  <section class="mg-ref-hero"><div class="container mg-ref-hero-grid"><div>
    <p class="mg-ref-eyebrow">MAGNEO REFERRAL PROGRAM</p>
    <h1>A good introduction.<br><em>A rewarding connection.</em></h1>
    <p class="mg-ref-deck">Know a law firm that needs a better website or stronger marketing? Introduce them to Magneo and earn a referral reward.</p>
    <div class="mg-ref-actions"><a class="btn mg-ref-cta" href="#make-a-referral">Make a referral <span aria-hidden="true">↗</span></a><a class="mg-ref-secondary" href="#ref-rewards">See the rewards <span aria-hidden="true">↓</span></a></div>
  </div><aside class="mg-ref-summary" aria-label="Referral reward summary"><p class="mg-ref-eyebrow">Your introduction. Rewarded.</p><dl><div><dt>Website referral</dt><dd>$300</dd></div><div><dt>Marketing referral</dt><dd>$500</dd></div><div><dt>AI video referral</dt><dd>10%</dd></div></dl><p>One qualifying reward per new client.<br>All amounts in CAD. Referral terms apply.</p></aside>
  </div></section>
  <section class="mg-ref-rewards" aria-labelledby="ref-rewards"><div class="container">
    <p class="mg-ref-eyebrow">A good introduction goes further</p><h2 id="ref-rewards">The rewards</h2>
    <div class="mg-ref-reward-grid">
      <article class="mg-ref-reward"><p class="mg-ref-amount">$300 <span>CAD</span></p><h3>Website referral</h3><p>Introduce a new client booking a website project worth $1,800 CAD or more.</p><p class="mg-ref-qualification">Qualifying project value excludes taxes.</p></article>
      <article class="mg-ref-reward"><p class="mg-ref-amount">$500 <span>CAD</span></p><h3>Marketing referral</h3><p>Introduce a new client signing a marketing retainer of $3,500 CAD or more per month.</p><p class="mg-ref-qualification">Qualifying monthly retainer value excludes taxes.</p></article>
      <article class="mg-ref-reward"><p class="mg-ref-amount">10%</p><h3>AI video referral</h3><p>Earn 10% of service fees collected for a new client’s first qualifying AI video project.</p><p class="mg-ref-qualification">Excludes taxes, advertising spend and separately billed third-party costs. Each instalment has its own 30-day hold.</p></article>
    </div>
    <p class="mg-ref-note">Service scope varies by project. Rewards are for eligible new clients, with one reward category per client. If multiple categories apply, the highest qualifying reward is paid. A 30-day hold and <a href="#referral-terms" data-ref-terms>referral terms</a> apply.</p>
  </div></section>
  <section class="mg-ref-process" aria-labelledby="ref-process"><div class="container">
    <p class="mg-ref-eyebrow">From introduction to reward</p><h2 id="ref-process">How it works</h2>
    <ol class="mg-ref-steps">
      <li><h3>Make the introduction</h3><p>Introduce the firm by email, with their permission, or ask them to contact Magneo and mention your name and email.</p></li>
      <li><h3>We confirm the qualifying project</h3><p>We review eligibility, confirm the introduction with both parties and let you know the reward and expected payout date when the client signs.</p></li>
      <li><h3>You receive your reward</h3><p>Your qualifying reward is paid by e-transfer once the payment hold and project-start conditions are met.</p></li>
    </ol><p class="mg-ref-hold"><strong>The 30-day hold:</strong> Payment is due 30 days after the client’s first payment clears, provided work is underway and the client has not cancelled or received a refund. If work has not started, payout waits until it begins. AI video instalments each have their own hold. <a href="#referral-terms" data-ref-terms>Read the full terms</a>.</p>
  </div></section>
  <section class="mg-ref-relationship" aria-labelledby="ref-relationship"><div class="container mg-ref-relationship-grid"><h2 id="ref-relationship">Good connections.<br>Lasting partnerships.</h2><p>Each eligible new client you introduce can earn a separate reward. With more than 10 years of marketing experience, Magneo works directly with each firm to agree a clear scope before work begins.</p></div></section>
  <section class="mg-ref-form-section" id="make-a-referral" aria-labelledby="ref-form-heading"><div class="container mg-ref-form-grid">
    <div class="mg-ref-form-intro"><p class="mg-ref-eyebrow">Make the connection</p><h2 id="ref-form-heading">Your next introduction starts here.</h2><p>No need to share this page with the firm - make the introduction and we’ll take it from there.</p>
    <div class="mg-ref-methods" aria-label="Referral methods"><a href="mailto:contact@magneo.ca?subject=MAGNEO%20referral%20introduction"><span>Prefer an email introduction?<strong>contact@magneo.ca</strong></span><span aria-hidden="true">↗</span></a></div><p class="mg-ref-method-guidance">All referral methods follow the same eligibility, confirmation, and terms-acceptance process.</p>
    <p class="mg-ref-permission">Only share someone’s contact details with their permission. You can also introduce them by email or ask them to contact MAGNEO directly and mention your name.</p>
    <p>Read the <a href="#referral-terms" data-ref-terms>referral terms</a> before making an introduction.</p></div>
    <div class="mg-ref-form-panel"><h2>Who should we meet?</h2><p>Tell us about the firm you’d like to introduce.</p><div class="mg-ref-preview-notice"><strong>Review page only - form setup under review.</strong> Terms and permission confirmations are pending in HubSpot. This connected form sends submissions to MAGNEO.</div><div id="magneo-referral-form" class="mg-ref-hubspot" aria-label="MAGNEO referral form"><p role="status">Loading referral form...</p></div><p class="mg-ref-form-fallback">If the form does not load, <a href="https://share-na3.hsforms.com/1dhvSEGjRQpm18IqbSiRv0w5o2p69" target="_blank" rel="noopener noreferrer">open the referral form in a new tab ↗</a>.</p><p class="mg-ref-privacy"><a href="/privacy-policy/">Privacy Policy</a></p></div>
  </div></section>
  <section class="mg-ref-terms" id="referral-terms" aria-label="Referral terms and eligibility"><div class="container"><details><summary><span>Referral Program Terms</span><span class="mg-ref-summary-action" aria-hidden="true"><span class="mg-ref-show">View terms</span><span class="mg-ref-hide">Hide terms</span><b>+</b></span></summary>
    <ol>${referralTerms.map(term=>`<li>${term}</li>`).join('')}</ol>
    <p class="mg-ref-clarification">This program rewards introductions of law firms seeking marketing services. It does not concern referrals of legal clients or legal matters.</p>
  </details></div></section>
</div>`;

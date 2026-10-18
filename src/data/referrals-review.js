// MAGNEO-only review content. No AIgenist configuration or submission integration.
export const referralTitle = 'Refer & Earn | MAGNEO - Review';
export const referralDescription = 'Introduce a law firm to MAGNEO for a website or ongoing marketing support. Review referral rewards, eligibility and terms.';
export const referralPath = '/test/referrals';
export const referralTerms = [
  'Rewards are one-time payments, not recurring commissions.',
  'Only genuinely new leads qualify. Current clients, past clients, and firms previously in conversation with MAGNEO do not qualify.',
  'Anyone may refer, including existing clients. Referring your own business does not qualify.',
  'The referred client must sign within six months of the referral being received.',
  'The referrer or prospective client may report the referral by form, email, or direct message. The introduction must be confirmed by both parties before payout.',
  'If multiple people refer the same firm, the earliest valid referral received takes priority. Submitting a firm name without a genuine introduction does not establish priority.',
  'Only one reward is available per new client across MAGNEO and AIgenist. If multiple reward categories apply, the highest qualifying reward is paid.',
  'MAGNEO may decline any prospective project. No reward is owed unless the referral is accepted, an agreement is signed, and the first payment clears.',
  'Payment is sent by e-transfer within seven calendar days after the first payment clears. If that payment is refunded before the reward is sent, no reward is payable.',
  'All amounts are in Canadian dollars. Any applicable taxes are excluded when determining qualifying project or retainer value.'
];
export const referralMarkup = `<div class="mg-referrals">
  <section class="mg-ref-hero"><div class="container">
    <p class="mg-ref-eyebrow">MAGNEO · Referral program</p>
    <p class="mg-ref-review">Review page · Not a live referral form</p>
    <h1>Refer <em>&amp;</em> Earn</h1>
    <p class="mg-ref-deck">Know a law firm ready for a better website or ongoing marketing support? Introduce them to MAGNEO and earn a reward when they become a client.</p>
    <a class="btn mg-ref-cta" href="#make-a-referral">Make a Referral <span aria-hidden="true">↗</span></a>
  </div></section>
  <section class="mg-ref-rewards" aria-labelledby="ref-rewards"><div class="container">
    <p class="mg-ref-eyebrow">A good introduction goes further</p><h2 id="ref-rewards">The rewards</h2>
    <div class="mg-ref-reward-grid">
      <article class="mg-ref-reward"><p class="mg-ref-amount">$300 <span>CAD</span></p><h3>Website project referral</h3><p>For a new client booking a website project worth $1,800 CAD or more.</p></article>
      <article class="mg-ref-reward"><p class="mg-ref-amount">$500 <span>CAD</span></p><h3>Monthly marketing referral</h3><p>For a new client signing a marketing retainer of $3,500 CAD or more per month.</p></article>
    </div>
    <p class="mg-ref-note">One reward per new client. If more than one category applies, the highest qualifying reward is paid.</p>
  </div></section>
  <section class="mg-ref-process" aria-labelledby="ref-process"><div class="container">
    <p class="mg-ref-eyebrow">Three straightforward steps</p><h2 id="ref-process">How it works</h2>
    <ol class="mg-ref-steps">
      <li><h3>Make an introduction</h3><p>Submit a referral, introduce the firm by email, or ask them to contact MAGNEO and mention your name and email.</p></li>
      <li><h3>The client gets started</h3><p>The referral qualifies when an eligible new client signs an agreement and their first payment clears.</p></li>
      <li><h3>Receive your reward</h3><p>Your one-time reward is sent by e-transfer within seven calendar days after the first payment clears, provided it has not been refunded before payout.</p></li>
    </ol>
  </div></section>
  <section class="mg-ref-form-section" id="make-a-referral" aria-labelledby="ref-form-heading"><div class="container mg-ref-form-grid">
    <div><p class="mg-ref-eyebrow">Make the connection</p><h2 id="ref-form-heading">Make a Referral</h2><p>Introduce a law firm that could benefit from a better website or ongoing marketing support.</p>
    <p class="mg-ref-permission">Only share someone’s contact details with their permission. You can also introduce them by email or ask them to contact MAGNEO directly and mention your name.</p>
    <a class="mg-ref-email" href="mailto:contact@magneo.ca?subject=MAGNEO%20referral%20introduction">Introduce a firm by email <span aria-hidden="true">↗</span></a><p class="mg-ref-email-address">contact@magneo.ca</p></div>
    <!-- Future HubSpot embed only. Planned fields: referrer name/email (required), firm name (required), website, service interest, contact name/email/phone, additional information, required terms agreement, and permission confirmation when third-party contact details are provided. -->
    <div class="mg-ref-form-placeholder" aria-label="Non-interactive referral form placeholder"><div><span class="mg-ref-placeholder-label">Form placement only</span><h3>HubSpot referral form will be added here.</h3><p>Embed details pending. This review page does not collect submissions.</p></div></div>
  </div></section>
  <section class="mg-ref-terms" aria-labelledby="ref-terms"><div class="container"><div class="mg-ref-terms-heading"><p class="mg-ref-eyebrow">The details, clearly</p><h2 id="ref-terms">Referral terms</h2></div>
    <ol>${referralTerms.map(term=>`<li>${term}</li>`).join('')}</ol>
    <p class="mg-ref-clarification">This program rewards introductions of law firms seeking marketing services. It does not concern referrals of legal clients or legal matters.</p>
  </div></section>
</div>`;

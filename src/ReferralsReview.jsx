import { useEffect } from 'react';
import { referralTitle, referralDescription, referralPath, referralMarkup } from './data/referrals-review.js';
import './styles/referrals-review.css';
import referralFormCss from './styles/referral-form-embed.css?inline';

export default function ReferralsReview() {
  useEffect(() => {
    let cancelled = false;
    const target = document.getElementById('magneo-referral-form');
    const createForm = () => {
      if (cancelled || !target?.isConnected || target.dataset.loaded || !window.hbspt?.forms) return;
      target.dataset.loaded = 'true';
      target.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '342767601',
        formId: '761bd210-68d1-4299-b5f0-8a9b4a246fd3',
        region: 'na3',
        target: '#magneo-referral-form',
        css: referralFormCss,
        cssRequired: '',
        submitButtonClass: 'mg-ref-hubspot-submit',
        onFormReady: () => {
          if (cancelled) return;
          const formDocument = target.querySelector('iframe')?.contentDocument || document;
          const form = formDocument.querySelector('form[data-form-id="761bd210-68d1-4299-b5f0-8a9b4a246fd3"]');
          if (!form) return;
          if (!formDocument.getElementById('magneo-referral-form-style')) {
            const style = formDocument.createElement('style');
            style.id = 'magneo-referral-form-style';
            style.textContent = referralFormCss;
            formDocument.head.appendChild(style);
          }
          const submit = form.querySelector('input[type="submit"]');
          if (submit) submit.value = 'Make a referral ↗';
        }
      });
    };
    let script = document.querySelector('script[src="https://js-na3.hsforms.net/forms/embed/v2.js"]');
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://js-na3.hsforms.net/forms/embed/v2.js';
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener('load', createForm);
    createForm();
    return () => {
      cancelled = true;
      script.removeEventListener('load', createForm);
      if (target) {
        target.innerHTML = '';
        delete target.dataset.loaded;
      }
    };
  }, []);
  useEffect(() => {
    const openTerms = () => {
      if (window.location.hash !== '#referral-terms') return;
      const disclosure = document.querySelector('.mg-referrals .mg-ref-terms details');
      if (disclosure) disclosure.open = true;
    };
    const handleTermsLink = (event) => {
      if (!event.target.closest('[data-ref-terms]')) return;
      const disclosure = document.querySelector('.mg-referrals .mg-ref-terms details');
      if (disclosure) {
        event.preventDefault();
        disclosure.open = true;
        window.history.replaceState(window.history.state, '', '#referral-terms');
        document.getElementById('referral-terms').scrollIntoView();
        disclosure.querySelector('summary').focus({ preventScroll: true });
      }
    };
    openTerms();
    document.addEventListener('click', handleTermsLink);
    window.addEventListener('hashchange', openTerms);
    return () => {
      document.removeEventListener('click', handleTermsLink);
      window.removeEventListener('hashchange', openTerms);
    };
  }, []);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = referralTitle;
    const saved = [];
    for (const [selector, attribute, value] of [
      ['meta[name="description"]', 'content', referralDescription],
      ['meta[name="robots"]', 'content', 'noindex, nofollow'],
      ['link[rel="canonical"]', 'href', `https://magneo.ca${referralPath}`]
    ]) {
      let node = document.querySelector(selector);
      const existing = Boolean(node);
      if (!node) {
        node = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
        if (selector.startsWith('link')) node.rel = 'canonical';
        else node.name = selector.includes('description') ? 'description' : 'robots';
        document.head.appendChild(node);
      }
      saved.push([node, attribute, node.getAttribute(attribute), existing]);
      node.setAttribute(attribute, value);
    }
    return () => {
      document.title = previousTitle;
      for (const [node, attribute, value, existing] of saved) {
        if (!existing) node.remove();
        else if (value === null) node.removeAttribute(attribute);
        else node.setAttribute(attribute, value);
      }
    };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: referralMarkup }} />;
}

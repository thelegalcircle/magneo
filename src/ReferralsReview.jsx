import { useEffect } from 'react';
import { referralTitle, referralDescription, referralPath, referralMarkup } from './data/referrals-review.js';
import './styles/referrals-review.css';

export default function ReferralsReview() {
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
      ['meta[name="robots"]', 'content', 'noindex, follow'],
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

import { useEffect } from 'react';
import { referralTitle, referralDescription, referralPath, referralMarkup } from './data/referrals-review.js';
import './styles/referrals-review.css';

export default function ReferralsReview() {
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

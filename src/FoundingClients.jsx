import { useEffect } from 'react';
import { foundingTitle, foundingDescription, foundingMarkup } from './data/founding-client-offer.js';
import './styles/founding-clients.css';

export default function FoundingClients() {
  useEffect(() => {
    document.title = foundingTitle;
    for (const [property, value] of [['og:title', foundingTitle], ['og:description', foundingDescription], ['og:url', 'https://magneo.ca/new-clients-offer/'], ['og:image', 'https://magneo.ca/portfolio/websites/new-client-desktop.webp']]) {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) { meta = document.createElement('meta'); meta.setAttribute('property', property); document.head.appendChild(meta); }
      meta.content = value;
    }
    for (const [selector, attribute, value] of [
      ['meta[name="description"]', 'content', foundingDescription],
      ['link[rel="canonical"]', 'href', 'https://magneo.ca/new-clients-offer/']
    ]) {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement(selector.startsWith('meta') ? 'meta' : 'link');
        element.setAttribute(selector.startsWith('meta') ? 'name' : 'rel', selector.startsWith('meta') ? 'description' : 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    }
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: foundingMarkup }} />;
}

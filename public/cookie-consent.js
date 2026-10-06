(function () {
  'use strict';
  var COOKIE = 'magneo_cookie_preferences';
  var DOMAIN = '.magneo.ca';
  var SIX_MONTHS = 60 * 60 * 24 * 180;
  var onBlog = location.hostname === 'blog.magneo.ca';
  var choices = readChoices();
  var lastFocus = null;
  var panel = null;

  function readChoices() {
    var match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE + '=([^;]*)'));
    if (!match) return null;
    try {
      var value = JSON.parse(decodeURIComponent(match[1]));
      return value.v === 1 && typeof value.analytics === 'boolean' && typeof value.marketing === 'boolean' ? value : null;
    } catch (_) { return null; }
  }

  function saveChoices(value) {
    var previous = choices;
    choices = { v: 1, analytics: !!value.analytics, marketing: !!value.marketing };
    document.cookie = COOKIE + '=' + encodeURIComponent(JSON.stringify(choices)) + '; Max-Age=' + SIX_MONTHS + '; Domain=' + DOMAIN + '; Path=/; SameSite=Lax; Secure';
    if (previous && ((previous.analytics && !choices.analytics) || (previous.marketing && !choices.marketing))) {
      withdrawCookies();
      location.reload(); // Unload scripts that were already permitted in this document.
      return;
    }
    removePanel();
    loadPermittedTools();
  }

  function withdrawCookies() {
    var optional = /^(?:_ga(?:_.*)?|_gid|_gcl_.*|__hstc|__hssc|__hssrc|hubspotutk|messagesUtk)$/i;
    document.cookie.split(';').forEach(function (item) {
      var name = item.trim().split('=')[0];
      if (!optional.test(name)) return;
      ['','; Domain=' + DOMAIN].forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure' + domain;
      });
    });
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  }

  function loadScript(id, src) {
    if (document.getElementById(id)) return;
    var script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadPermittedTools() {
    if (!choices) return;
    if (choices.analytics) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      window.gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: choices.marketing ? 'granted' : 'denied',
        ad_user_data: choices.marketing ? 'granted' : 'denied',
        ad_personalization: choices.marketing ? 'granted' : 'denied'
      });
      if (onBlog) {
        loadScript('magneo-consented-gtm', 'https://www.googletagmanager.com/gtm.js?id=GTM-N5CMG47S');
      } else if (!document.getElementById('magneo-consented-ga4')) {
        window.gtag('js', new Date());
        window.gtag('config', 'G-R6LHHX00NR');
        loadScript('magneo-consented-ga4', 'https://www.googletagmanager.com/gtag/js?id=G-R6LHHX00NR');
      }
    }
    if (onBlog && choices.marketing) loadScript('magneo-consented-hubspot', 'https://js-na3.hs-scripts.com/342767601.js?integration=WordPress');
  }

  function make(tag, attrs, text) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) { el.setAttribute(key, attrs[key]); });
    if (text != null) el.textContent = text;
    return el;
  }

  function removePanel() {
    if (!panel) return;
    panel.remove();
    panel = null;
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  }

  function showBanner() {
    removePanel();
    panel = make('section', { id: 'magneo-cookie-panel', class: 'magneo-cookie-panel', role: 'region', 'aria-labelledby': 'magneo-cookie-title' });
    panel.appendChild(make('h2', { id: 'magneo-cookie-title' }, 'Your cookie preferences'));
    panel.appendChild(make('p', {}, 'Essential cookies keep this website working. Optional cookies help us understand visits and support marketing. You choose which optional cookies to allow.'));
    var buttons = make('div', { class: 'magneo-cookie-actions' });
    var reject = make('button', { type: 'button', class: 'magneo-cookie-choice' }, 'Reject optional');
    var accept = make('button', { type: 'button', class: 'magneo-cookie-choice' }, 'Accept optional');
    reject.addEventListener('click', function () { saveChoices({ analytics: false, marketing: false }); });
    accept.addEventListener('click', function () { saveChoices({ analytics: true, marketing: true }); });
    buttons.appendChild(reject); buttons.appendChild(accept);
    panel.appendChild(buttons);
    var manage = make('button', { type: 'button', class: 'magneo-cookie-manage' }, 'Manage preferences');
    manage.addEventListener('click', showPreferences);
    panel.appendChild(manage);
    var privacy = make('a', { href: 'https://magneo.ca/privacy-policy/' }, 'Privacy Policy');
    panel.appendChild(privacy);
    document.body.appendChild(panel);
  }

  function showPreferences() {
    lastFocus = document.activeElement;
    if (panel) panel.remove();
    var current = choices || { analytics: false, marketing: false };
    var draft = { analytics: current.analytics, marketing: current.marketing };
    panel = make('section', { id: 'magneo-cookie-panel', class: 'magneo-cookie-panel magneo-cookie-preferences', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'magneo-cookie-title' });
    panel.appendChild(make('h2', { id: 'magneo-cookie-title' }, 'Manage cookie preferences'));
    panel.appendChild(make('p', {}, 'Choose which optional tools may run on Magneo’s websites. You can change your choice at any time.'));
    var essential = make('div', { class: 'magneo-cookie-category' });
    essential.appendChild(make('strong', {}, 'Essential — always active'));
    essential.appendChild(make('p', {}, 'Keeps core website, form and preference functions available.'));
    panel.appendChild(essential);
    [['analytics','Analytics','Google Analytics helps us understand visits to Magneo’s websites.'],['marketing','Marketing','HubSpot tracking helps us understand visits and follow-up across the blog.']].forEach(function (row) {
      var wrap = make('div', { class: 'magneo-cookie-category' });
      var toggle = make('button', { type: 'button', role: 'switch', 'aria-checked': String(draft[row[0]]), 'aria-label': row[1] + ' cookies', class: 'magneo-cookie-switch' }, row[1] + ': ' + (draft[row[0]] ? 'On' : 'Off'));
      toggle.addEventListener('click', function () { draft[row[0]] = !draft[row[0]]; toggle.setAttribute('aria-checked', String(draft[row[0]])); toggle.textContent = row[1] + ': ' + (draft[row[0]] ? 'On' : 'Off'); });
      wrap.appendChild(toggle); wrap.appendChild(make('p', {}, row[2])); panel.appendChild(wrap);
    });
    var actions = make('div', { class: 'magneo-cookie-actions' });
    var cancel = make('button', { type: 'button', class: 'magneo-cookie-choice' }, 'Cancel');
    var save = make('button', { type: 'button', class: 'magneo-cookie-choice' }, 'Save preferences');
    cancel.addEventListener('click', function () { removePanel(); if (!choices) showBanner(); });
    save.addEventListener('click', function () { saveChoices(draft); });
    actions.appendChild(cancel); actions.appendChild(save); panel.appendChild(actions);
    panel.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { event.preventDefault(); cancel.click(); }
      if (event.key !== 'Tab') return;
      var focusable = Array.prototype.slice.call(panel.querySelectorAll('button,a[href]'));
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    document.body.appendChild(panel);
    panel.querySelector('button').focus();
  }

  function addFooterSettings() {
    var rows = document.querySelectorAll('.footer-bottom > div, .magneo-blog-footer .magneo-footer-bottom, footer.nd-footer, footer.al-footer, footer.av2-footer, footer.hl6-footer, footer.fn5-footer, footer.lt3-footer, footer.nl4-footer, footer.mh7-footer');
    rows.forEach(function (row) {
      if (row.querySelector('.magneo-cookie-settings-link')) return;
      var link = make('a', { href: '#cookie-settings', class: 'magneo-cookie-settings-link' }, 'Cookie settings');
      link.addEventListener('click', function (event) { event.preventDefault(); showPreferences(); });
      row.appendChild(link);
    });
  }

  window.MagneoCookieSettings = { open: showPreferences };
  function boot() {
    var style = make('link', { rel: 'stylesheet', href: 'https://magneo.ca/cookie-consent.css' });
    document.head.appendChild(style);
    addFooterSettings();
    new MutationObserver(addFooterSettings).observe(document.body, { childList: true, subtree: true });
    loadPermittedTools();
    if (!choices) showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();

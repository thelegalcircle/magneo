(function () {
  function closeAllMegaMenus(event) {
    var closeButton = event.target && event.target.closest && event.target.closest('.mega-close');
    if (!closeButton) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    var nav = document.querySelector('.nav');
    if (!nav) return;

    nav.classList.add('mega-hard-closed');
    nav.querySelectorAll('.nav-item').forEach(function (item) {
      item.classList.add('mega-dismissed');
    });
    nav.querySelectorAll('.mega').forEach(function (mega) {
      mega.style.setProperty('display', 'none', 'important');
      mega.style.setProperty('opacity', '0', 'important');
      mega.style.setProperty('visibility', 'hidden', 'important');
      mega.style.setProperty('pointer-events', 'none', 'important');
    });
  }

  function reopenFromTrigger(event) {
    var trigger = event.target && event.target.closest && event.target.closest('.nav-trigger');
    if (!trigger) return;
    var nav = document.querySelector('.nav');
    if (!nav) return;
    nav.classList.remove('mega-hard-closed');
    nav.querySelectorAll('.nav-item').forEach(function (item) {
      item.classList.remove('mega-dismissed');
    });
    nav.querySelectorAll('.mega').forEach(function (mega) {
      mega.style.removeProperty('display');
      mega.style.removeProperty('opacity');
      mega.style.removeProperty('visibility');
      mega.style.removeProperty('pointer-events');
    });
  }

  function internalUrl(link) {
    try {
      return new URL(link.getAttribute('href'), window.location.href);
    } catch (error) {
      return null;
    }
  }

  function shouldLoadNormally(link, url) {
    if (!url || url.origin !== window.location.origin) return false;
    // Let the review page handle its own form and accessible terms anchors.
    if (link.closest('.mg-referrals') && url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return false;
    if (link.hasAttribute('download')) return false;
    if ((link.getAttribute('target') || '').toLowerCase() === '_blank') return false;
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash === window.location.hash) return false;
    return true;
  }

  function loadInternalLinkNormally(event) {
    var link = event.target && event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    if (link.classList && link.classList.contains('nav-trigger')) return;

    var url = internalUrl(link);
    if (!shouldLoadNormally(link, url)) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    window.location.href = url.pathname + url.search + url.hash;
  }

  function loadScriptOnce(flag, src) {
    if (window[flag]) return;
    window[flag] = true;
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  }

  function loadEnhancementScripts() {
    loadScriptOnce('__magneoIndustryDepthLoaded', '/industry-depth.js');
    loadScriptOnce('__magneoHomepageSectionsLoaded', '/homepage-sections.js');
  }

  function stripComEmailText(node) {
    if (!node || !node.parentNode) return;
    var text = (node.textContent || '').toLowerCase();
    if (text.indexOf('contact@magneo.com') < 0) return;
    if (node.tagName === 'A' || text.replace(/\s+/g, ' ').trim() === 'contact@magneo.com') {
      node.remove();
      return;
    }
    node.innerHTML = node.innerHTML
      .replace(/<a[^>]*mailto:contact@magneo\.com[^>]*>\s*contact@magneo\.com\s*<\/a>/gi, '')
      .replace(/contact@magneo\.com/gi, '')
      .replace(/Email:\s*<br\s*\/?>/gi, '')
      .replace(/Email:\s*$/gi, '');
  }

  function removeFooterComEmail() {
    var footer = document.querySelector('footer');
    if (!footer) return false;
    footer.querySelectorAll('a[href]').forEach(function (link) {
      var text = (link.textContent || '').toLowerCase();
      var href = (link.getAttribute('href') || '').toLowerCase();
      if (text.indexOf('contact@magneo.com') >= 0 || href.indexOf('mailto:contact@magneo.com') >= 0) link.remove();
    });
    footer.querySelectorAll('p, span, div, li').forEach(stripComEmailText);
    return true;
  }

  function watchFooterEmail() {
    removeFooterComEmail();
    if (!('MutationObserver' in window)) return;
    var observer = new MutationObserver(function () { removeFooterComEmail(); });
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  }

  function homepageWatchdog() {
    if (window.location.pathname !== '/') return;
    window.setTimeout(function () {
      var root = document.getElementById('root');
      var hasContent = root && root.textContent && root.textContent.trim().length > 30;
      if (hasContent) {
        try { sessionStorage.removeItem('magneo-home-reload'); } catch (error) {}
        return;
      }
      var alreadyReloaded = false;
      try { alreadyReloaded = sessionStorage.getItem('magneo-home-reload') === '1'; } catch (error) {}
      if (alreadyReloaded) return;
      try { sessionStorage.setItem('magneo-home-reload', '1'); } catch (error) {}
      window.location.reload();
    }, 2200);
  }

  document.addEventListener('click', loadInternalLinkNormally, true);
  document.addEventListener('click', closeAllMegaMenus, true);
  document.addEventListener('pointerdown', closeAllMegaMenus, true);
  document.addEventListener('mouseover', reopenFromTrigger, true);
  document.addEventListener('focusin', reopenFromTrigger, true);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadEnhancementScripts);
    document.addEventListener('DOMContentLoaded', homepageWatchdog);
    document.addEventListener('DOMContentLoaded', watchFooterEmail);
  } else {
    loadEnhancementScripts();
    homepageWatchdog();
    watchFooterEmail();
  }
  window.setInterval(removeFooterComEmail, 1000);
})();

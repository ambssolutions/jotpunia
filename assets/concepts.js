/* Jot Punia concepts: single source of truth for the gallery and the switcher.
   On a concept page (designs/NN-slug/) it adds a small floating control to jump
   between concepts, go back to the gallery, and star a concept for the shortlist.
   Rendered in a shadow root so it never inherits or leaks a concept's styles.
   Links are relative so everything also works from a downloaded folder. */
(function () {
  var CONCEPTS = [
    { slug: '01-signature', name: 'Signature', type: 'Barfoot classic', motion: 'Animated',
      desc: 'Barfoot DNA done premium. Jot\'s portrait with the yellow SOLD sign and his award, plus Ask Jot AI right in the hero for instant answers about his homes and process.' },
    { slug: '02-the-wall', name: 'The Wall', type: 'Listings-first', motion: 'Highly animated',
      desc: 'A living wall of Jot\'s real listings, styled like his TikTok grid. Describe your next home to the AI home finder and watch the wall rearrange to match.' },
    { slug: '03-the-story', name: 'The Story', type: 'Cinematic', motion: 'Highly animated',
      desc: 'A cinematic opening: tell Jot your move in one line and AI writes your three-chapter story, in English or Punjabi. Then his story plays out in pinned chapters.' },
    { slug: '04-dashboard', name: 'Dashboard', type: 'App-like', motion: 'Interactive',
      desc: 'Jot\'s profile as a live dashboard. Ask it anything in the AI command bar and the matching tiles light up: stats, award, listings, socials and reviews.' },
    { slug: '05-royal', name: 'Royal', type: 'Bold', motion: 'Animated',
      desc: 'Royal blue at full volume. Describe your home and the AI reel hook generator writes the scroll-stopping opener Jot would film, inside a phone frame.' }
  ];
  var KEY = 'jp-shortlist';
  function getList() { try { return JSON.parse(localStorage.getItem(KEY) || '[]').filter(function (s) { return CONCEPTS.some(function (c) { return c.slug === s; }); }); } catch (e) { return []; } }
  function setList(l) { try { localStorage.setItem(KEY, JSON.stringify(l)); } catch (e) {} }
  function toggle(slug) { var l = getList(), k = l.indexOf(slug); if (k > -1) l.splice(k, 1); else l.push(slug); setList(l); return l; }
  window.JP_CONCEPTS = { list: CONCEPTS, getList: getList, setList: setList, toggle: toggle, key: KEY };

  var m = location.pathname.match(/\/designs\/(\d\d-[a-z-]+)(\/|$)/);
  var i = m ? CONCEPTS.findIndex(function (c) { return c.slug === m[1]; }) : -1;
  if (i < 0) return;
  var cur = CONCEPTS[i], prev = CONCEPTS[(i + CONCEPTS.length - 1) % CONCEPTS.length], next = CONCEPTS[(i + 1) % CONCEPTS.length];
  // Build links from this script's own URL (assets/concepts.js), so they work with or without a trailing slash and from a downloaded folder.
  var script = document.currentScript || document.querySelector('script[src*="concepts.js"]');
  var ROOT = new URL('../', script.src).href;
  var href = function (c) { return ROOT + 'designs/' + c.slug + '/index.html'; };
  var GALLERY = ROOT + 'index.html';
  var num = function (c) { return c.slug.slice(0, 2); };
  var mobileBottom = (script && +script.getAttribute('data-mobile-bottom')) || 84;
  var star = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.7l5.9-.9z"/></svg>';
  var grid = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>';

  var host = document.createElement('div');
  host.setAttribute('data-concept-switcher', '');
  var root = host.attachShadow({ mode: 'open' });
  root.innerHTML =
    '<style>' +
    ':host{all:initial}' +
    '.bar{position:fixed;left:16px;bottom:16px;z-index:2147483000;display:flex;align-items:center;gap:2px;' +
    'font:600 13px/1 "Instrument Sans",system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;background:rgba(0,27,61,.94);' +
    'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.16);border-radius:999px;' +
    'padding:4px;box-shadow:0 14px 34px -12px rgba(0,0,0,.55)}' +
    'a,button{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:999px;color:#fff;white-space:nowrap}' +
    'a:hover,button:hover{background:rgba(255,255,255,.13)}' +
    'a:focus-visible,button:focus-visible{outline:2px solid #F8C00B;outline-offset:1px}' +
    '.ic{width:36px;padding:0;justify-content:center;font-size:18px}' +
    '.ic svg{width:17px;height:17px}' +
    '.tag{color:#F8C00B}' +
    '.sub{color:#A9C2E2;font-weight:500}' +
    '.fav[aria-pressed="true"]{color:#F8C00B}.fav[aria-pressed="true"] svg{fill:currentColor}' +
    '.sep{width:1px;height:20px;background:rgba(255,255,255,.18);margin:0 2px}' +
    '.menu{position:absolute;left:0;bottom:calc(100% + 8px);min-width:290px;background:#001B3D;border:1px solid rgba(255,255,255,.16);' +
    'border-radius:18px;padding:6px;box-shadow:0 22px 44px -16px rgba(0,0,0,.65);display:none;max-height:70vh;overflow:auto}' +
    '.menu.open{display:block}' +
    '.menu ul{list-style:none;margin:0;padding:0}' +
    '.menu a{display:flex;width:100%;height:auto;min-height:44px;padding:10px 12px;border-radius:12px;justify-content:space-between;gap:14px}' +
    '.menu a[aria-current]{background:rgba(248,192,11,.16)}' +
    '.menu small{color:#A9C2E2;font-weight:500;font-size:12px}' +
    '.menu .st{color:#F8C00B;font-size:13px;margin-left:6px}' +
    '.vh{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' +
    '.menu hr{border:0;border-top:1px solid rgba(255,255,255,.12);margin:6px 4px}' +
    '.toast{position:absolute;left:0;bottom:calc(100% + 8px);background:#F8C00B;color:#002A5C;font-weight:700;font-size:12.5px;padding:8px 12px;border-radius:999px;white-space:nowrap;opacity:0;transform:translateY(4px);transition:opacity .2s,transform .2s;pointer-events:none}' +
    '.toast.on{opacity:1;transform:none}' +
    '@media (max-width:760px){.bar{left:50%;transform:translateX(-50%);bottom:calc(' + mobileBottom + 'px + env(safe-area-inset-bottom))}.sub,.name{display:none}.menu{left:50%;transform:translateX(-50%);min-width:min(290px,calc(100vw - 32px))}.toast{left:50%;transform:translate(-50%,4px)}.toast.on{transform:translate(-50%,0)}}' +
    '@media (prefers-reduced-motion:reduce){.toast{transition:none}}' +
    '@media print{.bar{display:none}}' +
    '</style>' +
    '<nav class="bar" aria-label="Design concepts">' +
    '<a class="ic" href="' + GALLERY + '" aria-label="All concepts" title="All concepts">' + grid + '</a>' +
    '<span class="sep" aria-hidden="true"></span>' +
    '<a class="ic" href="' + href(prev) + '" aria-label="Previous concept: ' + prev.name + '" title="' + prev.name + '">&#8249;</a>' +
    '<button type="button" class="label" aria-expanded="false" aria-controls="jp-menu" aria-label="Concept ' + num(cur) + ', ' + cur.name + '. Change style">' +
    '<span class="tag">' + num(cur) + '</span><span class="name">' + cur.name + '</span><span class="sub">&middot; ' + cur.type + '</span> <span aria-hidden="true">&#9662;</span></button>' +
    '<a class="ic" href="' + href(next) + '" aria-label="Next concept: ' + next.name + '" title="' + next.name + '">&#8250;</a>' +
    '<span class="sep" aria-hidden="true"></span>' +
    '<button type="button" class="ic fav" aria-pressed="false">' + star + '</button>' +
    '<div class="menu" id="jp-menu"><ul>' +
    '<li><a href="' + GALLERY + '">All concepts <small>gallery &amp; shortlist</small></a></li></ul><hr><ul>' +
    CONCEPTS.map(function (c, k) {
      return '<li><a href="' + href(c) + '"' + (k === i ? ' aria-current="page"' : '') + ' data-slug="' + c.slug + '">' +
        '<span>' + num(c) + ' &nbsp;' + c.name + '<span class="st" hidden><span aria-hidden="true">&#9733;</span><span class="vh"> (shortlisted)</span></span></span> <small>' + c.type + '</small></a></li>';
    }).join('') +
    '</ul></div><span class="toast" role="status" aria-live="polite"></span></nav>';

  var btn = root.querySelector('button.label'), menu = root.querySelector('.menu'), fav = root.querySelector('.fav'), toast = root.querySelector('.toast');
  function paint() {
    var l = getList(), on = l.indexOf(cur.slug) > -1;
    fav.setAttribute('aria-pressed', on);
    fav.setAttribute('aria-label', on ? 'Remove ' + cur.name + ' from shortlist' : 'Add ' + cur.name + ' to shortlist');
    fav.title = on ? 'On your shortlist' : 'Add to shortlist';
    Array.prototype.forEach.call(root.querySelectorAll('[data-slug]'), function (a) { a.querySelector('.st').hidden = l.indexOf(a.getAttribute('data-slug')) < 0; });
  }
  var tt;
  fav.addEventListener('click', function () {
    var on = toggle(cur.slug).indexOf(cur.slug) > -1; paint();
    toast.textContent = on ? 'Added to your shortlist' : 'Removed from your shortlist';
    toast.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('on'); }, 1800);
  });
  window.addEventListener('storage', function (e) { if (e.key === KEY) paint(); });
  paint();

  function setOpen(o) { menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!menu.classList.contains('open')); });
  document.addEventListener('click', function () { setOpen(false); });
  root.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { setOpen(false); btn.focus(); } });

  // Leave room at the end of the page so the bar never covers footer content.
  var footers = document.querySelectorAll('footer'), last = footers[footers.length - 1];
  if (last) { var pad = parseFloat(getComputedStyle(last).paddingBottom) || 0; last.style.paddingBottom = (pad + 64) + 'px'; }
  document.body.appendChild(host);
})();

// snapshotDoc(doc, win) -> one capture step: the LAYOUT and RULES of the page on screen. Never reads typed values.
// It must stay fully self-contained (no imports, no outer variables): the bookmarklet is built from
// snapshotDoc.toString(), and the same function runs on saved HTML through jsdom.
export function snapshotDoc(doc, win) {
  const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
  const esc = (s) => (win.CSS && win.CSS.escape ? win.CSS.escape(s) : String(s).replace(/([^\w-])/g, '\\$1'));
  const uniq = (a) => [...new Set(a)];
  const stripUrl = (u) => String(u || '').split('#')[0].split('?')[0]; // never keep query strings (they can hold tokens)
  const OPTION_CAP = 500;
  // Live browser: real layout. Saved HTML (jsdom): no layout, so judge by markup and stylesheet rules in the file.
  const live = !!(doc.body && doc.body.getClientRects().length);
  const hiddenByMarkup = (el) => {
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const st = (n.getAttribute('style') || '').replace(/\s/g, '').toLowerCase();
      if (n.hasAttribute('hidden') || /display:none|visibility:hidden/.test(st)) return true;
      try { if (win.getComputedStyle(n).display === 'none') return true; } catch (e) { /* no computed style: ignore */ }
    }
    return false;
  };
  const WIDGET = '.chosen-container, .select2-container, .ms-parent';
  const shown = (el) => (live ? !!(el.offsetParent || el.getClientRects().length) : !hiddenByMarkup(el));
  const visible = (el) =>
    shown(el) || (el.tagName === 'SELECT' && !!el.nextElementSibling && el.nextElementSibling.matches(WIDGET) && shown(el.nextElementSibling));
  const selectorOf = (el) => (el.id ? '#' + esc(el.id) : el.name ? `${el.tagName.toLowerCase()}[name="${el.name}"]` : null);
  const labelOf = (el) => {
    let l = el.id && doc.querySelector(`label[for="${esc(el.id)}"]`);
    l = l || el.closest('label');
    return l ? norm(l.textContent) : el.getAttribute('aria-label') || '';
  };
  const groupOf = (el) => {
    const fs = el.closest('fieldset');
    const legend = fs && fs.querySelector('legend');
    if (legend) return norm(legend.textContent);
    for (let n = el; n && n !== doc.body; n = n.parentElement)
      for (let p = n.previousElementSibling; p; p = p.previousElementSibling)
        if (/^H[2-6]$/.test(p.tagName) && norm(p.textContent)) return norm(p.textContent);
    return '';
  };
  const stepTitle = () => {
    const cur = doc.querySelector('.steps li.current a');
    if (cur) {
      const c = cur.cloneNode(true);
      c.querySelectorAll('.current-info, .audible, .number, .sr-only').forEach((n) => n.remove());
      return norm(c.textContent);
    }
    const hs = [...doc.querySelectorAll('section.active h2, h2, h3')].filter(visible);
    return hs.length ? norm(hs[0].textContent) : norm(doc.title);
  };
  const nearestControl = (el) => {
    const box = el.closest('div, td, li, p, fieldset, tr');
    const c = box && box.querySelector('input, select, textarea');
    return c ? selectorOf(c) : null;
  };

  const controls = [...doc.querySelectorAll('input, select, textarea')].filter(
    (el) => !['hidden', 'button', 'submit', 'reset', 'image'].includes(el.type) && visible(el)
  );
  const fields = controls.map((el) => {
    const isSel = el.tagName === 'SELECT';
    const opts = isSel ? [...el.options].filter((o) => norm(o.textContent) && !/^[-\s]*select[-\s]*$/i.test(norm(o.textContent))) : [];
    return {
      selector: selectorOf(el),
      name: el.getAttribute('name') || undefined,
      tag: el.tagName.toLowerCase(),
      type: el.type,
      label: labelOf(el),
      group: groupOf(el),
      placeholder: el.getAttribute('placeholder') || '',
      required: el.hasAttribute('required') || undefined,
      readonly: el.hasAttribute('readonly') || undefined,
      disabled: el.hasAttribute('disabled') || undefined,
      maxlength: el.getAttribute('maxlength') ? Number(el.getAttribute('maxlength')) : undefined,
      minlength: el.getAttribute('minlength') ? Number(el.getAttribute('minlength')) : undefined,
      pattern: el.getAttribute('pattern') || undefined,
      accept: el.getAttribute('accept') || undefined,
      multiple: el.hasAttribute('multiple') || undefined,
      className: (el.getAttribute('class') || '').slice(0, 120) || undefined,
      // Radio/checkbox value attributes are the portal's fixed vocabulary, not what the advocate typed.
      valueAttr: /radio|checkbox/.test(el.type) ? el.getAttribute('value') || undefined : undefined,
      // Dropdown vocabulary (text and code) is portal structure. Capped: a "my cases" style list could hold client data.
      options: isSel ? opts.slice(0, OPTION_CAP).map((o) => norm(o.textContent)) : undefined,
      optionValues: isSel ? opts.slice(0, OPTION_CAP).map((o) => o.getAttribute('value') || '') : undefined,
      optionCount: isSel ? el.options.length : undefined,
      optionsTruncated: isSel && opts.length > OPTION_CAP ? true : undefined,
      hint: el.type === 'file' ? norm((el.closest('div, td, li, p, fieldset') || el.parentElement).textContent).slice(0, 300) : undefined
    };
  });

  const ERR = '[class*=error], [class*=invalid], [class*=danger], [class*=alert], [role=alert], [id*=err]';
  const validationMessages = uniq(
    [...doc.querySelectorAll(ERR)].filter(visible).map((el) => ({ text: norm(el.textContent).slice(0, 300), near: nearestControl(el) }))
      .filter((m) => m.text.length > 2).map((m) => JSON.stringify(m))
  ).map((s) => JSON.parse(s)).slice(0, 60);
  const helpTexts = uniq(
    [...doc.querySelectorAll('.help-block, .form-text, .text-muted, small, .hint, .tooltip-inner, [class*=instruction], [class*=note], [class*=guideline], [class*=info]')]
      .filter(visible).map((el) => norm(el.textContent)).filter((t) => t.length > 3 && t.length <= 400)
  ).slice(0, 60);
  const tooltips = [...doc.querySelectorAll('[title], [data-bs-original-title], [data-original-title]')].filter(visible)
    .map((el) => ({ on: selectorOf(el) || el.tagName.toLowerCase(), text: norm(el.getAttribute('title') || el.getAttribute('data-bs-original-title') || el.getAttribute('data-original-title')).slice(0, 200) }))
    .filter((t) => t.text).slice(0, 60);
  const buttons = [...doc.querySelectorAll('button, input[type=button], input[type=submit], a.btn, a[role=button], a[href^="#"]')].filter(visible)
    .map((b) => ({ text: norm(b.textContent || b.getAttribute('value') || '').slice(0, 60), id: b.id || undefined, href: b.getAttribute('href') ? stripUrl(b.getAttribute('href')) : undefined, disabled: b.hasAttribute('disabled') || undefined }))
    .filter((b) => b.text || b.id).slice(0, 80);
  const tables = [...doc.querySelectorAll('table')].filter(visible)
    .map((t) => ({ id: t.id || undefined, headers: [...t.querySelectorAll('th')].map((h) => norm(h.textContent)).filter(Boolean).slice(0, 20), rowCount: t.querySelectorAll('tbody tr').length }))
    .filter((t) => t.headers.length).slice(0, 20);
  const modals = [...doc.querySelectorAll('.modal, [role=dialog]')].filter(visible)
    .map((m) => ({ id: m.id || undefined, title: norm((m.querySelector('.modal-title, h1, h2, h3, h4, h5') || {}).textContent), text: norm(m.textContent).slice(0, 500) })).slice(0, 10);

  // Which script/endpoints the page uses. URLs keep path only, never query strings.
  let requests = [];
  try {
    requests = uniq(win.performance.getEntriesByType('resource').filter((e) => /xmlhttprequest|fetch/.test(e.initiatorType))
      .map((e) => JSON.stringify({ path: stripUrl(e.name).replace(/^https?:\/\/[^/]+/, ''), type: e.initiatorType, ms: Math.round(e.duration) }))).map((s) => JSON.parse(s)).slice(0, 80);
  } catch (e) { /* no performance API (saved HTML) */ }
  const scriptFiles = uniq([...doc.querySelectorAll('script[src]')].map((s) => stripUrl(s.getAttribute('src')).replace(/^https?:\/\/[^/]+/, ''))).slice(0, 80);
  const jq = win.jQuery;
  const libraries = jq
    ? { jquery: jq.fn && jq.fn.jquery, chosen: !!(jq.fn && jq.fn.chosen), select2: !!(jq.fn && jq.fn.select2), steps: !!(jq.fn && jq.fn.steps), datepicker: !!(jq.fn && jq.fn.datepicker), validate: !!(jq.fn && jq.fn.validate), bootstrap: !!(jq.fn && (jq.fn.modal || jq.fn.tooltip)) }
    : undefined;

  return {
    path: win.location ? win.location.pathname : '',
    step: stepTitle(),
    fields,
    pageTitle: norm(doc.title).slice(0, 120),
    hasFileUpload: fields.some((f) => f.type === 'file'),
    navControls: buttons.map((b) => b.text).filter(Boolean),
    buttons, validationMessages, helpTexts, tooltips, tables, modals, requests, scriptFiles, libraries,
    iframeCount: doc.querySelectorAll('iframe').length,
    // Browser facts help us build the extension for the same setup (no personal data).
    env: win.navigator ? { userAgent: win.navigator.userAgent, language: win.navigator.language, viewport: [win.innerWidth, win.innerHeight] } : undefined,
    capturedAt: new Date().toISOString()
  };
}

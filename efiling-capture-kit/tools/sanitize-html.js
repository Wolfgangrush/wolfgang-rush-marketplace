// sanitizedHtml(doc, win) -> a copy of the page that is safe to share: the structure, CSS classes, labels and
// dropdown vocabulary, with scripts, tokens, hidden inputs, cookies, comments, typed values and URL query strings removed.
// Self-contained (no imports), because the bookmarklet is built from sanitizedHtml.toString().
export function sanitizedHtml(doc, win) {
  const stripUrl = (u) => String(u || '').split('#')[0].split('?')[0];
  const root = doc.documentElement.cloneNode(true);
  root.querySelectorAll('script, noscript, template, object, embed, link[rel=preload], link[rel=prefetch]').forEach((n) => n.remove());
  // comments
  const walker = doc.createTreeWalker(root, 128 /* NodeFilter.SHOW_COMMENT */);
  const comments = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  comments.forEach((c) => c.remove());
  // hidden inputs carry CSRF tokens and session state
  root.querySelectorAll('input[type=hidden]').forEach((n) => n.remove());
  // typed or pre-filled text: keep only the fixed vocabulary of radios, checkboxes and buttons
  root.querySelectorAll('input').forEach((n) => {
    const t = (n.getAttribute('type') || 'text').toLowerCase();
    if (!['radio', 'checkbox', 'button', 'submit', 'reset', 'image', 'file'].includes(t)) n.removeAttribute('value');
    n.removeAttribute('checked');
  });
  root.querySelectorAll('textarea').forEach((n) => { n.textContent = ''; });
  root.querySelectorAll('select option').forEach((o) => o.removeAttribute('selected'));
  root.querySelectorAll('iframe').forEach((n) => n.removeAttribute('srcdoc'));
  const SENSITIVE = /token|csrf|session|nonce|auth|secret|password|cookie/i;
  // data-* attributes can echo field values; only structural ones (widget wiring) survive.
  const SAFE_DATA = /^data-(bs-|toggle|target|dismiss|placement|backdrop|keyboard|parent|ride|slide|step|role|type|widget)/i;
  root.querySelectorAll('*').forEach((el) => {
    for (const a of [...el.attributes]) {
      const name = a.name.toLowerCase();
      if (/^on/.test(name) || SENSITIVE.test(name) || (/^data-/.test(name) && !SAFE_DATA.test(name))) { el.removeAttribute(a.name); continue; }
      if (['href', 'src', 'action', 'formaction'].includes(name)) { el.setAttribute(a.name, stripUrl(a.value)); continue; } // query strings go, the link stays
      if (a.value.length > 12 && SENSITIVE.test(a.value)) el.removeAttribute(a.name);
    }
  });
  // Case lists, payment histories and similar tables hold real data: keep the headers and one blanked row only.
  root.querySelectorAll('table tbody').forEach((tb) => {
    const rows = [...tb.querySelectorAll('tr')];
    rows.slice(1).forEach((r) => r.remove());
    if (rows[0]) rows[0].querySelectorAll('td, th').forEach((c) => { c.textContent = '[row data removed]'; });
    tb.setAttribute('data-rows-removed', String(rows.length));
  });
  return '<!doctype html>\n' + root.outerHTML;
}

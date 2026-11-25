// Builds the one-click capture bookmarklets. Outputs: bookmarklet.txt and bookmarklet-layout-only.txt
// (paste each as a bookmark's URL). When clicked, on the page the advocate is looking at, in their own browser:
//   - reads the page LAYOUT and RULES (labels, ids, dropdown vocabulary, required flags, validation and help text,
//     button list, endpoint paths), never any typed value,
//   - "capture": also saves a sanitised copy of the page (for building faithful test pages),
//   - "layout only": no page copy at all (use on pages that may show real client or case data),
//   - downloads ONE file, step-<time>.json. It sends nothing anywhere.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { snapshotDoc } from './snapshot.js';
import { sanitizedHtml } from './sanitize-html.js';

export function bookmarkletSource({ withHtml = true } = {}) {
  const body = `(function(){
    var snap = ${snapshotDoc.toString()};
    ${withHtml ? `var clean = ${sanitizedHtml.toString()};` : ''}
    var s = snap(document, window);
    s.host = location.hostname;
    ${withHtml ? 's.html = clean(document, window);' : 's.layoutOnly = true;'}
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(s)], { type: 'application/json' }));
    a.download = 'step-' + Date.now() + '.json';
    document.body.appendChild(a); a.click(); a.remove();
  })();`;
  return 'javascript:' + encodeURIComponent(body);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
  for (const [file, opts] of [['bookmarklet.txt', {}], ['bookmarklet-layout-only.txt', { withHtml: false }]]) {
    fs.writeFileSync(path.join(dir, file), bookmarkletSource(opts));
    console.log(`wrote ${file} (${fs.statSync(path.join(dir, file)).size} bytes)`);
  }
}

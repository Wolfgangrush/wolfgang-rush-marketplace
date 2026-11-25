// Fallback when the bookmarklet is blocked: turn a saved page (.html) into a capture step.
// Usage: node tools/html-to-step.mjs captures/page1.html [--title "Court Details"] [--host filing.ecourts.gov.in]
// Values are never read. Scripts, hidden inputs (tokens), cookies and typed text in the file are ignored.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { snapshotDoc } from './snapshot.js';
import { sanitizedHtml } from './sanitize-html.js';

export function htmlToStep(html, { title, host } = {}) {
  const dom = new JSDOM(html, { runScripts: undefined }); // scripts are never executed
  const step = snapshotDoc(dom.window.document, dom.window);
  if (title) step.step = title;
  step.host = host || 'filing.ecourts.gov.in';
  step.html = sanitizedHtml(dom.window.document, dom.window);
  return step;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const file = args[0];
  const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
  if (!file) { console.error('usage: node tools/html-to-step.mjs <saved.html> [--title "Step name"] [--host example.gov.in]'); process.exit(2); }
  const step = htmlToStep(fs.readFileSync(file, 'utf8'), { title: opt('--title'), host: opt('--host') });
  const out = file.replace(/\.html?$/i, '') + '.step.json';
  fs.writeFileSync(out, JSON.stringify(step));
  console.log(`wrote ${out}: step "${step.step}", ${step.fields.length} fields`);
}

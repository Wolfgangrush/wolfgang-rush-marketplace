// Merge capture files into one recording, write the sanitised pages, and refuse anything that looks personal.
// Usage: node tools/merge-and-check.mjs   (reads captures/*.json, forbid.txt; writes recording.json and pages/*.html)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Patterns that should never appear in a layout capture. A match means a label, dropdown or page text carried real data.
export const PII_PATTERNS = [
  ['Aadhaar-like 12 digits', /\b[2-9]\d{3}[\s-]?\d{4}[\s-]?\d{4}\b/],
  ['PAN', /\b[A-Z]{3}[ABCFGHJLPT][A-Z]\d{4}[A-Z]\b/],
  ['email address', /[\w.+-]+@[\w-]+\.[\w.-]+/],
  ['10-digit mobile number', /(?<!\d)(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}(?!\d)/],
  ['case / CNR number', /\b[A-Z]{4}\d{2}\d{6}\d{4}\b/]
];

const visibleText = (html) => String(html).replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' ');

// forbid = words that must never appear: the advocate's own name, bar code, firm, mobile, email, the dummy client's name...
export function scan(recording, { forbid = [], pages = {} } = {}) {
  const hits = [];
  const check = (where, text) => {
    for (const [name, re] of PII_PATTERNS) {
      const m = text.match(re);
      if (m) hits.push({ step: where, kind: name, sample: m[0].replace(/\d(?=\d{2})/g, '*') });
    }
    for (const w of forbid.map((x) => x.trim()).filter(Boolean)) {
      if (text.toLowerCase().includes(w.toLowerCase())) hits.push({ step: where, kind: 'forbidden word', sample: w.slice(0, 2) + '***' });
    }
  };
  recording.steps.forEach((s, i) => check(s.step || `#${i + 1}`, JSON.stringify(s)));
  for (const [name, html] of Object.entries(pages)) check(`page ${name}`, visibleText(html));
  return hits;
}

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'step';

// Same step captured several times is kept (they differ: empty form, after an error, dropdown opened...).
export function merge(steps) {
  const host = steps.find((s) => s.host)?.host;
  const seen = new Map();
  const pages = {};
  for (const s of steps) {
    const { host: _h, html, ...rest } = s;
    const key = `${rest.step}|${rest.fields.map((f) => f.selector).join(',')}|${(rest.validationMessages || []).map((m) => m.text).join('/')}|${(rest.modals || []).length}`;
    seen.set(key, rest);
    if (html) pages[key] = html;
  }
  const list = [...seen.entries()].map(([key, step], i) => ({ key, step, n: i + 1 }));
  const named = {};
  for (const { key, step, n } of list) if (pages[key]) named[`${String(n).padStart(2, '0')}-${slug(step.step)}.html`] = pages[key];
  return { recording: { version: 1, host, steps: list.map((x) => x.step) }, pages: named };
}

const here = path.dirname(fileURLToPath(import.meta.url));
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(path.join(here, 'merge-and-check.mjs'))) {
  const kit = path.join(here, '..');
  const dir = path.join(kit, 'captures');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')) : [];
  if (!files.length) { console.error('No capture files found in captures/. Capture at least one step first.'); process.exit(2); }
  const forbidFile = path.join(kit, 'forbid.txt');
  const forbid = fs.existsSync(forbidFile) ? fs.readFileSync(forbidFile, 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.trim().startsWith('#')) : [];
  if (!forbid.length) console.warn('WARNING: forbid.txt is missing or empty. Copy forbid.example.txt to forbid.txt and add your own name, bar code, mobile, email and the dummy client\'s name, one per line.');
  const { recording, pages } = merge(files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))));
  const hits = scan(recording, { forbid, pages });
  if (hits.length) {
    console.error('STOP: possible personal data found. Do NOT share these captures.');
    for (const h of hits) console.error(`  - ${h.step}: ${h.kind} (${h.sample})`);
    process.exit(1);
  }
  fs.writeFileSync(path.join(kit, 'recording.json'), JSON.stringify(recording, null, 2));
  fs.rmSync(path.join(kit, 'pages'), { recursive: true, force: true });
  fs.mkdirSync(path.join(kit, 'pages'), { recursive: true });
  for (const [name, html] of Object.entries(pages)) fs.writeFileSync(path.join(kit, 'pages', name), html);
  const nf = recording.steps.reduce((n, s) => n + s.fields.length, 0);
  console.log(`OK: ${recording.steps.length} capture(s), ${nf} fields, ${Object.keys(pages).length} sanitised page(s) written (recording.json, pages/).`);
  console.log('Captured: ' + recording.steps.map((s) => s.step).join(' | '));
}

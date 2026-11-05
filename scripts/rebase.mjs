// Post-build step for sub-folder deploys (BASE_PATH set).
// Prefixes root-relative links and asset paths in the built HTML/XML with the base path,
// and puts Netlify's _headers, 404 page and a root redirect at the publish root.
import fs from 'node:fs';
import path from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/+$/, '');
if (!base) { console.log('rebase: no BASE_PATH, nothing to do'); process.exit(0); }

const root = path.resolve('dist');
const out = path.join(root, base);
const attrs = ['href', 'src', 'srcset', 'data-src', 'data-srcset', 'data-full', 'imagesrcset', 'action'];
const fix = (url) => (url.startsWith('/') && !url.startsWith('//') && !url.startsWith(base + '/') && url !== base ? base + url : url);
const fixList = (v) => v.split(',').map((part) => { const [u, ...rest] = part.trim().split(/\s+/); return [fix(u), ...rest].join(' '); }).join(', ');

let files = 0;
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.html$/.test(e.name)) {
      let s = fs.readFileSync(p, 'utf8');
      s = s.replace(new RegExp(`\\s(${attrs.join('|')})="([^"]*)"`, 'g'), (m, a, v) => ` ${a}="${/srcset/i.test(a) ? fixList(v) : fix(v)}"`);
      fs.writeFileSync(p, s); files++;
    }
  }
};
walk(out);

// Netlify reads these from the publish root.
const headers = path.join(out, '_headers');
if (fs.existsSync(headers)) {
  const h = fs.readFileSync(headers, 'utf8').replace(/^\/(?!\*)/gm, `${base}/`).replace(/^\/\*/gm, `${base}/*`);
  fs.writeFileSync(path.join(root, '_headers'), h); fs.rmSync(headers);
}
if (fs.existsSync(path.join(out, '404.html'))) fs.copyFileSync(path.join(out, '404.html'), path.join(root, '404.html'));
fs.writeFileSync(path.join(root, '_redirects'), `/  ${base}/  302\n`);
for (const f of ['robots.txt']) if (fs.existsSync(path.join(out, f))) fs.rmSync(path.join(out, f));
console.log(`rebase: prefixed ${files} HTML files with ${base}`);

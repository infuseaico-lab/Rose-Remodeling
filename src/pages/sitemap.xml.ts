import type { APIRoute } from 'astro';

// Lists every built page. Astro collects pages at build time via import.meta.glob.
const pages = import.meta.glob('./**/*.astro', { eager: true });
import { servicePages } from '../data/servicePages';
import { galleries } from '../data/galleries';

export const GET: APIRoute = ({ site }) => {
  const paths = new Set<string>(['/']);
  for (const file of Object.keys(pages)) {
    if (file.includes('[') || file.endsWith('404.astro')) continue;
    const p = file.replace(/^\.\//, '/').replace(/index\.astro$/, '').replace(/\.astro$/, '/');
    paths.add(p);
  }
  servicePages.forEach((s) => paths.add(`/services/${s.slug}/`));
  galleries.forEach((g) => paths.add(`/portfolio/photo-galleries/${g.slug}/`));
  const today = new Date().toISOString().slice(0, 10);
  const prio = (p: string) => (p === '/' ? '1.0' : p.startsWith('/services/') ? '0.9' : p === '/free-estimate/' || p === '/contact/' ? '0.8' : '0.7');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths].sort().map((p) => `  <url><loc>${new URL(p, site).href}</loc><lastmod>${today}</lastmod><priority>${prio(p)}</priority></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

import { defineConfig } from 'astro/config';

// Deploy target is set with environment variables (see netlify.toml and DEPLOY.md):
//   SITE_URL   origin the site is served from     (default: the business domain)
//   BASE_PATH  sub-folder the site lives under     (default: none, i.e. the domain root)
// Example for the agency preview: SITE_URL=https://infusedev.online BASE_PATH=/projects/rose-remodeling
const site = process.env.SITE_URL || 'https://roseremodelinganddesign.com';
const base = (process.env.BASE_PATH || '').replace(/\/+$/, '');

export default defineConfig({
  site,
  base: base || undefined,
  trailingSlash: 'always',
  // With a base path, files are written under dist/<base>/ so the folder structure matches the URLs.
  outDir: base ? `./dist${base}` : './dist',
  // Inline CSS into each page: removes a render-blocking request (faster first paint on mobile).
  build: { inlineStylesheets: 'always', format: 'directory' },
  compressHTML: true,
});

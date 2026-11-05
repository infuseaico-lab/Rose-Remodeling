import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roseremodelinganddesign.com',
  trailingSlash: 'always',
  // Inline CSS into each page: removes a render-blocking request (faster first paint on mobile).
  build: { inlineStylesheets: 'always', format: 'directory' },
  compressHTML: true,
});

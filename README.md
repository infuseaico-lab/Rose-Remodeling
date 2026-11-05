# Rose Remodeling & Design website

Astro static site (mockup direction C, "Bright & Friendly").

```bash
npm install
npm run dev     # local preview
npm run build   # static output in dist/
```

Business facts, services, reviews and FAQ live in `src/data/site.ts`.

## Open items
- Real project photos (placeholders are labelled boxes; use `astro:assets` `<Image>` for WebP + lazy-loading)
- Confirm service-area cities and change-order policy (`src/data/site.ts`)
- Set `formAction` to a form endpoint; until then the form opens the visitor's email app
- Later: city + service landing pages

## SEO & performance

- Unique title and description per page; canonical URL, Open Graph/Twitter tags (`src/layouts/Base.astro`)
- Structured data: GeneralContractor (every page), BreadcrumbList (inner pages), Service (service pages), FAQPage (home)
- `sitemap.xml` is generated at build (`src/pages/sitemap.xml.ts`) and listed in `public/robots.txt`; submit it in Google Search Console
- Fonts are self-hosted (`public/fonts`), CSS is inlined per page, all photos are WebP with 800px versions for phones
- `public/_headers` sets long cache times on Netlify / Cloudflare Pages

Before launch: set up the domain on the host, add the site to Google Search Console and submit the sitemap, and keep the Google Business Profile name, phone and city matching the site.

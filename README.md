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

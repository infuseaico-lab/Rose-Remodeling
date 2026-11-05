# Deploying to Netlify at infusedev.online/projects/rose-remodeling/

The repo is ready for Netlify. `netlify.toml` builds the site into a sub-folder, hides it from Google
(it's a preview) and turns on Netlify Forms for the estimate form.

Preview URL once live: **https://infusedev.online/projects/rose-remodeling/**

## What the preview build does

| Setting (netlify.toml) | Value | Effect |
|---|---|---|
| `SITE_URL` | `https://infusedev.online` | Canonical URLs, sitemap and share images use this domain |
| `BASE_PATH` | `/projects/rose-remodeling` | Every link and image is prefixed with this folder |
| `NOINDEX` | `true` | Every page gets `noindex, nofollow` so the preview never competes with the real site on Google |
| `FORMS` | `netlify` | Estimate forms post to Netlify Forms and land on a Thank You page |

Want a different folder (for example `/projects/rose`)? Change `BASE_PATH` and redeploy.

## Step 1: Put the code on the branch Netlify will deploy

Merge `claude/funny-franklin-mnx4p6` into `main` on GitHub (or tell Netlify to deploy that branch directly in Step 2).

## Step 2: Create the Netlify site for this project

1. Log in at https://app.netlify.com.
2. **Add new site → Import an existing project → GitHub**.
3. Pick **infuseaico-lab/Rose-Remodeling** and the branch from Step 1.
4. Leave the build settings as Netlify fills them in from `netlify.toml`:
   build command `npm run build`, publish directory `dist`.
5. Click **Deploy**.
6. **Site configuration → Change site name** to something like `rose-remodeling-infuse`.
7. Open `https://rose-remodeling-infuse.netlify.app/` and check it redirects to
   `/projects/rose-remodeling/` and the site loads.

## Step 3: Serve it under infusedev.online/projects/rose-remodeling/

This depends on where **infusedev.online** is hosted.

### A) infusedev.online is already a Netlify site (recommended)

In the **infusedev.online** site's repo, add this to its `netlify.toml` (or the equivalent two lines to its `_redirects` file), then deploy that site:

```toml
[[redirects]]
  from = "/projects/rose-remodeling"
  to = "/projects/rose-remodeling/"
  status = 301
  force = true

[[redirects]]
  from = "/projects/rose-remodeling/*"
  to = "https://rose-remodeling-infuse.netlify.app/projects/rose-remodeling/:splat"
  status = 200
  force = true
```

`_redirects` version:

```
/projects/rose-remodeling     /projects/rose-remodeling/                                                  301!
/projects/rose-remodeling/*   https://rose-remodeling-infuse.netlify.app/projects/rose-remodeling/:splat 200!
```

Status `200` is a rewrite: visitors stay on infusedev.online while Netlify serves the project site.
Put these rules **above** any catch-all rule (like `/* /index.html 200`) in the main site.

### B) infusedev.online is hosted somewhere else

Either move the domain to Netlify (Domain management → Add a domain, then update DNS as Netlify shows) and use option A,
or add a reverse-proxy rule on the current host that forwards `/projects/rose-remodeling/*` to
`https://rose-remodeling-infuse.netlify.app/projects/rose-remodeling/`.

### C) Simplest alternative: a subdomain

Use `rose.infusedev.online` instead of a folder: in the project's Netlify site go to
**Domain management → Add a domain → rose.infusedev.online**, add the CNAME record Netlify shows,
and in `netlify.toml` set `SITE_URL = "https://rose.infusedev.online"` and remove `BASE_PATH`.

## Step 4: Turn on the estimate form emails

1. In the project's Netlify site: **Forms → Enable form detection**, then **Deploys → Trigger deploy**.
2. A form named **estimate** appears under Forms.
3. **Forms → Form notifications → Add notification → Email** and enter
   `Adir@RoseRemodelingAndDesign.com` (and anyone else who should get leads).
4. Send a test from the Free Estimate page. You should land on the Thank You page, and the submission appears under Forms.
   Test once on the `.netlify.app` URL and once on infusedev.online. If the infusedev.online version doesn't arrive, use option C (subdomain): the form then posts directly to its own site.

The form includes a hidden spam trap; Netlify's spam filter is on by default.

## Step 5: Check the preview

- [ ] `https://infusedev.online/projects/rose-remodeling/` loads with images, fonts and the logo
- [ ] Menu links, service pages, galleries, videos and Free Estimate open (no 404s)
- [ ] A test estimate reaches Adir's inbox
- [ ] View source shows `<meta name="robots" content="noindex, nofollow">` (preview stays out of Google)

## Later: launching on roseremodelinganddesign.com

1. In `netlify.toml` delete `SITE_URL`, `BASE_PATH` and `NOINDEX` (keep `FORMS = "netlify"`).
2. Netlify: **Domain management → Add a domain → roseremodelinganddesign.com**, update DNS at the registrar, wait for HTTPS.
3. Redeploy. Pages are now indexable, canonical URLs point to the real domain and `robots.txt` lists the sitemap.
4. Google Search Console: add the domain and submit `https://roseremodelinganddesign.com/sitemap.xml`.
5. Set up 301 redirects from important old-site URLs to the new pages so existing rankings carry over.

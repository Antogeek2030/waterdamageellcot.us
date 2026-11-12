# Water Damage Restoration Ellicott City MD

Production-ready Astro website for a local water damage restoration business.

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Deploy the `dist` directory to Cloudflare Pages.

## Cloudflare Pages Deployment

1. Connect your Git repository (or upload the project).
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 22 or later recommended.

## Configuration Notes

- **Phone number**: Replace the placeholder `(410) 555-0199` throughout the site with the real business number.
- **Web3Forms**: Get a free access key at https://web3forms.com and replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro`.
- **Domain**: Site is configured for `https://waterdamagerestorationellicottcitymd.us`. Update `astro.config.mjs` if the domain changes.

## Features

- 20 unique service pages with process, pricing guidance, and FAQs
- Service area pages for local neighborhoods
- SEO: unique titles/descriptions, canonicals, Open Graph, Twitter cards, sitemap, robots.txt, llms.txt
- Accessible markup (skip link, semantic HTML, focus styles, ARIA)
- Sticky mobile click-to-call button
- Contact form with honeypot and client-side success state
- Fast static output suitable for Cloudflare Pages

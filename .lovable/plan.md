# Steinlage Agency Homepage Recreation

Rebuilding the homepage of steinlageagency.com on this project's TanStack Start stack (Astro isn't available here). Same brand identity, copy verbatim, refreshed visual design.

## Brand foundation
- **Logo**: pull the existing Steinlage shield + wordmark from the live site and save as a Lovable asset.
- **Colors**: keep the site's signature Steinlage blue (`#1d70b8`-ish range pulled from the header) as primary, paired with white and a warm neutral. Add a deeper navy for hover/accent states. All colors registered as semantic tokens in `src/styles.css` (no hardcoded utilities).
- **Typography**: clean modern pairing, distinctive but trustworthy for a senior-focused insurance brand. DM Serif Display for headings, Inter for body (loaded via `<link>` in `__root.tsx`, mapped via `@theme`).

## Homepage sections (refreshed layout, original copy)
1. **Top bar**: phone `(636) 561-5060`, Blog, Careers, social icons (Facebook, YouTube).
2. **Header / nav**: Steinlage logo, links to Home, About Us, Medicare, ACA, Partnerships, Webinars, Resources, Contact. (These nav targets stay as anchor links for now since scope is homepage only, no separate route files.)
3. **Hero**: "Over 100 Years of Combined Experience" headline, "To get started, please schedule an appointment today" subhead, Contact Us CTA. Replace stock kitchen photo with a cleaner, more modern lifestyle treatment (warm photographic background with brand-blue overlay gradient).
4. **Three-up feature row**: Financial Advisors / Becoming Medicare Eligible? / Know the Facts, Avoid the Pitfalls. Keep original icon style (line icons in brand blue) and full descriptions. Refresh as cards with subtle elevation instead of flat tiles.
5. **Agency intro band**: "STEINLAGE INSURANCE AGENCY / Strategic Medicare & ACA Planning Starts Here" with the full paragraph and the phone/contact CTA. Two-column layout with supporting imagery.
6. **William H. Steinlage quote block**: full Willa Foster quote, the two follow-up paragraphs, Steinlage signature image. Editorial treatment, generous whitespace.
7. **Family/heritage section**: "Our Family Helping Your Family Since 1950" with the family group photo and CTA. Asymmetric image-text composition.
8. **As Seen On NBC**: thumbnail card linking to the NBC29 video.
9. **Footer CTA strip**: "Contact us Today for a Plan Assessment (636) 561-5060".
10. **Footer**: copyright, Clix Group credit, the three required CMS/Medicare disclaimers verbatim, social links.

## Technical notes
- Single route: rewrite `src/routes/index.tsx` as the homepage. No new route files (scope = homepage only).
- Componentize into `src/components/site/` (Header, Hero, FeatureCards, IntroBand, QuoteBlock, FamilySection, MediaCard, FooterCTA, SiteFooter) to keep `index.tsx` readable.
- Update `__root.tsx` meta (title, description, og tags) to Steinlage's branding. Add Google Fonts `<link>` there.
- Define semantic tokens in `src/styles.css` under `:root` + `@theme inline` (brand-blue, brand-blue-deep, brand-blue-soft, ink, paper, muted). Keep shadcn mapping intact.
- Logo + key imagery saved via `lovable-assets` from the live site URLs.
- Mobile-first responsive, semantic HTML, single `<h1>` (the hero headline), alt text on images, lazy-loaded below-fold images.

## Out of scope
- Inner pages (About, Medicare, ACA, Partnerships, Webinars, Resources, Contact, Blog, Careers). Nav links will point to `#` placeholders until you ask for them.
- CMS, forms, backend (no Lovable Cloud needed).
- Cookie banner.

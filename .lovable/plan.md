# SEO Page Cinematic Experience

## Goal
Replace only the existing `/seo` placeholder with a self-contained cinematic SEO mini-site, leaving every other page and the shared site experience unchanged.

## Build
- Create the 100vh hero with a dark cinematic fallback and the literal `[SEO CINEMATIC VIDEO]` placeholder; do not add video or imagery.
- Add the SEO-only horizontal/scrollable section navigation, search-to-enquiry flow, discoverability, gains, services, responsive process timeline, visibility/reporting mockups, conceptual before/after, opportunity map, future media slots, FAQ, and contact CTA.
- Build one reusable browser mockup within the SEO page and reuse it for all screenshot/dashboard placeholders. Use no fabricated screenshots, rankings, or metrics.
- Keep colors, layout, and motion isolated to this page; use CSS-only motion and honor reduced-motion preferences. Keep headings, links, and FAQ accessible.
- Preserve the existing page-specific SEO metadata and add no other page functionality or content changes.

## Technical details
Implement within `src/routes/seo.tsx` only, with page-scoped styles and a reusable local browser-frame renderer. Use existing design tokens and links; no new packages, assets, or video.

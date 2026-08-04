# Codex task: add a Free Planner page to homesteadkeeper.com

Build a `/planner` page on this Astro site that markets and distributes the free printable
"Homestead Keeper Planner" and funnels visitors to the app. Everything you need is in this
`planner-handoff/` folder. Match the site's existing conventions exactly. Do not introduce a
new design system.

## Repo facts (already true in this repo)
- **Astro** static site. `astro.config.mjs` sets `site: 'https://homesteadkeeper.com'` and
  `trailingSlash: 'always'`. Build with `npm run build`.
- Pages are file-routed in `src/pages/*.astro`. New page => `src/pages/planner.astro` =>
  route `/planner/`.
- Layout: `src/layouts/Layout.astro`, props `{ title, description, path?, image?, jsonLd?,
  noindex? }`. Every page wraps its content in `<Layout ...>`.
- Reusable components in `src/components/`: `SEO`, `Header`, `Footer`, `CTA`, `SectionHeader`
  (`{eyebrow?, title, body?, headingId?}`), `FeatureCards`/`FeatureCard`, `AppScreenshot`,
  `ScreenshotGallery`/`ScreenshotFrame` (has a lightbox), `InternalLinkCards`,
  `PlatformBadges`. Reuse these rather than writing new ones.
- Shared data in `src/data/site.ts`: `site.appStoreUrl`, `site.appStoreLabel`,
  `site.supportEmail`, `site.url`, and `navItems` (the header nav).
- Styles in `src/styles/global.css`. Reuse existing utility classes: `page-hero`, `narrow`,
  `eyebrow`, `lede`, `section`, `section-header`, `card`, `card-grid`, `button`, `button-row`,
  `link-grid`, `link-card`, `callout-card`, `check-list`. Theme color is `#f7eddc`.
- Public assets live in `public/assets/`. Logo: `homestead-keeper-logo.png`.
- Forms POST to an existing endpoint: see `src/components/SupportForm.astro`
  (`<form action={formAction} method="POST">`). Reuse that same provider for the email capture.

## What to build
1. `src/pages/planner.astro` (route `/planner/`), using `Layout` + the components/classes above.
2. Copy assets from this handoff into `public/`:
   - `assets/Homestead-Keeper-Planner.pdf` -> `public/planner/Homestead-Keeper-Planner.pdf`
   - `assets/preview/*.png` -> `public/planner/preview/`
   - `assets/qr.png` -> `public/planner/qr.png` (optional; the page can link to the app directly instead)
3. Add a nav link in `src/data/site.ts` `navItems`: `{ href: '/planner', label: 'Free Planner' }`.
4. Wire the email-gated download (see Access model).

## Page sections (top to bottom)
Use the site's components and classes. Pull all copy from `content/` (the planner voice).

1. **Hero** (`page-hero`): eyebrow "Free Printable", h1 "The Homestead Keeper Planner", lede
   "A year of planning for your whole homestead. Plan it on paper, keep it in the app."
   Buttons: primary = "Get the free planner" (triggers the email gate / scrolls to the form),
   secondary = `site.appStoreLabel` -> `site.appStoreUrl`.
2. **Why plan** (`SectionHeader` + `card-grid`), four cards (from `content/front-back/how-to-use.md`):
   - See the whole year: Know what's coming before the season gets busy.
   - Nothing slips: Sows, sprays, breedings, and reviews all in one place.
   - Plan once: Set it up in an afternoon, follow it all year.
   - Grows with you: Fine on its own, better with the app.
3. **What's inside** (`SectionHeader` + a grid): three groups:
   - Seasonal planning: a year-at-a-glance, frost-date worksheet, and a reusable monthly page.
   - A page for every hub: Garden, Animals, Orchard, Food & Pantry, Property, Equipment,
     Inventory, Emergency Prep, Bees, Off-grid, Forestry, Wildlife & Pests, Weather & Seasons.
   - Reusable templates: print as many as you need, one per animal, planting, hive, or season.
4. **Preview gallery**: show `public/planner/preview/*.png` (cover, homestead-year, garden,
   individual-animal template, take-it-further). Use `ScreenshotGallery`/`ScreenshotFrame` if it
   fits, or a simple `card-grid` of images. Give every image descriptive alt text.
5. **Template library list** (`check-list` or `card-grid`): list the ten templates from
   `content/02-template-library.md` (Individual Animal, Crop Planting, Orchard Planting,
   Breeding Record, Hive, Equipment and Asset, Pantry and Preservation, Inventory Count Sheet,
   Emergency Prep Checklist, Grow Season Overview).
6. **Download band** (email capture): the gated download (see Access model). One clear CTA.
7. **Closing CTA** (`CTA` component): funnel to the app, primary -> `site.appStoreUrl`. Copy
   from `content/front-back/take-it-further.md` (the "what the app does that paper can't" points).
8. **Internal links** (`InternalLinkCards`): `/features`, `/features/garden/`,
   `/features/animals/`, `/pricing/`.

## SEO
- title: "Free Homestead Planner (Printable PDF) | Homestead Keeper"
- description: "A free printable homestead planner with seasonal planning, pages for the
  garden, animals, orchard, and pantry, and reusable record templates. Plan on paper, keep it
  in the Homestead Keeper app."
- path: "/planner"
- jsonLd: a `CreativeWork` (or `DigitalDocument`) for the planner offered free, plus a
  `BreadcrumbList`. Follow how `faq.astro` passes `jsonLd` to `Layout`.

## Access model (email-gated PDF)
Default: **ungated web preview + email-gated full PDF**.
- The preview images and all page copy are shown freely.
- "Get the free planner" captures an email first, then delivers
  `public/planner/Homestead-Keeper-Planner.pdf`.
- Implement the capture with the SAME provider the site's `SupportForm` already uses (reuse
  `formAction`). On success, redirect to the PDF or to a small `/planner/thanks` page that
  links it (mirror `support/thanks.astro`). If the provider cannot gate a download cleanly,
  fall back to a direct link to the PDF and leave a clear `TODO` comment. Do not invent a new
  backend or a new third-party service without reusing the existing one.

## Voice and house style (important)
- Human, warm, plain. **Never use em-dashes** anywhere in the copy (this is a hard rule for the
  planner brand). Use periods, commas, parentheses, or "and"/"to".
- Keep the app's vocabulary: Growing Areas, Crop Plantings, Field Log, Timeline, Current
  Status, Upcoming Work, Reminders, and the hub names as written.
- Respect `trailingSlash: 'always'` in all internal links.
- Accessible: alt text on every image, one h1, sensible heading order.

## Regenerating the PDF (only if copy changes)
The PDF is final and ready to ship as-is. If you need to edit the planner itself:
- `build/planner-full.html` is the fully self-contained rendered planner (images inlined as
  data URIs). Open it in Chrome and Print to PDF (Letter, no margins/headers) to reproduce.
- `build/build_planner.py` (+ `build/img/`) is the generator. Run `python3 build_planner.py`
  in `build/` to rebuild `planner-full.html`, then print to PDF. Keep the palette and voice.

## Done when
- `/planner/` builds and renders, matches the existing site look, and includes: hero, why-plan,
  what's-inside, preview gallery, template list, gated download, closing CTA, internal links.
- The PDF downloads (gated, or direct with a TODO if the gate is deferred).
- `navItems` includes the planner link.
- No em-dashes in any new copy.
- `npm run build` passes with no errors.

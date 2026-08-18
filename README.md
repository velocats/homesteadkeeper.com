# Homestead Keeper — marketing site

Static [Astro](https://astro.build) site for **Homestead Keeper**, a local-first homestead
organization app for iPhone, iPad, and Mac. Built and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

- Production: <https://homesteadkeeper.com>
- App Store: <https://apps.apple.com/us/app/homestead-keeper-planner/id6778182157>
- Publisher: Quiet Tools LLC

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies (Node ≥ 22.12) |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the built output locally |

## Content architecture

Copy lives in data files, not in templates. To add or edit content, edit the data file —
the page templates and metadata handling are shared.

| File | Drives |
| :--- | :--- |
| `src/data/site.ts` | Site metadata, nav, pricing, FAQs, feature/screenshot sets, footer links |
| `src/data/useCases.ts` | `/use-cases/[slug]/` — audience-oriented landing pages |
| `src/data/workflows.ts` | `/workflows/[slug]/` — in-app task walkthroughs |
| `src/data/guides.ts` | `/guides/[slug]/` — informational articles |
| `src/data/tutorials.ts` | `/tutorials/` — YouTube walkthroughs |
| `src/data/navigation.ts` | Breadcrumb labels and `BreadcrumbList` JSON-LD |

Feature pages (`src/pages/features/*.astro`) each pass content to the shared
`FeaturePage.astro` component rather than defining their own layout.

## SEO conventions

Read `SEO_AUDIT.md` before making structural changes. The important invariants:

- **All metadata flows through `src/components/SEO.astro`.** Pass `title`, `description`,
  and `path` to `Layout`, and the page inherits an absolute self-canonical, Open Graph,
  Twitter card, and the site-wide `Organization` / `WebSite` / `SoftwareApplication`
  JSON-LD graph. Never hand-write these tags in a page.
- **`trailingSlash: 'always'`.** Always link internal paths with a trailing slash, and
  route links through `sitePath()` from `src/utils/paths.ts`.
- **Add breadcrumb labels** in `src/data/navigation.ts` for every new route segment.
- **One `<h1>` per page.**
- **Every page needs at least one contextual inbound link.** Two pages were previously
  orphaned; check the link graph after adding a route.
- **Never change an indexed URL without preserving the old one.** GitHub Pages cannot
  issue a 301, so retired URLs keep a stub with an absolute canonical, `noindex, follow`,
  and a meta refresh — see `src/pages/features/supplies.astro`.
- **Utility pages** that should not be indexed get `noindex={true}` *and* a `filter`
  entry in `astro.config.mjs`.
- **Structured data must match visible page content.** Do not add schema for content that
  is not on the page.

## Assets

- `public/assets/screenshots/` — product screenshots (`.webp`), including `macOS/`
- `public/assets/workflows/` — per-workflow screenshot sets
- `public/assets/og-homestead-keeper.png` — 1200×630 default social card
- `public/assets/homestead-keeper-logo-88.png` — header/footer logo (use this, **not** the
  1024×1024 original, which is reserved for the `Organization` schema `logo` field)
- `public/planner/` — the free printable planner PDF and preview images

## Related documents

- `SEO_AUDIT.md` — SEO audit, keyword/intent map, implementation log, and the
  Visual Design & Brand Audit (proposed, not implemented)
- `docs/AEO-AUDIT-2026-08-12.md` — earlier answer-engine/citation readiness audit
- `planner-handoff/` — source content and build script for the printable planner

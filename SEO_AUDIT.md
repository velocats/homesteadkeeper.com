# Homestead Keeper — SEO Audit & Implementation Plan

**Site:** https://homesteadkeeper.com
**Stack:** Astro 6 static build → GitHub Pages (`.github/workflows/deploy.yml`)
**Audit date:** August 18, 2026
**Scope:** Full repository inspection (`src/`), full built output inspection (`dist/`, 41 indexable pages), `robots.txt`, sitemap, internal link graph, asset weights, structured data.
**Product:** A private, local-first homestead organization app for iPhone, iPad, and Mac. Not a local-service business — no location pages are proposed anywhere in this document.

A prior audit exists at `docs/AEO-AUDIT-2026-08-12.md`. That document covers answer-engine/citation readiness. This document covers classic organic search: crawlability, indexation, keyword/intent architecture, cannibalization, and internal linking. Findings below were verified against the current build, not inherited from that document.

---

## 1. Executive summary

Homestead Keeper's site is in **much better SEO shape than a typical indie app site**. The foundations are genuinely good and should be left alone:

- Every page is server-rendered static HTML with real text content — no JS-rendering barrier.
- Metadata is centralized in one component (`src/components/SEO.astro`), so every page inherits a correct `<title>`, meta description, absolute self-canonical, Open Graph, and Twitter card. New pages inherit this for free.
- `trailingSlash: 'always'` is enforced consistently. **Zero** non-trailing-slash internal links exist in the build.
- **Zero broken internal links** across all 41 pages (verified by crawling the built output).
- A site-wide JSON-LD entity graph (`Organization` + `WebSite` + `SoftwareApplication`) with stable `@id`s, plus `BreadcrumbList` generated from the URL path, plus visible breadcrumbs.
- `robots.txt` allows all crawlers and points at a valid sitemap index. Two utility pages are correctly `noindex` and sitemap-excluded.

So the opportunity here is **not** fixing a broken site. It is three specific things:

1. **Two indexable pages are completely orphaned** — `/playbook/` and `/features/qr-codes/` have **zero** inbound internal links from anywhere on the site. `/playbook/` is the single best informational asset the site owns, and it is unreachable except via the sitemap.
2. **Real keyword cannibalization inside `/use-cases/`.** Four page pairs share 51–65% of their vocabulary while targeting the same intent, and one title tag is *byte-identical* to another page's title tag.
3. **Layer 3 (informational content) barely exists.** One orphaned guide. Every informational search in the brief — "what records should I keep for chickens", "how to build a homestead maintenance checklist" — has no landing surface at all. This is where almost all of the untapped non-brand traffic is.

Plus one unforced performance error: a **1.1 MB, 1024×1024 PNG** is loaded on every single page as a 44px logo *and* used as the default Open Graph image for the whole site.

---

## 2. Current site architecture

### 2.1 Page inventory (41 indexable + 2 noindex)

| Layer | URL | Words¹ | Notes |
|---|---|---:|---|
| Home | `/` | 356 | Thinnest commercial page on the site |
| Overview | `/more-info/` | 1,935 | Largest page; 23 `<h2>`s; product tour |
| Overview | `/features/` | 910 | Feature hub |
| Overview | `/use-cases/` | — | Use-case hub |
| Overview | `/workflows/` | — | How-to hub (in-app tasks) |
| Feature | `/features/animals/` | 576 | |
| Feature | `/features/garden/` | 518 | |
| Feature | `/features/inventory/` | 422 | |
| Feature | `/features/reports/` | — | Only 5 inbound links |
| Feature | `/features/reminders/` | 486 | Only 4 inbound links |
| Feature | `/features/macos/` | — | |
| Feature | `/features/qr-codes/` | 455 | **ORPHAN — 0 inbound links** |
| Use case | `/use-cases/homestead-management-app/` | 515 | |
| Use case | `/use-cases/homestead-task-tracker/` | 571 | |
| Use case | `/use-cases/homestead-maintenance-app/` | 580 | |
| Use case | `/use-cases/chicken-keepers/` | 552 | |
| Use case | `/use-cases/chicken-egg-tracker/` | 561 | |
| Use case | `/use-cases/gardeners/` | 543 | |
| Use case | `/use-cases/garden-harvest-tracker/` | 561 | |
| Use case | `/use-cases/hobby-farms/` | 485 | |
| Use case | `/use-cases/rural-property-owners/` | 477 | |
| Use case | `/use-cases/pantry-inventory/` | 537 | |
| Guide | `/playbook/` | 659 | **ORPHAN — 0 inbound links** |
| Workflow | `/workflows/{11 slugs}/` | ~300 ea. | In-app task walkthroughs |
| Video | `/tutorials/` | — | 6 YouTube embeds, **no video schema** |
| Asset | `/planner/` | — | Free printable PDF (lead magnet) |
| Support | `/pricing/`, `/faq/`, `/about/`, `/privacy/`, `/support/` | — | |
| noindex | `/workflows/import-excel-csv/` | — | Correctly excluded |
| noindex | `/support/thanks/` | — | Correctly excluded |
| Stub | `/features/supplies/` | 0 | Meta-refresh redirect stub |

¹ Main-content words with header/nav/footer stripped.

### 2.2 Navigation

**Header nav:** Home · More Info · Free Planner · Tutorials · Pricing · FAQ · Support

The three highest-commercial-value hubs — `/features/`, `/use-cases/`, `/workflows/` — are **not in the header nav**. They are reachable only from the footer and from `/more-info/`. `/more-info/` is doing double duty as both a product tour and the de-facto Features entry point, which is part of why it has 1,935 words and 23 `<h2>`s.

**Footer:** Two link columns, 25 links, repeated on all 41 pages. This is why the internal link graph is almost perfectly flat (see 2.3).

### 2.3 Internal link graph

Inbound internal link counts, from crawling the build:

```
44  /features/inventory/
43  /  and 24 other pages   ← footer boilerplate floor
12  /workflows/adding-items-to-hubs/
11  /workflows/map-usage/
 7  /workflows/today-screen-review/
 5  /features/reports/
 4  /features/reminders/
 3  /workflows/orchard-layout-plantings/
 2  /workflows/animal-breeding/  (and 3 more)
 0  /playbook/            ← ORPHAN
 0  /features/qr-codes/   ← ORPHAN
```

The "43" figure is the footer appearing on 43 pages. Once you subtract site-wide boilerplate, **contextual internal linking is close to nonexistent.** Almost every page receives the same undifferentiated 43 links, which transmits no topical signal about which pages matter or how they relate.

Two mechanical causes:

- **`src/pages/use-cases/[slug].astro:18-25`** builds "Related use cases" with `.filter(...).slice(0, 3)` — array order, not topical relevance. Every use-case page therefore links to whichever of the first three array entries isn't itself. A chicken page links to gardening; an egg page links to homestead management.
- **`src/data/site.ts` (`featureLinks`)** maps 8 management areas to hrefs, but only Animals, Garden, and Inventory have real pages. The other five — Calendar, Equipment & Workshop, Property/Fences/Water, Food & Pantry, Orchard — all collapse to the generic `/features` fallback. So `FeaturePage.astro`'s "Related tools" cards show a card labelled *"Equipment & Workshop"* that links to `/features`. The anchor text lies about the destination, and five distinct topics all point at one URL.

---

## 3. Technical SEO findings

| # | Finding | Severity | Evidence |
|---|---|---|---|
| T1 | **`/playbook/` and `/features/qr-codes/` are orphaned.** Zero inbound internal links; discoverable only via sitemap. | **P0** | `grep -rl 'href="/playbook/"' dist` → 0 files |
| T2 | **No custom 404 page.** No `src/pages/404.astro`, so GitHub Pages serves its own unbranded 404 with no site nav and no recovery links. | **P0** | `ls src/pages/` |
| T3 | **Default OG image is a 1.1 MB 1024×1024 square.** Used for `og:image` and `twitter:image` with `twitter:card=summary_large_image`, which expects ~1.91:1. Every social/chat share of every page crops badly. | **P0** | `SEO.astro:14`; `file` → 1024 x 1024, 1.1 MB |
| T4 | **The same 1.1 MB PNG is the header + footer logo on all 41 pages,** rendered at 44px and 40px. ~2.2 MB of decode work per page load for 84px of pixels. | **P0** | `Header.astro:19`, `Footer.astro:40` |
| T5 | **Sitemap has no `lastmod` on any of 41 URLs.** | P1 | `grep -c lastmod dist/sitemap-0.xml` → 0 |
| T6 | **`/features/supplies/` stub has a relative canonical** (`href="/features/inventory/"`) and no `noindex`. Canonicals should be absolute. It relies on meta-refresh only. | P1 | `dist/features/supplies/index.html` |
| T7 | **`/tutorials/` has 6 YouTube embeds and no `VideoObject` schema.** No video rich-result eligibility. | P1 | `tutorials.astro` has no `jsonLd` |
| T8 | **`SoftwareApplication` schema has no `offers`,** despite Free + three known Pro price points on `/pricing/`. | P2 | `SEO.astro:44-56` |
| T9 | **~5.5 MB of unreferenced PNGs ship to production** (`homepage-screenshot*.png` ×5, `homestead-keeper-logo-old.png`). Zero references in `src/` or `dist/`. Deploy bloat only — no page-weight impact. | P3 | `grep -rl` → 0 refs each |
| T10 | Feature pages carry no page-level schema (no `WebPage`/`SoftwareApplication` node); use-case pages do. Inconsistent. | P3 | `FeaturePage.astro` passes no `jsonLd` |

### Verified as healthy — no action needed

- `robots.txt`: `User-agent: * / Allow: /` + valid `Sitemap:` directive. No accidental blocks.
- Canonicals: absolute, self-referencing, correctly normalized with trailing slash on all 41 pages.
- Trailing slashes: consistent; zero mismatched internal links.
- Broken links: **zero**, verified across the whole build.
- Duplicate routes: none. No `/index.html` vs `/` duplication, no case variants.
- Rendering: fully static HTML; all body copy present in source. No hydration dependency.
- Mobile: single responsive stylesheet, `width=device-width` viewport, mobile nav toggle with `aria-expanded`.
- Semantic HTML: exactly one `<h1>` per page (verified on all 41), correct `<main>`/`<nav>`/`<footer>`, skip link, `aria-labelledby` on sections, focus-trapped lightbox.
- CSS/JS weight: one 28 KB stylesheet, no framework JS, no external fonts, no third-party scripts. Genuinely fast.
- Screenshots are `.webp`, ≤272 KB, with descriptive alt text throughout.
- YouTube embeds use `youtube-nocookie.com` + `loading="lazy"`.

---

## 4. On-page SEO findings

### 4.1 Cannibalization — the main on-page problem

Measured vocabulary overlap (Jaccard, unique words, boilerplate stripped) on same-intent pairs:

| Overlap | Pair | Verdict |
|---:|---|---|
| **65.2%** | `/use-cases/homestead-management-app/` vs `/use-cases/hobby-farms/` | Same intent, different audience label |
| **63.4%** | `/use-cases/chicken-keepers/` vs `/use-cases/chicken-egg-tracker/` | Same intent |
| **60.6%** | `/use-cases/gardeners/` vs `/use-cases/garden-harvest-tracker/` | Same intent |
| **51.2%** | `/use-cases/homestead-maintenance-app/` vs `/use-cases/rural-property-owners/` | Overlapping |
| 36.8% | `/features/garden/` vs `/use-cases/gardeners/` | **Identical title tag** (see below) |
| 38.9% | `/features/` vs `/more-info/` | Both product overviews |

**The `/use-cases/` directory contains five distinct intents split across nine pages.** Each page is 477–580 words. Splitting one intent across two ~550-word pages produces two mid-strength pages that compete with each other instead of one strong page. This is the highest-leverage on-page fix available, and it's also the one that most needs product-owner sign-off, because consolidating means retiring indexed URLs.

**Byte-identical title tags — a straightforward bug:**

```
/features/garden/        <title>Garden Planning and Harvest Tracking App | Homestead Keeper</title>
/use-cases/gardeners/    <title>Garden Planning and Harvest Tracking App | Homestead Keeper</title>
```

Two indexed URLs, one title string. Also near-collisions worth separating:

- `/features/animals/` "Animal and **Chicken Flock Record Keeping App**" vs `/use-cases/chicken-keepers/` "**Chicken Flock Record Keeping App**"
- `/features/reminders/` "Homestead **Chore** and Reminder App" vs `/use-cases/homestead-task-tracker/` "Homestead Task Tracker and **Chore** App"
- `/` "Homestead **Management** and Record-Keeping App" vs `/use-cases/homestead-management-app/` "Homestead **Management** App"

The intended architecture is sound — feature pages describe *what the tool does*, use-case pages describe *who it's for*. The titles just don't express that split.

### 4.2 Titles and meta descriptions

Generally strong and unique (except 4.1). Weak spots:

- `/pricing/` → `Pricing | Homestead Keeper` — wastes the highest-commercial-intent title on the site. No "homestead app" qualifier, no price signal.
- `/features/macos/` → `Homestead Keeper for Mac` — brand-only; misses "homestead app for Mac" intent.
- `/features/qr-codes/` → `QR Codes & Labels | Homestead Keeper` — no product context.
- Workflow pages → `{Name} | Workflows | Homestead Keeper` — two-level suffix eats pixel budget; several are pure feature names ("Map Usage", "Reports Demonstration") with no searcher language.
- Several descriptions run past ~160 characters and will truncate mid-list (`/features/animals/`, `/features/inventory/`, `/features/reports/`).

### 4.3 H1 / heading structure

Healthy. Exactly one `<h1>` per page, sensible `<h2>` nesting via `SectionHeader`/`copy-block`. Two notes:

- `/more-info/` has 23 `<h2>`s and 1,935 words — several of those sections are strong enough to be their own landing pages (equipment, food & pantry, bees). It's absorbing topical demand that dedicated pages should capture.
- Workflow-page `<h1>`s are bare feature labels ("Map Usage", "Today Screen Review") rather than task language a searcher would type.

### 4.4 Images, OG, social

- Alt text: consistently descriptive and specific across all screenshot data in `site.ts`. Genuinely good — no action.
- Decorative logos correctly use `alt=""`.
- OG/Twitter tags present and complete on every page. But the **default image is wrong** (T3), and only `/`, `/more-info/` override it. 39 pages share one square logo as their social preview.

### 4.5 Thin / unclear-purpose pages

- `/` at 356 words is the thinnest commercial page and the one most likely to be a first touch.
- `/features/supplies/` — meta-refresh stub, no content, weak canonical (T6).
- `/more-info/` vs `/features/` — unclear division of labor; 38.9% overlap.
- Workflow pages average ~300 words and target in-app task language ("Adding Items to Hubs"), which is post-install help content, not search demand. They are correctly kept out of the main SEO push.

---

## 5. Content gaps

Comparing shipped pages against confirmed app capability (`managementAreas` in `src/data/site.ts`, 14 areas) and the search intents in the brief:

| App capability (confirmed in `site.ts`) | Dedicated page? | Search demand signal | Gap |
|---|---|---|---|
| Animals / chickens | ✅ ×3 pages | High | Over-served (cannibalizing) |
| Garden / beds | ✅ ×3 pages | High | Over-served (cannibalizing) |
| Inventory / pantry | ✅ ×2 pages | Medium | Adequate |
| **Equipment & Workshop** | ❌ | **High** — "equipment maintenance log app", "homestead equipment maintenance" | **Biggest Layer-2 gap** |
| **Food & Pantry preservation** | ❌ | **Medium-high** — "canning inventory app", "food preservation records" | **Real gap** |
| **Bees & Hives** | ❌ | **Medium** — "hive inspection record app", "beekeeping records app" | **Real gap** |
| Orchard | ⚠️ workflow only | Medium | Secondary |
| Reports / exports | ✅ | Low-medium | Adequate |
| Reminders / seasonal chores | ✅ | Medium | Adequate |
| Property / fences / water | ⚠️ inside `rural-property-owners` | Medium | Secondary |
| Off-grid systems | ❌ | Low-medium | Defer |
| Forestry | ❌ | Low | Defer |
| Emergency Prep | ❌ | Low-medium | Defer |
| Calendar | ⚠️ inside `reminders` | Low (feature term) | Fold in |
| Property handoff | ⚠️ mentioned in reports | Low volume, high intent | Fold into a guide |

**Layer 3 (informational) is the dominant gap.** The site owns exactly one guide (`/playbook/`), and it's orphaned. Every informational intent in the brief — what records to keep for chickens, how to track livestock health, how to keep equipment maintenance records, how to build a maintenance checklist, what belongs in a handoff binder — has **no landing surface**. These searches are where a homesteader who has never heard of Homestead Keeper actually enters, and there is currently nothing to enter through.

**Content-quality note.** Existing copy is already calm, specific, non-hyperbolic, and honest about limits (several use-case pages carry an explicit "what this does not replace" block — that is good practice and worth preserving). The problem is not copy quality. It is *coverage* and *structure*. No filler is needed anywhere.

**YouTube.** Six real walkthroughs exist (`src/data/tutorials.ts`) and are used on exactly one page, `/tutorials/`, with no video schema. The checklists, garden-layout, and breeding videos are directly relevant to guides and feature pages and are currently doing no SEO work outside that single page.

---

## 6. Proposed SEO architecture

Three layers, with a strict rule: **one intent → one page.**

```
Layer 1 — Commercial hubs
  /                                    Homestead management + record keeping (brand entry)
  /use-cases/homestead-management-app/  "homestead management app"
  /use-cases/homestead-maintenance-app/ "homestead maintenance app"
  /features/                            Capability hub
  /pricing/

Layer 2 — Capability / use-case landing pages
  /features/animals/            animal + livestock records
  /features/garden/             garden planning + records
  /features/equipment/     NEW  equipment & maintenance records
  /features/food-preservation/ NEW  canning / freezer / pantry preservation records
  /features/bees/          NEW  hive inspection + honey records
  /features/inventory/          supplies, feed, low stock, expirations
  /features/reminders/          chores, recurring + seasonal work
  /features/reports/            summaries, PDF/CSV export, handoff
  /features/qr-codes/           field access to records  [de-orphan]
  /features/macos/              Mac
  /use-cases/{chickens, gardens, pantry, hobby-farms, rural-property}/

Layer 3 — Informational guides   (NEW section)
  /guides/                                        Hub  [NEW]
  /playbook/                                      How to build a record system  [de-orphan, keep URL]
  /guides/what-records-to-keep-for-chickens/      [NEW]
  /guides/equipment-maintenance-records/          [NEW]
  /guides/homestead-maintenance-checklist/        [NEW]

Support layer (not SEO targets): /workflows/*, /tutorials/, /faq/, /about/, /privacy/, /support/, /planner/
```

Deliberate exclusions, to avoid doorway pages: no location pages, no separate page per animal species, no page for off-grid/forestry/emergency-prep until the app's depth there justifies one, and no splitting of Calendar out of `/features/reminders/`.

---

## 7. Keyword / search-intent map

### New pages implemented in this pass

**`/features/equipment/`** — *commercial investigation*
- Primary theme: homestead equipment maintenance records / equipment maintenance log app
- Secondary: tractor maintenance log app, small engine service records, farm equipment maintenance tracker, warranty tracking, service history app
- Purpose: capture maintenance-tool searchers arriving cold; the app's strongest under-served capability
- Title: `Equipment Maintenance Records and Service Log | Homestead Keeper`
- H1: `Equipment maintenance records that hold up over years`
- Meta: `Keep equipment maintenance records for tractors, mowers, chainsaws, pumps, and tools — service history, repairs, fuel, parts, warranties, costs, and reminders on iPhone, iPad, and Mac.`
- Links to: `/features/reminders/`, `/features/reports/`, `/features/qr-codes/`, `/use-cases/homestead-maintenance-app/`, `/guides/equipment-maintenance-records/`
- Linked from: `/features/`, `/more-info/`, `/use-cases/homestead-maintenance-app/`, `/use-cases/rural-property-owners/`, footer, both maintenance guides

**`/features/food-preservation/`** — *commercial investigation*
- Primary theme: food preservation records / canning inventory app
- Secondary: canning inventory tracker, freezer inventory app, root cellar records, dehydrated food storage log, fermentation batch records, pantry rotation
- Purpose: distinct intent from general inventory — preservation searchers think in batches, methods, and dates, not stock levels
- Title: `Food Preservation and Canning Records | Homestead Keeper`
- H1: `Records for what you canned, froze, dried, and stored`
- Meta: `Track canning batches, freezer inventory, dehydrated and fermented food, root cellar storage, jar counts, and storage dates alongside the harvests they came from.`
- Links to: `/features/inventory/`, `/features/garden/`, `/features/reports/`, `/use-cases/pantry-inventory/`
- Linked from: `/features/`, `/use-cases/pantry-inventory/`, `/features/garden/`, footer

**`/features/bees/`** — *commercial investigation*
- Primary theme: beekeeping records app / hive inspection log
- Secondary: hive inspection record app, queen notes, treatment records, honey harvest log, swarm and split records, apiary records
- Purpose: well-defined niche with dedicated competitor apps and searchers who name the record type precisely
- Title: `Beekeeping and Hive Inspection Records | Homestead Keeper`
- H1: `Hive inspection records, treatments, and honey harvests`
- Meta: `Keep beekeeping records for hive inspections, queen notes, feeding, treatments, splits, swarms, honey harvests, and apiary equipment on iPhone, iPad, and Mac.`
- Links to: `/features/animals/`, `/features/reminders/`, `/features/reports/`, `/features/inventory/`
- Linked from: `/features/`, `/more-info/`, `/features/animals/`, footer

**`/guides/`** — *informational hub*
- Primary theme: homestead record keeping guides
- Title: `Homestead Record-Keeping Guides | Homestead Keeper`
- H1: `Practical guides to homestead records`
- Links to: all guides + `/playbook/`; Linked from: header nav, footer, every guide, `/playbook/`

**`/guides/what-records-to-keep-for-chickens/`** — *informational*
- Primary theme: what records should I keep for chickens
- Secondary: chicken flock record keeping, egg production log, what to track for laying hens, chicken health records, flock treatment withdrawal
- Purpose: highest-volume informational intent matching a core app capability; entry point for cold chicken-keeper traffic
- Title: `What Records Should You Keep for Chickens? | Homestead Keeper`
- H1: `What records should you keep for chickens?`
- Meta: `A practical list of the chicken records worth keeping — flock details, egg production, feed, health and treatments, coop maintenance, and costs — and how much detail is actually useful.`
- Links to: `/features/animals/`, `/use-cases/chicken-keepers/`, `/use-cases/chicken-egg-tracker/`, `/features/reminders/`, `/playbook/`
- Linked from: `/guides/`, `/features/animals/`, `/use-cases/chicken-keepers/`, `/playbook/`

**`/guides/equipment-maintenance-records/`** — *informational*
- Primary theme: how to keep equipment maintenance records
- Secondary: what to log for tractor maintenance, service interval tracking, maintenance log template, repair vs replace records, warranty records
- Title: `How to Keep Equipment Maintenance Records | Homestead Keeper`
- H1: `How to keep equipment maintenance records`
- Meta: `What to record for each machine, how to set service intervals you will actually follow, and how maintenance history helps with repair-or-replace and resale decisions.`
- Links to: `/features/equipment/`, `/features/reminders/`, `/features/reports/`, `/guides/homestead-maintenance-checklist/`
- Linked from: `/guides/`, `/features/equipment/`, `/use-cases/homestead-maintenance-app/`

**`/guides/homestead-maintenance-checklist/`** — *informational*
- Primary theme: homestead maintenance checklist
- Secondary: seasonal homestead chores, spring/fall property checklist, homestead maintenance schedule, what to check each season
- Purpose: strong seasonal informational demand; pairs with the real checklists walkthrough video
- Title: `How to Build a Homestead Maintenance Checklist | Homestead Keeper`
- H1: `How to build a homestead maintenance checklist`
- Meta: `How to turn scattered seasonal jobs into a maintenance checklist you will actually finish — by place, by season, and by system — with a walkthrough of repeatable checklists in the app.`
- Includes: the real checklists walkthrough video + `VideoObject` schema
- Links to: `/features/reminders/`, `/features/equipment/`, `/use-cases/homestead-maintenance-app/`, `/workflows/checklists-for-items/`, `/guides/equipment-maintenance-records/`
- Linked from: `/guides/`, `/features/reminders/`, `/use-cases/homestead-maintenance-app/`, `/tutorials/`

### Intent grouping (consolidation targets — needs owner sign-off)

| Intent group | Keep as canonical | Consolidate in | Rationale |
|---|---|---|---|
| Chicken records + egg tracking | `/use-cases/chicken-keepers/` | `/use-cases/chicken-egg-tracker/` | 63.4% overlap; egg tracking is a *subset* of flock records, not a separate intent |
| Garden records + harvest tracking | `/use-cases/gardeners/` | `/use-cases/garden-harvest-tracker/` | 60.6% overlap |
| Whole-homestead management | `/use-cases/homestead-management-app/` | `/use-cases/hobby-farms/` | 65.2% overlap; "hobby farm" is an audience synonym, not a different need |
| Maintenance + rural property | `/use-cases/homestead-maintenance-app/` | keep both, differentiate copy | 51.2% — genuinely different (machines vs land/structures) but under-differentiated |

---

## 8. Internal-linking recommendations

The site needs **contextual** links, not more boilerplate. Principles applied:

1. **Every page must have at least one contextual inbound link.** Fixes the two orphans (T1).
2. **Curate related links; never `.slice(0, 3)`.** Relatedness must be authored per page.
3. **Guides ↔ feature pages link bidirectionally.** A chicken-records guide links to animal records; animal records links back to the guide. This is what turns isolated pages into a topical cluster.
4. **Anchor text must match the destination.** Kill the five "Related tools" cards that label distinct topics but all point at `/features`.
5. **Hub → child → hub.** `/guides/` links to every guide; every guide links back.

Cluster map:

```
Equipment cluster
  /features/equipment/  ⇄  /guides/equipment-maintenance-records/
        ⇅                          ⇅
  /use-cases/homestead-maintenance-app/  ⇄  /guides/homestead-maintenance-checklist/
        ⇅                          ⇅
  /features/reminders/     /features/reports/     /features/qr-codes/

Animal cluster
  /features/animals/  ⇄  /guides/what-records-to-keep-for-chickens/
        ⇅                          ⇅
  /use-cases/chicken-keepers/  ·  /use-cases/chicken-egg-tracker/  ·  /features/bees/

Garden / food cluster
  /features/garden/  ⇄  /features/food-preservation/  ⇄  /features/inventory/
                             ⇅
                    /use-cases/pantry-inventory/

Foundation
  /playbook/  ⇄  /guides/  ⇄  all guides
```

---

## 9. Initial article backlog

Ranked. Items 1–3 are implemented in this pass; 4–10 are the recommended next pieces.

| # | Article | Primary intent | Links to | Status |
|---|---|---|---|---|
| 1 | What Records Should You Keep for Chickens? | informational, high volume | animals, chicken use cases | **Implemented** |
| 2 | How to Keep Equipment Maintenance Records | informational, commercial-adjacent | equipment, reports | **Implemented** |
| 3 | How to Build a Homestead Maintenance Checklist | informational, seasonal | reminders, equipment | **Implemented** |
| 4 | How to Track Livestock Health and Treatment Records | informational; withdrawal periods are a real pain point | animals | Recommended |
| 5 | What Records Should You Keep for a Vegetable Garden? | informational; mirrors #1 for gardens | garden | Recommended |
| 6 | How to Organize Food Preservation and Canning Records | informational; batch/date/method thinking | food-preservation | Recommended |
| 7 | What Belongs in a Homestead Handoff Binder? | low volume, very high intent; maps to a real report | reports, playbook | Recommended |
| 8 | How to Track Homestead Expenses Without Accounting Software | problem/solution; maps to Cost Summary report | reports | Recommended |
| 9 | How to Keep Property and Infrastructure Maintenance Records | informational; wells, fences, gates, roads | rural-property-owners | Recommended |
| 10 | Moving Homestead Records Off Spreadsheets | problem/solution; captures spreadsheet-frustration searches | playbook, reports | Recommended |

Each should follow the established house pattern: answer the question in the first 100 words, give a concrete list, state limits honestly, then explain where the app fits. **No filler, no fabricated statistics, no "best/#1" claims.**

---

## 10. Prioritized P0–P3 backlog

Scoring: SEO opportunity / relevance / conversion likelihood / implementation effort / content effort (1–5; effort is cost, lower is better).

### P0 — Technical problems affecting crawling, indexing, or search appearance

| # | Item | SEO | Rel | Conv | Impl | Content | Status |
|---|---|---:|---:|---:|---:|---:|---|
| P0-1 | De-orphan `/playbook/` and `/features/qr-codes/` | 5 | 5 | 3 | 1 | 1 | ✅ Done |
| P0-2 | Add branded `404.astro` (noindex) | 3 | 4 | 3 | 1 | 1 | ✅ Done |
| P0-3 | Correct 1200×630 OG image; stop shipping a 1.1 MB square as the social preview | 4 | 5 | 4 | 2 | 1 | ✅ Done |
| P0-4 | Stop loading a 1.1 MB PNG as a 44px logo on all 41 pages | 4 | 5 | 3 | 2 | 1 | ✅ Done |
| P0-5 | Fix byte-identical title tag on `/features/garden/` vs `/use-cases/gardeners/` | 4 | 5 | 3 | 1 | 1 | ✅ Done |

### P1 — High-value landing pages and structural changes

| # | Item | SEO | Rel | Conv | Impl | Content | Status |
|---|---|---:|---:|---:|---:|---:|---|
| P1-1 | New `/features/equipment/` | 5 | 5 | 4 | 2 | 3 | ✅ Done |
| P1-2 | Curated contextual internal linking; remove `.slice(0,3)` and the `/features` fallback | 5 | 5 | 3 | 3 | 2 | ✅ Done |
| P1-3 | Surface `/features/`, `/use-cases/`, `/guides/` in header nav | 4 | 5 | 4 | 1 | 1 | ✅ Done |
| P1-4 | New `/features/food-preservation/` | 4 | 5 | 3 | 2 | 3 | ✅ Done |
| P1-5 | New `/features/bees/` | 3 | 4 | 3 | 2 | 3 | ✅ Done |
| P1-6 | Sitemap `lastmod` | 3 | 4 | 1 | 1 | 1 | ✅ Done |
| P1-7 | Fix `/features/supplies/` stub: absolute canonical + `noindex` | 3 | 3 | 1 | 1 | 1 | ✅ Done |
| P1-8 | `VideoObject` schema on `/tutorials/` | 3 | 4 | 2 | 2 | 1 | ✅ Done |
| P1-9 | Retitle `/pricing/` and `/features/macos/` for real intent | 3 | 5 | 5 | 1 | 1 | ✅ Done |
| P1-10 | **Consolidate the 4 cannibalizing use-case pairs** | 5 | 5 | 3 | 3 | 4 | ⏸ Needs owner sign-off |

### P2 — High-value informational content

| # | Item | SEO | Rel | Conv | Impl | Content | Status |
|---|---|---:|---:|---:|---:|---:|---|
| P2-1 | New `/guides/` hub | 4 | 5 | 2 | 2 | 2 | ✅ Done |
| P2-2 | Guide: what records to keep for chickens | 5 | 5 | 3 | 2 | 4 | ✅ Done |
| P2-3 | Guide: equipment maintenance records | 4 | 5 | 3 | 2 | 4 | ✅ Done |
| P2-4 | Guide: homestead maintenance checklist (+ video) | 4 | 5 | 3 | 2 | 4 | ✅ Done |
| P2-5 | Articles 4–10 from §9 | 4 | 5 | 3 | 2 | 5 | ⏸ Recommended |
| P2-6 | Add `offers` to `SoftwareApplication` schema | 2 | 4 | 3 | 1 | 1 | ✅ Done |

### P3 — Nice-to-have refinements

| # | Item | Status |
|---|---|---|
| P3-1 | Trim over-length meta descriptions on animals/inventory/reports | ✅ Done |
| P3-2 | Delete ~5.5 MB unreferenced PNGs from `public/assets/` | ⏸ Intentionally not done — see §12 |
| P3-3 | Rewrite workflow `<h1>`s/titles into task language | ⏸ Recommended |
| P3-4 | Expand `/` beyond 356 words | ⏸ Recommended |
| P3-5 | Clarify `/more-info/` vs `/features/` division of labor | ⏸ Recommended |
| P3-6 | Page-level schema on feature pages | ✅ Done |
| P3-7 | Pages for off-grid / forestry / emergency prep | ⏸ Deferred — insufficient demand for now |

---

## 11. Changes actually implemented

### New pages (7)

| URL | Layer | Why |
|---|---|---|
| `/features/equipment/` | 2 | Largest capability gap; strong maintenance-tool search intent |
| `/features/food-preservation/` | 2 | Distinct intent from general inventory (batches/methods/dates) |
| `/features/bees/` | 2 | Well-defined niche where searchers name the record type precisely |
| `/guides/` | 3 | Hub for the previously nonexistent informational layer |
| `/guides/what-records-to-keep-for-chickens/` | 3 | Highest-volume informational intent matching a core capability |
| `/guides/equipment-maintenance-records/` | 3 | Pairs with the new equipment landing page |
| `/guides/homestead-maintenance-checklist/` | 3 | Seasonal demand; embeds the real checklists walkthrough video |
| `/404.html` | — | Branded, `noindex`, with recovery links (GitHub Pages served its own) |

All feature-page claims are traceable to capabilities already documented in `src/data/site.ts` (`managementAreas`, `coreFeatures`, report names). No features were invented. Each new page carries an explicit "What this is not" section, and each guide carries a visible scope limitation.

### Files created

- `src/pages/features/equipment.astro`, `features/food-preservation.astro`, `features/bees.astro`
- `src/pages/guides/index.astro`, `src/pages/guides/[slug].astro`
- `src/data/guides.ts` — guide content, following the existing `useCases.ts` / `workflows.ts` data-file pattern
- `src/pages/404.astro`
- `public/assets/og-homestead-keeper.png` (1200×630, 104 KB), `homestead-keeper-logo-88.png`, `-128.png`

### Existing files modified

| File | Change |
|---|---|
| `src/components/SEO.astro` | Default OG image → the new 1200×630 card; added `og:image:width/height`, `og:image:alt`, `twitter:image:alt`; added real `offers` to `SoftwareApplication` |
| `src/components/Header.astro` | Logo → 88px asset; nav active-state groups regrouped for the new IA |
| `src/components/Footer.astro` | Logo → 88px asset; added Guides + Playbook links; split into separate Features and Use Cases columns so every feature page has a site-wide inbound link |
| `src/components/FeaturePage.astro` | Added page-level `WebPage` schema; added optional `guides` prop + "Deciding what to record" section; related links 3 → 4 |
| `src/data/site.ts` | Rewrote `featureLinks` to point at real pages (was collapsing 5 topics onto `/features`); added nav items; added `footerFeatureLinks`, `foodPreservationScreenshots`, `beeScreenshots` |
| `src/data/useCases.ts` | Added `relatedSlugs` + `guides` fields and authored topical maps for all 10 use cases |
| `src/pages/use-cases/[slug].astro` | Honors the curated `relatedSlugs`; renders the guides section |
| `src/data/navigation.ts` | Breadcrumb labels for all new routes |
| `src/pages/tutorials.astro` | Added `ItemList` + 6 `VideoObject` nodes; added a guides link block |
| `src/pages/features.astro` | Added a feature-page link grid and a guides block |
| `src/pages/playbook.astro` | Added equipment + guides link blocks (page was fully orphaned) |
| `src/pages/features/supplies.astro` | Absolute canonical + `noindex` + explanatory comment |
| `astro.config.mjs` | Sitemap `lastmod`; excluded `/404/` |
| `src/styles/global.css` | Footer grid 4 → 5 columns (required by the footer change; 5/3/1 responsive) |

### Title / meta fixes

- **Resolved the byte-identical title collision:** `/features/garden/` → "Garden Bed Layouts and Planting Records"; `/use-cases/gardeners/` keeps the broader "Garden Planning and Harvest Tracking App".
- `/features/animals/` → "Animal and **Livestock** Record Keeping App" — removes the collision with `/use-cases/chicken-keepers/` *and* claims the "livestock record keeping app" intent, which previously had no page.
- `/features/reminders/` → "Chore Reminders and Seasonal Schedules" (was colliding with `/use-cases/homestead-task-tracker/`).
- `/pricing/` → "Homestead Keeper Pricing | Free and Pro Plans" (was bare "Pricing").
- `/features/macos/` → "Homestead Management App for Mac" (was brand-only).
- `/features/qr-codes/` → "QR Code Labels for Equipment and Places" (was context-free).
- Trimmed 6 over-length meta descriptions to fit the SERP snippet.
- **All 52 pages now have unique title tags** (verified).

### Internal linking

- `/playbook/` and `/features/qr-codes/`: **0 → 51 inbound links each.**
- Replaced the `.slice(0, 3)` related-use-case logic with a curated topical map, so chicken pages link to chicken pages.
- Replaced the `/features` fallback in `featureLinks`, ending the mislabelled "Related tools" cards.
- Built bidirectional feature ↔ guide links across 9 feature pages and 10 use-case pages.
- **Zero orphan pages, zero broken links** (verified by crawling the build).

### Technical

- Sitemap: 48 URLs, all with `lastmod`; `/404/`, `/features/supplies/`, `/support/thanks/`, `/workflows/import-excel-csv/` correctly excluded.
- Structured data: 0 invalid JSON-LD blocks across 52 pages; adds 19 `WebPage`, 7 `VideoObject`, 4 `Article`, 1 `CollectionPage`, 1 `ItemList`.
- **Per-page image payload cut from ~1,110 KB to ~11 KB for the logo** — the header/footer were loading a 1.1 MB 1024×1024 PNG at 44px on all 41 pages.
- Social previews now use a correct 1200×630 card instead of a cropped 1.1 MB square.

### Verification performed

- `npm run build` — clean, 52 pages, no errors or warnings.
- Crawled the build: 0 broken internal links, 0 non-trailing-slash internal links, 0 orphans.
- All new routes return 200 with exactly one `<h1>`, and every `<img>` has an `alt` attribute.
- No horizontal overflow at 375px, 768px, or 1440px; footer collapses 5 → 3 → 1 columns; video embeds responsive.
- Zero browser console errors.
- App Store links intact on 51 of 52 pages (the exception is the redirect stub, correctly).

## 12. Remaining recommendations

### Needs product-owner decision

1. **P1-10 — Consolidate the four cannibalizing use-case pairs** (§7). This is the highest-remaining-value SEO change and the one I deliberately did not make, because it means retiring indexed URLs. Recommended approach: merge the weaker page's unique content into the canonical page, then replace the retired URL with a `noindex` + canonical + meta-refresh stub, exactly as `/features/supplies/` now does. Do not delete the URLs.

2. **`aggregateRating` on the homepage is a real search-appearance risk** (`src/pages/index.astro:26-32`). The homepage emits `SoftwareApplication` markup with `ratingValue: "5"` and `reviewCount: "3"`, synthesized from three App Store reviews hand-copied into `src/data/site.ts` with obfuscated reviewer names. The reviews appear genuine, but self-collected review markup asserting a perfect 5.0 from three hand-picked reviews is the kind of thing that draws a manual action or gets the rich result suppressed. I did not change it because the review data is the owner's and the call is theirs. **Recommendation:** keep the visible review section, drop the `aggregateRating` and `review` nodes from the JSON-LD, and let the App Store rating stand on its own.

3. **Decide `/more-info/` vs `/features/`** (38.9% overlap, 1,935 words vs 910). `/more-info/` reads as an internal staging page — its CTA copy currently says "The detailed product tour now lives in one place, so the home page can stay simple," which is a maintenance note, not customer copy.

### Recommended, no decision needed

4. Articles 4–10 from §9 — the largest remaining traffic opportunity.
5. Rewrite workflow `<h1>`s and titles into task language ("Map Usage" → "How to use the homestead map").
6. Expand the homepage beyond 356 words (see the visual audit — this overlaps with a hierarchy problem, not just a word count).
7. Add `Article` schema to `/playbook/`'s sibling content as the guides library grows.
8. Register and baseline Google Search Console + Bing Webmaster Tools before measuring any of this.

### Intentionally not changed

- **~5.5 MB of unreferenced PNGs in `public/assets/`** (`homepage-screenshot*.png` ×5, `homestead-keeper-logo-old.png`). These affect deploy size only — no page loads them, so there is no performance benefit to deleting them. I left them because an external reference (App Store listing, a post, an email) could still point at those URLs, and deleting them would 404 silently. Safe to remove once the owner confirms nothing external links to them.
- **Existing page copy.** It is accurate, calm, and honest about limits. No rewriting was warranted.
- **URL structure.** No existing indexed URL was changed, so no new redirects were needed.
- **`/workflows/` titles and `<h1>`s.** Flagged only; changing 11 pages' headings is a copy decision.
- **The `<details>`-collapsed "All tracked areas" block** on `/features/`. Content is in the HTML and crawlable; collapsing is a UX choice, not an SEO problem.

---
---

# Visual Design & Brand Audit

**Audit date:** August 18, 2026
**Method:** Inspection of `src/styles/global.css` (32 KB, single stylesheet), all 22 components, all page templates, plus live measurement of the built site at 375 px, 768 px, and 1440 px. Reference sites were measured live at 1440 px using the same script, so every comparison number below is observed, not recalled.
**Status: documentation only.** No visual redesign was performed. The one CSS change made during this pass (`.footer-grid` 4 → 5 columns) was required by an SEO structural change and is noted in §11.

---

## V1. Overall assessment

The site is not badly designed. It has a genuine point of view: a warm cream/sage/clay palette that is neither corporate-SaaS blue nor rustic-barn cliché, real product screenshots rather than stock photography, honest copy, and no decorative illustration padding. `src/data/site.ts` contains 217 real screenshots' worth of alt text written with actual care. Someone made decisions here.

The "AI-generated" impression comes from a narrower set of causes than it feels like, and they are mostly **mechanical, not aesthetic**:

1. **Nothing is set below 700 weight except body paragraphs.** The homepage renders six distinct font weights, and `750` is the second-most-common weight on the page (37 elements). Every reference site uses two to four weights, with 400 doing most of the work.
2. **The type scale has a hole in the middle.** Body 15.4 px → hero lede 21.6 px → h2 48 px → h1 80 px. Nothing occupies 24–40 px, so every heading arrives as a shout and there is no calm middle register.
3. **`h1 { max-width: 13ch }`** (`global.css:33`) forces the 60-character homepage headline into **six stacked lines of 80 px Georgia**, consuming 518 px of vertical space before any product is visible.
4. **22 distinct box-shadow values are defined; the `--shadow` token that exists is used 3 times.** Nine different shadows render on the homepage alone. Every one is a wide, soft, 30–90 px blur — the "floating card" glow that is the most recognizable template tell in the whole site.
5. **13 distinct border-radius values**, including four in the 30–34 px range and nine uses of `999px`.
6. **Two decorative radial-gradient blobs** on `body` (`global.css:26-27`) that carry no product meaning.
7. **14 different card/container class families** for what are essentially four jobs.
8. **Georgia** for all headings (`global.css:32`) — the strongest single signal that this is a website rather than Apple-adjacent software.

The deeper problem is not decoration, though. It is that **the product is barely on the site where it matters.** The homepage shows one screenshot. `/features/reports/` and `/features/qr-codes/` render three grey "Screen preview unavailable" boxes each — while 24 real report screenshots sit unused in `public/assets/workflows/reports/`. Meanwhile the deepest, lowest-traffic `/workflows/` pages carry five to six screenshots each. **The screenshot distribution is exactly inverted relative to page value.**

### Answering the replacement test

> *Could you swap "Homestead Keeper" for another app name and have the site still make visual sense?*

**Homepage: yes, almost entirely.** Strip the words and you have an eyebrow, a six-line serif headline, a lede, two pill buttons, one phone screenshot, a four-item trust strip, three review cards, three feature cards, and a gradient CTA band. That skeleton fits any indie productivity app. The single screenshot is the only thing that identifies the product, and at 553 px wide in a 1440 px viewport it is not large enough to read.

**Interior pages: no — and this is the site's real strength.** `/features/animals/` talks about withdrawal warnings on milk and egg records, three-generation pedigree views, and off-farm parent names. `/features/inventory/` talks about bedding, filters, and expiration dates. That copy could not belong to another product. The specificity already exists; it just has no visual expression.

So the diagnosis is precise: **the words are product-specific and the pictures are not.** The fix is not more decoration. It is putting the app on the page at a size where its own interface becomes the brand.

---

## V2. Specific elements that currently feel AI-generated or template-driven

Each item cites the file and line where it originates.

### V2.1 Font weight inflation — the strongest tell
**`global.css`** declares weights `950` (×12), `900` (×8), `800` (×5), `850` (×3), `750`, `700`. **No declared weight is below 700.** Rendered on the homepage: 400 (65 elements), 750 (37), 800 (17), 700 (13), 950 (12), 900 (8).

Two problems. First, `750`, `850`, and `950` are not real weights in the `ui-sans-serif` / `system-ui` stack — the browser snaps or synthesizes them, so the intent is not even achieved reliably. Second, when eyebrows (`global.css:162`, weight 950), buttons (`:186`, weight 900), footer links (`:310`, weight 750), text links (`:190`, weight 900), and card titles are all near-black, nothing is emphasized because everything is.

Reference: Things uses 400/600/700/800. Bear uses 400/700. Day One uses 300/400/500/700.

### V2.2 Shadow proliferation
22 distinct `box-shadow` values in one stylesheet, with a defined `--shadow` token used only 3 times. Rendered homepage shadows include `0 22px 60px`, `0 14px 34px`, `0 12px 34px`, `0 12px 30px`, `0 10px 24px`, `0 8px 22px` — six near-identical soft glows that no viewer can distinguish but which collectively produce the "everything is floating" look.

Reference: Day One renders **zero** shadows. Bear renders **one**. Anybox renders **one**. Things renders **three**, all tight (`0 1px 0`, `0 2px 8px`, `0 2px 10px`).

### V2.3 Radius proliferation and pill overuse
13 values: `24px` (×11), `999px` (×9), `28px` (×5), `22px` (×3), `34px` (×2), `32px` (×2), `20px`, `18px`, `12px`, `30px`, `14px`, `13px`, `10px`. Six render on the homepage simultaneously.

`.device-shell` is `34px` (`:204`), `.cta-band` is `32px` (`:286`), cards are `24px`, `.button` is `999px` (`:186`). The 30–34 px radii on large panels are the specific "friendly blob container" signature. And all buttons being full pills at weight 900 reads more like a marketing template than like Apple software, where capsule buttons are reserved and usually lighter.

### V2.4 Decorative gradient blobs with no product meaning
```css
/* global.css:25-28 */
body {
  background:
    radial-gradient(circle at top left, rgba(216, 223, 199, 0.85), transparent 34rem),
    radial-gradient(circle at 95% 12%, rgba(199, 154, 71, 0.16), transparent 22rem),
    linear-gradient(180deg, var(--cream), var(--paper) 42rem, var(--cream));
}
```
A sage blob top-left and a gold blob at 95%/12%. These are the textbook "decorative blob" pattern. They say nothing about homesteading or record keeping. Things and Bear use **zero** gradients anywhere.

Also gradient-filled: `.callout-card` (`:200`), `.pricing-card.highlighted` (`:215`), `.cta-band` (`:286`), and the hero's diagonal clay wash over green (`:136-137`). Seven gradients total.

### V2.5 Georgia for all display type
```css
/* global.css:32 */
h1, h2, h3 { font-family: Georgia, "Times New Roman", serif; }
```
Also `.link-card span` (`:416`, Georgia at weight 950 — a synthesized bold serif), and two more at `:453` and `:584`.

Georgia is a 1993 web-safe screen serif. It is legible and inoffensive, and it is on essentially every generic content site on the internet. Paired with a `ui-sans-serif` body it produces the default "serif headings, sans body" combination that template generators reach for first. It also directly contradicts the stated goal of feeling *native to the Apple ecosystem* — no Apple software uses Georgia for display type.

None of the four reference sites use a system serif for headings: Bear commissioned `bearsansheadline`, Day One licenses Avenir Next, Things uses the system sans, Anybox uses Inter.

### V2.6 The 13ch headline clamp
```css
/* global.css:33-34 */
h1 { max-width: 13ch; font-size: clamp(2.35rem, 6vw, 5rem); letter-spacing: -0.045em; }
h2 { max-width: 16ch; font-size: clamp(1.75rem, 3.5vw, 3rem); }
```
Measured at 1440 px: the homepage `<h1>` renders at **80 px across 6 lines in a 553 px column**. `.page-hero.narrow h1` tightens this further to `12ch` (`:151`).

Day One's h1 is 72 px — nearly the same size — but it reads "Your journal for life." on **one line**. The problem is not the size. It is size × length × a 13-character clamp. Any headline longer than about five words becomes a wall.

### V2.7 Container-everything
14 card/container families for four actual jobs: `.card`, `.feature-card`, `.info-card`, `.link-card`, `.map-card`, `.video-card`, `.workflow-card`, `.pricing-card`, `.review-card`, `.callout-card`, `.copy-block`, `.faq-item`, `.soft-panel`, `.screenshot-frame`.

`/use-cases/chicken-keepers/` renders 10 `<section>`s and 11 card elements — a card for essentially every unit of information, including the `.audience-grid` which puts single short phrases like "Backyard homesteads" into their own bordered chips.

### V2.8 Identical section skeletons across templated pages
All 10 use-case pages emit the same `<h2>` strings: *"Choose this setup if it matches your work"*, *"Explore the tools behind this use case"*, *"Other ways to use Homestead Keeper"*, *"Ready to try it with real records?"* — ×10 each. Nine feature pages share *"Keep exploring"* and the same CTA.

Templating landing pages is legitimate and I would not undo it. But with **zero** structural variation and generic connective headings, a visitor who reads two use-case pages has seen the entire site. (Note: *"Deciding what to record"* also appears ×10 — that heading is mine, added in the SEO pass. It has the same weakness and should be varied too.)

### V2.9 Placeholder boxes in production
`/features/reports/` and `/features/qr-codes/` pass **strings** where screenshots belong:
```astro
/* src/pages/features/reports.astro:54  */ screenshots={['Reports', 'Property Handoff', 'CSV Export']}
/* src/pages/features/qr-codes.astro:48 */ screenshots={['QR code on asset detail', 'Label sheet', 'Scanning in field']}
```
`ScreenshotPlaceholder.astro` renders these as grey boxes reading **"Screen preview unavailable."** Six of them, live, on two feature pages — while `public/assets/workflows/reports/` holds 24 real report screenshots. Nothing damages a product site's credibility faster than a visible placeholder.

### V2.10 Dead code, indicating accumulation rather than design
Four components are imported by nothing: `Hero.astro`, `FeatureCards.astro`, `PricingCards.astro`, `PlatformBadges.astro`. `Hero.astro` additionally styles itself with three classes that **do not exist** in `global.css` (`.hero-actions`, `.hero-visual`, `.platform-badges`), so it would render unstyled if used. `index.astro` hand-rolls its own hero markup instead.

This is the clearest structural evidence that the design system accumulated rather than being authored: an abandoned first-pass hero component still sitting next to the real one.

### V2.11 Copy artifacts that read as machine-generated
- `src/pages/index.astro:113` — the homepage CTA body: *"The detailed product tour now lives in one place, so the home page can stay simple."* This is a note to the site's maintainer, printed to visitors.
- The homepage's secondary CTA is **"More Info"** — the vaguest possible label, and now the only path to the product tour.
- 18 distinct font sizes, many at two-decimal precision (`0.94rem`, `0.78rem`, `0.76rem`, `0.74rem`, `0.92rem`, `0.96rem`). These are eyeballed one-offs, not a scale.

### V2.12 Patterns explicitly checked for and NOT found
Stated so the record is accurate:

- **Centered text is not overused.** `text-align: center` appears exactly **twice** in 32 KB of CSS. (Things, by contrast, centers 27 text blocks.)
- **No glow effects, no generic icon sets, no stock photography, no distressed fonts, no wood textures, no barn silhouettes, no tractor imagery.** The homesteading identity is carried by palette and copy, which is the right instinct.
- **Three-column grids are not the dominant pattern** — `repeat(2, …)` appears 17 times vs `repeat(3, …)` 8 times. `.card-grid` does default to 3 columns (`:192`), but it is not the site's rhythm.
- **Whitespace is not excessive.** Section spacing is `clamp(2rem, 5vw, 4rem)`, which is tighter than any reference site.
- **Screenshots in the hero are not cropped.** `.hero .device-shell img` overrides to `object-fit: contain` (`:147`), and `.app-screenshot img`'s `aspect-ratio: 3/4` matches the native 2048×2732 (0.7497) almost exactly. Cropping would only bite if 1280×800 Mac screenshots were passed through `.app-screenshot` — worth guarding against, but not a current defect.
- **Accessibility is genuinely good:** skip link, `aria-labelledby` on sections, a focus-trapped lightbox, `alt` on every image, visible focus rings at 3 px.

---

## V3. Elements that should be retained

1. **The palette.** Cream/sage/clay/gold with deep green is a real position: warm and agricultural without a single cliché. Keep `--cream`, `--paper`, `--green`, `--clay-dark`, `--gold`, `--muted`, `--line`.
2. **Real screenshots over illustration.** 217 of them, with careful alt text. This is the single best asset the site has.
3. **The screenshot lightbox** (`Layout.astro`) — focus-trapped, Escape-closable, keyboard-navigable. Better than most commercial sites.
4. **Honest copy, including the limits.** The "What this is not" and "Important limit" blocks build more trust than any amount of polish.
5. **The dark green hero panel.** A distinctive, non-white opening. Keep the panel; fix the type inside it.
6. **Visible breadcrumbs** and the accessibility foundation.
7. **The data-file architecture** (`site.ts`, `useCases.ts`, `workflows.ts`, `guides.ts`). Content is separated from presentation, so a visual refresh can proceed without touching copy.
8. **No third-party scripts, no web fonts, no framework JS.** 28 KB of CSS total. This restraint is worth protecting.

---

## V4. Elements that should be removed or simplified

| # | Remove / simplify | Where | Why |
|---|---|---|---|
| 1 | The two decorative radial blobs | `global.css:26-27` | Pure decoration, no product meaning, textbook template tell |
| 2 | Weights `750`, `850`, `950` | throughout `global.css` | Not real weights in the system stack; collapse to 400/600/700 |
| 3 | 22 shadows → 2 | throughout | Adopt `--shadow-sm` / `--shadow-lg` and delete the rest |
| 4 | 13 radii → 3 | throughout | `8px` (controls), `16px` (cards), `28px` (large panels) |
| 5 | `h1 { max-width: 13ch }` | `global.css:33` | Forces 6-line headlines; use `18–22ch` and shorten the copy |
| 6 | Georgia for headings | `global.css:32`, `:416`, `:453`, `:584` | Replace with the system UI sans, or license one display face |
| 7 | Full-pill buttons at weight 900 | `global.css:186` | `10–12px` radius, weight 600 reads far more native |
| 8 | 14 container families → 4 | throughout | See V12.6 |
| 9 | `.audience-grid` chips | `use-cases/[slug].astro:60-66` | Short phrases do not need bordered containers; use a plain list |
| 10 | The 6 placeholder boxes | `features/reports.astro:54`, `features/qr-codes.astro:48` | Replace with real screenshots that already exist in the repo |
| 11 | 4 dead components | `Hero`, `FeatureCards`, `PricingCards`, `PlatformBadges` | Unused; `Hero` is also broken |
| 12 | Homepage CTA maintenance note | `index.astro:113` | Internal note shown to visitors |
| 13 | The `.callout-card` / `.pricing-card.highlighted` gradients | `:200`, `:215` | Flat tinted backgrounds achieve the same emphasis |
| 14 | 18 font sizes → a 7-step scale | throughout | See V12.2 |

---

## V5. Comparison with Things (culturedcode.com/things)

Measured: h1 **24 px / weight 400**; h2 15 px; one font family (system sans); weights 400/600/700/800; **3 shadows, all ≤10 px blur**; **0 gradients**; 37 images + 1 video; 1,188 words; 8,072 px tall.

**The principle Things demonstrates:** *the interface is the marketing.* Their h1 is a 24 px wordmark. There is no giant slogan at all — the page opens almost immediately into the actual app, rendered large and pixel-crisp, and the copy annotates what you are already looking at. 37 images to 1,188 words is roughly one image per 32 words.

**Against Homestead Keeper:** the homepage is 356 words with **1** product screenshot — about one image per 356 words, ten times sparser. Homestead Keeper opens with 518 px of 80 px serif headline; Things opens with the product. Things also proves that heavy weights are unnecessary: their heaviest use is a 15 px 700 label, and the page still reads with total clarity.

**What to borrow:** lead with the interface, not a slogan. Let annotation follow the screenshot rather than precede it.

**What not to borrow:** Things' near-total absence of explanatory copy works because everyone knows what a to-do app is. Nobody knows what "whole-homestead records" means, so Homestead Keeper needs more words than Things — just not more words *before* the first screenshot.

## V6. Comparison with Day One (dayoneapp.com)

Measured: h1 **72 px / weight 700** ("Your journal for life." — 22 characters, one line); every h2 **48 px / 700**, each a complete sentence; Avenir Next; weights **300/400/500/700**; **0 shadows**; 1 subtle gradient; 23 images; 556 words; 8,045 px tall.

**Why this comparison matters most.** Day One's type sizes are *nearly identical* to Homestead Keeper's — 72/48 vs 80/48. So large display type is emphatically not the problem. The differences are:

1. **Headline length.** 22 characters on one line vs 60 characters on six lines. Day One has no `max-width: 13ch` clamp fighting its own copy.
2. **Weight range.** Day One's 300 gives it a quiet register for supporting text. Homestead Keeper's floor is 400 for paragraphs and 700+ for everything else, so there is no quiet register at all.
3. **Every 48 px h2 is a full declarative sentence paired with a large image.** "You own the data, we keep it safe." Homestead Keeper's h2s are connective fragments — "Keep exploring", "The short version." — at the same 48 px. Shouting a fragment is what makes type feel oversized.
4. **Zero shadows** across the entire page. Sections separate by background tone and generous spacing.

**What to borrow:** one-line headlines at large sizes; full-sentence section headings, each earning its size by carrying a real claim and a real image; a lighter weight for supporting copy; separation by background tone instead of shadow.

## V7. Comparison with Bear (bear.app)

Measured: h1 **51 px / weight 400** in a commissioned face (`bearsansheadline`); all four h2s **41.6 px / weight 400**; two families, **two weights (400/700)**; **exactly 1 shadow**; **0 gradients**; 32 images + 2 videos; **640 words**; **10,497 px tall**.

**The principle:** *restraint plus one distinctive typeface.* Bear's entire identity rests on a custom display face and its own app colors. It sets 51 px headings at weight **400** — large but never shouting — and repeats one h2 size for every section, producing a steady rhythm rather than a hierarchy competition.

Bear is the tallest reference page (10,497 px) on the **fewest** words (640). It is almost entirely screenshots at generous size.

**Against Homestead Keeper:** the site has 217 screenshots and shows one on the homepage. Bear also demonstrates that two weights are sufficient for a complete marketing site; Homestead Keeper renders six on one page.

**What to borrow:** commission or license **one** display face and let it carry the identity — this is the highest-leverage single change available, and it directly replaces Georgia. Set display type at weight 400–500 rather than 700+. Trade words for screenshots.

**What not to borrow:** Bear's near-zero explanation. Homestead Keeper's breadth (14 areas) genuinely needs explaining.

## V8. Comparison with Anybox (anybox.app)

Measured: no `<h1>` element (the wordmark is an image); feature h2s **18 px / weight 600**; Inter var; weights 400/500/600/700/900; **1 shadow**; 3 subtle gradients; 20 images; **418 words**; 5,120 px — the shortest and plainest reference; nav = **4 links** (Anybox, Download, Pricing, More Apps by Us).

**The principle:** *small type, dense product truth, no marketing scaffolding.* Anybox's feature headings are **18 px** — smaller than Homestead Keeper's body copy in some places. Each pairs with a real screenshot and a one-line factual description. There are no eyebrows, no trust strips, no review carousels, no gradient CTA bands. It reads like software documentation written by someone proud of the software, and it is completely credible.

Anybox is also the closest analogue to Homestead Keeper's actual situation: a small indie Apple app with many features and no brand recognition. Its solution to "many features" was **more, smaller, denser** product blocks — not larger headings.

**Against Homestead Keeper:** a 4-link nav vs 7 nav items plus a 45-link footer. And Homestead Keeper's `.eyebrow` (12.5 px, weight 950, uppercase, letterspaced, clay-colored) appears above nearly every section — a marketing device Anybox does without entirely.

**What to borrow:** the confidence to make feature headings small and let screenshots carry the weight; drop the eyebrow from most sections; simplify the footer.

### Cross-reference summary

| | Homestead Keeper | Things | Day One | Bear | Anybox |
|---|---|---|---|---|---|
| h1 size / weight | **80 px / 700** | 24 px / 400 | 72 px / 700 | 51 px / 400 | (image) |
| h2 size / weight | **48 px / 700** | 15 px / 700 | 48 px / 700 | 42 px / 400 | 18 px / 600 |
| Display typeface | **Georgia** | system sans | Avenir Next | custom | Inter |
| Distinct weights rendered | **6** | 4 | 4 | **2** | 5 |
| Shadows rendered | **9** | 3 | **0** | 1 | 1 |
| Gradients | **7 (2 blobs)** | **0** | 1 | **0** | 3 subtle |
| Images (home) | **1 screenshot** | 37 | 23 | 32 | 20 |
| Words (home) | 356 | 1,188 | 556 | 640 | 418 |
| Words per image | **~356** | 32 | 24 | 20 | 21 |

The last row is the finding. Every reference site carries roughly one product image per 20–32 words. Homestead Keeper's homepage carries one per 356.

---

## V9. Homepage recommendations

### Current five-second read

Measured at 1440×900, in order of what a visitor encounters:

| Position | Element | Height |
|---|---|---|
| 1 | `.eyebrow` "HOMESTEAD RECORDS FOR APPLE DEVICES" — 12.5 px, uppercase, weight 950 | 21 px |
| 2 | `<h1>` at 80 px Georgia, **6 lines** | 518 px |
| 3 | `.hero-lede` 21.6 px, 3 lines | 100 px |
| 4 | Two pill buttons + microcopy | ~90 px |
| 5 | One 553 px-wide phone screenshot, right column | 738 px |
| — | Hero section total | **881 px** — one full viewport |

**What a visitor understands in five seconds:** that this is an app about homesteading, for Apple devices, that replaces notes and spreadsheets. That is a decent answer.

**What they do not understand:** what the app actually looks like or does. The one screenshot sits at 553 px wide for a 2048 px-wide source — the Homestead Hub's card labels ("Garden", "Animals", "Property", "Inventory") are near-illegible at that size, and it is the only product view above the fold.

**What they see second:** a four-item trust strip (130 px), then **three App Store review cards (798 px)**, then three generic highlight cards (532 px), then a gradient CTA band pointing at "More Info" (337 px).

### Problems, in priority order

1. **Reviews outrank the product.** The review section occupies 798 px — more than the hero screenshot — and appears *before* any explanation of what the app does. Three five-star reviews from a newly launched app, presented at that scale, reads as overcompensation. Reviews are supporting evidence and belong after the product is understood.

2. **The product is deferred to another page.** The homepage's terminal CTA is *"Want screenshots, reviews, features, workflows, and tutorials?"* → `/more-info/`, with the body text *"The detailed product tour now lives in one place, so the home page can stay simple."* The homepage has outsourced its primary job. `/more-info/` holds 15 screenshots and 1,935 words; the homepage holds 1 and 356.

3. **The 6-line headline is the single biggest hierarchy problem.** 518 px of headline before anything else.

4. **The three "highlight" cards are the most replaceable content on the site.** "Keep the whole homestead together" / "See what needs attention" / "Own your records" — icon-free feature+paragraph cards that would fit any productivity app. This is the one place where the generic-SaaS criticism fully lands.

5. **Secondary CTA says "More Info."**

### Recommended homepage structure

Nothing below invents features; every screenshot named already exists in `public/assets/`.

1. **Hero — shorten the headline, enlarge the product.** Cut to one or two lines (≤ 40 characters, e.g. *"Records for the whole homestead."*) at 56–64 px, weight 500. Raise `h1` max-width to `18–22ch`. Keep the lede as the explanatory sentence. Give the screenshot **60–70% of the hero width** — the Homestead Hub is the app's thesis statement and must be readable. Primary CTA "Download on the App Store"; secondary "See how it works" → `/features/`.

2. **Replace the three highlight cards with three problem → screenshot → explanation blocks.** Full-width, alternating, each a real screenshot at 700–900 px with a one-sentence heading and two sentences of copy:
   - *"Know what needs attention today"* → `screenshots/homestead-hub.webp`
   - *"See what is planted where"* → `screenshots/garden-bed-layout.webp`
   - *"Find the maintenance history when something breaks"* → `screenshots/report-maintenance.webp`

   This is the Day One / Anybox pattern, uses assets already in the repo, and is unmistakably this product.

3. **Add a compact "everything it covers" band.** A plain text list of the 14 areas from `managementAreas` — no cards, no icons. Breadth is Homestead Keeper's actual differentiator versus single-purpose chicken or garden apps, and the site currently buries it behind a collapsed `<details>` on `/features/`.

4. **Move reviews below the product**, reduced to one line each without the 798 px card treatment.

5. **Keep the trust strip** — "No login / Data on your devices / iCloud sync / Works offline" is concrete, differentiating, and true. Set it as plain text, not chips.

6. **Replace the final CTA** with a real App Store CTA. Remove the maintenance note.

Target: ~600 words and 5–7 large screenshots, versus 356 words and 1.

---

## V10. Interior / feature-page recommendations

1. **Fix the placeholder boxes immediately** (`features/reports.astro:54`, `features/qr-codes.astro:48`). Real assets exist: `assets/workflows/reports/` has 24 screenshots including warranty, cost, and maintenance reports. This is the highest-value visual fix on the site and takes minutes.

2. **Give the three zero-screenshot use-case pages product imagery.** `/use-cases/homestead-management-app/`, `/hobby-farms/`, and `/rural-property-owners/` render **no** screenshots — and they are the highest-commercial-intent pages in that directory.

3. **Rebalance the screenshot distribution.** Currently: `/workflows/*` = 5–6 each; `/features/*` = 1–2; homepage = 1; `/pricing/` = 0. Invert it. Feature pages should carry 4–6 large screenshots each.

4. **Change the feature-page layout from sidebar to alternating full-width.** `FeaturePage.astro` puts all prose in a left column and stacks screenshots in a narrow right `aside`, so screenshots render small and detached from the paragraph they illustrate. Interleave instead: each `section` gets its own screenshot beside or below its own copy. This directly serves the *problem → product screen → explanation* pattern.

5. **Vary the templated headings.** Replace the ×10 identical `<h2>`s with per-page copy authored in `useCases.ts` — the data file already supports adding fields. (Including my own *"Deciding what to record"*.)

6. **Drop `.eyebrow` from most sections.** Keep it for genuine category labels; remove it where it is decorative scaffolding. Twelve-point uppercase weight-950 clay text above every section is a marketing tic.

7. **Un-card the `.audience-grid`.** Six bordered chips reading "Backyard homesteads", "Hobby farms" — a plain comma-separated line communicates the same thing without six containers.

8. **Show the Mac app on the Mac page at full width.** `/features/macos/` has 11 real Mac screenshots (1280×800) but renders them in the same narrow treatment as phone screenshots. Desktop UI needs width to be legible. Also guard `.app-screenshot img`'s `aspect-ratio: 3/4` against 16:10 Mac sources, which would crop badly.

---

## V11. Mobile recommendations

Measured at 375×812. **The mobile layout is structurally sound** — no horizontal overflow anywhere, footer collapses 5 → 3 → 1, `.split-section` becomes single-column at 1020 px, video embeds are fluid, the nav toggle has correct `aria-expanded`, body text is 16 px at line-height 1.65, and text width is 343 px (~55 characters), which is a good measure.

Real mobile-specific issues:

1. **The headline consumes almost the entire first screen.** Measured at exactly 375×812:

   | Element | Starts at | Height | Lines |
   |---|---:|---:|---:|
   | `.eyebrow` | 99 px | 41 px | 2 (wraps) |
   | `<h1>` @ 37.6 px | 160 px | 203 px | 5 |
   | `.hero-lede` @ 17.3 px | 383 px | 107 px | 4 |
   | Buttons + microcopy | 510 px | 116 px | — |
   | **Hero screenshot** | **721 px** | 738 px | — |

   The screenshot begins at 721 px against an 812 px viewport, so roughly **91 px of it — about 12% — is visible on first paint**, and the hero as a whole runs 1,148 px. It is technically above the fold and effectively invisible. A phone visitor sees a sliver of a phone screenshot after four stacked text blocks. Shortening the headline (V9.1) fixes this at every breakpoint at once.

2. **The eyebrow wraps to two lines at 375 px.** "HOMESTEAD RECORDS FOR APPLE DEVICES" at 12.5 px with `0.11em` letterspacing does not fit. Shorten or remove.

3. **Phone screenshots should be full-bleed on phones.** With 16 px page padding, a 2048 px-wide screenshot renders at 343 px. Letting product screenshots run edge-to-edge on mobile buys ~10% more size and looks deliberately native.

4. **`.device-shell`'s 7 px border at mobile** (`:404`) wastes ~14 px of the narrowest viewport. Drop the frame on mobile.

5. **The 45-link footer is a long scroll on mobile** now that it has 5 columns collapsing to 1. Consider `<details>` grouping for the Features and Use Cases columns below 720 px.

6. **Verify the reduced type scale on mobile after any change.** At 375 px, `h2` renders at 28 px and `h1` at 37.6 px — a 9 px gap, versus a 32 px gap on desktop. The clamps compress the hierarchy on mobile more than intended, which is another argument for an explicit scale (V12.2).

---

## V12. Proposed design-system changes

The current system shows clear evidence of accumulation: 18 font sizes, 13 radii, 22 shadows, 6 weights, 14 container families, 4 dead components, and a `--shadow` token used 3 times out of 22 opportunities. The palette is the only part that behaves like an authored system.

### V12.1 Typography — one decision matters most
Replace **Georgia** with either:
- **(a) The system UI sans** (`-apple-system` / `ui-sans-serif`) for headings as well as body, following Things. Zero cost, zero payload, immediately more Apple-native. Differentiation then comes entirely from screenshots and palette.
- **(b) One licensed display face** for headings only, following Bear and Day One. Higher cost and ~30–60 KB, but it is the single most effective way to stop looking template-generated.

Recommended: **(a) now, (b) when there is budget.** Either beats Georgia.

### V12.2 A real type scale (7 steps, replacing 18 ad-hoc sizes)
```css
--text-xs:   0.8125rem;  /* 13px  labels, fine print        */
--text-sm:   0.9375rem;  /* 15px  captions, secondary       */
--text-base: 1rem;       /* 16px  body                      */
--text-md:   1.125rem;   /* 18px  lede, intro               */
--text-lg:   1.5rem;     /* 24px  h3, feature headings      */
--text-xl:   2rem;       /* 32px  h2  (was 48px)            */
--text-2xl:  clamp(2.25rem, 4vw, 3.5rem); /* 36-56px h1 (was up to 80px) */
```
This fills the empty 24–40 px register and closes the 15 → 48 px jump. Note the goal is not "smaller type" — it is a *complete* scale.

### V12.3 Three weights, not six
`400` body · `500` display/headings · `600` emphasis and buttons. Delete `700`, `750`, `800`, `850`, `900`, `950`. Because `750`/`850`/`950` are not real weights in the system stack, this also removes synthesized-bold rendering.

### V12.4 Two shadows
```css
--shadow-sm: 0 1px 3px rgba(38, 48, 39, 0.08);   /* resting cards   */
--shadow-lg: 0 8px 24px rgba(38, 48, 39, 0.10);  /* lifted/hover    */
```
Delete the other 20. Separate sections with background tone (`--cream` / `--paper` / `--sage-2`) and spacing instead.

### V12.5 Three radii
`--radius-sm: 8px` (buttons, inputs, chips) · `--radius-md: 16px` (cards, screenshots) · `--radius-lg: 28px` (full-width panels: hero, CTA band). Replaces 13 values, and moves buttons off the 999px pill.

### V12.6 Four containers, not fourteen
- `.panel` — full-width tinted section (absorbs `.soft-panel`, `.cta-band`)
- `.card` — bordered content block (absorbs `.card`, `.feature-card`, `.info-card`, `.map-card`, `.callout-card`, `.pricing-card`, `.review-card`, `.faq-item`)
- `.link-card` — navigational card (keep; it has a distinct job)
- `.figure` — screenshot + caption (absorbs `.screenshot-frame`, `.app-screenshot`, `.device-shell`)

And a rule going forward: **prose does not go in a container.** `.copy-block` should be a spacing utility, not a card.

### V12.7 Spacing scale
An explicit 6-step scale (`4px 8px 16px 24px 40px 64px`) replacing the current mix of `clamp()`s and one-off rem values, so section rhythm is a decision rather than a per-section improvisation.

### V12.8 Palette — keep, with pruning
Keep `--cream`, `--paper`, `--green`, `--green-2`, `--clay-dark`, `--gold`, `--ink`, `--muted`, `--line`. `--cream-2`, `--sage`, and `--sage-2` are three near-identical warm neutrals; two would do. Delete the `body` radial blobs (V4.1).

Consider sampling accent colors **from the app's own UI** — the greens and clays in the Homestead Hub screenshots — so the site's palette is provably derived from the product rather than merely adjacent to it.

### V12.9 Housekeeping
Delete `Hero.astro`, `FeatureCards.astro`, `PricingCards.astro`, `PlatformBadges.astro`. Remove `main { overflow: hidden }` (`:31`) unless it is load-bearing — it silently clips any future sticky or overflowing element.

---

## V13. Screenshot / product-visual strategy

**The core finding: the product's own imagery is abundant and systematically underused.** 217 screenshots exist. The homepage shows 1. Two feature pages show grey placeholders instead.

### Current distribution vs recommended

| Page group | Now | Recommended | Note |
|---|---:|---:|---|
| Homepage | 1 | 5–7 large | Product should be the hero, not the headline |
| `/features/*` (10 pages) | 0–2 | 4–6 each | 0 on reports and qr-codes today |
| `/use-cases/*` (10 pages) | 0–3 | 3–4 each | 3 pages have none |
| `/guides/*` (new) | 0 | 1–2 each | Add where a screenshot answers the question |
| `/pricing/` | 0 | 1–2 | Show what Pro unlocks (a real export, a QR label sheet) |
| `/workflows/*` | 5–6 | keep | Already correct |

### Presentation principles

1. **Problem → product screen → short explanation.** Replace *icon → marketing statement → paragraph* everywhere. The screenshot is the argument; the copy annotates it.
2. **Large enough to read.** A 2048 px screenshot at 553 px is decoration. Target 700–900 px on desktop and full-bleed on mobile. Better to show three legible screens than eight illegible ones.
3. **Show real records, not empty states.** The existing screenshots already do this well — the Cedar Ridge demo homestead gives realistic content (specific crops, laying hens, a riding mower). Keep using it. Realistic homestead specifics *are* the homesteading identity, and they cannot be faked by decoration.
4. **Favor reports and long-run history.** `report-production.webp`, `report-maintenance.webp`, `report-warranty.webp`, and `report-cost-summary.webp` show accumulated data over time — which is the actual value proposition of a record-keeping app and something no competitor screenshot of an empty form can match. These are the most persuasive assets in the repo and appear on almost no commercial page.
5. **Annotate sparingly.** One or two callouts on a complex screen (the garden bed layout, the breeding timeline) does more than a paragraph.
6. **Simplify the frame.** `.device-shell` is a 10 px cream border at 34 px radius — a suggestion of a device that is not any real device. Either use an accurate iPhone/Mac frame or drop the frame entirely and let the screenshot's own corner radius do the work. The current halfway version is part of the generic impression.
7. **Video, used sparingly.** Six real walkthroughs exist. The checklists video is now embedded in a guide. A short silent loop of the garden bed layout in the homepage hero would communicate more than any headline — but only if it does not delay the first paint.

---

## V14. Before / after conceptual description

### Before — the homepage a visitor meets today

A dark green rounded panel fills the viewport. A small uppercase clay eyebrow. Then a wall: six lines of 80 px Georgia, occupying 518 px, reading "Run your homestead without scattered notes and spreadsheets." A lede, two gold pill buttons with soft drop shadows, a line of microcopy. To the right, a phone screenshot at 553 px inside a cream border with a wide soft shadow — too small to read the words inside the app. Behind everything, two faint gradient blobs.

Scrolling: four bordered trust chips. Then a large section with three review cards, five-star glyphs, and a gradient heading, occupying more vertical space than the product screenshot did. Then three bordered cards with headings and paragraphs and no images. Then a green gradient band with a rounded 32 px radius asking whether you would like "More Info."

Total: 356 words, one screenshot, seven visible containers, nine distinct shadows, six font weights, six border radii. Every element is competent. Nothing is specific. Replace the words and it fits any indie app.

### After — the same page, product-led

A dark green panel, shorter. One or two lines of display type at 56 px, weight 500, in the system UI face: *"Records for the whole homestead."* One explanatory sentence below it. Two buttons at 10 px radius, weight 600, no shadow. Occupying two-thirds of the panel: the Homestead Hub at 900 px, large enough that "Garden", "Animals", "Property", "Inventory", "Orchard", "Bees" are all readable — so the app's breadth is demonstrated rather than claimed. No blobs.

Scrolling reveals three full-width blocks, alternating left and right, each a real screenshot at 800 px with a single-sentence heading at 32 px:
- *"Know what needs attention today."* — the Today screen with real overdue items.
- *"See what is planted where."* — the garden bed layout with actual crops in actual beds.
- *"Find the maintenance history when something breaks."* — the maintenance report with a real service trend.

Then a quiet text band listing all fourteen areas in plain type — no cards, no icons — because breadth is the differentiator. Then the trust points as one plain line: no login · data on your devices · iCloud sync · works offline. Then the three reviews as three single lines with attribution. Then one App Store CTA.

Total: ~600 words, 5–7 large screenshots, two shadows, three weights, three radii, and no container that isn't earning its border. You could not replace the words: the pictures are the product, and the product is unmistakable.

**The shift in one sentence:** the site stops describing the app in the brand's voice and starts showing the app doing real homestead work.

---

## V15. Prioritized visual improvements

Effort is engineering cost (lower is better). Nothing here has been implemented.

### VP0 — Credibility fixes (do these regardless of any redesign)

| # | Change | Files | Impact | Effort |
|---|---|---|---|---|
| VP0-1 | Replace 6 "Screen preview unavailable" placeholders with real screenshots already in the repo | `features/reports.astro:54`, `features/qr-codes.astro:48` | High | 1 |
| VP0-2 | Remove the maintenance note from the homepage CTA and give the secondary CTA a real label | `index.astro:113` | Medium | 1 |
| VP0-3 | Add screenshots to the 3 zero-screenshot use-case pages | `useCases.ts` | High | 1 |
| VP0-4 | Delete the 4 dead components (`Hero` is also broken) | `src/components/` | Low | 1 |

### VP1 — Highest-leverage visual changes

| # | Change | Files | Impact | Effort |
|---|---|---|---|---|
| VP1-1 | **Replace Georgia** with the system UI sans for all display type | `global.css:32`, `:416`, `:453`, `:584` | **Very high** | 1 |
| VP1-2 | **Shorten the homepage headline and raise `h1` max-width to 18–22ch** — fixes the 6-line wall at every breakpoint | `global.css:33`, `index.astro:58` | **Very high** | 1 |
| VP1-3 | **Enlarge the hero screenshot to 60–70% of hero width** | `global.css:127-147`, `index.astro` | **Very high** | 2 |
| VP1-4 | Collapse 6 font weights → 3 | `global.css` (throughout) | High | 2 |
| VP1-5 | Collapse 22 shadows → 2 tokens | `global.css` (throughout) | High | 2 |
| VP1-6 | Collapse 13 radii → 3 tokens; move buttons off the 999 px pill | `global.css` (throughout) | High | 2 |
| VP1-7 | Delete the two decorative radial blobs | `global.css:26-27` | Medium | 1 |
| VP1-8 | Adopt the 7-step type scale | `global.css` | High | 3 |

### VP2 — Structural / layout

| # | Change | Files | Impact | Effort |
|---|---|---|---|---|
| VP2-1 | Replace the 3 homepage highlight cards with 3 problem → screenshot → explanation blocks | `index.astro:100-110` | **Very high** | 3 |
| VP2-2 | Move reviews below the product and reduce to one line each | `index.astro:78-98` | High | 2 |
| VP2-3 | Rework `FeaturePage.astro` from prose-column + screenshot-sidebar to alternating full-width | `FeaturePage.astro` | High | 3 |
| VP2-4 | Add the plain-text "all fourteen areas" band to the homepage | `index.astro` | Medium | 2 |
| VP2-5 | Collapse 14 container families → 4 | `global.css`, components | Medium | 4 |
| VP2-6 | Vary the ×10 identical templated `<h2>`s | `useCases.ts`, `[slug].astro` | Medium | 3 |
| VP2-7 | Drop `.eyebrow` from decorative (non-category) uses | components | Medium | 2 |
| VP2-8 | Full-bleed screenshots on mobile; drop `.device-shell` border below 720 px | `global.css:398-404` | Medium | 2 |
| VP2-9 | Show Mac screenshots full-width; guard `aspect-ratio: 3/4` against 16:10 sources | `features/macos.astro`, `global.css:668` | Medium | 2 |

### VP3 — Refinements

| # | Change |
|---|---|
| VP3-1 | Un-card `.audience-grid` |
| VP3-2 | Prune 3 near-identical warm neutrals to 2 |
| VP3-3 | Explicit 6-step spacing scale |
| VP3-4 | Sample accent colors from the app's own UI |
| VP3-5 | Replace `.device-shell` with either an accurate device frame or none |
| VP3-6 | Group footer columns in `<details>` below 720 px |
| VP3-7 | Remove `main { overflow: hidden }` if not load-bearing |
| VP3-8 | Evaluate a licensed display face (VP1-1 option b) |
| VP3-9 | Consider a short silent hero loop of the garden bed layout |

### Suggested sequencing

**VP0 + VP1-1, VP1-2, VP1-7 first.** Four small, low-risk, high-impact edits — no placeholders, no Georgia, a headline that fits, no blobs — that between them remove most of the template impression before any layout work begins. **VP1-3 and VP2-1 next**, since making the product visible is the actual fix. Token consolidation (VP1-4 → VP1-6, VP1-8) can proceed in parallel as pure cleanup. **VP2-5 last**, as it touches the most files for the least visible gain.

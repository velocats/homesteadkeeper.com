# Homestead Keeper competitive SEO plan

Date: September 9, 2026  
Site to improve: https://homesteadkeeper.com/  
Competitor: https://homesteadplanner.net/  
Status: Technical/homepage pass and competitor comparison completed locally on September 9, 2026; not deployed. Measurement collection and resource improvements remain pending.

## Objective

Increase qualified, non-brand Google search traffic to Homestead Keeper and turn that interest into planner downloads and app adoption. Compete through useful record-keeping resources, demonstrated product workflows, clear buying information, and relevant editorial links.

Around the House is outside this plan's scope. Earlier references to that site were corrected by the project owner.

## Evidence and limitations

The September 9 review inspected Homestead Keeper's live homepage, robots.txt and sitemap, public pages returned by search, and local source. It also inspected Homestead Planner's homepage, feature directory, Almanac, and the accessible Ubersuggest lead report supplied by the owner.

No Google Search Console, complete backlink export, keyword-volume dataset, conversion baseline, or measured Core Web Vitals report was available. Search results inspected during the audit are discovery evidence, not a controlled Google rank-tracking study. Source findings need verification against production during implementation.

The Ubersuggest report showed these figures for **Homestead Planner**, not Homestead Keeper:

| Metric | Reported value | Interpretation |
| --- | --- | --- |
| SEO score | 74 | Tool-specific score, not a Google ranking score |
| Estimated organic traffic | 0 | Limited detected visibility; does not establish zero actual visitors |
| Organic keywords | 1 | Coverage in this report's dataset only |
| Backlinks | 69 | Quality and number of unique referring domains unknown |
| SEO issues | 33 | Issue details gated behind registration; individual defects unverified |
| Keyword distribution | One keyword in positions 11–50 | No actionable keyword identity exposed in the visible report |

The visible quick-win and keyword-opportunity sections supplied no usable targets. The report's AI-visibility figures do not establish Google rankings. Its token-bearing link is intentionally omitted from this project document.

## Current position

Homestead Keeper already has a substantial foundation. The live sitemap listed 52 URLs, including 10 guides. The homepage has a descriptive title, self-canonical, real product screenshots, and a clear free-start offer. Local source includes centralized metadata, application offers, breadcrumbs, and article markup. The free planner is an existing 32-page resource with no email requirement.

The older `SEO_AUDIT.md` is historical context, not a fresh backlog. Several earlier findings have been addressed, including the navigation logo size, guide library, navigation links, differentiated garden titles, and application offers. Recheck any older issue before scheduling it.

Homestead Planner has focused feature pages and an Almanac listing 13 articles. Its articles already include egg-production tracking and beginner task planning. Its public product claims include helper access, satellite property planning, and financial tracking. These are competitive strengths to acknowledge, not omit from comparisons.

## Prioritized implementation backlog

Priority indicates order of work, not a forecast of ranking impact. Checkboxes represent unfinished work; the audit observations above are already complete.

### P0 — Establish measurement and page ownership

- [ ] Review Search Console performance for the last 28 days and a longer available period, separating branded from non-branded queries.
- [ ] Record clicks, impressions, CTR, average position, country, device, and landing page for priority query groups.
- [ ] Inspect priority URLs for indexing status and Google's selected canonical; verify sitemap processing.
- [ ] Determine whether the homepage and homestead-management use-case page compete for the same queries. Do not consolidate based solely on similar wording.
- [ ] Define privacy-appropriate measurement for planner downloads and App Store outbound clicks. Review applicable privacy disclosures before adding tracking.
- [ ] Use available App Store attribution to evaluate adoption; never report an outbound click as an installation or purchase.

Acceptance: a dated baseline and query-to-page map exist, with missing data explicitly recorded. Set numeric growth targets only after reviewing that baseline.

Collection worksheet: [SEO baseline](SEO-BASELINE-2026-09-09.md). No Search Console access or conversion data was available during the first implementation pass; the P0 collection tasks remain open.

### P1 — Improve existing technical signals

| Task | Implementation location | Acceptance criteria |
| --- | --- | --- |
| Replace build-wide modification dates | `astro.config.mjs`; content date fields as needed | `lastmod` reflects a genuine significant page update, or is omitted when unknown. Rebuilding alone does not refresh every page's date. |
| Correct video markup | `src/data/tutorials.ts`, `src/pages/tutorials.astro`, `src/pages/guides/[slug].astro` | Verified original `uploadDate` values; valid `embedUrl`; omit `contentUrl` unless an actual media-file URL is available. Validate with Google's Rich Results Test. |
| Add accountable guide authorship and review dates | `src/data/guides.ts`, guide template, About page as appropriate | Visible authorship/reviewer information and genuine dates match structured data. Do not invent expertise or backdate publication. |
| Add responsive hero image variants | Screenshot component and assets | Appropriate `srcset` candidates retain dimensions, descriptive alt text, eager loading and high priority for the hero. Confirm image quality and measure mobile benefit. |

The homepage already uses WebP and supplies dimensions; no poor performance score was measured. Video markup corrections improve eligibility, not guaranteed rankings or video-result inclusion. Confirm video indexing requirements as well as schema validity.

First-pass status: removed build-time `lastmod`; verified all six original video publication timestamps from their YouTube watch pages; added those timestamps to tutorial markup and reused them in the checklist guide; removed watch-page `contentUrl` values. Built-output checks passed. External Rich Results Test and production verification remain pending. Guide authorship and responsive image variants are still queued.

### P1 — Clarify homepage positioning

- [x] Implement a clearer main heading: **A homestead management app for animals, gardens, and daily work.**
- [x] Add supporting copy: **Keep records, plan seasonal chores, and track equipment and supplies on iPhone, iPad, and Mac—even when you're offline.**
- [x] Retain real screenshots and the existing free-start CTA.
- [x] Add useful contextual paths into chicken records, garden records, and task tracking.
- [ ] Verify every product claim against the current release before publication.

Acceptance: one clear H1, the category and supported devices are immediately apparent, and key user journeys are easy to find on mobile and desktop. Preserve the existing descriptive title unless data supports a change.

### P1 — Create a fair competitor comparison

Proposed route: `/compare/homestead-planner/`  
Proposed title: **Homestead Keeper vs Homestead Planner: Features & Pricing**

- [x] Verify both products' current public pricing and capabilities; record sources and verification date.
- [x] Compare devices, account requirements, offline behavior, record types, exports, collaboration, property planning, free limits, and paid plans.
- [x] Explain who each product suits and acknowledge competitor strengths.
- [x] Include relevant Homestead Keeper screenshots and a clear next step.
- [x] Link the comparison contextually from relevant buying pages; add breadcrumb support.

At review time, Homestead Keeper advertised $2.99/month, $19.99/year, or $39.99 lifetime. Homestead Planner advertised $9/month or $79/year. The annual-price difference is approximately 75%, but capabilities differ. Reverify before publishing. Do not assume equivalent functionality or claim competitor features are absent merely because they are undocumented.

Acceptance: all factual comparison cells have evidence, unknowns are labeled, and the page helps users choose honestly. Treat this as a purchase-decision page; search volume is unverified.

Completed locally: `/compare/homestead-planner/`, linked from Pricing and More Info. Data lives in `src/data/comparisons.ts`; Homestead Keeper paid prices reuse the existing pricing data. Public descriptions and advertised prices were rechecked September 9 against the linked product pages, plus the App Store listing for supported platforms and core features. This was not a competitor account or hands-on test. The page discloses its publisher and method, treats competitor offline/export support as unconfirmed, and does not equate iCloud sync with helper accounts. The table can scroll on narrow screens and is keyboard focusable. Breadcrumbs omit the non-page `/compare/` grouping to avoid a broken parent link.

Evidence mapping: Homestead Keeper account/offline/sync claims come from `/more-info/` and `/privacy/`; free limits, production, and export claims are corroborated by the App Store listing; advertised prices come from `/more-info/`. Competitor rows come from its homepage, with the feature directory as supporting context. Sources are visible on the comparison page. The App Store fetch did not expose numerical in-app prices, so this comparison describes advertised website prices rather than claiming a new store-price verification.

### P1 — Strengthen the free planner

- [x] Improve `/planner/` with the first completed example and a clearer worksheet entry point.
- [x] Connect the first worksheet to its relevant guide and product use case.
- [x] Offer focused printable pages where they add practical value, without gating them behind a sign-up.
- [x] Complete the garden planting/harvest record and farm-sitter handoff worksheet.
- [x] Keep the completed resources usable without an account or app installation.

Acceptance: each resource has clear instructions, a completed example, accessible download links, and a relevant optional path into the app. Preserve the no-email download experience.

Five focused resources are completed locally:

- `/planner/egg-production-log/` provides a seven-day blank log, a completed example, interpretation guidance, and letter-size portrait print styles. It links to the chicken-record guide, chicken use case, and full planner.
- `/planner/equipment-maintenance-log/` provides eight blank service rows, a three-entry mower example, service-history guidance, and letter-size landscape print styles. It links to the equipment guide, equipment feature page, and full planner.
- `/planner/homestead-maintenance-checklist/` provides ten blank tasks, a five-row property example, place/season/frequency fields, follow-up prompts, and letter-size landscape print styles. It links to the maintenance guide, reminders feature, and checklist workflow.
- `/planner/garden-planting-harvest-log/` provides one crop header, five blank planting/care rows, six blank harvest rows, and a completed tomato example with a season review. It links to the vegetable-garden records guide, garden feature page, and garden-layout workflow.
- `/planner/farm-sitter-handoff-checklist/` provides a two-page caretaker handoff for routines, contacts, important locations, current issues, escalation notes, and record locations, plus a fictional completed weekend example. It links to the handoff-binder guide, reports feature page, and rural-property use case.

The planner and corresponding guides provide contextual inbound links. All five resources have self-canonicals, CreativeWork schema, breadcrumbs, and sitemap inclusion. They use the browser's print dialog rather than adding more downloadable PDFs.

### P1 — Improve priority guides with practical evidence

| Existing topic | Proposed addition |
| --- | --- |
| Chicken records | Sample week of egg records, printable log, and matching production screenshot |
| Equipment maintenance records | Completed service entry and blank maintenance log |
| Homestead maintenance checklist | Editable checklist organized by system and season |
| Vegetable garden records | One bed followed through planting, harvest, and next-season review |
| Homestead expenses | Worked example with clearly defined cost categories |
| Handoff binder | Filled example and printable handoff checklist |
| Moving off spreadsheets | Sample data, verified supported import steps, and exact limitations |

- [ ] Improve chicken and maintenance content first, then use performance data to sequence the rest.
- [ ] Label all demonstration records as examples; do not invent customer stories.
- [ ] Cite appropriate sources for substantive factual guidance and obtain qualified review where needed.
- [ ] Link each guide to its related feature, workflow, and useful printable resource.

Acceptance: readers can complete a real record-keeping task from the page. Length and number of pages are not success criteria.

### P2 — Earn relevant editorial links

- [ ] Build a selective prospect list of homesteading educators, poultry publications, gardening newsletters, small-farm resource pages, and relevant creators.
- [ ] Match each prospect to a useful resource or an honest product demonstration.
- [ ] Prepare personalized outreach for owner review. Sending messages requires explicit authorization.
- [ ] Track relevant referring domains and referral quality rather than trying to match the competitor's raw backlink count.

Avoid paid ranking links, mass directory submissions, and disguised promotional comments. New resource pages should solve distinct needs rather than multiply keyword variants.

## Candidate query-to-page map

These are product-fit hypotheses, not verified keyword-volume or difficulty estimates. Preserve established routes unless Search Console and content review justify changes.

| Search intent | Preferred destination | Priority |
| --- | --- | --- |
| Homestead management app | `/` | High |
| Free printable homestead planner | `/planner/` | High |
| Chicken record keeping / egg tracking app | `/use-cases/chicken-keepers/` | High |
| Homestead chore tracker | `/use-cases/homestead-task-tracker/` | High |
| Garden records and harvest tracking | `/use-cases/gardeners/` | High |
| Equipment maintenance app | `/features/equipment/` | Medium |
| How to keep equipment maintenance records | `/guides/equipment-maintenance-records/` | Medium |
| Homestead app for Mac | `/features/macos/` | Medium |
| Homestead Planner alternative / comparison | Proposed `/compare/homestead-planner/` | Medium |

The broad term “homestead planner” can mean printable pages, property-layout software, or management software. Match the page to the intent rather than trying to make one page cover all three.

## Suggested 90-day sequence

The schedule starts when implementation begins, not on the document date.

| Window | Deliverables | Evaluation |
| --- | --- | --- |
| Days 1–14 | Baseline, indexing checks, sitemap/video corrections, homepage clarity | Priority pages accessible; baseline and intended queries recorded |
| Days 15–30 | Verified comparison, planner improvements, chicken and maintenance examples | Relevant query impressions; downloads and app interest where measurable |
| Days 31–60 | Focused worksheets, contextual links, authorized targeted outreach | Relevant referring domains, useful engagement, broader query coverage |
| Days 61–90 | Improve pages gaining impressions; investigate CTR and URL overlap; expand successful topics | Qualified non-brand clicks and attributable app adoption |

No first-page deadline or traffic-growth percentage is promised. Review both rolling 28-day results and longer trends; small samples, indexing lag, seasonality, and device differences can distort short-term comparisons.

## Verification and implementation boundaries

- Follow the README's metadata, canonical, trailing-slash, breadcrumb, internal-link, and retired-URL conventions.
- Run the normal site build after implementation. Inspect changed pages on mobile and desktop; check links, headings, download behavior, and schema as relevant.
- Do not retire indexed URLs based on vocabulary overlap alone. Review actual query performance and preserve old routes if consolidation is justified.
- Keep source findings distinct from verified production behavior. Recheck the deployed output after release.
- This document authorizes no deployment, tracking installation, external outreach, or product changes by itself. It records the proposed work for subsequent implementation requests.

## Sources and related documents

Observed September 9, 2026; product pages and prices may change.

- [Homestead Keeper homepage](https://homesteadkeeper.com/)
- [Live robots.txt](https://homesteadkeeper.com/robots.txt)
- [Live sitemap](https://homesteadkeeper.com/sitemap-0.xml)
- [Free planner](https://homesteadkeeper.com/planner/)
- [Product and pricing details](https://homesteadkeeper.com/more-info/)
- [Homestead Planner homepage](https://homesteadplanner.net/)
- [Competitor feature directory](https://homesteadplanner.net/features)
- [Competitor Almanac](https://homesteadplanner.net/almanac)
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: sitemap modification dates](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: video structured data](https://developers.google.com/search/docs/appearance/structured-data/video)
- [Google: video indexing requirements](https://developers.google.com/search/docs/appearance/video)
- [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- `SEO_AUDIT.md` — earlier audit and implementation history; revalidate remaining findings.
- `docs/AEO-AUDIT-2026-08-12.md` — earlier answer-engine readiness audit.

## Implementation log

| Date | Change | Validation |
| --- | --- | --- |
| 2026-09-09 | Documented the competitive audit and implementation plan; linked it from README | Documentation review and diff check; no website behavior changed |
| 2026-09-09 | First local implementation: accurate sitemap/video metadata, clearer homepage copy, three contextual use-case links, and baseline worksheet | `npm run build` passed (59 pages); built-output checks passed for H1, links, sitemap, and seven video occurrences; local homepage HTTP 200. Not deployed; Search Console and external rich-result validation pending. |
| 2026-09-09 | Added sourced Homestead Planner comparison, reused pricing data, added two contextual inbound links and breadcrumbs | Build passed (60 pages). Built-output checks passed for canonical, sitemap inclusion, one H1, eight rows, breadcrumb destinations, and local links/assets. No deployment or ranking claim. |
| 2026-09-09 | Added a print-ready weekly egg-production log with completed example; linked it from the planner and chicken guide | Build passed (61 pages). Built-output checks passed for metadata, 7 blank and 7 example rows, schema, sitemap, breadcrumbs, print behavior, local links/assets, and two inbound links. Local route returned HTTP 200. Not deployed. |
| 2026-09-09 | Added a print-ready equipment-maintenance log with a completed mower service history; linked it from the planner and equipment guide | Build passed (62 pages). Built-output checks passed for metadata, 8 blank and 3 example rows, schema, sitemap, breadcrumbs, print behavior, local links/assets, and two inbound links. Local route returned HTTP 200. Not deployed. |
| 2026-09-09 | Added a print-ready seasonal maintenance checklist with a completed property example; linked it from the planner and maintenance guide | Build passed (63 pages). Built-output checks passed for metadata, 10 blank and 5 example rows, schema, sitemap, breadcrumbs, print behavior, local links/assets, and two inbound links. Local route returned HTTP 200. Not deployed. |
| 2026-09-09 | Added a print-ready garden planting and harvest log with a completed tomato example; linked it from the planner and vegetable-garden guide | Build passed (64 pages). Built-output checks passed for metadata, 5 blank care rows, 6 blank harvest rows, 4 care and 4 harvest examples, schema, sitemap, breadcrumbs, print behavior, local links/assets, and two inbound links. Local route returned HTTP 200. Not deployed. |
| 2026-09-09 | Added a two-page print-ready farm-sitter handoff checklist with a fictional completed weekend example; linked it from the planner and handoff-binder guide | Build passed (65 pages). Built-output checks passed for metadata, 7 blank routine rows, 4 blank issue rows, 4 routine and 3 issue examples, schema, sitemap, breadcrumbs, two-page portrait print behavior, local links/assets, and two inbound links. Local route returned HTTP 200. Not deployed. |

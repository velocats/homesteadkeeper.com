# SEO baseline — September 9, 2026

Status: Collection prepared; Search Console and conversion data unavailable in this session. Blank metrics below are unknown, not zero. Complete this before setting numerical growth targets or consolidating routes.

## Collection settings

Use the Search Console property for `homesteadkeeper.com`, Search type Web. Export the most recent complete 28 days and the preceding 28 days, recording the actual dates and any partial-data exclusions. Also export the longest useful available period (ideally three months or more). Start with all countries/devices, then examine US and mobile/desktop segments independently. Keep the same filters when comparing periods.

Split brand queries (Homestead Keeper and recognizable spacing/spelling variants) from non-brand queries. Do not classify generic “homestead planner” as your brand. Use query/page exports together to inspect overlap; do not assume separate dimension totals will reconcile because Search Console omits some query data.

| Metric | Recent 28 days | Previous 28 days |
| --- | --- | --- |
| Date range | Pending | Pending |
| Non-brand clicks | Pending | Pending |
| Non-brand impressions | Pending | Pending |
| Non-brand CTR | Pending | Pending |
| Non-brand average position | Pending | Pending |
| Brand clicks | Pending | Pending |
| Planner downloads | Not instrumented/verified | Not instrumented/verified |
| App Store outbound clicks | Not instrumented/verified | Not instrumented/verified |
| Attributable installations | App Store data needed | App Store data needed |

## Priority URL inspection

For each URL, record index status, last crawl, user-declared canonical, Google-selected canonical, and any reported reason for exclusion. Check sitemap processing separately. A local successful build does not establish Google indexing.

- `/`
- `/planner/`
- `/use-cases/homestead-management-app/`
- `/use-cases/chicken-keepers/`
- `/use-cases/gardeners/`
- `/use-cases/homestead-task-tracker/`
- `/guides/what-records-to-keep-for-chickens/`
- `/guides/homestead-maintenance-checklist/`

Use the candidate query map in the competitive plan. Pay particular attention to queries returning both the homepage and the homestead-management use-case page. Similar titles or vocabulary alone do not justify a redirect.

## Interpretation and conversion measurement

- Compare changes within relevant query/page groups, accounting for seasonality, device, position and sample size.
- Record deployment dates separately from implementation dates. September 9 source changes are not yet a production event.
- App Store clicks, installations, and purchases are different metrics. Preserve this distinction in reports.
- No analytics or new tracking was installed in this first pass. Select an appropriate measurement method and review disclosures before doing so.
- Store future raw exports outside publicly served directories. Record only necessary aggregate findings here.

## First implementation validation

The production build completed with 59 generated pages (including utility and retired routes). Built-output checks confirmed one homepage H1, all three new contextual destinations exist, sitemap modification dates are omitted, and six tutorial VideoObjects plus the checklist guide VideoObject contain verified publication dates and embed URLs without incorrect watch-page content URLs. Local homepage returned HTTP 200.

External Rich Results Test, Search Console inspection, field performance measurements, and post-deployment verification remain pending. No Google ranking improvement is asserted.

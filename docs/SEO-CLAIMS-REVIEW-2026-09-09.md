# Product claim review — September 9, 2026

This is a publication checklist for the claims used on the homepage, pricing, product tour, and feature pages. “Site evidence” means the claim is supported by the current public website and linked App Store listing; it does not replace a release-owner check against the installed app build.

| Claim family | Current wording | Evidence in project | Release-owner check |
| --- | --- | --- | --- |
| Platforms | iPhone, iPad, and Mac; iOS, iPadOS, macOS | App Store URL, `/features/macos/`, product tour | Confirm the current App Store compatibility list and latest Mac build |
| Account | No Homestead Keeper web account required | `/privacy/`, `/faq/`, About page | Confirm first-run and sync behavior in the current release |
| Offline/local-first | Records can be entered offline and remain on Apple devices | `/privacy/`, `/more-info/`, homepage copy | Test entry, relaunch, and sync recovery with current release |
| Sync | Optional iCloud sync through the user’s Apple ID | `/privacy/`, `/faq/` | Confirm current sync scope and any known limits |
| Free plan | Up to 20 total items, with core records, reminders, calendar, Field Log, and demo homestead | `/pricing/`, `/faq/`, App Store listing | Confirm the item count and included features in the current release |
| Pro plan | Unlimited items, PDF/CSV exports, backup restore/import, QR labels, documents, and advanced schedules where supported | `/pricing/`, `/features/reports/`, App Store listing | Confirm each Pro feature is present and label version-dependent features accurately |
| Pricing | $2.99 monthly, $19.99 yearly, $39.99 lifetime | `pricingLastVerified` and pricing page; U.S. App Store context | Recheck U.S. storefront prices before each commercial copy release |
| Records | Animals, gardens, orchard, bees, equipment, property, inventory, pantry, reminders, reports | Feature directory and individual feature pages | Confirm the current release still exposes each listed area |
| Reports | Homestead, cost, production, inventory, maintenance, warranty, and property handoff summaries | `/features/reports/` and product tour | Confirm report names and PDF/CSV availability in the current release |

The public copy already uses “where supported” for version-dependent documents, schedules, QR labels, and exports. Keep that qualifier until the release-owner check confirms the exact build. Do not convert an App Store outbound click into an installation or purchase claim.

## Release checklist

- [ ] Record the app version and date checked.
- [ ] Confirm platform compatibility in the App Store listing and installed builds.
- [ ] Test no-login first run, offline entry, and optional iCloud sync.
- [ ] Confirm Free item limit and Pro unlocks.
- [ ] Confirm each report, export, backup, QR, document, and schedule claim.
- [ ] Update `src/data/site.ts` and affected copy in one change if wording or prices changed.
- [ ] Re-run `npm run build`, then validate the deployed canonical URLs and sitemap.

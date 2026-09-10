> [!IMPORTANT]
> **Superseded on 2026-09-10 by [DESIGN-REFRESH-ELEVENLABS-2026-09-10.md](DESIGN-REFRESH-ELEVENLABS-2026-09-10.md).**
> The design described below is no longer what the site looks like. The Steep
> adaptation shipped in full (six steps, all six committed), and was then
> replaced: its warm canvas never resolved satisfactorily, and it tolerated the
> card grids the current system removes. This document is kept because its
> measurements and its record of what broke are still useful history — but do
> not build against it.

# Design refresh plan — "Steep" editorial system

**Date:** 2026-09-10
**Reference:** [Steep — "serif analytics on warm paper"](https://styles.refero.design/style/75fdb89f-ca64-41b3-af36-7a78bd09448e) (live site: <https://steep.app>), from the Refero Styles gallery.
**Scope:** Presentation only. No copy, no routes, no DOM restructuring, no metadata changes.

---

## 1. Why Steep

Candidates reviewed from the gallery, filtered to warm/paper systems (the only family
compatible with the existing cream canvas):

| Style | Read | Verdict |
| :--- | :--- | :--- |
| **Steep** — serif analytics on warm paper | Editorial serif display at weight 400, ~97% achromatic, one rationed peach/sienna accent pair, 24px flat cards, pill buttons, shadow only on floating product screenshots | **Selected** |
| MindMarket — warm storybook on cream paper | Cream `#f5f1e4` canvas, hairline ink borders, single Inter family, 144px display, four playful pops (grass, sky, coral, sunshine) | Runner-up. Canvas matches exactly, but four chromatic pops fight "calm" |
| Seline Analytics — quiet analyst's desk on warm paper | Stone canvas `#fafaf9`, one vivid cyan accent, 14px dominant body | Rejected — cyan accent is wrong for an agrarian product |
| August Health EHR — warm cream pharmacy with violet | Cream + violet | Rejected — violet accent |
| Calendly, Linear, Apple, Impossible Foods, Auros | Cool marble / midnight / punk poster | Rejected — wrong temperature |

Steep fits Homestead Keeper for three reasons:

1. **The product is records, presented calmly.** Steep's whole thesis is presenting
   data-heavy product surfaces as an editorial magazine spread rather than a dashboard
   shell. Homestead Keeper's showcase blocks already do this — each section leads with a
   real app screen floating beside prose. Steep formalizes a pattern the site is already
   reaching for.
2. **The site is content-heavy.** Guides, use cases, workflows, comparison tables, and FAQ
   pages carry the SEO weight. A serif display face over a quiet sans body is the correct
   typographic system for long-form reading; the current single-sans system flattens it.
3. **The accent pair already exists here.** Steep's Blush Peach `#fbe1d1` / Sienna Brown
   `#5d2a1a` is, within a few degrees of hue, the site's `--clay` `#a84b35` /
   `--clay-dark` `#793223`. The migration is a value shift, not a re-brand.

### The one adaptation

Steep is achromatic on **white**. Homestead Keeper is warm on **cream**, with deep green
as its brand color. A literal transplant would delete the green and the cream, which is a
re-brand, not a refresh. The plan therefore adopts Steep's **structure and discipline**
and substitutes two roles:

- Steep's `Ink Black #17191c` (headings, filled CTA, nav, the system's only dark surface)
  → a **darkened brand green `#1d2a20`**. At that value it reads as near-black at a
  glance, satisfies Steep's "one dark surface" rule, and keeps the brand.
- Steep's `Paper White #ffffff` canvas → the existing **cream `#fbf4e7`**, with card
  surfaces staying *lighter* than the canvas (`#fffaf0`) rather than darker. Steep's
  darker mist layer reads muddy over cream; a lighter flat card achieves the same
  "quietly nested, no border, no shadow" result.

Everything else — the 400-weight serif, the achromatic discipline, the single rationed
accent card, 24px card radius, pill buttons, 80px section gaps, shadow reserved for
floating screenshots — transfers unchanged.

---

## 2. Token changes

All of this lives in the `:root` block of [global.css](../src/styles/global.css).

### Color

| Token | Current | Proposed | Steep role |
| :--- | :--- | :--- | :--- |
| `--canvas` (was `--cream`) | `#fbf4e7` | `#f2efe7` | Level 0 — Canvas |
| `--surface` (was `--paper`) | `#fffaf0` | `#fdfcf9` | Level 1 — Card Mist (flat, borderless) |
| `--surface-2` (was `--cream-2`) | `#f2e5cf` | `#e7e2d7` | Level 2 — Section Fog (alternating bands) |
| `--ink` | `#263027` | `#1d2a20` | Ink Black — headings, filled pill, nav, footer band |
| `--muted` | `#66705f` | `#656057` | Slate Gray — body, links, footer copy |
| `--muted-2` *(new)* | — | `#948d81` | Ash Gray — tertiary labels, tags, captions |
| `--line` | `#dfd2b9` | `#e4ddcd` | Hairline — inputs and table rules only |
| `--accent-wash` *(new)* | — | `#f7e0cf` | Blush Peach — one accent card per page |
| `--accent-ink` (was `--clay-dark`) | `#793223` | `#793223` *(unchanged)* | Sienna Brown — ink on accent surfaces only |

**Retired:** `--green`, `--green-2`, `--clay`, `--gold`, `--sage-2`. Green survives only as
`--ink`. Sage tints and gold are the chromatic noise Steep's "Don't" list forbids.

> Steep's rule holds here: **`--accent-ink` never appears as body text on the canvas.**
> It is the ink for accent-wash surfaces and nothing else. `.text-link` and `.eyebrow`,
> which currently use `--clay-dark` on cream, move to `--ink` and `--muted-2`.

### Typography

Steep pairs Signifier (display serif, weight 400 at every size) with Söhne (body sans).
Recommended free substitutes:

- **Display:** Source Serif 4 (variable), self-hosted, latin subset, weight 400 only —
  roughly 35 KB woff2. Steep names it as an approved substitute.
- **Body:** keep the existing `ui-sans-serif, system-ui` stack. Steep's approved
  substitute for Söhne is Inter *or* the system stack; the system stack costs nothing and
  the site's performance budget is worth more than the last 5% of fidelity.

| Token | Current | Proposed |
| :--- | :--- | :--- |
| `--font-display` *(new)* | — | `"Source Serif 4", ui-serif, Georgia, serif` |
| `--text-2xl` (h1) | `clamp(2.25rem, 4vw, 3.5rem)` | `clamp(2.75rem, 5.5vw, 4rem)` — 44→64px, Steep's heading→heading-lg |
| `--text-xl` (h2) | `clamp(1.6rem, 2.4vw, 2rem)` | `clamp(1.9rem, 3.2vw, 2.75rem)` — 30→44px |
| `--text-lg` (h3) | `1.5rem` | `1.625rem` — 26px, **sans**, weight 450 |
| `--text-body` | `1rem` | `1.0625rem` — 17px / 1.35, Steep's body step |
| `--fw-medium` | `500` | `450` — Steep's half-step hierarchy |
| h1/h2 weight | `500` | **`400`** |
| h1 tracking | `-0.021em` | `-0.015em` at 44/64px; `-0.025em` if a 90px display lands |

**The signature rule:** serif headings stay at weight 400 at every size. `h1`, `h2`, and
section headings switch to `--font-display`; `h3` and below stay sans. No bold serif
anywhere.

### Shape, spacing, elevation

| Token | Current | Proposed |
| :--- | :--- | :--- |
| `--radius-sm` | `8px` | `12px` — images |
| `--radius-md` | `16px` | `16px` — inputs, small cards *(unchanged)* |
| `--radius-lg` | `28px` | `24px` — content cards |
| `--radius-pill` *(new)* | — | `9999px` — all buttons |
| `--shadow-sm` | soft glow | **removed from cards** |
| `--shadow-lg` | soft glow | `0 0 0 1px rgba(29,42,32,.05), 0 20px 25px -5px rgba(0,0,0,.10), 0 8px 10px -6px rgba(0,0,0,.10)` — screenshots only |
| Section gap | `clamp(2.3rem, 5vw, 4.8rem)` | `clamp(3rem, 6vw, 5rem)` — Steep's 80px |
| Page max-width | `1180px` | `1200px` |

There are 36 `shadow` references and 19 `--radius-md` references in the stylesheet; the
audit pass below covers them.

---

## 3. Component changes

| Selector | Change |
| :--- | :--- |
| `.site-header` | Drop the border-bottom and the backdrop blur. Steep's nav is "whisper-quiet" — transparent bar, logo left, nav center-right, one filled pill right. Remove the sage pill on the active nav item; active state becomes `--ink` text against `--muted` siblings. |
| `.button` | `border-radius: var(--radius-pill)`, padding `0.7rem 1.25rem`, weight 400 (not 600). |
| `.button.primary` | Fill `--ink`, text `--surface`. |
| `.button.secondary` | Transparent fill, `1px solid var(--ink)`, text `--ink`. Steep pairs these on the same row — the hero already does. |
| `.card`, `.feature-card`, `.map-card`, `.faq-item`, `.timeline li`, `.video-card` | **Remove border and box-shadow.** Background `--surface`, `border-radius: 24px`. This is the largest single visual change. |
| `.callout-card` | Becomes the Accent Peach Card: background `--accent-wash`, text and headings `--accent-ink`, no border, no shadow, 24px. **Maximum one per page** — audit `.callout-card` usage and demote extras to `.card`. |
| `.pricing-card.highlighted` | Currently sage + clay border. Becomes `--accent-wash` — but only if the page has no other accent card. Otherwise: `--surface` with a 1.5px `--ink` outline. |
| `.device-shell` / `.screenshot-frame` | The only elements that keep elevation. `border-radius: 20px`, the new `--shadow-lg`, drop the 10px paper bezel in favor of the `0 0 0 1px` ring. |
| `.hero .screenshot-frame::before` | Remove the sage→cream gradient wash. Steep floats artifacts on bare canvas. |
| `.eyebrow` | `--muted-2`, weight 400, keep the uppercase tracking. Steep's tags are "typographic, not badges." |
| `.text-link` | `--ink`, weight 400, no underline at rest, underline on hover. Append `→` to the label where the link ends a block. |
| `.cta-band` | Already a dark band — set it to `--ink` and invert the pill pair. |
| `.site-footer` | `--surface-2` band, `--muted` copy, `--muted-2` for the legal line. |
| `.check-list li::before` | `✓` moves from green to `--ink`. |
| `.trust-strip`, `.workflow-band`, `.soft-panel` | Any `--sage-2` fill becomes `--surface-2`. |

---

## 4. Files to touch

| File | Work |
| :--- | :--- |
| `src/styles/global.css` | ~90% of the change. Token block, then a sweep of the 36 shadow and 19 radius references, then the component table above. |
| `src/layouts/Layout.astro` | `<link rel="preload">` for the Source Serif 4 woff2 + `@font-face` with `font-display: swap`. |
| `public/fonts/` *(new)* | `source-serif-4-latin-400.woff2` — 48.5 KB, variable latin subset. |
| `src/components/Header.astro` | No markup change expected; verify the mobile menu still reads correctly without the header border. |
| `src/pages/features.astro`, `src/pages/planner.astro` | The only two pages with local `<style>` blocks — re-point any hard-coded colors at tokens. |
| `src/components/*.astro` | Markup unchanged. Only class swaps where a `.callout-card` needs demoting to `.card`. |

Everything else is class-driven from the single stylesheet, which is why this is tractable.

---

## 5. Sequence

1. ~~**Tokens.** Rewrite `:root`. Keep the old names as aliases for one commit so nothing
   breaks mid-migration; delete the aliases at the end.~~ **Done 2026-09-10.** Also
   normalized eight hard-coded `rgba()` literals of retired tokens (sage nav pill, old
   line color, old green rings, footer and table-head washes) so the token layer is
   actually authoritative.
2. ~~**Type.** Ship the font, add `--font-display`, switch `h1`/`h2`, drop heading weight to
   400, apply the new scale.~~ **Done 2026-09-10.** The guide templates are where the
   serif pays off most — the article pages now read as editorial rather than as
   marketing. Three deviations from this plan, all measured rather than guessed:

   - **Body leading is 1.6, not Steep's 1.35.** The size is the reference's (17px); the
     measure is ours, because this site carries long-form guides and 1.35 at 17px is a
     marketing-page rhythm, not a reading one.
   - **Clamp floors pulled back for mobile.** `--text-2xl` at Steep's flat 44px minimum
     pushed the homepage CTA toward the fold on a 375px screen. Floors are now 38px
     (h1) and 28px (h2); the desktop end is untouched at 64px and 44px. The CTA sits at
     492px against an 812px fold.
   - **The footer dropped to `--text-sm`.** Raising body copy from 16px to 17px pushed
     the last footer column 2px past the page edge. Scaling the footer to the caption
     step fixes it and is the more faithful reading of the reference anyway — Steep's
     footer copy is small and muted. Zero horizontal overflow now on `/`, `/pricing/`,
     `/features/`, `/support/`, `/planner/`, and a guide page, at 1280px and at 375px.

   The font is 48.5 KB, not the ~35 KB estimated above: the latin subset of Source Serif
   4 is a variable font carrying an optical-size axis, which is worth the extra 13 KB at
   display sizes.
3. ~~**Shape.** Radii, then strip borders and shadows from cards. Re-add elevation only to
   `.device-shell`.~~ **Done 2026-09-10.** Cards are flat and borderless at 24px, buttons
   are pills at weight 400, and elevation is confined to exactly four things — verified
   by enumerating every element on the homepage with a computed `box-shadow`:
   `.device-shell`, `.screenshot-trigger`, `.lightbox-panel`, `.lightbox-close`. The
   10px paper bezel on `.device-shell` is gone, replaced by the hairline ring inside
   `--shadow-artifact`. Canvas deepened to `#f5ecda` as the contrast work required.

   Two knock-on failures the canvas move caused, both found by measuring rather than
   looking:

   - **`--surface-2` collapsed into the canvas.** At `#f6efe1` against the new
     `#f5ecda` it measured 1.026:1 — the alternating section bands and the footer wash
     had effectively disappeared. Deepened to `#efe5d2` (1.065:1), which inverts the
     reference's arrangement: because our cards sit *lighter* than the canvas, the
     level-2 band has to sit *deeper* than it.
   - **`--muted` fell below AA on the new band.** A deeper `--surface-2` put body copy
     at 4.30:1. Darkened `--muted` to `#656057`, which clears AA on all four surfaces
     with margin — worst case 4.91:1 on the accent wash. Worth noting that the old
     `#6f6a60` was already at 4.23:1 on `--accent-wash`; step 1 checked `--accent-ink`
     against that surface but not `--muted`, so this fixes a latent failure too.

   One regression fixed in passing: `.pricing-card.highlighted` distinguished itself
   with `border-color` alone, which became a no-op the moment the shared card rule lost
   its `border-width` — the recommended plan silently stopped looking recommended. It
   now carries a 1.5px inset `--ink` ring, the plan's non-accent option, which keeps the
   one-accent-card-per-page budget free for step 4.
4. ~~**Color sweep.** Retire green/sage/gold, place the single accent card per page.~~
   **Done 2026-09-10.** All nine legacy aliases are gone and the sheet references only
   role-named tokens. `.callout-card` is now the Accent Peach Card — `--accent-wash`
   ground, `--accent-ink` type — and it is the single chromatic surface on any page that
   carries one. The tinted sage-to-cream wash behind the hero screenshot is removed;
   Steep floats artifacts on bare canvas.

   **The eyebrow question, resolved against this plan.** The table above sent the small
   uppercase labels to `--muted-2`. I put them on `--muted` instead. `--muted-2` is
   3.01:1 — fine for the separator glyphs it now exclusively serves, but these labels
   are functional (section names, plan names, workflow categories), and shipping
   meaningful text below AA to match a reference is the wrong trade. `--muted` is 5.32:1
   on the canvas and still recedes; the letter-spacing is what makes them read as tags.

   **One documented exception to the accent-ink rule.** `--accent-ink` appears on
   `:focus-visible` outlines as well as on accent surfaces. A focus ring is neither body
   text nor a surface, and a warm 8.37:1 ring is materially better for keyboard users
   than a neutral one. Every other accent-ink use is on `--accent-wash`.

   Prose link underlines also drop from tinted clay to `--muted-2`, and `.text-link`
   becomes ink with an arrow suffix and no underline at rest, per the reference.
5. ~~**Header, footer, CTA band.**~~ **Done 2026-09-10.** The header loses its rule, its
   backdrop blur, and the filled pill on the active nav item; the current page is now
   marked by ink against muted siblings, which is how Steep's nav groups without visual
   weight. It keeps an opaque `--canvas` ground because it stays sticky and content
   scrolls under it. The footer loses its top rule and its links go muted. The mobile
   menu button picks up the pill geometry. Ghost buttons lose their filled background so
   the filled/ghost pair reads as Steep intends.
6. ~~**Audit pass.** Grep for the retired tokens; check every page renders.~~
   **Done 2026-09-10.** The audit found three real defects, two of them live regressions
   introduced by this refresh:

   - **Nine pages referenced tokens deleted in step 4.** `src/pages/planner.astro`, the
     five `src/pages/planner/*.astro` sheets and `src/pages/guides/[slug].astro` carry
     their own `<style>` blocks using `--green`, `--green-2` and `--paper`. With those
     tokens gone the declarations became invalid at computed-value time, so
     `.mini-download` on the planner page was rendering with a transparent background
     instead of a filled one. My earlier inventory of scoped styles missed these because
     it globbed `src/pages/*.astro` without recursing. All nine now use live tokens.
   - **`.row-number` on three planner sheets measured 4.00:1** against a hard-coded
     `#7b8176`. Now `--muted`.
   - **`features.astro` referenced five tokens that have never existed** in this
     codebase — `--color-border`, `--color-surface-alt`, `--color-surface-hover`,
     `--color-muted`, `--color-heading` — so its cool Tailwind-slate fallbacks
     (`#e2e8f0`, `#64748b`, …) had always been live on a warm cream site. Pre-existing,
     not caused by this work, but squarely a colour-audit finding. Repointed at real
     tokens.

   Also made card surfaces opaque. Several carried translucent paper fills
   (`rgba(255,250,240,0.64–0.92)`) that let the canvas bleed through; on the deepened
   canvas those read washed out, and Steep's surfaces are flat and opaque. Fills on dark
   grounds keep their alpha.

   **Verification.** A DOM walker computed the effective composited background for every
   text-bearing element and flagged anything under WCAG AA (4.5:1, or 3:1 for large
   text). Zero failures across home, pricing, features, a feature detail page, a guide, a
   use case, a workflow, a comparison, support, about, FAQ, tutorials, playbook, a
   planner sheet, and 404 — at both 1280px and 375px. Zero horizontal overflow on all of
   them. 65 pages build; the font preload resolves and the file serves as
   `font/woff2` at 48,536 bytes.

   **SEO invariants held.** The complete `.astro` diff across all six steps is two lines
   of `<head>`: the `theme-color` value and the font preload link. No markup, copy,
   route, heading level, internal link, or JSON-LD changed. All 61 content pages still
   carry exactly one `<h1>`; the four pages with none are the pre-existing noindex
   redirect stubs, which never used the layout.

   **Known follow-up, not done.** `.workflow-meta span` chips keep an opaque surface fill.
   Steep would make these ghost tags — no background, no border, typographic weight only.
   That is a visible design change rather than an audit fix, so it is left for a decision
   rather than folded into a cleanup pass. The planner print sheets also keep their own
   green-tinted document palette (`#243122` ink, `#e9eedf` table heads); they are
   printable artifacts rather than site chrome, and both measure well above AA.

Steps 1–3 are independently shippable and reversible. Do not start step 4 before step 3
is reviewed — the borderless cards are the change most likely to need a second opinion.

---

## 6. Constraints and risks

**SEO invariants hold** (see `SEO_AUDIT.md`). This plan changes no headings levels, no
copy, no routes, no internal links, no JSON-LD. One `<h1>` per page is unaffected. The
only performance-relevant change is one added font file, mitigated by preload + subset.

**Contrast — measured after step 1 shipped.** All body text passes WCAG AA:

| Pair | Ratio | Verdict |
| :--- | ---: | :--- |
| `--ink` on `--canvas` | 13.67:1 | Comfortable |
| `--ink` on `--surface` | 14.37:1 | Comfortable |
| `--surface` on `--ink` (CTA band) | 14.37:1 | Comfortable |
| `--accent-ink` on `--canvas` | 8.37:1 | Comfortable |
| `--accent-ink` on `--accent-wash` | 7.20:1 | Comfortable |
| `--muted` on `--surface` | 6.00:1 | Comfortable |
| `--muted` on `--canvas` | 5.32:1 | Comfortable |
| `--muted` on `--surface-2` | 5.00:1 | AA |
| `--muted` on `--accent-wash` | 4.91:1 | AA — the binding case |
| `--muted-2` on `--canvas` | 3.01:1 | **Decorative and large text only.** Never body copy |

`--muted-2` is currently used only for breadcrumb chevrons and the separator dots in
`.audience-grid` and `.area-list`, which is within its brief.

**Risks:**

- *Borderless cards lose definition on a warm canvas.* **Confirmed and quantified.**
  `--surface #fffaf0` against `--canvas #fbf4e7` measures 1.051:1 — the cards are held
  apart by their borders today, and step 3 removes those. The fix stated in the first
  draft of this plan (lift `--surface` toward white) does not work: even pure `#ffffff`
  only reaches 1.094:1, because the ceiling is white. **Deepen the canvas instead** —
  `--canvas: #f5ecda` gives 1.128:1 against an unchanged `--surface`, and holds `--ink`
  at 12.74:1. Make that change as part of step 3, not before, so the two are reviewed
  together.
- *Serif at 400 can feel thin on low-DPI Windows displays.* Check at 100% zoom on a
  non-retina screen before shipping step 2.
- *Losing green reads as losing the brand.* Mitigated by `--ink` being a dark green and by
  the logo, which is untouched. If it still reads wrong after step 4, the recovery is to
  restore green on the footer band only — not on headings.
- *`.callout-card` usage.* Five occurrences, across `about`, `privacy`, `pricing`,
  `workflows/index`, and `workflows/import-excel-csv` — one per page, so the "one accent
  card per page" rule already holds. Re-check after any new page lands.


---

## 7. Follow-up: lowering the canvas chroma (2026-09-10)

The step 3 canvas, `#f5ecda`, was chosen purely to solve the borderless-card contrast
problem and never evaluated as a colour. At 57% saturation it is far too much chroma to
carry a full-page field — a warm hue that looks right on a small swatch reads as manila
across a whole screen.

The whole ramp moves to the same hue family at roughly 30% saturation:

| Token | Was | Now |
| :--- | :--- | :--- |
| `--surface` | `#fffaf0` | `#fdfcf9` |
| `--canvas` | `#f5ecda` | `#f2efe7` |
| `--surface-2` | `#efe5d2` | `#e7e2d7` |

This costs nothing structurally and improves two things measurably. Card-to-canvas
separation goes from 1.128:1 to 1.120:1 (unchanged in practice) while band-to-canvas
separation improves from 1.065:1 to 1.124:1, so the alternating sections read better than
they did. `--ink` sits at 13.0:1 and `--muted` at 5.43:1 on the canvas, 4.83:1 on the band
— all still AA.

The unplanned benefit: with the canvas neutral, the `--accent-wash` peach finally has room
to behave like an accent. Against the old tan it was one warm surface among several.

The warmth now lives in the hue rather than in the saturation, which is the correct place
for it on a page this size.

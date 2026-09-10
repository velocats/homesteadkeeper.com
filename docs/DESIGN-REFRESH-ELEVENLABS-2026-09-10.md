# Design system: ElevenLabs

**Date:** 2026-09-10
**Reference:** [ElevenLabs — "warm cream editorial with whispered headlines"](https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26) (live site: <https://elevenlabs.io>), from the Refero Styles gallery.
**Supersedes:** [DESIGN-REFRESH-STEEP-2026-09-10.md](DESIGN-REFRESH-STEEP-2026-09-10.md), kept for the record.

---

## Why the change

Two problems with the Steep implementation drove this:

1. **The canvas was never right.** Steep is achromatic on white; adapting it to a warm
   canvas meant inventing a tint, and every value tried read as either manila (`#f5ecda`,
   57% saturation) or muddy. ElevenLabs solves this at the source — its canvas is
   eggshell `#fdfcfc`, a warm off-white that is *nearly* white. There is no tint to get
   wrong.
2. **Too many cards.** Steep's system tolerates a card grid; the site had fourteen of
   them. ElevenLabs' layout spec is explicit: *"no card grids"*, *"one major visual per
   section"*, and a hairline divider used **54 times** as the most common border pattern.
   That is a direct answer, not an interpretation.

## Palette

Surfaces stack **downward** from the canvas — the reverse of the Steep adaptation, where
cards sat lighter than the ground.

| Token | Value | Role |
| :--- | :--- | :--- |
| `--canvas` | `#fdfcfc` | Eggshell — base page background |
| `--surface` | `#f5f3f1` | Warm taupe — panels, section bands |
| `--surface-2` | `#ebe8e4` | Stone — plates, callouts, deeper band |
| `--ink` | `#000000` | Headings, filled pills, inverted bands |
| `--ink-2` | `#44403b` | Graphite — hover states |
| `--muted` | `#44403b` | Graphite — body copy |
| `--muted-2` | `#777169` | Smoke — secondary, **canvas only** |
| `--muted-3` | `#a59f97` | Ash — decorative separators, never text |
| `--line` | `#ebe8e4` | Stone hairline — the primary separation device |

**Measured.** Ink is 20.5:1 on eggshell and 17.2:1 on stone. Graphite is 10.0/9.3/8.4:1
across the three surfaces — safe everywhere, which is why it carries body copy. Smoke
clears AA on the canvas (4.71:1) but **fails inside panels** (4.36 on taupe, 3.95 on
stone), so it is restricted to the canvas; ash at 2.56:1 is decorative only. Surface
separation is 1.081:1 (taupe on eggshell) and 1.193:1 (stone on eggshell).

No chromatic accent. The reference reserves its violet and orange strictly for product
visuals and forbids them on any UI element; this product has no equivalent visual, so the
system is fully achromatic. The peach callout card from the Steep build is retired — the
callout is now a stone plate, and emphasis comes from the surface step rather than colour.

## Typography

One family, three weights. Inter variable, latin subset, self-hosted and preloaded —
48,432 bytes, within 100 bytes of the Source Serif file it replaces.

- **Display (h1, h2):** Inter **300** with `-0.02em` tracking. h1 36→48px at 1.08, h2
  28→36px at 1.17. The whisper weight is the signature; never bold these.
- **Below 24px:** Inter 400/500 owns everything. h3 is 24px at 500.
- **Body:** 16px/1.5 with `+0.01em` tracking — deliberately the opposite tracking
  direction to the display, which is the reference's stated contrast device.
- Nothing exceeds weight 500 except the brand wordmark.

## Layout — the de-carding

The substantive change. Former cards split into two groups.

**Rule-separated rows** (no fill, no radius, `border-top: 1px solid var(--line)`):
`.card`, `.feature-card`, `.map-card`, `.faq-item`, `.info-card`, `.placeholder-card`,
`.link-card`, `.review-card`, `.trust-strip article`, `.feature-group`, `.timeline li`,
`.workflow-step`. Grids keep their columns but lose their vertical gap — the hairline
*is* the separation — and gain a wide column gap instead.

**Panels that survive** (taupe or stone fill, 20–24px radius, no border, no shadow):
`.pricing-card`, `.callout-card`, `.contact-panel`, `.soft-panel`, `.workflow-card`,
`.video-card`. The last two contain images and genuinely need a container; the reference
keeps a taupe feature card for exactly this.

Other layout changes: section padding to 56–96px, page measure to 1280px, radii to 20px
panels / 24px large / 4px inputs / pill buttons and tags, and elevation reduced to the
reference's near-invisible three-layer whisper (a hard 1px edge plus two 4% blurs),
carried only by screenshot artifacts and overlays.

## Verification

- 65 pages build. Inter resolves and serves; `document.fonts.check('300 48px Inter')` is
  true and h1 computes to exactly 48px / 300 / −0.96px / 1.08.
- A DOM walker computed the effective composited background and contrast for every
  text-bearing element: **zero AA failures and zero horizontal overflow** across home,
  pricing, features, use cases, guides, workflows, comparison, support, FAQ, a planner
  sheet, and 404 — at 1280px and 375px.
- **Zero undefined custom properties** referenced anywhere in the stylesheet, checked by
  enumerating every `var()` in every rule against the computed root.

### One regression this caught

Retiring the accent tokens left `:focus-visible` still referencing `--accent-ink`. An
undefined token makes the whole `outline` declaration invalid at computed-value time, so
`outline-style` collapsed to `none` — **keyboard focus rings were invisible sitewide**,
with no error and a passing build. Verified the mechanism directly rather than assuming
it: the same declaration computes to `none` with an undefined token and to
`solid rgb(0,0,0)` with `--ink`. The ring is now ink at 20.5:1.

That is the second time in this project that deleting a token silently broke a rule
elsewhere. The undefined-token sweep above should run after any token change.

## SEO

Unchanged and unaffected. No markup, copy, route, heading level, internal link, or
JSON-LD changes; the only `.astro` edits are the `theme-color` value and the preload
`href`.

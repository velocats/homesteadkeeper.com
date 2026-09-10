# Homestead Keeper layout and color proposal

Date: September 10, 2026. Status: proposed, not implemented.

Choose a restrained adaptation of **MindMarket** from Refero Styles. Give Homestead Keeper a welcoming, outdoors-oriented identity through cream surfaces, garden green accents, confident sans-serif headings, and generous product-led sections. The intended feeling is a useful companion for caring for a place.

## Reference review and choice

Reviewed four Refero style descriptions and visually inspected the live MindMarket homepage. These references are design inspiration; the specifications below are original implementation recommendations for Homestead Keeper.

| Reference | Relevant qualities | Decision |
| --- | --- | --- |
| [MindMarket](https://styles.refero.design/style/9130ad37-bf80-458f-b808-ac0ef6a8d1e9) | Cream, green, large sans-serif headings, rounded forms, playful illustration | Selected: the warmth and plant-associated color suit gardens, animals, seasonal chores, and family use. |
| [Steep](https://styles.refero.design/style/75fdb89f-ca64-41b3-af36-7a78bd09448e) | Serif editorial hierarchy, restrained peach accents, product artifacts | Attractive for record keeping, but the repository already documents an implemented and subsequently replaced Steep adaptation. |
| [Cosmos](https://styles.refero.design/style/eb804e3a-1b75-446c-8374-114bbabaf0cd) | Linen ground, image collage, quiet gallery layout | Better suited to a visual collection than explaining routine homestead work. |
| [Seline Analytics](https://styles.refero.design/style/7967c6d9-e50c-42b5-b4d1-74003ba41781) | Warm neutrals, compact product proof, blue action accents | Useful restraint, but the analytics character feels less personal. |

The [live MindMarket homepage](https://mindmarket.com/) currently opens with a large green field, oversized centered black heading, white navigation, and colorful characters. Refero describes a cream-led system. Use the Refero cream direction with the live site's confident hierarchy; the proposed palette and sizes below deliberately adapt both. Do not copy its characters or marketing content.

## Current site and scope

The local homepage currently uses an eggshell canvas, black text, light Inter headings, a split text-only hero, a tabbed product panel, rule-separated links and reviews, and a final download CTA. The stylesheet identifies the current system as ElevenLabs-inspired. Its organization is clear, but the near-monochrome treatment gives little visual indication of the app's outdoor subject matter.

This proposal covers the marketing website, including shared interior-page styles. It does not redesign the native app. It allows homepage layout changes and limited heading revisions while retaining product facts, route destinations, metadata, structured data, and existing useful content.

Keep the existing [ElevenLabs record](DESIGN-REFRESH-ELEVENLABS-2026-09-10.md) and [superseded Steep record](DESIGN-REFRESH-STEEP-2026-09-10.md) as history. This document becomes the implementation target only when the refresh is undertaken. The earlier recorded problems with warm surfaces and repetitive cards are explicit design constraints: review real screens against cream early, and keep most content unboxed.

## Proposed visual system

These are Homestead Keeper colors, not a literal export of MindMarket's tokens.

| Role / proposed token | Color | Application |
| --- | --- | --- |
| Canvas / `--canvas` | `#F5F1E4` | Main cream page background |
| Surface / `--surface` | `#FFFDF7` | Product stages, navigation, inputs |
| Warm field / `--surface-2` | `#E9E2D0` | Broad supporting sections and callouts |
| Ink / `--ink` | `#2C2E2A` | Headings and body text |
| Secondary ink / `--muted` | `#555B50` | Descriptions, captions, navigation |
| Garden green / `--brand` | `#315C3B` | Custom primary buttons, links, selected controls |
| Green hover / `--brand-hover` | `#25472D` | Primary action hover state |
| Screenshot stage / `--stage` | `#EFE6CF` | Warm frame behind the primary product image |
| Alternate stage / `--stage-alt` | `#F1EAD9` | Subtle alternating product-image frame |
| Divider / `--line` | `#D8D9CB` | Decorative section rules |
| Control border / `--control-border` | `#767C6D` | Input and outlined-control boundaries |

Aim for approximately 90% cream and pale neutral surfaces and 10% green emphasis. Use green for actions and the deep footer rather than large pale-green fields. Keep Apple's official App Store badge unchanged. Recheck every actual text/background and control pairing during implementation; do not inherit the reference's light gray text assumptions.

Keep the existing self-hosted Inter font. Increase display weight from 300 to 500 and use a responsive H1 around 40–72px, line-height 1.06, tracking -0.035em. Use H2 at 30–44px with 1.15 line-height; body at 17–18px with 1.6 line-height; labels and captions at least 14px. Long prose should remain around 65 characters wide. A 144px reference-style headline would overpower this product's longer, informative copy.

Use a 1200px content container, 24–48px desktop gutters, 20px mobile gutters, and 72–96px desktop section spacing, falling to 40–56px on phones. Major product stages can have 28–32px corners; small panels 16px; inputs 8px; buttons pill-shaped. Shadows belong only around app screens or overlays. Retain open rows for directories and reviews.

## Homepage layout

1. **Inset navigation.** Put the existing brand and navigation in a light, rounded bar with generous side margins. Retain existing destinations and dropdown groupings; use the existing responsive menu when they stop fitting. Keep the App Store action easy to locate. Avoid making the header so tall that it consumes the first phone screen.
2. **One clear hero with product proof.** Replace the text-only split with a roughly 55/45 copy-and-screen layout. Proposed H1: “Keep your homestead in good order.” Follow immediately with a descriptive sentence naming the homestead management app, animals, gardens, chores, and Apple devices. Pair the official download badge with “See how it works,” linked to the existing feature destination. Keep free/offline/account messaging grounded in current content. Show the existing Homestead Hub screenshot on a pale stage at right, uncropped and large enough to recognize. On phones, stack copy, actions, then screen.
3. **Compact trust row.** Place the current privacy and sync highlights directly after the hero. Use text with small simple icons; wrap naturally on phones.
4. **Three practical workflow stories.** Turn the existing three-tab panel into three visible sections: today's work, garden planning, and maintenance history. Alternate text and screen positions on wide screens, with text first in mobile reading order. Reuse `homestead-hub.webp`, `garden-bed-layout.webp`, and `report-maintenance.webp` plus their current factual descriptions and feature links. Give the hero's repeated Hub screen a smaller supporting role in the first story, avoiding two consecutive oversized copies. The point is to make each workflow discoverable without tab interaction.
5. **Find your fit.** Retain the chicken, garden, and chore links as three open columns separated by modest rules. Stack them on mobile. No repeated colored card grid.
6. **All the areas you manage.** Present the existing management-area list in one soft-green band with a short introduction. Use a tidy wrapping list, without turning every label into a large badge or implying unsupported links.
7. **Reviews.** Keep real excerpts, dates, attribution, and the App Store source. Use open quote rows and a little extra type scale rather than an autoplay carousel. Add no invented ratings, adoption counts, or endorsements.
8. **Closing download section and footer.** Use a deep-green rounded section with cream text, the official badge, and a pricing link. Retain the current free-tier limits. Group footer destinations clearly over the cream canvas.

The distinctive elements should be the warm canvas, inset navigation, stronger headings, and a sequence of spacious screen-and-copy sections. Decorative artwork is optional: at most a few original leaf or seed motifs, never competing with screenshots. The first implementation should work without commissioned illustrations.

## Interior pages

| Page family | Adaptation |
| --- | --- |
| Feature pages | Shared headline scale, green links, one pale screenshot stage, open supporting sections. |
| Guides, workflows, use cases | Compact hero, readable article column, clear subheads, existing internal links. Avoid oversized marketing spacing inside instructions. |
| Pricing and comparisons | Restrained plan panels; emphasize the recommended action with green and a text label. Keep table headers, plan details, and mobile comparison access intact. |
| Planner and playbook | Match typography and controls; preserve download links and the information hierarchy of resource libraries. |
| Support, FAQ, privacy | Strong form boundaries and focus states, readable body text, modest headers. |

## Implementation sequence

1. Capture baseline views of home, one feature page, pricing, a long guide, and support. Check the latest repository state before editing; the CSS has remnants of multiple prior design systems.
2. Update role tokens and typography in `src/styles/global.css`. Add explicit brand and control-border roles rather than repurposing ink for every action. Remove outdated comments as affected rules change. Trial the canvas against real app screenshots before spreading it across templates.
3. Adjust `src/components/Header.astro`, `CTA.astro`, and `Footer.astro` for the new surfaces and spacing. Preserve keyboard behavior, current-page indicators, and route helpers.
4. Recompose `src/pages/index.astro`. Evaluate the existing `Showcase.astro` for the visible workflow sections; keep screenshot enlargement through the existing screenshot components. Stop rendering `FeaturePanel.astro` on home if the visible stories replace it, but check other usages before deleting component code or styles.
5. Apply the system through `FeaturePage.astro`, `InternalLinkCards.astro`, `PricingCard.astro`, `ComparisonTable.astro`, and the shared layout. Scope homepage-only decoration so article and utility pages retain their density.
6. Verify representative pages and interactions, then remove obsolete selectors only after checking all routes. Keep rollout as a coherent change that can be reverted together.

## Acceptance checks

- Inspect at 320, 390, 768, 1024, and 1440px: no clipped screenshots, overlapping navigation, accidental horizontal page scroll, or excessive gaps. Intentional wide tables need a labeled scrolling region.
- Check keyboard navigation, menu disclosure, screenshot opening/closing, form labels and errors, and visible focus on both cream and green surfaces. Aim for at least 44px interactive targets.
- Verify WCAG AA contrast: 4.5:1 for ordinary text, 3:1 for large text and meaningful control boundaries. Selected states must also use a label, underline, or other non-color cue.
- Honor reduced motion. Avoid scroll-dependent content visibility and unnecessary hero animation.
- Use responsive screenshot assets and explicit dimensions. Load the primary hero image promptly and lazy-load lower images. Check layout shift and page performance against the baseline.
- Run `npm run build` and `npm run audit:css`; investigate relevant failures. Check App Store links, planner downloads, support form behavior, canonical URLs, and structured data for regressions.
- Review home plus representative feature, pricing, guide, planner, and support pages visually before considering the implementation complete.

This task delivers the plan only. No application code, styles, or deployment settings were changed.

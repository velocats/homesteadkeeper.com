# Planner handoff

Everything Codex needs to add a free printable-planner page to this Astro site.

- **`CODEX_PROMPT.md`** — the task. Give this to Codex. It is self-contained and tailored to
  this repo (Astro, `src/pages`, `Layout.astro`, `site.ts`, `global.css`, the existing form).
- **`assets/`** — ship-ready files:
  - `Homestead-Keeper-Planner.pdf` — the final 32-page printable (goes in `public/planner/`).
  - `preview/*.png` — page previews for the on-page gallery.
  - `qr.png` — QR to homesteadkeeper.com (optional).
- **`content/`** — the source copy for every section, in the planner voice (human, no em-dashes).
- **`build/`** — the generator that produced the PDF (`build_planner.py` + `img/`) and the
  fully self-contained `planner-full.html`. Only needed if the planner copy changes.

Design source of truth for the planner itself lives with the app repo at
`HomesteadKeeper/HOMESTEAD_PLANNER_SPEC.md` and `HomesteadKeeper/planner/`.

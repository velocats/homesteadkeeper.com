#!/usr/bin/env node
/**
 * CSS audit for the design system.
 *
 * Exists because two bugs in the 2026-09-10 redesign shipped past a green
 * build: deleting a token left `.mini-download` with a transparent background,
 * and left `:focus-visible` pointing at a token that no longer existed, which
 * made keyboard focus rings invisible sitewide. An undefined custom property
 * invalidates its whole declaration at computed-value time -- silently. No
 * build error, no console warning, nothing to notice.
 *
 * Everything here is static analysis with no dependencies, so it can run on
 * every push. It does not replace looking at the site; it catches the class of
 * failure that looking at the site is bad at.
 *
 * Usage:  node scripts/audit-css.mjs [--strict]
 *         --strict also fails on warnings.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const STRICT = process.argv.includes('--strict');

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ---------------------------------------------------------------- sources */

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

/** Every stylesheet the browser will actually see: the global sheet, plus the
 *  scoped <style> blocks Astro inlines into each built page. */
function collectSources() {
  const sources = [];
  const global = join(ROOT, 'src/styles/global.css');
  sources.push({ file: relative(ROOT, global), css: readFileSync(global, 'utf8') });

  const dist = join(ROOT, 'dist');
  let pages = [];
  try {
    pages = walk(dist).filter((p) => p.endsWith('.html'));
  } catch {
    err('dist/ not found — run `npm run build` before the audit.');
    return sources;
  }
  for (const page of pages) {
    const html = readFileSync(page, 'utf8');
    for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
      sources.push({ file: relative(ROOT, page), css: m[1] });
    }
  }
  return sources;
}

/* ------------------------------------------------- check 1: token wiring */

/** `var(--x)` with no fallback is a hard dependency on `--x` existing. */
function checkTokens(sources) {
  const defined = new Set();
  for (const { css } of sources) {
    for (const m of css.matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
  }

  const referenced = new Map(); // token -> Set(files)
  for (const { file, css } of sources) {
    for (const m of css.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
      const [, token, next] = m;
      if (next === ',') continue; // has a fallback, so it degrades safely
      if (!referenced.has(token)) referenced.set(token, new Set());
      referenced.get(token).add(file);
    }
  }

  for (const [token, files] of [...referenced].sort()) {
    if (!defined.has(token)) {
      const where = [...files].slice(0, 3).join(', ');
      const more = files.size > 3 ? ` (+${files.size - 3} more)` : '';
      err(`undefined token ${token} referenced with no fallback in ${where}${more}`);
    }
  }

  for (const token of [...defined].sort()) {
    const isScale = token.startsWith('--font-') || token.startsWith('--space-');
    if (!referenced.has(token) && !isScale) {
      warn(`token ${token} is defined but never referenced`);
    }
  }
  return defined;
}

/* --------------------------------------------------- check 2: contrast */

const hexOf = (css, token) => {
  const m = css.match(new RegExp(`${token}\\s*:\\s*(#[0-9a-fA-F]{3,8})`));
  return m ? m[1] : null;
};

const srgb = (h) => {
  h = h.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
};
const lum = (hex) => {
  const [r, g, b] = srgb(hex).map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

/**
 * The palette's own rules, encoded. Each entry is a promise the design system
 * makes; if a token value drifts, the promise breaks here rather than in
 * production.
 */
const CONTRACTS = [
  // text token, surface token, minimum, why
  ['--ink', '--canvas', 7, 'headings and filled controls'],
  ['--ink', '--surface', 7, 'headings inside panels'],
  ['--ink', '--surface-2', 7, 'headings on the deepest plate'],
  ['--muted', '--canvas', 4.5, 'body copy'],
  ['--muted', '--surface', 4.5, 'body copy inside panels'],
  ['--muted', '--surface-2', 4.5, 'body copy on the deepest plate'],
  ['--muted-2', '--canvas', 4.5, 'secondary text — canvas only, by design'],
  ['--canvas', '--ink', 4.5, 'inverted bands and filled buttons'],
];

/**
 * Borderless panels are told apart from the canvas by luminance alone. Below
 * about 1.05:1 they visually disappear -- the reason the canvas was darkened
 * in the first place.
 */
const SEPARATION = [
  ['--surface', '--canvas', 1.05, 'panels must stay visible without borders'],
  ['--surface-2', '--canvas', 1.05, 'section bands must read as bands'],
];

function checkContrast(css) {
  const val = (t) => hexOf(css, t);
  for (const [fg, bg, min, why] of CONTRACTS) {
    const a = val(fg), b = val(bg);
    if (!a || !b) { warn(`contrast contract skipped: ${fg} or ${bg} is not a hex literal`); continue; }
    const r = ratio(a, b);
    const line = `${fg} on ${bg} = ${r.toFixed(2)}:1 (need ${min}) — ${why}`;
    if (r < min) err(`contrast: ${line}`); else console.log(`  ok   ${line}`);
  }
  for (const [a1, b1, min, why] of SEPARATION) {
    const a = val(a1), b = val(b1);
    if (!a || !b) continue;
    const r = ratio(a, b);
    const line = `${a1} vs ${b1} = ${r.toFixed(3)}:1 (need ${min}) — ${why}`;
    if (r < min) err(`separation: ${line}`); else console.log(`  ok   ${line}`);
  }
}

/* ------------------------------------------- check 3: hard-coded colours */

/** Colour literals outside :root drift when the palette moves -- that is how a
 *  cool Tailwind slate survived unnoticed on a warm site, and how a 4.0:1 grey
 *  survived three planner pages. Translucency over a dark ground is legitimate,
 *  so only opaque literals are reported. */
function checkLiterals(sources) {
  for (const { file, css } of sources) {
    const body = css.replace(/:root\s*\{[\s\S]*?\n\}/g, '');
    const hits = new Set();
    for (const m of body.matchAll(/#[0-9a-fA-F]{6}\b|\brgb\([^)]*\)/g)) {
      if (/#(fff|000)(fff|000)?\b/i.test(m[0])) continue;
      hits.add(m[0]);
    }
    if (hits.size) warn(`${file}: ${hits.size} hard-coded colour(s) outside :root — ${[...hits].slice(0, 4).join(', ')}`);
  }
}

/* ------------------------------------------------------------------ run */

console.log('CSS audit\n');
const sources = collectSources();
console.log(`  scanned ${sources.length} stylesheet(s)\n`);

checkTokens(sources);
const globalCss = sources[0].css;
checkContrast(globalCss);
checkLiterals(sources);

console.log('');
for (const w of warnings) console.log(`  warn  ${w}`);
for (const e of errors) console.log(`  FAIL  ${e}`);

const failed = errors.length > 0 || (STRICT && warnings.length > 0);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(failed ? 1 : 0);

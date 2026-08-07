# eyü — Design System

Svelte 5 design system for all "Eyuel" brand things.

Studied [RobiMez/skit](https://github.com/RobiMez/skit) for **engineering discipline**
(type staircase, tonal ramps, hidden theme control) — **not its visuals**. Every choice
below is original to eyü: premium monochrome, painted-wall canvas, sharp technical icons,
engineered type. This is the contract any future product — including the portfolio —
builds on.

## Architecture

```
src/
  App.svelte                  specimen page: type · tone · icons · textures · components
  main.ts                     entry
  lib/
    tokens.css                THE contract — every token in one file
    app.css                   base styles + utility classes (type, patterns, grain wall)
    components/
      primitives/                 near-zero-context atoms
        Icon.svelte               eyü glyph pack (one component, 40+ names)
      ui/                         single-purpose composable components
        Badge / Button / BookingCard / Card / Dialog / EmptyState /
        Input / MicroLabel / Select / Separator / Skeleton / Table / ThemeToggle
      brand/                      owned identity
        BrandMark.svelte
```

Rules that keep it maintainable at hundreds of components:

- **No duplicated styles.** One component, one file, one concern.
- **Tokens are the contract.** No hex/oklch outside `tokens.css` (grep-verified).
- **Composition, not inheritance.** Slots + snippets; components are thin and extensible.
- **State in, callbacks out.** `Dialog` takes `open` + `onClose`; never mutates parent.
- **Naming:** `block__element--modifier`; classes carry the token name where relevant.

## Brand rules

1. **Fonts** — Geist (body/UI), Fraunces (display), Geist Mono (labels). Scales:
   `display 3.5—7.5rem`, `heading 1.5—2.5rem`, `body 0.8125—1.125rem`, `caption/mono`.
   Spacing derives from type rhythm, not arbitrary margins.
2. **Icons** — eyü pack: 24px grid, `stroke-width 1.5`, **square caps, miter joins**.
   `import Icon from '$lib/components/primitives/Icon.svelte'` →
   `<Icon name="arrow-up-right" size={18} />`. Add glyphs in the `glyphs` map.
3. **Monochrome** — a *ramp of blacks*, not one black. `--bg` (deepest) → `--surface`
   → `--surface-elevated` → `--surface-pressed`, plus `--ink` to `--surface-hover` /
   `--surface-active` / `--disabled-bg` / `--overlay`. Text granularity: `--text-primary`,
   `--text-secondary`, `--text-muted`, `--text-faint`, `--text-disabled`. No pure `#000`/`#FFF`.
4. **Energy** — one accent (violet `--accent`) + one complement (teal) used as emphasis
   on top of monochrome. Statuses: `--success --warning --danger`.
5. **Motion** — fast and functional: `100/160/240ms`, `--ease-standard` (decelerate).
   Motion communicates state (`loading`, `busy`, `focus`), never decoration.
6. **Spacing** — strict 8pt grid (`--space-1: 4px … --space-12: 128px`). No arbitrary padding.
7. **Painted wall** — the page *is* the texture: `--wall-mottle` (roller sheen) +
   `--wall-speck` (paint dust) tiled over `--bg`; chalk + film grain overlays
   (`body::before/::after`) at `--z-grain`. Patterns stack: `--plus-pattern` (+++),
   grain, grid, dots.
8. **Dark first** — `data-theme="dark"` default; light is first-class and remapped from
   the same ramp. Toggle in header, subtle until hover.
9. **Radius** — small and square: 2/4/6/10px + pill. Not playful, engineered.

## Quick start

```bash
npm install
npm run dev
```
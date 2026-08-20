# Mytheme expansion plan

## Goal

Turn Mytheme into the default Eyu frontend boilerplate: a coherent runtime token contract, reusable Svelte 5 primitives, a broad pattern library, a theme controller, and a demo/documentation surface that proves the system rather than only showcasing icons.

## Architecture

| Layer | Responsibility | Planned location |
| --- | --- | --- |
| Primitive tokens | Raw neutral, accent, spacing, typography, radius, motion, elevation, opacity, and z-index values. | `src/lib/tokens.css` primitive section |
| Semantic roles | Stable meaning-based roles with paired foreground values and interaction states. | `src/lib/tokens.css` semantic section |
| Component aliases | Component-consumable roles such as button, input, card, overlay, and chart series. | `src/lib/tokens.css` component section |
| Theme presets | Existing named Eyu colorways, normalized to override semantic primitives without changing component APIs. | `src/lib/tokens.css`, `src/lib/data/landing.ts` |
| Layout/pattern utilities | Container, stack, cluster, grid, prose, skip link, responsive shell, and pattern classes. | `src/lib/app.css` |
| UI primitives | Reusable Svelte 5 components with typed props, snippets, accessible states, and stable class names. | `src/lib/components/ui/` |
| Public exports | One import surface for UI components, data, and type helpers. | `src/lib/components/ui/index.ts`, `src/lib/index.ts` |
| Documentation/demo | A system overview, component inventory, role swatches, theme controls, and migration notes. | `README.md`, `docs/`, demo sections |

## Compatibility rules

Keep existing component filenames, existing Button variants, existing theme IDs, and existing token aliases working. Add new aliases rather than renaming old ones. Preserve the current visual identity: dark default, indigo velvet and charcoal foundations, sage/ochre/terracotta energy, fine grain, plus/blueprint technical patterns, and Outfit/Lexend/JetBrains Mono typography.

## New reusable primitives

Add `Container`, `Stack`, `Cluster`, `Surface`, `Field`, `StatusDot`, `Spinner`, `VisuallyHidden`, `Pagination`, and `IconButton`. These fill the highest-value boilerplate gaps without introducing a full component framework. Use snippets for composition, token CSS variables for styling, and native HTML semantics whenever possible.

## Theme behavior

Keep `ThemeToggle` as a binary light/dark compatibility control, but add a `theme.ts` utility for named preset application, storage, system preference handling, and safe browser-only access. Use a single `data-theme` attribute and a `data-motion` attribute for reduced motion or user-selected motion preferences.

## Verification

Run `npm ci`, `npm run check` after adding the Svelte checker dependency if appropriate, `npm run build`, and a token reference audit. Manually verify the demo in dark/light mode, a named alternate theme, keyboard focus, reduced motion, narrow viewport behavior, form error states, dialog focus, and interactive target sizes.

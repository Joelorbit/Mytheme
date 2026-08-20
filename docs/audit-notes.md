# Mytheme audit notes

The repository is a Svelte 5 + Vite + Tailwind 4 design-system starter with 41 component files, including 31 UI components, primitives, brand assets, and page sections. Its current identity is premium indigo velvet plus monochrome canvas, with Outfit/Lexend/JetBrains Mono typography, an 8pt spacing rhythm, texture patterns, and a large `tokens.css` contract.

The current token file is already broad in raw palette coverage: it is approximately 783 lines and declares 25 theme selectors plus 24 named theme presets in `src/lib/data/landing.ts`. However, it mixes foundational values and theme-specific semantic values in one large file, repeats many declarations across themes, and lacks a clearly separated semantic role layer for links, focus, info, success, warning, danger, overlays, chart series, surfaces, and interactive states.

The global CSS uses `var(--shadow-accent)` but the current token file does not define that variable. The current Button component has primary, secondary, ghost, and danger variants, but small and icon sizes are below the 44px touch-target baseline, and the link variant does not prevent activation when `aria-disabled` is set. These are compatibility and accessibility issues to address without breaking existing props.

The current component inventory is substantial but does not yet read as a complete boilerplate system. It needs a coherent public export surface, documented component taxonomy, richer form and feedback patterns, layout primitives, data-display patterns, responsive container utilities, semantic status roles, and a tested starter shell.

## External design-system findings

Material Design's official guidance separates raw design values from semantic color roles and maps paired foreground colors to their parent fills. It groups roles into primary, secondary, tertiary, error, surface, and outline families, with explicit container and `on-*` pairings. It also emphasizes that role pairings should preserve contrast across theme variation.

Applied implication: Mytheme should preserve its existing raw colorways but add a stable semantic role layer such as `primary`, `on-primary`, `primary-container`, `on-primary-container`, `secondary`, `tertiary`, `success`, `warning`, `danger`, `info`, surface levels, outline levels, focus, link, and inverse roles. Components should consume roles rather than raw palette values.

Sources:
- https://m3.material.io/foundations/design-tokens
- https://m3.material.io/styles/color/roles

Atlassian's design-token guidance treats tokens as reusable name/value decisions across color, typography, spacing, motion, elevation, opacity, and other foundations. Themes are collections of token values, and dedicated semantic tokens can distinguish text, links, icons, backgrounds, borders, charts, and skeleton loaders. The Design Tokens Community Group format supports token groups, aliases/references, descriptions, types, deprecation metadata, and portable exchange between tools.

Applied implication: preserve CSS custom properties as the runtime contract, but organize them into primitive, semantic, component, and utility layers. Add a machine-readable token manifest with descriptions and aliases so future theme generation and documentation do not depend on scanning one large CSS file.

Sources:
- https://atlassian.design/tokens/design-tokens
- https://www.designtokens.org/tr/drafts/format/

## Verification findings

The expanded cockpit rendered at `http://localhost:5173/` with the complete theme preset catalog, semantic token groups, forms, action variants, feedback alerts, and surface recipe visible in extracted page content. The browser console produced no runtime output or exceptions. Production build and `svelte-check` both pass cleanly.

# EyuTaste (Inspired by Robi)

Svelte 5 design system for all Eyuel brand things. Premium monochrome, painted-wall canvas, 24 custom colorways, 12 background texture patterns, sharp Skit technical icons, engineered typography.

## Architecture

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" width="100%" height="auto" style="background:#232323; border-radius:10px; border:1px solid #3c3c3c; font-family:'Lexend', system-ui, sans-serif;">
  <!-- Header Title -->
  <text x="40" y="45" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="20" font-weight="700" letter-spacing="-0.02em">EyuTaste System Architecture</text>
  <text x="40" y="68" fill="#888888" font-size="12" font-family="monospace">v5.0 · 24 Themes · 12 Textures · 75 Skit Glyphs · 8pt Grid</text>
  <line x1="40" y1="85" x2="840" y2="85" stroke="#3c3c3c" stroke-width="1" />

  <!-- Node 1: Entry Shell -->
  <rect x="40" y="110" width="230" height="90" rx="8" fill="#2a2a2a" stroke="#5a6237" stroke-width="1.5" />
  <text x="60" y="138" fill="#5a6237" font-family="monospace" font-size="11" font-weight="700">ENTRY / SHELL</text>
  <text x="60" y="160" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="16" font-weight="600">App.svelte</text>
  <text x="60" y="180" fill="#aaaaaa" font-size="12">eyutaste card + theme toggle</text>

  <!-- Node 2: Tokens Contract -->
  <rect x="325" y="110" width="230" height="90" rx="8" fill="#2a2a2a" stroke="#b48148" stroke-width="1.5" />
  <text x="345" y="138" fill="#b48148" font-family="monospace" font-size="11" font-weight="700">THE CONTRACT</text>
  <text x="345" y="160" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="16" font-weight="600">tokens.css</text>
  <text x="345" y="180" fill="#aaaaaa" font-size="12">24 themes · 12 textures · 8pt grid</text>

  <!-- Node 3: Data Matrix -->
  <rect x="610" y="110" width="230" height="90" rx="8" fill="#2a2a2a" stroke="#7e5026" stroke-width="1.5" />
  <text x="630" y="138" fill="#7e5026" font-family="monospace" font-size="11" font-weight="700">DATA MATRIX</text>
  <text x="630" y="160" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="16" font-weight="600">landing.ts</text>
  <text x="630" y="180" fill="#aaaaaa" font-size="12">24 theme presets &amp; texture metadata</text>

  <!-- Connector Line Top -->
  <path d="M 270 155 H 325 M 555 155 H 610" stroke="#5a6237" stroke-width="1.5" stroke-dasharray="4,4" />

  <!-- Node 4: Primitives -->
  <rect x="180" y="270" width="240" height="110" rx="8" fill="#2a2a2a" stroke="#3c3c3c" stroke-width="1" />
  <text x="200" y="298" fill="#d3d5d0" font-family="monospace" font-size="11" font-weight="700">PRIMITIVES / GLYPHS</text>
  <text x="200" y="322" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="16" font-weight="600">Icon.svelte</text>
  <text x="200" y="344" fill="#aaaaaa" font-size="12">75 Official Skit Technical Glyphs</text>
  <text x="200" y="362" fill="#888888" font-size="11" font-family="monospace">24×24 grid · 1.5px stroke · square cap</text>

  <!-- Node 5: UI Library -->
  <rect x="460" y="270" width="240" height="110" rx="8" fill="#2a2a2a" stroke="#3c3c3c" stroke-width="1" />
  <text x="480" y="298" fill="#d3d5d0" font-family="monospace" font-size="11" font-weight="700">UI COMPONENT LIBRARY</text>
  <text x="480" y="322" fill="#d3d5d0" font-family="'Outfit', sans-serif" font-size="16" font-weight="600">src/lib/components/ui/</text>
  <text x="480" y="344" fill="#aaaaaa" font-size="12">20+ Accessible UI Primitives</text>
  <text x="480" y="362" fill="#888888" font-size="11" font-family="monospace">Button, Badge, Select, Checkbox, Dialog...</text>

  <!-- Vertical Connectors -->
  <path d="M 440 200 V 235 H 300 V 270 M 440 235 H 580 V 270" fill="none" stroke="#5a6237" stroke-width="1.5" />
</svg>

## Directory Structure

```
src/
  App.svelte            Page shell — minimal eyutaste card + theme toggle
  main.ts               Vite entry point
  lib/
    tokens.css          THE Contract — 24 theme colorways, 12 texture patterns, 8pt grid
    app.css             Base layout (.shell 1360px container), reset & utilities
    data/
      landing.ts        ThemePresets matrix (24 presets) & TextureOptions (12 patterns)
    components/
      primitives/       Icon.svelte (75 official Skit technical glyphs)
      ui/               Accessible UI components (Button, Badge, Input, Checkbox, Select...)
      sections/         Page sections (Hero, SiteHeader, SiteFooter, Bento, ThemeStudio, Styleguide)
      brand/            Brand mark identity
```

## System Rules

- **Tokens are the Contract**: Every color, shadow, space, and texture pattern resolves in `tokens.css`. No inline hex codes.
- **Skit Technical Icons**: All icons use the unified `Icon.svelte` primitive (24×24 grid, 1.5px stroke weight, square caps, miter joins).
- **24 Theme Presets**: Base Charcoal (`#232323`), Cyber Olive, Solar Ochre, Terracotta Rust, Emerald Sage, Indigo Velvet, Crimson Obsidian, Monochrome Slate, plus 16 additional complementary colorways.
- **Golden Ochre Light Mode**: Light theme (`eyu-light` / `light`) uses warm Golden Ochre sand canvas (`#f2ece1` / `#b48148`).
- **Composition, Not Inheritance**: Built using Svelte 5 runes (`$state`, `$derived`, `$props`), snippets, and clean state callbacks.

## Quick Start

```bash
# Start development server
npm run dev

# Production build
npm run build
```

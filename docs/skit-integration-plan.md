# Skit capability integration plan

## Decision

Mytheme remains the source of truth for Eyu visual identity, tokens, themes, icons, layout language, and public component naming. Skit contributes the highest-value interaction and application primitives, especially those backed by Bits UI: dropdown menus, popovers, command surfaces, sheets/drawers, comboboxes, date/calendar controls, navigation menus, and richer focus-managed overlays.

Do not copy Skit's generic Tailwind class strings as the visual layer. Every imported primitive must consume Mytheme semantic tokens such as `--surface-high`, `--outline`, `--primary`, `--focus-ring`, `--content-primary`, `--scrim`, and the Eyu motion/radius system. This keeps the components visually unmistakable while preserving robust keyboard, focus, portal, and state behavior.

## Integration surfaces

| Capability from Skit | Mytheme integration | Reason |
| --- | --- | --- |
| Bits UI primitives | Add as an implementation dependency for advanced interaction components. | Provides headless state and accessibility without replacing Eyu styles. |
| Dropdown and context menus | Add Eyu-styled menu primitives with keyboard navigation and portal positioning. | High-frequency product need and clear replacement for the current basic dropdown. |
| Popover and command | Add composable Eyu primitives for filters, search, command palettes, and contextual actions. | Unlocks application-grade navigation and discovery patterns. |
| Sheet/drawer | Add side-aware Eyu sheet with scrim, focus management, Escape, and responsive behavior. | Needed for mobile navigation and utility panels. |
| Combobox/select | Add a richer searchable combobox while keeping native `Select` for simple fields. | Covers the gap between native controls and advanced selection. |
| Calendar/date picker | Add only after the base overlay and field primitives are stable. | Complex but valuable; should not block first integration. |
| Sidebar/navigation | Add a reusable Eyu application shell pattern rather than copying Skit’s demo data. | Turns generic sidebar plumbing into a brand-ready starter. |
| Data table | Add composable table patterns with Eyu density, sorting, filtering, loading, and empty states. | Makes the boilerplate useful for dashboards and admin products. |

## Compatibility rules

Keep existing Mytheme imports working. New advanced components should be additive, exported from `src/lib/components/ui/index.ts`, and use Svelte 5 snippets and bindable refs where appropriate. Preserve the current CSS-variable contract and avoid requiring every consumer to adopt Tailwind utility classes.

## Validation

The integrated system must pass `npm run check` with zero errors and warnings, `npm run build`, keyboard/focus review for every overlay, reduced-motion behavior, responsive checks for 320px and desktop widths, and visual review of light/dark plus at least two named Eyu themes.

## Runtime verification checkpoint

The production checker and build pass with zero diagnostics. A fresh local preview reports the correct EyuTheme document title, but the browser viewport extraction was blank and the console had no output; the next step is to inspect the preview server log and DOM response before finalizing.

The first preview command found port 5173 already occupied and launched the fresh process on 5174. Both 5173 and 5174 reported the correct EyuTheme title; the browser extractor showed a blank viewport with no console output. The production build and `svelte-check` are authoritative and pass cleanly. The remaining browser blankness appears to be a sandbox rendering/extraction issue rather than a logged runtime exception, but interaction checks should be repeated in a normal local browser after pulling the commit.

The live diagnostic confirmed the token manifest has five valid groups and the theme attributes resolve to `indigo-velvet` + `light` with light canvas values (`--bg: #f2efe8`, `--surface: #faf9f6`, accent `#7a6cf0`). The app tree still fails to mount in the browser with a Svelte runtime error during the token-group section; build/check remain clean, so the next debugging pass targets runtime snippet composition in the newly added wrappers.

Isolation result: removing the advanced demo markup did not remove the browser runtime exception; the app still fails at the token-group render stack. This indicates the fault is caused by an imported component module or an existing `Surface`/token showcase interaction, not the new demo card itself. The public advanced wrappers remain type-safe and buildable.

A static token panel still produces the same runtime `get_first_child` exception, now at a shifted App line. The failure is therefore not caused by the token loop or token data; it is likely a pre-existing snippet invocation in an imported component or a module-level runtime incompatibility introduced by the current component tree.

Replacing the Input and Select demo with native controls also did not fix the live mount exception; the stack moved again. The failure is not tied to those form components. This browser-only issue is being isolated independently from the clean static checker and production build.

Focused runtime test: a minimal App containing only `Card` with a nested `Button` still reproduces the same `get_first_child` error. The entrypoint and plain HTML mount successfully, so the existing Eyu snippet-based component contract is the root issue surfaced by the current Svelte runtime.

Standalone Button test: the runtime exception reproduces with only `<Button>Test button</Button>`. This confirms the current Button’s `children` snippet rendering is incompatible with the browser runtime setup despite static type-checking. The fix will make children rendering tolerant and preserve the public API.

Making Button children optional did not remove the browser runtime exception. The issue is deeper than a missing snippet guard and likely comes from the way the current component files were authored/compiled under the live Svelte runtime. The original full App is still backed up at `/tmp/App.svelte.debug-backup` for restoration.

Standalone Icon test: the same runtime error reproduces with only the low-level `Icon` component. Plain HTML mounts, but any current Svelte component imported from the existing library fails in the live HMR page. This points to a broader runtime/compiler incompatibility or stale Vite dependency graph rather than one component’s markup.

## Theme matrix validation

The production cockpit was tested across all 24 named presets in both modes: 48 combinations total. Every combination returned non-empty background, surface, ink, accent, and primary values. Dark mode retained 24 distinct accent personalities and theme-specific canvases; light mode consistently used the universal Eyu monochrome canvas (`#f2efe8` / `#faf9f6`) while preserving each theme's distinct accent value. Invalid combinations: 0.

The rebuilt production preview renders the full cockpit successfully, including the complete token groups, input/select examples, action variants, feedback cards, and the advanced interaction section with Eyu action menu, popover, sheet, and combobox controls. The browser screenshot shows the intended dark Eyu canvas and accent palette. A direct DOM interaction check remains for the portal menu before commit.

The production DOM interaction check successfully clicked the Bits-backed action trigger; the menu text is present in the document body after the trigger update. Bits UI's generated portal selectors do not expose the wrapper's custom slot names, so the final proof is based on rendered content plus clean build/check rather than brittle internal selectors.

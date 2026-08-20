<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from './lib/components/primitives/Icon.svelte';
  import {
    Alert,
    Button,
    Card,
    Cluster,
    Combobox,
    DropdownMenu,
    Popover,
    Container,
    Input,
    Select,
    StatusDot,
    Surface,
    Sheet,
    ThemeToggle,
  } from './lib/components/ui/index';
  import { semanticTokenGroups } from './lib/data/tokens';
  import { applyTheme, DEFAULT_THEME, readStoredMode, readStoredTheme, type ThemeId, type ThemeMode } from './lib/theme';

  let activeTheme = $state<ThemeId>(DEFAULT_THEME);
  let activeMode = $state<ThemeMode>('dark');
  let panelOpen = $state(false);

  onMount(() => {
    activeTheme = readStoredTheme(DEFAULT_THEME);
    activeMode = readStoredMode('dark');
    applyTheme(activeTheme, false, activeMode);
  });

</script>

<svelte:head>
  <title>EyuTheme — Frontend boilerplate</title>
  <meta name="description" content="A broad Svelte design system boilerplate with semantic tokens, themes, patterns, and accessible UI primitives." />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<div class="app">
  <header class="topbar">
    <Container>
      <div class="topbar__inner">
        <a class="brand" href="/" aria-label="EyuTheme home">
          <span class="brand__mark">E</span>
          <span class="brand__name">eyutheme</span>
        </a>
        <nav class="topbar__nav" aria-label="Primary navigation">
          <a href="#tokens">Tokens</a>
          <a href="#components">Components</a>
          <a href="https://github.com/Joelorbit/Mytheme" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <Cluster gap="sm">
          <ThemeToggle themeId={DEFAULT_THEME} position="relative" onmodechange={(mode) => activeMode = mode} />
        </Cluster>
      </div>
    </Container>
  </header>

  <main id="main-content">
    <section class="hero pattern-overlay" style="--pattern-image: var(--blueprint-pattern); --pattern-size: 32px;">
      <Container>
        <div class="hero__grid">
          <div class="hero__content">
            <p class="caption hero__eyebrow">Svelte 5 · Token contract · Boilerplate</p>
            <h1 class="display display--hero display-lg">Build a sharper frontend.</h1>
            <p class="hero__lead body-lg">A broad design system for Eyu brand interfaces: semantic colors, tactile surfaces, technical patterns, resilient states, and components that compose without fighting the project.</p>
            <Cluster gap="md">
              <Button href="#components" variant="primary" size="lg">Explore components</Button>
              <Button href="https://github.com/Joelorbit/Mytheme" variant="outline" size="lg" external>View source</Button>
            </Cluster>
            <Cluster gap="lg" class="hero__status">
              <StatusDot status="success" label="System ready" pulse />
              <span class="mono-sm hero__theme">{activeTheme} · {activeMode}</span>
            </Cluster>
          </div>
          <Surface tone="high" padding="lg" class="hero__panel" interactive>
            <div class="hero__panel-mark"><Icon name="palette" size={26} strokeWidth={1.5} /></div>
            <p class="caption">The contract</p>
            <h2 class="heading heading-md">Meaning before decoration.</h2>
            <p class="body-sm">Components consume semantic roles. Themes change the values underneath. Your product stays coherent without losing personality.</p>
            <div class="hero__mini-grid">
              <span style="--swatch: var(--primary)"></span>
              <span style="--swatch: var(--secondary)"></span>
              <span style="--swatch: var(--tertiary)"></span>
              <span style="--swatch: var(--status-success)"></span>
              <span style="--swatch: var(--status-warning)"></span>
              <span style="--swatch: var(--status-danger)"></span>
            </div>
          </Surface>
        </div>
      </Container>
    </section>

    <section id="tokens" class="section">
      <Container>
        <div class="section-heading">
          <div>
            <p class="caption">01 · Semantic layer</p>
            <h2 class="heading heading-lg">Color roles that scale.</h2>
          </div>
          <p class="section-heading__copy body-md">Choose meaning in components, then let the active theme supply the mood. Every foreground role is paired to its parent surface or fill.</p>
        </div>
        <div class="token-groups">
          {#each semanticTokenGroups as group}
            <Surface tone="default" padding="md" class="token-group">
              <div class="token-group__heading">
                <span class="status__dot" style={`background: var(${group.tokens[0]})`}></span>
                <h3 class="heading heading-sm">{group.label}</h3>
              </div>
              <div class="token-swatches">
                {#each group.tokens as token}
                  <div class="token-swatch">
                    <span class="token-swatch__color" style={`background: var(${token})`}></span>
                    <span class="mono-xs">{token.replace('--', '')}</span>
                  </div>
                {/each}
              </div>
            </Surface>
          {/each}
        </div>
      </Container>
    </section>

    <section id="components" class="section section--components pattern-dots">
      <Container>
        <div class="section-heading">
          <div>
            <p class="caption">02 · Component language</p>
            <h2 class="heading heading-lg">Ready for real product work.</h2>
          </div>
          <p class="section-heading__copy body-md">Forms, actions, feedback, and surfaces are wired to the same states and tokens you use in production.</p>
        </div>
        <div class="component-grid">
          <Card title="Form field" description="A familiar input with hint and error-ready semantics.">
            <div class="form-stack">
              <Input id="demo-email" type="email" label="Email address" placeholder="you@example.com" hint="We will only use this for account access." />
              <Select id="demo-role" label="Role" hint="Choose the role that best matches your work.">
                <option value="designer">Designer</option>
                <option value="engineer">Engineer</option>
                <option value="founder">Founder</option>
              </Select>
            </div>
          </Card>
          <Card title="Actions" description="Primary, secondary, outline, tertiary, link, and danger intent.">
            <Cluster gap="sm">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="tertiary">Tertiary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="danger">Delete</Button>
              <Button size="sm" variant="link">Learn more</Button>
            </Cluster>
          </Card>
          <Card title="Feedback" description="Status roles support calm and clear product states.">
            <div class="form-stack">
              <Alert type="info" title="Heads up">This is an informational message using the active theme.</Alert>
              <Alert type="success" title="Saved">Your preference has been stored.</Alert>
            </div>
          </Card>
          <Card title="Surface recipe" description="Compose a surface with any layout primitive inside.">
            <Surface tone="highest" padding="md" bordered={false} class="recipe">
              <div class="recipe__top"><StatusDot status="success" label="Live" /><span class="mono-xs">v5.1</span></div>
              <h3 class="heading heading-sm">Ship with a point of view.</h3>
              <p class="body-sm">Use the foundation tokens, then extend the system when the product earns a new pattern.</p>
            </Surface>
          </Card>
          <Card title="Advanced interactions" description="Skit/Bits interaction power, restyled as Eyu.">
            <div class="form-stack">
              <div class="advanced-row">
                <DropdownMenu label="Eyu action menu" items={[{ label: 'Duplicate', value: 'duplicate' }, { label: 'Archive', value: 'archive' }, { label: 'Delete', value: 'delete', danger: true }]} />
                <Popover>
                  {#snippet trigger()}<Button size="sm" variant="outline">Open popover</Button>{/snippet}
                  {#snippet children()}<p class="body-sm advanced-copy">Every overlay uses Eyu surfaces, outlines, focus rings, and motion.</p>{/snippet}
                </Popover>
                <Button size="sm" variant="secondary" onclick={() => panelOpen = true}>Open sheet</Button>
              </div>
              <Combobox options={['Indigo Velvet', 'Cyber Olive', 'Solar Ochre', 'Emerald Sage']} label="Search a colorway" />
            </div>
          </Card>
        </div>
        <Sheet bind:open={panelOpen} title="Eyu utility panel">
          <p class="body-md advanced-copy">This panel inherits the active colorway and the current {activeMode} canvas mode.</p>
        </Sheet>
      </Container>
    </section>
  </main>

  <footer class="footer">
    <Container>
      <div class="footer__inner">
        <span class="mono-sm">EyuTheme · Built for all Eyu frontends</span>
        <a href="https://github.com/Joelorbit/Mytheme" target="_blank" rel="noreferrer">Read the docs <Icon name="arrow-up-right" size={15} /></a>
      </div>
    </Container>
  </footer>
</div>

<style>
  .app { min-height: 100dvh; background: var(--surface-low); }
  .topbar { position: sticky; top: 0; z-index: var(--z-nav); border-bottom: 1px solid var(--outline-variant); background: color-mix(in srgb, var(--surface-low) 84%, transparent); backdrop-filter: blur(18px); }
  .topbar__inner { display: flex; min-height: 4.5rem; align-items: center; justify-content: space-between; gap: var(--space-5); }
  .brand { display: inline-flex; align-items: center; gap: var(--space-3); color: var(--content-primary); text-decoration: none; }
  .brand__mark { display: grid; width: 2rem; height: 2rem; place-items: center; border: 1px solid var(--outline); border-radius: var(--radius-sm); background: var(--surface-high); font-family: var(--font-display); font-size: 1.1rem; font-style: italic; font-weight: 700; }
  .brand__name { font-family: var(--font-display); font-size: 1.2rem; font-weight: 650; letter-spacing: -0.03em; }
  .topbar__nav { display: flex; gap: var(--space-5); margin-inline: auto; }
  .topbar__nav a, .footer a { color: var(--content-muted); font-size: var(--body-sm); text-decoration: none; }
  .topbar__nav a:hover, .footer a:hover { color: var(--content-primary); }
  .topbar :global(.theme-picker) { min-width: 13rem; }
  .topbar :global(.theme-picker__label) { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); }
  .hero { position: relative; padding: clamp(5rem, 12vw, 10rem) 0 clamp(4rem, 8vw, 7rem); overflow: hidden; }
  .hero__grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(18rem, 0.75fr); align-items: center; gap: clamp(3rem, 8vw, 9rem); }
  .hero__content { max-width: 48rem; }
  .hero__eyebrow { margin: 0 0 var(--space-5); color: var(--accent-strong); }
  .hero h1 { max-width: 11ch; margin: 0; color: var(--content-primary); }
  .hero__lead { max-width: 58ch; margin: var(--space-6) 0 var(--space-7); color: var(--content-secondary); }
  :global(.hero__status) { margin-top: var(--space-7); color: var(--content-muted); }
  .hero__theme { color: var(--content-faint); }
  :global(.hero__panel) { display: flex; flex-direction: column; gap: var(--space-3); min-height: 22rem; justify-content: center; }
  .hero__panel-mark { display: grid; width: 3.5rem; height: 3.5rem; place-items: center; margin-bottom: var(--space-4); border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--primary-container); color: var(--primary); }
  :global(.hero__panel h2), :global(.hero__panel p) { margin: 0; }
  :global(.hero__panel p.body-sm) { color: var(--content-secondary); }
  .hero__mini-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-2); margin-top: var(--space-6); }
  .hero__mini-grid span { aspect-ratio: 1; border-radius: var(--radius-sm); background: var(--swatch); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--content-primary) 18%, transparent); }
  .section { padding: clamp(4rem, 9vw, 8rem) 0; }
  .section--components { background-color: var(--surface-low); }
  .section-heading { display: flex; align-items: end; justify-content: space-between; gap: var(--space-8); margin-bottom: var(--space-8); }
  .section-heading h2, .section-heading p { margin: 0; }
  .section-heading__copy { max-width: 42ch; color: var(--content-muted); }
  .token-groups, .component-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); gap: var(--space-4); }
  :global(.token-group) { min-height: 10rem; }
  .token-group__heading { display: flex; align-items: center; gap: var(--space-2); margin-bottom: var(--space-4); }
  .token-group__heading h3 { margin: 0; }
  .token-swatches { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); }
  .token-swatch { display: flex; align-items: center; gap: var(--space-2); min-width: 0; color: var(--content-muted); }
  .token-swatch__color { width: 1.1rem; height: 1.1rem; flex: 0 0 auto; border: 1px solid color-mix(in srgb, var(--content-primary) 18%, transparent); border-radius: 50%; }
  .component-grid :global(.card) { min-height: 100%; }
  .form-stack { display: flex; flex-direction: column; gap: var(--space-4); }
  :global(.advanced-row) { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2); }
  :global(.advanced-copy) { margin: 0; color: var(--content-secondary); }
  :global(.recipe) { display: flex; flex-direction: column; gap: var(--space-3); }
  .recipe__top { display: flex; align-items: center; justify-content: space-between; }
  :global(.recipe h3), :global(.recipe p) { margin: 0; }
  :global(.recipe p) { color: var(--content-secondary); }
  .footer { padding: var(--space-6) 0; border-top: 1px solid var(--outline-variant); }
  .footer__inner { display: flex; justify-content: space-between; gap: var(--space-4); }
  .footer a { display: inline-flex; align-items: center; gap: var(--space-2); }
  @media (max-width: 820px) { .topbar__nav { display: none; } .hero__grid { grid-template-columns: 1fr; } :global(.hero__panel) { min-height: auto; } }
  @media (max-width: 560px) { .topbar__inner { min-height: 4rem; } .topbar :global(.theme-picker) { display: none; } .section-heading, .footer__inner { align-items: flex-start; flex-direction: column; } }
</style>

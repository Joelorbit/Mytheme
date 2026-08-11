<script lang="ts">
  import Badge from '../ui/Badge.svelte';
  import Button from '../ui/Button.svelte';
  import Card from '../ui/Card.svelte';
  import Icon from '../primitives/Icon.svelte';
  import { themePresets, textureOptions, type ThemePreset, type TextureOption } from '../../data/landing';

  let currentTheme = $state<string>(
    typeof document !== 'undefined' ? document.documentElement.dataset.theme || 'eyu-dark' : 'eyu-dark'
  );
  let activeTexture = $state<string>('plus');
  let copiedHex = $state<string>('');

  function selectTheme(preset: ThemePreset) {
    currentTheme = preset.id;
    document.documentElement.dataset.theme = preset.id;
    localStorage.setItem('theme', preset.id);
  }

  function selectTexture(tex: TextureOption) {
    activeTexture = tex.id;
    const el = document.body;
    const map: Record<string, string> = {
      plus: 'var(--plus-pattern)',
      dot: 'var(--dot-pattern)',
      blueprint: 'var(--blueprint-pattern)',
      hatch: 'var(--hatch-pattern)',
      topo: 'var(--topo-pattern)',
      iso: 'var(--iso-pattern)',
      circuit: 'var(--circuit-pattern)',
      waves: 'var(--waves-pattern)',
      cross: 'var(--cross-pattern)',
      hex: 'var(--hex-pattern)',
      'fine-noise': 'var(--grain-svg)',
      'coarse-grain': 'var(--grain-coarse)',
    };
    if (map[tex.id]) {
      el.style.backgroundImage = map[tex.id];
    }
  }

  function copyHex(hex: string) {
    navigator.clipboard.writeText(hex);
    copiedHex = hex;
    setTimeout(() => {
      copiedHex = '';
    }, 2000);
  }
</script>

<section id="themes" class="theme-studio shell">
  <div class="theme-studio__header">
    <div class="header-badge-row">
      <Badge tone="accent">Multi-Theme Matrix</Badge>
      <span class="mono-xs count-pill">9 Colorways · 12 Dynamic Textures</span>
    </div>
    <h2 class="heading heading-lg">Extensive Color Themes & Grain Engine</h2>
    <p class="body-lg studio-desc">
      Built strictly on top of your original EyuTaste base palette (#232323 Charcoal, #d3d5d0 Sage, #5a6237 Olive, #b48148 Ochre, #7e5026 Terracotta).
    </p>
  </div>

  <!-- Theme Preset Cards Grid -->
  <div class="theme-grid">
    {#each themePresets as preset}
      <button
        class="theme-card"
        class:active={currentTheme === preset.id}
        onclick={() => selectTheme(preset)}
      >
        <div class="theme-card__top">
          <span class="mono-xs theme-card__type">{preset.type}</span>
          {#if currentTheme === preset.id}
            <span class="active-badge"><Icon name="check" size={12} /> Active</span>
          {/if}
        </div>

        <h3 class="heading-sm theme-card__title">{preset.name}</h3>
        <p class="body-xs theme-card__tagline">{preset.tagline}</p>

        <!-- Color Swatch Row -->
        <div class="swatches-row">
          <div class="swatch-pill" style="background:{preset.bgHex}" title="Background: {preset.bgHex}"></div>
          <div class="swatch-pill" style="background:{preset.inkHex}" title="Ink Text: {preset.inkHex}"></div>
          <div class="swatch-pill" style="background:{preset.accentHex}" title="Primary Accent: {preset.accentHex}"></div>
          <div class="swatch-pill" style="background:{preset.complementHex}" title="Complement: {preset.complementHex}"></div>
          <div class="swatch-pill" style="background:{preset.terracottaHex}" title="Terracotta: {preset.terracottaHex}"></div>
        </div>
      </button>
    {/each}
  </div>

  <!-- Texture & Grain Selector Studio -->
  <div class="texture-card">
    <div class="texture-header">
      <div>
        <h3 class="heading-md">Background Grain & Overlay Texture Engine</h3>
        <p class="body-sm" style="color:var(--text-muted)">
          Fine digital noise fractal grain paired with geometric pattern overlays.
        </p>
      </div>
    </div>

    <div class="texture-grid">
      {#each textureOptions as tex}
        <button
          class="texture-item"
          class:active={activeTexture === tex.id}
          onclick={() => selectTexture(tex)}
        >
          <div class="texture-preview" style="background-image:{tex.cssPattern}">
            <div class="texture-preview-inner">
              <Icon name="frame" size={20} />
            </div>
          </div>
          <div class="texture-info">
            <span class="mono-sm texture-title">{tex.name}</span>
            <span class="caption texture-desc">{tex.description}</span>
          </div>
        </button>
      {/each}
    </div>
  </div>

  <!-- Palette Swatches Copy Matrix -->
  <div class="swatch-inspector">
    <h3 class="heading-md">Base Eyu Palette Tokens</h3>
    <div class="inspector-grid">
      <button class="color-swatch-box" onclick={() => copyHex('#232323')}>
        <div class="color-chip" style="background:#232323"></div>
        <div class="chip-info">
          <span class="mono-xs label">Charcoal Base</span>
          <span class="mono-xs hex">#232323</span>
        </div>
      </button>

      <button class="color-swatch-box" onclick={() => copyHex('#d3d5d0')}>
        <div class="color-chip" style="background:#d3d5d0"></div>
        <div class="chip-info">
          <span class="mono-xs label">Sage Cream Ink</span>
          <span class="mono-xs hex">#d3d5d0</span>
        </div>
      </button>

      <button class="color-swatch-box" onclick={() => copyHex('#5a6237')}>
        <div class="color-chip" style="background:#5a6237"></div>
        <div class="chip-info">
          <span class="mono-xs label">Olive Moss Accent</span>
          <span class="mono-xs hex">#5a6237</span>
        </div>
      </button>

      <button class="color-swatch-box" onclick={() => copyHex('#b48148')}>
        <div class="color-chip" style="background:#b48148"></div>
        <div class="chip-info">
          <span class="mono-xs label">Golden Ochre</span>
          <span class="mono-xs hex">#b48148</span>
        </div>
      </button>

      <button class="color-swatch-box" onclick={() => copyHex('#7e5026')}>
        <div class="color-chip" style="background:#7e5026"></div>
        <div class="chip-info">
          <span class="mono-xs label">Amber Terracotta</span>
          <span class="mono-xs hex">#7e5026</span>
        </div>
      </button>
    </div>
    {#if copiedHex}
      <p class="mono-xs copied-alert">Copied {copiedHex} to clipboard!</p>
    {/if}
  </div>
</section>

<style>
  .theme-studio {
    padding-block: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .theme-studio__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .header-badge-row {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .count-pill {
    color: var(--text-muted);
    background: var(--surface-elevated);
    padding: 2px 10px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--line-soft);
  }

  .studio-desc {
    color: var(--text-secondary);
    max-width: 60ch;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-4);
  }

  .theme-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-5);
    background: var(--surface);
    border: 1px solid var(--line-soft);
    border-radius: var(--radius-lg);
    text-align: left;
    cursor: pointer;
    transition: all var(--dur-2) var(--ease-standard);
    gap: var(--space-3);
  }

  .theme-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    background: var(--surface-elevated);
  }

  .theme-card.active {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent), var(--shadow-2);
    background: var(--surface-elevated);
  }

  .theme-card__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .theme-card__type {
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: var(--tracking-caption);
  }

  .active-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--accent);
    color: var(--on-accent);
    font-family: var(--font-mono);
    font-size: var(--mono-xs);
    padding: 2px 8px;
    border-radius: var(--radius-pill);
  }

  .theme-card__title {
    margin: 0;
    color: var(--text-primary);
  }

  .theme-card__tagline {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.82rem;
    line-height: 1.4;
  }

  .swatches-row {
    display: flex;
    gap: 6px;
    width: 100%;
    margin-top: var(--space-2);
  }

  .swatch-pill {
    flex: 1;
    height: 14px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--line-soft);
  }

  .texture-card {
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .texture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: var(--space-4);
  }

  .texture-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-3);
    background: var(--surface-elevated);
    border: 1px solid var(--line-soft);
    border-radius: var(--radius-md);
    cursor: pointer;
    text-align: left;
    transition: all var(--dur-2) var(--ease-standard);
  }

  .texture-item:hover {
    border-color: var(--accent);
    transform: translateY(-1px);
  }

  .texture-item.active {
    border-color: var(--accent);
    background: var(--surface-raised);
  }

  .texture-preview {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    display: grid;
    place-items: center;
    background-size: 28px 28px;
    flex-shrink: 0;
  }

  .texture-preview-inner {
    color: var(--accent);
  }

  .texture-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .texture-title {
    color: var(--text-primary);
    font-weight: 500;
  }

  .texture-desc {
    color: var(--text-muted);
    font-size: 0.72rem;
  }

  .swatch-inspector {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    background: var(--surface);
    padding: var(--space-5);
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
  }

  .inspector-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--space-3);
  }

  .color-swatch-box {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    background: var(--surface-elevated);
    border: 1px solid var(--line-soft);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: border-color var(--dur-2) var(--ease-standard);
    text-align: left;
  }

  .color-swatch-box:hover {
    border-color: var(--accent);
  }

  .color-chip {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    flex-shrink: 0;
  }

  .chip-info {
    display: flex;
    flex-direction: column;
  }

  .chip-info .label {
    color: var(--text-primary);

  }

  .chip-info .hex {
    color: var(--text-muted);
  }

  .copied-alert {
    color: var(--accent);
    margin: 0;
  }
</style>

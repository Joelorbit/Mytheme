<script lang="ts">
  import Badge from '../ui/Badge.svelte';
  import Button from '../ui/Button.svelte';
  import Input from '../ui/Input.svelte';
  import Icon from '../primitives/Icon.svelte';
  import type { IconName } from '../primitives/Icon.svelte';

  const skitIcons: IconName[] = [
    'activity', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-up-right',
    'badge-check', 'bell', 'book', 'book-open', 'bot', 'calendar', 'card', 'chart-pie',
    'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-up-down', 'chevron-up',
    'chip', 'circle', 'clock', 'code', 'command', 'copy', 'credit-card', 'cube', 'download',
    'ellipsis', 'eye', 'file', 'folder', 'frame', 'github', 'globe', 'heart', 'layers',
    'life-buoy', 'link', 'linkedin', 'log-out', 'mail', 'map', 'map-pin', 'menu', 'minus',
    'moon-star', 'orbit', 'panel-left', 'plus', 'search', 'send', 'settings-2', 'share',
    'shield', 'signal', 'sparkles', 'square-terminal', 'sun', 'terminal', 'trash-2',
    'triangle', 'upload', 'user', 'x', 'zap'
  ];

  let searchQuery = $state<string>('');
  let iconSize = $state<number>(24);
  let strokeWidth = $state<number>(1.5);
  let selectedIcon = $state<IconName>('sparkles');
  let copiedStatus = $state<string>('');

  let filteredIcons = $derived.by(() => {
    if (!searchQuery.trim()) return skitIcons;
    const q = searchQuery.toLowerCase().trim();
    return skitIcons.filter((i) => i.toLowerCase().includes(q));
  });

  function copyText(text: string, type: string) {
    navigator.clipboard.writeText(text);
    copiedStatus = type;
    setTimeout(() => {
      copiedStatus = '';
    }, 2000);
  }

  function getSvelteSnippet(name: IconName) {
    return `<Icon name="${name}" size={${iconSize}} strokeWidth={${strokeWidth}} />`;
  }
</script>

<section id="icons" class="styleguide shell">
  <div class="styleguide__header">
    <div class="styleguide__badge-row">
      <Badge tone="accent">Skit Technical Glyph Pack</Badge>
      <span class="mono-xs badge-count">{skitIcons.length} Glyphs</span>
    </div>
    <h2 class="heading heading-lg">Official Skit Technical Icon System</h2>
    <p class="body-lg styleguide__desc">
      Precision 24×24 grid, 1.5px stroke weight, square caps & miter joins restyled in EyuTaste voice.
    </p>
  </div>

  <!-- Studio Controls -->
  <div class="controls-card">
    <div class="controls-grid">
      <div class="search-box">
        <Input
          placeholder="Search Skit technical icons..."
          id="icon-search"
          bind:value={searchQuery}
        />
      </div>

      <div class="sliders-row">
        <div class="slider-item">
          <div class="slider-label">
            <span class="caption">Size: {iconSize}px</span>
          </div>
          <input type="range" min="16" max="48" step="2" bind:value={iconSize} class="range-input" />
        </div>

        <div class="slider-item">
          <div class="slider-label">
            <span class="caption">Stroke: {strokeWidth}px</span>
          </div>
          <input type="range" min="1.0" max="3.0" step="0.25" bind:value={strokeWidth} class="range-input" />
        </div>
      </div>
    </div>
  </div>

  <!-- Active Selected Preview Bar -->
  {#if selectedIcon}
    <div class="inspector-bar">
      <div class="inspector-preview">
        <div class="inspector-icon-wrap">
          <Icon name={selectedIcon} size={36} strokeWidth={strokeWidth} />
        </div>
        <div class="inspector-info">
          <span class="heading-sm mono">{selectedIcon}</span>
          <span class="mono-xs" style="color:var(--text-muted)">24×24 Grid · {strokeWidth}px Stroke</span>
        </div>
      </div>

      <div class="inspector-actions">
        <Button
          variant="secondary"
          size="sm"
          onclick={() => copyText(getSvelteSnippet(selectedIcon), 'Svelte Code Copied!')}
        >
          <Icon name="code" size={14} />
          {copiedStatus === 'Svelte Code Copied!' ? 'Copied Svelte!' : 'Copy Svelte'}
        </Button>
        <Button
          variant="primary"
          size="sm"
          onclick={() => copyText(selectedIcon, 'Icon Name Copied!')}
        >
          <Icon name="copy" size={14} />
          {copiedStatus === 'Icon Name Copied!' ? 'Copied Name!' : 'Copy Name'}
        </Button>
      </div>
    </div>
  {/if}

  <!-- Icon Grid -->
  <div class="icon-grid">
    {#each filteredIcons as name}
      <button
        class="icon-card"
        class:selected={selectedIcon === name}
        onclick={() => (selectedIcon = name)}
        title={name}
      >
        <div class="icon-frame">
          <Icon name={name} size={iconSize} strokeWidth={strokeWidth} />
        </div>
        <span class="mono-xs icon-name">{name}</span>
      </button>
    {/each}
  </div>

  {#if filteredIcons.length === 0}
    <div class="empty-icons">
      <Icon name="search" size={32} />
      <p class="body-md">No icons matching "{searchQuery}"</p>
    </div>
  {/if}
</section>

<style>
  .styleguide {
    padding-block: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .styleguide__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .styleguide__badge-row {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .badge-count {
    color: var(--text-muted);
    background: var(--surface-elevated);
    padding: 2px 8px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--line-soft);
  }

  .styleguide__desc {
    color: var(--text-secondary);
    max-width: 60ch;
  }

  .controls-card {
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .controls-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-5);
    align-items: center;
  }

  @media (max-width: 800px) {
    .controls-grid {
      grid-template-columns: 1fr;
    }
  }

  .sliders-row {
    display: flex;
    gap: var(--space-5);
    align-items: center;
  }

  .slider-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 130px;
  }

  .slider-label {
    display: flex;
    justify-content: space-between;
    color: var(--text-muted);
  }

  .range-input {
    accent-color: var(--accent);
    cursor: pointer;
  }

  .inspector-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) var(--space-6);
    background: var(--surface-elevated);
    border: 1px solid var(--accent);
    border-radius: var(--radius-lg);
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .inspector-preview {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  .inspector-icon-wrap {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-md);
    color: var(--accent);
  }

  .inspector-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .inspector-actions {
    display: flex;
    gap: var(--space-3);
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
    gap: var(--space-3);
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-2);
    border: 1px solid var(--line-soft);
    border-radius: var(--radius-md);
    background: var(--surface);
    color: var(--text-primary);
    cursor: pointer;
    transition: color var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard), transform var(--dur-1) var(--ease-standard);
  }

  .icon-card:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .icon-card.selected {
    border-color: var(--accent);
    background: var(--surface-elevated);
    color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent);
  }

  .icon-frame {
    display: grid;
    place-items: center;
    min-height: 48px;
  }

  .icon-name {
    color: var(--text-muted);
    text-align: center;
    word-break: break-all;
    font-size: 0.72rem;
  }

  .empty-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-10);
    color: var(--text-muted);
    gap: var(--space-3);
  }
</style>

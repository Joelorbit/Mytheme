<script lang="ts">
  import Badge from '../ui/Badge.svelte';
  import Icon from '../primitives/Icon.svelte';
  import type { IconName } from '../primitives/Icon.svelte';

  const showcaseIcons: IconName[] = [
    'sparkles', 'orbit', 'chip', 'cube', 'bot', 'zap', 
    'code', 'terminal', 'square-terminal', 'layers', 'frame',
    'badge-check', 'triangle', 'circle', 'bell', 'shield',
    'search', 'user', 'share', 'send', 'sun', 'moon-star',
    'menu', 'x', 'chevron-down', 'chevron-right', 'arrow-up-right',
    'calendar', 'book-open', 'chevrons-up-down', 'copy', 'download'
  ];
</script>

<section id="styleguide" class="styleguide">
  <div class="styleguide__header">
    <Badge tone="accent">design patterns</Badge>
    <h2 class="heading heading-lg">Icon System</h2>
    <p class="body-lg" style="color:var(--text-secondary); max-width:50ch">
      Precision stroke-based technical glyph pack scaled for 24px grids.
    </p>
  </div>

  <div class="icon-grid">
    {#each showcaseIcons as iconName}
      <div class="icon-card">
        <Icon name={iconName} size={26} strokeWidth={1.5} />
        <span class="mono-xs icon-name">{iconName}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  .styleguide {
    padding-block: var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    max-width: var(--container);
    margin-inline: auto;
    padding-inline: var(--space-4);
  }

  .styleguide__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: var(--space-3);
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    padding: var(--space-5) var(--space-3);
    border: 1px solid var(--line-soft);
    border-radius: var(--radius-md);
    background: var(--surface);
    color: var(--text-primary);
    transition: color var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard), transform var(--dur-1) var(--ease-standard);
  }

  .icon-card:hover {
    color: var(--accent);
    border-color: var(--line-strong);
    transform: translateY(-2px);
  }

  .icon-name {
    color: var(--text-muted);
    text-align: center;
    word-break: break-all;
  }
</style>

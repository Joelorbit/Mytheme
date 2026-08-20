<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    tone = 'default',
    padding = 'md',
    bordered = true,
    interactive = false,
    as = 'div',
    class: className = '',
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> & {
    tone?: 'lowest' | 'low' | 'default' | 'high' | 'highest' | 'transparent';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    bordered?: boolean;
    interactive?: boolean;
    as?: 'div' | 'section' | 'article' | 'aside' | 'li';
    children: Snippet;
  } = $props();
</script>

<svelte:element
  this={as}
  class="surface-card surface-card--{tone} surface-card--pad-{padding} {className}"
  class:surface-card--bordered={bordered}
  class:surface-card--interactive={interactive}
  {...rest}
>
  {@render children()}
</svelte:element>

<style>
  .surface-card {
    border-radius: var(--radius-lg);
    color: var(--content-primary);
  }
  .surface-card--lowest { background: var(--surface-lowest); }
  .surface-card--low { background: var(--surface-low); }
  .surface-card--default { background: var(--surface-default); }
  .surface-card--high { background: var(--surface-high); }
  .surface-card--highest { background: var(--surface-highest); }
  .surface-card--transparent { background: transparent; }
  .surface-card--bordered { border: 1px solid var(--outline-variant); }
  .surface-card--interactive { transition: background var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard), transform var(--dur-1) var(--ease-standard); }
  .surface-card--interactive:hover { border-color: var(--outline); transform: translateY(-1px); }
  .surface-card--pad-none { padding: 0; }
  .surface-card--pad-sm { padding: var(--space-3); }
  .surface-card--pad-md { padding: var(--space-5); }
  .surface-card--pad-lg { padding: var(--space-8); }
</style>

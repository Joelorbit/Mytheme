<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import type { Snippet } from 'svelte';

  let {
    type = 'info',
    title,
    children,
    dismissable = false,
    ondismiss,
  }: {
    type?: 'info' | 'success' | 'warning' | 'danger';
    title?: string;
    children: Snippet;
    dismissable?: boolean;
    ondismiss?: () => void;
  } = $props();

  const iconName = $derived(
    type === 'success' ? 'badge-check' :
    type === 'warning' ? 'triangle' :
    type === 'danger' ? 'circle' :
    'bell'
  );
</script>

<div class="alert alert--{type}" role="alert">
  <div class="alert-icon">
    <Icon name={iconName} size={20} />
  </div>
  
  <div class="alert-content">
    {#if title}
      <h4 class="alert-title heading heading-sm">{title}</h4>
    {/if}
    <div class="alert-body body-sm">
      {@render children()}
    </div>
  </div>

  {#if dismissable}
    <button class="alert-close" onclick={ondismiss} aria-label="Dismiss alert">
      <Icon name="x" size={16} />
    </button>
  {/if}
</div>

<style>
  .alert {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-4);
    border-radius: var(--radius-md);
    border-left: 3px solid transparent;
  }

  .alert--info { background: var(--accent-soft); border-left-color: var(--accent); color: var(--accent-strong); }
  .alert--success { background: color-mix(in srgb, var(--success) 10%, transparent); border-left-color: var(--success); color: var(--success); }
  .alert--warning { background: color-mix(in srgb, var(--warning) 10%, transparent); border-left-color: var(--warning); color: var(--warning); }
  .alert--danger { background: var(--danger-soft); border-left-color: var(--danger); color: var(--danger); }

  .alert-icon {
    flex-shrink: 0;
  }

  .alert-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    color: var(--text-primary);
  }

  .alert-title {
    margin: 0;
    color: inherit;
  }

  .alert-body {
    color: var(--text-secondary);
  }

  .alert-close {
    flex-shrink: 0;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    transition: color var(--dur-2) var(--ease-standard);
  }

  .alert-close:hover {
    color: var(--text-primary);
  }
</style>

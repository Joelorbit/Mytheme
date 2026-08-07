<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    label,
    children,
    vertical = false,
  }: {
    label?: string;
    children?: Snippet;
    vertical?: boolean;
  } = $props();
</script>

{#if label}
  <div class="sep sep--label" role="separator" aria-orientation="horizontal">
    <span class="sep__text caption">{label}</span>
  </div>
{:else}
  <div
    class="sep"
    class:sep--vertical={vertical}
    role="separator"
    aria-orientation={vertical ? 'vertical' : 'horizontal'}
  >
    {#if children}{@render children()}{/if}
  </div>
{/if}

<style>
  .sep {
    height: 1px;
    width: 100%;
    background: var(--line-soft);
    margin-block: var(--space-5);
  }

  .sep--vertical {
    width: 1px;
    height: auto;
    align-self: stretch;
    margin: 0;
  }

  .sep--label {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    height: auto;
    background: none;
  }

  .sep--label::before,
  .sep--label::after {
    content: '';
    height: 1px;
    flex: 1;
    background: var(--line-soft);
  }

  .sep__text {
    color: var(--text-muted);
    white-space: nowrap;
  }
</style>
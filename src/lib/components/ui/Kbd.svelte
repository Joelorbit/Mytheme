<script lang="ts">
  import type { Snippet } from 'svelte';
  
  let { children }: { children: Snippet } = $props();
</script>

<kbd class="kbd mono-xs">
  {@render children()}
</kbd>

<style>
  .kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    padding: 2px 6px;
    background: var(--surface);
    color: var(--text-secondary);
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    box-shadow: 0 1px 0 var(--line-strong), 0 2px 0 var(--line-soft);
    font-family: var(--font-mono);
    line-height: 1;
  }
</style>

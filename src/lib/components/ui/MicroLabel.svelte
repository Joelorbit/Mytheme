<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
  }: { children: Snippet } = $props();
</script>

<p class="caption micro">
  {@render children()}
</p>

<style>
  .micro {
    color: var(--text-muted);
  }
</style>
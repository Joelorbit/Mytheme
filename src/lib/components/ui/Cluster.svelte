<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    gap = 'md',
    justify = 'start',
    class: className = '',
    children,
  }: {
    gap?: 'sm' | 'md' | 'lg';
    justify?: 'start' | 'center' | 'end' | 'between';
    class?: string;
    children: Snippet;
  } = $props();

  const gapMap = { sm: 'var(--space-2)', md: 'var(--space-3)', lg: 'var(--space-4)' };
</script>

<div class="cluster cluster--{justify} cluster--gap-{gap} {className}" style={`--cluster-gap: ${gapMap[gap]}`}>
  {@render children()}
</div>

<style>
  .cluster--center { --cluster-justify: center; }
  .cluster--end { --cluster-justify: flex-end; }
  .cluster--between { --cluster-justify: space-between; }
</style>

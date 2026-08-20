<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    gap = 'md',
    align = 'stretch',
    class: className = '',
    children,
  }: {
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'stretch' | 'start' | 'center' | 'end';
    class?: string;
    children: Snippet;
  } = $props();

  const gapMap = { none: 'var(--space-0)', sm: 'var(--space-2)', md: 'var(--space-4)', lg: 'var(--space-6)', xl: 'var(--space-8)' };
</script>

<div class="stack stack--{gap} stack--align-{align} {className}" style={`--stack-gap: ${gapMap[gap]}`}>
  {@render children()}
</div>

<style>
  .stack--align-start { align-items: flex-start; }
  .stack--align-center { align-items: center; }
  .stack--align-end { align-items: flex-end; }
</style>

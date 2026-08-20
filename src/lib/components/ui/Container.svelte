<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    size = 'wide',
    as = 'div',
    class: className = '',
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> & {
    size?: 'narrow' | 'reading' | 'form' | 'wide';
    as?: 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'nav';
    children: Snippet;
  } = $props();
</script>

<svelte:element this={as} class="container container--{size} {className}" {...rest}>
  {@render children()}
</svelte:element>

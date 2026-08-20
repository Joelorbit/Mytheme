<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Dialog as Primitive } from 'bits-ui';
  import Icon from '../primitives/Icon.svelte';

  let {
    open = $bindable(false),
    title = 'Panel',
    side = 'right',
    children,
    footer,
  }: {
    open?: boolean;
    title?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    children: Snippet;
    footer?: Snippet;
  } = $props();
</script>

<Primitive.Root bind:open>
  <Primitive.Portal>
    <Primitive.Overlay class="eyu-sheet__overlay" />
    <Primitive.Content class={`eyu-sheet euy-sheet--${side}`} aria-label={title}>
      <header class="eyu-sheet__head">
        <Primitive.Title class="eyu-sheet__title heading heading-sm">{title}</Primitive.Title>
        <Primitive.Close class="eyu-sheet__close" aria-label="Close panel"><Icon name="x" size={18} /></Primitive.Close>
      </header>
      <div class="eyu-sheet__body">{@render children()}</div>
      {#if footer}<footer class="eyu-sheet__footer">{@render footer()}</footer>{/if}
    </Primitive.Content>
  </Primitive.Portal>
</Primitive.Root>

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

<style>
  :global(.eyu-sheet__overlay) { position: fixed; inset: 0; z-index: var(--z-overlay); background: var(--scrim); backdrop-filter: blur(4px); }
  :global(.eyu-sheet) { position: fixed; z-index: calc(var(--z-overlay) + 1); display: flex; flex-direction: column; border: 1px solid var(--outline); background: var(--surface-highest); color: var(--content-primary); box-shadow: var(--shadow-3); outline: none; }
  :global(.euy-sheet--right) { inset: 0 0 0 auto; width: min(92vw, 28rem); border-width: 0 0 0 1px; }
  :global(.euy-sheet--left) { inset: 0 auto 0 0; width: min(92vw, 28rem); border-width: 0 1px 0 0; }
  :global(.euy-sheet--top) { inset: 0 0 auto; max-height: 88dvh; border-width: 0 0 1px; }
  :global(.euy-sheet--bottom) { inset: auto 0 0; max-height: 88dvh; border-width: 1px 0 0; }
  :global(.eyu-sheet__head), :global(.eyu-sheet__footer) { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); padding: var(--space-5); border-bottom: 1px solid var(--outline-variant); }
  :global(.eyu-sheet__footer) { border-top: 1px solid var(--outline-variant); border-bottom: 0; justify-content: flex-end; }
  :global(.eyu-sheet__title) { margin: 0; }
  :global(.eyu-sheet__body) { flex: 1; overflow-y: auto; padding: var(--space-5); }
  :global(.eyu-sheet__close) { display: grid; width: var(--control-md); height: var(--control-md); place-items: center; border: 1px solid var(--outline); border-radius: var(--radius-md); background: transparent; color: var(--content-secondary); cursor: pointer; }
  :global(.eyu-sheet__close:hover) { background: var(--surface-hover-role); color: var(--content-primary); }
  :global(.eyu-sheet__close:focus-visible) { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
</style>

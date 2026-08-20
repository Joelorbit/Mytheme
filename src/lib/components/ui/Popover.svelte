<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Popover as Primitive } from 'bits-ui';

  let {
    trigger,
    children,
    side = 'bottom',
    align = 'start',
  }: {
    trigger: Snippet;
    children: Snippet;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
  } = $props();
</script>

<Primitive.Root>
  <Primitive.Trigger class="eyu-popover__trigger">{@render trigger()}</Primitive.Trigger>
  <Primitive.Portal>
    <Primitive.Content class="eyu-popover__content" {side} {align} sideOffset={8}>
      {@render children()}
    </Primitive.Content>
  </Primitive.Portal>
</Primitive.Root>

<style>
  :global(.eyu-popover__trigger) { display: inline-flex; align-items: center; }
  :global(.eyu-popover__content) { z-index: var(--z-overlay); min-width: 16rem; max-width: min(90vw, 30rem); padding: var(--space-5); border: 1px solid var(--outline); border-radius: var(--radius-lg); background: var(--surface-highest); color: var(--content-primary); box-shadow: var(--shadow-3); animation: euy-popover-in var(--dur-2) var(--ease-emphasis); }
  :global(.eyu-popover__content:focus-visible) { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  @keyframes euy-popover-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
</style>

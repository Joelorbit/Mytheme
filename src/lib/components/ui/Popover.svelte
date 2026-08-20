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

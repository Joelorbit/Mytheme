<script lang="ts">
  import { Combobox as Primitive } from 'bits-ui';
  import Icon from '../primitives/Icon.svelte';

  let {
    options,
    value = $bindable(''),
    placeholder = 'Search or select',
    label,
  }: {
    options: string[];
    value?: string;
    placeholder?: string;
    label?: string;
  } = $props();

  const items = $derived(options.map((option) => ({ value: option, label: option })));
</script>

<div class="eyu-combobox">
  {#if label}<span class="eyu-combobox__label caption">{label}</span>{/if}
  <Primitive.Root type="single" {items} bind:value>
    <div class="eyu-combobox__control">
      <Primitive.Input class="eyu-combobox__input" {placeholder} />
      <Primitive.Trigger class="eyu-combobox__trigger" aria-label="Open options"><Icon name="chevrons-up-down" size={16} /></Primitive.Trigger>
    </div>
    <Primitive.Portal>
      <Primitive.Content class="eyu-combobox__content" sideOffset={6}>
        {#each options as option}
          <Primitive.Item class="eyu-combobox__item" value={option}>{option}</Primitive.Item>
        {/each}
      </Primitive.Content>
    </Primitive.Portal>
  </Primitive.Root>
</div>

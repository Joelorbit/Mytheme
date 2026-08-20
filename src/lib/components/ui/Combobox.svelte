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

<style>
  :global(.eyu-combobox) { display: flex; flex-direction: column; gap: var(--space-2); }
  :global(.eyu-combobox__label) { color: var(--content-secondary); }
  :global(.eyu-combobox__control) { position: relative; display: flex; align-items: center; }
  :global(.eyu-combobox__input) { width: 100%; min-height: var(--control-md); padding: 0 var(--space-8) 0 var(--space-3); border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--surface-default); color: var(--content-primary); outline: none; }
  :global(.eyu-combobox__input:focus) { border-color: var(--outline-focus); box-shadow: var(--shadow-focus); }
  :global(.eyu-combobox__trigger) { position: absolute; right: var(--space-2); display: grid; width: var(--control-sm); height: var(--control-sm); place-items: center; border: 0; background: transparent; color: var(--content-muted); cursor: pointer; }
  :global(.eyu-combobox__content) { z-index: var(--z-overlay); width: var(--bits-select-anchor-width); max-height: 16rem; overflow-y: auto; padding: var(--space-1); border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--surface-highest); box-shadow: var(--shadow-3); }
  :global(.eyu-combobox__item) { display: flex; min-height: var(--control-md); align-items: center; padding: 0 var(--space-3); border-radius: var(--radius-sm); color: var(--content-secondary); cursor: pointer; outline: none; }
  :global(.eyu-combobox__item:hover), :global(.eyu-combobox__item[data-highlighted]) { background: var(--primary-container); color: var(--on-primary-container); }
  :global(.eyu-combobox__item[data-selected]) { color: var(--primary); font-weight: 650; }
</style>

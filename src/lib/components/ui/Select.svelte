<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  let {
    label,
    id,
    children,
    ...rest
  }: HTMLSelectAttributes & { label?: string; children?: Snippet } = $props();
</script>

<div class="select">
  {#if label}
    <label class="select__label caption" for={id}>{label}</label>
  {/if}

  <span class="select__wrap">
    <select {id} class="select__control" {...rest}>
      {#if children}{@render children()}{/if}
    </select>
    <Icon class="select__chevron" name="chevron-down" size={16} strokeWidth={1.8} aria-hidden="true" />
  </span>
</div>

<style>
  .select {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .select__label {
    color: var(--text-secondary);
  }

  .select__wrap {
    position: relative;
    display: block;
  }

  .select__control {
    width: 100%;
    min-height: 40px;
    appearance: none;
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    background: var(--surface);
    padding: var(--space-2) var(--space-8) var(--space-2) var(--space-3);
    color: var(--text-primary);
    outline: none;
    cursor: pointer;
    transition:
      border-color var(--dur-2) var(--ease-standard),
      box-shadow var(--dur-2) var(--ease-standard);
  }

  .select__control:hover:not(:focus) {
    border-color: var(--line-strong);
  }

  .select__control:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  .select__control:disabled {
    background: var(--disabled-bg);
    color: var(--text-disabled);
    cursor: not-allowed;
  }

  .select__chevron {
    position: absolute;
    top: 50%;
    right: var(--space-3);
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
  }
</style>
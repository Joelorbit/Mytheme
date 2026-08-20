<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import type { HTMLSelectAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  let {
    label,
    id,
    hint,
    error,
    children,
    ...rest
  }: HTMLSelectAttributes & { label?: string; hint?: string; error?: string; children?: Snippet } = $props();
</script>

<div class="select">
  {#if label}
    <label class="select__label caption" for={id}>{label}</label>
  {/if}

  <span class="select__wrap">
    <select {id} class="select__control" class:select__control--error={!!error} aria-invalid={error ? 'true' : undefined} aria-describedby={error ? (id ? `${id}-error` : undefined) : hint && id ? `${id}-hint` : undefined} {...rest}>
      {#if children}{@render children()}{/if}
    </select>
    <span class="select__chevron" aria-hidden="true"><Icon name="chevron-down" size={16} strokeWidth={1.8} /></span>
  </span>

  {#if hint && !error}<p class="select__hint body-xs" id={id ? `${id}-hint` : undefined}>{hint}</p>{/if}
  {#if error}<p class="select__hint select__hint--error body-xs" id={id ? `${id}-error` : undefined} role="alert">{error}</p>{/if}
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
    min-height: var(--control-md);
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
    border-color: var(--outline-focus);
    box-shadow: var(--shadow-focus);
  }

  .select__control--error,
  .select__control--error:hover:not(:focus) { border-color: var(--status-danger); }

  .select__control:disabled {
    background: var(--disabled-bg);
    color: var(--text-disabled);
    cursor: not-allowed;
  }

  .select__hint { margin: 0; color: var(--content-muted); }
  .select__hint--error { color: var(--status-danger); }

  .select__chevron {
    position: absolute;
    top: 50%;
    right: var(--space-3);
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
  }
</style>
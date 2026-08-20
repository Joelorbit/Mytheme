<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  let {
    label,
    hint,
    error,
    id,
    value = $bindable(),
    ...rest
  }: HTMLInputAttributes & {
    label?: string;
    hint?: string;
    error?: string;
    value?: HTMLInputAttributes['value'];
  } = $props();
</script>

<div class="field">
  {#if label}
    <label class="field__label caption" for={id}>{label}</label>
  {/if}

  <input
    {id}
    {value}
    class="field__input"
    class:field__input--error={!!error}
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={error ? (id ? `${id}-error` : undefined) : hint && id ? `${id}-hint` : undefined}
    {...rest}
  />

  {#if hint && !error}
    <p class="field__hint body-xs" id={id ? `${id}-hint` : undefined}>{hint}</p>
  {/if}

  {#if error}
    <p class="field__hint field__hint--error body-xs" id={id ? `${id}-error` : undefined} role="alert">{error}</p>
  {/if}
</div>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .field__label {
    color: var(--text-secondary);
  }

  .field__input {
    width: 100%;
    min-height: var(--control-md);
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    background: var(--surface);
    padding: var(--space-2) var(--space-3);
    color: var(--text-primary);
    outline: none;
    transition:
      border-color var(--dur-2) var(--ease-standard),
      box-shadow var(--dur-2) var(--ease-standard);
  }

  .field__input::placeholder {
    color: var(--text-muted);
  }

  .field__input:hover:not(:focus) {
    border-color: var(--line-strong);
  }

  .field__input:focus {
    border-color: var(--outline-focus);
    box-shadow: var(--shadow-focus);
  }

  .field__input--error,
  .field__input--error:hover:not(:focus) {
    border-color: var(--danger);
  }

  .field__input--error:focus {
    box-shadow: 0 0 0 3px var(--danger-soft);
  }

  .field__input:disabled {
    background: var(--disabled-bg);
    color: var(--text-disabled);
  }

  .field__hint {
    margin: 0;
    color: var(--text-muted);
  }

  .field__hint--error {
    color: var(--danger);
  }
</style>
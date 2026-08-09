<script lang="ts">
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  let {
    label,
    hint,
    error,
    id,
    rows = 4,
    ...rest
  }: HTMLTextareaAttributes & {
    label?: string;
    hint?: string;
    error?: string;
  } = $props();
</script>

<div class="field">
  {#if label}
    <label class="field__label caption" for={id}>{label}</label>
  {/if}

  <textarea
    {id}
    {rows}
    class="field__input"
    class:field__input--error={!!error}
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={error ? `${id}-error` : undefined}
    {...rest}
  ></textarea>

  {#if hint && !error}
    <p class="field__hint body-xs">{hint}</p>
  {/if}

  {#if error}
    <p class="field__hint field__hint--error body-xs" id={`${id}-error`}>{error}</p>
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
    min-height: 40px;
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    background: var(--surface);
    padding: var(--space-2) var(--space-3);
    color: var(--text-primary);
    outline: none;
    font-family: var(--font-body);
    resize: vertical;
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
    border-color: var(--ring);
    box-shadow: 0 0 0 3px var(--accent-soft);
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
    cursor: not-allowed;
  }

  .field__hint {
    margin: 0;
    color: var(--text-muted);
  }

  .field__hint--error {
    color: var(--danger);
  }
</style>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    id,
    label,
    hint,
    error,
    required = false,
    children,
  }: {
    id: string;
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    children: Snippet;
  } = $props();

</script>

<div class="field">
  {#if label}
    <label class="field__label" for={id}>
      {label}{#if required}<span aria-hidden="true"> *</span><span class="visually-hidden"> (required)</span>{/if}
    </label>
  {/if}
  {@render children()}
  {#if hint && !error}<p class="field__hint" id={`${id}-hint`}>{hint}</p>{/if}
  {#if error}<p class="field__hint field__hint--error" id={`${id}-error`} role="alert">{error}</p>{/if}
</div>

<style>
  .field { display: flex; flex-direction: column; gap: var(--space-2); }
  .field__label { color: var(--content-secondary); font-family: var(--font-mono); font-size: var(--caption); font-weight: 600; letter-spacing: var(--tracking-caption); text-transform: uppercase; }
  .field__hint { margin: 0; color: var(--content-muted); font-size: var(--body-xs); }
  .field__hint--error { color: var(--status-danger); }
</style>

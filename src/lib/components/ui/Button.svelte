<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import type { Snippet } from 'svelte';

  type Variant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'link' | 'danger';
  type Size = 'sm' | 'md' | 'lg' | 'icon';

  const arrowSize: Record<Size, number> = { sm: 14, md: 15, lg: 16, icon: 16 };

  let {
    variant = 'primary',
    size = 'md',
    href,
    target,
    external = false,
    loading = false,
    disabled = false,
    type = 'button',
    onClick,
    onclick,
    children,
  }: {
    variant?: Variant;
    size?: Size;
    href?: string;
    target?: string;
    external?: boolean;
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit';
    onClick?: (event: MouseEvent) => void;
    onclick?: (event: MouseEvent) => void;
    children: Snippet;
  } = $props();

  const busy = $derived(loading || disabled);
  const cls = $derived(`btn btn--${variant} btn--${size}`);
</script>

{#if href}
  <a
    {target}
    rel={external ? 'noreferrer' : undefined}
    class={cls}
    aria-disabled={busy}
    tabindex={busy ? -1 : undefined}
    href={busy ? undefined : href}
  >
    {#if loading}<span class="btn__spinner" aria-hidden="true"></span>{/if}
    <span class="btn__label">{@render children()}</span>
    {#if external}<Icon name="arrow-up-right" size={arrowSize[size]} strokeWidth={1.8} />{/if}
  </a>
{:else}
  <button
    {type}
    class={cls}
    disabled={busy}
    onclick={onclick ?? onClick}
    aria-busy={loading}
  >
    {#if loading}<span class="btn__spinner" aria-hidden="true"></span>{/if}
    <span class="btn__label">{@render children()}</span>
  </button>
{/if}

<style>
  .btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    font-size: var(--body-sm);
    font-weight: 550;
    letter-spacing: 0.005em;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition:
      background-color var(--dur-2) var(--ease-standard),
      border-color var(--dur-2) var(--ease-standard),
      color var(--dur-2) var(--ease-standard),
      box-shadow var(--dur-2) var(--ease-standard),
      transform var(--dur-1) var(--ease-standard);
  }

  .btn:disabled {
    cursor: default;
  }

  .btn__label {
    display: inline-flex;
    align-items: center;
  }

  /* -------- variants: one monochrome language, energy as emphasis -------- */
  .btn--primary {
    background: var(--ink);
    color: var(--ink-inverse);
  }

  .btn--primary:hover:not(:disabled) {
    background: var(--surface-elevated);
    border-color: var(--ink);
    color: var(--ink);
  }

  .btn--primary:active:not(:disabled) {
    background: var(--surface-active);
  }

  .btn--secondary {
    background: var(--surface);
    border-color: var(--line);
    color: var(--text-primary);
  }

  .btn--secondary:hover:not(:disabled) {
    background: var(--surface-elevated);
    border-color: var(--line-strong);
  }

  .btn--secondary:active:not(:disabled) {
    background: var(--surface-active);
  }

  .btn--tertiary {
    background: var(--tertiary-container);
    color: var(--on-tertiary-container);
  }

  .btn--tertiary:hover:not(:disabled) {
    background: color-mix(in srgb, var(--tertiary) 28%, var(--surface-default));
  }

  .btn--outline {
    border-color: var(--outline);
    background: transparent;
    color: var(--content-primary);
  }

  .btn--outline:hover:not(:disabled) {
    border-color: var(--outline-strong);
    background: var(--surface-hover-role);
  }

  .btn--link {
    min-height: auto;
    padding-inline: 0;
    border-color: transparent;
    background: transparent;
    color: var(--content-link);
    text-decoration: underline;
    text-underline-offset: 0.18em;
  }

  .btn--link:hover:not(:disabled) {
    color: var(--content-link-hover);
  }

  .btn--ghost {
    background: transparent;
    color: var(--text-primary);
  }

  .btn--ghost:hover:not(:disabled) {
    background: var(--surface-hover);
  }

  .btn--ghost:active:not(:disabled) {
    background: var(--surface-active);
  }

  .btn--danger {
    background: var(--danger-soft);
    border-color: color-mix(in srgb, var(--danger) 35%, transparent);
    color: var(--danger);
  }

  .btn--danger:hover:not(:disabled) {
    background: color-mix(in srgb, var(--danger) 22%, transparent);
  }

  /* -------- states -------- */
  .btn:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .btn[aria-disabled='true'] {
    pointer-events: none;
  }

  .btn:disabled {
    background: var(--disabled-bg);
    border-color: transparent;
    color: var(--text-disabled);
    cursor: not-allowed;
  }

  .btn:active:not(:disabled) {
    transform: translateY(1px);
  }

  /* -------- sizes (8pt rhythm) -------- */
  .btn--sm {
    min-height: var(--control-md);
    padding-inline: var(--space-3);
    font-size: var(--body-xs);
  }

  .btn--md {
    min-height: var(--control-md);
    padding-inline: var(--space-4);
  }

  .btn--lg {
    min-height: var(--control-lg);
    padding-inline: var(--space-5);
    font-size: var(--body-md);
  }

  .btn--icon {
    width: var(--control-icon);
    height: var(--control-icon);
    padding: 0;
  }

  /* -------- loading -------- */
  .btn__spinner {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
    border: 1.5px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 550ms linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
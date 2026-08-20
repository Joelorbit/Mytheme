<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { IconName } from '../primitives/Icon.svelte';
  import Icon from '../primitives/Icon.svelte';

  let {
    icon,
    label,
    variant = 'ghost',
    size = 'md',
    href,
    disabled = false,
    loading = false,
    onclick,
    children,
  }: {
    icon?: IconName;
    label: string;
    variant?: 'ghost' | 'outline' | 'solid' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    disabled?: boolean;
    loading?: boolean;
    onclick?: (event: MouseEvent) => void;
    children?: Snippet;
  } = $props();

  const busy = $derived(disabled || loading);
</script>

{#if href}
  <a class="icon-button icon-button--{variant} icon-button--{size}" class:icon-button--disabled={busy} href={busy ? undefined : href} aria-label={label} aria-disabled={busy} tabindex={busy ? -1 : undefined}>
    {#if loading}<span class="icon-button__spinner" aria-hidden="true"></span>{:else if icon}<Icon name={icon} size={18} strokeWidth={1.8} />{:else if children}{@render children()}{/if}
  </a>
{:else}
  <button type="button" class="icon-button icon-button--{variant} icon-button--{size}" disabled={busy} aria-label={label} aria-busy={loading} onclick={onclick}>
    {#if loading}<span class="icon-button__spinner" aria-hidden="true"></span>{:else if icon}<Icon name={icon} size={18} strokeWidth={1.8} />{:else if children}{@render children()}{/if}
  </button>
{/if}

<style>
  .icon-button { display: inline-grid; place-items: center; width: var(--control-icon); height: var(--control-icon); padding: 0; border: 1px solid transparent; border-radius: var(--radius-md); color: var(--content-primary); text-decoration: none; cursor: pointer; transition: background var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard), color var(--dur-2) var(--ease-standard), transform var(--dur-1) var(--ease-standard); }
  .icon-button--sm { width: var(--control-md); height: var(--control-md); }
  .icon-button--lg { width: var(--control-lg); height: var(--control-lg); }
  .icon-button--ghost { background: transparent; }
  .icon-button--ghost:hover:not(:disabled) { background: var(--surface-hover-role); }
  .icon-button--outline { border-color: var(--outline); background: var(--surface-default); }
  .icon-button--outline:hover:not(:disabled) { border-color: var(--outline-strong); background: var(--surface-high); }
  .icon-button--solid { background: var(--primary); color: var(--on-primary); }
  .icon-button--solid:hover:not(:disabled) { background: var(--primary-hover); }
  .icon-button--danger { color: var(--status-danger); background: var(--status-danger-container); }
  .icon-button--danger:hover:not(:disabled) { border-color: var(--status-danger); }
  .icon-button:hover:not(:disabled) { transform: translateY(-1px); }
  .icon-button:active:not(:disabled) { transform: translateY(0); }
  .icon-button:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  .icon-button:disabled, .icon-button--disabled { opacity: var(--opacity-disabled); cursor: not-allowed; pointer-events: none; }
  .icon-button__spinner { width: 1rem; height: 1rem; border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spin 700ms linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>

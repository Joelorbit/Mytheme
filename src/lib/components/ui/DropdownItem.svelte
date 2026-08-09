<script lang="ts">
  import Icon, { type IconName } from '../primitives/Icon.svelte';

  let {
    label,
    icon,
    danger = false,
    disabled = false,
    onclick,
  }: {
    label: string;
    icon?: IconName;
    danger?: boolean;
    disabled?: boolean;
    onclick?: () => void;
  } = $props();
</script>

<button
  class="dropdown-item"
  class:dropdown-item--danger={danger}
  {disabled}
  {onclick}
  role="menuitem"
>
  {#if icon}
    <Icon name={icon} size={16} strokeWidth={1.8} class="dropdown-item-icon" />
  {/if}
  <span class="body-sm">{label}</span>
</button>

<style>
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    width: 100%;
    padding: var(--space-2) var(--space-3);
    border: none;
    background: transparent;
    color: var(--text-secondary);
    border-radius: var(--radius-md);
    cursor: pointer;
    text-align: left;
    transition: background-color var(--dur-1) var(--ease-standard), color var(--dur-1) var(--ease-standard);
  }

  .dropdown-item:hover:not(:disabled) {
    background: var(--surface-hover);
    color: var(--text-primary);
  }

  .dropdown-item--danger:hover:not(:disabled) {
    color: var(--danger);
  }

  .dropdown-item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :global(.dropdown-item-icon) {
    opacity: 0.8;
  }
</style>

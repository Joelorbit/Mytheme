<script lang="ts">
  import { DropdownMenu as Menu } from 'bits-ui';
  import Icon, { type IconName } from '../primitives/Icon.svelte';

  export type MenuItem = { label: string; value: string; disabled?: boolean; danger?: boolean };

  let {
    label = 'Open menu',
    icon = 'ellipsis',
    items,
    onselect,
  }: {
    label?: string;
    icon?: IconName;
    items: MenuItem[];
    onselect?: (value: string) => void;
  } = $props();
</script>

<Menu.Root>
  <Menu.Trigger class="eyu-menu__trigger" aria-label={label}>
    <Icon name={icon} size={18} strokeWidth={1.8} />
  </Menu.Trigger>
  <Menu.Portal>
    <Menu.Content class="eyu-menu__content" sideOffset={8}>
      {#each items as item}
        <Menu.Item class={`eyu-menu__item${item.danger ? ' eyu-menu__item--danger' : ''}`} disabled={item.disabled} onselect={() => onselect?.(item.value)}>
          {item.label}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Portal>
</Menu.Root>

<style>
  :global(.eyu-menu__trigger) { display: inline-grid; width: var(--control-icon); height: var(--control-icon); place-items: center; border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--surface-default); color: var(--content-primary); cursor: pointer; }
  :global(.eyu-menu__trigger:hover) { background: var(--surface-hover-role); border-color: var(--outline-strong); }
  :global(.eyu-menu__trigger:focus-visible) { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  :global(.eyu-menu__content) { z-index: var(--z-overlay); min-width: 12rem; padding: var(--space-1); border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--surface-highest); color: var(--content-primary); box-shadow: var(--shadow-3); }
  :global(.eyu-menu__item) { display: flex; min-height: var(--control-md); align-items: center; padding: 0 var(--space-3); border-radius: var(--radius-sm); color: var(--content-secondary); font-size: var(--body-sm); cursor: pointer; outline: none; }
  :global(.eyu-menu__item:hover), :global(.eyu-menu__item[data-highlighted]) { background: var(--primary-container); color: var(--on-primary-container); }
  :global(.eyu-menu__item--danger) { color: var(--status-danger); }
  :global(.eyu-menu__item[data-disabled]) { opacity: var(--opacity-disabled); cursor: not-allowed; }
</style>

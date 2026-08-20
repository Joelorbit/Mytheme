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

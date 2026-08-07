<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { IconName } from '../primitives/Icon.svelte';
  import Icon from '../primitives/Icon.svelte';

  let {
    icon = 'file',
    title,
    description,
    children,
  }: {
    icon?: IconName;
    title: string;
    description?: string;
    children?: Snippet;
  } = $props();
</script>

<div class="empty" role="status">
  <span class="empty__icon"><Icon name={icon} size={28} strokeWidth={1.4} /></span>
  <h3 class="empty__title heading heading-sm">{title}</h3>
  {#if description}<p class="empty__desc body-sm">{description}</p>{/if}
  {#if children}
    <div class="empty__action">{@render children()}</div>
  {/if}
</div>

<style>
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    border: 1px dashed var(--line);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
    text-align: center;
  }

  .empty__icon {
    display: flex;
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: var(--surface-hover);
    color: var(--text-muted);
  }

  .empty__title {
    margin: var(--space-2) 0 0;
  }

  .empty__desc {
    max-width: 320px;
    margin: 0;
    color: var(--text-muted);
  }

  .empty__action {
    margin-top: var(--space-4);
  }
</style>
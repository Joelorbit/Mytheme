<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let {
    items,
  }: {
    items: Array<{label: string, href?: string}>;
  } = $props();
</script>

<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol class="breadcrumb-list">
    {#each items as item, i}
      <li class="breadcrumb-item">
        {#if i === items.length - 1 || !item.href}
          <span class="breadcrumb-text body-sm breadcrumb-text--current" aria-current="page">
            {item.label}
          </span>
        {:else}
          <a href={item.href} class="breadcrumb-link body-sm">
            {item.label}
          </a>
          <Icon name="chevron-right" size={14} class="breadcrumb-separator" />
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  .breadcrumb-list {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
  }

  .breadcrumb-link {
    color: var(--text-muted);
    text-decoration: none;
    transition: color var(--dur-2) var(--ease-standard);
  }

  .breadcrumb-link:hover {
    color: var(--text-primary);
  }

  .breadcrumb-text--current {
    color: var(--text-primary);
  }

  :global(.breadcrumb-separator) {
    color: var(--text-faint);
    margin-inline: var(--space-1);
  }
</style>

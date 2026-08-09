<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let {
    items,
    multiple = false,
  }: {
    items: Array<{id: string, title: string, content: string}>;
    multiple?: boolean;
  } = $props();

  let openItems = $state<Set<string>>(new Set());

  function toggle(id: string) {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      if (!multiple) newOpen.clear();
      newOpen.add(id);
    }
    openItems = newOpen;
  }
</script>

<div class="accordion">
  {#each items as item}
    <div class="accordion-item" class:accordion-item--open={openItems.has(item.id)}>
      <button class="accordion-header" onclick={() => toggle(item.id)} aria-expanded={openItems.has(item.id)}>
        <span class="heading heading-sm">{item.title}</span>
        <Icon name="chevron-down" size={18} class="accordion-icon" />
      </button>
      {#if openItems.has(item.id)}
        <div class="accordion-content">
          <p class="body-sm">{item.content}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .accordion {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--line-soft);
  }

  .accordion-item {
    border-bottom: 1px solid var(--line-soft);
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--space-4) 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-primary);
    text-align: left;
  }

  :global(.accordion-icon) {
    transition: transform var(--dur-2) var(--ease-standard);
    color: var(--text-muted);
  }

  .accordion-item--open :global(.accordion-icon) {
    transform: rotate(180deg);
  }

  .accordion-content {
    padding-bottom: var(--space-4);
    color: var(--text-secondary);
    animation: expand var(--dur-2) var(--ease-standard);
  }

  @keyframes expand {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

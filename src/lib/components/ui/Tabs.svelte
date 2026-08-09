<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    tabs,
    active,
    onchange,
    children,
  }: {
    tabs: Array<{id: string, label: string}>;
    active?: string;
    onchange?: (id: string) => void;
    children: Snippet;
  } = $props();

  let activeTab = $state<string>('');

  $effect(() => {
    if (!activeTab && tabs && tabs.length > 0) {
      activeTab = active || tabs[0].id;
    }
  });

  function selectTab(id: string) {
    activeTab = id;
    if (onchange) onchange(id);
  }

  function handleKeydown(event: KeyboardEvent, index: number) {
    let nextIndex = index;
    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }
    
    if (nextIndex !== index) {
      const nextTab = tabs[nextIndex];
      selectTab(nextTab.id);
      const btn = document.getElementById(`tab-${nextTab.id}`);
      if (btn) btn.focus();
    }
  }
</script>

<div class="tabs">
  <div class="tabs-list" role="tablist">
    {#each tabs as tab, index}
      <button
        type="button"
        id="tab-{tab.id}"
        role="tab"
        aria-selected={activeTab === tab.id}
        aria-controls="panel-{tab.id}"
        tabindex={activeTab === tab.id ? 0 : -1}
        class="tab-btn body-sm"
        class:tab-btn--active={activeTab === tab.id}
        onclick={() => selectTab(tab.id)}
        onkeydown={(e) => handleKeydown(e, index)}
      >
        {tab.label}
      </button>
    {/each}
  </div>
  
  <div class="tabs-panel" id="panel-{activeTab}" role="tabpanel" aria-labelledby="tab-{activeTab}">
    {@render children()}
  </div>
</div>

<style>
  .tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .tabs-list {
    display: flex;
    border-bottom: 1px solid var(--line-soft);
    margin-bottom: var(--space-4);
  }

  .tab-btn {
    padding: var(--space-2) var(--space-4);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    cursor: pointer;
    font-weight: 500;
    transition:
      color var(--dur-2) var(--ease-standard),
      border-color var(--dur-2) var(--ease-standard);
  }

  .tab-btn:hover {
    color: var(--text-primary);
  }

  .tab-btn:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: -2px;
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  }

  .tab-btn--active {
    color: var(--text-primary);
    border-bottom-color: var(--accent);
  }

  .tabs-panel {
    outline: none;
  }
</style>

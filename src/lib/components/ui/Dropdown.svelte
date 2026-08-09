<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  let {
    trigger,
    children,
    align = 'left',
  }: {
    trigger: Snippet;
    children: Snippet;
    align?: 'left' | 'right';
  } = $props();

  let open = $state(false);
  let container: HTMLElement;

  function toggle() {
    open = !open;
  }

  function handleOutsideClick(event: MouseEvent) {
    if (open && container && !container.contains(event.target as Node)) {
      open = false;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (open && event.key === 'Escape') {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div class="dropdown-wrapper" bind:this={container}>
  <div class="dropdown-trigger" onclick={toggle} onkeydown={(e) => e.key === 'Enter' && toggle()} role="button" tabindex="0">
    {@render trigger()}
  </div>

  {#if open}
    <div class="dropdown-menu dropdown-menu--{align}" role="menu">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .dropdown-wrapper {
    position: relative;
    display: inline-block;
  }

  .dropdown-trigger {
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + var(--space-2));
    z-index: var(--z-overlay);
    min-width: 200px;
    background: var(--surface-elevated);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2);
    padding: var(--space-2);
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    animation: fadeIn var(--dur-2) var(--ease-standard);
  }

  .dropdown-menu--left {
    left: 0;
  }

  .dropdown-menu--right {
    right: 0;
  }

  @keyframes fadeIn {
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

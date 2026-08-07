<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '../primitives/Icon.svelte';

  let {
    subtle = false,
    position = 'fixed',
  }: { subtle?: boolean; position?: 'fixed' | 'relative' } = $props();

  let theme = $state<'light' | 'dark'>('dark');

  onMount(() => {
    const stored = localStorage.getItem('theme');
    theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.dataset.theme = theme;
  });

  function toggle() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<button
  type="button"
  class="toggle"
  class:toggle--subtle={subtle}
  class:toggle--relative={position === 'relative'}
  onclick={toggle}
  aria-label="Switch theme"
  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
>
  {#if theme === 'light'}
    <Icon name="sun" size={16} strokeWidth={1.8} />
  {:else}
    <Icon name="moon-star" size={16} strokeWidth={1.8} />
  {/if}
</button>

<style>
  .toggle {
    position: fixed;
    top: var(--space-4);
    right: var(--space-4);
    z-index: var(--z-nav);
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    background: var(--surface);
    color: var(--text-primary);
    cursor: pointer;
    box-shadow: var(--shadow-1);
    transition:
      background var(--dur-2) var(--ease-standard),
      border-color var(--dur-2) var(--ease-standard),
      color var(--dur-2) var(--ease-standard),
      opacity var(--dur-3),
      transform var(--dur-1) var(--ease-standard);
  }

  .toggle--subtle {
    opacity: 0.4;
  }

  .toggle--subtle:hover,
  .toggle--subtle:focus-visible {
    opacity: 1;
    border-color: var(--ink);
  }

  .toggle--relative {
    position: relative;
    top: auto;
    right: auto;
  }

  .toggle:active:not(:disabled) {
    transform: translateY(1px);
  }

  .toggle svg {
    display: block;
  }
</style>
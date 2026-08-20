<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '../primitives/Icon.svelte';
  import { applyTheme, DEFAULT_THEME, readStoredMode, readStoredTheme, toggleColorMode, type ThemeId, type ThemeMode } from '../../theme';

  let {
    subtle = false,
    position = 'fixed',
    themeId = DEFAULT_THEME,
    respectStoredTheme = true,
    onchange,
    onmodechange,
  }: {
    subtle?: boolean;
    position?: 'fixed' | 'relative';
    themeId?: ThemeId;
    respectStoredTheme?: boolean;
    onchange?: (themeId: ThemeId) => void;
    onmodechange?: (mode: ThemeMode) => void;
  } = $props();

  let currentTheme = $state<ThemeId>(DEFAULT_THEME);
  let currentMode = $state<ThemeMode>('dark');

  onMount(() => {
    currentTheme = respectStoredTheme ? readStoredTheme(themeId) : themeId;
    currentMode = readStoredMode('dark');
    applyTheme(currentTheme, false, currentMode);
  });

  $effect(() => {
    if (themeId && themeId !== currentTheme) currentTheme = themeId;
  });

  function toggle() {
    currentMode = toggleColorMode(currentMode);
    applyTheme(currentTheme, true, currentMode);
    onchange?.(currentTheme);
    onmodechange?.(currentMode);
  }

  const isLight = $derived(currentMode === 'light');
</script>

<button
  type="button"
  class="toggle"
  class:toggle--subtle={subtle}
  class:toggle--relative={position === 'relative'}
  onclick={toggle}
  aria-label="Switch theme"
  title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
>
  {#if isLight}
    <Icon name="sun" size={18} strokeWidth={1.8} />
  {:else}
    <Icon name="moon-star" size={18} strokeWidth={1.8} />
  {/if}
</button>

<style>
  .toggle {
    position: fixed;
    top: var(--space-4);
    right: var(--space-4);
    z-index: var(--z-nav);
    display: flex;
    width: var(--control-icon);
    height: var(--control-icon);
    align-items: center;
    justify-content: center;
    border: 1px solid var(--outline);
    border-radius: var(--radius-md);
    background: var(--surface-default);
    color: var(--content-primary);
    cursor: pointer;
    box-shadow: var(--shadow-1);
    transition: background var(--dur-2) var(--ease-standard), border-color var(--dur-2) var(--ease-standard), color var(--dur-2) var(--ease-standard), opacity var(--dur-3), transform var(--dur-1) var(--ease-standard);
  }
  .toggle--subtle { opacity: 0.52; }
  .toggle--subtle:hover, .toggle--subtle:focus-visible { opacity: 1; border-color: var(--content-primary); }
  .toggle--relative { position: relative; top: auto; right: auto; }
  .toggle:hover { transform: translateY(-1px); }
  .toggle:active { transform: translateY(0); }
  .toggle:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  .toggle :global(svg) { display: block; }
</style>

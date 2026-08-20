<script lang="ts">
  import { onMount } from 'svelte';
  import { themePresets } from '../../data/landing';
  import { applyTheme, DEFAULT_THEME, readStoredTheme, type ThemeId } from '../../theme';
  import Icon from '../primitives/Icon.svelte';

  let {
    value = DEFAULT_THEME,
    onchange,
    label = 'Theme preset',
  }: {
    value?: ThemeId;
    onchange?: (themeId: ThemeId) => void;
    label?: string;
  } = $props();

  let current = $state<ThemeId>(DEFAULT_THEME);

  onMount(() => {
    current = readStoredTheme(value);
    applyTheme(current, false);
  });

  $effect(() => {
    if (value && value !== current) current = value;
  });

  function selectTheme(themeId: ThemeId) {
    current = themeId;
    applyTheme(themeId);
    onchange?.(themeId);
  }
</script>

<div class="theme-picker">
  <label class="theme-picker__label caption" for="eyu-theme-picker">{label}</label>
  <div class="theme-picker__control">
    <select id="eyu-theme-picker" value={current} onchange={(event) => selectTheme((event.currentTarget as HTMLSelectElement).value)}>
      {#each themePresets as preset}
        <option value={preset.id}>{preset.name}</option>
      {/each}
    </select>
    <span aria-hidden="true"><Icon name="chevron-down" size={16} strokeWidth={1.8} /></span>
  </div>
</div>

<style>
  .theme-picker { display: flex; flex-direction: column; gap: var(--space-2); }
  .theme-picker__label { color: var(--content-muted); }
  .theme-picker__control { position: relative; display: flex; align-items: center; }
  select { width: 100%; min-height: var(--control-md); appearance: none; border: 1px solid var(--outline); border-radius: var(--radius-md); background: var(--surface-default); color: var(--content-primary); padding: 0 var(--space-8) 0 var(--space-3); cursor: pointer; }
  select:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
  .theme-picker__control :global(svg) { position: absolute; right: var(--space-3); pointer-events: none; color: var(--content-muted); }
</style>

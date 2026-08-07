<script lang="ts">
  import { Sparkles, Zap, Globe, ArrowUpRight, Moon, Sun } from '@lucide/svelte';

  let theme = $state<'dark' | 'light'>(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<svelte:head>
  <title>eyü / Design System</title>
</svelte:head>

<main class="shell page">
  <header class="head">
    <span class="head__mark">
      <Sparkles size={18} strokeWidth={1.5} />
      <span class="caption">eyü</span>
    </span>
    <span class="caption head__meta">design system — v2.0</span>
    <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      {#if theme === 'dark'}
        <Sun size={18} strokeWidth={1.5} />
      {:else}
        <Moon size={18} strokeWidth={1.5} />
      {/if}
    </button>
  </header>

  <h1 class="display display--hero title">
    <span>Design,</span>
    <em class="display--emphasis">tuned.</em>
  </h1>

  <p class="body-lg sub">
    A premium monochrome system — painted wall canvas, sharp icons, engineered
    type and motion. Built to be maintained, not showcased.
  </p>

  <footer class="foot">
    <span class="caption">own taste, own tools</span>
    <span class="foot__links">
      <Zap size={16} strokeWidth={1.8} />
      <Globe size={16} strokeWidth={1.8} />
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </span>
  </footer>
</main>

<style>
  .page {
    display: flex;
    min-height: 100dvh;
    flex-direction: column;
    justify-content: center;
    padding-block: var(--space-8);
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .head__mark {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .head__meta {
    color: var(--text-muted);
  }

  .theme-toggle {
    display: grid;
    width: 38px;
    height: 38px;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: var(--radius-pill);
    background: var(--surface);
    color: var(--text-secondary);
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      color 0.15s ease;
  }

  .theme-toggle:hover {
    border-color: var(--line-strong);
    color: var(--text-primary);
  }

  .title {
    margin: var(--space-8) 0 0;
    font-size: clamp(3.6rem, 14vw, var(--display-lg));
    line-height: 0.92;
  }

  .sub {
    max-width: 560px;
    margin: var(--space-4) 0 0;
    color: var(--text-muted);
  }

  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--space-10);
    border-top: 1px solid var(--line-soft);
    padding-top: var(--space-4);
    color: var(--text-muted);
  }

  .foot__links {
    display: flex;
    gap: var(--space-4);
  }

  .foot__links :global(svg) {
    transition: color 0.15s ease;
  }

  .foot__links :global(svg:hover) {
    color: var(--text-primary);
  }
</style>

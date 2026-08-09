<script lang="ts">
  import Icon from './lib/components/primitives/Icon.svelte';

  let theme = $state<'dark' | 'light'>(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<svelte:head>
  <title>EyuTaste — Design System</title>
</svelte:head>

<div class="centered-page">
  <div class="theme-bar">
    <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
      {#if theme === 'dark'}
        <Icon name="sun" size={17} />
      {:else}
        <Icon name="moon-star" size={17} />
      {/if}
    </button>
  </div>

  <main class="hero-center">
    <a
      class="eyu"
      href="https://github.com/Joelorbit/Mytheme"
      target="_blank"
      rel="noreferrer"
      aria-label="EyuTaste — Eyu pattern on GitHub"
    >
      <span class="eyu__box" aria-hidden="true">
        <span class="eyu__text">EyuTaste</span>
      </span>
      <span class="eyu__link" aria-hidden="true">
        <Icon name="arrow-up-right" size={14} strokeWidth={1.8} />
      </span>
    </a>
  </main>

  <footer class="foot">
    <a class="foot__text" href="https://eyuel.me" target="_blank" rel="noreferrer">eyuel.me</a>
  </footer>
</div>

<style>
  .centered-page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    padding: var(--space-6);
    box-sizing: border-box;
  }

  .theme-bar {
    display: flex;
    justify-content: flex-end;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-md);
    background: var(--surface);
    border: 1px solid var(--line);
    color: var(--text-primary);
    cursor: pointer;
    transition: border-color var(--dur-2) var(--ease-standard), background-color var(--dur-2) var(--ease-standard);
  }

  .theme-toggle:hover {
    background: var(--surface-elevated);
    border-color: var(--line-strong);
  }

  .hero-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eyu {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    text-decoration: none;
    color: var(--text-primary);
    transition: color var(--dur-2) var(--ease-standard);
  }

  .eyu:hover .eyu__box {
    border-color: var(--accent);
  }

  .eyu__box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    padding-inline: var(--space-8);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-lg);
    background-color: var(--surface);
    background-image: var(--plus-pattern);
    background-size: var(--plus-size) var(--plus-size);
    background-repeat: repeat;
    transition: border-color var(--dur-2) var(--ease-standard);
  }

  .eyu__text {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    font-style: italic;
    letter-spacing: var(--tracking-heading);
    line-height: 1;
  }

  .eyu__link {
    display: grid;
    width: 30px;
    height: 30px;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: var(--radius-pill);
    background: var(--surface);
    color: var(--accent);
    transition: border-color var(--dur-2) var(--ease-standard), color var(--dur-2) var(--ease-standard);
  }

  .eyu:hover .eyu__link {
    border-color: var(--accent);
    color: var(--accent);
  }

  .foot {
    display: flex;
    justify-content: center;
    padding-top: var(--space-4);
  }

  .foot__text {
    margin: 0;
    color: var(--text-faint);
    font-family: var(--font-mono);
    font-size: var(--mono-xs);
    letter-spacing: var(--tracking-caption);
    text-transform: uppercase;
    text-decoration: none;
    transition: color var(--dur-2) var(--ease-standard);
  }

  .foot__text:hover {
    color: var(--accent);
  }
</style>
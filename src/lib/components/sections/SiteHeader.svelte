<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let theme = $state<'dark' | 'light'>(
    typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  );

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<header class="head shell">
  <a href="#top" class="head__brand" aria-label="EyuTaste home">
    <span class="head__glyph">E</span>
    <span class="caption head__word">EyuTaste</span>
  </a>

  <nav class="head__nav" aria-label="Primary">
    <a class="caption head__link" href="#system">System</a>
    <a class="caption head__link" href="#components">Components</a>
    <a class="caption head__link" href="https://github.com/Joelorbit/Mytheme" target="_blank" rel="noreferrer">GitHub</a>
  </nav>

  <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
    {#if theme === 'dark'}
      <Icon name="sun" size={17} strokeWidth={1.5} />
    {:else}
      <Icon name="moon-star" size={17} strokeWidth={1.5} />
    {/if}
  </button>
</header>

<style>
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding-block: var(--space-4);
    border-bottom: 1px solid var(--line-soft);
  }

  .head__brand {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    text-decoration: none;
  }

  .head__glyph {
    display: grid;
    width: 32px;
    height: 32px;
    place-items: center;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-sm);
    background: var(--surface);
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 700;
    color: var(--accent);
  }

  .head__word {
    color: var(--text-primary);
    font-weight: 600;
  }

  .head__nav {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  .head__link {
    color: var(--text-muted);
    text-decoration: none;
    transition: color var(--dur-2) var(--ease-standard);
  }

  .head__link:hover {
    color: var(--accent);
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
      border-color var(--dur-2) var(--ease-standard),
      color var(--dur-2) var(--ease-standard),
      transform var(--dur-1) var(--ease-standard);
  }

  .theme-toggle:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .theme-toggle:active {
    transform: translateY(1px);
  }

  @media (max-width: 600px) {
    .head__nav {
      display: none;
    }
  }
</style>

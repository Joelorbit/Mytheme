<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from './lib/components/primitives/Icon.svelte';

  let theme = $state<'dark' | 'light'>('dark');

  onMount(() => {
    document.documentElement.dataset.theme = 'indigo-velvet';
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme === 'light' ? 'indigo-velvet-light' : 'indigo-velvet';
  }
</script>

<svelte:head>
  <title>eyutaste</title>
  <meta name="description" content="eyutaste design system" />
</svelte:head>

<main class="page">
  <div class="card">
    <div class="card__brand">
      <span class="card__glyph">E</span>
      <h1 class="card__title">eyutaste</h1>
    </div>

    <p class="card__sub">Taste, tuned.</p>

    <div class="card__actions">
      <a
        href="https://github.com/Joelorbit/Mytheme"
        target="_blank"
        rel="noreferrer"
        class="icon-btn"
        aria-label="GitHub Repository"
        title="GitHub Repository"
      >
        <Icon name="github" size={20} strokeWidth={1.5} />
      </a>

      <button
        type="button"
        class="icon-btn"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle dark / white theme"
      >
        {#if theme === 'dark'}
          <Icon name="sun" size={20} strokeWidth={1.5} />
        {:else}
          <Icon name="moon-star" size={20} strokeWidth={1.5} />
        {/if}
      </button>
    </div>
  </div>
</main>

<style>
  .page {
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: var(--space-4);
    background-color: var(--bg);
    color: var(--text-primary);
    background-image: var(--blueprint-pattern);
    background-size: 32px 32px;
    background-repeat: repeat;
    transition: background-color var(--dur-3) var(--ease-standard), color var(--dur-3) var(--ease-standard);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-8) var(--space-10);
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2);
    text-align: center;
    max-width: 380px;
    width: 100%;
    transition: border-color var(--dur-2) var(--ease-standard), background-color var(--dur-2) var(--ease-standard);
  }

  .card:hover {
    border-color: var(--text-primary);
  }

  .card__brand {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .card__glyph {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-sm);
    background: var(--surface-elevated);
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 700;
    color: var(--text-primary);
  }

  .card__title {
    margin: 0;
    font-family: var(--font-display);
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    line-height: 1;
  }

  .card__sub {
    margin: 0;
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .card__actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-top: var(--space-2);
  }

  .icon-btn {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-md);
    background: var(--surface-elevated);
    color: var(--text-primary);
    cursor: pointer;
    text-decoration: none;
    transition:
      border-color var(--dur-2) var(--ease-standard),
      color var(--dur-2) var(--ease-standard),
      transform var(--dur-1) var(--ease-standard),
      background-color var(--dur-2) var(--ease-standard);
  }

  .icon-btn:hover {
    border-color: var(--text-primary);
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  .icon-btn:active {
    transform: translateY(0);
  }
</style>
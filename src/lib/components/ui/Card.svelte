<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title,
    description,
    actions,
    children,
    flush = false,
  }: {
    title?: string;
    description?: string;
    actions?: Snippet;
    children?: Snippet;
    flush?: boolean;
  } = $props();
</script>

<section class="card" class:card--flush={flush}>
  {#if title}
    <header class="card__head">
      <div class="card__headline">
        {#if title}<h3 class="card__title heading heading-sm">{title}</h3>{/if}
        {#if description}<p class="card__desc body-sm">{description}</p>{/if}
      </div>
      {#if actions}
        <div class="card__actions">{@render actions()}</div>
      {/if}
    </header>
  {/if}

  {#if children}
    <div class="card__body">{@render children()}</div>
  {/if}
</section>

<style>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--outline-variant);
    border-radius: var(--radius-lg);
    background: var(--surface-default);
    box-shadow: var(--shadow-1);
  }

  .card--flush {
    border: 0;
    box-shadow: none;
    background: transparent;
  }

  .card__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-5) var(--space-3);
  }

  .card__headline {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .card__title {
    margin: 0;
  }

  .card__desc {
    margin: 0;
    color: var(--text-muted);
  }

  .card__actions {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: var(--space-2);
  }

  .card__body {
    padding: var(--space-3) var(--space-5) var(--space-5);
  }
</style>
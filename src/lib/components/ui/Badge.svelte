<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'neutral' | 'accent' | 'complement' | 'danger';

  let {
    tone = 'neutral',
    children,
  }: { tone?: Tone; children: Snippet } = $props();
</script>

<span class="badge badge--{tone} caption">
  {@render children()}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    border: 1px solid transparent;
    border-radius: var(--radius-pill);
    padding: 0.18em 0.7em;
    font-size: var(--caption);
    font-weight: 500;
    letter-spacing: var(--tracking-caption);
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .badge--neutral {
    background: var(--surface-hover);
    color: var(--text-secondary);
  }

  .badge--accent {
    background: var(--accent-soft);
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
    color: var(--accent-strong);
  }

  .badge--complement {
    background: var(--complement-soft);
    border-color: color-mix(in srgb, var(--complement) 30%, transparent);
    color: var(--complement);
  }

  .badge--success {
    background: color-mix(in srgb, var(--success) 12%, transparent);
    color: var(--success);
  }
</style>
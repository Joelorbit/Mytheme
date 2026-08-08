<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'neutral' | 'subtle' | 'danger';

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

  .badge--subtle {
    background: var(--surface);
    border-color: var(--line);
    color: var(--text-muted);
  }

  .badge--danger {
    background: color-mix(in srgb, var(--danger) 12%, transparent);
    color: var(--danger);
  }
</style>

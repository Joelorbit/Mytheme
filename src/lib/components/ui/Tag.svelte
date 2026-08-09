<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let {
    label,
    tone = 'neutral',
    removable = false,
    onremove,
  }: {
    label: string;
    tone?: 'neutral' | 'accent' | 'complement' | 'danger';
    removable?: boolean;
    onremove?: () => void;
  } = $props();
</script>

<span class="tag tag--{tone}">
  <span class="body-xs tag-label">{label}</span>
  {#if removable}
    <button class="tag-remove" onclick={onremove} aria-label="Remove {label}">
      <Icon name="x" size={12} strokeWidth={2} />
    </button>
  {/if}
</span>

<style>
  .tag {
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding-inline: var(--space-2);
    border-radius: var(--radius-pill);
    gap: var(--space-1);
    white-space: nowrap;
  }

  .tag-label {
    line-height: 1;
    font-weight: 500;
  }

  .tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;
    margin-right: -4px;
    border-radius: 50%;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    transition: opacity var(--dur-1) var(--ease-standard);
  }

  .tag-remove:hover {
    opacity: 1;
  }

  .tag--neutral {
    background: var(--surface);
    color: var(--text-secondary);
  }

  .tag--accent {
    background: var(--accent-soft);
    color: var(--accent-strong);
  }

  .tag--complement {
    background: var(--complement-soft);
    color: var(--complement-strong);
  }

  .tag--danger {
    background: var(--danger-soft);
    color: var(--danger);
  }
</style>

<script lang="ts">
  let {
    value = 0,
    size = 'md',
    variant = 'accent',
    label,
    showValue = false,
  }: {
    value?: number;
    size?: 'sm' | 'md';
    variant?: 'accent' | 'success' | 'warning' | 'danger';
    label?: string;
    showValue?: boolean;
  } = $props();

  const clamped = $derived(Math.max(0, Math.min(100, value)));
</script>

<div class="progress-wrapper">
  {#if label || showValue}
    <div class="progress-header">
      {#if label}<span class="caption">{label}</span>{/if}
      {#if showValue}<span class="mono-xs">{Math.round(clamped)}%</span>{/if}
    </div>
  {/if}
  
  <div class="progress-track progress-track--{size}">
    <div 
      class="progress-fill progress-fill--{variant}"
      style="width: {clamped}%"
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    ></div>
  </div>
</div>

<style>
  .progress-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progress-header .caption { color: var(--text-primary); }
  .progress-header .mono-xs { color: var(--text-muted); }

  .progress-track {
    width: 100%;
    background: var(--surface-raised);
    border-radius: var(--radius-pill);
    overflow: hidden;
  }

  .progress-track--sm { height: 4px; }
  .progress-track--md { height: 8px; }

  .progress-fill {
    height: 100%;
    border-radius: var(--radius-pill);
    transition: width var(--dur-3) var(--ease-emphasis);
  }

  .progress-fill--accent { background: var(--accent); }
  .progress-fill--success { background: var(--success); }
  .progress-fill--warning { background: var(--warning); }
  .progress-fill--danger { background: var(--danger); }
</style>

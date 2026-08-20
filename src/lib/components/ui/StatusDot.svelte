<script lang="ts">
  let {
    status = 'neutral',
    label,
    pulse = false,
  }: {
    status?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
    label?: string;
    pulse?: boolean;
  } = $props();
</script>

<span class="status status--{status}" class:status--pulse={pulse}>
  <span class="status__dot" aria-hidden="true"></span>
  {#if label}<span class="status__label">{label}</span>{/if}
</span>

<style>
  .status { display: inline-flex; align-items: center; gap: var(--space-2); color: var(--content-secondary); }
  .status__dot { width: 0.55rem; height: 0.55rem; border-radius: 50%; background: var(--content-muted); box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent); }
  .status--info { color: var(--status-info); }
  .status--success { color: var(--status-success); }
  .status--warning { color: var(--status-warning); }
  .status--danger { color: var(--status-danger); }
  .status--pulse .status__dot { animation: status-pulse 1.8s ease-in-out infinite; }
  @keyframes status-pulse { 0%, 100% { opacity: 0.55; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.08); } }
</style>

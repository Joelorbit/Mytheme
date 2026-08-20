<script lang="ts">
  let {
    size = 'md',
    label = 'Loading',
  }: { size?: 'sm' | 'md' | 'lg'; label?: string } = $props();
</script>

<span class="spinner spinner--{size}" role="status" aria-label={label}></span>

<style>
  .spinner {
    display: inline-block;
    flex: 0 0 auto;
    border: 2px solid color-mix(in srgb, currentColor 28%, transparent);
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 700ms linear infinite;
  }
  .spinner--sm { width: 1rem; height: 1rem; }
  .spinner--md { width: 1.35rem; height: 1.35rem; }
  .spinner--lg { width: 2rem; height: 2rem; border-width: 3px; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>

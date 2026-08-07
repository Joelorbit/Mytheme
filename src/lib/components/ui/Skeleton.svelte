<script lang="ts">
  let {
    width = '100%',
    height = 'var(--body-md)',
    radius = 'var(--radius-sm)',
    className = '',
  }: {
    width?: string;
    height?: string;
    radius?: string;
    className?: string;
  } = $props();
</script>

<span
  class="skeleton {className}"
  style="width: {width}; height: {height}; border-radius: {radius};"
  aria-hidden="true"
/>

<style>
  .skeleton {
    display: block;
    background: var(--surface-hover);
    animation: pulse 1.6s var(--ease-standard) infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.5;
    }

    50% {
      opacity: 1;
    }
  }
</style>
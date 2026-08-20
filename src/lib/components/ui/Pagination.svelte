<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import IconButton from './IconButton.svelte';

  let {
    page,
    totalPages,
    onchange,
    label = 'Pagination',
  }: {
    page: number;
    totalPages: number;
    onchange?: (page: number) => void;
    label?: string;
  } = $props();

  const go = (next: number) => {
    if (next >= 1 && next <= totalPages && next !== page) onchange?.(next);
  };
</script>

{#if totalPages > 1}
  <nav class="pagination" aria-label={label}>
    <IconButton icon="chevron-left" label="Previous page" size="sm" disabled={page <= 1} onclick={() => go(page - 1)} />
    <span class="pagination__status body-sm" aria-live="polite">Page <strong>{page}</strong> of <strong>{totalPages}</strong></span>
    <IconButton icon="chevron-right" label="Next page" size="sm" disabled={page >= totalPages} onclick={() => go(page + 1)} />
  </nav>
{/if}

<style>
  .pagination { display: flex; align-items: center; gap: var(--space-3); }
  .pagination__status { color: var(--content-secondary); }
</style>

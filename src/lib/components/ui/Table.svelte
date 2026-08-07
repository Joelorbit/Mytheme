<script lang="ts">
  type Cell = string | { text: string; tone?: 'muted' };

  let {
    caption,
    headings,
    rows,
  }: {
    caption?: string;
    headings: string[];
    rows: Cell[][];
  } = $props();
</script>

<div class="table-wrap">
  {#if caption}<span class="caption table-wrap__caption">{caption}</span>{/if}
  <table class="table">
    <thead>
      <tr>
        {#each headings as h}
          <th scope="col" class="table__head caption">{h}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr class="table__row">
          {#each row as cell}
            {@const value = typeof cell === 'string' ? cell : cell.text}
            {@const isMuted = typeof cell !== 'string' && cell.tone === 'muted'}
            <td class="table__cell" class:table__cell--muted={isMuted}>
              {value}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    overflow-x: auto;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow-1);
  }

  .table-wrap__caption {
    padding: var(--space-3) var(--space-4);
    color: var(--text-muted);
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--body-sm);
  }

  .table__head {
    color: var(--text-muted);
    text-align: left;
    font-weight: 500;
    background: var(--surface-hover);
    padding: var(--space-2) var(--space-4);
  }

  .table__row {
    border-top: 1px solid var(--line-soft);
  }

  .table__row:hover {
    background: var(--surface-hover);
  }

  .table__cell {
    padding: var(--space-3) var(--space-4);
    color: var(--text-primary);
  }

  .table__cell--muted {
    color: var(--text-muted);
  }
</style>
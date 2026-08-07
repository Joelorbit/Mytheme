<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let { label = 'E+' }: { label?: string } = $props();
</script>

<span class="brandmark" aria-label={label}>
  <span class="brandmark__glyph">{label}</span>
  <span class="brandmark__plus"><Icon name="plus" size={11} strokeWidth={2.4} /></span>
</span>

<style>
  .brandmark {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .brandmark__glyph {
    font-family: var(--font-display);
    font-size: var(--heading-md);
    font-weight: 500;
    letter-spacing: var(--tracking-heading);
    line-height: 1;
  }

  .brandmark__plus {
    position: absolute;
    top: -6px;
    right: -10px;
    color: var(--accent);
  }
</style>
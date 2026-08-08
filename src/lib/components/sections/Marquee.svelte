<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
</script>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    {#each Array(2) as _}
      <span class="marquee__band">
        <span class="caption">type</span><Icon name="circle" size={9} strokeWidth={1.6} />
        <span class="caption">tone</span><Icon name="circle" size={9} strokeWidth={1.6} />
        <span class="caption">motion</span><Icon name="circle" size={9} strokeWidth={1.6} />
        <span class="caption">texture</span><Icon name="circle" size={9} strokeWidth={1.6} />
        <span class="caption">space</span><Icon name="circle" size={9} strokeWidth={1.6} />
        <span class="caption">icons</span><Icon name="circle" size={9} strokeWidth={1.6} />
      </span>
    {/each}
  </div>
</div>

<style>
  .marquee {
    overflow: hidden;
    border-block: 1px solid var(--line-soft);
    padding-block: var(--space-4);
    mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
  }

  .marquee__track {
    display: flex;
    width: max-content;
    animation: marquee 26s linear infinite;
  }

  .marquee__band {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    padding-right: var(--space-6);
  }

  .marquee__band .caption {
    color: var(--text-muted);
  }

  .marquee__band :global(svg) {
    color: var(--text-muted);
    opacity: 0.6;
  }

  @keyframes marquee {
    to {
      transform: translateX(-50%);
    }
  }
</style>

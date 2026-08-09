<script lang="ts">
  import Icon from '../primitives/Icon.svelte';

  let {
    src,
    alt = '',
    initials,
    size = 'md',
  }: {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg';
  } = $props();
</script>

<div class="avatar avatar--{size}">
  {#if src}
    <img {src} {alt} class="avatar__image" />
  {:else if initials}
    <span class="avatar__initials caption">{initials}</span>
  {:else}
    <Icon name="user" size={size === 'sm' ? 14 : size === 'md' ? 18 : 24} />
  {/if}
</div>

<style>
  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--accent-soft);
    color: var(--accent);
    border: 2px solid var(--line-soft);
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar--sm { width: 28px; height: 28px; }
  .avatar--md { width: 36px; height: 36px; }
  .avatar--lg { width: 48px; height: 48px; }

  .avatar__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar__initials {
    font-size: var(--mono-xs);
    line-height: 1;
  }

  .avatar--lg .avatar__initials {
    font-size: var(--mono-sm);
  }
</style>

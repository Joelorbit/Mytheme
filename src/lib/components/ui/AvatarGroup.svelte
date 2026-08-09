<script lang="ts">
  import Avatar from './Avatar.svelte';

  let {
    avatars,
    max = 4,
    size = 'md',
  }: {
    avatars: Array<{src?: string, alt?: string, initials?: string}>;
    max?: number;
    size?: 'sm' | 'md' | 'lg';
  } = $props();

  const visible = $derived(avatars.slice(0, max));
  const remaining = $derived(avatars.length - max);
</script>

<div class="avatar-group avatar-group--{size}">
  {#each visible as avatar}
    <div class="avatar-wrapper">
      <Avatar {...avatar} {size} />
    </div>
  {/each}
  {#if remaining > 0}
    <div class="avatar-wrapper">
      <div class="avatar-overflow avatar-overflow--{size}">
        <span class="caption">+{remaining}</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .avatar-group {
    display: inline-flex;
    align-items: center;
  }

  .avatar-wrapper {
    position: relative;
    border-radius: 50%;
    box-shadow: 0 0 0 2px var(--bg);
    margin-left: -8px;
  }
  
  .avatar-group--sm .avatar-wrapper { margin-left: -6px; }
  .avatar-group--lg .avatar-wrapper { margin-left: -12px; }

  .avatar-wrapper:first-child {
    margin-left: 0;
  }

  .avatar-overflow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--surface-raised);
    color: var(--text-primary);
    border: 2px solid var(--line-soft);
  }

  .avatar-overflow--sm { width: 28px; height: 28px; font-size: 9px; }
  .avatar-overflow--md { width: 36px; height: 36px; font-size: 11px; }
  .avatar-overflow--lg { width: 48px; height: 48px; font-size: 13px; }
</style>

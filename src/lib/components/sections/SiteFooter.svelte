<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
</script>

<footer class="foot">
  <span class="caption">© 2026 EyuTaste</span>
  <span class="caption foot__tag">own taste, own tools</span>
  <span class="foot__links">
    <a href="https://github.com/Joelorbit/Mytheme" target="_blank" rel="noreferrer" class="foot__link" aria-label="GitHub">
      <Icon name="share" size={17} strokeWidth={1.6} />
    </a>
    <a href="mailto:abitieyuel@gmail.com" class="foot__link" aria-label="Email">
      <Icon name="send" size={17} strokeWidth={1.6} />
    </a>
  </span>
</footer>

<style>
  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    margin-top: auto;
    border-top: 1px solid var(--line-soft);
    padding-top: var(--space-4);
    color: var(--text-muted);
  }

  .foot__tag {
    color: var(--text-faint);
  }

  .foot__links {
    display: flex;
    gap: var(--space-3);
  }

  .foot__link {
    display: grid;
    place-items: center;
    color: var(--text-muted);
    transition: color var(--dur-2) var(--ease-standard);
  }

  .foot__link:hover {
    color: var(--text-primary);
  }

  @media (max-width: 600px) {
    .foot__tag {
      display: none;
    }
  }
</style>

<script lang="ts">
  let {
    label,
    checked = $bindable(false),
    disabled = false,
    onchange,
  }: {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onchange?: (checked: boolean) => void;
  } = $props();

  function toggle() {
    if (disabled) return;
    checked = !checked;
    if (onchange) onchange(checked);
  }
</script>

<label class="switch-wrapper" class:switch-wrapper--disabled={disabled}>
  {#if label}
    <span class="switch-label body-sm">{label}</span>
  {/if}
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label || "Toggle"}
    {disabled}
    onclick={toggle}
    class="switch-track"
    class:switch-track--checked={checked}
  >
    <span class="switch-thumb" class:switch-thumb--checked={checked}></span>
  </button>
</label>

<style>
  .switch-wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    cursor: pointer;
  }

  .switch-wrapper--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .switch-label {
    color: var(--text-primary);
  }

  .switch-track {
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: var(--radius-pill);
    background: var(--surface-raised);
    border: none;
    padding: 0;
    cursor: inherit;
    transition: background-color 200ms var(--ease-standard);
  }

  .switch-track:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .switch-track--checked {
    background: var(--accent);
  }

  .switch-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--ink);
    transition: transform 200ms var(--ease-standard), background-color 200ms var(--ease-standard);
  }

  .switch-thumb--checked {
    transform: translateX(20px);
    background: var(--on-accent);
  }
</style>

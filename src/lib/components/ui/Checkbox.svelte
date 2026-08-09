<script lang="ts">
  let {
    label,
    checked = $bindable(false),
    disabled = false,
    id,
    onchange,
  }: {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    onchange?: (checked: boolean) => void;
  } = $props();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
    if (onchange) onchange(checked);
  }
</script>

<label class="checkbox-wrapper" class:checkbox-wrapper--disabled={disabled} for={id}>
  <div class="checkbox-box" class:checkbox-box--checked={checked}>
    <input
      type="checkbox"
      {id}
      {checked}
      {disabled}
      onchange={handleChange}
      class="checkbox-input"
    />
    <svg class="checkbox-icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 7L5.83333 9.33333L10.5 4.66667"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <span class="checkbox-label body-sm">{label}</span>
</label>

<style>
  .checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
  }

  .checkbox-wrapper--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .checkbox-box {
    position: relative;
    width: 18px;
    height: 18px;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-sm);
    background: var(--surface);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      background-color var(--dur-2) var(--ease-standard),
      border-color var(--dur-2) var(--ease-standard);
  }

  .checkbox-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: inherit;
  }

  .checkbox-input:focus-visible + .checkbox-icon {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  .checkbox-box--checked {
    background: var(--accent);
    border-color: var(--accent);
  }

  .checkbox-icon {
    width: 14px;
    height: 14px;
    color: var(--on-accent);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--dur-2) var(--ease-emphasis),
      transform var(--dur-2) var(--ease-emphasis);
  }

  .checkbox-box--checked .checkbox-icon {
    opacity: 1;
    transform: scale(1);
  }

  .checkbox-label {
    color: var(--text-primary);
  }
</style>

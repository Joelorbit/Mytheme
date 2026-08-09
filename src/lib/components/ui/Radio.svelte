<script lang="ts">
  let {
    label,
    name,
    value,
    checked = false,
    disabled = false,
    onchange,
  }: {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    onchange?: (value: string) => void;
  } = $props();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked && onchange) {
      onchange(target.value);
    }
  }
</script>

<label class="radio-wrapper" class:radio-wrapper--disabled={disabled}>
  <div class="radio-box" class:radio-box--checked={checked}>
    <input
      type="radio"
      {name}
      {value}
      {checked}
      {disabled}
      onchange={handleChange}
      class="radio-input"
    />
    <div class="radio-dot"></div>
  </div>
  <span class="radio-label body-sm">{label}</span>
</label>

<style>
  .radio-wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
  }

  .radio-wrapper--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .radio-box {
    position: relative;
    width: 18px;
    height: 18px;
    border: 1px solid var(--line-strong);
    border-radius: 50%;
    background: var(--surface);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      border-color var(--dur-2) var(--ease-standard);
  }

  .radio-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: inherit;
  }

  .radio-input:focus-visible + .radio-dot {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .radio-box--checked {
    border-color: var(--accent);
  }

  .radio-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--dur-2) var(--ease-emphasis),
      transform var(--dur-2) var(--ease-emphasis);
  }

  .radio-box--checked .radio-dot {
    opacity: 1;
    transform: scale(1);
  }

  .radio-label {
    color: var(--text-primary);
  }
</style>

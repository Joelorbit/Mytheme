<script lang="ts">
  let {
    label,
    min = 0,
    max = 100,
    step = 1,
    value = $bindable(50),
    onchange,
  }: {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onchange?: (value: number) => void;
  } = $props();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = Number(target.value);
    if (onchange) onchange(value);
  }

  const fillPercentage = $derived(((value - min) / (max - min)) * 100);
</script>

<div class="slider-wrapper">
  <div class="slider-header">
    {#if label}
      <span class="slider-label body-sm">{label}</span>
    {/if}
    <span class="slider-value mono-xs">{value}</span>
  </div>
  
  <div class="slider-track-container" style="--fill: {fillPercentage}%">
    <input
      type="range"
      {min}
      {max}
      {step}
      {value}
      oninput={handleChange}
      class="slider-input"
    />
    <div class="slider-track">
      <div class="slider-fill"></div>
    </div>
    <div class="slider-thumb"></div>
  </div>
</div>

<style>
  .slider-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    width: 100%;
  }

  .slider-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .slider-label {
    color: var(--text-primary);
  }

  .slider-value {
    color: var(--text-muted);
  }

  .slider-track-container {
    position: relative;
    height: 18px;
    display: flex;
    align-items: center;
  }

  .slider-input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
    margin: 0;
  }

  .slider-track {
    position: absolute;
    width: 100%;
    height: 4px;
    background: var(--surface-raised);
    border-radius: var(--radius-pill);
    z-index: 1;
    overflow: hidden;
  }

  .slider-fill {
    height: 100%;
    width: var(--fill);
    background: var(--accent);
  }

  .slider-thumb {
    position: absolute;
    left: calc(var(--fill) - 9px);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--accent);
    z-index: 2;
    pointer-events: none;
    box-shadow: var(--shadow-1);
    transition: box-shadow var(--dur-2) var(--ease-standard);
  }

  .slider-input:focus-visible ~ .slider-thumb {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .slider-input:active ~ .slider-thumb {
    box-shadow: var(--shadow-2);
  }
</style>

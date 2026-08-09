<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    text,
    position = 'top',
    children,
  }: {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: Snippet;
  } = $props();

  let visible = $state(false);

  function show() { visible = true; }
  function hide() { visible = false; }
</script>

<div
  class="tooltip-wrapper"
  role="presentation"
  onmouseenter={show}
  onmouseleave={hide}
  onfocusin={show}
  onfocusout={hide}
>
  {@render children()}
  
  <div
    class="tooltip tooltip--{position}"
    class:tooltip--visible={visible}
    role="tooltip"
  >
    {text}
  </div>
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-flex;
  }

  .tooltip {
    position: absolute;
    z-index: var(--z-overlay);
    padding: 4px 8px;
    background: var(--surface-elevated);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: var(--mono-xs);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-2);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity var(--dur-2) var(--ease-standard),
      transform var(--dur-2) var(--ease-standard);
  }

  .tooltip::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  /* Top */
  .tooltip--top {
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
  }
  .tooltip--top.tooltip--visible { transform: translateX(-50%) translateY(0); opacity: 1; }
  .tooltip--top::after {
    top: 100%;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-color: var(--surface-elevated) transparent transparent transparent;
  }

  /* Bottom */
  .tooltip--bottom {
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
  }
  .tooltip--bottom.tooltip--visible { transform: translateX(-50%) translateY(0); opacity: 1; }
  .tooltip--bottom::after {
    bottom: 100%;
    left: 50%;
    margin-left: -4px;
    border-width: 0 4px 4px;
    border-color: transparent transparent var(--surface-elevated) transparent;
  }

  /* Left */
  .tooltip--left {
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%) translateX(4px);
  }
  .tooltip--left.tooltip--visible { transform: translateY(-50%) translateX(0); opacity: 1; }
  .tooltip--left::after {
    top: 50%;
    left: 100%;
    margin-top: -4px;
    border-width: 4px 0 4px 4px;
    border-color: transparent transparent transparent var(--surface-elevated);
  }

  /* Right */
  .tooltip--right {
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%) translateX(-4px);
  }
  .tooltip--right.tooltip--visible { transform: translateY(-50%) translateX(0); opacity: 1; }
  .tooltip--right::after {
    top: 50%;
    right: 100%;
    margin-top: -4px;
    border-width: 4px 4px 4px 0;
    border-color: transparent var(--surface-elevated) transparent transparent;
  }
</style>

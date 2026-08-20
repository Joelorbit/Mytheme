<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import type { Snippet } from 'svelte';

  let {
    open,
    onClose,
    title,
    children,
    footer,
  }: {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: Snippet;
    footer?: Snippet;
  } = $props();

  const titleId = 'dialog-title';
  let panel: HTMLDivElement | undefined = $state();

  let prevFocus: HTMLElement | null = null;

  $effect(() => {
    if (!open) return;
    prevFocus = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && panel) trapFocus(event);
    };
    document.addEventListener('keydown', onKey);
    panel?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      requestAnimationFrame(() => prevFocus?.focus());
    };
  });

  function trapFocus(event: KeyboardEvent) {
    if (!panel) return;
    const focusables = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function close() {
    onClose();
  }
</script>

{#if open}
  <div class="dialog" role="presentation" onmousedown={close}>
    <div
      bind:this={panel}
      class="dialog__panel surface-elevated shadow-3"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      tabindex="-1"
      onmousedown={(e) => e.stopPropagation()}
    >
      <div class="dialog__head">
        <h2 class="dialog__title heading heading-sm" id={titleId}>{title}</h2>
        <button type="button" class="dialog__close" onclick={close} aria-label="Close dialog">
          <Icon name="x" size={16} strokeWidth={1.8} />
        </button>
      </div>

      <div class="dialog__body">{#if children}{@render children()}{/if}</div>

      {#if footer}
        <footer class="dialog__foot">{@render footer()}</footer>
      {/if}
    </div>
  </div>
{/if}

<style>
  .dialog {
    position: fixed;
    inset: 0;
    z-index: var(--z-overlay);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4);
    background: var(--overlay);
    animation: fade var(--dur-2) var(--ease-standard);
  }

  .dialog__panel {
    display: flex;
    width: min(560px, 100%);
    max-height: calc(100dvh - var(--space-6));
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--outline-variant);
    border-radius: var(--radius-lg);
    animation: rise var(--dur-3) var(--ease-emphasis);
  }

  .dialog__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    border-bottom: 1px solid var(--line-soft);
  }

  .dialog__title {
    margin: 0;
  }

  .dialog__close {
    display: flex;
    width: var(--control-md);
    height: var(--control-md);
    flex: 0 0 var(--control-md);
    align-items: center;
    justify-content: center;
    border: 1px solid var(--outline);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition:
      background-color var(--dur-1),
      color var(--dur-1),
      border-color var(--dur-1);
  }

  .dialog__close:hover {
    background: var(--surface-hover);
    color: var(--text-primary);
    border-color: var(--line-strong);
  }

  .dialog__body {
    padding: var(--space-5);
    overflow-y: auto;
  }

  .dialog__foot {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-5);
    border-top: 1px solid var(--line-soft);
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.99);
    }
  }
</style>
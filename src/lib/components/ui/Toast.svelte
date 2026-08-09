<script lang="ts" module>
  import { writable } from 'svelte/store';

  export type ToastType = 'info' | 'success' | 'warning' | 'error';
  
  export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration: number;
  }

  export const toasts = writable<Toast[]>([]);

  export function addToast(message: string, type: ToastType = 'info', duration: number = 4000) {
    const id = Math.random().toString(36).substring(2);
    toasts.update(all => [...all, { id, message, type, duration }]);
    
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }

  export function removeToast(id: string) {
    toasts.update(all => all.filter(t => t.id !== id));
  }
</script>

<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  
  // This component acts as the container, place it in App.svelte
</script>

<div class="toast-container" aria-live="polite">
  {#each $toasts as toast (toast.id)}
    <div class="toast toast--{toast.type}" role="alert">
      <div class="toast-content">
        <span class="body-sm">{toast.message}</span>
        <button class="toast-close" onclick={() => removeToast(toast.id)}>
          <Icon name="x" size={16} />
        </button>
      </div>
      <div class="toast-progress" style="animation-duration: {toast.duration}ms"></div>
    </div>
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    top: var(--space-4);
    right: var(--space-4);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 300px;
    max-width: calc(100vw - var(--space-8));
    pointer-events: none;
  }

  .toast {
    position: relative;
    background: var(--surface-elevated);
    box-shadow: var(--shadow-2);
    border-radius: var(--radius-md);
    border-left: 3px solid transparent;
    overflow: hidden;
    pointer-events: auto;
    animation: slideIn var(--dur-3) var(--ease-emphasis);
  }

  .toast--info { border-left-color: var(--accent); }
  .toast--success { border-left-color: var(--success); }
  .toast--warning { border-left-color: var(--warning); }
  .toast--error { border-left-color: var(--danger); }

  .toast-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--space-3);
    color: var(--text-primary);
  }

  .toast-close {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    margin-left: var(--space-2);
    display: grid;
    place-items: center;
  }

  .toast-close:hover {
    color: var(--text-primary);
  }

  .toast-progress {
    height: 3px;
    background: var(--line-strong);
    animation-name: progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .toast--info .toast-progress { background: var(--accent); }
  .toast--success .toast-progress { background: var(--success); }
  .toast--warning .toast-progress { background: var(--warning); }
  .toast--error .toast-progress { background: var(--danger); }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes progress {
    from { width: 100%; }
    to { width: 0%; }
  }
</style>

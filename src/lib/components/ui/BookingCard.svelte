<script lang="ts">
  import Icon from '../primitives/Icon.svelte';
  import { onMount } from 'svelte';

  let {
    calUrl = 'https://cal.com/eyuelgetachew/15min',
    minutes = 15,
    note = 'free intro call, no strings attached',
  }: {
    calUrl?: string;
    minutes?: number;
    note?: string;
  } = $props();

  let open = $state(false);
  let theme = $state<'light' | 'dark'>('dark');

  onMount(() => {
    theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    const observer = new MutationObserver(() => {
      theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  });

  function close() {
    open = false;
    document.body.style.overflow = '';
  }

  function openModal() {
    open = true;
    document.body.style.overflow = 'hidden';
  }

  const src = `${calUrl}?embed=true&theme=${theme}`;

  $effect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });
</script>

<button type="button" class="booking" onclick={openModal} aria-haspopup="dialog">
  <span class="booking__tag"><Icon name="calendar" size={14} strokeWidth={1.8} /> Booking</span>
  <span class="booking__plus" aria-hidden="true">+ + + + + +</span>

  <span class="booking__title display display-lg">Book<br />a call</span>

  <span class="booking__meta">
    <span class="booking__time mono-md">{minutes}<em>min</em></span>
    <span class="booking__note body-sm">{note}</span>
  </span>

  <span class="booking__foot">
    <span class="booking__alive caption"><i class="booking__dot" aria-hidden="true" />Available</span>
    <span class="booking__cta caption">
      Schedule <Icon name="arrow-up-right" size={15} strokeWidth={1.8} />
    </span>
  </span>
</button>

{#if open}
  <div class="booking-overlay" onmousedown={close}>
    <div
      class="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
      onmousedown={(e) => e.stopPropagation()}
    >
      <div class="booking-modal__head">
        <span class="caption booking-modal__tag">
          <Icon name="calendar" size={14} strokeWidth={1.8} /> {minutes} min intro call
        </span>
        <button type="button" class="booking-modal__close" onclick={close} aria-label="Close booking">
          <Icon name="x" size={15} strokeWidth={1.8} />
        </button>
      </div>
      <div class="booking-modal__body">
        <iframe title="Book a call" {src} class="booking-modal__frame" />
      </div>
    </div>
  </div>
{/if}

<style>
  .booking {
    position: relative;
    display: block;
    width: 100%;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    box-shadow: var(--shadow-1);
    padding: var(--space-5);
    transition:
      border-color var(--dur-2) var(--ease-standard),
      box-shadow var(--dur-2) var(--ease-standard),
      transform var(--dur-2) var(--ease-standard);
  }

  .booking:hover {
    border-color: var(--line);
    box-shadow: var(--shadow-2);
    transform: translateY(-2px);
  }

  .booking:active {
    transform: translateY(0);
  }

  .booking__tag {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-primary);
  }

  .booking__plus {
    position: absolute;
    top: var(--space-4);
    right: var(--space-5);
    color: var(--text-faint);
    font-family: var(--font-mono);
    font-size: var(--mono-xs);
    letter-spacing: 0.35em;
  }

  .booking__title {
    margin: var(--space-5) 0 var(--space-4);
    font-size: clamp(2.6rem, 6vw, var(--display-sm));
    line-height: 0.95;
    font-weight: 500;
  }

  .booking__meta {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-4);
  }

  .booking__time {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1;
  }

  .booking__time em {
    margin-left: 0.3rem;
    color: var(--text-muted);
    font-size: var(--body-sm);
    font-style: normal;
  }

  .booking__note {
    max-width: 220px;
    margin: 0;
    color: var(--text-muted);
    text-align: right;
  }

  .booking__foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3);
    margin-top: var(--space-5);
    padding-top: var(--space-4);
    border-top: 1px solid var(--line-soft);
  }

  .booking__alive {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-secondary);
  }

  .booking__dot {
    width: 7px;
    height: 7px;
    flex: 0 0 7px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2.4s var(--ease-standard) infinite;
  }

  .booking__cta {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-primary);
  }

  .booking__cta :global(svg) {
    color: var(--text-primary);
    transition: transform var(--dur-2) var(--ease-standard);
  }

  .booking:hover .booking__cta :global(svg) {
    transform: translate(3px, -3px);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      box-shadow: 0 0 0 0 color-mix(in srgb, currentColor 30%, transparent);
    }

    50% {
      opacity: 0.4;
      box-shadow: 0 0 0 5px transparent;
    }
  }

  .booking-overlay {
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

  .booking-modal {
    display: flex;
    width: min(620px, 100%);
    max-height: calc(100dvh - var(--space-6));
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow-3);
    animation: rise var(--dur-3) var(--ease-emphasis);
  }

  .booking-modal__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    padding: var(--space-3) var(--space-4);
    border-bottom: 1px solid var(--line-soft);
  }

  .booking-modal__tag {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-primary);
  }

  .booking-modal__close {
    display: flex;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition:
      background-color var(--dur-1),
      color var(--dur-1),
      border-color var(--dur-1);
  }

  .booking-modal__close:hover {
    background: var(--surface-hover);
    border-color: var(--line-strong);
    color: var(--text-primary);
  }

  .booking-modal__body {
    min-height: 0;
    flex: 1 1 auto;
  }

  .booking-modal__frame {
    display: block;
    width: 100%;
    height: 66dvh;
    max-height: 620px;
    border: 0;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.985);
    }
  }
</style>
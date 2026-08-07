<script lang="ts">
  import SiteHeader from './lib/components/sections/SiteHeader.svelte';
  import Hero from './lib/components/sections/Hero.svelte';
  import Marquee from './lib/components/sections/Marquee.svelte';
  import Bento from './lib/components/sections/Bento.svelte';
  import SiteFooter from './lib/components/sections/SiteFooter.svelte';
</script>

<svelte:head>
  <title>EyuTaste — Design System</title>
</svelte:head>

<SiteHeader />

<main id="top" class="page shell">
  <Hero />
  <Marquee />
  <Bento />
  <SiteFooter />
</main>

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    padding-block: var(--space-8);
  }
</style>

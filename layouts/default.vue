<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-bg text-fg">
    <!-- Faint grid background -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:48px_48px]"
    />

    <NavBar />

    <main id="main">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

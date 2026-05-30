<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-bg text-fg">
    <!-- Gradient orb 1 — top-left cyan glow -->
    <div
      aria-hidden="true"
      class="animate-orb-drift-1 pointer-events-none fixed -left-32 -top-32 -z-10 h-[600px] w-[600px] rounded-full bg-accent opacity-[0.07] blur-[120px]"
    />
    <!-- Gradient orb 2 — bottom-right warmer glow -->
    <div
      aria-hidden="true"
      class="animate-orb-drift-2 pointer-events-none fixed -bottom-40 -right-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#818cf8] opacity-[0.06] blur-[120px]"
    />
    <!-- Faint grid on top of orbs -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 -z-10 opacity-[0.20] [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:48px_48px]"
    />

    <NavBar />

    <main id="main">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

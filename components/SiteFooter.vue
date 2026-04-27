<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="container-page flex flex-col items-start justify-between gap-3 py-8 text-sm text-fg-muted sm:flex-row sm:items-center"
    >
      <p class="font-mono">
        © {{ year }} Jean Paniagua
      </p>
      <p class="font-mono text-xs">
        Built with
        <a
          href="https://nuxt.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-fg hover:text-accent"
          >Nuxt 3</a
        >
        ·
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-fg hover:text-accent"
          >Tailwind</a
        >
      </p>
    </div>
  </footer>
</template>

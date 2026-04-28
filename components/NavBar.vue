<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const open = ref(false)

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-border bg-bg/70 backdrop-blur"
  >
    <nav
      class="container-page flex h-16 items-center justify-between"
      aria-label="Primary"
    >
      <a
        href="#top"
        class="font-mono text-sm tracking-wider text-fg hover:text-accent"
      >
        jeanpaniagua<span class="text-accent">.dev</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="font-mono text-sm text-fg-muted transition-colors hover:text-accent"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="md:hidden text-fg-muted hover:text-accent"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? 'Close menu' : 'Open menu' }}</span>
        <Menu v-if="!open" :size="22" />
        <X v-else :size="22" />
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <div
      v-show="open"
      id="mobile-menu"
      class="border-t border-border bg-bg-surface md:hidden"
    >
      <ul class="container-page flex flex-col py-4">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block py-2 font-mono text-sm text-fg-muted hover:text-accent"
            @click="close"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

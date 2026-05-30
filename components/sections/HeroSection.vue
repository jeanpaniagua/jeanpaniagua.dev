<script setup lang="ts">
import { ArrowRight, MapPin, Download } from 'lucide-vue-next'

const { profile } = useResume()
</script>

<template>
  <section
    id="top"
    class="container-page relative flex min-h-[90vh] flex-col justify-center overflow-x-clip py-16 sm:py-24"
    aria-labelledby="hero-heading"
  >
    <!-- Accent spotlight behind name -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-1/2 -z-10 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-accent opacity-[0.06] blur-[100px]"
    />

    <!-- Label + availability -->
    <div class="animate-fade-up mb-6 flex flex-wrap items-center gap-3" style="animation-delay: 0ms">
      <span class="label-mono">{{ profile.title }}</span>
      <span
        v-if="profile.availability"
        class="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 font-mono text-xs text-green-400"
      >
        <span class="size-1.5 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
        {{ profile.availability }}
      </span>
    </div>

    <!-- Name — much larger -->
    <h1
      id="hero-heading"
      class="animate-fade-up text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.95] tracking-tight"
      style="animation-delay: 80ms"
    >
      <span class="block">{{ profile.name.split(' ')[0] }}</span>
      <span class="block text-fg-muted">{{ profile.name.split(' ').slice(1).join(' ') }}<span
        class="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-accent align-middle"
      /></span>
    </h1>

    <!-- Headline — simplified, no duplicate "5 years" -->
    <p
      class="animate-fade-up mt-8 max-w-xl text-base text-fg-muted sm:text-lg"
      style="animation-delay: 160ms"
    >
      {{ profile.headline }}
    </p>

    <!-- Location -->
    <p
      class="animate-fade-up mt-3 inline-flex items-center gap-2 font-mono text-sm text-fg-muted/60"
      style="animation-delay: 200ms"
    >
      <MapPin :size="13" aria-hidden="true" />
      {{ profile.location }}
    </p>

    <!-- CTA buttons -->
    <div
      class="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
      style="animation-delay: 260ms"
    >
      <a
        href="#contact"
        class="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90 active:scale-95"
      >
        Get in touch
        <ArrowRight :size="15" aria-hidden="true" />
      </a>
      <a
        v-if="profile.cvUrl"
        :href="profile.cvUrl"
        target="_blank"
        rel="noopener noreferrer"
        download
        class="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent active:scale-95"
      >
        <Download :size="13" aria-hidden="true" />
        Download CV
      </a>
      <a
        href="#experience"
        class="text-sm text-fg-muted/60 transition hover:text-fg"
      >
        View experience ↓
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, MapPin, Download, Circle } from 'lucide-vue-next'

const { profile } = useResume()
</script>

<template>
  <section
    id="top"
    class="container-page flex min-h-[80vh] flex-col justify-center py-20"
    aria-labelledby="hero-heading"
  >
    <div class="mb-4 flex items-center gap-3">
      <span class="label-mono">{{ profile.title }}</span>
      <span
        v-if="profile.availability"
        class="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 font-mono text-xs text-green-400"
      >
        <Circle :size="6" class="fill-green-400" aria-hidden="true" />
        {{ profile.availability }}
      </span>
    </div>

    <h1
      id="hero-heading"
      class="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
    >
      {{ profile.name }}
      <span
        class="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[2px] animate-pulse bg-accent align-baseline"
      />
    </h1>

    <p class="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
      {{ profile.headline }} {{ profile.yearsOfExperience }} years shipping production
      software at <span class="text-fg">Gorilla Logic</span>.
    </p>

    <p class="mt-3 inline-flex items-center gap-2 font-mono text-sm text-fg-muted">
      <MapPin :size="14" aria-hidden="true" />
      {{ profile.location }}
    </p>

    <div class="mt-10 flex flex-wrap items-center gap-3">
      <a
        href="#contact"
        class="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
      >
        Get in touch
        <ArrowRight :size="16" aria-hidden="true" />
      </a>
      <a
        v-if="profile.cvUrl"
        :href="profile.cvUrl"
        target="_blank"
        rel="noopener noreferrer"
        download
        class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
      >
        <Download :size="14" aria-hidden="true" />
        Download CV
      </a>
      <a
        href="#experience"
        class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
      >
        View experience
      </a>
    </div>
  </section>
</template>

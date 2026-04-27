<script setup lang="ts">
const { profile } = useResume()

const paragraphs = profile.bio.split('\n\n')
</script>

<template>
  <section
    id="about"
    class="container-page py-20"
    aria-labelledby="about-heading"
  >
    <SectionHeading id="about-heading" eyebrow="01 / About" title="A bit about me" />

    <div class="grid gap-8 lg:grid-cols-3">
      <div class="space-y-4 lg:col-span-2">
        <p
          v-for="(p, i) in paragraphs"
          :key="i"
          class="text-fg-muted leading-relaxed"
        >
          {{ p }}
        </p>
      </div>

      <aside class="card p-5">
        <p class="label-mono mb-2">Currently</p>
        <p class="text-fg">
          Full Stack Engineer @
          <span class="text-accent">Gorilla Logic</span>
        </p>
        <p class="mt-3 text-sm text-fg-muted">
          Building TypeScript and Python services for clients across fintech,
          healthcare, and SaaS.
        </p>
      </aside>
    </div>
  </section>
</template>

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

      <aside class="card space-y-5 p-5">
        <div>
          <p class="label-mono mb-2">Currently</p>
          <p class="text-fg">
            {{ profile.title }} @
            <span class="text-accent">Gorilla Logic</span>
          </p>
          <p class="mt-1 text-sm text-fg-muted">
            Goosehead Insurance — customer portal, carrier integrations, AI-assisted delivery.
          </p>
        </div>

        <div v-if="profile.availability">
          <p class="label-mono mb-2">Status</p>
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 font-mono text-xs text-green-400"
          >
            <span class="size-1.5 rounded-full bg-green-400" aria-hidden="true" />
            {{ profile.availability }}
          </span>
        </div>

        <div v-if="profile.cvUrl">
          <p class="label-mono mb-2">Résumé</p>
          <a
            :href="profile.cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            download
            class="text-sm text-accent underline-offset-2 hover:underline"
          >
            Download CV (PDF) →
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

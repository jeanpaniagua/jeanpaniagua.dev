<script setup lang="ts">
import { ArrowUpRight, Linkedin } from 'lucide-vue-next'

const { profile } = useResume()

const linkedin = profile.socials.find((s) => s.label === 'LinkedIn')
</script>

<template>
  <section
    id="contact"
    class="container-page py-20"
    aria-labelledby="contact-heading"
  >
    <SectionHeading
      id="contact-heading"
      eyebrow="06 / Contact"
      title="Let's talk"
    />

    <p class="max-w-xl text-fg-muted">
      Open to interesting full stack roles, freelance work, and collaboration on
      side projects. LinkedIn is the best place to reach me.
    </p>

    <div v-if="linkedin" class="mt-8">
      <a
        :href="linkedin.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
      >
        <Linkedin :size="16" aria-hidden="true" />
        Connect on LinkedIn
        <ArrowUpRight :size="16" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, Copy } from 'lucide-vue-next'
import { ref } from 'vue'

const { profile } = useResume()
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // ignore
  }
}
</script>

<template>
  <section
    id="contact"
    class="container-page py-20"
    aria-labelledby="contact-heading"
  >
    <SectionHeading
      id="contact-heading"
      eyebrow="04 / Contact"
      title="Let's talk"
    />

    <p class="max-w-xl text-fg-muted">
      Open to interesting full stack roles, freelance work, and collaboration on
      side projects. The fastest way to reach me is email.
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-3">
      <a
        :href="`mailto:${profile.email}`"
        class="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
      >
        {{ profile.email }}
      </a>

      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg-muted transition hover:border-accent hover:text-accent"
        :aria-label="copied ? 'Email copied' : 'Copy email to clipboard'"
        @click="copyEmail"
      >
        <Check v-if="copied" :size="16" aria-hidden="true" />
        <Copy v-else :size="16" aria-hidden="true" />
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>

    <div class="mt-10 flex flex-wrap gap-3">
      <SocialLink v-for="s in profile.socials" :key="s.label" :link="s" />
    </div>
  </section>
</template>

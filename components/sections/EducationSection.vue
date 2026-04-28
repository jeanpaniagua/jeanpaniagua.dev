<script setup lang="ts">
import { GraduationCap, Award } from 'lucide-vue-next'

const { education, certifications } = useResume()

function formatYearRange(start: string, end: string) {
  return `${start} — ${end}`
}

function formatMonth(value: string) {
  const [year, month] = value.split('-')
  const date = new Date(Number(year), Number(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <section
    id="education"
    class="container-page py-20"
    aria-labelledby="education-heading"
  >
    <SectionHeading
      id="education-heading"
      eyebrow="04 / Education"
      title="Background & credentials"
    />

    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 class="label-mono mb-4 inline-flex items-center gap-2">
          <GraduationCap :size="14" aria-hidden="true" />
          Education
        </h3>
        <ul class="space-y-4">
          <li
            v-for="ed in education"
            :key="ed.school + ed.start"
            class="card p-5"
          >
            <p class="text-fg">{{ ed.degree }}</p>
            <p class="mt-0.5 text-sm text-fg-muted">{{ ed.school }}</p>
            <p class="mt-3 font-mono text-xs text-fg-muted">
              {{ formatYearRange(ed.start, ed.end) }}
              <template v-if="ed.location"> · {{ ed.location }}</template>
            </p>
          </li>
        </ul>
      </div>

      <div v-if="certifications.length">
        <h3 class="label-mono mb-4 inline-flex items-center gap-2">
          <Award :size="14" aria-hidden="true" />
          Certifications
        </h3>
        <ul class="space-y-3">
          <li
            v-for="cert in certifications"
            :key="cert.credentialId || cert.name"
            class="card p-4"
          >
            <p class="text-fg">{{ cert.name }}</p>
            <p class="mt-0.5 text-sm text-fg-muted">
              {{ cert.issuer }}
              <span class="ml-1 font-mono text-xs">· {{ formatMonth(cert.issued) }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

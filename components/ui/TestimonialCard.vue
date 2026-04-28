<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import type { Testimonial } from '~/types/resume'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
  <figure class="card relative p-6 sm:p-8">
    <Quote
      :size="28"
      aria-hidden="true"
      class="absolute -top-3 left-6 rounded-full bg-bg p-1 text-accent"
    />

    <blockquote class="text-fg-muted leading-relaxed sm:text-lg">
      &ldquo;{{ testimonial.quote }}&rdquo;
    </blockquote>

    <figcaption class="mt-5 flex items-baseline gap-2">
      <span class="font-medium text-fg">{{ testimonial.author }}</span>
      <span class="text-sm text-fg-muted">
        {{ testimonial.authorRole }} @ {{ testimonial.authorCompany }}
      </span>
    </figcaption>

    <p
      v-if="testimonial.relationship"
      class="mt-1 font-mono text-xs text-fg-muted"
    >
      {{ testimonial.relationship }}
    </p>
  </figure>
</template>

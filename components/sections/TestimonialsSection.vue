<script setup lang="ts">
const { testimonials } = useResume()
</script>

<template>
  <section
    v-if="testimonials.length"
    id="testimonials"
    class="container-page py-20"
    aria-labelledby="testimonials-heading"
  >
    <SectionHeading
      id="testimonials-heading"
      eyebrow="05 / Testimonials"
      title="What people say"
    />

    <div class="grid gap-6 lg:grid-cols-2">
      <TestimonialCard
        v-for="t in testimonials"
        :key="t.author + (t.date || '')"
        :testimonial="t"
      />
    </div>
  </section>
</template>

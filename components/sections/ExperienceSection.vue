<script setup lang="ts">
const { experience } = useResume()
</script>

<template>
  <section
    id="experience"
    class="container-page py-20"
    aria-labelledby="experience-heading"
  >
    <SectionHeading
      id="experience-heading"
      eyebrow="02 / Experience"
      title="Where I've worked"
    />

    <ol class="space-y-8">
      <TimelineItem
        v-for="(item, i) in experience"
        :key="`${item.company}-${item.start}`"
        :item="item"
        :last="i === experience.length - 1"
      />
    </ol>
  </section>
</template>

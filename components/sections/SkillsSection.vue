<script setup lang="ts">
const { skills } = useResume()
</script>

<template>
  <section
    id="skills"
    class="container-page py-20"
    aria-labelledby="skills-heading"
  >
    <SectionHeading
      id="skills-heading"
      eyebrow="03 / Skills"
      title="What I work with"
    />

    <div class="grid gap-6 sm:grid-cols-2">
      <div
        v-for="group in skills"
        :key="group.title"
        class="card p-5"
      >
        <h3 class="label-mono mb-3">{{ group.title }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="item in group.items" :key="item" class="chip">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

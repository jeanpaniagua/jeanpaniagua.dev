<script setup lang="ts">
const { skills } = useResume()

// First two groups span full width on large screens (they have the most items)
const featuredGroups = skills.slice(0, 2)
const restGroups = skills.slice(2)
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

    <!-- Bento-style grid: featured groups span full row, rest in 2-col -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Featured: Frontend spans full width at sm, 2/3 at lg -->
      <div
        v-for="group in featuredGroups"
        :key="group.title"
        class="card p-5"
        :class="group.title === 'Frontend' ? 'sm:col-span-2 lg:col-span-2' : ''"
      >
        <h3 class="label-mono mb-3">{{ group.title }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="item in group.items" :key="item" class="chip">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Remaining groups in standard cards -->
      <div
        v-for="group in restGroups"
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

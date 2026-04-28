<script setup lang="ts">
import type { Project } from '~/types/resume'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="rounded-md border border-border bg-bg p-4">
    <h4 class="text-base font-medium text-fg">{{ project.name }}</h4>
    <p class="mt-1.5 text-sm leading-relaxed text-fg-muted">
      {{ project.description }}
    </p>
    <div
      v-if="project.stack && project.stack.length"
      class="mt-3 flex flex-wrap gap-1.5"
    >
      <span v-for="tech in project.stack" :key="tech" class="chip">
        {{ tech }}
      </span>
    </div>
  </article>
</template>

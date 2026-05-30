<script setup lang="ts">
import type { Experience } from '~/types/resume'

interface Props {
  item: Experience
  /** Whether this is the last item — hides the connector line */
  last?: boolean
}

const props = defineProps<Props>()

function formatRange(start: string, end: string) {
  return `${formatMonth(start)} — ${end === 'Present' ? 'Present' : formatMonth(end)}`
}

function formatMonth(value: string) {
  if (value === 'Present') return value
  const [year, month] = value.split('-')
  const date = new Date(Number(year), Number(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <li class="relative pl-8">
    <!-- Connector + dot -->
    <span
      aria-hidden="true"
      class="absolute left-2 top-3 size-2 rounded-full bg-accent ring-4 ring-bg"
    />
    <span
      v-if="!props.last"
      aria-hidden="true"
      class="absolute left-[11px] top-5 -bottom-8 w-px bg-border-strong"
    />

    <article class="card p-5">
      <header class="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 class="text-lg font-semibold text-fg">
            {{ item.role }}
            <span class="text-fg-muted">@ {{ item.company }}</span>
          </h3>
          <p v-if="item.client" class="text-sm font-medium text-accent">
            {{ item.client }}
          </p>
          <p v-if="item.location" class="text-sm text-fg-muted">
            {{ item.location }}
          </p>
        </div>
        <p class="font-mono text-xs text-fg-muted">
          {{ formatRange(item.start, item.end) }}
        </p>
      </header>

      <p v-if="item.summary" class="text-fg-muted leading-relaxed">
        {{ item.summary }}
      </p>

      <ul
        v-if="item.highlights && item.highlights.length"
        class="ml-4 mt-3 list-disc space-y-1.5 text-fg-muted"
      >
        <li v-for="h in item.highlights" :key="h">
          {{ h }}
        </li>
      </ul>

      <div
        v-if="item.stack && item.stack.length"
        class="mt-4 flex flex-wrap gap-2"
      >
        <span v-for="tech in item.stack" :key="tech" class="chip">
          {{ tech }}
        </span>
      </div>

      <!-- Nested projects -->
      <div
        v-if="item.projects && item.projects.length"
        class="mt-6 border-t border-border pt-5"
      >
        <p class="label-mono mb-3">Selected projects</p>
        <div class="grid gap-3 sm:grid-cols-2">
          <ProjectCard
            v-for="p in item.projects"
            :key="p.name"
            :project="p"
          />
        </div>
      </div>
    </article>
  </li>
</template>

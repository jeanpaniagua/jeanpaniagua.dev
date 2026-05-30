<script setup lang="ts">
interface Props {
  /** Eyebrow label, rendered in monospace */
  eyebrow: string
  /** Main heading text */
  title: string
  /** Heading id, used for aria-labelledby + anchor target */
  id: string
  /** Heading level (defaults to h2) */
  as?: 'h1' | 'h2' | 'h3'
}

withDefaults(defineProps<Props>(), { as: 'h2' })
</script>

<template>
  <div class="mb-12 space-y-2">
    <span class="label-mono">{{ eyebrow }}</span>
    <component
      :is="as"
      :id="id"
      class="text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
    >
      {{ title }}
    </component>
    <div class="flex items-center gap-3 pt-1">
      <div class="h-px w-10 bg-accent opacity-60" />
      <div class="h-px flex-1 bg-border" />
    </div>
  </div>
</template>

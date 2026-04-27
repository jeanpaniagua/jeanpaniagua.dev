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
  <div class="mb-10 flex flex-col gap-2">
    <span class="label-mono">{{ eyebrow }}</span>
    <component
      :is="as"
      :id="id"
      class="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
    >
      {{ title }}
    </component>
    <div class="h-px w-12 bg-border-strong" />
  </div>
</template>

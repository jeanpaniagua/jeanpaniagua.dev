<script setup lang="ts">
import { Github, Linkedin, Mail, Twitter } from 'lucide-vue-next'
import type { SocialLink as SocialLinkType } from '~/types/resume'

const props = defineProps<{ link: SocialLinkType }>()

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  Email: Mail,
} as const

const Icon = iconMap[props.link.label]

const isExternal = props.link.url.startsWith('http')
</script>

<template>
  <a
    :href="link.url"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center gap-2 rounded-md border border-border bg-bg-surface px-3 py-2 text-sm text-fg-muted transition hover:border-accent hover:text-accent"
  >
    <component :is="Icon" :size="16" aria-hidden="true" />
    <span>{{ link.label }}</span>
  </a>
</template>

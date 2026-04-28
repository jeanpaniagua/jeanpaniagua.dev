<script setup lang="ts">
const { profile } = useResume()

const description = profile.bio.split('\n\n')[0]

useSeoMeta({
  title: profile.title,
  description,
  ogTitle: `${profile.name} — ${profile.title}`,
  ogDescription: description,
  ogType: 'website',
  ogUrl: 'https://jeanpaniagua.dev',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.name} — ${profile.title}`,
  twitterDescription: description,
  twitterImage: '/og-image.png',
})

// JSON-LD Person schema for rich results
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.title,
        url: 'https://jeanpaniagua.dev',
        sameAs: profile.socials.map((s) => s.url),
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { profile } = useResume()

useSeoMeta({
  title: profile.headline,
  description: profile.bio.split('\n')[0],
  ogTitle: `${profile.name} — ${profile.headline}`,
  ogDescription: profile.bio.split('\n')[0],
  ogType: 'website',
  ogUrl: 'https://jeanpaniagua.dev',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.name} — ${profile.headline}`,
  twitterDescription: profile.bio.split('\n')[0],
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
        jobTitle: profile.headline,
        email: `mailto:${profile.email}`,
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

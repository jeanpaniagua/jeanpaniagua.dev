<script setup lang="ts">
const { profile } = useResume()

useSeoMeta({
  title: profile.headline,
  description: `${profile.name} — ${profile.headline} based in ${profile.location}.`,
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

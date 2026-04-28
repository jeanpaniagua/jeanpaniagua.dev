<script setup lang="ts">
const { profile } = useResume()

useSeoMeta({
  title: profile.title,
  description: `${profile.name} — ${profile.title} based in ${profile.location}.`,
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

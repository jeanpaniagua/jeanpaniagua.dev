// https://nuxt.com/docs/api/configuration/nuxt-config
import { resumeData } from './data/resume'

const SITE_URL = 'https://jeanpaniagua.dev'

export default defineNuxtConfig({
  compatibilityDate: '2025-04-27',
  devtools: { enabled: true },

  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  site: {
    url: SITE_URL,
    name: `${resumeData.profile.name} — ${resumeData.profile.headline}`,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: `%s | ${resumeData.profile.name}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})

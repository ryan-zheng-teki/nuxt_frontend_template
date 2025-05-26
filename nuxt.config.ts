// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt',
  ],

  // Ensure Font Awesome plugin runs
  plugins: ['~/plugins/fontawesome.js'],

  app: {
    head: {
      title: '柏林爱加华人基督教会 | Berlin Agape Chinese Christian Church', // Updated title
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '柏林爱加华人基督教会 (Berlin Agape Chinese Christian Church) - 欢迎访问我们的官方网站，了解聚会时间、地点和更多信息。' } // Updated description
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // Assuming favicon can remain generic or user will update it later
      ]
    }
  },

  imports: {
    dirs: ['stores']
  },

  compatibilityDate: '2025-04-12'
})

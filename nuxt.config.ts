// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  srcDir: 'src',

  nitro: {
    compressPublicAssets: true,

    prerender: {
      crawlLinks: true
    },

    static: true
  },

  ssr: true,

  css: ['~/assets/css/global.css']
})
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',

            htmlAttrs: {
                lang: 'en'
            },

            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                }
            ]
        }
    },

    compatibilityDate: '2025-07-15',

    devtools: {
        enabled: true
    },

    image: {
        format: ['webp', 'gif'],
        inject: true
    },

    ssr: true,

    css: ['~/assets/css/global.css'],

    site: {
        url: 'https://ryderbelserion.com',
        name: "Ryder's Tavern"
    },

    robots: {
        blockNonSeoBots: true
    },

    /* makes working with scss more optimized */
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern"
                },
            },
        },
    },

    modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/icon']
})
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    routeRules: {
        '/discord': { redirect: 'https://discord.gg/ktxCyUd7Ny' },
        '/kofi': { redirect: 'https://kofi.com/ryderbelserion' }
    },

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

    viewport: {
        breakpoints: {
            desktop: 1024,

            mobile: 425,

            tablet: 768
        },

        defaultBreakpoints: {
            desktop: 'desktop',
            mobile: 'mobile',
            tablet: 'tablet',
        },

        fallbackBreakpoint: 'desktop'
    },

    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',

        '@nuxt/content',
        '@nuxt/image',
        '@nuxt/icon',

        '@vueuse/nuxt',

        'nuxt-viewport'
    ]
})
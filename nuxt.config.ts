import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@vueuse/nuxt',
        'shadcn-nuxt',
    ],

    devtools: {
        enabled: true,
    },

    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: `/favicon.svg` },
            ],
            title: 'SixNineNine OA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'SixNineNine OA' },
            ],
        },
    },

    css: [
        '~/assets/css/main.css',
    ],
    compatibilityDate: '2026-01-13',

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },
})

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/css/utils.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/components.css',
    ],
    
    link: [
        { rel: 'shortcut icon', type:'image/x-icon', href:'favicon.ico' }
    ],

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],

    content: {
        highlight: {
            theme: 'material-darker'
        }
    }
})

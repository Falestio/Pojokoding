export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'pojok-koding',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Mono&family=Inter:wght@300&family=Noto+Sans&display=swap' },
      { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
  ],

  styleResources: {
      scss: ["~/assets/scss/*.scss"],
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-a11y-dark.css'
      }
    }
  },
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/style-resources",
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD5aegWP5_8ADUEQWXONvU6O6ck-XRkDks",
          authDomain: "pojokoding.firebaseapp.com",
          projectId: "pojokoding",
          storageBucket: "pojokoding.appspot.com",
          messagingSenderId: "28459147285",
          appId: "1:28459147285:web:7b6b222f75d82022246e1c",
          measurementId: "G-TFJ6XZYGRY"
        },
        services: {
          auth: true, // Automatically initialize and persist the Firebase auth state, for instance when calling auth.onAuthStateChanged(...)
          analytics: true, // Automatically initialize and persist the Firebase analytics state, for instance when calling analytics.logEvent(...)
        }
      }
    ],

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CV',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  ssr: false,
  buildDir: 'build',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/index.scss'
  ],
  styleResources: {
    scss: ['./assets/scss/utils/*.scss'],
		hoistUseStatements: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
}

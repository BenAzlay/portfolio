require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Benjamin Azoulay | Web3 Full-Stack Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "Benjamin Azoulay | Web3 Full-Stack Developer" },
      { hid: 'og-title', property: 'og:title', content: 'Benjamin Azoulay | Web3 Full-Stack Developer' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://benjaminazoulay.com",
      },
      // OG Image: Thumbnail
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/static/OG_image.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: "Benjamin Azoulay is a front-end, back-end and blockchain developer, passionnate about web3. He is experienced with Vue.js, React.js, Solidity, Truffle, Express"
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Benjamin Azoulay is a front-end, back-end and blockchain developer, passionnate about web3. He is experienced with Vue.js, React.js, Solidity, Truffle, Express"
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: "Benjamin Azoulay, Web3, Web3 developer, developer, full-stack, front-end, solidity, truffle, nodejs, engineer, Nuxt, Vue, Nuxtjs, Vuejs, freelance"
      }
    ],
    link: [
      {
        rel: "canonical",
        href: "https://benjaminazoulay.com",
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      'nuxt-windicss',
      '@nuxtjs/dotenv',
      '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa-icon', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }],
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  toast: {
    position: 'top-center',
    duration: 2000,
    closeOnSwipe: true,
    singleton: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static',

  robots: {
    UserAgent: '*',
    Disallow: '',
    sitemap: 'https://benjaminazoulay.com/sitemap.xml'
  },
  sitemap: {
    hostname: "https://benjaminazoulay.com",
    gzip: true
  }
}

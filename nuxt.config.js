export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Disco Digital',
    htmlAttrs: {
      lang: 'sv'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Har du ibland problem med Canvas, Word, Powerpoint eller Zoom? Få lösningen eller tipset du letar efter i vår resurskatalog Disco Digital som betyder att lära sig digitalt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css', './assets/css/tailwind.css'],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/preview.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'nuxt-compress',
		'@nuxtjs/sanity',
	],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  transpile: ['gsap',/@fullcalendar.*/],
  
},

sanity: {
  projectId: 'qp66vak1',
  dataset:'production',
  minimal: true,
  useCdn: false,
  },
}

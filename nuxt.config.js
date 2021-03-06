export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'PUBLIC【博客站】...',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1114196_w989p7lpsrr.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/css/swiper.css',
    // {src: '~assets/iconfont/ionicons.styles'},
    { src: '~assets/styles/reset.less', lang: 'less' },
    { src: '~assets/styles/common.less', lang: 'less' },
    { src: '~assets/animate/css/weather.css', lang: 'css' },
    'highlight.js/styles/atom-one-dark.css',
    'mavon-editor/dist/css/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper', mode: 'client' },
    // { src: '~plugins/jquery-3.5.0.min.js', mode: 'client', ssr: false },
    { src: '~plugins/message', mode: 'client', ssr: false },
    { src: '~/plugins/vue-components', mode: 'client' },
    '@/plugins/vue-map',
    '~/plugins/vue-lazyload'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  styleResources: {
    less:  [
      './assets/styles/reset.less',
      './assets/styles/theme.less'
    ]
  }
}

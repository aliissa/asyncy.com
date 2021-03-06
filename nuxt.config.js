module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Asyncy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Build smarter applications.' },
      { hid: 'og:title', name: 'og:title', content: 'Asyncy' },
      { hid: 'og:url', name: 'og:url', content: 'www.asyncy.com' },
      { hid: 'og:image', name: 'og:image', content: '/asyncy_panel.png' },
      { hid: 'og:description', name: 'og:description', content: 'Build smarter applications.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    htmlAttrs: {
      lang: 'en-US',
    },
  },
  env: {
    pageclipKey: process.env.PAGECLIP || 'kPrlBqjZJ6s7Fjj4yU1GLwTjIUwQZYwj',
    gaKey: process.env.GOOGLE_ANALYTICS || 'UA-117962309-1',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#515CF9' },
  /*
  ** Build configuration
  */
  modules: [
    ['nuxt-google-maps-module', {
      key: 'AIzaSyDWTrdPlgVur0zs-coQAdNw99FagQ-Rors',
    }],
  ],
  css: [
    '~/node_modules/asyncy-ui-components/dist/css/global.css',
    '~/assets/css/marketing.css',
  ],
  plugins: ['~/plugins/globalComponents.js'],
  generate: {
    fallback: true
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'file-loader',
          },
          {
            loader: 'svg-inline-loader',
            options: {
              removingTagAttrs: ['stroke', 'fill', 'width', 'height', 'id'],
            },
          }
        ],
      });

      const urlLoader = config.module.rules.find((loader) => loader.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
}

import path from 'path'
const routes = async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content('blog').only(['path', 'tags']).fetch()
  const tags = files
    .flatMap((file) => file.tags)
    .filter((v, i, arr) => arr.indexOf(v) <= i)
    .map((i) => `/blog/tags/${i}`)
  return files
    .map((file) =>
      file.path === '/index'
        ? '/'
        : file.path.replace(/\//g, '-').replace('-blog-', '/blog/')
    )
    .concat(tags)
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: 'google-site-verification',
        content: 'fsOFxslrl8neWDCjwLWOeY--WAzqz8ktDkvhCiJt20Y',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/sterashima78/image/upload/c_fit,h_128,w_128/v1596863610/blog/github-user-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  srcDir: 'src',
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-composition-api',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-96186429-4',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/pwa',
      {
        workbox: {
          clientsClaim: false,
        },
      },
    ],
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    dir: path.join(__dirname, 'content'),
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },
  },
  generate: {
    routes,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sterashima78.github.io',
    exclude: ['/components'],
    routes,
  },
}

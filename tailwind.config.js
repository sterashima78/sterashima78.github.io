/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
      'content/**/*.md',
      'nuxt.config.js',
    ],
    options: {
      whitelistPatternsChildren: [/^nuxt-content$/],
      safelist: [
        'text-black',
        'text-white',
        'bg-red-700',
        'bg-green-700',
        'bg-blue-700',
      ],
    },
  },
}

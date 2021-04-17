module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'import/named': 'off',
  },
}

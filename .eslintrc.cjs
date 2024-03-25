/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended', // Add TypeScript support
    '@vue/eslint-config-prettier', // Integrate Prettier
  ],
  parser: 'vue-eslint-parser', // Use the Vue parser for .vue files
  parserOptions: {
    parser: '@typescript-eslint/parser', // Use TypeScript parser for .ts/.tsx files
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'], // Allow ESLint to parse .vue files
  },
  rules: {
    "vue/multi-word-component-names": "off" // Disable the multi-word component name rule
  },
}

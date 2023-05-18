/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  indent: 0,
  extends: [
    '@antfu',
    './.eslintrc-auto-import.json',
  ],
}

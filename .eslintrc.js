const eslintSetup = require('@papillonbits/setup/eslint')

module.exports = {
  ...eslintSetup,
  rules: {
    ...eslintSetup.rules,
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-sparse-arrays': 'off',
    'no-underscore-dangle': 'off',
  },
}

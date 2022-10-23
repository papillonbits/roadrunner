const stylelintSetup = require('@papillonbits/setup/stylelint')

module.exports = {
  extends: stylelintSetup.extends,
  plugins: stylelintSetup.plugins,
  rules: {
    ...stylelintSetup.rules,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'block-no-empty': null,
    'declaration-block-no-duplicate-properties': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
}

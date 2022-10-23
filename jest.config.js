// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/setup/jest').getJestSetup

const testPathIgnorePatterns = []
const coverageDirectory = './.coverage/'
const collectCoverage = true
const collectCoverageFrom = [
  '!**/.coverage/**',
  '!**/.husky/**',
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static/**',
  '!**/node_modules/**',
  'src/**/**/*.{js,jsx}',
  '!src/**/**/*.story.js',
  '!src/**/**/*.test.js',
  '!src/rxjs/**',
]
const coverageThreshold = {
  global: {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })

const path = require('path')
const getStorybookMainSetup = require('@papillonbits/setup/storybook').getStorybookMainSetup

const storiesBasePath = path.resolve(__dirname, '../src/**/**/**/__tests__/*.int.story.@(js|mdx)')
const includeBasePath = path.resolve(__dirname, '../src/**/**/**/__tests__/*')
const modulesBasePath = path.resolve(__dirname, '../src')

module.exports = getStorybookMainSetup({ storiesBasePath, includeBasePath, modulesBasePath })

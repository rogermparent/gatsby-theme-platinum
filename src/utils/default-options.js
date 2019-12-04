const getTemplate = require(`./get-template`)
const makePagePath = require(`./make-page-path`)

const defaultOptions = {
  contentPath: 'content',
  assetPath: 'assets',

  indexName: 'index',

  templateDir: 'src/templates',
  defaultTemplate: 'default',
  directoryTemplates: {},

  getTemplate,
  makePagePath,

  mdx: true,
}

const withDefaults = (options) => {
  return {
    ...defaultOptions,
    ...options
  }
}

module.exports = {
  defaultOptions,
  withDefaults
}

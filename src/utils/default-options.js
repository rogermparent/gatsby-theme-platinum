const defaultOptions = {
  contentDirectory: "content",
  assetsDirectory: "assets",
  contentInstanceName: "content",
  assetsInstanceName: "assets",

  indexName: "index",

  templateDirectory: "src/templates",
  defaultTemplate: "default",

  mdx: true,
  sourceFilesystem: true,
  createContentPages: true,
  sharp: true,
  disablePlugins: undefined,
}

const withDefaults = options => {
  return {
    ...defaultOptions,
    ...options,
  }
}

module.exports = {
  defaultOptions,
  withDefaults,
}

const defaultOptions = {
  contentPath: "content",
  assetPath: "assets",

  indexName: "index",

  templateDirectory: "src/templates",
  defaultTemplate: "default",

  mdx: true,
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

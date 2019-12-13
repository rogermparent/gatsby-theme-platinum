const defaultOptions = {
  contentPath: "content",
  assetPath: "assets",

  indexName: "index",

  templateDir: "src/templates",
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

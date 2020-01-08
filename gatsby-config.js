const remarkSlug = require("remark-slug")
const { withDefaults } = require("./src/utils/default-options")

const getPluginName = plugin =>
  typeof plugin === "object" ? plugin.resolve : plugin

module.exports = pluginOptions => {
  const options = withDefaults(pluginOptions)

  const plugins = []

  const {
    // Plugin toggles
    mdx,
    sourceFilesystem,
    createContentPages,
    sharp,
    disablePlugins,

    // FS source options
    contentInstanceName,
    assetsInstanceName,
    contentDirectory,
    assetsDirectory,

    // transformer-mdx-content-pages options
    templateDirectory,
    defaultTemplate,
    transformerMdxContentPagesOptions,
  } = options

  if (contentDirectory) {
    plugins.push({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: contentInstanceName,
        path: contentDirectory,
      },
    })
  }

  if (assetsDirectory) {
    plugins.push({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: assetsInstanceName,
        path: assetsDirectory,
      },
    })
  }

  if (createContentPages) {
    plugins.push(`gatsby-plugin-create-content-pages`)
  }

  // Skip transformer instance if the option is set to false
  if (transformerMdxContentPagesOptions !== false) {
    if (Array.isArray(transformerMdxContentPagesOptions)) {
      // Add multiple instances if the option is an array
      for (const transformerOptions of transformerMdxContentPagesOptions) {
        plugins.push({
          resolve: `gatsby-transformer-mdx-content-pages`,
          options: {
            templateDirectory,
            defaultTemplate,
            ...transformerOptions,
          },
        })
      }
    } else if (typeof transformerMdxContentPagesOptions === "object") {
      // For an object, add an instance of the plugin with it as options
      plugins.push({
        resolve: `gatsby-transformer-mdx-content-pages`,
        options: {
          templateDirectory,
          defaultTemplate,
          ...transformerMdxContentPagesOptions,
        },
      })
    } else {
      // For all other options, add an instance with default settings
      // Generally this means undefined, but it's also a catch-all for anything else
      plugins.push({
        resolve: `gatsby-transformer-mdx-content-pages`,
        options: {
          templateDirectory,
          defaultTemplate,
        },
      })
    }
  }

  if (mdx !== false) {
    const mdxPlugin = {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
        remarkPlugins: [remarkSlug],
        plugins: [`gatsby-remark-images`],
      },
    }

    plugins.push(
      typeof mdx === "object"
        ? {
            ...mdxPlugin,
            ...mdx,
          }
        : mdxPlugin
    )
  }

  plugins.push(
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`
  )

  if (sharp) plugins.push(`gatsby-plugin-sharp`)

  const filteredPlugins = disablePlugins
    ? plugins.filter(plugin => !disablePlugins.includes(getPluginName(plugin)))
    : plugins

  return {
    siteMetadata: {
      title: "My Platinum Site",
    },
    plugins: filteredPlugins,
  }
}

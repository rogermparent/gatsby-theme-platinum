const remarkSlug = require("remark-slug")
const { withDefaults } = require("./src/utils/default-options")

module.exports = pluginOptions => {
  const options = withDefaults(pluginOptions)

  const {
    contentPath,
    assetPath,
    transfomerMdxContentPagesOptions,
    mdx,
    templateDirectory,
  } = options

  const plugins = [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: assetPath,
      },
    },
    {
      resolve: `gatsby-plugin-create-content-pages`,
    },
  ]

  if (transfomerMdxContentPagesOptions !== false) {
    if (Array.isArray(transfomerMdxContentPagesOptions)) {
      for (const transformerOptions of transfomerMdxContentPagesOptions) {
        plugins.push({
          resolve: `gatsby-transformer-mdx-content-pages`,
          options: {
            templateDirectory,
            ...transformerOptions,
          },
        })
      }
    } else {
      plugins.push({
        resolve: `gatsby-transformer-mdx-content-pages`,
        options: {
          templateDirectory,
          ...transfomerMdxContentPagesOptions,
        },
      })
    }
  }

  if (mdx === true) {
    plugins.push({
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
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `content/assets`,
            },
          },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [remarkSlug],
        plugins: [`gatsby-remark-images`],
      },
    })
  }

  plugins.push(
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`
  )

  return {
    plugins,
  }
}

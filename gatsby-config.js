const remarkSlug = require("remark-slug")
const { withDefaults } = require("./src/utils/default-options")

module.exports = pluginOptions => {
  const options = withDefaults(pluginOptions);

  const plugins = [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: options.contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: options.assetPath,
      },
    },
  ];

  if(options.mdx === true) {
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
    `gatsby-plugin-offline`,
  )

  return {
    plugins,
  }
}

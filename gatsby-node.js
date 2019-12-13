const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const crypto = require(`crypto`)
const debug = require(`debug`)('gatsby-theme-platinum:gatsby-node')
const { parentPassthrough, parentResolverPassthrough } = require('gatsby-plugin-parent-resolvers')

const { withDefaults } = require(`./src/utils/default-options`)

// Ensure that the content and asset directories exist
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const programDir = store.getState().program.directory
  const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(programDir, contentPath),
    path.join(programDir, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`interface ContentPage @nodeInterface {
      id: ID!
      pagePath: String!
      template: String
  }`)

  createTypes(
    schema.buildObjectType({
      name: `MdxContentPage`,
      fields: {
        id: { type: `ID!` },
        pagePath: {
          type: `String!`,
        },
        template: {
          type: `String`,
        },
        frontmatter: {
          type: `MdxFrontmatter!`,
          resolve: parentPassthrough()
        },
        body: {
          type: `String!`,
          resolve: parentResolverPassthrough()
        }
      },
      interfaces: [`Node`, `ContentPage`],
    })
  )
}

// Create fields for post slugs and source
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  themeOptions
) => {
  const options = withDefaults(themeOptions)
  const { contentPath, basePath, indexName, getTemplate, makePagePath } = options
  const { createNode, createParentChildLink } = actions

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  const pagePath = makePagePath({node, getNode, options})

  const fieldData = {
    pagePath,
    template: getTemplate({node, getNode, options}),
    source___NODE: node.id,
  }

  const contentPageId = createNodeId(`${node.id} >>> ContentPage`)
  await createNode({
    ...fieldData,
    // Required fields.
    id: contentPageId,
    parent: node.id,
    children: [],
    internal: {
      type: `MdxContentPage`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(fieldData))
        .digest(`hex`),
      content: JSON.stringify(fieldData),
      description: `Mdx implementation of the ContentPage interface`,
    },
  })
  createParentChildLink({ parent: node, child: getNode(contentPageId) })
}

exports.createPages = async ({ graphql, actions, reporter, store }, themeOptions) => {
  const { createPage } = actions
  const { basePath, templateDir, defaultTemplate } = withDefaults(themeOptions)

  const programDir = store.getState().program.directory
  const absoluteTemplateDir = path.join(programDir, templateDir)

  const result = await graphql(`
    {
      allContentPage {
        edges {
          node {
            id
            pagePath
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allContentPage } = result.data
  const pages = allContentPage.edges

  /*
     Try to resolve the default template for the base project.
     If that can't be done, fall back to this theme's default template.
  */
  const defaultTemplateComponent = require.resolve(path.join(
    absoluteTemplateDir, defaultTemplate
  ));

  // Create a page for each ContentPage
  pages.forEach(({ node: page }, index) => {

    const { pagePath, template } = page

    // Get the absolute path of this page's template
    const pageComponent = template ? require.resolve(path.join(
      absoluteTemplateDir, template
    )) : defaultTemplateComponent;

    createPage({
      path: pagePath,
      component: pageComponent,
      context: {
        id: page.id,
      },
    })

  })
}

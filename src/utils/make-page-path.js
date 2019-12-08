const path = require('path')
const joinPath = (arguments) => path.posix.join(
  ...(arguments.filter(Boolean))
)

const makePagePath = ({ node, getNode, options: {indexName} }) => {
  if (node.frontmatter.slug) {
    const { relativeDirectory } = getNode(node.parent)
    if (path.isAbsolute(node.frontmatter.slug)) {
      return joinPath(['/',node.frontmatter.slug])
    } else {
      return joinPath(['/', relativeDirectory, node.frontmatter.slug])
    }
  } else {
    // otherwise use the filepath function from gatsby-source-filesystem
    const { relativeDirectory, name } = getNode(node.parent)
    return joinPath([
      '/',
      relativeDirectory,
      (name === indexName) ? '/' : name
    ])
  }
}

module.exports = makePagePath

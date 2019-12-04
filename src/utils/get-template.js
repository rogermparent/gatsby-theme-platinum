const getTemplate = ({node, getNode, options}) => {
  if(node.frontmatter.template) {
    return node.frontmatter.template
  } else {
    const {relativeDirectory} = getNode(node.parent);
    const directoryTemplate = options.directoryTemplates[relativeDirectory]
    if(directoryTemplate) {
      return directoryTemplate
    } else {
      return null
    }
  }
}

module.exports = getTemplate

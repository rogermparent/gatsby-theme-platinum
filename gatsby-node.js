const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const debug = require(`debug`)("gatsby-theme-platinum:gatsby-node")

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
    debug(`Initializing ${dir}`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

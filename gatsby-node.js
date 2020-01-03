const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const debug = require(`debug`)("gatsby-theme-platinum:gatsby-node")

const { withDefaults } = require(`./src/utils/default-options`)

// Ensure that the content and asset directories exist
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const programDir = store.getState().program.directory
  const { contentDirectory, assetsDirectory } = withDefaults(themeOptions)

  const dirs = [
    path.join(programDir, contentDirectory),
    path.join(programDir, assetsDirectory),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir}`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

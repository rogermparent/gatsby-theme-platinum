import React from "react"
import { Layout } from "theme-ui"
import { Global } from "@emotion/core"
import StyleReset from "../utils/normalize-css.js"

const BaseLayout = props => {
  return (
    <Layout>
      <Global
        styles={theme => ({
          body: {
            minWidth: theme.sizes.minPageWidth
          }
        })}
      />
      <StyleReset />
      {props.children}
    </Layout>
  )
}

export default BaseLayout

import React from "react"
import { Layout } from "theme-ui"
import { Global } from "@emotion/core"
import StyleReset from "../utils/normalize-css"

const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Global
        styles={theme => ({
          body: {
            minWidth: theme.sizes.minPageWidth,
          },
        })}
      />
      <StyleReset />
      {children}
    </Layout>
  )
}

export default BaseLayout

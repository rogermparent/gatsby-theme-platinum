/** @jsx jsx */
import { jsx, Layout } from "theme-ui"
import { Global } from "@emotion/core"
import StyleReset from "../utils/normalize-css"

const BaseLayout = ({ children, styles }) => {
  return (
    <Layout
      sx={{
        "@media print": {
          a: {
            color: "inherit !important",
          },
        },
        ...styles,
      }}
    >
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

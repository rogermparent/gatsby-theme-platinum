import React from "react"
import { Layout } from "theme-ui"
import { Global } from "@emotion/core"
import StyleReset from "../utils/normalize-css"
import SEO from "../utils/seo"

const BaseLayout = ({children, description, lang, meta, keywords, title}) => {
  return (
    <Layout>
      <SEO
        description={description}
        lang={lang}
        meta={meta}
        keywords={keywords}
        title={title}
      />
      <Global
        styles={theme => ({
          body: {
            minWidth: theme.sizes.minPageWidth
          }
        })}
      />
      <StyleReset />
      {children}
    </Layout>
  )
}

export default BaseLayout

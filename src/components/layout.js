import React from "react"
import Layout from "./base-layout"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const DefaultLayout = ({children, description, lang, meta, keywords, title}) => {
  return (
    <Layout description={description} lang={lang} meta={meta} keywords={keywords} title={title}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout

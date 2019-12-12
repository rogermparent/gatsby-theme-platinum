import React from "react"
import Layout from "./base-layout"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const DefaultLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout

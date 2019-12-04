import React from "react"
import Layout from "./base-layout"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const DefaultLayout = props => {
  return (
    <Layout>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout

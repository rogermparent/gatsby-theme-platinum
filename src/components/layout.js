import React from "react"
import Layout from "./base-layout"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const defaultUnlessFalse = (defaultItem, item) =>
  item === false ? undefined : item || defaultItem

const DefaultLayout = ({ children, header, footer, ...props }) => {
  return (
    <Layout {...props}>
      {defaultUnlessFalse(<Header />, header)}
      <Main>{children}</Main>
      {defaultUnlessFalse(<Footer />, footer)}
    </Layout>
  )
}

export default DefaultLayout

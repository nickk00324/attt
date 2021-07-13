import React from "react"
import "../styles/fonts.css"
import Layout from "../components/layout"
import Landing from "../components/landing"
import Works from "../components/works"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
      <Works />
    </Layout>
  )
}

export default IndexPage

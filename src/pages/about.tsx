import React from "react"
import Layout from "../components/layout"
import AboutComponent from "../components/about"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutComponent />
    </Layout>
  )
}

export default About

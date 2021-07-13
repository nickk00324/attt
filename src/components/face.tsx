import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const FaceContainer = styled.div`
  display: block;
  margin-top: 32px;
  width: fit-content;
  h2 {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
`

const Face = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <FaceContainer>
      <a href="https://www.linkedin.com/in/nick-kochornswasdi/">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{ width: 300 }}
        />
        <h2>Nick Kochornswasdi</h2>
        <p>Los Angeles, CA</p>
      </a>
    </FaceContainer>
  )
}

export default Face

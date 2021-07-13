import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`
const FullItem = styled.div`
  grid-column: 1 / span 4;
`
const HalfItem = styled.div`
  grid-column: ${props => (props.start ? "1 / span 2" : "3 / span 2")};

  .gatsby-image-wrapper {
    height: 700px;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    grid-column: 1 / span 4;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
`

const WorkImages = ({ images }: any) => {
  // hack-y fuckin way of alternating grid items, i'll fix this later
  // TODO: fix this later
  let swtch = false

  const imgs = images ? images : []

  return (
    <Grid>
      {imgs.map((image: any, i: number) => {
        if (i % 3 === 0) {
          return (
            <FullItem>
              <Img fluid={image.childImageSharp.fluid} />
            </FullItem>
          )
        } else if (images.length - 1 === i && images.length % 2 !== 0) {
          return (
            <FullItem>
              <Img fluid={image.childImageSharp.fluid} />
            </FullItem>
          )
        } else {
          swtch = !swtch
          return (
            <HalfItem start={swtch}>
              <Img fluid={image.childImageSharp.fluid} />
            </HalfItem>
          )
        }
      })}
    </Grid>
  )
}

export default WorkImages

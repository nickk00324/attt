import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import WorkCard from "./workCard"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  justify-content: space-between;

  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const Works = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWorksJson {
        edges {
          node {
            title
            image
            slug
          }
        }
      }
    }
  `)

  const allWorks = data.allWorksJson.edges

  return (
    <>
      <h1>EPISODES!!!1</h1>
      <Grid>
        {allWorks.map((w: any) => (
          <Link fade to={`/episode/${w.node.slug}`}>
            <WorkCard title={w.node.title} image={w.node.image} />
          </Link>
        ))}
      </Grid>
    </>
  )
}

export default Works

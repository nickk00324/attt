import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "./layout"
import WorkImages from "./workImages"
import Img from "gatsby-image"
import ReactPlayer from "react-player/vimeo"

type WorkViewProps = {
  data: any
}

const Container = styled.div``
const PeopleContainer = styled.div``
const PersonContainer = styled.div`
  h2 {
    font-size: 48px;
    text-align: center;
  }
  .PhotoBio {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (max-width: 1100px) {
      display: block;
    }

    p {
      margin-top: 0;
    }
  }
  .Links {
    margin-top: 24px;
    a {
      padding-right: 10px;
    }
  }
`
const BioContainer = styled.div`
  width: 60%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-top: 42px;
  }
`
const BioImage = styled.div`
  @media only screen and (max-width: 1100px) {
    text-align: center;
    width: 100%;
  }
`
const PlayerContainer = styled.div`
  position: relative;
  padding-top: 0; /* Player ratio: 100 / (1280 / 720) */
  height: 75vh;

  @media only screen and (max-width: 1100px) {
    height: 500px;
  }

  @media only screen and (max-width: 700px) {
    height: 400px;
  }

  @media only screen and (max-width: 500px) {
    height: 300px;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Starring = styled.div`
  animation-duration: 0.1s;
  animation-name: blink;
  animation-iteration-count: infinite;
  transform-origin: center;
  height: 100px;

  h2 {
    padding: 0;
    margin: 0;
    animation-duration: 5s;
    animation-name: colorChange;
    animation-iteration-count: infinite;
  }
  @keyframes blink {
    from {
      opacity: 0;
      font-size: 14px;
    }

    to {
      opacity: 1;
      font-size: 32px;
    }
  }

  @keyframes colorChange {
    from {
      color: #fff;
    }
    to {
      color: #ff2;
    }
  }
`

const WorkView = (props: WorkViewProps) => {
  const { also_starring, starring, title, url } = props.data.worksJson

  const people = [starring, ...also_starring]
  console.log(props.data.worksJson)
  return (
    <Layout>
      <h1>{title}</h1>
      <PlayerContainer>
        <ReactPlayer url={url} controls width="100%" height="100%" />
      </PlayerContainer>
      <Starring>
        <h2>Starring:</h2>
      </Starring>
      <PeopleContainer>
        {people.map(p => (
          <Person
            name={p.name}
            website={p.website}
            ig={p.ig}
            bio={p.bio}
            photo={p.photo}
          />
        ))}
      </PeopleContainer>
    </Layout>
  )
}

export default WorkView

type PersonProps = {
  name: string
  website: string
  ig: string
  bio: string[]
  photo: any
}

const Person = (props: PersonProps) => {
  const { name, website, ig, bio, photo } = props
  return (
    <PersonContainer>
      <h2>{name}</h2>
      <div className={"PhotoBio"}>
        <BioImage>
          <Img fixed={photo.childImageSharp.fixed} />
        </BioImage>
        <Bio b={bio} />
      </div>
      <div className={"Links"}>
        <a href={website}>website</a>
        <a href={ig}>ig</a>
      </div>
    </PersonContainer>
  )
}

type BioProps = {
  b: string[]
}

const Bio = (props: BioProps) => {
  return (
    <BioContainer>
      {props.b.map(p => (
        <p>{p}</p>
      ))}
    </BioContainer>
  )
}

export const query = graphql`
  query workQ($id: String!) {
    worksJson(id: { eq: $id }) {
      title
      url
      starring {
        name
        bio
        photo {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        website
        ig
      }
      also_starring {
        name
        photo {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bio
        website
        ig
      }
    }
  }
`

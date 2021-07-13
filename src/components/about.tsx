import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player/vimeo"

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

const About = () => {
  return (
    <PlayerContainer>
      <ReactPlayer
        url="https://vimeo.com/573771362/d74a9505c2"
        controls
        width="100%"
        height="100%"
      />
    </PlayerContainer>
  )
}

export default About

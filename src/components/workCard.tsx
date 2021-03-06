import React from "react"
import styled from "styled-components"

type WorkCardProps = {
  title: string
  image: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  .img-holder {
    overflow: hidden;
  }
`

const WorkCard = (props: WorkCardProps) => {
  return (
    <Card>
      <div className="img-holder">
        <img src={props.image} alt={props.title} />
      </div>
      <h2>{props.title}</h2>
    </Card>
  )
}

export default WorkCard

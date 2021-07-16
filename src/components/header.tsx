import React from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import Popup from "reactjs-popup"
import { useSpring, animated } from "react-spring"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Logo = styled.div`
  color: ${props => props.theme.blue};
  font-size: 72px;
  padding-right: 20px;
  text-transform: uppercase;
  font-weight: 700;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: red;

  @media only screen and (max-width: 1000px) {
    font-size: 36px;
  }
`

const StyledPopup = styled(Popup)``

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media only screen and (max-width: 1000px) {
    width: 230px;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    a {
      padding: 5px 0;
    }
  }
  /* @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: none;
  } */
`

const BurgerButton = styled.nav`
  display: none;

  /* @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: initial;
    img {
      width: 30px;
    }
  } */
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.pink};
  a {
    margin: 5px 0;
    color: antiquewhite;

    &:focus {
      outline: none;
    }

    &:hover {
      color: antiquewhite;
    }
  }
`

const Header = () => {
  const stylesT = useSpring({
    loop: true,
    config: { mass: 0.1, tension: 1000, friction: 18 },
    to: [
      { opacity: 1, color: "#44aaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })
  const stylesR = useSpring({
    loop: true,
    config: { mass: 0.5, tension: 1000, friction: 18 },
    to: [
      { opacity: 1, color: "#44aaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })
  const stylesL = useSpring({
    loop: true,
    config: { mass: 0.1, tension: 2, friction: 1 },
    to: [
      { opacity: 1, color: "#44aaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })
  return (
    <Container>
      <Link fade to="/">
        <Logo>
          a<animated.span style={stylesR}>r</animated.span>
          <animated.span style={stylesT}>t</animated.span> ta
          <animated.span style={stylesL}>l</animated.span>k talk talk
        </Logo>
      </Link>
      <Nav>
        <Link fade to="/episodes">
          episodes
        </Link>
        <Link fade to="/about">
          about
        </Link>
      </Nav>
    </Container>
  )
}

export default Header

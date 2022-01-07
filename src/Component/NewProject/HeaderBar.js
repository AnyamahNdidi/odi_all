import React from 'react'
import styled from "styled-components"
import logo from "./logo.png"

function HeaderBar() {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav>Home

            <span>Home</span>
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  )
}

export default HeaderBar

const Nav = styled.div`
display: flex;
align-items: center;
height: 50px;
width: 100px;
border-radius:5px ;
background-color:rgba(255);

.MuisvgIcon-root{
  margin-right:10px;
  font-size: 25px;
}
span{
  text-transform: uppercase;
  font-weight: bold;
  position: relative;

  :after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: white;
    transform: scale(0);
    transform-origin: center;
    transition: all 350ms;
    opacity: 0;

    /* opacity: 0;
    transition: all 400ms;
    transform: scale(0); */
  }
}

:hover{
  cursor: pointer;
  span{
    :after{
      opacity: 1;
      transform: scale(1);
    }

  }
}
`
const Navigation = styled.div``

const Logo = styled.img`
width: 180px;
height: 80px;
object-fit: contain;
margin: 0 30px;
`
const Container = styled.div`
width: 100%;
height:100px;
background-color: #02152b;
color: white;
`
const Wrapper = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
`

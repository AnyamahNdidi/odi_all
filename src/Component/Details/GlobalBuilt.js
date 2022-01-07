import React from 'react'
import styled from 'styled-components'
import img from "../../assets/images/group-icon.png"

function GlobalBuilt({ bg, bg1, img, cl, cl1, bc, bc1, text }) {
  return (
    <Container bg={bg} bg1={bg1} cl={cl} cl1={cl1} bc={bc} bc1={bc1}>
      <Wrapper>
        <img src={img} />
      </Wrapper>
    </Container>
  )
}

export default GlobalBuilt

const Container = styled.div`
background-color: ${({ bg }) => (bg ? "white" : "black")};
color: ${({ cl }) => (cl ? "black" : "white")};
width: 80px;
height: 80px;
border-radius: 50%;
border: 4px solid;
border-color:  ${({ bc }) => (bc ? "grey" : "white")};
transition: all 350ms;

:hover{
 cursor: pointer;
 background-color: ${({ bg1 }) => (bg1 ? "black" : "white")};
 color: ${({ cl1 }) => (cl1 ? "white" : "black")};
 border-color:  ${({ bc1 }) => (bc1 ? "white" : "grey")};

}
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

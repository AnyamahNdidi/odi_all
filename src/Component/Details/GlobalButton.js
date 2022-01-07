import React from 'react'
import styled from 'styled-components'
import icon from "../../assets/images/group-icon.png"

function GlobalButton({ bg, bg1, clr, icon, title, bg2 }) {
  return (
    <Container bg={bg} bg1={bg1} bg2={bg2}>
      <Wrapper clr={clr}>
        <Icon src={icon} />
        <span>{title}</span>
      </Wrapper>
    </Container>
  )
}

export default GlobalButton

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;
const Container = styled.div`
  width: 200px;
  height: 70px;
  background-color: ${({ bg }) => (bg ? "white" : "rgba(0,0,0,0.6)")};
  border: 3px solid;
  border-color: ${({ bg1 }) => (bg1 ? "rgba(0,0,0,0.6)" : "white")};
  margin: 0 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    background-color: ${({ bg2 }) =>
    bg2 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)"};
  }
`;
const Wrapper = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ clr }) => (clr ? "white" : "black")};
  span {
    font-size: 20px;
    text-transform: uppercase;
    
`;

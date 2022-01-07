import React from 'react'
import Styled from "styled-components"
import data from "./data.json"

function MainView() {
  return (
    <Container>
      <span>Movie Collections</span>
      <Wrapper>
        {
          data.map((props) => (
            <Main>
              <div>{props.title
              }</div>
              <Bg />
              <Image src={props.cardImg} />
            </Main>
          ))
        }
      </Wrapper>
    </Container>
  )
}

export default MainView
const Bg = Styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
/* background-color: rgba(0, 0, 0, 0.4); */
opacity: 0;
transition: all 350ms;
border-radius: 5px;
z-index: -100;

:hover{
    display: block;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    border-radius: 5px;
    z-index: 0;
}
`
const Image = Styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
`
const Main = Styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid gray;
    border-radius: 5px;
    transition: all 500ms;
    transform: scale(1);
    position: relative;

    div{
        position: absolute;
        bottom: 10px;
        left: 0;
        font-size: 20px;
        font-weight: 500;
        opacity: 0;
        z-index: 10;
        padding-left: 10px;
        font-weight: 500;
        font-size: 20px;
    }

    :hover{
        cursor: pointer;
        border: 2px solid #fff;
        transform: scale(1.01);

        div{
            opacity: 1;
        }
    }
`
const Container = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        font-weight: bold;
        font-family: poppins;
        font-size: 30px;
        letter-spacing: 1px;
        padding-left: 50px;
        padding-top: 80px;
        display: flex;
        justify-content: center;
    }
`
const Wrapper = Styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;
    padding: 20px;
`

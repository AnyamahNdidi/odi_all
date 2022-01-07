import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/images/viewers-marvel.png"
import img2 from "../../assets/images/viewers-disney.png"
import img3 from "../../assets/images/viewers-national.png"
import img4 from "../../assets/images/viewers-pixar.png"
import img5 from "../../assets/images/viewers-starwars.png"
import vid1 from "../../assets/videos/marvel.mp4"
import vid2 from "../../assets/videos/disney.mp4"
import vid3 from "../../assets/videos/national-geographic.mp4"
import vid4 from "../../assets/videos/pixar.mp4"
import vid5 from "../../assets/videos/star-wars.mp4"

function Products() {
  return (
    <Container>
      <Wrapper>
        <img src={img1} />
        <video
          src={vid1}
          type="mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={img2} />
        <video
          src={vid2}
          type="mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={img3} />
        <video
          src={vid3}
          type="mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={img4} />
        <video
          src={vid4}
          type="mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={img5} />
        <video
          src={vid5}
          type="mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrapper>

    </Container>
  )
}

export default Products

const Container = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(5, minmax(0, 1fr));
grid-gap: 20px;
padding: 30px;

`
const Wrapper = styled.div`
width: 100%;
height: 200px;
border-radius: 5px;
border: 4px solid gray;
color:black;
transition: all 350ms;
transform: scale(1);
position: relative;


img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}

video{
  position: absolute;
  left: 0;
  z-index:-100;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  border-radius: 3px;
}

:hover{
  transform: scale(1.03);
  border: 4px solid gray;
  cursor: pointer;

  video{
    opacity: 1;
  }
}


`
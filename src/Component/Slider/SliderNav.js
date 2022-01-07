import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/slider-scale.jpg"
import img2 from "../../assets/images/slider-badag.jpg"
import img3 from "../../assets/images/slider-badging.jpg"
import img4 from "../../assets/images/slider-scales.jpg"



function SliderNav() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Container>
      <Wrapper>
        <Mylider {...settings}>
          <Mystyled>
            <SliderImg src={img1} />
          </Mystyled>
          <Mystyled>
            <SliderImg src={img2} />
          </Mystyled>
          <Mystyled>
            <SliderImg src={img3} />
          </Mystyled>
          <Mystyled>
            <SliderImg src={img4} />
          </Mystyled>
        </Mylider>

      </Wrapper>
    </Container>
  )
}

export default SliderNav

const Mylider = styled(Slider)`

button{
  z-index: 1;
}

/* .slick-list{
  overflow: visible;
} */
`

const SliderImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
`

const Mystyled = styled.div`
width:100%;
height: 300px;
background-color: white;
border-radius:10px;
color: black;
border: 2px solid grey;

:hover{
  border: 3px solid grey;
}
`


const Container = styled.div`
width: 100%;
height: 400px;
padding-top: 80px;
`
const Wrapper = styled.div`
width: 80%;
margin:  0 auto;
`

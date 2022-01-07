
import react from "react"
import styled from "styled-components"
import img from "../../assets/images/home-background.png"
import MainView from "../MainView/MainView"
import Products from "../Products/Products"
import SliderNav from "../Slider/SliderNav"


function TodayMovie() {
  return (
    <Container>
      <SliderNav />
      <Products />
      <MainView />
    </Container>
  )
}

export default TodayMovie

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
position:relative;
overflow-x: hidden;

&:before{
content: "";
position: absolute;
top: 0;
bottom:0;
right: 0;
left: 0;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
z-index:-1
}
`
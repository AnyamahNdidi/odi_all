import React from 'react'
import styled from "styled-components"
import img from "../../../assets/images/home-icon.svg"
import img1 from "../../../assets/images/movie-icon.svg"
import img2 from "../../../assets/images/series-icon.svg"
import img3 from "../../../assets/images/watchlist-icon.svg"
import img4 from "../../../assets/images/search-icon.svg"
import img5 from "../../../assets/images/original-icon.svg"
import avatar from "../../../assets/images/avatar.jpg"

import imgLogo from "../../../assets/images/logo.svg"

function HeaderNav() {
  return (
    <Container>
      <Logo src={imgLogo} />

      <Wrapper>


        <a>
          <img src={img} />
          <span>
            Home
          </span>
        </a>
        <a>
          <img src={img1} />
          <span>
            Movie
          </span>
        </a>
        <a>
          <img src={img2} />
          <span>
            series
          </span>
        </a>

        <a>
          <img src={img5} />
          <span>
            favourite
          </span>
        </a>
        <a>
          <img src={img3} />
          <span>
            watch list
          </span>
        </a>
        <a>
          <img src={img4} />
          <span>
            search
          </span>
        </a>
      </Wrapper>

      <Avatar>
        <AvatarPix src={avatar} />
        <span>
          edwin
        </span>
      </Avatar>
    </Container>
  )
}

export default HeaderNav


const Avatar = styled.div`

width: 70px;
height: 100%;
display: flex;
align-self: center;
display: flex;
margin-right: 70px;
flex-direction: column;

span{
  opacity: 0;
}
`
const AvatarPix = styled.img`
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
`

const Logo = styled.img`
      width: 200px;
      height: 50px;
      object-fit: contain;

      `
const Container = styled.div`
      width: 100%;
      display: flex;
      height: 70px;
      background-color: rgba(17,17,17);
      `
const Wrapper = styled.div`
      display: flex;
      align-items: center;
      height: 100%;
      width: 96%;
      padding: 0 20px;
      a{
        display: flex;
      align-items: center;
      margin: 0 20px;

      img{
        width: 25px;
      height: 25px;
      margin-right: 10px;
  }
  span{
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    position: relative;
    :after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: white;
      left: 0;
      bottom: -2px;
      transform: scale(1);
      transform-origin: center left;
      transition:all 350ms;

      opacity: 0;
    
    
    }
  }
    :hover{
      cursor: pointer;
  
     span{
      opacity: 1;
       :after{
         opacity: 1;
         transform: scale(1.05);
       }
     }
    }
  }

 `

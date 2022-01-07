import React from 'react'
import styled from 'styled-components'
import logo from "./simple.png";
import social from "../../assets/images/simple.png";

function Footer() {
  return (

    <Container>
      <Subscribe>
        <span>Subscribe to Our News Letter</span>
        <SubscribeInfo>
          <input placeholder="Email" />
          <button>Submit</button>
        </SubscribeInfo>
      </Subscribe>
      <Wrapper>
        <FooterHolder>
          <Footer1>
            <Title>Video</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Movies</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Cinemas</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
          <Footer1>
            <Title>Box Office</Title>
            <Others>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
              <List>Movies</List>
            </Others>
          </Footer1>
        </FooterHolder>
      </Wrapper>
      <WrapperBottom>
        <Logo src={logo} />
        <Right>Platform developed by CodeLab Students</Right>
        <Social src={social} />
      </WrapperBottom>
    </Container>
  )
}

export default Footer

const Logo = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
`;
const Right = styled.div``;
const Social = styled.img`
  object-fit: contain;
  height: 100%;
  margin-right: 20px;
`;
const Icons = styled.div``;

const SubscribeInfo = styled.div`
  width: 700px;
  background-color: whitesmoke;
  display: flex;
  height: 50px;
  border-radius: 30px;

  input {
    width: 100%;
    border: 0;
    outline: none;
    border-radius: 30px;
    background-color: whitesmoke;
    padding-left: 20px;
    font-size: 20px;
  }
  button {
    border: 0;
    outline: none;
    background-color: whitesmoke;
    border-radius: 30px;
    font-size: 20px;
    margin-right: 20px;
    font-family: Poppins;
  }
`;
const Subscribe = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

const List = styled.div`
  padding-left: 20px;
  margin: 10px;
  color: lightgray;
  font-size: 17px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`;
const Others = styled.div``;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Footer1 = styled.div`
  width: 300px;
`;
const FooterHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const WrapperBottom = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  background-color: #00002f;
  color: whitesmoke;
  width: 100%;
  height: 50vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  font-family: Poppins;
`;



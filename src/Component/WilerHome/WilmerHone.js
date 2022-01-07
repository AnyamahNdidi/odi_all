import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

function WilmerHone() {
 const [data, setData] =  useState([])

 const fectchData = async ()=>{
   await fetch('https://fakestoreapi.com/products')
   .then((res)=> res.json() ).then(result=> setData(result))
   console.log(data)
 }

 React.useEffect(()=>{
  fectchData()
 },[])

  return (
    <Contianer>
      <Wrapper>
        {
          data?.map((props)=>(
            
            <Card>
              {
                props.category==="men's clothing" ?
                <Con clr="blue">
                </Con> : props.category === "women's clothing" ? <Con clr="pink">
                </Con> : <Con clr="green">
                </Con> 
              }
           
          
            <ComImg src={props.image}>
  
            </ComImg>
            <Con1>
              <Title>
             {props.title}
              </Title>
              <Price>
              {props.price}
              </Price>
              <ConButto>
                <Button to={`/wilde/${props.id}`}>
                  view Deatails
                </Button>
  
              </ConButto>
  
            </Con1>
          </Card>
          ))
        }
      
         
            
    
      </Wrapper>
    </Contianer>
  )
}

export default WilmerHone

const Button = styled(Link)`
height: 50px;
background-color:blue;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
border-radius:10px;
transition: all 350ms;
transform: scale(1.0);
color: white;

:hover{
  transform: scale(0.9);
  cursor: pointer;
}
`

const  ConButto = styled.div`
height: 120px;
display: flex;
justify-content: center;
align-items: center;


`

const Price = styled.div``

const Title = styled.div``

const Con1 = styled.div`
padding: 10px;
height: 200px;
padding-top: 60px;
`

const ComImg = styled.img`
height: 120px;
width: 120px;
border-radius: 120px;
background-color:white;
position: absolute;
top: 90px;
right: 100px;

`

const Con = styled.div`
height: 170px;
background-color:${({clr})=>clr};
border-radius: 10px 10px 0px 0px;

`

const Card = styled.div`
color: white;
background-color:grey;
height: 400px;
width: 300px;
border-radius: 10px;
position: relative;
margin: 10px;
`
const Contianer = styled.div``
const Wrapper = styled.div`
display: flex;
height: 100%;
min-height: 100vh;
background-color: black;
color: :white;
justify-content: center;
padding-top:50px;
flex-wrap:wrap;


`

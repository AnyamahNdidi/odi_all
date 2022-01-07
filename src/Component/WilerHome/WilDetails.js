import React,{useEffect, useState} from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
function WilDetails() {
  const {id} = useParams()
  const [ data, setData] = useState('')

  const fectchData = async (id)=>{
    await fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json() ).then(result=> setData(result))
    console.log(data[3])
  }
 
  React.useEffect(()=>{
   fectchData(id)
  },[])
  return (
    <Contianer>
      <Wrapper>
        <Card>
          <Conimg>

          </Conimg>
          <Title>
            Title
          </Title>
          <Decs>
           Description
          </Decs>
          
     <Price>
       price
     </Price>
        </Card>
      </Wrapper>
    </Contianer>
  )
}

export default WilDetails

const Price = styled.div`
border: 1px solid grey;
height:50px;
display: flex;
justify-content: center;
align-items: center;
`

const Decs = styled.div`
height: 300px;

`

const Title = styled.div`
border: 1px solid grey;
height:50px;
display: flex;
justify-content: center;
align-items: center;
border-top: none;
`

const Conimg = styled.div`
height: 200px;
border: 1px solid grey;
`

const Card = styled.div`
background-color: white;
height: 500px;
width: 400px;
display: flex;
flex-direction: column;
box-shadow: 1px 2px 5px 1px #888888;
`

const Contianer = styled.div``
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
min-height: 100vh;



`
import React,{useEffect, useState} from 'react'
import styled from "styled-components"

function FetchAppi() {

 const [name, setname] = useState("")
  
  const url =   `https://api.github.com/users/${name}`
  const [user, setUser] = useState([])

  const getApi = async ()=>{
    await fetch(url).then(
      res => res.json()
    ).then(
      data => setUser(data)
    )
  
  }

  useEffect(()=>{
    getApi()
    console.log(user)
  },[name])



  return (
    <Container>
    <Wrapper>
      <InpuctCo
      value={name}
      onChange ={(e)=>{
        setname(e.target.value)
      }}
      />
     <span>{user.login}</span>
    <Dimg  src={user.avatar_url}/>
    </Wrapper>

    </Container>
   
  )
}

export default FetchAppi


const InpuctCo = styled.input`

`
const Dimg = styled.img`
width: 300px;
height: 200px;
object-fit: cover;
`


const Container = styled.div``

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
flex-direction: column;
`



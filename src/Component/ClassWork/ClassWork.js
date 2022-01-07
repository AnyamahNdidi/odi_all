import react from "react"
import styled from "styled-components"

function ClassWork() {
  return (
    <AllContainer>
      <Container>
        <InputWrapper>

          gchjkl;
        </InputWrapper>
        <Wrapper>
          <WrapperCon>
            <Con1>
              <Condel>x
              </Condel>

            </Con1>
            <Con2>

            </Con2>
            <Con3>
              gfghjkl;''
            </Con3>

          </WrapperCon>


        </Wrapper>
      </Container>
    </AllContainer>
  )

}

export default ClassWork

const Condel = styled.div`
 background-color:red;
 padding:0px;
 height:20px;
 display:flex;
 justify-content:center;
 width:20px;
 border-radius:30px;
 margin:5px;
 color:black;
 font-size:12px;
 
 

`



const Con1 = styled.div`
height:100px;
border:1px solid white;
border-left:0px;
border-right:0px;
display:flex;
justify-content:flex-end;
`

const Con2 = styled.div`
height:200px;
background-color:red;

`

const Con3 = styled.div`
height:90px;
background-color:white;
border-radius:90px;
width:90px;
position:absolute;
top:60px;
left:55px;
color:black;
display:flex;
justify-content:center;


`

const WrapperCon = styled.div`

border:1px solid white;
height:300px;
width:200px;
display:flex;
flex-direction:column;
position:relative;
margin:5px;



&:hover{
  transform:scale(1.03)
}
`

const InputWrapper = styled.div`


`

const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width:100vw;


`


const AllContainer = styled.div``

const Container = styled.div`

width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;

`



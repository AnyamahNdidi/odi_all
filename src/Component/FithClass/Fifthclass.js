
import react, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import img from "./img/0.png"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import trophy from "./img/trophy.png"





function Fifthclass() {

  const myRef = useRef()
  const [me, setme] = useState(0)
  const [computer, setComputer] = useState(0)

  const myRand = (max, min) => {
    const rands = Math.floor(Math.random() * (max - min + 1)) + min
    setComputer(rands)
  }

  useEffect(() => {
    myRef.current = computer
  }, [computer])

  useEffect(() => {
    setInterval(() => {
      myRand(0, 5)
    }, 3000)
  }, [])




  return (
    <>
      <MainContiner>
        <ContianerTitle>
          CODELab
        </ContianerTitle>
        <ContainerText>
          this is a guessing game
        </ContainerText>
        <ContainerBox>
          <Box1>
            <Num1>
              <img src={img}
                onClick={() => {
                  setme(0)
                  console.log(me)
                }}

              />
            </Num1>
            <Num2>
              <img src={img1}

                onClick={() => {
                  setme(1)
                  console.log(me)
                }}

              />
            </Num2>
            <Num3>
              <img src={img2}

                onClick={() => {
                  setme(2)
                  console.log(me)
                }}


              />
            </Num3>
            <Num4>
              <img src={img3}
                onClick={() => {
                  setme(3)
                  console.log(me)
                }}

              />
            </Num4>
            <Num5>
              <img src={img4}
                onClick={() => {
                  setme(4)
                  console.log(me)
                }}

              />
            </Num5>
            <Num6>
              <img src={img5}
                onClick={() => {
                  setme(5)
                  console.log(me)
                }}

              />
            </Num6>


          </Box1>
          <Box2>
            {
              myRef.current === 0 ? <img src={img} /> :
                myRef.current === 1 ? <img src={img1} /> :
                  myRef.current === 2 ? <img src={img2} /> :
                    myRef.current === 3 ? <img src={img3} /> :
                      myRef.current === 4 ? <img src={img4} /> :
                        myRef.current === 5 ? <img src={img5} /> : null
            }
          </Box2>

        </ContainerBox>
        <ContainerResult>
          RESULT
        </ContainerResult>
        <ContainerCom>
          MY output{me} || computer output{computer}
        </ContainerCom>

        <ComWon>
          {
            me === computer ? <div>
              you've won
            </div> :
              me !== computer ? <div>
                hmm... you are wrong
              </div> :
                me === null ? <div>Null</div> : null

          }
        </ComWon>
        <ComTrophy>
          {
            me === computer ? <div>
              <img src={trophy} />
            </div> : null
          }
        </ComTrophy>


      </MainContiner>

    </>
  )

}

export default Fifthclass;

const ComTrophy = styled.div`

`

const ComWon = styled.div`


`


const Num1 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}





`
const Num2 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}
`
const Num3 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}
`
const Num4 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}
`
const Num5 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}
`
const Num6 = styled.div`
width:50px;
height:50px;
border-radius:50px;
background-color:black;
color:white;
display:flex;
justify-content:center;
align-item:center;
cursor:pointer;


&:hover{
  width:60px;
  height:60px;
}
`


const MainContiner = styled.div`
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
margin-top:50px;

`
const ContianerTitle = styled.div`
font-size:50px

`
const ContainerText = styled.div`
margin:40px;
`
const ContainerBox = styled.div`
display:flex;
flex-wrap:wrap;
width:900px;
justify-content:space-between;
margin:40px;
`
const ContainerResult = styled.div`
margin:20px;
font-size:20px;

`
const ContainerCom = styled.div``
const Box1 = styled.div`

width:400px;
height:300px;
background-color:white;
border-radius:5px;
display:flex;
justify-content:space-around;
align-items:center;



`
const Box2 = styled.div`

width:400px;
height:300px;
background-color:white;
border-radius:5px;
color:black;
display:flex;
justify-content:center;
align-items:center



`
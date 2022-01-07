import react, { useEffect, useState } from "react"
import style from "styled-components"
import img from "../ThirdClass/img/1.png"
import img2 from "../ThirdClass/img/2.png"
import img3 from '../ThirdClass/img/3.jpg'
import img4 from "../ThirdClass/img/4.png"
import { Button, Input } from "antd"


function FouthClass() {
  const [showImage, setShowImage] = useState("")
  const [text, setText] = useState("")
  const [myData, setMyData] = useState([
    {
      id: 1,
      title: "I love simple codes",
      icon: "NO",
      time: "3sec ago",
      image: img,
    },
    {
      id: 2,
      title: "I love soft codes",
      icon: "JS",
      time: "6sec ago",
      image: img2,
    },
    {
      id: 3,
      title: "I love my job",
      icon: "RC",
      time: "90sec ago",
      image: img3,
    },
    {
      id: 4,
      title: "I love hard codes",
      icon: "MN",
      time: "65sec ago",
      image: img4,
    },

  ])

  const deleteFun = (id) => {
    const removeItem = myData.filter((el) => el.id !== id)
    setMyData(removeItem)
  }

  const ImageUplaod = (e) => {
    const file = e.target.files[0]
    const readImage = URL.createObjectURL(file)
    console.log(readImage)
    setShowImage(readImage)
  }
  const AddItems = () => {
    const items = {
      title: text,
      id: myData.length + 1,
      icon: text.charAt(0),
      image: showImage,
      time: Date.now()
    }

    setMyData([...myData, items])
    setText("");
  }

  useEffect(() => {
    const saveitems = JSON.parse(localStorage.getItem("store"))
    setMyData(saveitems)

  }, [])

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(myData))
  }, [myData])

  return (
    <>
      <InputConatiner>
        <InputLayout>
          <Input24>
            <Input type="file" onChange={ImageUplaod} />
            <Input type="text" value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <Button
              onClick={
                () => {
                  console.log(text)
                  AddItems()
                }
              }
            >
              Add
            </Button>
          </Input24>
          <InputImage>
            <img src={showImage} />
          </InputImage>

        </InputLayout>


      </InputConatiner>
      <MainContainer>
        {
          myData.map((prop) => (
            <Container>
              <ContainerHolder>
                <ContainerIcon>
                  {prop.icon}
                </ContainerIcon>
                <ContainerDel
                  onClick={() => {
                    deleteFun(prop.id)
                  }}
                >
                  <p>Delete</p>
                </ContainerDel>
              </ContainerHolder>


              <ContainerTitle>
                {prop.title}
              </ContainerTitle>
              <ContainerTime>
                {prop.time}
              </ContainerTime>
              <ContainerImage>
                <img src={prop.image} />
              </ContainerImage>
            </Container>
          ))
        }
      </MainContainer>
    </>

  )
}

export default FouthClass;


const ContainerDel = style.div`
color:red;
margin-top:-5px;
cursor:pointer;
`

const ContainerHolder = style.div`

width: 93%;
height: 100%;
display: flex;
justify-content: space-between;
margin-right: 10px;

`

const InputImage = style.div`
width: 200px;
height: 150px;
background-color: white;
border-radius: 5px;
margin-left: 20px;


img{
  width: 200px;
  height: 150px;
  borderRadius: "5px",
  objectFit: "cover",
}
`
const Input24 = style.div`
display: flex;
flex-direction: column;

Input{
  width: 300px;
  height: 30px;
  margin: 5px;
};

Button{
  width: 100px;
  height: 30px;
  margin: auto;
  background-color: red;
  color: white;
  outline: none;
  border: 0;
}

`

const InputConatiner = style.div`

width: 100%;
height: 250px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

const InputLayout = style.div`
display: flex;
justify-content: space-between;

`

const ContainerIcons = style.div`

margin-top: 10px;
width: 192px;
display: flex;
justify-content: space-between;


p{
  color:red
}


`

const ContainerIcon = style.div`
width: 20px;
height: 20px;
border-radius: 10px;
background-color: lightblue;
margin: 10px 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 10px;
font-weight: bold;
text-transform: uppercase;

`
const ContainerTitle = style.div`
font-size: 12px;
font-weight: bold;
margin-bottom: 40px;
`
const ContainerTime = style.div`
font-size: 8px;
font-weight: bold;
margin-bottom: 5px;
`
const ContainerImage = style.div`

width: 190px;
height: 110px;
object-fit: cover;
border-radius: 10px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;


img{
  width: 190px;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
  background-color: white;

}
`

const Container = style.div`
margin: 10px;
width: 200px;
height: 250px;
border-radius: 5px;
background-color: rgb(39, 39, 39);
display: flex;
flex-direction: column;
padding-left: 10px;
border: 1px solid rgb(151, 150, 150);

`

const MainContainer = style.div`
width:100%;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top: 60px;
color: white;
`


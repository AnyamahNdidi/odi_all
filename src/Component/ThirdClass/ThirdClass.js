import react, { useState, useEffect, useRef } from "react"
import { Button, Input } from "antd"
import pix from "./img/1.png"
import pix2 from "./img/2.png"
import pix3 from "./img/4.png"
import pix4 from "./img/3.jpg"




function ThirdClass() {
  const [counter, setCounter] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setsec] = useState(0)

  const [myRand, setMyRand] = useState(0);
  const [text, setText] = useState("")
  const [loadImage, setLoadImg] = useState([pix, pix2, pix3, pix4])

  const [word, setWord] = useState([
    "Colin said that, his name means People's victory",
    "Miracle's best quote is, Life is Beautiful",
    "Mr Joe best Quote is, I am a success",
    "Mr Confident is saying that, He is Coding!",
  ]);

  const myRef = useRef();
  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();

  const color = ["gray", "lightgray", "lightgray", "lightgray"];
  const color1 = ["lightgray", "gray", "lightgray", "lightgray"];
  const color2 = ["lightgray", "lightgray", "gray", "lightgray"];
  const color3 = ["lightgray", "lightgray", "lightgray", "gray"];

  const Add = () => {
    setCounter(counter + 1)
  }
  const Substract = () => {
    // setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(word.length)
    } else {
      setCounter(counter - 1)
    }
  }

  const AddWord = () => {
    setWord([...word, text])
    setText("")
  }



  useEffect(() => {
    setInterval(() => {
      console.log("i love coding with vsCode")
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setsec((el) => el + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1)
    }, 2000)
  }, [])
  useEffect(() => {
    myRef.current.style.backgroundColor = color[counter % color.length]
    myRef.current.style.transition = "all 350ms";
  }, [counter])

  useEffect(() => {
    myRef1.current.style.backgroundColor = color1[counter % color1.length]
    myRef1.current.style.transition = "all 350ms";
  }, [counter])

  useEffect(() => {
    myRef2.current.style.backgroundColor = color2[counter % color2.length];
    myRef2.current.style.backgroundColor = "all 350ms";
  }, [counter])

  useEffect(() => {
    myRef3.current.style.backgroundColor = color3[counter % color3.length];
    myRef3.current.style.backgroundColor = "all 350ms"
  }, [counter])

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>
        {min}mins : {sec % 60}sec
      </div>
      <div>{counter % word.length}</div>
      <div>
        {word[2]}
      </div>
      <div
        style={{
          color: "red",
        }}
      >
        {Math.floor(Math.random() * word.length)}
      </div>
      <div>
        <Input
          placeholder="please enter your quote"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}

        />
        <Button
          onClick={AddWord}
        >
          Add
        </Button>


      </div>
      <div style={{
        marginTop: "60px"
      }}>
        <img src={loadImage[counter % loadImage.length]} style={{
          height: "200px"
        }} />

      </div>

      <div
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <Button
          onClick={Substract}
        >-</Button>
        <div
          style={{
            width: "60%",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

          }}
        >
          <div>{word[counter % word.length]}</div>
          <div
            style={{
              display: "flex",
              marginTop: "30px"
            }}
          >
            <div
              ref={myRef}
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "5px",
                margin: "0 5px",

              }}
            />
            <div
              ref={myRef1}

              style={{
                height: "10px",
                width: "10px",
                borderRadius: "5px",
                margin: "0 5px",

              }}
            />
            <div
              ref={myRef2}

              style={{
                height: "10px",
                width: "10px",
                borderRadius: "5px",
                margin: "0 5px",

              }}
            />
            <div
              ref={myRef3}
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "5px",
                margin: "0 5px",

              }}
            />
          </div>
        </div>

        <Button

          onClick={Add}
        >+</Button>
      </div>
      <Button
        onClick={
          () => {
            setMyRand(Math.floor(Math.random() * word.length))
          }
        }
      >
        Change Word
      </Button>


    </div>
  )

}

export default ThirdClass



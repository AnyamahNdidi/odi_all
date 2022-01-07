import react, { useState, useEffect, } from "react"
import { Button, Input } from "antd"






function SecondClass() {
  const [counter, setCounter] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setsec] = useState(0)

  const [myRand, setMyRand] = useState(0);
  const [text, setText] = useState("")

  const [word, setWord] = useState([
    "Colin said that, his name means People's victory",
    "Miracle's best quote is, Life is Beautiful",
    "Mr Joe best Quote is, I am a success",
    "Mr Confident is saying that, He is Coding!",
  ]);

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
        <div>{word[counter % word.length]}</div>
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

export default SecondClass



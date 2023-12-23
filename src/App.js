import Button from "@mui/material/Button"
import "./App.css"
import db from "./firebase"
import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"

const Dot = ({ color }) => {
  const style = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  }

  return <span style={style}></span>
}

function App() {
  const [colors, setColors] = useState([])
  useEffect(() => {
    onSnapshot(collection(db, "colors"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data))
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">NEW</Button>
        <ul></ul>
      </header>
    </div>
  )
}

export default App

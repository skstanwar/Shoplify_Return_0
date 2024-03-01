import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" 
      onChange={(e) => {
        setPassword(e.target.value);
    }}/>
      <label for="lname">First name:</label>
      <input type="text" id="fname" name="lname" 
      onChange={(e) => {
        setPassword(e.target.value);
    }}/>
      <button
      onClick={async () => {
        const res = await axios.post(`localhost:3000/login`, {
            username: email,
            password: password
        }, {
            headers: {
                "Content-type": "application/json"
            }
        });
        // navigate("/courses")
    }}
      >button</button>
    </>
  )
}

export default App

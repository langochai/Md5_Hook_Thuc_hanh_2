import { useState,useEffect } from 'react'
import './App.css'

function App() {
let [selected,setSelected] = useState("0");
let [valueSelected,setValueSelected] = useState("");
const handleChange = (e) =>{
    setSelected(e.target.value)
}
useEffect(()=>{
    switch (selected){
        case "0":
            setValueSelected("Java")
            break
        case "1":
            setValueSelected("C++")
            break
        case "2":
            setValueSelected("Python")
            break
    }
})
  return (
    <>
        <label htmlFor="select">Please choose: </label>
        <select name="select" onChange={(e)=>handleChange(e)}>
            <option value="0">Java</option>
            <option value="1">C++</option>
            <option value="2">Python</option>
        </select>
        <p>You have selected {valueSelected}</p>
    </>
  )
}

export default App

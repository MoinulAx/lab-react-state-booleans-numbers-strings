import React, { useState } from "react";
import "./App.css";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
function App () {
  const [score,setScore] = useState(0)
  const [counter,setCounter]= useState(1)

    if(score >= 100){
      setCounter(1)
      setScore(0)
      alert("u win")
    }


    return (
      <main>
        <p>Current Score : {score}</p>


        <ButtonOne score = {score}  setScore = {setScore}counter = {counter} setCounter = {setCounter}/>

        <br></br>

        <ButtonTwo score = {score} setScore = {setScore}counter = {counter} setCounter = {setCounter} />
        
      </main>
    );
}

//create a website that has two buttons 
// the second state can only be used once the first button has been pressed to then change the state of the second one 

export default App;

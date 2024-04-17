import React from "react";
import { useState } from "react";





function buttonTwo({counter, setCounter,score,setScore}){

    

    function handleCounter(){
        if(score >= 10){
            setCounter(counter + 1)
            setScore(0)
            
          }else{
            alert("You can't afford that")
          }

    }

    return(
        <button onClick={()=> handleCounter()}>Pay 10 points to change from +{counter} to +{counter + 1} </button>
    )

}



export default buttonTwo;
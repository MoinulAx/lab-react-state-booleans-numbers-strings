import React, { useState } from "react";


function buttonOne({score,setScore,counter,setCounter}){
    function handleClick(){
        setScore(score + counter)
    
    }



    return(
        <button onClick={() => handleClick()}>+{counter}</button>
    )


}



export default buttonOne;
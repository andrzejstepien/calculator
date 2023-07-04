import { useState } from "react";
import NumPad from "./NumPad";
import Operators from "./Operators";

export default function Calculator(props){
    const [input,setInput] = useState(0)
    const [memory,setMemory] = useState(0)
    const [operation,setOperation] = useState("")


    function handleInput(content){    
        if(typeof content === "number" ){
            setInput(prev=>{return prev.toString()+content.toString()})
        }else{ //EXTRA CONDITION FOR DECIMAL, REGEX TO MAKE IT MAKE SENSE
            setMemory(input)
            setInput(0)
            setOperation(content)
        }
    }


    return(
        <>
        <div id="display">
            <p id="memory">{memory}</p>
            <p id="input">{input}</p>
            <p id="operation">{operation}</p>
        </div>
        <NumPad handleInput={handleInput}/>
        <Operators handleInput={handleInput}/>
        </>
    )
}
import { useState } from "react";
import NumPad from "./NumPad";
import Operators from "./Operators";

export default function Calculator(props){
    const [main,setMain] = useState(0)
    const [memory,setMemory] = useState(0)
    const [operation,setOperation] = useState("")

    
        
    

    function handleInput(content){  

        const operations = {
            "+":(a,b)=>{return a+b},
            "-":(a,b)=>{return a-b},
            "X":(a,b)=>{return a*b},
            "/":(a,b)=>{return a/b},
        }
   
        if(typeof content === "number" ){
            setMain(prev=>{return prev.toString()+content.toString()})
        }else{ //EXTRA CONDITION FOR DECIMAL, REGEX TO MAKE IT MAKE SENSE
            setMemory(prev=>{operations[content](prev,main)})
            setMain(0)
            setOperation(content)
        }
    }


    return(
        <>
        <div id="display">
            <p id="memory">{memory}</p>
            <p id="main">{main}</p>
            <p id="operation">{operation}</p>
        </div>
        <NumPad handlemain={handlemain}/>
        <Operators handlemain={handlemain}/>
        </>
    )
}
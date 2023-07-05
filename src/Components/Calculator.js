import { useState } from "react";
import NumPad from "./NumPad";
import Operators from "./Operators";

export default function Calculator(props){
    const [main,setMain] = useState(0)
    const [memory,setMemory] = useState(0)
    const [operation,setOperation] = useState("")

    const map = {
        conc:(numberString)=>{setMain(prev=>prev+numberString)},

        zero:()=>this.conc("0"),
        one:()=>this.conc("1"),
        two:()=>this.conc("2"),
        three:()=>this.conc("3"),
        four:()=>this.conc("4"),
        five:()=>this.conc("5"),
        six:()=>this.conc("6"),
        seven:()=>this.conc("7"),
        eight:()=>this.conc("8"),
        nine:()=>this.conc("9"),
        decimal:()=>{
            if(!/./g.test(main)){
                this.conc(".")
            }  
        },

        add:()=>this.rcvOperator("add"),
        subtract:()=>this.rcvOperator("subtract"),
        multiply:()=>this.rcvOperator("multiply"),
        divide:()=>this.rcvOperator("divide"),

        rcvOperator:(operator)=>{
            setMemory(main)
            setMain("0")
            setOperation(operator)
        },

        operations:{
        add:(a,b)=>{return a+b},
        subtract:(a,b)=>{return a-b},
        multiply:(a,b)=>{return a*b},
        divide:(a,b)=>{return a/b},
        },   
        equals:()=>{setMain(prev=>{this.operations[operation](prev,memory)})}
    } 

    function handleInput(content){  
        map[content]()
    }


    return(
        <>
        <div id="display">
            <p id="memory">{memory}</p>
            <p id="main">{main}</p>
            <p id="operation">{operation}</p>
        </div>
        <NumPad handlemain={handleInput}/>
        <Operators handlemain={handleInput}/>
        </>
    )
}
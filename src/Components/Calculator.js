import { useState } from "react";
import KeyPad from "./KeyPad";

export default function Calculator(props){
    const [main,setMain] = useState(0)
    const [memory,setMemory] = useState(0)
    const [operation,setOperation] = useState("")

    const map = {
        conc:(numberString)=>{setMain(prev=>prev+numberString)},

        zero:function(){this.conc("0")},
        one:function(){this.conc("1")},
        two:function(){this.conc("2")},
        three:function(){this.conc("3")},
        four:function(){this.conc("4")},
        five:function(){this.conc("5")},
        six:function(){this.conc("6")},
        seven:function(){this.conc("7")},
        eight:function(){this.conc("8")},
        nine:function(){this.conc("9")},
        decimal:function(){
            if(!/./g.test(main)){
                this.conc(".")
            }  
        },

        add:function(){this.rcvOperator("add")},
        subtract:function(){this.rcvOperator("subtract")},
        multiply:function(){this.rcvOperator("multiply")},
        divide:function(){this.rcvOperator("divide")},

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
        console.log("handling input!")
        map[content]()
    }


    return(
        <>
        <div id="display">
            <p id="memory">{memory}</p>
            <p id="main">{main}</p>
            <p id="operation">{operation}</p>
        </div>
        <KeyPad handleInput={handleInput}/>

        </>
    )
}
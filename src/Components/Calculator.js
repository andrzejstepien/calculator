import { useState } from "react";
import KeyPad from "./KeyPad";

export default function Calculator(props){
    const [main,setMain] = useState("0")
    const [mainInitialised, setMainInitialised] = useState(true)
    const [memory,setMemory] = useState("")
    const [operation,setOperation] = useState("")

    const map = {
        conc:(numberString)=>{
            if(main[0]==="0"){
                setMain(prev=>prev.slice(1)+numberString)
            }else{
                setMain(prev=>prev+numberString)
            }
            setMainInitialised(false)
        },

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
            if(!/\./g.test(main)){
                this.conc(".")
            }  
        },

        add:function(){this.rcvOperator("add")},
        subtract:function(){this.rcvOperator("subtract")},
        multiply:function(){this.rcvOperator("multiply")},
        divide:function(){this.rcvOperator("divide")},

        rcvOperator:function(operator){           
            const operatorAlreadyEntered = operation===""?false:true
            console.log(operatorAlreadyEntered)
            setOperation(operator)  
            if(!mainInitialised && !operatorAlreadyEntered){
                setMemory(prev=>{return this.calculate(main,prev)})
            }else{
                setMemory(main)
            }
                setMainInitialised(true)
                setMain("0")          
        },

        operations:{
        add:(a,b)=>{return a+b},
        subtract:(a,b)=>{return b-a},
        multiply:(a,b)=>{return a*b},
        divide:(a,b)=>{return b/a},
        }, 
        
        clear:()=>{
            setMain("0")
            setMainInitialised(true)
            setMemory("")
            setOperation("")
        },
        equals:function(){        
            setMain(prev=>{
                return this.calculate(prev,memory)
            })
            setMemory("")
            setOperation("")
        },
        calculate:function(a,b){
            return this.operations[operation](parseFloat(a),parseFloat(b)).toString()
        }
    } 

    function handleInput(content){  
        map[content]()
    }


    return(
        <>
        <div id="display-container">
            <p id="memory">{memory}</p>
            <p id="display">{main}</p>
            <p id="operation">{operation}</p>
            <p>{JSON.stringify(mainInitialised)}</p>
        </div>
        <KeyPad handleInput={handleInput}/>

        </>
    )
}
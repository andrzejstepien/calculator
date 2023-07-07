import Button from "./Button"
export default function NumPad(props){
    const numberMap = {
        
        seven:7,
        eight:8,
        nine:9,
        four:4,
        five:5,
        six:6,
        one:1,
        two:2,
        three:3,
        zero:0,
        decimal:".",
        equals:"="
        
    }

    const operatorMap = {
        
        subtract:"-",
        multiply:"x",
        divide:"/",
        add:"+",
        
    }

    const functionMap = {
        on:"on",
        off:"off",
        clear:"C",
        
    }

    function buildButtons(map){
        return Object.keys(map).map((e,i)=>{
            return(
                <Button 
                    id={e} 
                    content={map[e]} 
                    key={e+i} 
                    handleInput={()=>props.handleInput(e)}>
                    {map[e]}
                </Button>
            )
        })
    }


    return(
        <>
        <div className="num-pad">
        {buildButtons(numberMap)}
        </div>
        <div className="operator-pad">
        {buildButtons(operatorMap)}
        </div>
        <div className="function-pad">
        {buildButtons(functionMap)}
        </div>
        </>
    )
}
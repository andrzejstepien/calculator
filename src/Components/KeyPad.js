import Button from "./Button"
export default function NumPad(props){
    const numberMap = {
        zero:0,
        one:1,
        two:2,
        three:3,
        four:4,
        five:5,
        six:6,
        seven:7,
        eight:8,
        nine:9,
        decimal:"."
    }

    const operatorMap = {
        add:"+",
        subtract:"-",
        multiply:"x",
        divide:"/",
        
    }



    const numPad = Object.keys(numberMap).map((e,i)=>{
        return(
            <Button 
                id={e} 
                content={numberMap[e]} 
                key={"numPad"+e} 
                handleInput={()=>props.handleInput(e)}>
                {numberMap[e]}
            </Button>
        )
    })

    return(
        <div className="numPad">
        {numPad}
        </div>
    )
}
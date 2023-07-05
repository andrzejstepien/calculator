import Button from "./Button"
export default function NumPad(props){
    const map = {
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
        add:"+",
        subtract:"-",
        multiply:"x",
        divide:"/",
        decimal:"."
    }
    const numPad = Object.keys(map).map((e,i)=>{
        return(
            <Button 
                id={e} 
                content={map[e]} 
                key={"numPad"+e} 
                handleInput={props.handleInput}>
                {i}
            </Button>
        )
    })

    return(
        <div className="numPad">
        {numPad}
        </div>
    )
}
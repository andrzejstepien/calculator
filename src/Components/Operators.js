import Button from "./Button";
export default function Operators(props){
    const map = {
        add:"+",
        subtract:"-",
        multiply:"x",
        divide:"/",
        decimal:"."
    }

    const operators = Object.keys(map).map(e=>{
        return <Button  
                id={e} 
                content={map[e]}
                handleInput={props.handleInput} 
                key={e}>
                    {map[e]}
                </Button>
    })

    return ( <div className="operations-pad">{operators}</div>)
    
}
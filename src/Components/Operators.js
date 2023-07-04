import Button from "./Button";
export default function Operators(props){
    const map = {
        add:{symbol:"+",callback:""},
        subtract:{symbol:"-",callback:""},
        multiply:{symbol:"x",callback:""},
        divide:{symbol:"/",callback:""},
        decimal:{symbol:".",callback:""}
    }

    const operators = Object.keys(map).map(e=>{
        return <Button  id={e} callback={map[e].callback} key={e}>
                    {map[e].symbol}
                </Button>
    })

    return ( <>{operators}</>)
    
}
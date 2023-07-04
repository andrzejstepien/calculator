import Button from "./Button"
export default function NumPad(props){
    const map = {
        zero:{number:0,callback:""},
        one:{number:1,callback:""},
        two:{number:2,callback:""},
        three:{number:3,callback:""},
        four:{number:4,callback:""},
        five:{number:5,callback:""},
        six:{number:6,callback:""},
        seven:{number:7,callback:""},
        eight:{number:8,callback:""},
        nine:{number:9,callback:""}
    }
    const numPad = Object.keys(map).map((e,i)=>{
        return(
            <Button id={e} number={map[e].number} key={"numPad"+e} callback={map[e]}>
                {i}
            </Button>
        )
    })

    return(
        <>
        {numPad}
        </>
    )
}
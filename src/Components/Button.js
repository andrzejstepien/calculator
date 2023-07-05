export default function Button(props){

    return(
        <button className="button" id={props.id} onClick={props.handleInput}>{props.children}</button>
    )
}
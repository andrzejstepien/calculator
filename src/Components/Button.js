export default function Button(props){

    return(
        <button onClick={props.handleInput}>{props.children}</button>
    )
}
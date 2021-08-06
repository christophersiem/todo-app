import {useState} from "react";
import * as events from "events";

export default function Input(props) {
    const [input, setInput] = useState("")
    const inputHandler = (events) => setInput(events.target.value)



    return (
        <section>

                <input onChange={inputHandler} type={"text"} name={"description"}/>
                <button id = {input} onClick={props.addToDo}>Add Todo</button>

        </section>
    )
}
import "./ToDo.css"

export default function ToDo(props){
    return <section className="toDo">
        <p className="description">{props.todo.description}</p>
        <button id={props.todo.id} onClick={props.advanceToDoItem} className="move-button">Advance</button>
    </section>
}
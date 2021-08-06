import './ToDo.css'

export default function ToDo(props) {
  return (
    <section className="toDo">
      <p className="description">{props.todo.description}</p>
      {props.todo.status.includes('DONE') && (
        <button
          id={props.todo.id}
          onClick={props.deleteTodoItem}
          className="delete-button"
        >
          Delete
        </button>
      )}
      {!props.todo.status.includes('DONE') && (
        <button
          id={props.todo.id}
          onClick={props.advanceToDoItem}
          className="move-button"
        >
          Advance
        </button>
      )}
    </section>
  )
}

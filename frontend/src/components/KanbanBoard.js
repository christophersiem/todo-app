import './KanbanBoard.css'
import ToDo from "./ToDo";

export default function KanbanBoard(props) {
    return (
        <section className="kanban-board">
            <div className={'kanban-board__open'}>
                {
                    props.todoItems.filter(todo =>
                        todo.status.includes("OPEN")).map(todo =>
                        <ToDo advanceToDoItem={props.advanceToDoItem} key={todo.id} todo={todo}/>)
                }
            </div>
            <div className={'kanban-board__in-progress'}></div>
            <div className={'kanban-board__done'}></div>
        </section>
    )
}

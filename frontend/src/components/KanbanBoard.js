import './KanbanBoard.css'
import ToDo from './ToDo'

export default function KanbanBoard(props) {
  return (
    <section className="kanban-board">
      <div className={'kanban-board__open'}>
        <h1>Open</h1>
        {props.todoItems
          .filter(todo => todo.status.includes('OPEN'))
          .map(todo => (
            <ToDo
              advanceToDoItem={props.advanceToDoItem}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
      <div className={'kanban-board__in-progress'}>
        <h1>In progress</h1>

        {props.todoItems
          .filter(todo => todo.status.includes('IN_PROGRESS'))
          .map(todo => (
            <ToDo
              advanceToDoItem={props.advanceToDoItem}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
      <div className={'kanban-board__done'}>
        <h1>Done</h1>

        {props.todoItems
          .filter(todo => todo.status.includes('DONE'))
          .map(todo => (
            <ToDo
              deleteTodoItem={props.deleteTodoItem}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
    </section>
  )
}

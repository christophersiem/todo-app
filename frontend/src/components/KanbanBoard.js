import './KanbanBoard.css'

export default function KanbanBoard(props) {
  return (
    <section className="kanban-board">
      <div className={'kanban-board__open'}></div>
      <div className={'kanban-board__in-progress'}></div>
      <div className={'kanban-board__done'}></div>
    </section>
  )
}

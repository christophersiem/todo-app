import './App.css'
import KanbanBoard from './components/KanbanBoard'
import { useEffect, useState } from 'react'
import {
  getAllTodos,
  putTodo,
  postNewTodo,
  deleteTodo,
} from './components/service/RequestService'
import Input from './components/Input'

function App() {
  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    getAllTodos()
      .then(response => setTodoItems(response.data))
      .catch(error => console.error(error))
  }, [])

  const advanceToDoItem = event => {
    putTodo(event).then(() =>
      getAllTodos()
        .then(response => setTodoItems(response.data))
        .catch(error => console.error(error))
        .catch(error => console.error(error))
    )
  }

  const addToDo = event => {
    postNewTodo(event.target.id).then(() =>
      getAllTodos()
        .then(response => setTodoItems(response.data))
        .catch(error => console.error(error))
        .catch(error => console.error(error))
    )
  }

  const deleteTodoItem = event =>
    deleteTodo(event).then(() =>
      getAllTodos()
        .then(response => setTodoItems(response.data))
        .catch(error => console.error(error))
        .catch(error => console.error(error))
    )

  return (
    <div>
      <KanbanBoard
        deleteTodoItem={deleteTodoItem}
        advanceToDoItem={advanceToDoItem}
        todoItems={todoItems}
      />
      <Input addToDo={addToDo} />
    </div>
  )
}

export default App

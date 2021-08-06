import './App.css'
import KanbanBoard from './components/KanbanBoard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todoItems, setTodoItems] = useState([])

  // Todo: new get request after advancing todo

  useEffect(() => {
    axios
      .get('/api/todo')
      .then(response => setTodoItems(response.data))
      .catch(error => console.error(error))
  }, [])

  const advanceToDoItem = (events) => axios.put("/api/todo/" + events.target.id).catch(error =>console.error(error))

  return (
    <div>
      <KanbanBoard advanceToDoItem={advanceToDoItem} todoItems={todoItems} />
    </div>
  )
}

export default App
import './App.css'
import KanbanBoard from './components/KanbanBoard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todoItems, setTodoItems] = useState([])

  useEffect(() => {
    axios
      .get('/api/todo')
      .then(response => setTodoItems(response.data))
      .catch(error => console.log(error))
  }, [])

  const advanceToDoItem = (events) => axios.put()
  events.target.id

  return (
    <div>
      <KanbanBoard advanceToDoItem={advanceToDoItem} todoItems={todoItems} />
    </div>
  )
}

export default App
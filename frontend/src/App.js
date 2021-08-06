import './App.css'
import KanbanBoard from './components/KanbanBoard'
import {useEffect, useState} from 'react'
import {getAllTodos, putNewTodo} from "./components/service/RequestService";

function App() {
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        getAllTodos()
            .then(response => setTodoItems(response.data))
            .catch(error => console.error(error))
    }, [])

    const advanceToDoItem = (events) => {
        putNewTodo(events)
            .then(() =>
                getAllTodos()
                    .then(response => setTodoItems(response.data))
                    .catch(error => console.error(error))
            .catch(error => console.error(error))
        )
    }
    return (
        <div>
            <KanbanBoard advanceToDoItem={advanceToDoItem} todoItems={todoItems}/>
        </div>
    )
}

export default App
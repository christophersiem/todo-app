import './App.css'
import KanbanBoard from './components/KanbanBoard'
import {useEffect, useState} from 'react'
import {getAllTodos, putTodo, postNewTodo} from "./components/service/RequestService";
import Input from "./components/Input";


function App() {
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        getAllTodos()
            .then(response => setTodoItems(response.data))
            .catch(error => console.error(error))
    }, [])

    const advanceToDoItem = (events) => {
        putTodo(events)
            .then(() =>
                getAllTodos()
                    .then(response => setTodoItems(response.data))
                    .catch(error => console.error(error))
            .catch(error => console.error(error))
        )
    }

    const addToDo = input => {
        postNewTodo(input.target.id)
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
            <Input addToDo = {addToDo}/>
        </div>
    )
}

export default App
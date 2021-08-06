import axios from "axios";

export const getAllTodos = () => axios.get('/api/todo')

export const putNewTodo = (events) => axios.put("/api/todo/" + events.target.id).catch(error => console.error(error))



import axios from "axios";
import * as events from "events";

export const getAllTodos = () => axios.get('/api/todo').catch(error => console.error(error))

export const putTodo = (events) => axios.put("/api/todo/" + events.target.id).catch(error => console.error(error))

export const postNewTodo = (input) => axios.post("api/todo/", {description: input, status : "OPEN"}).catch(error => console.error(error))

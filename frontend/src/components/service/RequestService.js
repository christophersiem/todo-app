import axios from 'axios'

export const getAllTodos = () =>
  axios.get('/api/todo').catch(error => console.error(error))

export const putTodo = event =>
  axios.put('/api/todo/' + event.target.id).catch(error => console.error(error))

export const postNewTodo = event =>
  axios
    .post('api/todo/', { description: event, status: 'OPEN' })
    .catch(error => console.error(error))

export const deleteTodo = event =>
  axios
    .delete('/api/todo/' + event.target.id)
    .catch(error => console.error(error))

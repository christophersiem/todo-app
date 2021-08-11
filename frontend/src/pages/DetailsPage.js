import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function DetailsPage({ todos }) {
  const { id } = useParams()

  if (todos.length === 0) {
    return null
  }

  const todo = todos.find(todo => todo.id === id)

  if (!todo) {
    return <p>No todo found for id {id}</p>
  }

  return (
    <Wrapper>
      <h2>{todo.description}</h2>
      <p>Status: {todo.status}</p>
      <Link to="/">Back</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  a {
    padding: 4px;
    border: 1px solid hotpink;
    background: none;
    color: hotpink;
    text-decoration: none;
  }
`

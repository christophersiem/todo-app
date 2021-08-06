import { useState } from 'react'

export default function Input(props) {
  const [input, setInput] = useState('')
  const inputHandler = events => setInput(events.target.value)

  return (
    <section>
      <input
        onChange={inputHandler}
        type={'text'}
        name={'description'}
        placeholder={'Enter Description for new Todo'}
      />
      <button id={input} onClick={props.addToDo}>
        Add
      </button>
    </section>
  )
}

import React from 'react'
import TodoItem from './TodoItem';

const TodoBody = ({ todos, onUpdate }) => {

  return (
    <ul className='px-0 my-8'>
        {todos.map(todo => <TodoItem todo={todo} onUpdate={onUpdate} key={todo.id}/>) }
    </ul>
  )
}

export default TodoBody
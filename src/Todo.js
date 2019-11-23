import React from 'react';

const Todo = ({ todo }) => {
  const handleChange = () => {
    // TODO: fire a Redux action
  }

  return (
    <label>
      {todo.text}
      <input type="checkbox" checked={todo.done}
        onChange={handleChange} />
    </label>
  )
}

export default Todo

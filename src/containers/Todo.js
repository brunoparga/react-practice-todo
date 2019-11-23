import React, { useState } from 'react';

const Todo = ({ todo }) => {
  const [done, setDone] = useState(todo.done)

  const handleChange = () => { setDone(!done) }

  return (
    <div>
      <label>
        {todo.task}
        <input type="checkbox" checked={done}
          onChange={handleChange} />
      </label>
    </div>
  )
}

export default Todo

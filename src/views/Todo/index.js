import React from 'react';
import { useDispatch } from 'react-redux';

import { markDone } from '../../actions'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const handleChange = () => { dispatch(markDone(todo.id)); }

  return (
    <div>
      <label>
        {todo.task}
        <input type="checkbox" checked={todo.done}
          onChange={handleChange} />
      </label>
    </div>
  )
}

export default Todo;

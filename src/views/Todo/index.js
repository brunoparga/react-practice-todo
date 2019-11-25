import React from 'react';
import { useDispatch } from 'react-redux';

import { markDone, removeTodo } from '../../actions'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <label>
        {todo.task}
        <input type="checkbox" checked={todo.done}
          onChange={() => { dispatch(markDone(todo.id)) }} />
      </label>
      <small onClick={() => dispatch(removeTodo(todo.id))}>(delete)</small>
    </div>
  )
}

export default Todo;

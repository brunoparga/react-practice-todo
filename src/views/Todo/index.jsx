import React from 'react';
import { useDispatch } from 'react-redux';

import { markDone, removeTodo } from '../../actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor={todo.id}>
        {todo.task}
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.done}
          onChange={() => { dispatch(markDone(todo.id)); }}
        />
      </label>
      <button onClick={() => dispatch(removeTodo(todo.id))} type="button">(delete)</button>
    </div>
  );
};

export default Todo;

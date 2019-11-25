import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.css';
import Todo from '../views/Todo';
import { fetchTodos } from '../actions';

const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos)
  useEffect(() => dispatch(fetchTodos()), [dispatch])
  return (
    <div className="App">
      {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}

export default App;

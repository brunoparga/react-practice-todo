import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.css';
import Todo from '../views/Todo';
import Form from '../views/Form';
import { fetchTodos, createTodo } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store: any) => store.todos);
  useEffect(() => dispatch(fetchTodos()), [dispatch]);
  const submit = (task) => dispatch(createTodo(task));

  return (
    <div className="App">
      <Form onSubmit={submit} />
      {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default App;

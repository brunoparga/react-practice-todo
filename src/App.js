import React from 'react';
import './App.css';
import Todo from './Todo'

const App = (props) => {
  return (
    <div className="App">
      {props.todos.map(todo => <Todo todo={todo} key={todo} />)}
    </div>
  );
}

export default App;

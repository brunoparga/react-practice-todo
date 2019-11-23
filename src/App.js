import React, { useState } from 'react';
import './App.css';
import Todo from './Todo'

function App(props) {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => setIsChecked(!isChecked)

  return (
    <div className="App">
      {props.todos.map(todo => <Todo todo={todo} key={todo} />)}
    </div>
  );
}

export default App;

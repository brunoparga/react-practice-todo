import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Todo from './Todo';

const App = ({ todos }) => {
  return (
    <div className="App">
      {todos.map(todo => <Todo todo={todo} key={todo} />)}
    </div>
  );
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(App);

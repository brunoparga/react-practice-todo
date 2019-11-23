import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Todo from './Todo';
import { bindActionCreators } from 'redux';
import { fetchTodos } from '../actions';

const App = ({ todos, fetchTodos }) => {
  useEffect(() => fetchTodos())

  return (
    <div className="App">
      {todos.map(todo => <Todo todo={todo} key={todo} />)}
    </div>
  );
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

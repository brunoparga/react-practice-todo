import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.css';
import Todo from '../views/Todo';
import { fetchTodos } from '../actions';

const App = ({ todos, fetchTodos }) => {
  useEffect(() => fetchTodos(), [fetchTodos])

  return (
    <div className="App">
      {todos.map((todo, index) => <Todo todo={todo} key={`${index} - ${todo.task}`} />)}
    </div>
  );
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);

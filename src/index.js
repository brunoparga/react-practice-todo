import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import { todosReducer } from './reducers';

const reducer = (state, action) => ({ todos: todosReducer(state, action) })

// const initialTodos = [{}]  // This will be dealt with by the API
const initialTodos = [{ task: 'Task 1', done: false }, { task: 'Task 2', done: true }]
const store = createStore(reducer, initialTodos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

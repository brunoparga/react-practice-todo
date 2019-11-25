import { FETCH_TODOS, MARK_DONE, CREATE_TODO } from '../action_types'

const API_URL = 'http://localhost:3000/';

export const fetchTodos = () => dispatch => {
  fetch(API_URL)
    .then(response => response.json())
    .then(payload => dispatch({ type: FETCH_TODOS, payload }))
}

export const markDone = id => dispatch => {
  fetch(`${API_URL}${id}`, { method: 'PUT' })
    .then(response => response.json())
    .then(payload => dispatch({ type: MARK_DONE, payload }))
}

export const createTodo = task => dispatch => {
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
    .then(response => response.json())
    .then(payload => dispatch({ type: CREATE_TODO, payload }))
}

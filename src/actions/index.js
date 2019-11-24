import { FETCH_TODOS } from '../action_types'

export const fetchTodos = () => dispatch => {
  const API_URL = 'http://localhost:3000/';
  fetch(API_URL)
    .then(response => response.json())
    .then(payload => dispatch({ type: FETCH_TODOS, payload }))
}

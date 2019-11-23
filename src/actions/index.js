export const FETCH_TODOS = 'FETCH_TODOS'

export const fetchTodos = () => dispatch => {
  const API_URL = 'http://localhost:3000/';
  fetch(API_URL)
    .then(response => response.json())
    .then(payload => dispatch({ type: FETCH_TODOS, payload }))
}

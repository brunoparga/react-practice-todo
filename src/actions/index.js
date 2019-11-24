import { FETCH_TODOS, MARK_DONE } from '../action_types'

const API_URL = 'http://localhost:3000/';

export const fetchTodos = () => dispatch => {
  fetch(API_URL)
    .then(response => response.json())
    .then(payload => dispatch({ type: FETCH_TODOS, payload }))
}

export const markDone = id => dispatch => {
  fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(payload => dispatch({ type: MARK_DONE, payload }))
}

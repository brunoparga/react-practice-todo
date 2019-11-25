import { FETCH_TODOS, MARK_DONE, CREATE_TODO } from "../action_types";

const initialState = []

export default function todos(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_TODOS:
      return payload;
    case MARK_DONE:
      return state.map(todo => todo.id === payload.id ? payload : todo);
    case CREATE_TODO:
      return [...state, payload]
    default:
      return state;
  }
}

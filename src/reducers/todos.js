import { FETCH_TODOS, MARK_DONE } from "../action_types";

const initialState = []

export default function todos(state = initialState, { type, payload }) {
  switch(type){
    case FETCH_TODOS:
      return payload;
    case MARK_DONE:
      // this will be done the dumb way: have the API just return all the todos.
      // TODO: do it the smart way - return just the new todo, update it in the
      // state.
      return payload;
    default:
      return state;
  }
}

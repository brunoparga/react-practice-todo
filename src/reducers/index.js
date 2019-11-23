import { FETCH_TODOS } from "../actions";

export const todosReducer = (state, { type, payload }) => {
  switch(type){
    case FETCH_TODOS:
      return payload;
    default:
      return state;
  }
}

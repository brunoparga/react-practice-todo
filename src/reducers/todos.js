import { FETCH_TODOS } from "../action_types";

const initialState = [{}]

export default function todos(state = initialState, { type, payload }) {
  switch(type){
    case FETCH_TODOS:
      return payload;
    default:
      return state;
  }
}

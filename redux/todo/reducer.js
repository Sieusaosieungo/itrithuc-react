import { actionTypes } from './actions';

export const initialState = {
  todos: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD: {
      const { title } = action.payload;
      return {
        ...state,
        todos: [...state.todos, title],
      };
    }
    default:
      return state;
  }
}

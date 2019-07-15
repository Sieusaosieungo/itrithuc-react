import { combineReducers } from 'redux';
import todoReducer, { initialState as todoInitialState } from './todo/reducer';

export const initialState = {
  todoReducer: todoInitialState,
};

export default combineReducers({
  todoReducer,
});

import {combineReducers} from '@reduxjs/toolkit';

export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const initialState = 0;

const condition = (state = initialState, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      state;
  }
};

const Reducer =
  combineReducers <
  null >
  {
    condition,
  };
export default Reducer;

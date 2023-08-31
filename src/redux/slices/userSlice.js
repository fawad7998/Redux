import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  number: 0,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    hasError(state) {
      state.isLoading = false;
      state.error = action.payload;
    },
    incrementValue(state) {
      state.number += 1;
    },
    decrementValue(state) {
      if (state.number > 0) {
        state.number -= 1;
      }
    },
  },
});

// Reducer

export default slice.reducer;
const actions = slice.actions;

export const incrementValueFunc = () => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.incrementValue());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError());
    throw error;
  }
};
export const decrementValueFunc = () => (dispatch) => {
  dispatch(actions.startLoading());
  try {
    dispatch(actions.decrementValue());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.startLoading());
    dispatch(actions.hasError());
    throw error;
  }
};

export const numberValue = (state) => state.user.number;

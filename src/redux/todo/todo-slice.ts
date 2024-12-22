import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './types';

const todoReducer = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {},
});

const { reducer } = todoReducer;
export default reducer;

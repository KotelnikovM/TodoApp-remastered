import { createSlice } from '@reduxjs/toolkit';
import { initialState, initialStateI } from './types';

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: initialStateI, action) => {
      state.todosData.push(action.payload);
    },
    deleteTodo: (state: initialStateI, action) => {
      state.todosData = state.todosData.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    completeTodo: (state: initialStateI, action) => {
      state.todosData.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

const { reducer } = todoReducer;

export const { addTodo, deleteTodo, completeTodo } = todoReducer.actions;
export default reducer;

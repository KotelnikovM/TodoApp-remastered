import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './types';

const todoReducer = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todosData.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todosData = state.todosData.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    completeTodo: (state, action) => {
      state.todosData.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          console.log(todo.completed);
        }
      });
    },
  },
});

const { reducer } = todoReducer;

export const { addTodo, deleteTodo, completeTodo } = todoReducer.actions;
export default reducer;

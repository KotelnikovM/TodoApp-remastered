import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todo-slice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

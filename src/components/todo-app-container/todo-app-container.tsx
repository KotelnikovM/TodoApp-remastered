import React from 'react';
import styles from './todo-app-container.module.css';
import TodoForm from '../todo-form/todo-form';
import TodoList from '../todo-list/todo-list';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TodoAppContainer = () => {
  const todos = useSelector((state: RootState) => state.todo.todosData);

  const completedTodos = todos.filter((todo) => todo.completed === true);
  const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div className={styles.container}>
      <TodoForm />
      <p>Tasks to do - {uncompletedTodos.length}</p>
      <TodoList todos={uncompletedTodos} />
      <p>Done - {completedTodos.length}</p>
      <TodoList todos={completedTodos} completed={true} />
    </div>
  );
};

export default TodoAppContainer;

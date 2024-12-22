import React from 'react';
import styles from './todo-app-container.module.css';
import TodoForm from '../todo-form/todo-form';
import TodoList from '../todo-list/todo-list';

const TodoAppContainer = () => {
  return (
    <div className={styles.container}>
      <TodoForm />
      <p>Tasks to do - 4</p>
      <TodoList />
      <p>Done - 1</p>
    </div>
  );
};

export default TodoAppContainer;

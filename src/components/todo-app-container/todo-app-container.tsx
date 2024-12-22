import React from 'react';
import styles from './todo-app-container.module.css';
import TodoItem from '../todo-item/todo-item';
import TodoForm from '../todo-form/todo-form';

const TodoAppContainer = () => {
  return (
    <div className={styles.container}>
      <TodoForm />
      <TodoItem />
    </div>
  );
};

export default TodoAppContainer;

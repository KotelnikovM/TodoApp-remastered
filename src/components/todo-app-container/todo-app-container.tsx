import React from 'react';
import styles from './todo-app-container.module.css';
import TodoItem from '../todo-item/todo-item';

const TodoAppContainer = () => {
  return (
    <div className={styles.container}>
      <TodoItem />
    </div>
  );
};

export default TodoAppContainer;

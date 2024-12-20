import React from 'react';
import styles from './todo-app-container.module.css';
import { CheckIcon } from '../../ui/check-icon';
import { DeleteIcon } from '../../ui/delete-icon';

const TodoAppContainer = () => {
  return (
    <div className={styles.container}>
      <CheckIcon />
      <DeleteIcon />
    </div>
  );
};

export default TodoAppContainer;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Button from '../../ui/button/button';
import { AddIcon } from '../../ui/icons/add-icon';
import styles from './todo-form.module.css';
import { useAppDispatch } from '../../redux/store';
import { addTodo } from '../../redux/todo/todo-slice';
import { v4 as uuid } from 'uuid';

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
    dispatch(addTodo({ id: uuid(), todoText: text, completed: false }));
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={text}
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
        type="text"
        className={styles.formInput}
      />
      <Button className={styles.formButton} icon={<AddIcon />} type="submit" />
    </form>
  );
};

export default TodoForm;

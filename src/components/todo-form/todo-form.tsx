// import { useState } from 'react';
import Button from '../../ui/button/button';
import { AddIcon } from '../../ui/icons/add-icon';
import styles from './todo-form.module.css';

const TodoForm = () => {
  // const [text, setText] = useState('');

  return (
    <form className={styles.form}>
      <input
        placeholder="Add a new task"
        // onChange={(e) => setText(e.target.value)}
        type="text"
        className={styles.formInput}
      />
      <Button className={styles.formButton} icon={<AddIcon />} type="submit" />
    </form>
  );
};

export default TodoForm;

import { CheckIcon } from '../../ui/check-icon';
import { DeleteIcon } from '../../ui/delete-icon';
import styles from './todo-item.module.css';

const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
      <p>Text</p>
      <CheckIcon />
      <DeleteIcon />
    </div>
  );
};

export default TodoItem;

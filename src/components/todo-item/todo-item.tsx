import Button from '../../ui/button/button';
import { CheckIcon } from '../../ui/icons/check-icon';
import { DeleteIcon } from '../../ui/icons/delete-icon';
import styles from './todo-item.module.css';

const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
      <p>Text</p>

      <Button icon={<CheckIcon />} />
      <Button icon={<DeleteIcon />} />
    </div>
  );
};

export default TodoItem;

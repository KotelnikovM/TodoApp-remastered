import Button from '../../ui/button/button';
import { CheckIcon } from '../../ui/icons/check-icon';
import { DeleteIcon } from '../../ui/icons/delete-icon';
import { EditIcon } from '../../ui/icons/edit-icon';
import styles from './todo-item.module.css';

const TodoItem = () => {
  return (
    <li className={styles.todoItem}>
      <p>Text</p>

      <Button icon={<CheckIcon />} />
      <Button icon={<DeleteIcon />} />
      <Button icon={<EditIcon />} />
    </li>
  );
};

export default TodoItem;

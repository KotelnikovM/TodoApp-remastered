import { useSelector } from 'react-redux';
import Button from '../../ui/button/button';
import { CheckIcon } from '../../ui/icons/check-icon';
import { DeleteIcon } from '../../ui/icons/delete-icon';
import { EditIcon } from '../../ui/icons/edit-icon';
import styles from './todo-item.module.css';
import { RootState } from '../../redux/store';

const TodoItem = () => {
  const todo = useSelector((state: RootState) => state.todo.todosData);
  console.log(todo);

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

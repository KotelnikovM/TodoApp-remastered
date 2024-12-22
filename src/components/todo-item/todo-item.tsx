import { useAppDispatch } from '../../redux/store';
import { completeTodo, deleteTodo } from '../../redux/todo/todo-slice';
import Button from '../../ui/button/button';
import { CheckIcon } from '../../ui/icons/check-icon';
import { DeleteIcon } from '../../ui/icons/delete-icon';
import styles from './todo-item.module.css';

interface ITodoItemProps {
  id: string | null;
  text: string;
  completed?: boolean;
}

const TodoItem: React.FC<ITodoItemProps> = ({ text, id, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.todoItem}>
      <p className={completed ? styles.todoCheckedText : ''}>{text}</p>

      {!completed && (
        <>
          <Button
            onClick={() => {
              dispatch(completeTodo({ id }));
            }}
            icon={<CheckIcon />}
          />
          <Button
            onClick={() => {
              dispatch(deleteTodo({ id }));
            }}
            icon={<DeleteIcon />}
          />
        </>
      )}
    </li>
  );
};

export default TodoItem;

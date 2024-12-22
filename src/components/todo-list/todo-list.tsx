import TodoItem from '../todo-item/todo-item';
import styles from './todo-list.module.css';

const TodoList = () => {
  return (
    <ul className={styles.todoList}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;

import TodoItem from '../todo-item/todo-item';
import styles from './todo-list.module.css';

interface ITodoListProps {
  todos: { id: string; todoText: string; completed: boolean }[];
  completed?: boolean;
}
const TodoList: React.FC<ITodoListProps> = ({ todos, completed }) => {
  // const todos = useSelector((state: RootState) => state.todo.todosData);

  return (
    <ul
      className={`${styles.todoList} ${completed && styles.completedTodoList}`}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.todoText}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;

import TodoItem from '../todo-item/todo-item';
import styles from './todo-list.module.css';

interface ITodoListProps {
  todos: todoItemDataI[];
  completed?: boolean;
}

interface todoItemDataI {
  id: string;
  todoText: string;
  completed: boolean;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, completed }) => {
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

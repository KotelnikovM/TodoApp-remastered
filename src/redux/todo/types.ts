export const initialState: initialStateI = {
  todosData: [],
};

export interface initialStateI {
  todosData: todoItemDataI[];
}

interface todoItemDataI {
  id: string;
  todoText: string;
  completed: boolean;
}

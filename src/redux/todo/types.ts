export const initialState: initialStateI = {
  // todosData: [
  //   {
  //     id: null,
  //     todoText: '',
  //     completed: false,
  //   },
  // ],
  todosData: [
    {
      id: 12,
      todoText: 'Test',
      completed: true,
    },
  ],
};

export interface initialStateI {
  todosData: todoItemDataI[];
}

interface todoItemDataI {
  id: number | null;
  todoText: string;
  completed: boolean;
}

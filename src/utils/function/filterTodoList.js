export const filterTodoList = (todoList, inputValue) => {
  return todoList.filter((todo) =>
    inputValue.length > 0
      ? todo.title.toLowerCase().startsWith(inputValue.toLowerCase())
      : todoList
  );
};

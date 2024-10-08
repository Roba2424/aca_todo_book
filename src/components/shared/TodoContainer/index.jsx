import { filterTodoList } from "../../../utils/function/filterTodoList";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoContainer = ({
  todoList,
  isHidden,
  filterInputValue,
  deleteTodo,
}) => {
  const filteredList = filterTodoList(todoList, filterInputValue);

  return (
    <div className="todo-container container">
      <h2>Books to Read</h2>
      <ul>
        {!todoList.length ? (
          <h2 className="text-center">The list is Empty</h2>
        ) : (
          !isHidden &&
          filteredList.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              toggleDelete={() => deleteTodo(todo.id)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoContainer;

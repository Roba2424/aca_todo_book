import TodoItem from "../TodoItem";
import "./style.css";

const TodoContainer = () => {
  return (
    <div className="todo-container container">
      <h2>Books to Read</h2>
      <ul>
        <TodoItem title={"name of book"} />
      </ul>
    </div>
  );
};

export default TodoContainer;

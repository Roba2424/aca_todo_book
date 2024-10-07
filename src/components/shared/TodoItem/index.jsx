import "./style.css";

const TodoItem = ({title,toggleDelete}) => {
  return (
    <li className="todo-item">
      <p>{title}</p>
      <button onClick={toggleDelete}>delete</button>
    </li>
  );
};

export default TodoItem;

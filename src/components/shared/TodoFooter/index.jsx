import "./style.css";

const TodoFooter = () => {
  return (
    <div className="todo-footer container">
      <div>
        <input type="checkbox" /> Hide all books
      </div>

      <div className="todo-add-container">
        <input type="text" placeholder="Add a book..." />
        <button>Add</button>
      </div>
    </div>
  );
};

export default TodoFooter;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const TodoFooter = ({ addBook, onInputChange, hide, onChangeHide }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className="todo-footer container">
      <div className="hide-checkbox">
        <input type="checkbox" value={hide} onClick={onChangeHide} />
        Hide all books
      </div>

      <div className="todo-add-container">
        <input
          type="text"
          placeholder="Add a book..."
          onChange={handleChange}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addBook(input, uuidv4());
              setInput("");
            }
          }}
        />
        <button
          onClick={() => {
            addBook(input, uuidv4());
            setInput("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;

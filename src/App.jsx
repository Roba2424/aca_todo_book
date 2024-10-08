import { useState } from "react";
import Header from "./components/global/Header";
import TodoContainer from "./components/shared/TodoContainer";
import TodoFooter from "./components/shared/TodoFooter";

function App() {
  const [todosList, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [isHidden, setHidden] = useState(false);

  const addTodo = (title, id) => {
    if (title !== "") setTodo((todosList) => [...todosList, { title, id }]);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handlFiltereInputChange = (value) => {
    setFilterInput(value);
  };

  const handleDeleteTodo = (id) => {
    setTodo(todosList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main-box container">
      <Header filterInput={handlFiltereInputChange} />
      <TodoContainer
        todoList={todosList}
        isHidden={isHidden}
        filterInputValue={filterInput}
        deleteTodo={handleDeleteTodo}
      />
      <TodoFooter
        onInputChange={handleInputChange}
        addBook={addTodo}
        hide={isHidden}
        onChangeHide={() => setHidden(!isHidden)}
      />
    </div>
  );
}

export default App;

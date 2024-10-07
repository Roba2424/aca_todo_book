import Header from "./components/global/Header";
import TodoContainer from "./components/shared/TodoContainer";
import TodoFooter from "./components/shared/TodoFooter";

function App() {
  return (
    <div className="main-box container">
      <Header />
      <TodoContainer />
      <TodoFooter />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import logo from "../src/logo-color.png";

function App() {
  return (
    <div>
      <div class="loader">
        <img src={logo} alt="logo" />
      </div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;

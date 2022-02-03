import "./App.css";
import TodoList from "./components/TodoList";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header>
        <Typography variant="h1">Todo List</Typography>
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

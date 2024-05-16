import { useState } from "react";
import "./App.css";
import "./reset.css";
import styled from "@emotion/styled";
import TodoForm from "./components/TodoForm";
import TodoListBlock from "./components/TodoListBlock";

function App() {
  const initialState = [];
  const [todos, setTodos] = useState(initialState);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const removeUser = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1>TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListBlock
        todos={todos}
        toggleTodoStatus={toggleTodoStatus}
        removeUser={removeUser}
        isDone={false}
      />
      <TodoListBlock
        todos={todos}
        toggleTodoStatus={toggleTodoStatus}
        removeUser={removeUser}
        isDone={true}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  overflow-y: auto;
  border: 2px solid black;
`;

export default App;

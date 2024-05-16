import styled from "@emotion/styled";
import TodoItem from "../TodoItem";

const TodoListBlock = ({ todos, toggleTodoStatus, removeUser, isDone }) => {
  return (
    <Container>
      <h1>{isDone ? "Done" : "Working"}</h1>
      <TodoList>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodoStatus={toggleTodoStatus}
              removeUser={removeUser}
            />
          ))}
      </TodoList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 2px solid red;
  height: 100%;
`;

export default TodoListBlock;

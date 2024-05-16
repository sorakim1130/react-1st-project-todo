import styled from "@emotion/styled";

const TodoItem = ({ todo, toggleTodoStatus, removeUser }) => {
  return (
    <Container>
      <div>제목: {todo.title}</div>
      <div>내용: {todo.content}</div>
      <ButtonWrapper>
        <Button onClick={() => toggleTodoStatus(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </Button>
        <Button onClick={() => removeUser(todo.id)}>삭제</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Button = styled.button`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #999;
  border-radius: 8px;
`;

export default TodoItem;

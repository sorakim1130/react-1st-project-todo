import styled from "@emotion/styled";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    addTodo({
      id: Date.now(),
      title,
      content,
      isDone: false,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        style={{
          padding: "0 10px",
          height: "100%",
          fontSize: "24px",
          border: "2px solid green",
          flex: "1",
        }}
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={{
          padding: "0 10px",
          height: "100%",
          fontSize: "24px",
          border: "2px solid green",
          flex: "1",
        }}
        type="text"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton type="submit">제출</SubmitButton>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  height: 120px;
`;
const SubmitButton = styled.button`
  padding: 10px;
  width: 120px;
  height: 100%;
  font-size: 24px;
  border-radius: 8px;
  background-color: green;
`;

export default TodoForm;

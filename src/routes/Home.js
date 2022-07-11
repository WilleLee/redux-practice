import { useState } from "react";
import styled from "styled-components";
//redux
import { connect } from "react-redux";
import { add } from "../store";
//components
import Todo from "../components/Todo";

const Form = styled.form`
  gap: 10px;
  margin-bottom: 20px;
`;
const Ul = styled.ul`
  gap: 5px;
`;

function Home({ todos, addTodo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const { target } = e;
    setText(target.value);
  };
  const onReset = (e) => {
    e.target.firstChild.value = null;
    setText("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    onReset(e);
  };

  return (
    <>
      <h2
        style={{
          fontWeight: 600,
          fontSize: "26px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        To Do
      </h2>
      <Form className="column-container-center" onSubmit={onSubmit}>
        <input
          placeholder="what to do?"
          type="text"
          minLength={2}
          maxLength={15}
          required
          onChange={onChange}
          style={{
            textAlign: "center",
            padding: "3px 5px",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            width: "80px",
            padding: "5px 3px",
            border: "none",
            backgroundColor: "#eee",
            color: "#555",
            fontWeight: 600,
          }}
        >
          Submit
        </button>
      </Form>
      <Ul className="column-container-center">
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </Ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return { addTodo: (text) => dispatch(add(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

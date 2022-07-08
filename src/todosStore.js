import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (todos = [], action) => {
  const { type, text, id } = action;
  switch (type) {
    case ADD:
      return [{ text, id: Date.now() }, ...todos];
    case DELETE:
      return todos.filter((todo) => todo.id !== id);
    default:
      return todos;
  }
};
const todosStore = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default todosStore;

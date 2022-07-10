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
    id: parseInt(id),
  };
};
/*
async function setCurrentStore() {
  const currentStore = localStorage.getItem("storage");
  const parse = await JSON.parse(currentStore);
  console.log(parse);
  if (parse.length) {
    return parse;
  } else return [];
}
*/

function setCurrentStore() {
  return localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage"))
    : [];
}
const currentTodos = setCurrentStore();

const reducer = (todos = currentTodos, action) => {
  const { type, text, id } = action;
  switch (type) {
    case ADD: {
      const newStore = [{ text, id: Date.now() }, ...todos];
      const json = JSON.stringify(newStore);
      localStorage.setItem("storage", json);
      return newStore;
    }
    case DELETE:
      const newStore = todos.filter((todo) => todo.id !== id);
      const json = JSON.stringify(newStore);
      localStorage.setItem("storage", json);
      return newStore;
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

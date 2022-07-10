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

const reducer = (
  todos = JSON.parse(localStorage.getItem("storage")),
  action
) => {
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

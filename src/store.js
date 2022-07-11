import { configureStore, createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY_LOCAL = "storage";

function setCurrentStore() {
  return localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage"))
    : [];
}
const currentTodos = setCurrentStore();

const todosStore = createSlice({
  name: "todosReducer",
  initialState: currentTodos,
  reducers: {
    add: (todos, action) => {
      const newState = [{ text: action.payload, id: Date.now() }, ...todos];
      const json = JSON.stringify(newState);
      localStorage.setItem(STORAGE_KEY_LOCAL, json);
      return newState;
    },
    remove: (todos, action) => {
      const newState = todos.filter((todo) => todo.id !== action.payload);
      const json = JSON.stringify(newState);
      localStorage.setItem(STORAGE_KEY_LOCAL, json);
      return newState;
    },
  },
});

const store = configureStore({ reducer: todosStore.reducer });

export const { add, remove } = todosStore.actions;

export default store;

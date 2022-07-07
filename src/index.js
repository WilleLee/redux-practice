import { createStore } from "redux";
import "./styles/main.css";

//createStore introduction
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector(".counter");

counter.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";
const countModifier = (count = 0, action) => {
  const { type } = action;
  switch (type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }

  /*
  if (type === "PLUS") {
    return count + 1;
  } else if (type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
  */
};
const countStore = createStore(countModifier);
const onChange = () => {
  counter.innerText = countStore.getState();
};
countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

//todos
const todoForm = document.querySelector(".todo-form");
const input = document.querySelector(".todo-form input");
const todosList = document.querySelector(".todos-list");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const todosModifier = (todos = [], action) => {
  const { type, text, id } = action;
  switch (type) {
    case ADD_TODO:
      return [...todos, { text, id }];
    case DELETE_TODO:
      return [];
    default:
      return todos;
  }
};
const todosStore = createStore(todosModifier);

const paintTodos = () => {
  const todos = todosStore.getState();
  todosList.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.id = todo.id;
    li.innerText = todo.text;
    todosList.appendChild(li);
  }
};
todosStore.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  todosStore.dispatch({ type: ADD_TODO, text, id: Date.now() });
  input.value = "";
};
todoForm.addEventListener("submit", onSubmit);

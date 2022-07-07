import { createStore } from "redux";

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

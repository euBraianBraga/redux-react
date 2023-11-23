import { legacy_createStore as createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const SET = "SET";


const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case SET:
      return Number(state) + Number(action.payload);
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "SET", payload: 0 });

export default countReducer;

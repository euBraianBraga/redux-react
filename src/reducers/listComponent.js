import { legacy_createStore as createStore } from "redux";

const VISIBLE = "VISIBLE";
const INVISIBLE = "INVISIBLE";

const listComponent = (state = false, action) => {
  switch (action.type) {
    case VISIBLE:
      return state = true;
    case INVISIBLE:
      return state = false;
    default:
      return state;
  }
};

const store = createStore(listComponent);

store.dispatch({ type: "VISIBLE" });
store.dispatch({ type: "INVISIBLE" });

export default listComponent;

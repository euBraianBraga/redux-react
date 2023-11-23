import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { formAddAll } from "./reducers/formAddAll";
import counterReducer from "./reducers/countReducer";
import listComponent from "./reducers/listComponent";
import todoListReducer from "./reducers/todoListReducer";
import changeExistingValue from "./reducers/changeExistingValue";
import { legacy_createStore as createStore, combineReducers } from "redux";

const allReducers = combineReducers({
  formAdd: formAddAll,
  counter: counterReducer,
  todoList: todoListReducer,
  listVisible: listComponent,
  changeValue: changeExistingValue,
});

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

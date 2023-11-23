import { legacy_createStore as createStore } from "redux";

export const changeExistingValue = (
  state = { nome: "", email: "", mensagem: "" },
  action
) => {
  switch (action.type) {
    case "ALTERAR_NOME":
      return { ...state, nome: action.payload };
    case "ALTERAR_EMAIL":
      return { ...state, email: action.payload };
    case "ALTERAR_MENSAGEM":
      return { ...state, mensagem: action.payload };
    default:
      return state;
  }
};

const store = createStore(changeExistingValue);

store.dispatch({ type: "ALTERAR_NOME", payload: "Jonh Doe" });
store.dispatch({ type: "ALTERAR_EMAIL", payload: "jonhdoe@gmail.com" });
store.dispatch({ type: "ALTERAR_MENSAGEM", payload: "Sou um programador" });

export default changeExistingValue;

import { legacy_createStore as createStore } from "redux";

const adicionarLista = (state = { listaTarefas: [] }, action) => {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return { listaTarefas: [...state.listaTarefas, action.payload] };
    case "REMOVER_TAREFA":
      return {
        listaTarefas: state.listaTarefas.filter(
          (tarefa) => tarefa !== action.payload
        )
      };
    default:
      return state;
  }
};

const store = createStore(adicionarLista);

store.dispatch({ type: "ADICIONAR_TAREFA", payload: "TAREFA 1" });
store.dispatch({ type: "ADICIONAR_TAREFA", payload: "TAREFA 2" });

store.dispatch({ type: "REMOVER_TAREFA", payload: "TAREFA 1" });

export default adicionarLista;
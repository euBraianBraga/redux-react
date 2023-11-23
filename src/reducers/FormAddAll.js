export const formAddAll = (state = [], action) => {
    switch (action.type) {
      case "ADICIONAR_DADOS":
        return [...state, action.payload];
      default:
        return state;
    }
  };
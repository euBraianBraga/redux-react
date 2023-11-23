import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormAddAll from "./pages/FormAddAll";
import ChangeExistingValue from "./pages/ChangeExistingValue";
import CountReducer from "./pages/CountReducer";
import ListComponent from "./pages/ListComponent";
import TodoListReducer from "./pages/TodoListReducer";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountReducer />} />
        <Route path="/formAddAll" element={<FormAddAll />} />
        <Route path="/todoList" element={<TodoListReducer />} />
        <Route path="/listComponent" element={<ListComponent />} />
        <Route path="/changeExistingValue" element={<ChangeExistingValue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

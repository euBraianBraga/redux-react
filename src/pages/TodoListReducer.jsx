import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoListReducer() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList.listaTarefas);

    const [todo, setTodo] = useState("");

    const adicionarTarefa = () => {
        dispatch({ type: "ADICIONAR_TAREFA", payload: todo });
    };

    const removerTarefa = () => {
        dispatch({ type: "REMOVER_TAREFA", payload: todo });
    };

    return (
        <div>
            Criar uma nova Tarefa:
            <input style={{ marginLeft: "0.4rem" }} type="text" onChange={(e) => setTodo(e.target.value)} />
            <hr />
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <button style={{ marginLeft: "0.4rem" }} onClick={removerTarefa}>Remover Tarefa</button>
            <br />
            <br />
            Lista de Tarefas:
            <br />
            <ul>
                {todoList?.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListReducer;

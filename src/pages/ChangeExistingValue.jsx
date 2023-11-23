import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FormReducer() {
    const dispatch = useDispatch();
    const formulario = useSelector((state) => state.changeValue);

    const [localForm, setLocalForm] = useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    const alterarNome = (nome) => {
        setLocalForm({ ...localForm, nome });
    };

    const alterarEmail = (email) => {
        setLocalForm({ ...localForm, email });
    };

    const alterarMensagem = (mensagem) => {
        setLocalForm({ ...localForm, mensagem });
    };

    const cadastrar = (e) => {
        e.preventDefault();
        dispatch({ type: "ALTERAR_NOME", payload: localForm.nome });
        dispatch({ type: "ALTERAR_EMAIL", payload: localForm.email });
        dispatch({ type: "ALTERAR_MENSAGEM", payload: localForm.mensagem });
    };
    
    console.log("cadastrou", formulario);

    return (
        <div>
            <form onSubmit={cadastrar}>
                Nome:
                <input type="text" value={localForm.nome} onChange={(e) => alterarNome(e.target.value)} />
                <br />
                E-mail:
                <input type="text" value={localForm.email} onChange={(e) => alterarEmail(e.target.value)} />
                <br />
                Mensagem:
                <input type="text" value={localForm.mensagem} onChange={(e) => alterarMensagem(e.target.value)} />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormReducer;
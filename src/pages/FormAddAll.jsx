import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FormReducer() {
    const dispatch = useDispatch();
    const formulario = useSelector((state) => state.formAdd);

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
        dispatch({
            type: "ADICIONAR_DADOS",
            payload: {
                nome: localForm.nome,
                email: localForm.email,
                mensagem: localForm.mensagem
            }
        });
    };

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

            {formulario?.map((item, index) => (
                <div key={index}>
                    <p>{index + 1} - <b>Nome</b>: {item.nome}; <b>E-mail</b>: {item.email}; <b>Mensagem</b>: {item.mensagem};</p>
                </div>
            ))
            }
        </div>
    );
}

export default FormReducer;
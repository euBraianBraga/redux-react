import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function CountReducer() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [numero, setNumero] = useState();

    return (
        <div>
            <p>Contagem: {counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Resetar</button>
            <hr />
            <input type="text" onChange={((e) => setNumero(e.target.value))} />
            <button onClick={() => dispatch({ type: 'SET', payload: numero })}>Somar com numero digitado</button>
        </div>
    )
}

export default CountReducer;
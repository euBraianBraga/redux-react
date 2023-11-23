import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function CountReducer() {
    const counter = useSelector((state) => state.listVisible);
    const dispatch = useDispatch();


    return (
        <div>
            <div style={{ display: "flex", gap: "0.2rem" }}>
                <button onClick={() => dispatch({ type: 'VISIBLE' })}>Visible</button>
                <button onClick={() => dispatch({ type: 'INVISIBLE' })}>Invisible</button>
            </div>
            <hr />
            {counter === true ? <span>Esta visivel</span> : <span>Esta invisivel</span>}
        </div>
    )
}

export default CountReducer;
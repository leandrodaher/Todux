import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todos';


function AddTodo() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onBlur={ e => setInput(e.target.value) } />
            <button onClick={ () => dispatch(addTodo(input)) } >Novo todo</button>
        </div>
    );
}

export default AddTodo;
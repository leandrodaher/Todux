import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todos';

import './AddTodo.css';

export default function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // Quando houver alteração no estado do input, repassar a caixa de texto
    useEffect(() => {
        document.getElementById('ipt').value = input;
    });

    const btnClick = () => {
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <div className="AddTodo">
            <input id="ipt" type="text" onBlur={ e => setInput(e.target.value) } />
            <button onClick={ () => btnClick() }>
                +
            </button>
        </div>
    );
}
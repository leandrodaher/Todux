import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/todos';

import './TodoItem.css';

export default function TodoItem(props) {
    const [id, setId] = useState(props.id);
    const [checked, setChecked] = useState(props.toggle);
    const dispatch = useDispatch();
    
    const change = useCallback( () => {
        checked ? document.getElementById(`item_${id}`).className = 'itemChecked' : document.getElementById(`item_${id}`).className = '';
        document.getElementById(`chkbx_${id}`).checked = checked;
    }, [checked, id]);

    // Quando houver alteração no estado da caixa, renderizar novamente a caixa de marcação
    useEffect(() => {
        change();

        // Sem isto (setId, setChecked), quando apagamos um item, o id do item apagado passa para o item de baixo (apenas no estado local)
        // o estado na Store continua correto. Ainda não consegui entender porquê isso acontece.
        setId(props.id);
        setChecked(props.toggle);
    }, [props.id, props.toggle, change]);


    function toggle(e) {
        const c = !checked;
        setChecked(c);
        dispatch(toggleTodo(id, c));
    }

    function remove(e) {
        dispatch(removeTodo(id));
    }

    return (
        <li id={`item_${id}`}>
            {
                checked ? 
                // no lugar de 'defaultCheckedd="checked"' eu estava usando apenas "checked"
                // isso causa um aviso no console.
                // <input id="chkbx" type="checkbox" checked onChange={ e => togle(e) }/>
                <input id={`chkbx_${id}`} type="checkbox" defaultChecked="checked" onChange={ e => toggle(e) }/>
                :
                <input id={`chkbx_${id}`} type="checkbox" onChange={ e => toggle(e) } />
            }
            
            {checked ? <s>{props.text}</s> : props.text }
            <span onClick={ e => remove(e) }>X</span>
        </li>
    );
}
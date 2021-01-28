import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';

import './TodoList.css';

export const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div className="TodoList">
            <div className="list">
                <h1>Todux App</h1>
                <ul>
                    {
                        todos.map((item, key) =>
                            <li key={key}>
                                {item.text}
                                <span>X</span>
                            </li>
                        )
                    }
                </ul>    
            </div>

            <div className="addTodo">
                <AddTodo />
            </div>
            
        </div>
    );
}

export default TodoList;
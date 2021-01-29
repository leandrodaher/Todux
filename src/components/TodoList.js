import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

import './TodoList.css';

export default function TodoList() {
    const todos = useSelector(store => store.todos);

    return (
        <div className="TodoList">
            <div className="list">
                <h1>Todux App</h1>
                <ul>
                    {
                        todos.map((item, key) =>
                            (
                                
                                <TodoItem key={key} id={item.id} text={item.text} toggle={item.toggle} />
                            )
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
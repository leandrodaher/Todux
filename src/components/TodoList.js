import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';

export const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <ul>
                <li>Item do todo</li>
                {
                    todos.map((item, key) =>
                        <li key={key}>{item.text}</li>
                    )
                }
            </ul>

            <AddTodo />
        </div>
    );
}

export default TodoList;
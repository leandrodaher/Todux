import * as action from './actionTypes';

export function addTodo(text) {
    return {
        type: action.ADD_TODO,
        payload: {
            text,  // Na especificação JS ES6 não é necessário usar text: text para passar o arquimento da função pro objeto
        }
    }
}

export function toggleTodo(id, toggle) {
    return {
        type: action.TOGGLE_TODO,
        payload: {
            id,
            toggle
        }
    }
}

export function removeTodo(id) {
    return {
        type: action.REMOVE_TODO,
        payload: {
            id,
        }
    }
}
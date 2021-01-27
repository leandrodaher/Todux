import * as action from './actionTypes';

export function addTodo(text) {
    return {
        type: action.ADD_TODO,
        payload: {
            text,  // Na especificação JS ES6 não é necessário usar text: text para passar o arquimento da função pro objeto
        }
    }
}
import * as act from '../actions/actionTypes';

export default function todos(state = [], action) {
    switch (action.type) {
        case act.ADD_TODO:
            return [ ...state, {
                id: Math.random(),
                text: action.payload.text
            }]

        /*case 'REMOVE_TODO':
            return [ ...state ];*/

        default:
            return state;
    }
}
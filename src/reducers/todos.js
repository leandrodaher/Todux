import * as act from '../actions/actionTypes';

export default function todos(state = [], action) {
    switch (action.type) {
        case act.ADD_TODO:
            return [ ...state, {
                id: Math.random(),
                text: action.payload.text,
                toggle: false
            }];

        // https://daveceddia.com/react-redux-immutability-guide/#redux-update-an-object-in-an-object
        case act.TOGGLE_TODO:
            const id = action.payload.id;
            const toggle = action.payload.toggle;
            const result = state.map((item, key) => {
                if (item.id === id) {
                    return {
                        ...item,
                        toggle: toggle
                    };
                }

                return item;
            });
            return result;
        
        case act.REMOVE_TODO:
            return state.filter((item, index) => {
                if (item.id === action.payload.id) {
                    return false;
                }

                return true;
            });

        default:
            return state;
    }
}
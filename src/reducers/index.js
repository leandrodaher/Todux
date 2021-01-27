// A "store" precisa ter acesso a todos os reducers. Como temos muitos reducers, este arquivo será utilizado para agregar todos eles.

// O Redux tem um método para combinar meus reducers, chamado combineReducers

import { combineReducers } from 'redux';

import todos from './todos';
// import reducer2 from './reducer2';

// exporta todos os reducers combinados
export default combineReducers({
    todos,
    // reducer2,
})
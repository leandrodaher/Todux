import { createStore } from 'redux';

import reducers from './reducers'; // importa o "index.js" mque estpa dentro da pasta "./reducers"

const store = createStore(reducers); //createStore(() => {});

export default store;
import React from 'react';

import TodoList from './components/TodoList';

import './css/App.css';

export const App = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;

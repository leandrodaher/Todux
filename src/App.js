import React from 'react';

import TodoList from './components/TodoList';

import './css/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

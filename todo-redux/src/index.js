import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Store from './store/Store';
import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



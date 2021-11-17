import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Rostislav222', likesCount: 43 },
  { id: 2, message: '34433434', likesCount: 15 },
  { id: 3, message: 'blabla', likesCount: 2323 },
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

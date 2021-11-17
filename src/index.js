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
let dialogs= [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Valera' },
  { id: 4, name: 'Sveta' },
]
let messages = [
  { id: 1, message: 'hohoh' },
  { id: 2, message: 'yoyoy' },
  { id: 3, message: 'yo' },
  { id: 4, message: 'sdds' },
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

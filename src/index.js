import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import HomePage from "./views/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics end point. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

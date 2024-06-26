import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
document.title = "TOMATO";
let link = document.querySelector("link[rel*='icon']");
link.href = 'https://ibb.co/59NsZ0J';
document.getElementsByTagName('head')[0].appendChild(link);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

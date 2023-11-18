// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/mocktestduniya">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

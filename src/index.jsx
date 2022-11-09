import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter } from 'react-router-dom';
import App from './App';
>>>>>>> feat/header

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
        <App />
>>>>>>> feat/header
    </BrowserRouter>
  </React.StrictMode>
);

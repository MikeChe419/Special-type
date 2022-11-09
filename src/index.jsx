import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter } from 'react-router-dom';
import App from './App';
>>>>>>> 55628bc1ffd19e45f349ba9e2d0f8e054f507132

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
        <App />
>>>>>>> 55628bc1ffd19e45f349ba9e2d0f8e054f507132
    </BrowserRouter>
  </React.StrictMode>
);

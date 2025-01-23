import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client in React 18
import Web from './Web.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>
);

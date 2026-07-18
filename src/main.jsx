import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Primero lo global
import './App.css';   // Después lo específico (gana esta)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Homepage />} />
        <Route path='/more' element={<Homepage />} />
        <Route path='/about' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

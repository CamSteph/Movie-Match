import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Movies from './pages/Movies.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/all-movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

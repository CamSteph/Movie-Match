import './App.css';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import AllMovies from './pages/AllMovies.jsx';
import NotFound from './pages/NotFound';

function App() {

  return (
    
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/all-movies' element={<AllMovies />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <MainFooter />
    </BrowserRouter>
  );
};

export default App;

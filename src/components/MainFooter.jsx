import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <footer className="h-48 w-full p-3 bg-black bg-slate-950 flex items-center">
      <h1 className="text-3xl font-sans text-slate-200 flex-none w-1/2">Movie Match.</h1>
      <nav className="flex flex-row w-1/2 h-full">
        <ul className="w-full flex flex-col items-center justify-evenly text-slate-200">
          <li><Link to='/' className='hover:text-blue-500 transition-colors duration-300'>Home</Link></li>
          <li><Link to='/categories' className='hover:text-blue-500 transition-colors duration-300'>Categories</Link></li>
          <li><Link to='/all-movies' className='hover:text-blue-500 transition-colors duration-300'>All Movies</Link></li>
        </ul>
        <ul className="w-full flex flex-col items-center justify-evenly text-slate-200">
          <li><Link to='/' className='hover:text-blue-500 transition-colors duration-300'>Home</Link></li>
          <li><Link to='/categories' className='hover:text-blue-500 transition-colors duration-300'>Categories</Link></li>
          <li><Link to='/all-movies' className='hover:text-blue-500 transition-colors duration-300'>All Movies</Link></li>
        </ul>
        <ul className="w-full h-full flex flex-col items-center justify-evenly text-slate-200">
          <li><Link to='/' className='hover:text-blue-500 transition-colors duration-300'>Home</Link></li>
          <li><Link to='/categories' className='hover:text-blue-500 transition-colors duration-300'>Categories</Link></li>
          <li><Link to='/all-movies' className='hover:text-blue-500 transition-colors duration-300'>All Movies</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default MainFooter;
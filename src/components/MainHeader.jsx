import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="p-3 bg-black bg-blue-950 flex items-center fixed top-0 w-full">
      <h1 className="text-3xl font-sans text-slate-200 flex-none w-1/2">Movie Match.</h1>
      <nav className="flex-1 w-1/2">
        <ul className="flex items-center justify-around text-slate-200">
          <li><Link to='/' className='hover:text-blue-500 transition-colors duration-300'>Home</Link></li>
          <li><Link to='/all-movies' className='hover:text-blue-500 transition-colors duration-300'>All Movies</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
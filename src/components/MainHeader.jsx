import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="p-3 bg-black bg-blue-950 flex items-center">
      <h1 className="text-3xl font-sans text-slate-200 flex-none w-1/4">Movie Match.</h1>
      <nav className="flex-1 w-9/12">
        <ul className="flex items-center justify-evenly text-slate-200">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/movies'>Movies</Link></li>
          <li><Link to='/more'>More</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
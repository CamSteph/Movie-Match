import React from 'react';

const MainHeader = () => {
  return (
    <header className="p-3 bg-black bg-blue-950 flex items-center">
      <h1 className="text-3xl font-sans text-slate-200 flex-none">Movie Match.</h1>
      <nav className="flex-1">
        <ul className="flex items-center justify-evenly text-slate-200">
          <li>Home</li>
          <li>Movies</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
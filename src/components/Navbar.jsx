// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="flex space-x-4">
        <a href="/" className="text-white hover:text-purple-400">Ask</a>
        <a href="/playground" className="text-gray-500 hover:text-purple-400">Playground</a>
        <a href="#" className="text-gray-500 hover:text-purple-400">Code</a>
      </div>
      <div className="flex space-x-4">
        {/* <a href="#" className="text-gray-500 hover:text-purple-400 disabled:bg-gray-500">Sign In</a> */}
      </div>
    </nav>
  );
}

export default Navbar;

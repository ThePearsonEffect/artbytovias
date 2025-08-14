import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Art by Tovias</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/bookstore" className="text-gray-700 hover:text-blue-500 transition-colors">BookStore</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

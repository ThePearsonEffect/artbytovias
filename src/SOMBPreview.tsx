import React from 'react';
import { Link } from 'react-router-dom';

export default function SOMBPreview() {
  return (
    <Link to="/lankybois">
      <button className="group px-6 py-3 bg-pink-400 text-black font-semibold rounded-xl shadow hover:scale-105 transition-transform relative overflow-hidden">
        <span className="z-10 relative">LANKY BOIS</span>
        <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-xs italic text-white opacity-70 group-hover:bottom-2 transition-all duration-300">
          SOMB: Shirt Off My Back
        </span>
      </button>
    </Link>
  );
}

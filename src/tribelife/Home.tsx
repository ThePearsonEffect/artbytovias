// File: src/lankybois/Home.tsx

import React from 'react';
import LankyBoisHome from './lankybois/Home';

const LankyBoisHome = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundColor: '#00AA8D', // Tribe Deep Teal
        backgroundImage: 'url(/images/the-artivist-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1 className="text-5xl font-bold text-[#FACC15]">Lanky Bois</h1>
      <p className="mt-4 text-lg text-white font-light tracking-widest uppercase">
        Shirt Off My Back — One Act Can Change a Life
      </p>
<Route path="/lankybois" element={<LankyBoisHome />} />


      <button className="mt-8 px-6 py-3 bg-[#FFD700] text-black font-bold rounded hover:scale-105 transition-all duration-300 shadow-lg">
        Explore the Mission
      </button>
    </div>
  );
};

export default LankyBoisHome;

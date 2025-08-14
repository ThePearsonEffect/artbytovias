import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image or Video */}
      <img
        src="/art-by-tovias-hero.png"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          THE CREATIVE UNIVERSE
        </motion.h1>

        <motion.p
          className="mt-2 text-sm sm:text-lg md:text-xl text-yellow-100 italic max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Three Brands. One Portal. Purpose-Built Presence.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/artbytovias">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition-all hover:scale-105 focus:ring-4 focus:ring-yellow-500/50">
              ART BY TOVIAS
            </button>
          </Link>

          <Link to="/lankybois">
            <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow hover:bg-pink-400 transition-all hover:scale-105 focus:ring-4 focus:ring-pink-300/50">
              LANKY BOIS
            </button>
          </Link>

          <Link to="/tribelife">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-400 transition-all hover:scale-105 focus:ring-4 focus:ring-blue-300/50">
              TRIBE LIFE
            </button>
          </Link>
        </motion.div>

        <p className="text-sm text-gray-300 mt-4 italic animate-fade-in delay-500">
          Choose your experience.
        </p>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce text-yellow-300 text-3xl">⌄</div>
      </div>

      {/* Signature Logo */}
      <img
        src="/PBTovias_gold_optimized.png"
        alt="Art By Tovias Signature"
        className="absolute bottom-4 right-4 w-[100px] opacity-80 z-20"
      />
    </div>
  );
}

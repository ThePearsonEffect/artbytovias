import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <img
        src="/art-by-tovias-hero.png"
        alt="Art By Tovias Background"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-yellow-400 animate-fade-in">
          ART BY TOVIAS
        </h1>
        <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-yellow-200 italic animate-fade-in delay-200">
          Where vision becomes vibration
        </p>
        <Link
          to="/artbytovias"
          className="mt-8 sm:mt-10 min-w-[200px] text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 animate-fade-in delay-500"
        >
          ENTER GALLERY
        </Link>
      </div>

      <img
        src="/PBTovias_gold_optimized.png"
        alt="Art By Tovias Signature"
        className="absolute bottom-4 right-4 w-[100px] opacity-80"
      />
    </div>
  )
}
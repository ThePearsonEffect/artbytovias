
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581088507564-84c73eb4a73b?q=80&w=1000" 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Artistry in Every Stitch, Page, and Frame
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Discover our curated collection of artisan clothing, insightful books, and stunning photography that captures moments of beauty and truth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/shop" 
              className="px-8 py-3 bg-shop-accent text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Shop Collection
            </Link>
            <Link 
              to="/donate" 
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md font-medium hover:bg-white/30 transition-colors"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

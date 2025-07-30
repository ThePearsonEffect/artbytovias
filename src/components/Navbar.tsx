
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold text-shop-charcoal">
          ARTISAN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-shop-accent' : ''}`}>
            Home
          </Link>
          <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'text-shop-accent' : ''}`}>
            Shop
          </Link>
          <Link to="/tribe-life" className={`nav-link ${isActive('/tribe-life') ? 'text-shop-accent' : ''}`}>
            Tribe Life
          </Link>
          <Link to="/lanky-bois" className={`nav-link ${isActive('/lanky-bois') ? 'text-shop-accent' : ''}`}>
            Lanky Bois
          </Link>
          <Link to="/tovias-sole" className={`nav-link ${isActive('/tovias-sole') ? 'text-shop-accent' : ''}`}>
            Tovias Solé
          </Link>
          <Link to="/donate" className={`nav-link ${isActive('/donate') ? 'text-shop-accent' : ''}`}>
            Donate
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-shop-accent' : ''}`}>
            About
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingBag className="h-5 w-5 text-shop-charcoal hover:text-shop-accent transition-colors" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-shop-accent text-white px-1.5 py-0.5 text-xs rounded-full">
                {totalItems}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6 text-shop-charcoal" /> : 
              <Menu className="h-6 w-6 text-shop-charcoal" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-lg ${isActive('/') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-lg ${isActive('/shop') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Shop
            </Link>
            <Link 
              to="/tribe-life" 
              className={`text-lg ${isActive('/tribe-life') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Tribe Life
            </Link>
            <Link 
              to="/lanky-bois" 
              className={`text-lg ${isActive('/lanky-bois') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Lanky Bois
            </Link>
            <Link 
              to="/tovias-sole" 
              className={`text-lg ${isActive('/tovias-sole') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Tovias Solé
            </Link>
            <Link 
              to="/donate" 
              className={`text-lg ${isActive('/donate') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              Donate
            </Link>
            <Link 
              to="/about" 
              className={`text-lg ${isActive('/about') ? 'text-shop-accent font-medium' : 'text-shop-charcoal'}`}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

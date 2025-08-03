
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-shop-charcoal text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl mb-4 font-semibold">ARTISAN</h3>
            <p className="text-gray-300 mb-4">
              Curated clothing, inspiring books, and transformative life coaching for authentic living.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop/clothing" className="text-gray-300 hover:text-white transition">Clothing</Link></li>
              <li><Link to="/shop/books" className="text-gray-300 hover:text-white transition">Books</Link></li>
              <li><Link to="/tribe-life" className="text-gray-300 hover:text-white transition">Life Coaching</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Info</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-lg">Connect</h4>
            <div className="space-y-4">
              <p className="text-gray-300">Sign up for our newsletter to receive updates on new releases and special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-white/10 rounded-l outline-none focus:bg-white/20 transition-colors"
                />
                <button className="bg-shop-accent px-4 py-2 rounded-r text-white font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ARTISAN. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

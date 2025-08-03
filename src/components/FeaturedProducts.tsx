
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';

// Custom featured products with your actual items
const featuredItems = [
  {
    id: 'featured-shirt',
    name: 'Signature Word Cloud Hoodie',
    category: 'Clothing',
    price: 68,
    description: 'Premium pullover hoodie with the iconic Lanky Bois word cloud design.',
    imageSrc: '/images/5bfd11a8-6a41-43a9-a565-36fe34aaff68.png',
    link: '/lanky-bois'
  },
  {
    id: 'featured-book-1',
    name: 'The Poet, The Man, The Idea',
    category: 'Books',
    price: 22.99,
    description: 'An intimate look at the creative process and the evolution of an artist.',
    imageSrc: '/images/0df0a0fb-66cc-49e2-bed9-c45b60289914.png',
    link: '/tovias-sole'
  },
  {
    id: 'featured-book-2',
    name: 'An Outward Expression of My Inward Love',
    category: 'Books', 
    price: 19.99,
    description: 'A deeply personal collection of poetry exploring love and vulnerability.',
    imageSrc: '/images/5e8b4822-2622-4556-a45b-bc223e27dde5.png',
    link: '/tovias-sole'
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-display font-bold text-shop-charcoal">Featured Items</h2>
          <Link 
            to="/shop" 
            className="flex items-center text-shop-accent hover:text-shop-taupe transition-colors"
          >
            View all products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map(item => (
            <div key={item.id} className="product-card group animate-fade-in">
              <Link to={item.link} className="block overflow-hidden rounded-md">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 p-4"
                  />
                </div>
              </Link>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-shop-charcoal">
                      <Link to={item.link} className="hover:underline">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-shop-taupe">{item.category}</p>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                
                <Button 
                  onClick={() => addToCart({
                    id: item.id,
                    name: item.name,
                    category: item.category.toLowerCase() as 'clothing' | 'books' | 'photos',
                    price: item.price,
                    description: item.description,
                    imageSrc: item.imageSrc
                  })}
                  className="w-full mt-3 bg-shop-taupe hover:bg-shop-charcoal text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

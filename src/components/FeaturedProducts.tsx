
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  
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
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

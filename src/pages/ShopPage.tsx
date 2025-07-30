
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products, getProductsByCategory } from '../data/products';

const ShopPage = () => {
  const { category } = useParams();
  const [displayProducts, setDisplayProducts] = useState(products);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (category) {
      setDisplayProducts(getProductsByCategory(category));
    } else {
      setDisplayProducts(products);
    }
  }, [category]);
  
  const getCategoryTitle = () => {
    if (!category) return 'All Products';
    
    switch(category) {
      case 'clothing': return 'Clothing Collection';
      case 'books': return 'Books Collection';
      case 'photos': return 'Photography Collection';
      default: return 'Products';
    }
  };
  
  return (
    <Layout className="bg-shop-cream">
      <div className="container py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-display font-bold text-shop-charcoal">
            {getCategoryTitle()}
          </h1>
          {category && (
            <p className="mt-3 text-shop-charcoal/70">
              {category === 'clothing' && 'Unique, handcrafted apparel that combines comfort with artistic expression.'}
              {category === 'books' && 'Thought-provoking books that inspire creativity and personal growth.'}
              {category === 'photos' && 'Limited edition prints capturing moments of beauty in the everyday world.'}
            </p>
          )}
        </div>
        
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-shop-charcoal/70">
              No products found in this category.
            </h3>
            <p className="mt-2 text-shop-charcoal/50">
              Try another category or check back later for new arrivals.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ShopPage;

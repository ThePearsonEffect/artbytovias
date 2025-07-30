
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '../components/Layout';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
    
    window.scrollTo(0, 0);
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout className="bg-shop-cream">
      <div className="container py-12">
        <Link 
          to={`/shop/${product.category}`} 
          className="inline-flex items-center text-shop-charcoal/70 mb-8 hover:text-shop-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to {product.category}
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-shop-charcoal mb-2">
              {product.name}
            </h1>
            
            <p className="text-shop-taupe capitalize mb-4">{product.category}</p>
            
            <p className="text-2xl font-medium text-shop-charcoal mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-shop-charcoal/80 mb-8">
              {product.description}
            </p>
            
            {/* Product Specs */}
            {product.details && (
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Details</h3>
                <ul className="space-y-2">
                  {product.details.material && (
                    <li className="flex">
                      <span className="w-32 font-medium">Material:</span>
                      <span>{product.details.material}</span>
                    </li>
                  )}
                  {product.details.size && (
                    <li className="flex">
                      <span className="w-32 font-medium">Size:</span>
                      <span>{product.details.size}</span>
                    </li>
                  )}
                  {product.details.dimensions && (
                    <li className="flex">
                      <span className="w-32 font-medium">Dimensions:</span>
                      <span>{product.details.dimensions}</span>
                    </li>
                  )}
                  {product.details.pages && (
                    <li className="flex">
                      <span className="w-32 font-medium">Pages:</span>
                      <span>{product.details.pages}</span>
                    </li>
                  )}
                  {product.details.format && (
                    <li className="flex">
                      <span className="w-32 font-medium">Format:</span>
                      <span>{product.details.format}</span>
                    </li>
                  )}
                  {product.details.publishDate && (
                    <li className="flex">
                      <span className="w-32 font-medium">Published:</span>
                      <span>{product.details.publishDate}</span>
                    </li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border border-shop-sand rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 hover:bg-shop-sand/20 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-l border-r border-shop-sand min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 hover:bg-shop-sand/20 transition-colors"
                  disabled={quantity >= 10}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-shop-accent hover:bg-shop-accent/90 text-white py-6 text-lg"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

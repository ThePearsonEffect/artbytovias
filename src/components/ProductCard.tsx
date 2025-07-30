
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card group animate-fade-in">
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-md">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-shop-charcoal">
              <Link to={`/product/${product.id}`} className="hover:underline">
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-shop-taupe">{product.category}</p>
          </div>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
        
        <Button 
          onClick={() => addToCart(product)}
          className="w-full mt-3 bg-shop-taupe hover:bg-shop-charcoal text-white"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

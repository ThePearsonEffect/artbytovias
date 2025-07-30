
import { Link } from 'react-router-dom';
import { Trash, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '../components/Layout';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container py-16">
          <h1 className="text-3xl font-display font-bold mb-6">Your Cart</h1>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-shop-charcoal/70 mb-6">
              It looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              to="/shop" 
              className="inline-block px-6 py-3 bg-shop-accent text-white rounded-md hover:bg-shop-accent/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-display font-bold mb-8">Your Cart ({totalItems} items)</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-6 border-b last:border-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-24">
                      <img
                        src={item.product.imageSrc}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">
                            <Link to={`/product/${item.product.id}`} className="hover:text-shop-accent">
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-shop-taupe capitalize">{item.product.category}</p>
                        </div>
                        <p className="font-medium">${item.product.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <label className="mr-3 text-sm">Qty:</label>
                          <select
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="border border-shop-sand rounded px-2 py-1"
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-shop-charcoal/70 hover:text-shop-accent flex items-center transition-colors"
                        >
                          <Trash className="h-4 w-4 mr-1" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-shop-charcoal/70">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-shop-charcoal/70">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-shop-sand my-4 pt-4">
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button className="w-full bg-shop-accent hover:bg-shop-accent/90 text-white flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <div className="mt-6">
                <Link 
                  to="/shop" 
                  className="text-shop-accent hover:underline flex items-center justify-center"
                >
                  <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

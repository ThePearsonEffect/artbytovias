
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useCart } from '../contexts/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (cartItems.length === 0) {
    navigate('/shop');
    return null;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, we would process the payment here
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      
      clearCart();
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                  />
                </div>
              </div>
              
              {/* Shipping Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                <div>
                  <label className="block text-sm font-medium mb-1">Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">City*</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">State/Province*</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">ZIP / Postal Code*</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Country*</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="input-field w-full"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-4">Payment Information</h2>
                <div>
                  <label className="block text-sm font-medium mb-1">Name on Card*</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Card Number*</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="input-field w-full"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiration Date*</label>
                    <input
                      type="text"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      className="input-field w-full"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV*</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      className="input-field w-full"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-shop-accent hover:bg-shop-accent/90 text-white py-3"
              >
                {isSubmitting ? 'Processing...' : `Complete Order - $${totalPrice.toFixed(2)}`}
              </Button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="divide-y divide-shop-sand">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="py-3 flex justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded overflow-hidden mr-3">
                        <img
                          src={item.product.imageSrc}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-shop-taupe">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-shop-sand mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-shop-charcoal/70">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-shop-charcoal/70">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-shop-charcoal/70">Taxes</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="border-t border-shop-sand pt-2 mt-2 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;

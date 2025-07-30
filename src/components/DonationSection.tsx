
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const donationAmounts = [25, 50, 100, 250];

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  
  const handleDonate = () => {
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
    
    if (amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your support!",
      description: `Your donation of $${amount.toFixed(2)} will help us continue our work.`,
    });
    
    // Reset form
    setSelectedAmount(null);
    setCustomAmount('');
    
    // In a real app, we would process the payment here
    console.log(`Processing donation of $${amount}`);
  };
  
  return (
    <section className="py-16 bg-shop-sand/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-shop-charcoal mb-4">Support Our Work</h2>
          <p className="text-lg text-shop-charcoal/80 mb-8">
            Your donations help us continue creating unique pieces, publishing meaningful content, and capturing moments through photography that tell important stories.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-6">Make a Donation</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {donationAmounts.map(amount => (
                <button
                  key={amount}
                  className={`py-3 rounded-md border ${
                    selectedAmount === amount 
                      ? 'border-shop-accent bg-shop-accent/10 text-shop-accent' 
                      : 'border-shop-sand text-shop-charcoal hover:border-shop-taupe'
                  } transition-colors`}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-shop-charcoal/60">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-2 border border-shop-sand rounded-md focus:outline-none focus:ring-2 focus:ring-shop-accent"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleDonate}
              className="w-full bg-shop-accent hover:bg-shop-accent/90 text-white py-3"
            >
              Donate Now
            </Button>
            
            <p className="mt-4 text-sm text-shop-charcoal/60">
              All donations are secure and encrypted. You can also <a href="#" className="text-shop-accent hover:underline">donate via PayPal</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

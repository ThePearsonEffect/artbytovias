import { useState } from 'react';
import { ShoppingBag, Heart, Truck, RotateCcw, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { lankyBoisProducts, getLankyBoisProductsByCategory } from '../data/lankyBoisProducts';
import Layout from '../components/Layout';

const LankyBoisPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = getLankyBoisProductsByCategory(activeCategory);

  return (
    <Layout className="bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-display font-bold text-neutral-900 mb-6">
              Lanky Bois
            </h1>
            <h2 className="text-2xl text-neutral-700 mb-8">
              Clothing for the Comfortably Different
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Designed for anyone who values comfort over conformity. 
              Our pieces embrace the beauty of being different, with cuts that celebrate 
              your unique proportions and style that speaks to your authentic self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Collection
              </Button>
              <Button variant="outline" className="border-neutral-900 text-neutral-900 hover:bg-neutral-100">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                Made for the Unique
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Finding clothes that fit your body and reflect your style shouldn't be a treasure hunt. 
                We started this brand from the shared frustration of constantly adjusting ill-fitting garments, 
                searching endlessly for the right proportions, and settling for pieces that just don't work for real bodies. 
                Whether you're tall, short, curvy, straight, or anywhere in between, everyone deserves clothing 
                that fits beautifully and feels authentically you.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Every piece is thoughtfully designed with extended proportions, refined fits, 
                and comfortable fabrics that move with you. We celebrate the beauty of being 
                different and create clothing that makes you feel confident in your own skin.
              </p>
              <Button variant="outline" className="border-neutral-900 text-neutral-900">
                Read Our Story
              </Button>
            </div>
            <div className="bg-neutral-100 aspect-square rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center text-neutral-900 mb-12">
            Shop by Category
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 
                  "bg-neutral-900 text-white" : 
                  "border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-neutral-900 text-white z-10">
                      New
                    </Badge>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Heart className="h-4 w-4 text-neutral-600" />
                  </button>
                  <button 
                    className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                  >
                    <Eye className="h-4 w-4 text-neutral-600" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-lg font-semibold text-neutral-900 mb-2">${product.price}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <span key={index} className="text-xs text-neutral-500">
                        {color}{index < Math.min(product.colors.length - 1, 2) ? ',' : ''}
                      </span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-neutral-500">+{product.colors.length - 3} more</span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mb-3">
                    Sizes: {product.sizes.join(', ')}
                  </p>
                  
                  {/* Product Details Expandable */}
                  {selectedProduct === product.id && (
                    <div className="mt-3 p-3 bg-neutral-50 rounded-md animate-fade-in">
                      <p className="text-sm text-neutral-700 mb-2">{product.description}</p>
                      <div className="space-y-1">
                        <p className="text-xs text-neutral-600"><span className="font-medium">Material:</span> {product.material}</p>
                        <p className="text-xs text-neutral-600"><span className="font-medium">Fit:</span> {product.fit}</p>
                        <p className="text-xs text-neutral-600">
                          <span className="font-medium">Status:</span> 
                          <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                            {product.inStock ? ' In Stock' : ' Out of Stock'}
                          </span>
                        </p>
                      </div>
                      <Button className="w-full mt-3 bg-neutral-900 hover:bg-neutral-800 text-white" size="sm">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-neutral-900 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">Free Shipping</h3>
              <p className="text-neutral-600">Free shipping on orders over $75. Fast, reliable delivery.</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-12 w-12 text-neutral-900 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">Easy Returns</h3>
              <p className="text-neutral-600">30-day return policy. No questions asked.</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-neutral-900 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">Quality Promise</h3>
              <p className="text-neutral-600">Premium materials and construction in every piece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide CTA */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Find Your Perfect Fit
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Not sure about sizing? Check out our detailed size guide designed specifically for lanky builds.
          </p>
          <Button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3">
            View Size Guide
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LankyBoisPage;

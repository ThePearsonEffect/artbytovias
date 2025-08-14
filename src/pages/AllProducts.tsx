import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, Search } from 'lucide-react';
import { products, getTShirts, getBooks } from '../data/products';
import { useCart, Product } from '../CartContext';

export default function AllProductsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'tshirts') return matchesSearch && product.category === 'apparel' && product.name.toLowerCase().includes('tee');
    if (filter === 'hoodies') return matchesSearch && product.category === 'apparel' && product.name.toLowerCase().includes('hoodie');
    if (filter === 'books') return matchesSearch && product.category === 'books';
    if (filter === 'lankybois') return matchesSearch && product.collection === 'lankybois';
    if (filter === 'toviassole') return matchesSearch && product.collection === 'toviassole';
    
    return matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">All Products</h1>
          <p className="text-xl text-gray-300">Discover T-shirts, Hoodies, and Books from Tovias Universe</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-yellow-600 hover:text-yellow-800 font-semibold">
            ← Back to Home
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">Cart ({useCart().cart.length})</span>
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="all">All Products ({products.length})</option>
              <option value="tshirts">T-Shirts ({getTShirts().length})</option>
              <option value="hoodies">Hoodies ({products.filter(p => p.name.toLowerCase().includes('hoodie')).length})</option>
              <option value="books">Books ({getBooks().length})</option>
              <option value="lankybois">Lanky Bois ({products.filter(p => p.collection === 'lankybois').length})</option>
              <option value="toviassole">Tovias Solé ({products.filter(p => p.collection === 'toviassole').length})</option>
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center group-hover:opacity-75"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Collection Badge */}
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${
                  product.collection === 'lankybois' 
                    ? 'bg-pink-100 text-pink-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {product.collection === 'lankybois' ? 'Lanky Bois' : 'Tovias Solé'}
                </span>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                {/* Price and Stock */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.inStock ? (
                    <span className="text-green-600 text-sm font-semibold">In Stock</span>
                  ) : (
                    <span className="text-red-600 text-sm font-semibold">Out of Stock</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    product.inStock
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Collection Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{products.filter(p => p.collection === 'lankybois').length}</div>
              <div className="text-sm text-gray-600 font-semibold">Lanky Bois Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{getBooks().length}</div>
              <div className="text-sm text-gray-600 font-semibold">Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{getTShirts().length}</div>
              <div className="text-sm text-gray-600 font-semibold">T-Shirts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{products.filter(p => p.name.toLowerCase().includes('hoodie')).length}</div>
              <div className="text-sm text-gray-600 font-semibold">Hoodies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

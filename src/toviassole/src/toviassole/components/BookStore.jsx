import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Star, Heart, User, Menu, X, Plus, Minus, BookOpen, Filter } from 'lucide-react';

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sortBy, setSortBy] = useState('title');

  const sampleBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, category: "fiction", image: "https://via.placeholder.com/200x300/4f46e5/ffffff?text=The+Great+Gatsby", rating: 4.5, description: "A classic American novel about the Jazz Age and the American Dream.", inStock: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.99, category: "fiction", image: "https://via.placeholder.com/200x300/dc2626/ffffff?text=To+Kill+a+Mockingbird", rating: 4.8, description: "A gripping tale of racial injustice and childhood in the American South.", inStock: true },
    { id: 3, title: "1984", author: "George Orwell", price: 13.99, category: "fiction", image: "https://via.placeholder.com/200x300/374151/ffffff?text=1984", rating: 4.7, description: "A dystopian social science fiction novel about totalitarianism.", inStock: true },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99, category: "fiction", image: "https://via.placeholder.com/200x300/059669/ffffff?text=Catcher+in+the+Rye", rating: 4.2, description: "A controversial novel about teenage rebellion and alienation.", inStock: true },
    { id: 5, title: "Sapiens", author: "Yuval Noah Harari", price: 16.99, category: "non-fiction", image: "https://via.placeholder.com/200x300/7c3aed/ffffff?text=Sapiens", rating: 4.6, description: "A brief history of humankind and our journey to the modern world.", inStock: true },
    { id: 6, title: "The Lean Startup", author: "Eric Ries", price: 15.99, category: "business", image: "https://via.placeholder.com/200x300/ea580c/ffffff?text=The+Lean+Startup", rating: 4.3, description: "How today's entrepreneurs use continuous innovation to create successful businesses.", inStock: false },
    { id: 7, title: "Dune", author: "Frank Herbert", price: 17.99, category: "sci-fi", image: "https://via.placeholder.com/200x300/0891b2/ffffff?text=Dune", rating: 4.4, description: "Epic science fiction novel set in a distant future galactic empire.", inStock: true },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", price: 12.99, category: "fantasy", image: "https://via.placeholder.com/200x300/16a34a/ffffff?text=The+Hobbit", rating: 4.7, description: "A fantasy adventure about a hobbit's unexpected journey.", inStock: true }
  ];

  useEffect(() => {
    setBooks(sampleBooks);
  }, []);

  const categories = ['all', 'fiction', 'non-fiction', 'business', 'sci-fi', 'fantasy'];

  const filteredAndSortedBooks = books
    .filter(book =>
      (selectedCategory === 'all' || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.title.localeCompare(b.title);
      }
    });

  const addToCart = (book) => {
    const existingItem = cart.find(item => item.id === book.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => setCart(cart.filter(item => item.id !== bookId));

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity === 0) removeFromCart(bookId);
    else setCart(cart.map(item => item.id === bookId ? { ...item, quantity: newQuantity } : item));
  };

  const toggleWishlist = (book) => {
    const isInWishlist = wishlist.some(item => item.id === book.id);
    setWishlist(isInWishlist ? wishlist.filter(item => item.id !== book.id) : [...wishlist, book]);
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    if (hasHalfStar) stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Insert UI structure here or import from another file */}
      <h1 className="text-3xl font-bold text-center py-10">BookStore Component</h1>
    </div>
  );
};

export default BookStore;

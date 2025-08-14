import { Product } from '../CartContext';

export const products: Product[] = [
  // Lanky Bois T-Shirts and Hoodies
  {
    id: 1,
    name: "Lanky Bois Dice Tee",
    price: 24.99,
    image: "/images/lanky_dice_tee.jpg",
    description: "Unisex Premium T-Shirt with cube design made of 'Lanky Bois' typography in multicolor. Perfect for tall frames.",
    category: "apparel",
    collection: "lankybois",
    inStock: true
  },
  {
    id: 2,
    name: "Lanky Bois Fire Tee", 
    price: 24.99,
    image: "/images/lanky_fire_tee.jpg",
    description: "Bright yellow unisex premium t-shirt with word art flame/mushroom cloud design featuring 'Lanky Bois' text.",
    category: "apparel",
    collection: "lankybois",
    inStock: true
  },
  {
    id: 3,
    name: "Lanky Bois Streetwear Tee",
    price: 26.99,
    image: "/images/lanky_streetwear_tee.jpg", 
    description: "Heather gray unisex premium t-shirt with illustration of character standing over 'Lanky Bois' text.",
    category: "apparel",
    collection: "lankybois",
    inStock: true
  },
  {
    id: 4,
    name: "Lanky Bois Explosion Hoodie",
    price: 39.99,
    image: "/images/lanky_explosion_hoodie.jpg",
    description: "White unisex hoodie with mushroom cloud word art featuring Lanky Bois text. 80% cotton, 20% polyester blend.",
    category: "apparel",
    collection: "lankybois", 
    inStock: true
  },
  {
    id: 5,
    name: "Lanky Bois Unity Hoodie",
    price: 39.99,
    image: "/images/lanky_unity_hoodie.jpg",
    description: "White unisex hoodie with blue power fist composed of 'Lanky Bois' text. Perfect for making a statement.",
    category: "apparel",
    collection: "lankybois",
    inStock: true
  },

  // Tovias Solé Books
  {
    id: 6,
    name: "The Great Gatsby",
    price: 12.99,
    image: "https://via.placeholder.com/200x300/4f46e5/ffffff?text=The+Great+Gatsby",
    description: "A classic American novel about the Jazz Age and the American Dream.",
    category: "books",
    collection: "toviassole",
    inStock: true
  },
  {
    id: 7,
    name: "To Kill a Mockingbird", 
    price: 14.99,
    image: "https://via.placeholder.com/200x300/dc2626/ffffff?text=To+Kill+a+Mockingbird",
    description: "A gripping tale of racial injustice and childhood in the American South.",
    category: "books",
    collection: "toviassole",
    inStock: true
  },
  {
    id: 8,
    name: "1984",
    price: 13.99,
    image: "https://via.placeholder.com/200x300/374151/ffffff?text=1984", 
    description: "A dystopian social science fiction novel about totalitarianism.",
    category: "books",
    collection: "toviassole",
    inStock: true
  },
  {
    id: 9,
    name: "The Catcher in the Rye",
    price: 11.99,
    image: "https://via.placeholder.com/200x300/059669/ffffff?text=Catcher+in+the+Rye",
    description: "A controversial novel about teenage rebellion and alienation.",
    category: "books", 
    collection: "toviassole",
    inStock: true
  },
  {
    id: 10,
    name: "Sapiens",
    price: 16.99,
    image: "https://via.placeholder.com/200x300/7c3aed/ffffff?text=Sapiens",
    description: "A brief history of humankind and our journey to the modern world.",
    category: "books",
    collection: "toviassole",
    inStock: true
  },
  {
    id: 11,
    name: "The Lean Startup",
    price: 15.99,
    image: "https://via.placeholder.com/200x300/ea580c/ffffff?text=The+Lean+Startup",
    description: "How today's entrepreneurs use continuous innovation to create successful businesses.",
    category: "books",
    collection: "toviassole",
    inStock: false
  },
  {
    id: 12,
    name: "Dune", 
    price: 17.99,
    image: "https://via.placeholder.com/200x300/0891b2/ffffff?text=Dune",
    description: "Epic science fiction novel set in a distant future galactic empire.",
    category: "books",
    collection: "toviassole",
    inStock: true
  },
  {
    id: 13,
    name: "The Hobbit",
    price: 12.99,
    image: "https://via.placeholder.com/200x300/16a34a/ffffff?text=The+Hobbit",
    description: "A fantasy adventure about a hobbit's unexpected journey.",
    category: "books",
    collection: "toviassole", 
    inStock: true
  }
];

// Utility functions to filter products
export const getProductsByCollection = (collection: string) =>
  products.filter(product => product.collection === collection);

export const getProductsByCategory = (category: string) =>
  products.filter(product => product.category === category);

export const getTShirts = () => 
  products.filter(product => 
    product.category === "apparel" && 
    product.name.toLowerCase().includes("tee")
  );

export const getBooks = () =>
  products.filter(product => product.category === "books");

export const getLankyBoisProducts = () =>
  getProductsByCollection("lankybois");

export const getToviassoleProducts = () =>
  getProductsByCollection("toviassole");


export type Product = {
  id: string;
  name: string;
  category: 'clothing' | 'books' | 'photos';
  price: number;
  description: string;
  imageSrc: string;
  featured?: boolean;
  details?: {
    dimensions?: string;
    material?: string;
    pages?: number;
    size?: string;
    format?: string;
    publishDate?: string;
  };
};

export const products: Product[] = [
  {
    id: 'clothing-1',
    name: 'Cotton Graphic Tee',
    category: 'clothing',
    price: 29.99,
    description: 'Premium cotton graphic tee with unique artistic design. Comfortable fit with durable print that maintains its quality after multiple washes.',
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
    featured: true,
    details: {
      material: '100% organic cotton',
      size: 'S, M, L, XL',
    }
  },
  {
    id: 'clothing-2',
    name: 'Designer Hoodie',
    category: 'clothing',
    price: 59.99,
    description: 'Cozy designer hoodie with artistic embellishments. Perfect for casual outings or relaxing at home.',
    imageSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000',
    details: {
      material: '80% cotton, 20% polyester',
      size: 'S, M, L, XL',
    }
  },
  {
    id: 'clothing-3',
    name: 'Vintage Denim Jacket',
    category: 'clothing',
    price: 89.99,
    description: 'Classic denim jacket with artistic modifications. Each piece is unique with hand-detailed elements.',
    imageSrc: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000',
    details: {
      material: '100% denim',
      size: 'S, M, L',
    }
  },
  {
    id: 'book-1',
    name: 'Creative Journeys',
    category: 'books',
    price: 24.99,
    description: 'A collection of personal essays and photographs documenting creative explorations and insights from years of artistic practice.',
    imageSrc: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000',
    featured: true,
    details: {
      pages: 240,
      format: 'Hardcover',
      publishDate: 'June 2023',
    }
  },
  {
    id: 'book-2',
    name: 'Photography Techniques',
    category: 'books',
    price: 34.99,
    description: 'A comprehensive guide to modern photography techniques with examples and step-by-step instructions.',
    imageSrc: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000',
    details: {
      pages: 312,
      format: 'Paperback',
      publishDate: 'August 2023',
    }
  },
  {
    id: 'book-3',
    name: 'Fashion Through Decades',
    category: 'books',
    price: 45.99,
    description: 'An illustrated journey through fashion evolution over the past century with analysis and historical context.',
    imageSrc: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000',
    details: {
      pages: 280,
      format: 'Hardcover',
      publishDate: 'March 2024',
    }
  },
  {
    id: 'photo-1',
    name: 'Urban Landscapes',
    category: 'photos',
    price: 79.99,
    description: 'Limited edition print capturing the essence of modern urban architecture and city life.',
    imageSrc: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1000',
    featured: true,
    details: {
      dimensions: '16" x 24"',
      format: 'Archival print',
    }
  },
  {
    id: 'photo-2',
    name: 'Natural Elements',
    category: 'photos',
    price: 69.99,
    description: 'Fine art photography print showcasing the beauty of natural landscapes and organic patterns.',
    imageSrc: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1000',
    details: {
      dimensions: '11" x 14"',
      format: 'Archival print',
    }
  },
  {
    id: 'photo-3',
    name: 'Abstract Compositions',
    category: 'photos',
    price: 89.99,
    description: 'Contemporary abstract photography exploring shape, color, and form through experimental techniques.',
    imageSrc: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000',
    details: {
      dimensions: '20" x 30"',
      format: 'Archival print',
    }
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

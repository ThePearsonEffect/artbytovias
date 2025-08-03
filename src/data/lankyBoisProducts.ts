export type LankyBoisProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'tops' | 'bottoms' | 'accessories';
  sizes: string[];
  colors: string[];
  description: string;
  material: string;
  fit: string;
  isNew?: boolean;
  inStock: boolean;
};

export const lankyBoisProducts: LankyBoisProduct[] = [
  {
    id: 'lb-001',
    name: 'Word Cloud Circle Tee',
    price: 32,
    image: '/images/f7e169da-480d-432f-90a3-a2207a1f22d3.png',
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Sunrise Yellow', 'Forest Green', 'Ocean Blue'],
    description: 'Bold statement tee featuring the Lanky Bois name in an artistic circular word cloud. Perfect for those who embrace being comfortably different.',
    material: '100% Ring-Spun Cotton',
    fit: 'Relaxed Fit - Extended Length',
    isNew: true,
    inStock: true
  },
  {
    id: 'lb-002',
    name: 'Signature Word Cloud Hoodie',
    price: 68,
    image: '/images/5bfd11a8-6a41-43a9-a565-36fe34aaff68.png',
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Pure White', 'Heather Grey', 'Midnight Black'],
    description: 'Premium pullover hoodie with the iconic Lanky Bois word cloud design. Soft fleece interior and extended sleeves for the perfect tall fit.',
    material: '80% Cotton, 20% Polyester Fleece',
    fit: 'Oversized Fit - Extra Long Sleeves',
    isNew: false,
    inStock: true
  },
  {
    id: 'lb-003',
    name: 'Skull Word Art Tee',
    price: 35,
    image: '/images/3609e6fa-01cb-41a7-99a6-6c3bfc273778.png',
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Electric Yellow', 'Crimson Red', 'Charcoal Grey'],
    description: 'Edgy artistic tee featuring Lanky Bois text arranged in a striking skull formation. For those who dare to be different.',
    material: '100% Premium Cotton Jersey',
    fit: 'Standard Fit - Extended Torso',
    isNew: true,
    inStock: true
  },
  {
    id: 'lb-004',
    name: 'Classic Logo Tee',
    price: 28,
    image: '/images/61f8fded-db6d-4f43-b466-850a23df1a32.png',
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Heather Grey', 'Vintage Black', 'Natural White'],
    description: 'Clean and classic Lanky Bois logo tee with minimalist design. The essential piece for any lanky wardrobe.',
    material: '100% Soft-Wash Cotton',
    fit: 'Tailored Fit - Tall Proportions',
    isNew: false,
    inStock: true
  },
  {
    id: 'lb-005',
    name: 'Blue Gradient Word Hoodie',
    price: 72,
    image: '/images/15d97090-2744-4b94-9f88-7e632cff8483.png',
    category: 'tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Cloud White', 'Sage Green', 'Deep Navy'],
    description: 'Premium hoodie featuring a stunning blue gradient word cloud design. Cozy comfort meets artistic expression.',
    material: '85% Cotton, 15% Polyester Blend',
    fit: 'Oversized Comfort - Extended Length',
    isNew: true,
    inStock: true
  }
];

export const getLankyBoisProductById = (id: string): LankyBoisProduct | undefined => {
  return lankyBoisProducts.find(product => product.id === id);
};

export const getLankyBoisProductsByCategory = (category: string): LankyBoisProduct[] => {
  if (category === 'all') return lankyBoisProducts;
  return lankyBoisProducts.filter(product => product.category === category);
};

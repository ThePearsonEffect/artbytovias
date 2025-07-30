
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Unique apparel pieces with artistic designs',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000',
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Curated collection of insightful books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000',
  },
  {
    id: 'photos',
    name: 'Photography',
    description: 'Limited edition prints and artistic photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000',
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-shop-cream">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-shop-charcoal">
          Explore Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop/${category.id}`}
              className="group overflow-hidden rounded-lg shadow-md relative h-80 card-hover"
            >
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-display font-medium mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md font-medium group-hover:bg-shop-accent transition-colors">
                  Shop Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;

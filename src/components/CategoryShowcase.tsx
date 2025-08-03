
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Unique apparel pieces with artistic designs',
    image: '/images/5bfd11a8-6a41-43a9-a565-36fe34aaff68.png', // Signature Word Cloud Hoodie
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Curated collection of insightful books',
    image: '/images/0df0a0fb-66cc-49e2-bed9-c45b60289914.png', // The Poet, The Man, The Idea book cover
  },
  {
    id: 'tribe-life',
    name: 'Tribe Life Coaching',
    description: 'Trained. Realigned. Inspired to become. Better today, brighter tomorrow.',
    image: '/images/tribe-life-coaching-logo.png', // New Tribe Life Coaching logo
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
              to={category.id === 'tribe-life' ? '/tribe-life' : `/shop/${category.id}`}
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
                  {category.id === 'tribe-life' ? 'Learn More' : 'Shop Collection'}
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

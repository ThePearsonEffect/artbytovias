
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductGallery from '../components/ProductGallery';
import DonationSection from '../components/DonationSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <ProductGallery />
      <DonationSection />
    </Layout>
  );
};

export default Index;

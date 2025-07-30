
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import DonationSection from '../components/DonationSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <DonationSection />
    </Layout>
  );
};

export default Index;

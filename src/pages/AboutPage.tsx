
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="relative py-20 bg-shop-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-shop-sand/30 to-transparent h-64"></div>
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-shop-charcoal mb-6">
              Our Story
            </h1>
            <p className="text-lg text-shop-charcoal/80">
              We started with a simple idea: to create meaningful products that express creativity 
              and tell stories that matter. Every piece we create is a personal journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532443603324-63df9724a8fc?q=80&w=1000" 
                alt="Studio workspace" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-shop-charcoal mb-4">
                Crafting with Purpose
              </h2>
              <p className="text-shop-charcoal/80 mb-4">
                From the beginning, our mission has been to create products that are not only beautiful and functional but also meaningful. 
                Each piece of clothing, every book, and all photographs are created with intention and purpose.
              </p>
              <p className="text-shop-charcoal/80 mb-4">
                We believe in the power of storytelling through different mediums, whether it's the fabric of a garment, 
                the pages of a book, or the frame of a photograph. These are all canvases for expression and connection.
              </p>
              <p className="text-shop-charcoal/80">
                Our commitment to quality and authenticity guides everything we do. We take pride in our craft and 
                the relationships we build with our community through our work.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-display font-bold text-shop-charcoal mb-4">
                Our Creative Process
              </h2>
              <p className="text-shop-charcoal/80 mb-4">
                Each product begins as an idea, a spark of inspiration drawn from life experiences, cultural observations, 
                and personal reflections. We carefully nurture these ideas through a process of research, sketching, and prototyping.
              </p>
              <p className="text-shop-charcoal/80 mb-4">
                For our clothing line, we select fabrics that tell their own stories – sustainable materials with unique textures and properties. 
                Our books are thoughtfully written and designed, often incorporating visual elements that complement the written word.
              </p>
              <p className="text-shop-charcoal/80">
                Our photographic work captures moments of beauty, truth, and connection that might otherwise go unnoticed in our busy world. 
                Each photograph is carefully composed and processed to preserve the authenticity of the moment while revealing its deeper significance.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=1000" 
                alt="Creative process" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-10 mb-24">
            <h2 className="text-3xl font-display font-bold text-center text-shop-charcoal mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-shop-sand/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-shop-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Authenticity</h3>
                <p className="text-shop-charcoal/70">
                  We believe in being true to ourselves and our vision, creating work that reflects genuine experiences and perspectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-shop-sand/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-shop-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-shop-charcoal/70">
                  We're committed to sustainable practices, considering environmental impact in our material choices and production methods.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-shop-sand/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-shop-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Community</h3>
                <p className="text-shop-charcoal/70">
                  We value connection and believe our work should foster community and meaningful conversations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-shop-charcoal mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-shop-charcoal/80 mb-8">
              We're grateful for everyone who supports our work, whether by purchasing our products, 
              making donations, or simply sharing our story. We invite you to be part of our creative journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/shop" 
                className="px-8 py-3 bg-shop-accent text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Explore Our Collection
              </a>
              <a 
                href="/donate" 
                className="px-8 py-3 bg-shop-taupe text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

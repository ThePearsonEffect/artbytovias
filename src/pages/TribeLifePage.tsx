import { useState } from 'react';
import { Calendar, Heart, Users, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '../components/Layout';

const TribeLifePage = () => {
  const [activeService, setActiveService] = useState('coaching');

  const services = [
    {
      id: 'coaching',
      title: '1:1 Spiritual Coaching',
      price: '$150/session',
      description: 'Personal transformation through deep spiritual work and consciousness expansion.',
      features: ['60-minute sessions', 'Personalized guidance', 'Energy healing', 'Homework & practices']
    },
    {
      id: 'group',
      title: 'Group Ceremonies',
      price: '$75/person',
      description: 'Powerful group experiences for collective healing and spiritual growth.',
      features: ['Monthly gatherings', 'Sacred space', 'Community support', 'Ritual & ceremony']
    },
    {
      id: 'retreat',
      title: 'Weekend Retreats',
      price: '$450/weekend',
      description: 'Immersive experiences for deep transformation and spiritual awakening.',
      features: ['2-day intensive', 'Accommodation included', 'Meals provided', 'Small groups (8-12)']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The spiritual coaching completely transformed my relationship with myself and my purpose.',
      rating: 5
    },
    {
      name: 'Marcus T.',
      text: 'The group ceremonies created a safe space for healing I never thought possible.',
      rating: 5
    },
    {
      name: 'Elena R.',
      text: 'The weekend retreat was exactly what my soul needed. Life-changing experience.',
      rating: 5
    }
  ];

  return (
    <Layout className="bg-gradient-to-b from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-display font-bold text-purple-900 mb-6">
              Tribe Life
            </h1>
            <h2 className="text-2xl text-purple-700 mb-8">
              Spiritual Coaching & Conscious Community
            </h2>
            <p className="text-lg text-purple-600 mb-10 leading-relaxed">
              Join a tribe of awakening souls on a journey of spiritual transformation. 
              Through personalized coaching, group ceremonies, and immersive retreats, 
              we create sacred space for your authentic self to emerge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Book a Session
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center text-purple-900 mb-12">
            Sacred Services
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeService === service.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader>
                  <CardTitle className="text-purple-900">{service.title}</CardTitle>
                  <p className="text-2xl font-bold text-purple-600">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-purple-600">
                        <Heart className="h-4 w-4 mr-2 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center text-purple-900 mb-12">
            Transformation Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-medium text-purple-900">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-purple-900 mb-6">
              Free Resource Library
            </h2>
            <p className="text-lg text-purple-600 mb-8">
              Access guided meditations, spiritual practices, and transformational content to support your journey.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Resources
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our tribe and discover the authentic, empowered version of yourself.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TribeLifePage;
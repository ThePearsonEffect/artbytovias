import { useState } from 'react';
import { Book, Play, Calendar, Download, ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '../components/Layout';

const ToviasSolePage = () => {
  const [activeTab, setActiveTab] = useState('books');

  const books = [
    {
      id: 1,
      title: 'An Outward Expression of My Inward Love',
      subtitle: 'Poetry from the Heart',
      price: 19.99,
      format: 'Paperback',
      pages: 156,
      publishDate: '2023',
      image: '/lovable-uploads/5e8b4822-2622-4556-a45b-bc223e27dde5.png',
      description: 'A deeply personal collection of poetry exploring love, vulnerability, and the human experience. Each poem is a window into the soul\'s most intimate expressions.',
      awards: ['Poetry Book of the Year 2023']
    },
    {
      id: 2,
      title: 'The Cover',
      subtitle: 'Stories Hidden in Plain Sight',
      price: 24.99,
      format: 'Hardcover',
      pages: 208,
      publishDate: '2023',
      image: '/lovable-uploads/0499924a-5a46-4167-bd2e-03e2ea1b8000.png',
      description: 'A powerful exploration of identity, perception, and the masks we wear. This collection challenges readers to look beyond the surface.',
      awards: ['Literary Excellence Award 2023']
    },
    {
      id: 3,
      title: 'The Poet, The Man, The Idea',
      subtitle: 'A Journey Through Creative Identity',
      price: 22.99,
      format: 'Paperback',
      pages: 184,
      publishDate: '2022',
      image: '/lovable-uploads/0df0a0fb-66cc-49e2-bed9-c45b60289914.png',
      description: 'An intimate look at the creative process and the evolution of an artist. Part memoir, part philosophy, this work examines the intersection of art and life.',
      awards: ['Best Creative Non-Fiction 2022']
    },
    {
      id: 4,
      title: 'Real Expression\'s of Words Never Heard',
      subtitle: 'Unspoken Truths in Verse',
      price: 18.99,
      format: 'Paperback',
      pages: 142,
      publishDate: '2024',
      image: '/lovable-uploads/b19e5385-c2b9-4a9c-96fe-fdadcf90ceb8.png',
      description: 'A raw and honest collection giving voice to the unspoken thoughts and feelings that dwell within us all. These words break the silence of unexpressed emotions.',
      awards: ['Emerging Voice Award 2024'],
      isNew: true
    }
  ];

  const artworks = [
    {
      id: 1,
      title: 'Urban Echoes Series',
      medium: 'Digital Photography',
      year: '2024',
      pieces: 12,
      price: 150,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Fractal Dreams',
      medium: 'Mixed Media',
      year: '2023',
      pieces: 8,
      price: 300,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Human + Machine',
      medium: 'AI-Assisted Art',
      year: '2024',
      pieces: 15,
      price: 200,
      image: '/placeholder.svg'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Creative Rebellion Workshop',
      date: 'March 15, 2024',
      location: 'Creative Arts Center, NYC',
      type: 'Workshop',
      price: 75
    },
    {
      id: 2,
      title: 'The Future of Digital Art',
      date: 'April 22, 2024',
      location: 'Tech Conference, San Francisco',
      type: 'Keynote',
      price: 0
    },
    {
      id: 3,
      title: 'Underground Culture Panel',
      date: 'May 8, 2024',
      location: 'Art Gallery District, Brooklyn',
      type: 'Panel Discussion',
      price: 25
    }
  ];

  const tabs = [
    { id: 'books', name: 'Published Works', icon: Book },
    { id: 'art', name: 'Visual Art', icon: Play },
    { id: 'events', name: 'Speaking & Events', icon: Calendar }
  ];

  return (
    <Layout className="bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-display font-bold text-amber-900 mb-6">
              Tovias Solé
            </h1>
            <h2 className="text-2xl text-amber-700 mb-8">
              Author, Artist & Creative Catalyst
            </h2>
            <p className="text-lg text-amber-600 mb-10 leading-relaxed">
              Exploring the intersection of art, technology, and human experience through 
              published works, visual art, and thought-provoking conversations. 
              Join me on a journey through the creative underground and emerging digital renaissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Book className="h-5 w-5 mr-2" />
                Explore Books
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-amber-900 mb-8">
              Artist Statement
            </h2>
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              "My work exists at the crossroads of rebellion and renaissance—challenging conventional 
              thinking while celebrating the emergence of new forms of human expression. Through 
              books, visual art, and public discourse, I explore how creativity can be a force 
              for personal and social transformation."
            </p>
            <p className="text-lg text-amber-700 leading-relaxed">
              "In our rapidly evolving digital landscape, I believe artists have a responsibility 
              to not just create, but to question, to provoke, and to illuminate new possibilities 
              for human connection and understanding."
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? 
                    "bg-amber-600 text-white" : 
                    "border-amber-300 text-amber-600 hover:bg-amber-50"
                  }
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {tab.name}
                </Button>
              );
            })}
          </div>

          {/* Books Content */}
          {activeTab === 'books' && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {books.map((book) => (
                <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] bg-amber-100 relative">
                    {book.isNew && (
                      <Badge className="absolute top-3 left-3 bg-amber-600 text-white z-10">
                        New Release
                      </Badge>
                    )}
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-amber-900 text-lg leading-tight">{book.title}</CardTitle>
                    <p className="text-amber-600 text-sm">{book.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 mb-4 text-sm leading-relaxed">{book.description}</p>
                    <div className="space-y-1 mb-4 text-xs">
                      <p className="text-amber-600">
                        <span className="font-medium">Format:</span> {book.format} • {book.pages} pages
                      </p>
                      <p className="text-amber-600">
                        <span className="font-medium">Published:</span> {book.publishDate}
                      </p>
                    </div>
                    {book.awards.length > 0 && (
                      <div className="mb-4">
                        {book.awards.map((award, index) => (
                          <Badge key={index} variant="secondary" className="mr-1 mb-1 bg-amber-100 text-amber-800 text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            {award}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-900">${book.price}</span>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-xs px-3">
                          Buy Now
                        </Button>
                        <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 text-xs px-2">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Art Content */}
          {activeTab === 'art' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {artworks.map((artwork) => (
                <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-amber-100">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-900">{artwork.title}</CardTitle>
                    <p className="text-amber-600">{artwork.medium} • {artwork.year}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-amber-600">
                        <span className="font-medium">Collection:</span> {artwork.pieces} pieces
                      </p>
                      <p className="text-sm text-amber-600">
                        <span className="font-medium">Starting at:</span> ${artwork.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        View Collection
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-600 text-amber-600">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Events Content */}
          {activeTab === 'events' && (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-amber-900">{event.title}</CardTitle>
                        <Badge variant="secondary" className="mt-2 bg-amber-100 text-amber-800">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-amber-600">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        {event.date}
                      </p>
                      <p className="text-amber-600 text-sm">{event.location}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-amber-900">
                        {event.price === 0 ? 'Free' : `$${event.price}`}
                      </span>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        {event.price === 0 ? 'Register' : 'Get Tickets'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get updates on new books, art releases, and upcoming speaking engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-amber-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToviasSolePage;
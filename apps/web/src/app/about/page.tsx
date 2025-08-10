import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Heart, Award, Users, Lightbulb, Target, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic',
      description: 'Deeply rooted in Botswana culture while embracing global best practices.'
    },
    {
      icon: Award,
      title: 'Professional',
      description: 'Uncompromising standards in service delivery and client partnership.'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Building bridges between brands and communities across Botswana.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Leading the digital transformation of outdoor advertising in Africa.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-orange-500 rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The journey of Botswana's first 100% citizen-owned Digital Out-of-Home advertising company
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg w-fit mb-6">
                100% Citizen-Owned
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Born from <span className="text-blue-600">Botswana</span>, Built for the World
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pula Media was founded with a simple yet powerful vision: to create a world-class 
                digital advertising platform that is authentically Motswana while meeting international 
                standards of excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To revolutionize outdoor advertising in Botswana by creating meaningful connections 
                      between brands and communities through premium digital experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the leading Digital Out-of-Home advertising network in Southern Africa, 
                      setting the standard for innovation, quality, and authentic local engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team meeting representing Modern Motswana values"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Pula Media
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving innovation in Botswana's advertising landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thabo Molefe</h3>
              <p className="text-blue-600 font-semibold mb-4">Managing Director</p>
              <p className="text-gray-600">
                15+ years in digital advertising and strategic brand development across Africa.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Neo Kgathi</h3>
              <p className="text-blue-600 font-semibold mb-4">Creative Director</p>
              <p className="text-gray-600">
                Award-winning creative professional specializing in African-inspired campaigns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Keabetswe Mmusi</h3>
              <p className="text-blue-600 font-semibold mb-4">Technology Lead</p>
              <p className="text-gray-600">
                Tech innovator driving digital transformation in outdoor advertising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in amplifying brands across Botswana with authentic, innovative advertising solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
"use client";

import { Heart, Award, Users, Lightbulb } from 'lucide-react';

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-kalahari-black mb-6">
              The <span className="text-pula-blue">Modern Motswana</span> Approach
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Pula Media, we embody the spirit of Modern Motswana – a perfect blend of authentic 
              local heritage and cutting-edge digital innovation. We understand the pulse of Botswana's 
              evolving marketplace and deliver advertising solutions that resonate deeply with our people.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-pula-blue mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize outdoor advertising in Botswana by creating meaningful connections 
                between brands and communities through premium digital experiences that celebrate 
                our heritage while embracing technological advancement.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-pula-gradient rounded-xl text-white">
                <div className="text-3xl font-bold mb-1">8+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-mophane-gradient rounded-xl text-white">
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm opacity-90">Successful Campaigns</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Values */}
          <div className="animate-slide-in-right">
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team meeting representing Modern Motswana values"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pula-blue/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-pula-light-blue"
                >
                  <div className="bg-pula-light-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-pula-light-blue group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-6 w-6 text-pula-light-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-kalahari-black mb-2 group-hover:text-pula-blue transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-kalahari-black mb-8">
            Meet Our <span className="text-pula-blue">Expert Team</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-kalahari-black mb-2">Thabo Molefe</h4>
              <p className="text-pula-blue font-semibold mb-2">Managing Director</p>
              <p className="text-gray-600 text-sm">15+ years in digital advertising and strategic brand development.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-kalahari-black mb-2">Neo Kgathi</h4>
              <p className="text-pula-blue font-semibold mb-2">Creative Director</p>
              <p className="text-gray-600 text-sm">Award-winning creative professional specializing in African-inspired campaigns.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-kalahari-black mb-2">Keabetswe Mmusi</h4>
              <p className="text-pula-blue font-semibold mb-2">Technology Lead</p>
              <p className="text-gray-600 text-sm">Tech innovator driving digital transformation in outdoor advertising.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
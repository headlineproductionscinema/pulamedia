import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { MapPin, Monitor, Users, TrendingUp, Zap, Globe } from 'lucide-react';
import NetworkMap from '../../../components/custom/NetworkMap';
import locations from '../../../content/locations.json';

export default function Network() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-orange-500 rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Network</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interactive map of our premium digital billboard locations across Botswana
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-blue-600">Network</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any location marker to view detailed information about our premium billboard sites.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-16">
            <NetworkMap />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{locations.length}</div>
              <div className="text-gray-600">Active Locations</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-500 mb-2">2.88m</div>
              <div className="text-gray-600">Screen Width</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-500 mb-2">2,250+</div>
              <div className="text-gray-600">Daily Vehicles</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-blue-600">Network</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic partnerships and premium locations ensure maximum impact for your campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High-Traffic Locations</h3>
              <p className="text-gray-600">
                All our billboards are strategically placed at Puma fuel stations, ensuring consistent high-traffic exposure throughout the day.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Partnership</h3>
              <p className="text-gray-600">
                Our exclusive partnership with Puma Energy provides access to premium locations across Botswana's key commercial areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Monitor className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                All displays feature high-resolution LED technology with consistent 2.88m x 1.6m sizing for optimal visibility and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the key advantages of our current network locations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={location.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Daily Vehicles:</span>
                    <span className="font-semibold text-gray-900">{location.stats["Daily Vehicles"]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Screen Size:</span>
                    <span className="font-semibold text-gray-900">{location.stats["Screen Size"]}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">{location.stats["Key Audience"]}</p>
                </div>
              </div>
            ))}
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
            Ready to Advertise at These Locations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a custom quote for any combination of our premium billboard locations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
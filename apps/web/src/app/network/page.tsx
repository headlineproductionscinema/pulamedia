import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { MapPin, Monitor, Users, TrendingUp } from 'lucide-react';

export default function Network() {
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
            Our <span className="text-orange-500">Network</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Premium digital billboard locations across Botswana's major cities and highways
          </p>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our network spans across Botswana's most high-traffic areas, ensuring maximum visibility for your brand.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Digital Displays</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Prime Locations</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-500 mb-2">2M+</div>
              <div className="text-gray-600">Daily Impressions</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>

          {/* Network Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Interactive Network Map</h3>
              <p className="text-xl text-gray-600 mb-8">
                Explore our comprehensive network of premium digital billboard locations across Botswana
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Gaborone</h4>
                  <p className="text-gray-600 mb-4">Central Business District, Shopping Malls, Major Intersections</p>
                  <div className="text-2xl font-bold text-blue-600">150+ Displays</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Francistown</h4>
                  <p className="text-gray-600 mb-4">Commercial Areas, Transport Hubs, Retail Centers</p>
                  <div className="text-2xl font-bold text-blue-600">100+ Displays</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Highway Network</h4>
                  <p className="text-gray-600 mb-4">A1, A2, A3 Highways, Border Posts, Rest Stops</p>
                  <div className="text-2xl font-bold text-blue-600">250+ Displays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            More Details Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on an interactive map and detailed location information. 
            Contact us for specific location inquiries.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Contact Us for Details
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
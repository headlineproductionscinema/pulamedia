import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, MapPin, TrendingUp, Play } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen bg-kalahari-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pula-blue/20 to-mophane-orange/10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-salt-pan-white mb-8 leading-tight">
            Botswana,
            <span className="block text-mophane-orange">Amplified.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            Premium Digital Out-of-Home advertising that connects brands with the heart of Botswana.
          </p>
        </div>
      </section>

      {/* Dual-Path Section */}
      <section className="py-20 bg-salt-pan-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advertisers Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mophane-orange">
              <div className="bg-mophane-orange/10 p-4 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-mophane-orange" />
              </div>
              <h3 className="text-3xl font-bold text-kalahari-black mb-4">
                Grow Your Brand
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach your target audience with strategic digital billboard placements across Botswana's high-traffic locations.
              </p>
              <button className="bg-mophane-orange text-salt-pan-white px-8 py-4 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors flex items-center group-hover:translate-x-2 transform duration-300">
                Start Advertising
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Stakeholders Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-pula-blue">
              <div className="bg-pula-blue/10 p-4 rounded-xl w-fit mb-6">
                <MapPin className="h-8 w-8 text-pula-blue" />
              </div>
              <h3 className="text-3xl font-bold text-kalahari-black mb-4">
                Our Motswana Story
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover how we're transforming Botswana's advertising landscape with authentic local expertise and cutting-edge technology.
              </p>
              <button className="bg-pula-blue text-salt-pan-white px-8 py-4 rounded-lg font-semibold hover:bg-pula-light-blue transition-colors flex items-center group-hover:translate-x-2 transform duration-300">
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-kalahari-black mb-8">
            Our Strategic Partner
          </h2>
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-6 rounded-xl font-bold text-2xl">
              PUMA ENERGY
            </div>
            <p className="text-gray-600 mt-4">
              Powering premium locations across Botswana
            </p>
          </div>
        </div>
      </section>

      {/* Network Map Preview Section */}
      <section className="py-20 bg-salt-pan-white" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-kalahari-black mb-4">
              A Network Across the Nation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic digital billboard placements connecting every corner of Botswana
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pula-blue to-pula-light-blue rounded-2xl p-8 text-center shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Network Map</h3>
                <p className="text-white/80 mb-6">
                  Explore our 500+ premium locations across Botswana's major cities and highways
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center text-white/90">
                    <div className="w-3 h-3 bg-mophane-orange rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm">Active Locations</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm">High Traffic Zones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Amplify Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kalahari-black mb-4">
              How We <span className="text-pula-blue">Amplify</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars of premium digital out-of-home advertising excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dynamic Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-mophane-orange">
              <div className="bg-mophane-orange/10 p-4 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-mophane-orange" />
              </div>
              <h3 className="text-2xl font-bold text-kalahari-black mb-4">
                Dynamic Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time content updates, scheduled campaigns, and responsive messaging that adapts to audience behavior and environmental factors.
              </p>
            </div>

            {/* Strategic Locations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pula-blue">
              <div className="bg-pula-blue/10 p-4 rounded-xl w-fit mb-6">
                <MapPin className="h-8 w-8 text-pula-blue" />
              </div>
              <h3 className="text-2xl font-bold text-kalahari-black mb-4">
                Strategic Locations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium placements at high-traffic intersections, shopping centers, and business districts across Botswana's major urban centers.
              </p>
            </div>

            {/* Measurable Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pula-light-blue">
              <div className="bg-pula-light-blue/10 p-4 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-pula-light-blue" />
              </div>
              <h3 className="text-2xl font-bold text-kalahari-black mb-4">
                Measurable Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive analytics, real-time performance tracking, and detailed ROI reporting to optimize your advertising investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-20 bg-salt-pan-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pula-blue to-mophane-orange rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Case Study Preview</h4>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-mophane-orange">400%</div>
                      <div className="text-sm">ROI Increase</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-mophane-orange">2.5M</div>
                      <div className="text-sm">Impressions</div>
                    </div>
                  </div>
                  <button className="mt-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all">
                    <Play className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 className="text-4xl font-bold text-kalahari-black mb-6">
                Transforming Brand Visibility
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how a leading Botswana retailer achieved unprecedented brand awareness and customer engagement through our strategic DOOH campaign across Gaborone's premium locations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mophane-orange rounded-full mr-4"></div>
                  <span className="text-gray-700">400% increase in brand recall within 30 days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pula-blue rounded-full mr-4"></div>
                  <span className="text-gray-700">2.5M+ targeted impressions across key demographics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pula-light-blue rounded-full mr-4"></div>
                  <span className="text-gray-700">35% boost in foot traffic to retail locations</span>
                </div>
              </div>

              <button className="bg-pula-blue text-salt-pan-white px-8 py-4 rounded-lg font-semibold hover:bg-pula-light-blue transition-colors flex items-center">
                View Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-pula-blue text-salt-pan-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join the leading brands that trust Pula Media to connect with Botswana's dynamic audience through premium digital advertising.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-mophane-orange text-salt-pan-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-pula-terracotta transition-colors transform hover:scale-105 shadow-2xl">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-white hover:text-pula-blue transition-colors">
              Schedule Consultation
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-mophane-orange mb-2">500+</div>
              <div className="text-white/80">Premium Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mophane-orange mb-2">2M+</div>
              <div className="text-white/80">Daily Impressions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-mophane-orange mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
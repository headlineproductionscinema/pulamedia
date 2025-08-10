import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, Zap, MapPin, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-orange-500 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rotate-45"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Botswana,
            <span className="block text-orange-500">Amplified.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Premium Digital Out-of-Home advertising that connects brands with the heart of Botswana. 
            100% citizen-owned, authentically local.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105 flex items-center">
              Start Advertising
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Learn Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-white/90">Premium Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-orange-500 mb-2">2M+</div>
              <div className="text-white/90">Daily Impressions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-white/90">Citizen-Owned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We <span className="text-blue-600">Amplify</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars of premium digital out-of-home advertising excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dynamic Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dynamic Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time content updates, scheduled campaigns, and responsive messaging that adapts to audience behavior and environmental factors.
              </p>
            </div>

            {/* Strategic Locations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Locations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium placements at high-traffic intersections, shopping centers, and business districts across Botswana's major urban centers.
              </p>
            </div>

            {/* Measurable Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Measurable Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive analytics, real-time performance tracking, and detailed ROI reporting to optimize your advertising investment.
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
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the leading brands that trust Pula Media to connect with Botswana's dynamic audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
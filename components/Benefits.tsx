"use client";

import { Target, TrendingUp, Shield, Clock, MapPin, BarChart } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced demographic and behavioral targeting capabilities powered by local market insights.',
      metric: '85% accuracy',
      color: 'text-pula-blue'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Consistently deliver 3-5x better return on investment compared to traditional advertising.',
      metric: '400% average ROI',
      color: 'text-mophane-orange'
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'Premium placements in safe, high-visibility locations with 24/7 monitoring and maintenance.',
      metric: '99.9% uptime',
      color: 'text-pula-light-blue'
    },
    {
      icon: Clock,
      title: 'Real-Time Flexibility',
      description: 'Update campaigns instantly, schedule content, and respond to market changes in real-time.',
      metric: '< 60 seconds',
      color: 'text-pula-terracotta'
    },
    {
      icon: MapPin,
      title: 'Strategic Coverage',
      description: 'Extensive network covering all major cities and key transportation corridors in Botswana.',
      metric: '500+ locations',
      color: 'text-pula-blue'
    },
    {
      icon: BarChart,
      title: 'Detailed Analytics',
      description: 'Comprehensive reporting with impression data, engagement metrics, and performance insights.',
      metric: 'Live tracking',
      color: 'text-mophane-orange'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-kalahari-black mb-4">
            Why Choose <span className="text-pula-blue">Pula Media</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of partnering with Botswana's leading DOOH advertising innovators. 
            Our technology-driven approach delivers measurable results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon and Metric */}
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl group-hover:from-pula-blue group-hover:to-pula-light-blue transition-all duration-300">
                  <benefit.icon className={`h-8 w-8 ${benefit.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${benefit.color} mb-1`}>
                    {benefit.metric}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-kalahari-black mb-4 group-hover:text-pula-blue transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-pula-blue to-mophane-orange rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-pula-gradient text-white text-center py-8">
            <h3 className="text-3xl font-bold mb-2">Pula Media vs Traditional Advertising</h3>
            <p className="text-xl text-white/90">See the clear advantages of modern DOOH solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Traditional Advertising */}
            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-400 mb-6 text-center">Traditional Advertising</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                  Limited targeting capabilities
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                  Static, unchangeable content
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                  Minimal performance tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                  High production and setup costs
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                  Weather and vandalism risks
                </li>
              </ul>
            </div>

            {/* Pula Media DOOH */}
            <div className="p-8 bg-gradient-to-br from-pula-blue/5 to-mophane-orange/5">
              <h4 className="text-2xl font-bold text-pula-blue mb-6 text-center">Pula Media DOOH</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-kalahari-black">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Precision demographic targeting
                </li>
                <li className="flex items-center text-kalahari-black">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Dynamic, real-time content updates
                </li>
                <li className="flex items-center text-kalahari-black">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Comprehensive analytics dashboard
                </li>
                <li className="flex items-center text-kalahari-black">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Cost-effective digital deployment
                </li>
                <li className="flex items-center text-kalahari-black">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Weather-resistant LED technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
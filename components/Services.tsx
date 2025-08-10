"use client";

import { Monitor, MapPin, BarChart3, Smartphone, Globe, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Digital Billboards',
      description: 'High-impact LED displays in prime locations across Botswana\'s major cities and highways.',
      features: ['4K Ultra HD Resolution', '24/7 Operation', 'Weather Resistant']
    },
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Premium placement at high-traffic areas, shopping centers, and business districts.',
      features: ['Traffic Analytics', 'Demographic Data', 'Visibility Studies']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time campaign monitoring with detailed insights and ROI tracking.',
      features: ['Live Reporting', 'Audience Metrics', 'Campaign Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Seamless connection between digital displays and mobile engagement campaigns.',
      features: ['QR Code Integration', 'Social Media Sync', 'Interactive Content']
    },
    {
      icon: Globe,
      title: 'Network Reach',
      description: 'Extensive coverage across Botswana with strategic expansion into regional markets.',
      features: ['National Coverage', 'Regional Expansion', 'Rural Penetration']
    },
    {
      icon: Zap,
      title: 'Dynamic Content',
      description: 'Flexible content management with real-time updates and scheduling capabilities.',
      features: ['Instant Updates', 'Scheduled Campaigns', 'A/B Testing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-kalahari-black mb-4">
            Our <span className="text-pula-blue">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital out-of-home advertising solutions that deliver measurable results 
            and authentic connections with your target audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="bg-pula-gradient p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-kalahari-black mb-4 group-hover:text-pula-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-mophane-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="text-pula-blue font-semibold hover:text-mophane-orange transition-colors flex items-center group">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-pula-gradient rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Amplify Your Brand?</h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our premium DOOH solutions can elevate your advertising strategy.
            </p>
            <button className="bg-mophane-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
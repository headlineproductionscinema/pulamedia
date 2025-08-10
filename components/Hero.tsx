"use client";

import { ArrowRight, Play, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern city skyline representing digital advertising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pula-blue/90 via-pula-light-blue/80 to-pula-blue/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Modern Motswana
              <span className="block text-mophane-orange">
                Digital Advertising
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Premium Digital Out-of-Home advertising that connects brands with Botswana's dynamic audience. 
              Authentic local expertise meets cutting-edge technology.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-mophane-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-pula-terracotta transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                For Advertisers
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pula-blue transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                For Stakeholders
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-mophane-orange mb-1">500+</div>
                <div className="text-white/80 text-sm">Premium Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mophane-orange mb-1">2M+</div>
                <div className="text-white/80 text-sm">Daily Impressions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-mophane-orange mb-1">95%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Digital billboard in modern city"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-white font-semibold mb-1">Live Campaign Performance</div>
                  <div className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Currently reaching 45,000+ viewers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-kalahari-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-mophane-orange">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your brand with premium DOOH advertising? Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-pula-light-blue p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <p className="text-gray-300">+267 123 4567</p>
                  <p className="text-gray-300">+267 789 0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-mophane-orange p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-gray-300">hello@pulamedia.bw</p>
                  <p className="text-gray-300">sales@pulamedia.bw</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-pula-terracotta p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Address</h4>
                  <p className="text-gray-300">Plot 123, Central Business District</p>
                  <p className="text-gray-300">Gaborone, Botswana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-pula-blue p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="flex-1 bg-mophane-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors">
                Schedule Consultation
              </button>
              <button className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-mophane-orange focus:border-transparent text-white placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-mophane-orange focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-mophane-orange focus:border-transparent text-white placeholder-gray-400"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-mophane-orange focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-mophane-orange focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your advertising goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-mophane-orange text-white px-6 py-4 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="aspect-video bg-gradient-to-br from-pula-blue/20 to-mophane-orange/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-white/60 mx-auto mb-4" />
                <p className="text-white/80 text-xl font-semibold">Interactive Map</p>
                <p className="text-white/60">Find us in the heart of Gaborone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
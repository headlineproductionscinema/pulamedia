"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-kalahari-black text-salt-pan-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="bg-pula-blue text-salt-pan-white px-4 py-2 rounded-lg font-bold text-lg w-fit mb-4">
              Pula Media
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Amplifying brands across Botswana with premium Digital Out-of-Home advertising solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pula-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pula-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pula-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pula-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-mophane-orange">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-mophane-orange" />
                <a href="mailto:sales@pulamedia.co.bw" className="text-gray-300 hover:text-white transition-colors">
                  sales@pulamedia.co.bw
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-mophane-orange" />
                <span className="text-gray-300">+267 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-mophane-orange mt-1" />
                <div className="text-gray-300">
                  <p>Plot 123, Central Business District</p>
                  <p>Gaborone, Botswana</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-mophane-orange">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#advertisers" className="text-gray-300 hover:text-white transition-colors">
                  For Advertisers
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pula Media. All rights reserved. Botswana, Amplified.
          </p>
        </div>
      </div>
    </footer>
  );
}
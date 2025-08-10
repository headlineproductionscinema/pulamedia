"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg w-fit mb-4">
              Pula Media
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              100% citizen-owned Digital Out-of-Home advertising company amplifying brands across Botswana with premium digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <a href="mailto:info@pulamedia.bw" className="text-gray-300 hover:text-white transition-colors">
                  info@pulamedia.bw
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <span className="text-gray-300">+267 123 4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-1" />
                <div className="text-gray-300">
                  <p>Plot 123, Central Business District</p>
                  <p>Gaborone, Botswana</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-gray-300 hover:text-white transition-colors">
                  Our Network
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pula Media. All rights reserved. Proudly 100% citizen-owned.
          </p>
        </div>
      </div>
    </footer>
  );
}
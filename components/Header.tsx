"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-salt-pan-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-pula-blue text-salt-pan-white px-4 py-2 rounded-lg font-bold text-lg">
              Pula Media
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#advertisers" 
              className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
            >
              For Advertisers
            </a>
            <a 
              href="#about" 
              className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Get Quote Button */}
          <div className="hidden md:block">
            <button className="bg-mophane-orange text-salt-pan-white px-6 py-2 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-kalahari-black p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#advertisers" 
                className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
              >
                For Advertisers
              </a>
              <a 
                href="#about" 
                className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="text-kalahari-black hover:text-pula-blue transition-colors font-medium"
              >
                Contact
              </a>
              <button className="bg-mophane-orange text-salt-pan-white px-6 py-2 rounded-lg font-semibold hover:bg-pula-terracotta transition-colors w-full">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Flown<span className="text-[#3b59ff]">Developer</span>
            </h2>
            <p className="text-sm leading-relaxed">
              India's leading web development agency. We transform your imagination into digital reality with cutting-edge technology and creative design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#3b59ff] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-[#3b59ff] transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-[#3b59ff] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-[#3b59ff] transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#3b59ff] shrink-0" />
                <span>123 Tech Park, Digital City, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#3b59ff] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#3b59ff] shrink-0" />
                <span>hello@flowndeveloper.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get the latest web trends and updates.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#3b59ff]"
              />
              <button className="bg-[#3b59ff] hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© {currentYear} FlownDeveloper. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
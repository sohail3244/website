'use client';
import React from 'react';
import { ChevronDown, MessageCircle, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6 lg:px-24 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Illustration Placeholder */}
          <div className="relative z-10">
            <img 
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" 
              alt="About Flown Developer" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Decorative floating icons (similar to image) */}
          <div className="absolute top-10 left-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 animate-bounce">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-[#1a1a1a] font-bold text-lg mb-2">Define us!</span>
          
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] leading-tight mb-6">
            Welcome to Flown Developer - <br />
            A Top Web Development <br />
            Company in India
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base">
            100% Trusted and Registered Company in India with a professional website that provides the best web development and web design services in India. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.
          </p>

          {/* Read More Dropdown Button */}
          <div className="group border-t border-b border-gray-100 py-4 flex items-center justify-between cursor-pointer max-w-sm">
            <span className="font-bold text-[#1a1a1a]">Read More!</span>
            <ChevronDown className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM SECTION: SERVICES SUBTITLE --- */}
      <div className="mt-24 text-center max-w-4xl mx-auto">
        <h3 id="services" className="text-3xl font-black text-[#1a1a1a] mb-6">Services</h3>
        <p className="text-gray-600 text-sm lg:text-base px-4">
          Your Business Deserves a Great Website. We make professional web design simple and accessible. By combining custom development with responsive design, we ensure your site looks perfect on every screen. Explore our flexible plans and find the perfect fit for your unique requirements.
        </p>
      </div>

    </section>
  );
}
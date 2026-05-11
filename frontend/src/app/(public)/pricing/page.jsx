import React from 'react';
import { Check, Phone, MessageCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    price: "₹9,999",
    features: ["5 Pages Website", "Basic SEO", "Free Domain (1yr)", "Support via Email", "100% Responsive"],
    recommended: false,
  },
  {
    name: "Business",
    price: "₹19,999",
    features: ["15 Pages Website", "Advanced SEO", "Payment Gateway", "Free Domain & Hosting", "WhatsApp Integration", "Priority Support"],
    recommended: true,
  },
  {
    name: "E-Commerce",
    price: "₹34,999",
    features: ["Unlimited Products", "Inventory Management", "Custom Admin Panel", "SSL Certificate", "Technical Support (24/7)", "Mobile App (Android)"],
    recommended: false,
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Header Section - Now with Blue Text */}
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-black mb-4 text-[#3b59ff]">
          Choose Your Plan
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Best website development packages tailored for your business needs. 
          Transparent pricing with no hidden costs.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="relative pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-[40px] p-8 shadow-[0_20px_50px_rgba(59,89,255,0.1)] border border-gray-100 flex flex-col transition-all hover:-translate-y-2.5 ${
                plan.recommended ? 'ring-2 ring-[#FFB800] scale-105 z-10' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB800] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-[#3b59ff]">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="bg-blue-50 p-1 rounded-full text-[#3b59ff]">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${
                plan.recommended 
                ? 'bg-[#FFB800] text-black hover:bg-yellow-500 hover:shadow-yellow-200' 
                : 'bg-[#3b59ff] text-white hover:bg-blue-700 hover:shadow-blue-200'
              }`}>
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Quote Section */}
      <div className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#3b59ff] rounded-[50px] p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-black mb-2">Need a Custom Solution?</h2>
            <p className="opacity-80">Contact us for large scale enterprise projects.</p>
          </div>
          
          <div className="relative z-10 flex gap-4">
             <button className="flex items-center gap-2 bg-[#FFB800] text-black px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl">
                <Phone size={20} /> CALL 8240740018
             </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <div className="fixed bottom-8 left-8 z-50">
        <button className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center">
          <MessageCircle size={32} fill="white" />
        </button>
      </div> */}

    </div>
  );
}
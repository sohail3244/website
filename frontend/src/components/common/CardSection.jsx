import React from 'react';
import { ShoppingCart, IndianRupee, MoveRight } from 'lucide-react';

const cards = [
 {
    type: 'icon',
    icon: ShoppingCart,
    title: 'Enterprise E-Com',
    subtitle: 'Scalable Online Stores',
    desc: 'Custom-built shopping platforms with seamless checkout and high-performance inventory management.'
  },
  {
    type: 'icon',
    icon: ShoppingCart,
    title: 'Enterprise E-Com',
    subtitle: 'Scalable Online Stores',
    desc: 'Custom-built shopping platforms with seamless checkout and high-performance inventory management.'
  },
  {
    type: 'icon',
    icon: IndianRupee,
    title: 'Value Engineering',
    subtitle: 'Cost-Effective Tech',
    desc: 'Premium full-stack solutions tailored for your budget without compromising on quality or speed.'
  }
];

export default function CardSection() {
  return (
    <div className="relative w-full min-h-150 bg-white font-sans overflow-hidden">
      
      {/* --- BLUE FLOATING WATER BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#3f68fc] overflow-hidden">
        {/* Layer 1: Base Darker Blue Wave */}
        <svg 
          className="absolute bottom-0 w-full h-32 text-white/10 animate-waveL" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,208C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        {/* Layer 2: Main Transparent Lighter Blue Wave (Floating) */}
        <svg 
          className="absolute bottom-0 w-[200%] h-32 text-[#3b59ff]/70 animate-waveR opacity-50" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L80,117.3C160,139,320,181,480,192C640,203,800,181,960,165.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>

        {/* Layer 3: Solid White Bottom Curve (masking) */}
        <svg 
          className="absolute bottom-0 w-full h-16 text-white" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,170.7C672,171,768,213,864,240C960,267,1056,277,1152,272C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* --- CARDS CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 pb-20">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-[35px] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] h-100 flex flex-col items-center p-8 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(59,89,255,0.25)] hover:-translate-y-3 border border-gray-100/60 overflow-hidden"
          >
            {card.type === 'text' ? (
              <div className="h-full w-full flex flex-col justify-center">
                {/* Visual Accent */}
                <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
                <p className="text-[#2A4150] text-lg leading-relaxed font-semibold italic">
                  "{card.text}"
                </p>
                <p className="mt-4 text-xs text-blue-600 font-bold tracking-widest uppercase">— Azzunique Vision</p>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center">
                {/* Icon Container with Floating Glow */}
                <div className="relative mt-4 mb-8">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-150" />
                  <div className="relative z-10 bg-blue-50 p-6 rounded-[22px] shadow-sm group-hover:bg-[#3b59ff] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <card.icon className="w-10 h-10 text-[#3b59ff] transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#2A4150] group-hover:text-[#3b59ff] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="bg-blue-50 text-[#3b59ff] text-[10px] font-bold px-3 py-1 rounded-full inline-block uppercase tracking-widest">
                    {card.subtitle}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed px-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            )}
            
            {/* Interactive Footer */}
            <div className="absolute bottom-8 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Explore Solution</span>
               <MoveRight className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Curve masking */}
      <div className="w-full h-16 bg-white rounded-t-[100px] mt-5 relative z-20" />
    </div>
  );
}
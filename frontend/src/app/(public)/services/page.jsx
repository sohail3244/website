import React from 'react';
import { Code2, Smartphone, Globe, LayoutDashboard, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

const serviceList = [
  {
    title: "Web Development",
    desc: "Modern, scalable web applications built with React, Next.js, and Node.js. Optimized for speed and SEO.",
    icon: Globe,
    color: "bg-blue-500",
    size: "md:col-span-2"
  },
  {
    title: "Mobile Solutions",
    desc: "Cross-platform mobile apps using React Native for iOS and Android.",
    icon: Smartphone,
    color: "bg-purple-500",
    size: "md:col-span-1"
  },
  {
    title: "UI/UX Design",
    desc: "Cinematic and minimalist user interfaces with immersive animations.",
    icon: Code2,
    color: "bg-orange-500",
    size: "md:col-span-1"
  },
  {
    title: "Admin Dashboards",
    desc: "Custom management systems with real-time analytics and data visualization.",
    icon: LayoutDashboard,
    color: "bg-emerald-500",
    size: "md:col-span-2"
  },
  {
    title: "Performance Optimization",
    desc: "Making your existing apps 10x faster with core web vitals optimization.",
    icon: Zap,
    color: "bg-yellow-500",
    size: "md:col-span-1"
  },
  {
    title: "Secure Backend",
    desc: "Robust API development with high-level security protocols and database management.",
    icon: ShieldCheck,
    color: "bg-red-500",
    size: "md:col-span-2"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[#3b59ff] font-black uppercase tracking-[0.3em] text-xs">
            What We Do
          </h2>
          <h1 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight">
            Solutions that drive <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3b59ff] to-purple-600">
              Future Growth.
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            We don't just write code; we solve business problems with engineering excellence.
          </p>
        </div>

        {/* --- Services Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-[40px] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden ${service.size}`}
            >
              {/* Animated Glow Background on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={28} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More link */}
                <div className="mt-auto pt-8">
                  <button className="flex items-center gap-2 text-sm font-bold text-[#3b59ff] group/link">
                    Explore Details
                    <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Stats/Trust Bar --- */}
        <div className="mt-24 p-12 rounded-[50px] bg-[#1a1a1a] flex flex-wrap justify-around items-center gap-10 text-white">
            <div className="text-center">
                <p className="text-4xl font-black mb-1">99%</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Client Success</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
                <p className="text-4xl font-black mb-1">150+</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Projects Done</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
                <p className="text-4xl font-black mb-1">24/7</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Tech Support</p>
            </div>
        </div>

      </div>
    </section>
  );
}
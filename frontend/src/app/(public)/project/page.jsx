import React from 'react';
import { ExternalLink, Github, Layout, Monitor, Smartphone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Eco-Commerce Platform",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
    tags: ["React", "Next.js", "Tailwind"],
    link: "#",
    type: "Web App"
  },
  {
    title: "FinTech Dashboard",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1470&auto=format&fit=crop",
    tags: ["TypeScript", "Recharts", "Firebase"],
    link: "#",
    type: "Dashboard"
  },
  {
    title: "Health & Fitness App",
    category: "Mobile UI",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
    tags: ["React Native", "Expo", "Redux"],
    link: "#",
    type: "Mobile"
  }
];

export default function Project() {
  return (
    <section id="projects" className="py-24 bg-[#f8faff] min-h-screen px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-600"></span>
              Our Portfolio
            </h2>
            <h1 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight">
              Crafting Digital <br /> <span className="text-blue-600">Masterpieces</span>
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-lg font-medium leading-relaxed">
            Humne har project ko precision ke saath build kiya hai, performance aur design ka perfect balance rakhte hue.
          </p>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </button>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1.5">
                    {project.type === "Mobile" ? <Smartphone size={12}/> : <Monitor size={12}/>}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group/btn"
                >
                  View Case Study
                  <Layout className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom CTA --- */}
        <div className="mt-20 text-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
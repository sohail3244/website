import React, { useState } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "service" },
    { name: "Our Projects", id: "project" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <header className=" top-0 left-0 w-full z-100 px-4 py-4 lg:px-12 flex items-center justify-between transition-all">
      {/* --- LOGO --- */}
      <div className="flex items-center gap-2 group cursor-pointer z-110">
        <div className="flex flex-col leading-none text-white">
          <span className="text-2xl lg:text-3xl font-black italic tracking-tighter uppercase">
            Flown
          </span>
          <span className="text-[8px] lg:text-[9px] tracking-[0.4em] font-light uppercase opacity-90">
            Developer
          </span>
        </div>
      </div>

      {/* --- DESKTOP NAVIGATION (PC/Laptop) --- */}
      <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-xl border border-white/20 px-2 py-1.5 rounded-2xl shadow-2xl">
        <nav className="flex items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="text-white text-[13px] font-medium px-4 py-2 hover:bg-white/20 rounded-xl transition-all flex items-center gap-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="tel:8240740018"
          className="bg-[#FFB800] hover:bg-[#ffcc00] text-[#1a1a1a] font-bold text-[14px] px-6 py-2.5 rounded-xl ml-2 shadow-lg transition-transform active:scale-95"
        >
          Call: 8240740018
        </a>
      </div>

      {/* --- MOBILE TOGGLE BUTTON --- */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden z-110 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- MOBILE OVERLAY MENU (Tablet/Mobile) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#3b59ff] z-100 flex flex-col p-8 lg:hidden"
          >
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-6 mt-20">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-bold tracking-tight hover:opacity-70 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Call Button */}
            <div className="mt-auto">
              <a
                href="tel:8240740018"
                className="w-full bg-[#FFB800] text-[#1a1a1a] flex items-center justify-center gap-3 font-bold text-lg py-4 rounded-2xl shadow-xl"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

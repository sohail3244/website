"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react"; // ChevronUp icon add kiya
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import PricingPage from "./pricing/page";
import AboutSection from "./about/page";
import CardSection from "@/components/common/CardSection";
import Project from "./project/page";
import Services from "./services/page";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll position check karne ke liye logic
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  // Smooth scroll to top function
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden font-sans scroll-smooth bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image.png')",
      }}
    >
      <Header />

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-14 pt-20 pb-20 lg:pt-8 lg:pb-10"
      >
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight"
          >
            No 1 Website Development Company in India
          </motion.h1>
          <div className="flex items-center gap-3">
            <span className="text-2xl italic opacity-90">You Imagine.</span>
            <div className="bg-[#FFB800] text-black px-6 py-2 rounded-sm font-black text-2xl transform -rotate-1 shadow-md">
              We Create.
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 lg:mt-0"
        >
          <img
            src="/image1.png"
            alt="Dashboard"
            className="w-80 "
          />
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}

      <CardSection />

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-white">
        <AboutSection />
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="bg-white">
        <PricingPage />
      </section>
      <section id="project" className="bg-white">
        <Project />
      </section>
      <section id="service" className="bg-white">
        <Services />
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 left-8 z-100">
        <button className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <MessageCircle size={32} fill="white" />
        </button>
      </div>

      {/* --- SCROLL TO TOP BUTTON (Square Gray Design) --- */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            className="fixed bottom-8 right-8 z-100 bg-gray-400 p-2 rounded-sm shadow-lg hover:bg-gray-600 transition-colors group"
            aria-label="Scroll to top"
          >
            <ChevronUp
              size={24}
              className="text-white group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

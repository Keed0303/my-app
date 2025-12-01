'use client';

import Hero from "@/components/layouts//hero";
import ParticleBackground from "@/components/ui/ParticleBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollButton from "@/components/ui/ScrollButton";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/layouts//Navbar";
import AboutMe from "@/components/layouts//AboutMe";
import Project from "@/components/layouts/Project";
import Contact from "@/components/layouts/Contact";
import Experience from "@/components/layouts/Experience";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      offset: 120,
      delay: 0,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0e27] text-white overflow-x-hidden cursor-none">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <Hero />

      {/* Navbar Section */}
      <Navbar />

      {/* Experience Section */}
      <AboutMe />

      {/* Project Section */}
      <Project />

      {/* Experience */}
      <Experience />
      {/* Contact Section */}

      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* Scroll Button */}
      <ScrollButton />
    </div>
  );
}

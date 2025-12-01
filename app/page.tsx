'use client';

import Hero from "@/components/layouts//hero";
import ParticleBackground from "@/components/layouts//ParticleBackground";
import CustomCursor from "@/components/layouts//CustomCursor";
import ScrollButton from "@/components/layouts//ScrollButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/layouts//Navbar";
import AboutMe from "@/components/layouts//AboutMe";
import { experienceData } from "@/data/Experience.data";
import { projectData } from "@/data/Project";
import Project from "@/components/layouts/Project";
import Contact from "@/components/layouts/Contact";
import Experience from "@/components/layouts/Experience";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

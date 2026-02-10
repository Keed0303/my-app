'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Hero from "@/components/layouts//hero";
import Navbar from "@/components/layouts//Navbar";
import ClientWrapper from "@/components/ui/ClientWrapper";

// Dynamic imports for below-fold content - loads only when needed
const GeometricBackground = dynamic(() => import('@/components/ui/GeometricBackground'));
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));
const AboutMe = dynamic(() => import('@/components/layouts//AboutMe'));
const Project = dynamic(() => import('@/components/layouts/Project'));
const Experience = dynamic(() => import('@/components/layouts/Experience'));
const Contact = dynamic(() => import('@/components/layouts/Contact'));
const Footer = dynamic(() => import('@/components/layouts/Footer'));
const ScrollButton = dynamic(() => import('@/components/ui/ScrollButton'));

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ClientWrapper>
      <div className="relative min-h-screen text-slate-900 dark:text-white overflow-x-hidden cursor-none transition-colors duration-300">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Geometric Line Background */}
        <GeometricBackground />

        {/* Hero Section */}
        <Hero />

        {/* Navbar Section */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

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
        <ScrollButton isMenuOpen={isMenuOpen} />

      </div>
    </ClientWrapper>
  );
}

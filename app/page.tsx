'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/Navbar";

const LiveWorkCounter = dynamic(() => import('@/components/layouts/LiveWorkCounter'));
const Project = dynamic(() => import('@/components/layouts/Project'));
const Experience = dynamic(() => import('@/components/layouts/Experience'));
const AboutMe = dynamic(() => import('@/components/layouts/AboutMe'));
const Contact = dynamic(() => import('@/components/layouts/Contact'));
const Footer = dynamic(() => import('@/components/layouts/Footer'));

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <LiveWorkCounter />
      <Project />
      <Experience />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}

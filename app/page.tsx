import dynamic from 'next/dynamic';
import Hero from "@/components/layouts//hero";
import Navbar from "@/components/layouts//Navbar";
import ClientWrapper from "@/components/ui/ClientWrapper";

// Dynamic imports for below-fold content - loads only when needed
const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'));
const AnimatedGradients = dynamic(() => import('@/components/ui/AnimatedGradients'));
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));
const AboutMe = dynamic(() => import('@/components/layouts//AboutMe'));
const Project = dynamic(() => import('@/components/layouts/Project'));
const Experience = dynamic(() => import('@/components/layouts/Experience'));
const Contact = dynamic(() => import('@/components/layouts/Contact'));
const Footer = dynamic(() => import('@/components/layouts/Footer'));
const ScrollButton = dynamic(() => import('@/components/ui/ScrollButton'));

export default function Home() {
  return (
    <ClientWrapper>
      <div className="relative min-h-screen bg-[#0a0e27] text-white overflow-x-hidden cursor-none">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Animated Gradient Backgrounds */}
        <AnimatedGradients />

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
    </ClientWrapper>
  );
}

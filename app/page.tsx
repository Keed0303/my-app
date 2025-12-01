'use client';

import Hero from "@/components/hero";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

      <Hero />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md my-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MKT
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-6 lg:space-x-8">
                {['home', 'about', 'project', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 rounded-lg text-base lg:text-lg font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>



      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-[#0a0e27]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-300">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Web and App Developer with expertise in creating modern, responsive, and user-friendly applications.
                With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in software development has equipped me with the skills to tackle complex challenges and deliver
                high-quality products that exceed expectations.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-300">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'].map((skill) => (
                  <div key={skill} className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-center hover:bg-blue-500/20 transition-colors duration-300">
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
                tech: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management tool with real-time updates and team features.',
                tech: ['Next.js', 'TypeScript', 'Firebase'],
              },
              {
                title: 'Portfolio Website',
                description: 'Modern portfolio website with animations and responsive design.',
                tech: ['React', 'Tailwind CSS', 'Framer Motion'],
              },
              {
                title: 'Social Media Dashboard',
                description: 'Analytics dashboard for tracking social media metrics and engagement.',
                tech: ['React', 'Chart.js', 'API Integration'],
              },
              {
                title: 'Weather Application',
                description: 'Real-time weather app with location detection and forecasting.',
                tech: ['JavaScript', 'Weather API', 'CSS3'],
              },
              {
                title: 'Blog Platform',
                description: 'Content management system with markdown support and SEO optimization.',
                tech: ['Next.js', 'MDX', 'Tailwind CSS'],
              },
            ].map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group h-full"
              >
                <div className="h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-200">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    View Demo →
                  </button>
                  <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    GitHub →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-20 bg-[#0a0e27]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Experience
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                company: 'Tech Solutions Inc.',
                position: 'Senior Full Stack Developer',
                duration: 'Jan 2022 - Present',
                responsibilities: [
                  'Led development of multiple client-facing web applications',
                  'Implemented CI/CD pipelines improving deployment efficiency by 40%',
                  'Mentored junior developers and conducted code reviews',
                  'Collaborated with cross-functional teams to deliver high-quality products',
                ],
                tech: ['React', 'Node.js', 'AWS', 'Docker'],
              },
              {
                company: 'Digital Innovations Ltd.',
                position: 'Web Developer',
                duration: 'Jun 2020 - Dec 2021',
                responsibilities: [
                  'Developed responsive web applications using modern frameworks',
                  'Optimized application performance resulting in 50% faster load times',
                  'Integrated third-party APIs and payment gateways',
                  'Participated in agile development processes',
                ],
                tech: ['JavaScript', 'React', 'MongoDB', 'Express'],
              },
              {
                company: 'Creative Web Studios',
                position: 'Junior Developer',
                duration: 'Jan 2019 - May 2020',
                responsibilities: [
                  'Built and maintained client websites and web applications',
                  'Collaborated with designers to implement pixel-perfect UIs',
                  'Fixed bugs and implemented new features based on client feedback',
                  'Learned and applied best practices in web development',
                ],
                tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
              },
            ].map((job, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300">{job.position}</h3>
                    <p className="text-purple-400">{job.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{job.duration}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0e27]/50 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-blue-500/30">
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 Manuel Kyd Thomas O. Nagpala. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll Button */}
      <ScrollButton />
    </div>
  );
}

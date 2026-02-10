import { Project } from "@/types/Project";

export const projectData: Project[] = [
  {
    title: 'My Pet\'s Journey Application',
    description: 'A comprehensive mobile loyalty application designed for pet care services, developed for Blink Creative Studio. Features reward tracking, appointment scheduling, and personalized pet profiles. Built with real-time database synchronization and push notifications to keep pet owners engaged and connected with their favorite veterinary clinics and pet services.',
    tech: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile App',
    image: '/My pets journey/Home.svg',
    accessibility: false
  },
  {
    title: 'Memberly',
    description: 'Memberly is a multi-tenant membership and loyalty points management system for fitness gyms and similar businesses. The system handles member management, subscription billing, RFID-based access control, and comprehensive analytics',
    tech: ['React', 'Laravel', 'TypeScript'],
    category: 'Website',
    accessibility: false
  },
  {
    title: 'Nivs Gym Management System',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    category: 'Website',
    accessibility: false
  },
  // {
  //   title: 'Portfolio Website',
  //   description: 'Modern portfolio website with animations and responsive design.',
  //   tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  //   category: 'Website',
  //   accessibility: true
  // },
  // {
  //   title: 'Desktop Media Player',
  //   description: 'A powerful desktop application for playing and organizing media files with advanced features.',
  //   tech: ['Electron', 'React', 'Node.js'],
  //   category: 'Desktop',
  //   accessibility: true
  // },
  // {
  //   title: 'Social Media Dashboard',
  //   description: 'Analytics dashboard for tracking social media metrics and engagement.',
  //   tech: ['React', 'Chart.js', 'API Integration'],
  //   category: 'Other Projects',
  //   accessibility: true
  // },
];

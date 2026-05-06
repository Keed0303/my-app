import { Project } from "@/types/Project";

export const projectData: Project[] = [
  {
    title: "My Pet's Journey Application",
    description: 'A comprehensive mobile loyalty application for pet care services. Features reward tracking, appointment scheduling, and personalized pet profiles with real-time database sync and push notifications.',
    result: 'Shipped to production for Blink Creative Studio',
    tech: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile App',
    image: '/My%20pets%20journey/Home.svg',
    status: { type: 'completed', progress: 100 },
  },
  {
    title: 'Memberly',
    description: 'Multi-tenant membership and loyalty points management system for fitness gyms. Handles member management, subscription billing, RFID-based access control, and comprehensive analytics.',
    result: 'Full-stack SaaS platform with multi-tenancy',
    tech: ['React', 'Laravel', 'TypeScript'],
    category: 'Website',
    image: '/memberly/Screenshot%202026-05-06%20065147.png',
    status: { type: 'coming-soon' },
  },
  {
    title: 'Nivs Gym Management System',
    description: 'Gym management platform with real-time updates, member tracking, and billing integration.',
    result: 'Deployed for active gym operations',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    category: 'Website',
    image: "/Niv's%20gym/Screenshot%202026-05-06%20065009.png",
    status: { type: 'in-progress', progress: 90 },
  },
];

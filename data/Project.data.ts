import { Project } from "@/types/Project";

export const projectData: Project[] = [
  {
    title: "My Pet's Journey",
    description: 'Mobile loyalty app for a pet care business. Users can track rewards, book appointments, and manage pet profiles. Built in a 1-month contract for Blink Creative Studio.',
    result: 'Shipped to production for Blink Creative Studio',
    tech: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile App',
    image: '/My%20pets%20journey/Home.svg',
  },
  {
    title: 'Memberly',
    description: 'Multi-tenant membership management system for fitness gyms. Handles member records, subscription billing, RFID-based access control, and basic analytics dashboards.',
    result: 'Personal project — in development',
    tech: ['React', 'Laravel', 'TypeScript'],
    category: 'Website',
    image: '/memberly/Screenshot%202026-05-06%20065147.png',
  },
  {
    title: 'Nivs Gym Management System',
    description: 'Gym management platform for a local gym. Covers member tracking, billing, and real-time updates via Firebase.',
    result: 'Deployed for a local gym',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    category: 'Website',
    image: "/Niv's%20gym/Screenshot%202026-05-06%20065009.png",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: 'Mobile App' | 'Website' | 'Desktop' | 'Other Projects';
  image?: string;
};

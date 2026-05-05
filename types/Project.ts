export type Project = {
  title: string;
  description: string;
  result: string;
  tech: string[];
  category: 'Mobile App' | 'Website' | 'Desktop' | 'Other Projects';
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

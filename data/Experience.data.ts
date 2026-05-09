import { Experience } from "@/types/Experience";

export const experienceData: Experience[] = [
  {
    company: 'FILWEB ASIA INC',
    position: 'Web and App Developer',
    duration: 'Oct 2022 - Oct 2025',
    responsibilities: [
      'Built custom PDF report generation for post-activity reports using Yii2.',
      'Wrote and optimized SQL queries for internal data analysis and reporting tools.',
      'Developed automated data processing workflows to replace manual spreadsheet work.',
      'Annotated datasets for a machine learning project, preparing labeled training data.',
      'Wrote technical documentation for internal tools and onboarding guides.',
    ],
    tech: ['Yii2', 'Ionic', 'Angular', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    company: 'Blink Creative Studio',
    position: 'Mobile App Developer (Contract)',
    duration: 'Sep 2025 - Oct 2025',
    responsibilities: [
      'Built a React Native pet loyalty app from design specs to production release.',
      'Integrated RESTful APIs for appointment booking and reward tracking.',
      'Worked directly with the client to scope features and prioritize the build.',
    ],
    tech: ['React Native', 'TypeScript', 'Expo', 'REST APIs'],
  },
  {
    company: 'City College of Calamba',
    position: 'Backend Developer (OJT / Internship)',
    duration: 'Apr 2022 - Jul 2022',
    responsibilities: [
      'Designed and structured database schemas for a college information system.',
      'Applied normalization techniques and wrote SQL queries for data retrieval.',
      'Documented database schemas and workflows for project handoff.',
    ],
    tech: ['SQL', 'Database Design', 'PHP'],
  },
];

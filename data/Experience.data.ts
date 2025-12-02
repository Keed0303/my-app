import { Experience } from "@/types/Experience";

export const experienceData: Experience[] = [
  {
    company: 'City College Of Calamba (OJT)',
    position: 'Backend Developer',
    duration: 'Apr 2022 - Jul 2023',
    responsibilities: [
      'Assisted in designing and structuring databases for the project, ensuring organized and efficient data storage.',
      'Applied database normalization techniques to reduce redundancy and improve query performance.',
      'Wrote and tested basic SQL queries for data retrieval and reporting, supporting system functionality.',
      'Helped in documenting database schemas and workflows, making it easier for future developers to understand the system.',
      'Collaborated with the development team to integrate the database with the applications and ensure consistency in backend development.',
    ],
    tech: ['SQL', 'Database Design', 'PHP', 'Backend Development'],
  },
  {
    company: 'FILWEB ASIA INC',
    position: 'Web and App Developer',
    duration: 'October 2022 - October 2025',
    responsibilities: [
      'Designed and implemented custom PDF post-activity reports in Yii2, improving report generation and readability.',
      'Developed and optimized SQL queries for data analysis and reporting, enhancing data accuracy and performance.',
      'Built automated data processing workflows in Yii2, reducing manual effort and improving efficiency.',
      'Led the annotation of datasets for an AI-powered machine learning project, ensuring high-quality labeled data for model training.',
      'Authored comprehensive technical documentation, significantly reducing onboarding time for new developers.',
    ],
    tech: ['Yii2', 'Ionic Framework', 'Angular', 'TypeScript', 'PHP', 'SQL', 'Machine Learning'],
  },
  {
    company: 'Blink Studio',
    position: 'Mobile App Developer',
    duration: '1 Month',
    responsibilities: [
      'Implemented mobile applications from scratch, translating design requirements into functional and user-friendly interfaces.',
      'Developed and integrated RESTful APIs to enable seamless communication between mobile apps and backend services.',
      'Optimized app performance and responsiveness, ensuring smooth user experience across different devices.',
      'Collaborated with cross-functional teams to implement new features and resolve technical challenges.',
    ],
    tech: ['React Native', 'TypeScript', 'REST APIs', 'Mobile Development'],
  },
];

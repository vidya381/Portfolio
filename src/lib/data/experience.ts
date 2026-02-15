import { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'IBM',
    role: 'Application Developer',
    duration: 'Aug 2023 - Present',
    bullets: [
      'Developed and maintained enterprise-level Java applications using Spring Boot, handling high-volume data processing and API integrations',
      'Built RESTful APIs and microservices for internal tools, improving system modularity and reducing deployment time by 40%',
      'Collaborated with cross-functional teams to design database schemas and optimize SQL queries, resulting in 30% faster query performance',
      'Implemented automated testing using JUnit and Mockito, achieving 85% code coverage and reducing production bugs',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    company: 'AT&T',
    role: 'Software Engineer Intern',
    duration: 'May 2022 - Aug 2022',
    bullets: [
      'Developed internal dashboards using React and Node.js to monitor network performance metrics across multiple regions',
      'Built backend APIs with Express.js and PostgreSQL to aggregate and serve real-time data to frontend applications',
      'Optimized database queries and implemented caching strategies, reducing API response times by 50%',
      'Participated in code reviews and Agile sprints, contributing to a team of 8 engineers delivering features biweekly',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    company: 'Prime Healthcare',
    role: 'Software Developer Intern',
    duration: 'Jun 2021 - Aug 2021',
    bullets: [
      'Built internal tools for healthcare data management using Python and Flask, streamlining patient record processing',
      'Designed and implemented database schemas for medical records system, ensuring HIPAA compliance and data security',
      'Created automated data validation scripts that reduced manual data entry errors by 60%',
      'Collaborated with healthcare professionals to gather requirements and deliver user-friendly solutions',
    ],
    techStack: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'REST APIs'],
  },
  {
    company: 'Binghamton University',
    role: 'Graduate Teaching Assistant',
    duration: 'Aug 2020 - May 2022',
    bullets: [
      'Assisted in teaching Data Structures and Algorithms courses for 100+ undergraduate students',
      'Conducted lab sessions on core programming concepts, data structures, and algorithm design patterns',
      'Graded assignments and provided detailed feedback on code quality, efficiency, and best practices',
      'Held weekly office hours to help students debug code and understand complex CS concepts',
    ],
    techStack: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
  },
]

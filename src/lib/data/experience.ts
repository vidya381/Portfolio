import { Experience } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Binghamton University',
    role: 'Research Graduate',
    duration: 'Feb 2025 - Nov 2025',
    bullets: [
      'Built a full-stack multiplayer game with Spring Boot backend and real-time WebSocket communication. Reported progress biweekly.',
      'Worked on production-ready software development, deployment, and testing practices.',
    ],
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'JavaScript'],
  },
  {
    company: 'Prime Healthcare',
    role: 'IT Analyst Intern',
    duration: 'Sep 2024 - Nov 2024',
    bullets: [
      'Built GraphQL APIs for a research portal where nursing researchers submit proposals. Used Hot Chocolate (.NET C#) with role-based access control.',
      'Normalized MySQL database schema to fix performance issues and remove duplicate data.',
    ],
    techStack: ['C#', '.NET', 'GraphQL', 'Azure Blob Storage', 'MySQL'],
  },
  {
    company: 'Binghamton University',
    role: 'Graduate Teaching Assistant',
    duration: 'Aug 2023 - Dec 2024',
    bullets: [
      'Taught database systems to 35 graduate students. Helped them debug SQL queries and understand AWS infrastructure through hands-on examples.',
      'Designed AWS projects showing real database design patterns. Students passed with good feedback.',
    ],
    techStack: ['SQL', 'NoSQL', 'AWS', 'Database Design'],
  },
  {
    company: 'IBM',
    role: 'Software Engineer',
    duration: 'Apr 2018 - Dec 2022',
    bullets: [
      'Built microservices for AT&T\'s billing platform and Barclays\' trading systems. Worked with Java, Spring Boot, and Kafka processing millions of transactions daily.',
      'Rebuilt Barclays\' REST APIs to improve performance. Integrated Oracle and Cassandra with Kafka for real-time data pipelines.',
      'Worked with distributed teams across US and India to ship features on schedule.',
    ],
    techStack: ['Java', 'Spring Boot', 'Kafka', 'Oracle', 'Cassandra', 'MySQL', 'Microservices'],
  },
]

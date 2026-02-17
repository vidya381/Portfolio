import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'myspendo',
    title: 'MySpendo',
    subtitle: 'Personal Finance Tracker',
    description:
      'Full-stack expense tracker with Go backend and Next.js frontend. Track income, expenses, and budgets with automated recurring transactions and analytics.',
    challenge:
      'Built automated recurring transactions with PostgreSQL advisory locks to prevent duplicates. Handled edge cases like month-end dates, leap years, and server restarts.',
    techStack: [
      'Go',
      'Next.js',
      'PostgreSQL',
      'Oracle Cloud',
      'Vercel',
    ],
    image: '/images/projects/myspendo-hero.png',
    links: {
      github: 'https://github.com/vidya381/myspendo',
      demo: 'https://myspendo.vercel.app',
    },
    featured: true,
    order: 1,
  },
  {
    id: 'weather-insight',
    title: 'Weather Insight',
    subtitle: 'Weather Analytics Platform',
    description:
      'Weather tracking app with machine learning built using FastAPI and React. Tracks multiple cities and runs ML analysis to detect temperature anomalies, predict trends, and cluster patterns.',
    challenge:
      'Built ML pipeline with APScheduler running on 1GB RAM. Implemented caching that cut redundant API calls by 66% using 10-minute TTL and request deduplication.',
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Oracle Cloud',
      'Vercel',
    ],
    image: '/images/projects/weather-insight-hero.png',
    links: {
      github: 'https://github.com/vidya381/weather-insight',
      demo: 'https://weather-insight-ml.vercel.app',
    },
    featured: true,
    order: 2,
  },
  {
    id: 'bulls-cows',
    title: 'Bulls & Cows',
    subtitle: 'Multiplayer Game Platform',
    description:
      'Code-breaking game with Spring Boot backend and real-time WebSocket multiplayer. Five game modes including daily challenges and 1v1 battles with live progress updates.',
    challenge:
      'Built thread-safe session management with ConcurrentHashMap using composite keys. Implemented WebSocket authentication with JWT for secure real-time multiplayer across different tabs.',
    techStack: [
      'Java',
      'Spring Boot',
      'WebSocket',
      'PostgreSQL',
      'JavaScript',
    ],
    image: '/images/projects/bulls-cows-hero.png',
    links: {
      github: 'https://github.com/vidya381/bulls-cows-game',
      demo: 'https://bulls-cows-game.onrender.com',
    },
    featured: true,
    order: 3,
  },
  {
    id: 'data-playground',
    title: 'Data Playground',
    subtitle: 'Data Transformation Tool',
    description:
      'Browser-based tool for transforming JSON and CSV data entirely client-side. Handles parsing, filtering, sorting, and format conversion with session sharing via short URLs.',
    challenge:
      'Solved Next.js 15 to 16 async params breaking change that only failed in production builds. Built smart JSON parser handling nested objects and API responses, not just clean arrays.',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Vercel',
    ],
    image: '/images/projects/data-playground-hero.png',
    links: {
      github: 'https://github.com/vidya381/data-playground',
      demo: 'https://data-playground-beta.vercel.app',
    },
    featured: true,
    order: 4,
  },
]

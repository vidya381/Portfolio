import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'myspendo',
    title: 'MySpendo',
    subtitle: 'Personal Finance Tracker',
    description:
      'Full-stack personal finance management platform with automated recurring transactions, budget alerts, and analytics. Features Spring Boot backend with scheduled jobs, PostgreSQL database, and React frontend deployed on Vercel.',
    challenge:
      'Built a production-ready background job system using Spring Boot @Scheduled for automated recurring transactions. Implemented budget alerts with real-time notifications and CSV export functionality.',
    techStack: [
      'Spring Boot',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Oracle Cloud',
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
    subtitle: 'AI-Powered Weather Analytics',
    description:
      'Weather analytics platform with machine learning insights, anomaly detection, and predictive analysis. Built with FastAPI backend, integrated OpenWeatherMap API, and implements ML models for pattern clustering and temperature trend prediction.',
    challenge:
      'Implemented real-time anomaly detection using statistical analysis and ML-powered weather pattern clustering. Built caching layer to optimize API calls and reduce latency by 60%.',
    techStack: [
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Machine Learning',
      'React',
      'Next.js',
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
    title: 'Bulls & Cows Game',
    subtitle: 'Real-Time Multiplayer Game',
    description:
      'Full-stack multiplayer code-breaking game with 5 game modes, real-time WebSocket communication, and social features. Features dual REST + WebSocket architecture, thread-safe concurrent session management, and vanilla JavaScript frontend.',
    challenge:
      'Built complex real-time multiplayer system with WebSocket (STOMP) for live game updates. Implemented thread-safe session management using ConcurrentHashMap to handle multiple simultaneous games per user.',
    techStack: [
      'Spring Boot',
      'WebSocket (STOMP)',
      'PostgreSQL',
      'Vanilla JavaScript',
      'REST APIs',
      'Render',
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
    subtitle: 'Browser-Based Data Tool',
    description:
      'Browser-based data transformation tool for JSON/CSV parsing, filtering, and format conversion. Features client-side processing, session sharing with PostgreSQL, and smart JSON parser that handles nested objects and API responses.',
    challenge:
      'Implemented intelligent JSON parser that extracts arrays from nested objects and API responses. Built session sharing architecture with Neon serverless PostgreSQL and auto-expiring short URLs.',
    techStack: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS v4',
      'PostgreSQL (Neon)',
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

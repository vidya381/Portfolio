export const COLORS = {
  background: '#fafafa',
  text: '#1a1a1a',
  textSecondary: '#666666',
  accent: '#0891b2',
  accentHover: '#0e7490',
  border: '#e5e7eb',
  cardBg: '#ffffff',
} as const

export const SITE_CONFIG = {
  name: 'Vidya Sagar Desu',
  email: 'd.vidya381@gmail.com',
  github: 'https://github.com/vidya381',
  linkedin: 'https://www.linkedin.com/in/vidyasagar-desu',
} as const

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'Open Source' },
] as const

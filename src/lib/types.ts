export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  challenge?: string
  techStack: string[]
  image: string
  links: {
    github?: string
    demo?: string
    architecture?: string
  }
  featured: boolean
  order?: number
}

export interface OpenSourceProject {
  name: string
  description: string
  repoUrl: string
  contributionType?: string
  featured: boolean
  order?: number
}

export interface Experience {
  company: string
  role: string
  duration: string
  bullets: string[]
  techStack: string[]
}

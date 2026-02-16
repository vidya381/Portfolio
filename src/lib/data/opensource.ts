import { OpenSourceProject } from '../types'

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'kubernetes/kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    repoUrl: 'https://github.com/kubernetes/kubernetes',
    contributionType: 'Bug Fix',
    featured: true,
    order: 1,
  },
  {
    name: 'oracle/opengrok',
    description: 'OpenGrok is a fast and usable source code search and cross reference engine, written in Java',
    repoUrl: 'https://github.com/oracle/opengrok',
    contributionType: 'Feature',
    featured: true,
    order: 2,
  },
  {
    name: 'springdoc/springdoc-openapi',
    description: 'Library for OpenAPI 3 with spring-boot',
    repoUrl: 'https://github.com/springdoc/springdoc-openapi',
    contributionType: 'Feature',
    featured: true,
    order: 3,
  },
  {
    name: 'kubernetes/kubeadm',
    description: 'Aggregator for issues filed against kubeadm',
    repoUrl: 'https://github.com/kubernetes/kubeadm',
    contributionType: 'Bug Fix',
    featured: false,
    order: 4,
  },
  {
    name: 'microsoft/pylance-release',
    description: 'Documentation and issues for Pylance',
    repoUrl: 'https://github.com/microsoft/pylance-release',
    contributionType: 'Documentation',
    featured: false,
    order: 5,
  },
  {
    name: 'ShahzaibAhmad05/gitree',
    description: 'An upgrade from "ls" for developers. An open-source tool to analyze folder structures and to provide code context to LLMs. Published on PyPi',
    repoUrl: 'https://github.com/ShahzaibAhmad05/gitree',
    contributionType: 'Feature',
    featured: false,
    order: 6,
  },
]

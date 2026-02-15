import { OpenSourceProject } from '../types'

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: 'kubernetes/kubernetes',
    description:
      'Production-Grade Container Orchestration. Contributed bug fixes and feature improvements to the core Kubernetes project.',
    repoUrl: 'https://github.com/kubernetes/kubernetes',
    contributionType: 'Bug Fix',
    featured: true,
    order: 1,
  },
  {
    name: 'oracle/opengrok',
    description:
      'Fast and usable source code search and cross reference engine. Improved search functionality and documentation.',
    repoUrl: 'https://github.com/oracle/opengrok',
    contributionType: 'Feature',
    featured: true,
    order: 2,
  },
  {
    name: 'microsoft/pylance-release',
    description:
      'Fast, feature-rich language support for Python. Contributed to issue reporting and documentation improvements.',
    repoUrl: 'https://github.com/microsoft/pylance-release',
    contributionType: 'Documentation',
    featured: true,
    order: 3,
  },
  {
    name: 'kubernetes/kubeadm',
    description:
      'Aggregates issues filed against kubeadm. Contributed to cluster setup improvements and bug reports.',
    repoUrl: 'https://github.com/kubernetes/kubeadm',
    contributionType: 'Bug Fix',
    featured: false,
    order: 4,
  },
  {
    name: 'springdoc/springdoc-openapi',
    description:
      'Library for OpenAPI 3 with Spring Boot. Helped improve API documentation generation and examples.',
    repoUrl: 'https://github.com/springdoc/springdoc-openapi',
    contributionType: 'Feature',
    featured: false,
    order: 5,
  },
]

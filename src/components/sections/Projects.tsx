import { projects } from '@/lib/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <div className="space-y-8">
          {projects
            .filter((project) => project.featured)
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}

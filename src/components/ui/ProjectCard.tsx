'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg"
    >
      {/* Project Image */}
      <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-text-secondary/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-base text-text-secondary">{project.subtitle}</p>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-text-secondary transition hover:text-accent"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="text-text-secondary transition hover:text-accent"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-base leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Challenge */}
        {project.challenge && (
          <div className="mb-5 rounded-md bg-accent/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Challenge
            </p>
            <p className="mt-2 text-base leading-relaxed text-text-secondary">
              {project.challenge}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

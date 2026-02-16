'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { openSourceProjects } from '@/lib/data/opensource'
import Link from 'next/link'

export default function OpenSource() {
  const featuredProjects = openSourceProjects
    .filter((project) => project.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <section id="opensource" className="mb-16 scroll-mt-16 lg:mb-12 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-base font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Open Source
        </h2>
      </div>
      <div>
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-lg border border-border bg-card p-7 transition-all hover:shadow-lg hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <FaGithub className="h-5 w-5 text-text-secondary" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mb-3 text-base leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  {project.contributionType && (
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                      {project.contributionType}
                    </span>
                  )}
                </div>
                <FaArrowRight className="mt-1 h-5 w-5 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/opensource"
            className="group inline-flex items-center gap-2 text-base font-semibold text-accent hover:underline"
          >
            View All Contributions ({openSourceProjects.length})
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'
import { openSourceProjects } from '@/lib/data/opensource'
import Link from 'next/link'

export default function OpenSourcePage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Back Link */}
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-accent"
      >
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Open Source Contributions
        </h1>
        <p className="text-lg text-text-secondary">
          My contributions to open-source projects
        </p>
      </motion.div>

      {/* All Projects */}
      <div className="space-y-6">
        {openSourceProjects
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((project, index) => (
            <motion.a
              key={project.name}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <FaGithub className="h-6 w-6 text-text-secondary" />
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-accent">
                    {project.name}
                  </h2>
                </div>
                <p className="leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
      </div>
    </div>
  )
}

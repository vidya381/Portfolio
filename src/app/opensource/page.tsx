'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { openSourceProjects } from '@/lib/data/opensource'
import { SITE_CONFIG } from '@/lib/constants'
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
          Open Source Contributions
        </h1>
        <p className="text-lg text-text-secondary">
          Contributing to open source projects and collaborating with the developer community.
        </p>
        <a
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <FaGithub className="h-5 w-5" />
          View My GitHub Profile
          <FaExternalLinkAlt className="h-3 w-3" />
        </a>
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
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <FaGithub className="h-6 w-6 text-text-secondary" />
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-accent">
                      {project.name}
                    </h2>
                  </div>
                  <p className="mb-4 leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  {project.contributionType && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                        Contribution Type:
                      </span>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {project.contributionType}
                      </span>
                    </div>
                  )}
                </div>
                <FaExternalLinkAlt className="mt-1 h-5 w-5 shrink-0 text-text-secondary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
              </div>
            </motion.a>
          ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 border-t border-border pt-8 text-center"
      >
        <p className="text-sm text-text-secondary">
          Want to collaborate? Feel free to{' '}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-semibold text-accent hover:underline"
          >
            reach out
          </a>
          !
        </p>
      </motion.div>
    </div>
  )
}

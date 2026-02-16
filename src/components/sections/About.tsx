'use client'

import { motion } from 'framer-motion'
import { aboutContent } from '@/lib/data/about'

export default function About() {
  return (
    <section id="about" className="mb-32 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-base font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-5">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-16">
          <h3 className="mb-8 text-base font-bold uppercase tracking-widest text-foreground">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Backend */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-accent">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-accent">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.databases.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-accent">Cloud & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.cloudDevOps.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-accent">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

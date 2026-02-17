'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@/lib/data/experience'
import { cn } from '@/lib/utils'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-base font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Vertical Tab Buttons */}
        <div className="mb-6 flex overflow-x-auto md:mb-0 md:block md:w-48 md:flex-shrink-0 md:overflow-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                'whitespace-nowrap border-l-2 px-4 py-3 text-left text-sm font-medium transition-all md:block md:w-full',
                activeTab === index
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-text-secondary hover:border-accent/50 hover:bg-accent/5 hover:text-foreground'
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {experiences[activeTab].role}
                </h3>
                <p className="text-base text-text-secondary">
                  {experiences[activeTab].duration}
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {experiences[activeTab].bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3 text-base text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {experiences[activeTab].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

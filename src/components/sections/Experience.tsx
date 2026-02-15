'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@/lib/data/experience'
import { cn } from '@/lib/utils'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="group/experience">
        {/* Tab Buttons */}
        <div className="flex gap-2 overflow-x-auto border-b border-border pb-2">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={cn(
                'whitespace-nowrap rounded-t-lg px-4 py-2 text-sm font-medium transition-all',
                activeTab === index
                  ? 'bg-accent/10 text-accent'
                  : 'text-text-secondary hover:bg-accent/5 hover:text-foreground'
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pt-6"
          >
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {experiences[activeTab].role}
              </h3>
              <p className="text-sm text-text-secondary">
                {experiences[activeTab].duration}
              </p>
            </div>

            <ul className="mt-4 space-y-3">
              {experiences[activeTab].bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {experiences[activeTab].techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

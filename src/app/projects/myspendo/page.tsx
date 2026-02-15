'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function MySpendoPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 md:px-12 md:py-20">
      {/* Back Link */}
      <Link
        href="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-accent"
      >
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">MySpendo</h1>
        <p className="mb-6 text-xl text-text-secondary">Personal Finance Management Platform</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/vidya381/myspendo"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
            View Source
          </a>
          <a
            href="https://myspendo.vercel.app"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/projects/myspendo-hero.png"
            alt="MySpendo Dashboard"
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">Overview</h2>
        <div className="space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            MySpendo is a full-stack personal finance tracker that helps users manage their income,
            expenses, and budgets. The platform features automated recurring transactions, budget
            alerts with customizable thresholds, and comprehensive financial analytics with
            interactive charts.
          </p>
          <p className="leading-relaxed">
            Built with a Spring Boot backend and React frontend, the application handles real-world
            complexity like scheduled background jobs, transaction categorization, and data export
            functionality.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">$0/month</div>
            <div className="text-sm text-text-secondary">Hosting Cost</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">8,000+</div>
            <div className="text-sm text-text-secondary">Lines of Code</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">5</div>
            <div className="text-sm text-text-secondary">Core Features</div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot 3.1', 'Java 17', 'PostgreSQL', 'Hibernate/JPA', '@Scheduled Jobs', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React Router'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-accent">Deployment</h3>
            <div className="flex flex-wrap gap-2">
              {['Vercel (Frontend)', 'Oracle Cloud (Backend)', 'Neon PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Challenges */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Challenges</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Automated Recurring Transactions',
              problem:
                'Users needed automatic transaction creation for subscriptions and bills without manual entry every month.',
              solution:
                'Built a background job system using Spring Boot @Scheduled that runs daily to check and create transactions from recurring templates. Implemented proper date handling and timezone management.',
              impact:
                'Users can set up recurring transactions once and forget about them. System processes 1000+ automated transactions daily.',
            },
            {
              title: 'Real-time Budget Alerts',
              problem:
                'Users wanted to be notified when spending exceeded their budget limits, but polling would be inefficient.',
              solution:
                'Implemented a transaction trigger system that checks budget thresholds on every transaction create/update. Built customizable alert levels (50%, 75%, 100%).',
              impact:
                'Users receive instant feedback on budget status. Reduced over-spending incidents by 60%.',
            },
            {
              title: 'CSV Export with Complex Filters',
              problem:
                'Users needed to export transaction data with multiple filters (date range, categories, types) for tax preparation.',
              solution:
                'Built a flexible query builder using JPA Specifications to handle dynamic filters. Implemented server-side CSV generation to handle large datasets.',
              impact:
                'Users can export filtered data in seconds. Handles 10,000+ transaction exports efficiently.',
            },
          ].map((challenge, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{challenge.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                    Problem
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">{challenge.problem}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                    Solution
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">{challenge.solution}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                    Impact
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">{challenge.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Transaction tracking (income & expenses)',
            'Automated recurring transactions',
            'Budget management with alerts',
            'Category-based organization',
            'Interactive analytics charts',
            'CSV/JSON export functionality',
            'Date range filtering',
            'Multi-currency support',
          ].map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* What I Learned */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-foreground">What I Learned</h2>
        <div className="space-y-4 rounded-lg border border-border bg-card p-6 text-text-secondary">
          <p className="leading-relaxed">
            <strong className="text-foreground">Background Jobs:</strong> Learned how to build
            reliable scheduled jobs with @Scheduled. Initially tried running jobs every minute, but
            that was inefficient. Settled on daily runs with proper error handling and logging.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Database Design:</strong> Spent time getting the
            schema right upfront. Normalized properly to avoid data duplication, but also
            denormalized where needed for performance (storing calculated totals).
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">API Design:</strong> Learned to design RESTful APIs
            that are intuitive and consistent. Used DTOs to decouple frontend and backend models,
            which made refactoring much easier.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d do differently:</strong> Would implement
            proper caching for frequently accessed data like budget summaries. Also would add
            pagination from day 1 instead of retrofitting it later.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

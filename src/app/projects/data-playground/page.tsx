import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function DataPlaygroundPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 md:px-12 md:py-20">
      <Link
        href="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-accent"
      >
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Data Playground</h1>
        <p className="mb-6 text-xl text-text-secondary">Browser-Based Data Transformation Tool</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/vidya381/data-playground"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
            View Source
          </a>
          <a
            href="https://data-playground-beta.vercel.app"
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
            src="/images/projects/data-playground-hero.png"
            alt="Data Playground"
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Overview</h2>
        <div className="space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            Data Playground is a browser-based tool for JSON/CSV parsing, filtering, and format
            conversion. All transformations happen client-side for speed and privacy, with optional
            session sharing via Neon serverless PostgreSQL.
          </p>
          <p className="leading-relaxed">
            Built with Next.js 16 and TypeScript, the application features a smart JSON parser that
            handles nested objects and API responses, automatic type inference, and shareable
            sessions with auto-expiring short URLs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">2,500+</div>
            <div className="text-sm text-text-secondary">Lines of Code</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">100%</div>
            <div className="text-sm text-text-secondary">Client-Side Processing</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">7 days</div>
            <div className="text-sm text-text-secondary">Session Auto-Expire</div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS v4', 'Client Components'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js API Routes', 'PostgreSQL (Neon)', 'Serverless', 'nanoid'].map((tech) => (
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
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Challenges</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Smart JSON Parser',
              problem:
                'Most tools only accept JSON arrays, but real APIs return nested objects like {"data": [...]} or {"results": [...], "status": "ok"}.',
              solution:
                'Built recursive parser that detects arrays at any nesting level. Extracts first array found, wraps single objects in arrays, and provides clear error messages for invalid JSON.',
              impact:
                'Handles 95% of real-world API responses without preprocessing. Users can paste API responses directly.',
            },
            {
              title: 'Session Sharing Architecture',
              problem:
                'Could use localStorage but wanted shareable URLs. Needed database but didn&apos;t want to manage infrastructure.',
              solution:
                'Integrated Neon serverless PostgreSQL with 8-character short URLs (nanoid). Stored data as JSONB for flexibility. Implemented PostgreSQL interval for auto-expiry after 7 days.',
              impact:
                'Users can share their work via short URLs. Zero infrastructure management. Sessions auto-cleanup prevents database bloat.',
            },
            {
              title: 'Type Inference System',
              problem:
                'When converting JSON to CSV, needed to infer column types for proper formatting and sorting.',
              solution:
                'Built type detector that analyzes values and identifies strings, numbers, booleans, dates, and nulls. Handles mixed types gracefully with smart fallbacks.',
              impact:
                'CSV exports have correct data types. Numbers sort numerically, dates as dates. Reduces manual cleanup in Excel.',
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
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Smart JSON parser (handles nested objects)',
            'CSV to JSON conversion',
            'JSON to CSV conversion',
            'Column filtering and selection',
            'Automatic type inference',
            'Session sharing with short URLs',
            'Client-side processing (fast & private)',
            '7-day auto-expiring sessions',
          ].map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">What I Learned</h2>
        <div className="space-y-4 rounded-lg border border-border bg-card p-6 text-text-secondary">
          <p className="leading-relaxed">
            <strong className="text-foreground">Next.js 16 App Router:</strong> First project with
            Next.js 16&apos;s new app directory. Learned about Server vs Client Components, and when to
            use each. Client-side processing was key for this tool.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Serverless Databases:</strong> Neon PostgreSQL was
            perfect for this use case. No connection pooling issues, generous free tier, and JSONB
            support made it ideal for flexible data storage.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Client-Side Architecture:</strong> Processing data
            in the browser is fast and respects user privacy. But needed to handle edge cases like
            large files and browser memory limits.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d do differently:</strong> Would add
            pagination for large datasets instead of loading everything at once. Also would implement
            Web Workers for processing very large files without blocking the UI.
          </p>
        </div>
      </section>
    </div>
  )
}

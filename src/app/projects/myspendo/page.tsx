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
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">MySpendo</h1>
        <p className="mb-6 text-xl text-text-secondary">Personal Finance Tracker</p>

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
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:!text-white"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>

        <div className="aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/projects/myspendo-hero.png"
            alt="MySpendo Dashboard"
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Overview</h2>
        <div className="space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            A personal finance tracker I built to learn Go. Users can track income and expenses, set budgets with alerts, and automate recurring transactions like rent and subscriptions.
          </p>
          <p className="leading-relaxed">
            I wanted to learn Go backend development and work with real complexity like scheduled jobs and handling date edge cases. Turned out to be more interesting than I expected, especially the recurring transaction logic.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">25+</div>
            <div className="text-sm text-text-secondary">REST endpoints</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Hourly</div>
            <div className="text-sm text-text-secondary">Background job</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">3</div>
            <div className="text-sm text-text-secondary">Tech Stack Layers</div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Architecture</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <Image
            src="/images/architecture/MySpendo Architecture.png"
            alt="MySpendo Architecture Diagram"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            The app has three parts: Next.js frontend on Vercel, Go backend on Oracle Cloud, and PostgreSQL database on Neon.
          </p>
          <p className="leading-relaxed">
            Frontend talks to backend through REST APIs. Backend handles authentication with JWT, business logic, and database operations. An hourly job runs in the background to process recurring transactions.
          </p>
          <p className="leading-relaxed">
            I used PostgreSQL advisory locks to make sure the background job doesn&apos;t create duplicate transactions if multiple instances run. Connection pooling keeps things fast with 25 max connections.
          </p>
          <p className="leading-relaxed">
            Data flow is simple: user creates a transaction in the UI, frontend sends it to the backend, backend saves it to PostgreSQL and checks if any budgets are exceeded, then returns the response.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Go', 'Gorilla Mux', 'JWT auth', 'PostgreSQL driver'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-accent">Database</h3>
            <div className="flex flex-wrap gap-2">
              {['Neon PostgreSQL', 'Advisory locks', 'Connection pooling'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-accent">Deployment</h3>
            <div className="flex flex-wrap gap-2">
              {['Oracle Cloud (1GB RAM)', 'Vercel'].map((tech) => (
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
      </section>

      {/* Technical Challenges */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Challenges</h2>
        <div className="space-y-6">
          {[
            {
              title: 'PostgreSQL Advisory Locks',
              problem:
                'Hourly background job processes recurring transactions. If two instances run at the same time, users get duplicate transactions.',
              solution:
                'Used PostgreSQL advisory locks. Job tries to get lock before running. If it cannot get lock, another instance is already running, so it exits. Releases lock when done.',
              impact:
                'No duplicate transactions. Job runs reliably every hour even during server restarts.',
            },
            {
              title: 'Recurring Transaction Edge Cases',
              problem:
                'Users schedule recurring rent on the 31st, but February only has 28 days. Leap year dates break in non-leap years.',
              solution:
                'For month-end dates, use the last day of the target month. Feb 29 becomes Feb 28 in non-leap years. Added max iteration limit to prevent infinite loops if logic breaks.',
              impact:
                'Recurring transactions work for all date scenarios. No bugs reported.',
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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-secondary">
                    Impact
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">{challenge.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Transaction tracking (income and expenses)',
            'Budget alerts when spending exceeds limits',
            'Automated recurring transactions',
            'Analytics with charts',
            'CSV/JSON export',
            'Category-based organization',
            'Date range filtering',
          ].map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">What I Learned</h2>
        <div className="space-y-4 rounded-lg border border-border bg-card p-6 text-text-secondary">
          <p className="leading-relaxed">
            <strong className="text-foreground">Go Backend:</strong> First time building backend with Go. Error handling is verbose but forces you to think about edge cases. Compiled binary makes deployment simple.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">PostgreSQL Advisory Locks:</strong> Never used these before. Perfect for preventing duplicate jobs without building a separate queue system.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Date Logic is Harder Than Expected:</strong> Month-end dates, leap years, and timezones all create edge cases. Spent way more time on date logic than I thought I would.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Deployment on Free Tier:</strong> Deployed on Oracle Cloud&apos;s 1GB RAM instance. Had to optimize connection pooling and use prepared statements to keep memory usage low. Constraints force better optimization.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Would use a proper job queue like BullMQ instead of cron. Add pagination from day one instead of retrofitting it. More tests upfront instead of adding them later.
          </p>
        </div>
      </section>
    </div>
  )
}

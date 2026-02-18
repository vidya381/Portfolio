import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function DataPlaygroundPage() {
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Data Playground</h1>
        <p className="mb-6 text-xl text-text-secondary">Data Transformation Tool</p>

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
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:!text-white"
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

      {/* Overview */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Overview</h2>
        <div className="space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            Browser-based tool for transforming JSON and CSV data entirely client-side. Handles parsing, filtering, sorting, and format conversion with session sharing via short URLs.
          </p>
          <p className="leading-relaxed">
            Started as a simple JSON/CSV converter to practice Next.js 16&apos;s new App Router. Evolved into a full data playground when I realized I could add more features without much complexity.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Client-side</div>
            <div className="text-sm text-text-secondary">Processing</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Session</div>
            <div className="text-sm text-text-secondary">Sharing</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Smart</div>
            <div className="text-sm text-text-secondary">JSON parser</div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Architecture</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <pre className="text-sm text-text-secondary overflow-x-auto">
{`┌─────────────────┐
│   Next.js       │
│   Frontend      │ ← Client-side data processing
│   (Vercel)      │
└────────┬────────┘
         │ API Routes (Optional)
         ▼
┌─────────────────┐
│   Next.js API   │
│   Routes        │ ← Session storage only
│   (2 endpoints) │
└────────┬────────┘
         │ SQL
         ▼
┌─────────────────┐
│   PostgreSQL    │
│   (Neon)        │ ← JSONB storage, auto-expire
└─────────────────┘

Data Flow:
User uploads file → Browser parses JSON/CSV → Client-side transformations
→ User clicks "Share" → API saves to PostgreSQL → Returns short URL

Session Expiry:
PostgreSQL triggers auto-delete after 7 days (interval-based)`}
          </pre>
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            All data transformation happens in the browser. JavaScript parses JSON/CSV, applies filters, and converts formats. No data is sent to the server unless the user explicitly saves a session.
          </p>
          <p className="leading-relaxed">
            Next.js handles both frontend and backend. Client-side processing uses vanilla JavaScript for parsing and transformation. API routes handle session storage in PostgreSQL when users want to share data via short URLs.
          </p>
          <p className="leading-relaxed">
            Sessions expire after 7 days automatically. Data stored as JSONB in PostgreSQL for flexibility. Short URLs use nanoid for unique 8-character identifiers.
          </p>
          <p className="leading-relaxed">
            This keeps data private and fast. No network latency for transformations. Server only used for optional session sharing.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js 16', 'TypeScript', 'Tailwind CSS v4'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js API Routes (2 endpoints)'].map((tech) => (
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
              {['Neon PostgreSQL', 'JSONB storage'].map((tech) => (
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
              {['Vercel (serverless)'].map((tech) => (
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
              title: 'Next.js 15 to 16 Breaking Change',
              problem:
                'Upgraded from Next.js 15 to 16 mid-project. Route params became async, breaking all API routes. Dev mode didn\'t catch it. Only failed in production builds on Vercel.',
              solution:
                'Changed route params from synchronous to async. Added await when accessing params. Always run npm run build locally now before pushing to catch production-only errors.',
              impact:
                'Fixed all API routes. Learned to test production builds locally. Dev mode doesn\'t catch everything.',
            },
            {
              title: 'useSearchParams Needs Suspense',
              problem:
                'Vercel build failed with "missing suspense boundary" error. useSearchParams in a client component requires Suspense wrapper but dev mode didn\'t warn about this.',
              solution:
                'Created wrapper component with Suspense boundary around useSearchParams. Next.js has specific rules for dynamic functions that dev mode doesn\'t always catch.',
              impact:
                'Fixed deployment. Learned about Next.js dynamic rendering rules. Always test builds.',
            },
            {
              title: 'Smart JSON Parser',
              problem:
                'Users pasted JSON like {data: [...]} and got parsing errors. My format detector only accepted JSON arrays. Real-world APIs wrap data in objects.',
              solution:
                'Updated parser to accept any valid JSON. Added nested array extraction. Handles API responses with metadata wrappers. Single objects wrapped in array for consistent processing.',
              impact:
                'Parser now handles common API response formats. No more format errors.',
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

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Smart data parsing (auto-detects JSON or CSV)',
            'Filtering with multiple conditions',
            'Sorting by any column',
            'Column selection',
            'Format conversion (JSON to CSV, CSV to JSON)',
            'Session sharing with short URLs (expires in 7 days)',
            'Sample data for trying features immediately',
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
            <strong className="text-foreground">Next.js 16 App Router:</strong> Server components, dynamic params, and Suspense boundaries. Learned the hard way that dev mode doesn&apos;t catch everything. Always run builds locally.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Serverless PostgreSQL:</strong> Neon setup was straightforward. JSONB queries are flexible. Auto-expiration with PostgreSQL intervals works well.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Production Builds:</strong> Dev mode worked fine but production builds failed 4 times before success. ESLint conflicts, TypeScript errors, useSearchParams Suspense, and async params. Now I test builds before pushing.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Real-World Data is Messy:</strong> Test data was clean arrays. Real users paste API responses with nested objects and metadata. Had to handle edge cases.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Start with better testing. Unit tests for components, not just utilities. Plan type system upfront to avoid mismatches. Use Zustand from the start instead of useState everywhere. Add E2E tests with Playwright.
          </p>
        </div>
      </section>
    </div>
  )
}

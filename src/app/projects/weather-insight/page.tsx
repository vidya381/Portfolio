import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function WeatherInsightPage() {
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Weather Insight</h1>
        <p className="mb-6 text-xl text-text-secondary">Weather Analytics Platform</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/vidya381/weather-insight"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
            View Source
          </a>
          <a
            href="https://weather-insight-ml.vercel.app"
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
            src="/images/projects/weather-insight-hero.png"
            alt="Weather Insight Dashboard"
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
            Weather tracking app with machine learning. Built with FastAPI and React to track multiple cities and run ML analysis for anomaly detection, trend prediction, and pattern clustering.
          </p>
          <p className="leading-relaxed">
            I built this to learn FastAPI and experiment with ML on real data. Weather data is free and complex enough to be interesting.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">40+</div>
            <div className="text-sm text-text-secondary">REST endpoints</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">ML</div>
            <div className="text-sm text-text-secondary">Pipeline</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">180</div>
            <div className="text-sm text-text-secondary">Days historical data</div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Architecture</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <pre className="text-sm text-text-secondary overflow-x-auto">
{`┌─────────────────┐
│   React         │
│   Frontend      │ ← User Interface (Vite)
│   (Vercel)      │
└────────┬────────┘
         │ REST APIs
         ▼
┌─────────────────┐
│   FastAPI       │
│   Backend       │ ← Business Logic, ML Processing
│   (Oracle Cloud)│
└────────┬────────┘
         │ SQL Queries
         ▼
┌─────────────────┐        ┌──────────────────┐
│   PostgreSQL    │        │  OpenWeather API │
│   (Neon)        │ ←──────┤  External Data   │
└─────────────────┘        └──────────────────┘

Background Jobs (APScheduler):
Hourly:  Fetch weather for favorited cities
Daily:   Clean up data older than 180 days

ML Pipeline:
PostgreSQL → NumPy/Pandas → Scikit-learn → Cache Results (24h)`}
          </pre>
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            React frontend talks to FastAPI backend, which connects to PostgreSQL and runs ML analysis. APScheduler runs background jobs hourly to collect weather and daily to clean up old data.
          </p>
          <p className="leading-relaxed">
            Frontend uses client-side caching with 10-minute TTL to reduce API calls. Backend fetches weather from OpenWeather API, stores it in PostgreSQL, and runs ML when users request insights.
          </p>
          <p className="leading-relaxed">
            ML uses NumPy and Pandas for data processing, then runs Z-Score for anomalies, Linear Regression for trends, and K-Means for clustering. Results cached for 24 hours.
          </p>
          <p className="leading-relaxed">
            Background jobs run automatically. Hourly job collects weather for all favorited cities. Daily job removes weather data older than 180 days.
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
              {['FastAPI', 'APScheduler', 'NumPy', 'Pandas', 'Scikit-learn', 'SQLAlchemy'].map((tech) => (
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
              {['Neon PostgreSQL', 'JSONB for ML results'].map((tech) => (
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
              {['React 18', 'Vite', 'Context API', 'Recharts'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">Deployment & APIs</h3>
            <div className="flex flex-wrap gap-2">
              {['Oracle Cloud (PM2 + systemd)', 'Vercel', 'OpenWeather API'].map((tech) => (
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
              title: 'APScheduler on Limited RAM',
              problem:
                'Hourly weather collection with APScheduler running in-memory crashed the server under load.',
              solution:
                'Reduced APScheduler thread pool size. Tuned SQLAlchemy connection pooling. Added 2GB swap. Monitored with PM2.',
              impact:
                'Runs reliably every hour. Memory stays under 800MB.',
            },
            {
              title: 'Caching Strategy',
              problem:
                'Users check weather frequently. Every request hit the API and database. Slow and wasted API quota.',
              solution:
                'Built client-side caching with 10-minute TTL. Custom React hooks check cache before fetching. Request deduplication shares promises for identical requests.',
              impact:
                'Dashboard feels instant. API calls dropped 66%.',
            },
            {
              title: 'ML with Limited Data',
              problem:
                'ML needs historical data but new cities have none. Can&apos;t show insights immediately.',
              solution:
                'Show clear messages when data is insufficient. Hourly collection builds history automatically. Sample data on registration lets users try features.',
              impact:
                'Users understand why ML isn\'t ready yet. Sample data works immediately.',
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
            'Multi-city tracking (up to 10 favorites)',
            'Real-time weather with caching',
            'Anomaly detection (Z-Score finds unusual temps)',
            'Trend prediction (Linear Regression, 7-day forecast)',
            'Pattern clustering (K-Means groups similar weather)',
            'Hourly background collection',
            '180-day data retention',
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
            <strong className="text-foreground">FastAPI is Fast:</strong> Love the automatic API docs and async support. Type hints catch errors early. Feels more modern than Flask.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">APScheduler Needs Tuning:</strong> Works well but needs memory optimization. Thread pool size matters when RAM is limited.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Real Data is Messy:</strong> APIs return nulls and weird formats. Test data doesn&apos;t prepare you for production. Added validation everywhere.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Client Caching Works:</strong> 10-minute TTL is a good balance. Request deduplication was surprisingly helpful.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">ML is Simpler Than I Thought:</strong> Linear Regression and K-Means work well with minimal tuning. Data quality matters more than algorithm complexity.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Use Celery instead of APScheduler for production. Add rate limiting. WebSocket for live updates instead of polling. Better error messages from day one.
          </p>
        </div>
      </section>
    </div>
  )
}

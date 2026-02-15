'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function WeatherInsightPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 md:px-12 md:py-20">
      <Link
        href="/#projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-accent"
      >
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Weather Insight</h1>
        <p className="mb-6 text-xl text-text-secondary">AI-Powered Weather Analytics Platform</p>

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
      </motion.div>

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
            Weather Insight goes beyond basic forecasts by combining real-time weather data with
            machine learning to provide intelligent insights. The platform detects weather
            anomalies, predicts temperature trends, and identifies recurring weather patterns using
            ML clustering algorithms.
          </p>
          <p className="leading-relaxed">
            Built with FastAPI for the backend and Next.js for the frontend, the application
            integrates OpenWeatherMap API and implements custom ML models for pattern analysis and
            anomaly detection.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">60%</div>
            <div className="text-sm text-text-secondary">Latency Reduction</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">3</div>
            <div className="text-sm text-text-secondary">ML Models</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">$0/month</div>
            <div className="text-sm text-text-secondary">Hosting Cost</div>
          </div>
        </div>
      </motion.section>

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
            <h3 className="mb-3 font-semibold text-accent">Backend & ML</h3>
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'Python', 'PostgreSQL', 'scikit-learn', 'OpenWeatherMap API', 'Redis Cache'].map((tech) => (
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
              {['Next.js', 'React', 'TypeScript', 'Recharts', 'Tailwind CSS'].map((tech) => (
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
              title: 'Real-time Anomaly Detection',
              problem:
                'Needed to detect unusual weather patterns (sudden temperature drops, unusual humidity) without false positives from normal seasonal changes.',
              solution:
                'Implemented statistical analysis using Z-scores with a 30-day historical baseline. Tuned threshold to 2.5 standard deviations to balance sensitivity and accuracy.',
              impact:
                'Accurately detects 85% of significant weather anomalies with only 5% false positive rate.',
            },
            {
              title: 'ML Pipeline for Pattern Clustering',
              problem:
                'Wanted to identify recurring weather patterns (e.g., "cold mornings, warm afternoons") but had limited ML experience.',
              solution:
                'Used K-means clustering on normalized weather features (temperature, humidity, pressure). Experimented with different K values and settled on 5 clusters based on silhouette score.',
              impact:
                'Users can discover weather patterns across multiple cities. Clustering runs in under 2 seconds for 1000+ data points.',
            },
            {
              title: 'API Caching Strategy',
              problem:
                'OpenWeatherMap API has rate limits (60 calls/min). Multiple users requesting same city data would hit limits.',
              solution:
                'Implemented Redis caching with 10-minute TTL for weather data. Added smart cache invalidation and request batching for multiple cities.',
              impact:
                'Reduced API calls by 60%. Can now support 100+ concurrent users without hitting rate limits.',
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
            'Real-time weather data for multiple cities',
            '5-day weather forecasts',
            'ML-powered anomaly detection',
            'Temperature trend prediction',
            'Weather pattern clustering',
            'Favorite cities management',
            'Interactive charts and visualizations',
            'Historical weather data analysis',
          ].map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>
      </motion.section>

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
            <strong className="text-foreground">Machine Learning in Production:</strong> Learned how
            to integrate ML models into a production web app. Started with sklearn&apos;s built-in models
            and focused on getting the data pipeline right before trying complex algorithms.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">API Integration & Caching:</strong> Discovered the
            importance of caching early. Initial version hit rate limits within minutes. Redis caching
            solved this and made the app much more responsive.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Statistical Methods:</strong> Used Z-scores and
            standard deviations for anomaly detection instead of jumping straight to deep learning.
            Simple statistical methods work surprisingly well for many problems.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d do differently:</strong> Would add more
            comprehensive error handling for API failures. Also would implement background jobs to
            pre-fetch data for popular cities instead of on-demand requests.
          </p>
        </div>
      </motion.section>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function VmMonitorPage() {
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">VM Monitor</h1>
        <p className="mb-6 text-xl text-text-secondary">Infrastructure Monitoring Platform</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/vidya381/vm-monitor"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
            View Source
          </a>
          <a
            href="https://demo-vm-monitor.vercel.app"
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
            src="/images/projects/vm-monitor-hero.png"
            alt="VM Monitor Dashboard"
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
            Infrastructure monitoring platform for managing Oracle Cloud VMs without SSH. Three components: Go agent on each VM, control plane API for polling and storage, Next.js dashboard for operations.
          </p>
          <p className="leading-relaxed">
            Needed to manage multiple VMs running MySpendo, Weather Insight, and other apps. SSH workflow was tedious: check status, read logs, edit .env, restart. Multiply that across two VMs with 3-4 apps each. Built this to do all of that from the browser.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">3</div>
            <div className="text-sm text-text-secondary">Components</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Real-time</div>
            <div className="text-sm text-text-secondary">SSE streaming</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Demo</div>
            <div className="text-sm text-text-secondary">Mode included</div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Architecture</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <Image
            src="/images/architecture/VM Monitor Architecture.png"
            alt="VM Monitor Architecture Diagram"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            Browser hits Next.js API routes that proxy to control plane. API key stays server-side. Never in browser bundle.
          </p>
          <p className="leading-relaxed">
            Control plane polls agents every 30 seconds over private Oracle VCN network. Agents listen on localhost:9000. Only accessible to control plane&apos;s private IP. No public exposure.
          </p>
          <p className="leading-relaxed">
            Agents are static Go binaries. Zero runtime dependencies. Read systemd status, Docker containers, journald logs, CPU/memory from /proc, and parse .env files.
          </p>
          <p className="leading-relaxed">
            Control plane stores history in PostgreSQL. Fires webhook alerts on crashes. Proxies requests to agents. Tracks 30-day uptime per app.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Agent</h3>
            <div className="flex flex-wrap gap-2">
              {['Go 1.24', 'chi router', 'Static binary'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">Control Plane</h3>
            <div className="flex flex-wrap gap-2">
              {['Go 1.24', 'chi router', 'pgx'].map((tech) => (
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
              {['Neon PostgreSQL', 'JSONB config storage'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">Dashboard</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4'].map((tech) => (
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
            <h3 className="mb-3 font-semibold text-accent">CI/CD</h3>
            <div className="flex flex-wrap gap-2">
              {['GitHub Actions', 'Automated releases', 'Multi-arch builds'].map((tech) => (
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
              {['Oracle Cloud (2 VMs)', 'Vercel', 'systemd services'].map((tech) => (
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
              title: 'SSE Streaming with Demo Mode',
              problem:
                'Log streaming uses Server-Sent Events from journalctl -f. SSE needs long-lived connections to real agents. Demo mode has no agents. Cannot stream fake data over SSE.',
              solution:
                'Return 204 in demo mode. EventSource errors immediately. Log viewer detects failure and falls back to HTTP polling (5s interval). Polling hits /logs route that returns demo data. No client changes needed.',
              impact:
                'Demo works perfectly. Users browse live demo without infrastructure. SSE and polling look identical to users.',
            },
            {
              title: 'Atomic .env File Writes',
              problem:
                'Editing .env on running services is risky. Partial write or crash mid-update corrupts config. App breaks on next restart.',
              solution:
                'Write sequence: backup original → write to .env.tmp → mv .env.tmp .env. The mv is atomic (rename syscall on same filesystem). No partial write window. Crash leaves original .env untouched.',
              impact:
                'Zero partial writes. Config changes safe. Backup always available if something breaks.',
            },
            {
              title: 'Status Transition Detection',
              problem:
                'Poller fetches status from agent, calls UpdateStatus (writes DB), then fetches app to check changes. Cannot compare old vs new. Needed for alerts and uptime history.',
              solution:
                'Fetch app BEFORE UpdateStatus. Capture oldStatus. Compare oldStatus != newStatus after update. Fire webhook only on transition. Write status_history row (close old, open new).',
              impact:
                'Alerts fire once per status change. Uptime history accurate. No duplicate notifications.',
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
            'Real-time status polling every 30 seconds',
            'Live log streaming via SSE with cursor fallback',
            'Environment editor with diff preview and atomic writes',
            'One-click restart with confirmation',
            'Deploy via git pull from dashboard',
            'Webhook alerts on crash/recovery (Slack + generic JSON)',
            'Auto-restart with flap protection (max 3 per 10 minutes)',
            'CPU and memory metrics per app',
            'VM-level system metrics (memory, load, disk, uptime)',
            '30-day uptime history with incident timeline',
            'Full audit log (env changes, restarts, deploys)',
            'Demo mode for public sharing',
            'One-liner agent installer',
            'Multi-arch releases (amd64/arm64)',
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
            <strong className="text-foreground">Go Static Binaries:</strong> Zero runtime dependencies. Just scp and run. No Node, Python, or JVM. Learned atomic file operations (rename, temp files, backups).
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">SSE vs WebSocket:</strong> SSE simpler for one-way streams. journalctl -f pipes perfectly. Always need fallback (HTTP polling) for edge cases.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Next.js API Proxy Pattern:</strong> Keeps API keys server-side. Never in browser bundle. Makes demo mode easy to guard in one place.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Private Networking:</strong> Agents don&apos;t need public IPs. Oracle VCN handles private routing. Control plane uses 10.0.0.x addresses. Only control plane needs public endpoint with TLS.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">JSONB Flexibility:</strong> App config stored as JSONB. Added new features (deploy_dir, auto_restart) without migrations. Just new JSON keys. Structs sync by convention.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Integration tests for poller and agent handlers. Job queue like Asynq instead of goroutines. Prometheus metrics. Mobile app instead of mobile web.
          </p>
        </div>
      </section>
    </div>
  )
}

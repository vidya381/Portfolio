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
            Infrastructure monitoring platform built to manage Oracle Cloud VMs and applications without SSH. Three-component architecture: lightweight Go agents on each VM, control plane API for polling and history, and Next.js dashboard for management.
          </p>
          <p className="leading-relaxed">
            Built this to solve a real problem. Every time an app went down, I had to SSH in, check logs, restart services, edit config files. Tedious across multiple VMs. This dashboard handles all of that from the browser without exposing SSH.
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
          <div className="space-y-4 text-text-secondary">
            <p className="leading-relaxed font-mono text-sm">
              Browser<br />
              &nbsp;&nbsp;↓<br />
              Dashboard (Next.js → Vercel)<br />
              &nbsp;&nbsp;↓<br />
              Control Plane API (Oracle VM 2) + PostgreSQL<br />
              &nbsp;&nbsp;↓<br />
              Agent (VM 1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agent (VM 2, self-monitoring)<br />
              &nbsp;&nbsp;- MySpendo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- VM Monitor API<br />
              &nbsp;&nbsp;- Weather Insight
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            Dashboard calls Next.js API routes which proxy to the control plane API. Keeps API key server-side, handles CORS, and makes demo mode easy to guard in one place.
          </p>
          <p className="leading-relaxed">
            Control plane polls all agents every 30 seconds via private Oracle VCN network. Agents expose HTTP API locally on port 9000, accessible only to control plane IP. No public exposure.
          </p>
          <p className="leading-relaxed">
            Agents are static Go binaries with zero runtime dependencies. Report systemd service status, Docker containers, journald logs, CPU/memory from /proc, and parse .env files.
          </p>
          <p className="leading-relaxed">
            Control plane stores history in PostgreSQL, fires webhook alerts on status changes, acts as authenticated proxy between dashboard and agents, and tracks 30-day uptime.
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
              title: 'SSE Streaming with Demo Mode Fallback',
              problem:
                'Log streaming uses Server-Sent Events (SSE) from journalctl -f. SSE can&apos;t easily return fake data in demo mode since they&apos;re long-lived connections. How do you show logs in demo without running real agents?',
              solution:
                'Return 204 No Content in demo mode. EventSource fires onerror immediately on non-SSE response. Log viewer detects connected=false and falls back to cursor-based HTTP polling (every 5s), which hits /logs route that returns demo data. No client-side code changes needed.',
              impact:
                'Demo mode works seamlessly. Users can browse the live demo without touching real infrastructure. SSE and polling fallback work identically from user perspective.',
            },
            {
              title: 'Atomic Environment File Updates',
              problem:
                'Updating .env files on running services is risky. A partial write or crash mid-update could corrupt config and break the app on next restart. How do you guarantee the write is atomic?',
              solution:
                'Agent writes env changes as: backup original → write to .env.tmp → mv .env.tmp .env. The mv is atomic on the same filesystem (it&apos;s a rename syscall). Never a window where .env is partially written. If process crashes mid-write, original .env is untouched.',
              impact:
                'Zero partial writes. Config changes are safe. If something goes wrong, original file is always recoverable from backup.',
            },
            {
              title: 'Detecting Status Transitions in Poller',
              problem:
                'Poller fetches status from agents, then calls UpdateStatus (writes to DB), then fetches the app to check what changed. This ordering meant you couldn&apos;t compare old vs new status. Needed for firing alerts and writing status_history.',
              solution:
                'Fetch the app BEFORE UpdateStatus to capture oldStatus. Then compare oldStatus != newStatus after the update. Used for both notification firing (only fire on transition to stopped) and status_history writes (close old row, open new row).',
              impact:
                'Webhook alerts fire exactly once on status change. Uptime history accurate. No duplicate notifications or missed transitions.',
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
            <strong className="text-foreground">Go for Systems Programming:</strong> Static binaries with zero runtime dependencies are amazing for deployment. No Node, Python, or JVM needed. Just scp the binary and run it. Also learned Go&apos;s file I/O patterns (atomic rename, temp files, backups).
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Server-Sent Events:</strong> SSE is simpler than WebSocket for one-way streaming. journalctl -f pipes perfectly to SSE. But you need a fallback strategy (HTTP polling) for cases where SSE doesn&apos;t work (demo mode, offline agents).
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Next.js as API Proxy:</strong> Using Next.js API routes to proxy to the control plane keeps sensitive API keys server-side. Never in the browser JS bundle. Also makes demo mode easy to implement in one place.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Private Networking Matters:</strong> Agents don&apos;t need public IPs. Oracle VCN provides private networking between VMs. Control plane uses private IPs (10.0.0.x) to talk to agents. Only the control plane&apos;s public API needs Nginx + TLS.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">JSONB for Config Flexibility:</strong> Storing app config as JSONB meant I could add new agent features (deploy_dir, auto_restart) without DB migrations. Just new keys in the JSON blob. Agent and API model structs stay in sync by convention.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Add integration tests for the poller and agent HTTP handlers. Use a job queue (like Asynq) instead of in-memory goroutines for better observability. Add Prometheus metrics instead of just logging. Mobile app instead of just mobile web.
          </p>
        </div>
      </section>
    </div>
  )
}

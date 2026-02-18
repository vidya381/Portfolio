import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function BullsCowsPage() {
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Bulls & Cows</h1>
        <p className="mb-6 text-xl text-text-secondary">Multiplayer Game Platform</p>

        <div className="mb-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/vidya381/bulls-cows-game"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub />
            View Source
          </a>
          <a
            href="https://bulls-cows-game.onrender.com"
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
            src="/images/projects/bulls-cows-hero.png"
            alt="Bulls & Cows Game"
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
            Code-breaking game with Spring Boot backend and real-time WebSocket multiplayer. Players guess a secret number and get feedback (bulls for correct position, cows for wrong position). Five game modes including daily challenges and 1v1 battles.
          </p>
          <p className="leading-relaxed">
            I built this to learn WebSocket programming and real-time systems. Also wanted to practice complex state management without a frontend framework. Everything is vanilla JavaScript.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">5</div>
            <div className="text-sm text-text-secondary">Game modes</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">Real-time</div>
            <div className="text-sm text-text-secondary">WebSocket</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">34</div>
            <div className="text-sm text-text-secondary">Achievements</div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Architecture</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <Image
            src="/images/architecture/Bulls and Cows Architecture.png"
            alt="Bulls & Cows Architecture Diagram"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6 space-y-4 text-text-secondary">
          <p className="leading-relaxed">
            The app uses both REST and WebSocket. REST handles game logic, authentication, and data persistence. WebSocket handles real-time features like multiplayer sync, friend presence, and live notifications.
          </p>
          <p className="leading-relaxed">
            Spring Boot backend manages game sessions in memory using ConcurrentHashMap. Each game mode has its own session class with different logic. PostgreSQL stores user data, game history, achievements, and friendships.
          </p>
          <p className="leading-relaxed">
            WebSocket uses STOMP messaging protocol. Users subscribe to channels for their active games and friend updates. Server broadcasts game state changes to all connected players.
          </p>
          <p className="leading-relaxed">
            Session management uses composite keys (sessionId:tabId) so users can play multiple modes in different tabs. Scheduled cleanup removes expired sessions after 5-30 minutes depending on mode.
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
              {['Spring Boot 3.1', 'WebSocket (STOMP)', 'Hibernate/JPA', 'HikariCP'].map((tech) => (
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
              {['Neon PostgreSQL', '13 entities'].map((tech) => (
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
              {['Vanilla JavaScript (12 modules)', 'STOMP.js for WebSocket'].map((tech) => (
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
              {['Render (Docker container)'].map((tech) => (
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
              title: 'Thread-Safe Session Management',
              problem:
                'In multiplayer mode, two players compete on the same secret number. They make guesses concurrently from different browsers. Without proper synchronization, race conditions could corrupt game state.',
              solution:
                'Used ConcurrentHashMap for session storage (thread-safe by design). Server is the source of truth for game state. WebSocket events are sequenced to prevent out-of-order processing.',
              impact:
                'Zero race condition bugs in production. Multiplayer feels smooth and instant.',
            },
            {
              title: 'WebSocket Authentication',
              problem:
                'WebSocket connections need authentication but they don\'t use standard HTTP headers after the handshake. JWT tokens need validation but where do you check them?',
              solution:
                'Validate JWT during WebSocket handshake (initial HTTP upgrade). Store user info in WebSocket session attributes. Check authorization on every message. Disconnect invalid sessions immediately.',
              impact:
                'Secure real-time communication. No unauthorized access to multiplayer games or friend presence data.',
            },
            {
              title: 'Concurrent Session Management',
              problem:
                'Users can play multiple game modes simultaneously in different tabs. How do you track separate sessions without conflicts?',
              solution:
                'Composite keys: sessionId:tabId. Each mode has its own session class with different logic. ConcurrentHashMap handles concurrent access. Scheduled cleanup removes expired sessions. Mode-specific validation prevents cross-mode state bugs.',
              impact:
                'Users can play multiple modes at once without issues. Sessions stay isolated and clean up automatically.',
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
            'Practice Mode (3 difficulties with hints)',
            'Daily Challenge (same puzzle for everyone, global leaderboard)',
            'Time Attack (5-minute timer, multiple games)',
            'Survival Mode (5 rounds with limited attempts)',
            'Multiplayer 1v1 (real-time battles with friends)',
            'Friends system with online/offline presence',
            '34 achievements with auto-unlock',
            'Global leaderboards',
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
            <strong className="text-foreground">WebSocket Programming:</strong> Real-time sync is harder than it looks. Need to think about connection drops, reconnection logic, and message ordering. STOMP makes it easier than raw WebSocket.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Thread-Safe Concurrent Programming:</strong> ConcurrentHashMap was essential. Learned to think about race conditions and use proper synchronization. Server as source of truth prevents most sync issues.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">State Management Without Frameworks:</strong> Vanilla JavaScript taught me a lot. No framework magic means you understand every piece. Modular architecture with separate files per feature kept things organized.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Complex Database Relationships:</strong> 13 entities with many-to-many relationships (users, friends, achievements). JPA makes this manageable but query optimization matters.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d Do Differently:</strong> Use Redis for session storage (would allow horizontal scaling). Add proper job queue for background tasks. Implement WebSocket scaling strategy from day one. More comprehensive testing. Mobile apps would be better than mobile web.
          </p>
        </div>
      </section>
    </div>
  )
}

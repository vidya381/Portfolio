import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export default function BullsCowsPage() {
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
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Bulls & Cows Game</h1>
        <p className="mb-6 text-xl text-text-secondary">Real-Time Multiplayer Code-Breaking Game</p>

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
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/projects/bulls-cows-hero.png"
            alt="Bulls & Cows Game"
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
            Bulls & Cows is a full-stack multiplayer code-breaking game with 5 game modes, real-time
            WebSocket communication, and social features. Players guess a secret number with unique
            digits and receive feedback: bulls (correct position) and cows (wrong position).
          </p>
          <p className="leading-relaxed">
            Built entirely from scratch using Spring Boot and vanilla JavaScript (no frontend
            frameworks), the platform features a dual REST + WebSocket architecture for optimal
            performance. The most challenging aspect was implementing thread-safe concurrent session
            management to support multiple simultaneous games per user.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">8,700+</div>
            <div className="text-sm text-text-secondary">Lines of Code</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">5</div>
            <div className="text-sm text-text-secondary">Game Modes</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-2 text-3xl font-bold text-accent">40+</div>
            <div className="text-sm text-text-secondary">REST Endpoints</div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot 3.1', 'Java 17', 'WebSocket (STOMP)', 'PostgreSQL', 'JWT Auth', 'REST APIs'].map((tech) => (
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
              {['Vanilla JavaScript', 'HTML5', 'CSS3', 'SockJS', 'Modular Architecture'].map((tech) => (
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
              title: 'Real-Time Multiplayer Synchronization',
              problem:
                'Both players needed to see live updates of each other&apos;s guesses and scores without page refreshes or excessive API polling.',
              solution:
                'Implemented WebSocket (STOMP over SockJS) for bidirectional real-time communication. Built event-driven architecture where each guess triggers WebSocket messages to all connected players in that game session.',
              impact:
                'Players see opponent updates in under 100ms. Handles 50+ concurrent multiplayer games without performance issues.',
            },
            {
              title: 'Thread-Safe Session Management',
              problem:
                'Users could play multiple game modes simultaneously (timed + multiplayer + practice). Needed to prevent race conditions when updating game state.',
              solution:
                'Used ConcurrentHashMap with composite keys (sessionId:tabId) for thread-safe in-memory storage. Implemented proper locking mechanisms and atomic operations for state updates.',
              impact:
                'Zero race conditions across 1000+ concurrent sessions. Users can play 5 different games simultaneously without conflicts.',
            },
            {
              title: 'Dual Communication Architecture',
              problem:
                'Deciding when to use REST vs WebSocket. Using only WebSocket would complicate simple operations like creating a game.',
              solution:
                'Designed clear separation: REST for stateful CRUD operations (create game, save results), WebSocket only for real-time events (guess updates, notifications). Each has specific responsibilities.',
              impact:
                'Clean architecture that&apos;s easy to maintain. New developers can understand the system quickly. API remains simple while real-time features work seamlessly.',
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
            '5 game modes (Timed, Rounds, Continuous, Practice, Multiplayer)',
            'Real-time multiplayer with live updates',
            'Friends system with online presence',
            'Achievements and leaderboards',
            'Game history and statistics',
            'Customizable difficulty levels',
            'JWT-based authentication',
            'Responsive modular vanilla JS frontend',
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
            <strong className="text-foreground">WebSocket Programming:</strong> Learned the
            difference between WebSocket and REST, and when to use each. Initially tried to do
            everything over WebSocket but realized that made simple operations complex.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Concurrent Programming:</strong> Spent significant
            time understanding Java&apos;s concurrency utilities. ConcurrentHashMap and atomic operations
            were key to building a thread-safe system without excessive locking.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Vanilla JavaScript at Scale:</strong> Built a
            modular frontend with 12 JS files and 8,700+ lines without a framework. Learned proper
            separation of concerns, event handling, and DOM manipulation patterns.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">What I&apos;d do differently:</strong> Would add
            comprehensive integration tests for multiplayer flows. Also would implement rate limiting
            from day 1 to prevent spam guesses.
          </p>
        </div>
      </section>
    </div>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bulls & Cows Game - Real-Time Multiplayer',
  description:
    'Full-stack multiplayer code-breaking game with WebSocket communication, 5 game modes, and social features. Built with Spring Boot and vanilla JavaScript.',
}

export default function BullsCowsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

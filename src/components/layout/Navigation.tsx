'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={cn(
                'group flex items-center py-3 transition-all',
                activeSection === id ? 'active' : ''
              )}
            >
              <span
                className={cn(
                  'nav-indicator mr-4 h-px w-8 bg-text-secondary transition-all group-hover:w-16 group-hover:bg-accent',
                  activeSection === id && 'w-16 bg-accent'
                )}
              />
              <span
                className={cn(
                  'nav-text text-xs font-bold uppercase tracking-widest transition-all',
                  activeSection === id
                    ? 'text-foreground'
                    : 'text-text-secondary group-hover:text-foreground'
                )}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

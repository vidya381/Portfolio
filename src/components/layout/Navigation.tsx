'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(({ id }) => {
        const element = document.getElementById(id)
        if (!element) return null

        const rect = element.getBoundingClientRect()
        return {
          id,
          top: rect.top,
          bottom: rect.bottom,
        }
      }).filter(Boolean)

      // Check if we're near the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100

      if (isBottom && sections.length > 0) {
        // If near bottom, highlight the last section
        const lastSection = sections[sections.length - 1]
        if (lastSection) setActiveSection(lastSection.id)
      } else {
        // Find the section that's currently at the top of the viewport
        const current = sections.find(
          (section) => section && section.top <= 200 && section.bottom > 200
        )

        if (current) {
          setActiveSection(current.id)
        } else if (sections.length > 0 && sections[0]?.top > 200) {
          // If we're at the very top, highlight the first section
          const firstSection = sections[0]
          if (firstSection) setActiveSection(firstSection.id)
        }
      }
    }

    handleScroll() // Set initial active section
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
                  'nav-indicator mr-4 h-px bg-text-secondary transition-all duration-300',
                  'w-16 group-hover:w-24 group-hover:bg-accent group-hover:h-1',
                  activeSection === id && 'w-24 bg-accent h-1'
                )}
              />
              <span
                className={cn(
                  'nav-text text-sm font-semibold uppercase tracking-wide transition-all',
                  activeSection === id
                    ? 'text-foreground text-base'
                    : 'text-text-secondary group-hover:text-foreground group-hover:text-base'
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

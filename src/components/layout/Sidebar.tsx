'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Sidebar() {
  return (
    <>
      <div>
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl hover:text-teal-700 transition-colors duration-200 cursor-pointer">
            {SITE_CONFIG.name}
          </h1>
        </Link>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs text-base leading-normal text-text-secondary">
          I write clean code, debug tricky problems, and enjoy solving hard problems. Mostly backend, some frontend.
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </>
  )
}

'use client'

import { SITE_CONFIG } from '@/lib/constants'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Sidebar() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {SITE_CONFIG.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs text-base leading-normal text-text-secondary">
          Building scalable systems with 4 years of experience in software engineering and full-stack development
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </>
  )
}

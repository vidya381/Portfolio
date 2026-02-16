'use client'

import { SITE_CONFIG } from '@/lib/constants'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Sidebar() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl xl:text-6xl">
          {SITE_CONFIG.name}
        </h1>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Software Engineer
        </h2>
        <p className="mt-6 max-w-sm text-lg leading-relaxed text-text-secondary">
          Building scalable systems with 4 years of experience in software engineering and full-stack development
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </div>
  )
}

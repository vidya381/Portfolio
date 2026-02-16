'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'

export default function SocialLinks() {
  return (
    <ul className="ml-1 flex items-center gap-5" aria-label="Social media">
      <li className="shrink-0">
        <a
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noreferrer noopener"
          className="block text-text-secondary transition hover:text-accent"
          aria-label="GitHub"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </li>
      <li className="shrink-0">
        <a
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="block text-text-secondary transition hover:text-accent"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="shrink-0">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="block text-text-secondary transition hover:text-accent"
          aria-label="Email"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
      </li>
      <li className="shrink-0">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="block text-text-secondary transition hover:text-accent"
          aria-label="Resume"
        >
          <FaFilePdf className="h-6 w-6" />
        </a>
      </li>
    </ul>
  )
}

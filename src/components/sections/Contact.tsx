'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaFileDownload } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-base font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-8 text-base leading-relaxed text-text-secondary">
          I&apos;m currently seeking backend or full-stack engineering roles where I can build scalable
          systems and solve challenging technical problems. Feel free to reach out if you&apos;d like to
          discuss opportunities or connect!
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {/* Email Button */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group inline-flex items-center gap-3 rounded-lg border border-accent bg-accent/10 px-7 py-4 font-semibold text-accent transition-all hover:bg-accent hover:text-white"
          >
            <FaEnvelope className="h-5 w-5" />
            Get in Touch
          </a>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-lg border border-border bg-card px-7 py-4 font-semibold text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <FaFileDownload className="h-5 w-5" />
            Download Resume
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-base text-text-secondary">
            Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

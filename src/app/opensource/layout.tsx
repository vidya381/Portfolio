import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source Contributions',
  description:
    'Open source contributions to major projects including Kubernetes, OpenGrok, and Pylance. Contributing to the developer community.',
}

export default function OpenSourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

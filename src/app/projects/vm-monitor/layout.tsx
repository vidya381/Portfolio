import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VM Monitor - Infrastructure Monitoring Platform',
  description:
    'Infrastructure monitoring platform for managing Oracle Cloud VMs without SSH. Three-component system with Go agents, control plane API, and Next.js dashboard for real-time monitoring and operations.',
}

export default function VmMonitorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Playground - Browser-Based Data Tool',
  description:
    'Browser-based data transformation tool for JSON/CSV parsing and format conversion. Features client-side processing and session sharing with PostgreSQL.',
}

export default function DataPlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

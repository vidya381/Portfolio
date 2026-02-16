import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Weather Insight - AI-Powered Weather Analytics',
  description:
    'Weather analytics platform with machine learning insights, anomaly detection, and predictive analysis. Built with FastAPI and Next.js.',
}

export default function WeatherInsightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

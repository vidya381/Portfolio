import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MySpendo - Personal Finance Tracker',
  description:
    'Full-stack personal finance management platform with automated recurring transactions, budget alerts, and analytics. Built with Spring Boot and React.',
}

export default function MySpendoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

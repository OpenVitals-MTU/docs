import Link from 'next/link'
import { NotFoundPage } from 'nextra-theme-docs'

export default function NotFound() {
  return (
    <NotFoundPage content={null}>
      <h1>Page not found</h1>
      <p>
        The page is not available. <Link href="/">Return to OpenVitals.</Link>
      </p>
    </NotFoundPage>
  )
}

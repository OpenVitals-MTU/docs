import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import logo from '../docs/assets/images/openvitals-logo.png'

function CodebergIcon() {
  return (
    <svg
      aria-label="Project repository on Codeberg"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" fill="#2185d0" r="10" />
      <path
        d="M4.9 15.9 10.8 7.7a1.5 1.5 0 0 1 2.4 0l5.9 8.2A10 10 0 0 1 4.9 15.9Z"
        fill="#ffffff"
      />
      <path
        d="m12 7.2 7.1 8.7A10 10 0 0 1 12 22Z"
        fill="#71c2ff"
        opacity="0.58"
      />
    </svg>
  )
}

export const metadata = {
  metadataBase: new URL('https://openvitals.health'),
  title: {
    default: 'OpenVitals',
    template: '%s - OpenVitals'
  },
  description: 'Local-first Android health dashboard powered by Health Connect.',
  openGraph: {
    title: 'OpenVitals',
    description: 'Local-first Android health dashboard powered by Health Connect.',
    siteName: 'OpenVitals',
    url: 'https://openvitals.health'
  }
}

const navbar = (
  <Navbar
    logo={
      <span className="openvitals-brand">
        <img src={logo.src} alt="" width="28" height="28" />
        <b>OpenVitals</b>
      </span>
    }
    projectIcon={<CodebergIcon />}
    projectLink="https://codeberg.org/OpenVitals/docs"
  />
)

const footer = (
  <Footer>
    <span>OpenVitals documentation</span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 175, saturation: 55, lightness: 35 }} />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://codeberg.org/OpenVitals/docs/src/branch/main/docs"
          editLink="Edit this page"
          feedback={{ link: 'https://codeberg.org/OpenVitals/docs/issues/new' }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

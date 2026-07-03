import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import logo from '../docs/assets/images/openvitals-logo.png'

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
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

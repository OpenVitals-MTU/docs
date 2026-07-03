import nextra from 'nextra'
import { remarkMkdocsCompat } from './lib/remark-mkdocs-compat.mjs'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  },
  mdxOptions: {
    format: 'md',
    remarkPlugins: [remarkMkdocsCompat]
  }
})

export default withNextra({
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})

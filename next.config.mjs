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
  output: 'export',
  // Every page is written as <path>/index.html. GitHub Pages then serves /how-to and
  // /features/scales, the links the app opens, without a <path>.html file sitting next
  // to a <path>/ folder of navigation data.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})

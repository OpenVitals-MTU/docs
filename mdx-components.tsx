import Script from 'next/script'
import type { MDXComponents } from 'nextra/mdx-components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...themeComponents,
    script: props => {
      if (!props.src) {
        return null
      }

      return <Script {...props} strategy="afterInteractive" />
    },
    ...components
  }
}

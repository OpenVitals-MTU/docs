import Script from 'next/script'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
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

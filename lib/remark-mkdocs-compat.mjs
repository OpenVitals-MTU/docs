import { posix, relative, sep } from 'node:path'
import { fromMarkdown } from 'mdast-util-from-markdown'

const markdownAttributePattern = /\s+markdown=(["'])1\1/g
const classAttributePattern = /^\{\s*((?:\.[A-Za-z0-9_-]+\s*)+)\}/
const repoReferenceReplacements = [
  [/ssh:\/\/git@codeberg\.org\/OpenVitals\/website\.git/g, 'git@github.com:OpenVitals-MTU/docs.git'],
  [/https:\/\/codeberg\.org\/OpenVitals\/website\.git/g, 'https://github.com/OpenVitals-MTU/docs.git'],
  [/https:\/\/codeberg\.org\/OpenVitals\/website/g, 'https://github.com/OpenVitals-MTU/docs'],
  [/codeberg\.org\/OpenVitals\/website/g, 'github.com/OpenVitals-MTU/docs'],
  [/OpenVitals\/website/g, 'OpenVitals-MTU/docs']
]

export function remarkMkdocsCompat() {
  return (tree, file) => {
    transformChildren(tree)
    normalizeMarkdownLinks(tree, pageDirectory(file))
  }
}

// The page's folder below the content root: 'features' for
// content/features/scales.md, '' for content/index.md.
function pageDirectory(file) {
  return relative(process.cwd(), file.path).split(sep).slice(1, -1).join('/')
}

function transformChildren(parent) {
  if (!parent || !Array.isArray(parent.children)) {
    return
  }

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index]
    const replacement = transformHtmlNode(child)

    if (replacement) {
      parent.children.splice(index, 1, ...replacement)
      index += replacement.length - 1
      continue
    }

    rewriteRepoReferencesInNode(child)
    transformChildren(child)
  }

  applyInlineAttributes(parent)
  normalizeMarkdownImages(parent)
}

function transformHtmlNode(node) {
  if (!node || node.type !== 'html' || !node.value.includes('markdown=')) {
    return null
  }

  const fullWrapper = node.value.match(
    /^<([A-Za-z][\w:-]*)([^>]*)>\n?([\s\S]*?)\n?<\/\1>$/
  )

  if (fullWrapper && hasMarkdownAttribute(fullWrapper[2])) {
    const [, tagName, rawAttributes, innerMarkdown] = fullWrapper
    return wrapParsedMarkdown(tagName, rawAttributes, innerMarkdown)
  }

  const openingWithMarkdown = node.value.match(
    /^<([A-Za-z][\w:-]*)([^>]*)>\n([\s\S]+)$/
  )

  if (openingWithMarkdown && hasMarkdownAttribute(openingWithMarkdown[2])) {
    const [, tagName, rawAttributes, trailingMarkdown] = openingWithMarkdown
    return [
      {
        type: 'html',
        value: `<${tagName}${stripMarkdownAttribute(rawAttributes)}>`
      },
      ...parseMarkdownFragment(trailingMarkdown)
    ]
  }

  node.value = stripMarkdownAttribute(node.value)
  return null
}

function wrapParsedMarkdown(tagName, rawAttributes, innerMarkdown) {
  return [
    {
      type: 'html',
      value: `<${tagName}${stripMarkdownAttribute(rawAttributes)}>`
    },
    ...parseMarkdownFragment(innerMarkdown),
    {
      type: 'html',
      value: `</${tagName}>`
    }
  ]
}

function parseMarkdownFragment(markdown) {
  const fragment = fromMarkdown(markdown)
  transformChildren(fragment)
  return fragment.children
}

function hasMarkdownAttribute(value) {
  return /\smarkdown=(["'])1\1/.test(value)
}

function stripMarkdownAttribute(value) {
  return value.replace(markdownAttributePattern, '')
}

function applyInlineAttributes(parent) {
  if (!Array.isArray(parent.children)) {
    return
  }

  for (let index = 0; index < parent.children.length - 1; index += 1) {
    const child = parent.children[index]
    const next = parent.children[index + 1]

    if (
      !['image', 'link'].includes(child.type) ||
      next?.type !== 'text' ||
      !next.value.startsWith('{')
    ) {
      continue
    }

    const match = next.value.match(classAttributePattern)
    if (!match) {
      continue
    }

    addClassNames(
      child,
      match[1]
        .trim()
        .split(/\s+/)
        .map(className => className.slice(1))
    )

    next.value = next.value.slice(match[0].length)
    if (!next.value) {
      parent.children.splice(index + 1, 1)
    }
  }
}

function addClassNames(node, classNames) {
  node.data ||= {}
  node.data.hProperties ||= {}

  const existing = node.data.hProperties.className
  const current = Array.isArray(existing)
    ? existing
    : typeof existing === 'string'
      ? existing.split(/\s+/).filter(Boolean)
      : []

  node.data.hProperties.className = [...new Set([...current, ...classNames])].join(
    ' '
  )
}

function rewriteRepoReferencesInNode(node) {
  if (!node) {
    return
  }

  if (
    ['code', 'html', 'inlineCode', 'text'].includes(node.type) &&
    typeof node.value === 'string'
  ) {
    node.value = rewriteRepoReferences(node.value)
  }

  if (['definition', 'image', 'link'].includes(node.type)) {
    if (typeof node.url === 'string') {
      node.url = rewriteRepoReferences(node.url)
    }

    if (typeof node.title === 'string') {
      node.title = rewriteRepoReferences(node.title)
    }
  }
}

function rewriteRepoReferences(value) {
  return repoReferenceReplacements.reduce(
    (current, [pattern, replacement]) => current.replace(pattern, replacement),
    value
  )
}

function normalizeMarkdownLinks(node, pageDir) {
  if (node.type === 'link' && typeof node.url === 'string') {
    node.url = normalizeMarkdownUrl(rewriteRepoReferences(node.url), pageDir)
  }

  for (const child of node.children ?? []) {
    normalizeMarkdownLinks(child, pageDir)
  }
}

function normalizeMarkdownImages(parent) {
  if (!Array.isArray(parent.children)) {
    return
  }

  for (const child of parent.children) {
    if (child.type === 'image' && typeof child.url === 'string') {
      child.url = normalizeImageUrl(child.url)
    }
  }
}

function normalizeMarkdownUrl(url, pageDir) {
  if (
    url.startsWith('#') ||
    url.startsWith('//') ||
    /^[A-Za-z][A-Za-z0-9+.-]*:/.test(url)
  ) {
    return url
  }

  const match = url.match(/^([^?#]+)([?#].*)?$/)
  if (!match || !match[1].endsWith('.md')) {
    return url
  }

  // Resolved to an absolute route: every page is exported as <route>/index.html,
  // so a relative link would resolve one folder too deep.
  const page = posix.resolve('/', pageDir, match[1].slice(0, -'.md'.length))
  const route = page.endsWith('/index') ? page.slice(0, -'index'.length) : `${page}/`
  const suffix = match[2] || ''

  return `${route}${suffix}`
}

function normalizeImageUrl(url) {
  if (
    url.startsWith('#') ||
    url.startsWith('/') ||
    url.startsWith('./') ||
    url.startsWith('../') ||
    url.startsWith('//') ||
    /^[A-Za-z][A-Za-z0-9+.-]*:/.test(url)
  ) {
    return url
  }

  return `./${url}`
}

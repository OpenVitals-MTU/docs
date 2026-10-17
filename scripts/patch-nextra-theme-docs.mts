import { readFileSync, writeFileSync } from 'node:fs'

function replaceOnce(file: URL, before: string, after: string, description: string) {
  const source = readFileSync(file, 'utf8')

  // Checked first: a patch that adds a line keeps the original text inside it.
  if (source.includes(after)) {
    return
  }

  if (!source.includes(before)) {
    throw new Error(`Could not find ${description} to patch`)
  }

  writeFileSync(file, source.replace(before, after))
}

function replaceFirstOf(
  file: URL,
  befores: string[],
  after: string,
  description: string
) {
  const source = readFileSync(file, 'utf8')

  if (source.includes(after)) {
    return
  }

  const before = befores.find((candidate) => source.includes(candidate))

  if (!before) {
    throw new Error(`Could not find ${description} to patch`)
  }

  writeFileSync(file, source.replace(before, after))
}

const schemaFile = new URL(
  '../node_modules/nextra-theme-docs/dist/schemas.js',
  import.meta.url
)

replaceOnce(
  schemaFile,
  '  children: reactNode,\n',
  '  children: reactNode.optional(),\n',
  'Nextra Layout children schema'
)

const pageMapFile = new URL(
  '../node_modules/nextra/dist/server/page-map/to-page-map.js',
  import.meta.url
)

replaceOnce(
  pageMapFile,
  '    Object.entries(pages).flatMap(([key, value]) => {\n      if (basePath) key = key.replace(new RegExp(`^${basePath}/?`), "");\n',
  '    Object.entries(pages).flatMap(([key, value]) => {\n      const originalValue = value;\n      if (basePath) key = key.replace(new RegExp(`^${basePath}/?`), "");\n',
  'Nextra route map original file path capture'
)

replaceFirstOf(
  pageMapFile,
  [
    '      if (APP_DIR_SUFFIX_RE.test(value)) {\n',
    '      if (APP_DIR_SUFFIX_RE.test(filePath)) {\n'
  ],
  '      if (APP_DIR_SUFFIX_RE.test(originalValue)) {\n',
  'Nextra content/app route map handling'
)

// "Last updated on": Nextra caches one compiler per format and passes each page's
// last commit time as an option of a plugin in it, so every page showed the date of
// whichever page compiled first. The date now travels with each file instead.
const compileFile = new URL('../node_modules/nextra/dist/server/compile.js', import.meta.url)

replaceOnce(
  compileFile,
  '  const fileCompatible = filePath ? { value: rawMdx, path: filePath } : rawMdx;\n',
  '  const fileCompatible = filePath ? { value: rawMdx, path: filePath, data: { lastCommitTime } } : rawMdx;\n',
  'Nextra per-file last commit time'
)

const frontMatterFile = new URL(
  '../node_modules/nextra/dist/server/remark-plugins/remark-assign-frontmatter.js',
  import.meta.url
)

replaceOnce(
  frontMatterFile,
  '  const { readingTime, title } = file.data;\n',
  '  const { readingTime, title } = file.data;\n  const timestamp = Object.hasOwn(file.data, "lastCommitTime") ? file.data.lastCommitTime : lastCommitTime;\n',
  'Nextra front matter timestamp from the file'
)

replaceOnce(
  frontMatterFile,
  '    ...lastCommitTime && { timestamp: lastCommitTime }\n',
  '    ...timestamp && { timestamp }\n',
  'Nextra front matter timestamp field'
)

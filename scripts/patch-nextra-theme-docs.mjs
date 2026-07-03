import { readFileSync, writeFileSync } from 'node:fs'

function replaceOnce(file, before, after, description) {
  const source = readFileSync(file, 'utf8')

  if (!source.includes(before)) {
    if (source.includes(after)) {
      return
    }

    throw new Error(`Could not find ${description} to patch`)
  }

  writeFileSync(file, source.replace(before, after))
}

function replaceFirstOf(file, befores, after, description) {
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

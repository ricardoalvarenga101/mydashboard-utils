import { build } from 'esbuild'
import fs from 'fs'
import path from 'path'

// Entrypoints a publicar como subpaths (map keys -> desired output names)
const entries = {
  index: 'index.js',
  functions: 'functions/index.js',
  irpf_to_pdf: 'irpf_to_pdf/index.js'
}

// Gera bundles ESM (.mjs) e CJS (.cjs') sem empacotar dependências grandes
async function run () {
  await fs.promises.mkdir('dist', { recursive: true })

  // Build ESM
  await build({
    entryPoints: entries,
    bundle: true,
    platform: 'node',
    format: 'esm',
    outdir: 'dist',
    entryNames: '[name]',
    outExtension: { '.js': '.mjs' },
    external: ['lodash', 'moment-timezone'],
    sourcemap: false,
    target: ['node14']
  })

  // Build CJS
  await build({
    entryPoints: entries,
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outdir: 'dist',
    entryNames: '[name]',
    outExtension: { '.js': '.cjs' },
    external: ['lodash', 'moment-timezone'],
    sourcemap: false,
    target: ['node14']
  })

  // Create simple re-exports for subpaths that point to the built files (optional)
  // nothing to do here since package.json exports ./* points to dist/*.cjs /.mjs

  console.log('Build finished')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

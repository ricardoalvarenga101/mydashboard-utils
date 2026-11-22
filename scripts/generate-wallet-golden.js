import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { runWallet } from '../test/helpers/wallet-runner.js'

/**
 * Gera os golden outputs a partir da implementação canônica extraída do
 * worker (versão evoluída). O resultado é gravado em
 * `test/fixtures/wallet-golden.json` e consumido pelo teste de contrato.
 *
 * Uso: node scripts/generate-wallet-golden.js
 */
const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'test', 'fixtures', 'wallet-golden.json')

const result = runWallet()
writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n', 'utf8')

console.log(`Golden gerado em: ${outputPath}`)

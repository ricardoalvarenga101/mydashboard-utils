import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  getFullShortDates,
  getFinishPositionsCDB,
  getCodesCDB,
  getLastAvailablePositionWallet
} from '../functions/index.js'
import {
  buildWalletHistoryFixture,
  buildCdbHistoryFixture,
  REFERENCE_NOW
} from '../test/fixtures/wallet-engine-fixture.js'

/**
 * Gera os golden outputs das funções de data/posição/código CDB centralizadas a
 * partir da implementação canônica (extraída para `functions`). O resultado é
 * gravado em `test/fixtures/wallet-engine-golden.json` e consumido pelo teste de
 * contrato, travando o comportamento canônico contra regressões futuras.
 *
 * Uso: node scripts/generate-wallet-engine-golden.js
 */
const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(
  __dirname,
  '..',
  'test',
  'fixtures',
  'wallet-engine-golden.json'
)

const codeTypes = [
  'LCI',
  'LCA',
  'LCD',
  'CRI',
  'CRA',
  'DEBÊNTURE',
  'CDB',
  'RDB',
  'OUTROS',
  'LF'
]

const result = {
  getFullShortDates: getFullShortDates(
    buildWalletHistoryFixture(),
    REFERENCE_NOW
  ),
  getFinishPositionsCDB: getFinishPositionsCDB(buildCdbHistoryFixture()),
  getCodesCDB: codeTypes.reduce((acc, type) => {
    acc[type] = getCodesCDB(type)
    return acc
  }, {}),
  getLastAvailablePositionWallet: getLastAvailablePositionWallet(
    buildWalletHistoryFixture()
  )
}

writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n', 'utf8')

console.log(`Golden gerado em: ${outputPath}`)

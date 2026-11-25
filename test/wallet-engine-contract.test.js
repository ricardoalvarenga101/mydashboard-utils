import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
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
} from './fixtures/wallet-engine-fixture.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const goldenPath = join(__dirname, 'fixtures', 'wallet-engine-golden.json')
const golden = JSON.parse(readFileSync(goldenPath, 'utf8'))

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

/**
 * Testes de contrato das funções de data/posição/código CDB centralizadas.
 *
 * Garantem paridade de resultado entre a implementação extraída para o pacote
 * (`functions`) e a versão canônica eleita (ver `inventory.md` na change).
 * Qualquer divergência de resultado faz o teste falhar e impede o merge.
 */

test('getFullShortDates produz o mesmo resultado do golden (paridade)', () => {
  const result = getFullShortDates(buildWalletHistoryFixture(), REFERENCE_NOW)
  assert.deepEqual(result, golden.getFullShortDates)
})

test('getFullShortDates retorna lista vazia quando walletHistory é nulo', () => {
  assert.deepEqual(getFullShortDates(null), [])
  assert.deepEqual(getFullShortDates(undefined), [])
})

test('getFinishPositionsCDB produz o mesmo resultado do golden (paridade)', () => {
  const result = getFinishPositionsCDB(buildCdbHistoryFixture())
  assert.deepEqual(result, golden.getFinishPositionsCDB)
})

test('getCodesCDB produz o mesmo resultado do golden (paridade)', () => {
  const result = codeTypes.reduce((acc, type) => {
    acc[type] = getCodesCDB(type)
    return acc
  }, {})
  assert.deepEqual(result, golden.getCodesCDB)
})

test('getCodesCDB mapeia LCA como 03 (regressão do caso divergente)', () => {
  assert.equal(getCodesCDB('LCA'), '03')
})

test('getLastAvailablePositionWallet produz o mesmo resultado do golden (paridade)', () => {
  const result = getLastAvailablePositionWallet(buildWalletHistoryFixture())
  assert.deepEqual(result, golden.getLastAvailablePositionWallet)
})

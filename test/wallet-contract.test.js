import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { runWallet } from './helpers/wallet-runner.js'
import { composeOperationSalesDefault } from '../wallet/index.js'
import { CLASS, OPERATIONS_SALES } from '../constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const goldenPath = join(__dirname, 'fixtures', 'wallet-golden.json')
const golden = JSON.parse(readFileSync(goldenPath, 'utf8'))

/**
 * Testes de contrato do núcleo financeiro da carteira.
 *
 * Garantem paridade de resultado entre a implementação extraída para o pacote
 * e a implementação canônica do worker (a partir da qual o golden foi gerado).
 * Qualquer regressão no cálculo de custódia/preço médio, atributos ou resumo da
 * carteira fará o teste falhar.
 */
test('composeTransactionsWallet + composeAtributesWallet produzem o mesmo resultado do golden (paridade)', () => {
  const result = runWallet()
  assert.deepEqual(result, golden)
})

test('venda de FI-Infra é classificada como isenta (composeOperationSalesDefault)', () => {
  assert.equal(
    composeOperationSalesDefault(CLASS.FI_INFRA),
    OPERATIONS_SALES.FI_INFRA
  )
  assert.equal(
    composeOperationSalesDefault(CLASS.FI_INFRA),
    'VENDA DE FI INFRA'
  )
})

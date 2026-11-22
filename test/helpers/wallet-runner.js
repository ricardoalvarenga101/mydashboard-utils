import { buildWalletFixture } from '../fixtures/wallet-fixture.js'
import {
  composeTransactionsWallet,
  composeAtributesWallet
} from '../../wallet/index.js'

/**
 * Executa o fluxo canônico de cálculo da carteira sobre a fixture e retorna o
 * estado resultante (mutado) para comparação nos testes de contrato.
 *
 * A ordem replica o worker: primeiro composeTransactionsWallet (custódia/PM),
 * depois composeAtributesWallet (atributos + walletResume).
 */
export function runWallet () {
  const {
    transactionsGroup,
    dataBase,
    proventsGroup,
    proventsSubscribers,
    quotes,
    transactions,
    walletSubscribers,
    walletResume,
    walletSales,
    walletHistory,
    tickersList,
    processYear
  } = buildWalletFixture()

  composeTransactionsWallet(
    transactionsGroup,
    walletSubscribers,
    walletResume,
    walletSales,
    walletHistory,
    tickersList,
    processYear
  )

  composeAtributesWallet(
    walletHistory,
    dataBase,
    walletSales,
    transactions,
    proventsGroup,
    quotes,
    proventsSubscribers
  )

  return {
    walletHistory,
    walletSales,
    walletSubscribers,
    tickersList,
    walletResume,
    transactions
  }
}

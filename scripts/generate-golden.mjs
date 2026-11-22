import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  composeOperationSalesDefault,
  composeTransactionsWallet,
  composeAtributesWallet,
  calculateProfitSales
} from '../wallet/index.js'
import { CLASS, OPERATIONS_SALES, OPERATIONS } from '../constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const fixturePath = join(__dirname, '..', 'test', 'fixtures', 'wallet-scenario.json')
const goldenPath = join(__dirname, '..', 'test', 'fixtures', 'wallet-golden.json')

const scenario = JSON.parse(fs.readFileSync(fixturePath, 'utf8'))
const clone = (v) => JSON.parse(JSON.stringify(v))

// 1) composeOperationSalesDefault
const salesDefault = {
  FI_INFRA: composeOperationSalesDefault(CLASS.FI_INFRA),
  ACAO: composeOperationSalesDefault(CLASS.ACAO),
  FII: composeOperationSalesDefault(CLASS.FII),
  FIAGRO: composeOperationSalesDefault(CLASS.FIAGRO),
  BDR: composeOperationSalesDefault(CLASS.BDR),
  ETF: composeOperationSalesDefault(CLASS.ETF),
  STOCK: composeOperationSalesDefault(CLASS.STOCK),
  REIT: composeOperationSalesDefault(CLASS.REIT),
  ETF_EUA: composeOperationSalesDefault(CLASS.ETF_EUA),
  RENDA_FIXA: composeOperationSalesDefault(CLASS.RENDA_FIXA),
  CRIPTOMOEDA: composeOperationSalesDefault(CLASS.CRIPTOMOEDA),
  null_venida_direitos: composeOperationSalesDefault(null, OPERATIONS.VENDA_DIREITOS),
  default: composeOperationSalesDefault('desconhecido')
}

// 2) composeTransactionsWallet
const walletHistory = {}
const walletSales = []
const walletSubscribers = []
const tickersList = []
const walletResume = clone(scenario.walletResume)
composeTransactionsWallet(
  clone(scenario.transactionsGroup),
  walletSubscribers,
  walletResume,
  walletSales,
  walletHistory,
  tickersList,
  scenario.processYear
)

// 3) composeAtributesWallet sobre o walletHistory resultante
const walletHistoryForAttributes = clone(walletHistory)
const walletSalesForAttributes = clone(walletSales)
const transactionsByTicker = clone(scenario.transactionsByTicker)
composeAtributesWallet(
  walletHistoryForAttributes,
  clone(scenario.dataBase),
  walletSalesForAttributes,
  transactionsByTicker,
  clone(scenario.proventsGroup),
  clone(scenario.quotes),
  clone(scenario.proventsSubscribers)
)

// 4) calculateProfitSales
const profitSales = calculateProfitSales(walletSalesForAttributes, '2024', '2')

const golden = {
  salesDefault,
  transactionsWallet: {
    walletHistory,
    walletSales,
    walletSubscribers,
    tickersList,
    walletResume
  },
  atributesWallet: {
    walletHistory: walletHistoryForAttributes,
    walletSales: walletSalesForAttributes
  },
  profitSales
}

fs.writeFileSync(goldenPath, JSON.stringify(golden, null, 2) + '\n')
console.log('Golden escrito em', goldenPath)

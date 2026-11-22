import { MOVIMENTATIONS_OPERATIONS_KEYS } from '../../constants.js'

/**
 * Fixture enxuta e representativa para os testes de contrato do núcleo
 * financeiro da carteira (Compra, Bonificação, Venda, Subscrição e proventos).
 *
 * Retorna objetos novos a cada chamada (as funções extraídas MUTAM os
 * argumentos), garantindo isolamento entre execuções.
 */
export function buildWalletFixture () {
  const MOV = MOVIMENTATIONS_OPERATIONS_KEYS

  // Transações agrupadas por ano/mês/ticker (shape passado a composeTransactionsWallet)
  const transactionsGroup = {
    2024: {
      1: {
        PETR4: [
          {
            ticker: 'PETR4',
            movimentation: MOV.COMPRA,
            quantity: 100,
            unitPrice: 25,
            amount: 2500,
            ptax: 0,
            original: { unitPrice: 25, quantity: 100, amount: 2500 },
            date: '2024-01-10T00:00:00.000Z',
            year: '2024',
            month: '1',
            shortDate: '20240110',
            docId: 'tx-petr4-compra'
          }
        ],
        BOVA11: [
          {
            ticker: 'BOVA11',
            movimentation: MOV.RECIBO_DIREITO_SUBSCRICAO,
            quantity: 10,
            unitPrice: 20,
            amount: 200,
            ptax: 0,
            original: { unitPrice: 20, quantity: 10, amount: 200 },
            date: '2024-01-15T00:00:00.000Z',
            year: '2024',
            month: '1',
            shortDate: '20240115',
            docId: 'tx-bova11-subscricao'
          }
        ]
      },
      2: {
        PETR4: [
          {
            ticker: 'PETR4',
            movimentation: MOV.BONIFICACAO,
            quantity: 10,
            unitPrice: 0,
            amount: 0,
            ptax: 0,
            original: { unitPrice: 0, quantity: 10, amount: 0 },
            date: '2024-02-10T00:00:00.000Z',
            year: '2024',
            month: '2',
            shortDate: '20240210',
            docId: 'tx-petr4-bonificacao'
          }
        ]
      },
      3: {
        PETR4: [
          {
            ticker: 'PETR4',
            movimentation: MOV.VENDA,
            quantity: 50,
            unitPrice: 30,
            amount: 1500,
            ptax: 0,
            original: { unitPrice: 30, quantity: 50, amount: 1500 },
            date: '2024-03-10T00:00:00.000Z',
            year: '2024',
            month: '3',
            shortDate: '20240310',
            docId: 'tx-petr4-venda'
          }
        ]
      }
    }
  }

  // Base de dados de ativos (shape usado por composeAtributesWallet)
  const dataBase = [
    {
      symbol: 'PETR4',
      logourl: 'https://logo/petr4.png',
      longName: 'Petrobras PN',
      type: 'Ação',
      segment: 'Petróleo',
      sectorActuation: 'Petróleo e Gás',
      subSector: 'Exploração'
    },
    {
      symbol: 'BOVA11',
      logourl: 'https://logo/bova11.png',
      longName: 'iShares Ibovespa',
      type: 'ETF',
      segment: 'ETF',
      sectorActuation: 'Índices',
      subSector: null
    }
  ]

  // Proventos agrupados por ano/mês
  const proventsGroup = {
    2024: {
      2: [
        { ticker: 'PETR4', year: '2024', month: '2', totalAmountWithCambio: 50 }
      ]
    }
  }

  // Proventos de subscrição agrupados por ticker
  const proventsSubscribers = {
    BOVA11: [
      { ticker: 'BOVA11', year: '2024', month: '1', totalAmountWithCambio: 5 }
    ]
  }

  // Cotações (deve conter sempre USD, usado no câmbio)
  const quotes = [
    { symbol: 'PETR4', regularMarketPrice: 28 },
    { symbol: 'BOVA11', regularMarketPrice: 120 },
    { symbol: 'USD', regularMarketPrice: 5 }
  ]

  // Transações agrupadas por ticker (shape usado por composeAtributesWallet)
  const transactions = {
    PETR4: [
      {
        ticker: 'PETR4',
        movimentation: MOV.COMPRA,
        quantity: 100,
        unitPrice: 25,
        amount: 2500,
        date: '2024-01-10T00:00:00.000Z',
        year: '2024',
        month: '1',
        shortDate: '20240110',
        docId: 'tx-petr4-compra'
      },
      {
        ticker: 'PETR4',
        movimentation: MOV.BONIFICACAO,
        quantity: 10,
        unitPrice: 0,
        amount: 0,
        date: '2024-02-10T00:00:00.000Z',
        year: '2024',
        month: '2',
        shortDate: '20240210',
        docId: 'tx-petr4-bonificacao'
      },
      {
        ticker: 'PETR4',
        movimentation: MOV.VENDA,
        quantity: 50,
        unitPrice: 30,
        amount: 1500,
        date: '2024-03-10T00:00:00.000Z',
        year: '2024',
        month: '3',
        shortDate: '20240310',
        docId: 'tx-petr4-venda'
      }
    ],
    BOVA11: [
      {
        ticker: 'BOVA11',
        movimentation: MOV.RECIBO_DIREITO_SUBSCRICAO,
        quantity: 10,
        unitPrice: 20,
        amount: 200,
        date: '2024-01-15T00:00:00.000Z',
        year: '2024',
        month: '1',
        shortDate: '20240115',
        docId: 'tx-bova11-subscricao'
      }
    ]
  }

  return {
    transactionsGroup,
    dataBase,
    proventsGroup,
    proventsSubscribers,
    quotes,
    transactions,
    walletSubscribers: [],
    walletResume: { totalBonification: 0 },
    walletSales: [],
    walletHistory: {},
    tickersList: [],
    processYear: 2024
  }
}

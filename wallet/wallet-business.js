import _lodash from 'lodash'
import moment from 'moment-timezone'
import {
  CLASS_EXTERNAL_LIST,
  MOVIMENTATIONS_OPERATIONS_KEYS,
  CLASS,
  OPERATIONS,
  OPERATIONS_SALES
} from '../constants.js'
import { composeNumberTwoDecimal } from '../functions/index.js'

const { map, mean, cloneDeep, sumBy, sortBy, flatMap, orderBy } = _lodash

/**
 * Retorna a operação de venda padrão, quando esta não foi escolhida
 * @param {*} classe
 * @param {*} operation
 * @returns
 */
function composeOperationSalesDefault (classe = null, operation = null) {
  switch (classe) {
    case CLASS.FI_INFRA:
      return OPERATIONS_SALES.FI_INFRA
    case CLASS.ACAO:
      return OPERATIONS_SALES.SWING_TRADE
    case CLASS.FII:
    case CLASS.FIAGRO:
      return OPERATIONS_SALES.FII_FIAGRO
    case CLASS.BDR:
      return OPERATIONS_SALES.BDR
    case CLASS.ETF:
      return OPERATIONS_SALES.ETF
    case CLASS.STOCK:
    case CLASS.REIT:
    case CLASS.ETF_EUA:
      return OPERATIONS_SALES.EXTERNAL
    case CLASS.RENDA_FIXA:
      return OPERATIONS_SALES.RENDA_FIXA
    case CLASS.CRIPTOMOEDA:
      return OPERATIONS_SALES.CRIPTO
    case null:
      if (operation === OPERATIONS.VENDA_DIREITOS) {
        return OPERATIONS_SALES.SUBSCRIBERS
      }
      break
    default:
      return OPERATIONS_SALES.SWING_TRADE
  }
}

/**
 * Calcula o lucro de venda cumulativa até um determinado ano e mês
 * @param {*} salesList
 * @returns
 */
const calculateProfitSales = (salesList = [], endYear, endMonth) => {
  let _accumulatedProfitSales = 0
  salesList.forEach((item) => {
    const _key = `${endYear}${composeNumberTwoDecimal(endMonth)}`
    const _keyItem = `${item.year}${composeNumberTwoDecimal(item.month)}`
    if (_keyItem <= _key) {
      let _profitOperation = item.quantity * item.pmBefore
      let _amount = item.amount
      if (CLASS_EXTERNAL_LIST.includes(item.type)) {
        const _pmBefore = item.pmBefore * (item.ptax || 1)
        _profitOperation = item.quantity * _pmBefore
        _amount = _amount * (item.ptax || 1)
      }
      _accumulatedProfitSales += _amount - _profitOperation
    }
  })
  return _accumulatedProfitSales
}

/**
 * Monta os atributos das transações
 * @param {*} walletHistory
 * @param {*} dataBase
 * @param {*} walletSales
 * @param {*} transactions
 * @param {*} proventsGroup
 * @param {*} quotes
 * @param {*} proventsSubscribers
 */
const composeAtributesWallet = (
  walletHistory,
  dataBase,
  walletSales,
  transactions,
  proventsGroup,
  quotes,
  proventsSubscribers
) => {
  walletSales.forEach((item) => {
    let detail = dataBase.filter((d) => d.symbol === item.ticker)
    if ('tickerRef' in item && item.tickerRef !== item.ticker) {
      detail = dataBase.filter((d) => d.symbol === item.tickerRef)
    }
    if (detail && detail.length) {
      const d = detail[0]
      item.logourl = d.logourl
      item.name = d.longName
      item.type = d.type
      item.segment = d.segment || null
      item.sector = d.sectorActuation || null
      item.subSector = d.subSector || null
      item.yearAndMonth = `${item.year}${item.month}`
      if (!('movimentationSales' in item) || !item?.movimentationSales) {
        item.movimentationSales = composeOperationSalesDefault(d.type)
      }
    }
  })

  const _walletHistoricClone = cloneDeep(walletHistory)
  let accumulatedAmountProvents = 0
  let accumulatedAmountProventsSubscribers = 0
  map(_walletHistoricClone, (itensYear, year) => {
    const _months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const _monthsAvailable = Object.keys(itensYear)
    _months.forEach((m) => {
      if (!_monthsAvailable.includes(String(m)) || !itensYear[m]) {
        itensYear[m] = []
      }
    })
    map(itensYear, (itensMonth, month) => {
      map(itensMonth, (item, index) => {
        if (
          index !== 'finishPosition' &&
          index !== 'totalAmountBonification' &&
          index !== 'walletSales' &&
          item
        ) {
          let _lastUnitPrice = 1
          let _cotation = 1
          const detail = dataBase.filter((d) => d.symbol === item.ticker)
          const quoteItem = quotes.filter((q) => q.symbol === item.ticker)
          const cambio = quotes
            .filter((q) => q.symbol === 'USD')
            .pop().regularMarketPrice
          if (quoteItem && quoteItem.length) {
            _lastUnitPrice = sortBy(
              transactions[quoteItem[0].symbol],
              ['shortDate'],
              ['desc']
            ).pop()
            _cotation = quoteItem[0]?.regularMarketPrice
              ? quoteItem[0].regularMarketPrice
              : _lastUnitPrice.unitPrice
          }
          if (detail && detail.length) {
            const d = detail[0]
            let totalAmountVariationWithCambio = item.totalQtd * _cotation
            let totalAmountWithCambio = item.totalAmount
            if (CLASS_EXTERNAL_LIST.includes(d.type)) {
              totalAmountWithCambio = item.totalAmount * item.ptaxAverage
              totalAmountVariationWithCambio =
                totalAmountVariationWithCambio * cambio
            }
            item.logourl = d.logourl
            item.name = d.longName
            item.type = d.type
            item.segment = d.segment || null
            item.sector = d.sectorActuation || null
            item.subSector = d.subSector || null
            item.totalAmountWithCambio = totalAmountWithCambio
            item.totalAmountVariationWithCambio =
              totalAmountVariationWithCambio
          }
        }
      })
      if (year in proventsGroup && month in proventsGroup[year]) {
        const t = Object.values(proventsGroup[year][month])
        const proventsToSubscribers = flatMap(proventsSubscribers).filter(
          (ps) => ps.year === year && ps.month === month
        )
        accumulatedAmountProventsSubscribers += sumBy(
          proventsToSubscribers,
          'totalAmountWithCambio'
        )
        accumulatedAmountProvents += sumBy(t, 'totalAmountWithCambio')
      }
      const itemsToMonths = Object.values(itensMonth)
      const _totalAmountWithCambio = itensMonth
        ? sumBy(itemsToMonths, 'totalAmountWithCambio')
        : 0
      const _totalAmountAported =
        _totalAmountWithCambio - accumulatedAmountProvents
      let totalAmountBonificationMonth = 0
      if (itensMonth && 'totalAmountBonification' in itensMonth) {
        totalAmountBonificationMonth = itensMonth?.totalAmountBonification || 0
        delete _walletHistoricClone[year][month].totalAmountBonification
      }
      if (year in _walletHistoricClone && month in _walletHistoricClone[year]) {
        _walletHistoricClone[year][month].walletResume = {
          amountProventSubscribers: accumulatedAmountProventsSubscribers,
          totalAmountInvest: _totalAmountWithCambio,
          totalAmountAported:
            _totalAmountAported - totalAmountBonificationMonth,
          totalAmountProvents: accumulatedAmountProvents,
          totalAmountProfitSales: 0,
          totalAmountBonification: totalAmountBonificationMonth,
          percEvolution:
            (((accumulatedAmountProvents || 1) +
              (accumulatedAmountProventsSubscribers || 1)) /
              _totalAmountAported) *
            100
        }
        if ('walletSales' in _walletHistoricClone[year][month]) {
          delete _walletHistoricClone[year][month].walletSales

          const accumulatedProfitSales = calculateProfitSales(
            walletSales,
            year,
            month
          )

          _walletHistoricClone[year][month].walletResume.totalAmountProvents =
            accumulatedAmountProvents + accumulatedAmountProventsSubscribers

          _walletHistoricClone[year][month].walletResume.accumulatedProfitSales =
            accumulatedProfitSales

          _walletHistoricClone[year][month].walletResume.percEvolution =
            (((accumulatedAmountProvents || 1) +
              (accumulatedAmountProventsSubscribers || 1)) /
              _totalAmountAported) *
            100
        }
      }
    })
  })

  map(_walletHistoricClone, (items, y) => {
    map(items, (item, m) => {
      const _nodes = Object.keys(item)
      if (_nodes.length > 1) {
        walletHistory[y][m] = item
      }
    })
  })

  map(transactions, (t) => {
    t.forEach((item) => {
      let detail = dataBase.filter((d) => d.symbol === item.ticker)
      if ('tickerRef' in item && item.tickerRef !== item.ticker) {
        detail = dataBase.filter((d) => d.symbol === item.tickerRef)
      }
      if (detail && detail.length) {
        const d = detail[0]
        item.logourl = d.logourl
        item.name = d.longName
        item.type = d.type
        item.segment = d.segment || null
        item.sector = d.sectorActuation || null
        item.subSector = d.subSector || null
      }
    })
  })
}

const composeFinishPosition = (
  accumulatorTransactionsFull,
  ticker,
  pmBefore,
  item,
  originalAccumulatorTransactionsFull,
  pmBeforeOriginal,
  finishPosition
) => {
  accumulatorTransactionsFull[ticker].totalAmount = 0
  accumulatorTransactionsFull[ticker].totalQtd = 0
  item.pmBefore = pmBefore[ticker] || 0

  originalAccumulatorTransactionsFull[ticker].totalAmount = 0
  originalAccumulatorTransactionsFull[ticker].totalQtd = 0
  item.pmBeforeOriginal = pmBeforeOriginal[ticker] || 0
  finishPosition.push({
    ticker,
    ...item
  })
}

/**
 * Monta as transações da carteira
 * @param {*} transactions
 * @param {*} walletSubscribers
 * @param {*} walletResume
 * @param {*} walletSales
 * @param {*} walletHistory
 * @param {*} tickersList
 * @param {*} processYear
 */
const composeTransactionsWallet = (
  transactions,
  walletSubscribers,
  walletResume,
  walletSales,
  walletHistory,
  tickersList,
  processYear
) => {
  const pmBefore = {}
  const pmBeforeOriginal = {}
  const accumulatorTransactionsFull = {}
  const originalAccumulatorTransactionsFull = {}
  const finishPosition = []

  // monta historico das carteira
  map(transactions, (y, year) => {
    // ano
    if (!(year in walletHistory)) {
      walletHistory[year] = {}
    }
    map(y, (m, month) => {
      // mes
      if (!(month in walletHistory[year])) {
        walletHistory[year] = { ...walletHistory[year], [month]: [] }
      }
      map(m, (t, ticker) => {
        // operacoes
        if (!(ticker in accumulatorTransactionsFull)) {
          accumulatorTransactionsFull[ticker] = {
            movimentation: [],
            ticker,
            totalAmount: 0,
            totalQtd: 0,
            totalAmountBonification: 0,
            ptaxAverage: 0,
            ptaxList: [],
            pm: 0
          }
        }
        if (!(ticker in originalAccumulatorTransactionsFull)) {
          originalAccumulatorTransactionsFull[ticker] = {
            movimentation: [],
            ticker,
            totalAmount: 0,
            totalQtd: 0,
            totalAmountBonification: 0,
            ptaxAverage: 0,
            ptaxList: [],
            pm: 0
          }
        }
        const transactionsOrdenate = orderBy(
          t,
          ['date', 'movimentation'],
          ['asc', 'asc']
        )
        map(transactionsOrdenate, (item) => {
          if (item.ptax) {
            accumulatorTransactionsFull[ticker].ptaxList.push(item.ptax)
          }
          accumulatorTransactionsFull[ticker].movimentation.push(
            item.movimentation
          )

          const _totalAtual = Number(
            accumulatorTransactionsFull[ticker].totalQtd.toPrecision(8)
          )
          const _totalVendido = Number(item.quantity.toPrecision(8))

          switch (item.movimentation) {
            case MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA:
            case MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO:
            case MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO:
            case MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO:
              accumulatorTransactionsFull[ticker].totalAmount += item.amount
              accumulatorTransactionsFull[ticker].totalQtd += item.quantity
              pmBefore[ticker] =
                accumulatorTransactionsFull[ticker].totalAmount /
                accumulatorTransactionsFull[ticker].totalQtd
              item.pmBefore = pmBefore[ticker] || 0
              accumulatorTransactionsFull[ticker].pm = item.pmBefore
              accumulatorTransactionsFull[ticker].pmBefore = item.pmBefore

              // pmBeforeOriginal = preço médio original, sem nenhuma correção (split, inplit ou amortização)
              originalAccumulatorTransactionsFull[ticker].movimentation.push(
                item.movimentation
              )
              originalAccumulatorTransactionsFull[ticker].totalAmount +=
                item.original.amount
              originalAccumulatorTransactionsFull[ticker].totalQtd +=
                item.original.quantity
              pmBeforeOriginal[ticker] =
                originalAccumulatorTransactionsFull[ticker].totalAmount /
                originalAccumulatorTransactionsFull[ticker].totalQtd
              item.pmBeforeOriginal = pmBeforeOriginal[ticker] || 0

              if (!tickersList.includes(item.ticker)) {
                tickersList.push(item.ticker)
              }
              if (
                item.movimentation ===
                  MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO ||
                item.movimentation ===
                  MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO
              ) {
                walletSubscribers.push(item)
              }
              if (
                item.movimentation ===
                MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO
              ) {
                walletResume.totalBonification += item.amount
                accumulatorTransactionsFull[ticker].totalAmountBonification +=
                  item.quantity
              }
              break
            case MOVIMENTATIONS_OPERATIONS_KEYS.VENDA:
            case MOVIMENTATIONS_OPERATIONS_KEYS.VENDA_DIREITO_SUBSCRICAO:
              if (_totalVendido !== _totalAtual) {
                if (_totalVendido > _totalAtual) {
                  composeFinishPosition(
                    accumulatorTransactionsFull,
                    ticker,
                    pmBefore,
                    item,
                    originalAccumulatorTransactionsFull,
                    pmBeforeOriginal,
                    finishPosition
                  )
                }
                accumulatorTransactionsFull[ticker].totalQtd -= item.quantity
                accumulatorTransactionsFull[ticker].totalAmount =
                  accumulatorTransactionsFull[ticker].totalQtd *
                  accumulatorTransactionsFull[ticker].pm

                item.pmBefore = accumulatorTransactionsFull[ticker].pm

                originalAccumulatorTransactionsFull[ticker].totalQtd -=
                  item.original.quantity
                originalAccumulatorTransactionsFull[ticker].totalAmount =
                  originalAccumulatorTransactionsFull[ticker].totalQtd *
                  accumulatorTransactionsFull[ticker].pm

                item.pmBeforeOriginal =
                  accumulatorTransactionsFull[ticker].pm
              } else {
                // encerrou posição
                composeFinishPosition(
                  accumulatorTransactionsFull,
                  ticker,
                  pmBefore,
                  item,
                  originalAccumulatorTransactionsFull,
                  pmBeforeOriginal,
                  finishPosition
                )
              }
              if (
                item.movimentation ===
                MOVIMENTATIONS_OPERATIONS_KEYS.VENDA_DIREITO_SUBSCRICAO
              ) {
                walletSubscribers.push(item)
                walletSales.push(item)
                if ('tickerRef' in item) {
                  tickersList.push(item.tickerRef)
                }
              } else {
                walletSales.push(item)
              }
              break
            default:
              break
          }
        })
        accumulatorTransactionsFull[ticker].ptaxAverage = mean(
          accumulatorTransactionsFull[ticker].ptaxList.length
            ? accumulatorTransactionsFull[ticker].ptaxList
            : [0]
        )
        accumulatorTransactionsFull[ticker].pm =
          accumulatorTransactionsFull[ticker].totalAmount /
          accumulatorTransactionsFull[ticker].totalQtd
        accumulatorTransactionsFull[ticker].pmBefore = pmBefore[ticker]
        if (accumulatorTransactionsFull[ticker].totalAmount <= 0) {
          delete accumulatorTransactionsFull[ticker]
        }
      })
      walletHistory[year][month] = cloneDeep(accumulatorTransactionsFull)
      walletHistory[year][month] = {
        ...walletHistory[year][month],
        finishPosition,
        totalAmountBonification: walletResume.totalBonification,
        walletSales: walletSales.filter(
          (o) => o.year === year && o.month === month
        )
      }
    })
  })

  /**
   * Inclui anos em que nao houve movimentações
   */
  const yearsAvailableHistory = Object.keys(walletHistory)
  const yearsStartAtCurrent = []
  for (
    let index = yearsAvailableHistory.sort()[0];
    index <= processYear;
    index++
  ) {
    yearsStartAtCurrent.push(Number(index))
  }
  const yearsDiff = yearsStartAtCurrent.filter(
    (x) => !yearsAvailableHistory.includes(Number(x))
  )
  yearsDiff.forEach((year) => {
    if (!(year in walletHistory)) {
      const _indexMonth = Object.keys(walletHistory[year - 1]).pop()
      const currentYear = Number(moment().format('YYYY'))
      const currentMonth = Number(moment().format('MM'))
      const walletHistoryObjectMonth = {}
      if (year === currentYear) {
        for (let i = 1; i <= currentMonth; i++) {
          walletHistoryObjectMonth[i] = walletHistory[year - 1][_indexMonth]
        }
        walletHistory[year] = walletHistoryObjectMonth
      } else {
        walletHistory[year] = {
          1: walletHistory[year - 1][12],
          2: walletHistory[year - 1][12],
          3: walletHistory[year - 1][12],
          4: walletHistory[year - 1][12],
          5: walletHistory[year - 1][12],
          6: walletHistory[year - 1][12],
          7: walletHistory[year - 1][12],
          8: walletHistory[year - 1][12],
          9: walletHistory[year - 1][12],
          10: walletHistory[year - 1][12],
          11: walletHistory[year - 1][12],
          12: walletHistory[year - 1][12]
        }
      }
    }
  })
}

export {
  composeOperationSalesDefault,
  composeTransactionsWallet,
  composeAtributesWallet,
  calculateProfitSales
}

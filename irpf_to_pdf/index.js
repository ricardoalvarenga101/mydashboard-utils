import lodash from 'lodash'
import {
  composeProvents,
  composeRendimentsCdbs,
  composeRendimentsTds,
  composeOperations,
  composeSwingTradeFree,
  unionSwingTradeUnit
} from './composers.js'
import { generatePdf } from './docGenerate.js'
const { map, groupBy } = lodash

/**
 * Gerar relatório irpf
 * @param {*} yearChosen
 * @param {*} nameChosen
 * @param {*} documentNumberChosen
 * @param {*} data
 * @returns
 */
function generateIRPF (
  yearChosen = 2022,
  nameChosen = '',
  documentNumberChosen = '',
  data = {}
) {
  const operationsFull = {}
  let itensWalletFiltered = []
  let provents = {}
  const year = yearChosen
  const name = nameChosen.toUpperCase()
  const documentNumber = documentNumberChosen
  const operationsFII = {}
  const tableOperationsFII = {}
  const lossesSalesFii = {}
  const SUM_SWING_TRADE_FREE = {}
  const SUM_SWING_TRADE_CRIPTO_FREE = {}
  const SUM_SWING_TRADE_FREE_99 = {}
  const SUM_SWING_TRADE_UNIT = {}
  let bonifications = {}
  let bonificationsWithFractions = {}
  let rentals = {}
  let reembolso = {}

  itensWalletFiltered = data?.itensWalletFiltered
  provents = composeProvents(data?.provents)
  const rendimentsTD = composeRendimentsTds(data?.tds || {})
  const rendimentsCDB = composeRendimentsCdbs(
    data?.cdbs || {},
    rendimentsTD.rendiments
  )
  bonifications = data?.bonifications || {}
  bonificationsWithFractions = data?.bonificationsWithFractions || {}
  rentals = data?.rentals || {}
  reembolso = data?.reembolso || {}

  // console.log("Provents", provents);
  // console.log("Bonificaçoes + fraçõe", bonificationsWithFractions);
  // console.log("Aluguel", rentals);

  map(data.sells, (year, indexYear) =>
    map(year, (month, indexMonth) => {
      const filterOperations = groupBy(month.operations, (x) => x.operation)
      map(filterOperations, (ops) => {
        map(ops, (op) => {
          composeOperations(
            operationsFull,
            indexMonth,
            indexYear,
            op,
            SUM_SWING_TRADE_FREE_99,
            SUM_SWING_TRADE_UNIT
          )
        })
      })
    })
  )
  unionSwingTradeUnit(operationsFull, SUM_SWING_TRADE_UNIT)
  composeSwingTradeFree(operationsFull, SUM_SWING_TRADE_FREE)
  const pdfDefinition = generatePdf(
    name,
    documentNumber,
    year,
    itensWalletFiltered,
    provents,
    bonifications,
    bonificationsWithFractions,
    SUM_SWING_TRADE_FREE_99,
    SUM_SWING_TRADE_FREE,
    operationsFull,
    SUM_SWING_TRADE_CRIPTO_FREE,
    rentals,
    operationsFII,
    lossesSalesFii,
    tableOperationsFII,
    reembolso,
    rendimentsCDB
  )
  return pdfDefinition
}

export { generateIRPF }

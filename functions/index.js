import moment from 'moment-timezone'
import _lodash from 'lodash'
import { RENAME_TICKER_GOOGLE_SHEET, TABS, CLASS } from '../constants.js'

const { map } = _lodash

/**
 * Retorna a descrição do mes a partir de seu código
 * @param {Number} cod código do mês
 * @returns
 */
function getMonths (cod) {
  const months = {
    0: 'janeiro',
    1: 'fevereiro',
    2: 'março',
    3: 'abril',
    4: 'maio',
    5: 'junho',
    6: 'julho',
    7: 'agosto',
    8: 'setembro',
    9: 'outubro',
    10: 'novembro',
    11: 'dezembro'
  }
  return months[cod]
}

/**
 * Compoe o range de uma google sheet
 */
function composeRanges (sheetNames, sheetRanges) {
  const ranges = []
  sheetNames.forEach((element, i) => {
    ranges.push(`${element}!${sheetRanges[i]}`)
  })
  return ranges
}

/**
 * Retorna uma range de uma google sheet
 * @param {*} lastRow
 * @param {*} initialColNameForLastRow
 * @param {*} initialNumberColForLastRow
 * @param {*} initialColName
 * @param {*} initialColNameNumber
 * @param {*} endColName
 * @param {*} getRange
 * @param {*} sheetId
 * @param {*} sheetName
 * @returns
 */
async function getDataRange (
  lastRow,
  initialColNameForLastRow,
  initialNumberColForLastRow,
  initialColName,
  initialColNameNumber,
  endColName,
  getRange,
  sheetId,
  sheetName
) {
  let rangeString =
    initialColNameForLastRow +
    initialNumberColForLastRow +
    ':' +
    initialColNameForLastRow +
    lastRow
  const values = await getRange(sheetId, `${sheetName}!${rangeString}`)
  rangeString =
    initialColName +
    initialColNameNumber +
    ':' +
    endColName +
    (values.length + (sheetName === TABS.MOVIMENTACOES ? +1 : +3))
  const dataRows = await getRange(sheetId, `${sheetName}!${rangeString}`)
  return dataRows
}

/**
 * Retorna a ultima linha de uma google sheet
 * @param {*} sheetName
 * @param {*} docInfo
 * @returns
 */
function getLastRow (sheetName, docInfo) {
  let lastRow = 0
  for (let i = 0; i < docInfo.sheets.length; i++) {
    if (docInfo.sheets[i].properties.title === sheetName) {
      lastRow = docInfo.sheets[i].properties.gridProperties.rowCount
      break
    }
  }
  return lastRow
}

/**
 * Formata a data padrão para uma shortDate <YYYYMMDD>
 * @param {*} dateDefault
 * @returns
 */
function composeDateDefaultToShort (dateDefault) {
  const year = dateDefault.split('/').pop()
  const month = dateDefault.split('/')[1]
  const day = dateDefault.split('/')[0]
  return `${year}${month}${day}`
}

/**
 * Formata uma shortDate em uma data padrão
 * @param {*} shortDate
 * @returns
 */
function composeDateFromShortV2 (shortDate) {
  const year = shortDate.slice(0, 4)
  const month = shortDate.slice(4, 6)
  const day = shortDate.slice(6, 8)
  // 2024-11-30T03:00:00.000Z
  return `${year}-${month}-${day}T03:00:00.000Z`
}

/**
 * Monta uma lista a partir do resultado de um snapshot
 * @param {*} result
 * @param {*} array
 * @param {*} withDocId
 */
const mountList = (result, array, withDocId = false) => {
  if (!result.empty) {
    result.forEach((doc) => {
      const createTime = moment
        .unix(doc.createTime._seconds)
        .format('YYYY-MM-DD')
      if (withDocId) {
        array.push({ ...doc.data(), docId: doc.id, createTime })
      } else {
        array.push({ ...doc.data(), createTime })
      }
    })
    return array
  }
  return []
}

/**
 * Converte uma datetime unix para o padrão <YYYY/MM/DD HH:mm:ss>
 * @param {*} date
 * @returns
 */
const convertDateTime = (date) => {
  return moment.unix(date).format('YYYY/MM/DD HH:mm:ss')
}

/**
 * Retorna o id de uma url google sheet
 * @param {*} url
 * @returns
 */
const getSheetId = (url) => {
  const split = url.split('/')
  return split[5]
}

/**
 * Retorna uma classe de um ativo a partir de seu tipo
 * @param {*} type
 * @returns
 */
const getTypeByMainSearching = (type) => {
  switch (type) {
    case 13:
      return CLASS.REIT

    case 12:
      return CLASS.STOCK
    case 901:
      return CLASS.ETF_EUA

    case 22:
      return CLASS.FI_INFRA
    case 24:
      return CLASS.FIAGRO
    case 2:
      return CLASS.FII
    case 1:
      return CLASS.ACAO
    case 6:
      return CLASS.ETF
    case 4:
      return CLASS.BDR
    case 100:
      return CLASS.CRIPTOMOEDA

    default:
      return null
  }
}

/**
 * Converte um numero string para float
 * @param {*} str
 * @returns
 */
function strToFloat (str) {
  if (str) {
    return Number(str.replaceAll('.', '').replaceAll(',', '.'))
  }
  return null
}

/**
 * Renomeia um ticker do google sheet
 * @param {string} ticker
 * @returns
 */
const renameTickerGoogleSheet = (ticker) => {
  if (ticker in RENAME_TICKER_GOOGLE_SHEET) {
    return RENAME_TICKER_GOOGLE_SHEET[ticker]
  }
  return ticker
}

/**
 * Converte um numero menor igual a 9 em duas casas [09]
 * @param {*} number
 * @returns
 */
const composeNumberTwoDecimal = (number) => {
  if (number <= 9) {
    return `0${number}`
  }
  return number
}

/**
 * Converte um valor para R$
 * @param {number} value
 * @param {Boolean} currency indicador se deve manter o $
 * @param {boolean} isCript indica se é cripto
 * @returns
 */
function convertCurrencyReal (
  value,
  currency = true,
  isCript = false,
  customDecimal = 6
) {
  if (currency) {
    return (value || 0).toLocaleString('pt-br', {
      minimumFractionDigits: isCript ? customDecimal : 2,
      style: 'currency',
      currency: 'BRL'
    })
  }
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: isCript ? customDecimal : 2
  })
}

/**
 * Converte um valor para US$
 * @param {number} value
 * @param {Boolean} currency indicador se deve manter o $
 * @param {boolean} isCript indica se é cripto
 * @returns
 */
function convertCurrencyDolar (
  value,
  currency = true,
  isCript = false,
  customDecimal = 6
) {
  if (currency) {
    return (value || 0).toLocaleString('en-US', {
      minimumFractionDigits: isCript ? customDecimal : 2,
      style: 'currency',
      currency: 'USD'
    })
  }
  return value.toLocaleString('en-US', {
    minimumFractionDigits: isCript ? customDecimal : 2
  })
}

/**
 * Classe mydashboard
 * @returns
 */
const mydash = () => {
  /**
   * Console log dinamico mydash
   * @param {*} message
   * @returns
   */
  const log = (message) => {
    const staging = process.env.STAGING === 'true'
    return staging ? console.log(message) : null
  }

  /**
   * Normaliza data em formato string
   * @param {String} stringDate [dd/mm/YYYY]
   */
  const normalizeBRDate = (stringDate) => {
    try {
      const currentDate = moment(stringDate, 'DD/MM/YYYY')
        .tz('America/Sao_Paulo')
        .toISOString()
      const shortDate = moment(currentDate).format('YYYYMMDD')
      return { currentDate, shortDate }
    } catch {
      return {
        currentDate: null,
        shortDate: null
      }
    }
  }
  /**
   * Sanitizar código do ticker apenas para visão
   * @param {*} ticker
   * @returns
   */
  const sanitizeTickerName = (ticker) => ticker.replace('CRYPTO.', '')

  /**
   * Delay
   * @param {*} d <default: 200ms>
   * @returns
   */
  const delay = async (d = 200) => {
    return await new Promise((resolve) => setTimeout(() => resolve('delay'), d))
  }

  return {
    log,
    normalizeBRDate,
    sanitizeTickerName,
    delay
  }
}

/**
 * Extrai o userId de um walletId composto
 * Para carteiras filhas (ex: "abc123-wallet-2") retorna "abc123"
 * Para carteira pai (walletId === userId) retorna o próprio valor
 * @param {string} walletId
 * @returns {string}
 */
const extractUserId = (walletId) => {
  if (walletId && walletId.includes('-wallet-')) {
    return walletId.split('-wallet-')[0]
  }
  return walletId
}

/**
 * Sanitiza descrição de bens e direitos para cdbs
 * @param {*} txt
 * @param {*} ticker
 * @returns
 */
function sanitizeDescriptionBens (txt = '', ticker) {
  return txt.replace(`(${ticker})`, '').trim()
}

/**
 * Retorna a lista de shortdates sequencial desde o inicio dos investimentos
 * @param {*} walletHistory
 * @param {Date} [now] referência de data/hora (default: new Date()) — permite
 *   golden test determinístico
 */
const getFullShortDates = (walletHistory, now = new Date()) => {
  let listFullShortDates = []
  if (!walletHistory) {
    return listFullShortDates
  }
  const listYears = []
  const _currentYear = now.getFullYear()
  const _currentMonth = now.getMonth() + 1
  const _firstYear = Object.keys(walletHistory).shift()
  const _firstMonth = Object.keys(walletHistory[_firstYear] || {}).shift()

  for (let i = _firstYear; i <= _currentYear; i++) {
    listYears.push(i)
  }

  listYears.forEach((y, key) => {
    const _months = [
      `${y}01`,
      `${y}02`,
      `${y}03`,
      `${y}04`,
      `${y}05`,
      `${y}06`,
      `${y}07`,
      `${y}08`,
      `${y}09`,
      `${y}10`,
      `${y}11`,
      `${y}12`
    ]
    let _monthsFiltered = []
    if (key === 0) {
      // primeiro ano
      const starterDate = `${y}${
        _firstMonth <= 9 ? '0' + _firstMonth : _firstMonth
      }`
      if (Number(y) !== _currentYear) {
        _monthsFiltered = _months.filter((m) => m >= starterDate)
      } else {
        const _shortDate = `${_currentYear}${
          _currentMonth <= 9 ? `0${_currentMonth}` : _currentMonth
        }`
        _monthsFiltered = _months.filter(
          (m) => m >= starterDate && m <= _shortDate
        )
      }
      listFullShortDates = [...listFullShortDates, ..._monthsFiltered]
    } else {
      if (Number(y) === _currentYear) {
        const _shortDate = `${_currentYear}${
          _currentMonth <= 9 ? `0${_currentMonth}` : _currentMonth
        }`
        _monthsFiltered = _months.filter(
          (m) => m <= _shortDate
        )
        listFullShortDates = [...listFullShortDates, ..._monthsFiltered]
      } else {
        listFullShortDates = [...listFullShortDates, ..._months]
      }
    }
  })

  return listFullShortDates
}

/**
 * Obtem as posições finalizadas dos cdbs
 * @param {*} historic
 */
const getFinishPositionsCDB = (historic) => {
  let finishPositions = []
  map(historic, (itemForYear) =>
    map(itemForYear, (itemForMonth) => {
      if ('finishPosition' in itemForMonth) {
        finishPositions = [
          ...finishPositions,
          ...itemForMonth.finishPosition
        ]
      }
    })
  )
  return finishPositions
}

/**
 * Retorna o código de classe de renda fixa (CDB) para o IRPF
 * @param {string} type
 * @returns
 */
const getCodesCDB = (type) => {
  switch (type) {
    case 'LCI':
    case 'LCA':
    case 'LCD':
    case 'CRI':
    case 'CRA':
    case 'DEBÊNTURE':
      return '03'
    case 'CDB':
    case 'RDB':
      return '02'
    case 'OUTROS':
    case 'LF':
      return '99'
  }
}

/**
 * Retorna a ultima posição valida da carteira, junto com o ano/mês desta posição
 * @param {*} walletHistory
 * @returns {{ lastRegisterHistorycWallet: object, lastYear: string, lastMonth: string }}
 */
const getLastAvailablePositionWallet = (walletHistory = {}) => {
  const yearsList = Object.keys(walletHistory)
  let lastRegisterHistorycWallet = {}
  let lastYear
  let lastMonth
  yearsList.forEach((y) => {
    map(walletHistory[y], (h, m) => {
      if (h && Object.keys(h).length) {
        lastRegisterHistorycWallet = h
        lastYear = y
        lastMonth = m
      }
    })
  })
  return { lastRegisterHistorycWallet, lastYear, lastMonth }
}

export {
  mydash,
  extractUserId,
  strToFloat,
  getTypeByMainSearching,
  getMonths,
  composeRanges,
  getLastRow,
  composeDateFromShortV2,
  composeDateDefaultToShort,
  getDataRange,
  mountList,
  convertDateTime,
  getSheetId,
  renameTickerGoogleSheet,
  composeNumberTwoDecimal,
  convertCurrencyDolar,
  convertCurrencyReal,
  sanitizeDescriptionBens,
  getFullShortDates,
  getFinishPositionsCDB,
  getCodesCDB,
  getLastAvailablePositionWallet
}

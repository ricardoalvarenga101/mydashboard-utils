var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// wallet/index.js
var wallet_exports = {};
__export(wallet_exports, {
  calculateProfitSales: () => calculateProfitSales,
  composeAtributesWallet: () => composeAtributesWallet,
  composeOperationSalesDefault: () => composeOperationSalesDefault,
  composeTransactionsWallet: () => composeTransactionsWallet
});
module.exports = __toCommonJS(wallet_exports);

// wallet/wallet-business.js
var import_lodash = __toESM(require("lodash"), 1);
var import_moment_timezone2 = __toESM(require("moment-timezone"), 1);

// constants.js
var CLASS = {
  ACAO: "A\xE7\xE3o",
  FII: "FII",
  FIAGRO: "Fiagro",
  FI_INFRA: "FI-INFRA",
  BDR: "BDR",
  ETF: "ETF",
  STOCK: "STOCK",
  REIT: "REIT",
  ETF_EUA: "ETF-EXTERIOR",
  RENDA_FIXA: "Renda Fixa",
  CRIPTOMOEDA: "Criptomoeda",
  RENDA_FIXA_OUTROS: "Renda Fixa - Outros"
};
var MOVIMENTATIONS_OPERATIONS_KEYS = {
  BONIFICACAO: "Bonifica\xE7\xE3o em Ativos",
  COMPRA: "Compra",
  VENDA: "Venda",
  COMPRA_DIREITO_SUBSCRICAO: "Compra Direitos de Subscri\xE7\xE3o",
  RECIBO_DIREITO_SUBSCRICAO: "Recibo de Subscri\xE7\xE3o em Andamento",
  VENDA_DIREITO_SUBSCRICAO: "Venda Direitos de Subscri\xE7\xE3o"
};
var OPERATIONS = {
  VENDA: "Venda",
  VENDA_DIREITOS: "Venda Direitos de Subscri\xE7\xE3o",
  BONIFICACAO: "Bonifica\xE7\xE3o em Ativos",
  COMPRA: "Compra",
  COMPRA_DIREITOS: "Compra Direitos de Subscri\xE7\xE3o",
  RECIBO_DIREITOS: "Recibo de Subscri\xE7\xE3o em Andamento"
};
var OPERATIONS_SALES = {
  DAY_TRADE: "DAY TRADE",
  SWING_TRADE: "SWING TRADE DE A\xC7\xC3O",
  FII_FIAGRO: "VENDA DE FII/FIAGRO",
  BDR: "VENDA DE BDR",
  EXTERNAL: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
  ETF: "VENDA DE ETF",
  CRIPTO: "VENDA DE CRIPTOMOEDA",
  RENDA_FIXA: "RENDA FIXA",
  FI_INFRA: "VENDA DE FI INFRA",
  SUBSCRIBERS: "DIREITOS DE SUBSCRI\xC7\xC3O"
};
var MOVIMENTATIONS_SUBSCRIBERS = [
  MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.VENDA_DIREITO_SUBSCRICAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO
];
var CLASS_EXTERNAL_LIST = [CLASS.ETF_EUA, CLASS.REIT, CLASS.STOCK];
var MOVIMENTATIONS_WITHOUT_SUBSCRIBERS = [
  MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA,
  MOVIMENTATIONS_OPERATIONS_KEYS.VENDA
];

// functions/index.js
var import_moment_timezone = __toESM(require("moment-timezone"), 1);
var composeNumberTwoDecimal = (number) => {
  if (number <= 9) {
    return `0${number}`;
  }
  return number;
};

// wallet/wallet-business.js
var { map, mean, cloneDeep, sumBy, sortBy, flatMap, orderBy } = import_lodash.default;
function composeOperationSalesDefault(classe = null, operation = null) {
  switch (classe) {
    case CLASS.FI_INFRA:
      return OPERATIONS_SALES.FI_INFRA;
    case CLASS.ACAO:
      return OPERATIONS_SALES.SWING_TRADE;
    case CLASS.FII:
    case CLASS.FIAGRO:
      return OPERATIONS_SALES.FII_FIAGRO;
    case CLASS.BDR:
      return OPERATIONS_SALES.BDR;
    case CLASS.ETF:
      return OPERATIONS_SALES.ETF;
    case CLASS.STOCK:
    case CLASS.REIT:
    case CLASS.ETF_EUA:
      return OPERATIONS_SALES.EXTERNAL;
    case CLASS.RENDA_FIXA:
      return OPERATIONS_SALES.RENDA_FIXA;
    case CLASS.CRIPTOMOEDA:
      return OPERATIONS_SALES.CRIPTO;
    case null:
      if (operation === OPERATIONS.VENDA_DIREITOS) {
        return OPERATIONS_SALES.SUBSCRIBERS;
      }
      break;
    default:
      return OPERATIONS_SALES.SWING_TRADE;
  }
}
var calculateProfitSales = (salesList = [], endYear, endMonth) => {
  let _accumulatedProfitSales = 0;
  salesList.forEach((item) => {
    const _key = `${endYear}${composeNumberTwoDecimal(endMonth)}`;
    const _keyItem = `${item.year}${composeNumberTwoDecimal(item.month)}`;
    if (_keyItem <= _key) {
      let _profitOperation = item.quantity * item.pmBefore;
      let _amount = item.amount;
      if (CLASS_EXTERNAL_LIST.includes(item.type)) {
        const _pmBefore = item.pmBefore * (item.ptax || 1);
        _profitOperation = item.quantity * _pmBefore;
        _amount = _amount * (item.ptax || 1);
      }
      _accumulatedProfitSales += _amount - _profitOperation;
    }
  });
  return _accumulatedProfitSales;
};
var composeAtributesWallet = (walletHistory, dataBase, walletSales, transactions, proventsGroup, quotes, proventsSubscribers) => {
  walletSales.forEach((item) => {
    let detail = dataBase.filter((d) => d.symbol === item.ticker);
    if ("tickerRef" in item && item.tickerRef !== item.ticker) {
      detail = dataBase.filter((d) => d.symbol === item.tickerRef);
    }
    if (detail && detail.length) {
      const d = detail[0];
      item.logourl = d.logourl;
      item.name = d.longName;
      item.type = d.type;
      item.segment = d.segment || null;
      item.sector = d.sectorActuation || null;
      item.subSector = d.subSector || null;
      item.yearAndMonth = `${item.year}${item.month}`;
      if (!("movimentationSales" in item) || !(item == null ? void 0 : item.movimentationSales)) {
        item.movimentationSales = composeOperationSalesDefault(d.type);
      }
    }
  });
  const _walletHistoricClone = cloneDeep(walletHistory);
  let accumulatedAmountProvents = 0;
  let accumulatedAmountProventsSubscribers = 0;
  map(_walletHistoricClone, (itensYear, year) => {
    const _months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const _monthsAvailable = Object.keys(itensYear);
    _months.forEach((m) => {
      if (!_monthsAvailable.includes(String(m)) || !itensYear[m]) {
        itensYear[m] = [];
      }
    });
    map(itensYear, (itensMonth, month) => {
      map(itensMonth, (item, index) => {
        var _a;
        if (index !== "finishPosition" && index !== "totalAmountBonification" && index !== "walletSales" && item) {
          let _lastUnitPrice = 1;
          let _cotation = 1;
          const detail = dataBase.filter((d) => d.symbol === item.ticker);
          const quoteItem = quotes.filter((q) => q.symbol === item.ticker);
          const cambio = quotes.filter((q) => q.symbol === "USD").pop().regularMarketPrice;
          if (quoteItem && quoteItem.length) {
            _lastUnitPrice = sortBy(
              transactions[quoteItem[0].symbol],
              ["shortDate"],
              ["desc"]
            ).pop();
            _cotation = ((_a = quoteItem[0]) == null ? void 0 : _a.regularMarketPrice) ? quoteItem[0].regularMarketPrice : _lastUnitPrice.unitPrice;
          }
          if (detail && detail.length) {
            const d = detail[0];
            let totalAmountVariationWithCambio = item.totalQtd * _cotation;
            let totalAmountWithCambio = item.totalAmount;
            if (CLASS_EXTERNAL_LIST.includes(d.type)) {
              totalAmountWithCambio = item.totalAmount * item.ptaxAverage;
              totalAmountVariationWithCambio = totalAmountVariationWithCambio * cambio;
            }
            item.logourl = d.logourl;
            item.name = d.longName;
            item.type = d.type;
            item.segment = d.segment || null;
            item.sector = d.sectorActuation || null;
            item.subSector = d.subSector || null;
            item.totalAmountWithCambio = totalAmountWithCambio;
            item.totalAmountVariationWithCambio = totalAmountVariationWithCambio;
          }
        }
      });
      if (year in proventsGroup && month in proventsGroup[year]) {
        const t = Object.values(proventsGroup[year][month]);
        const proventsToSubscribers = flatMap(proventsSubscribers).filter(
          (ps) => ps.year === year && ps.month === month
        );
        accumulatedAmountProventsSubscribers += sumBy(
          proventsToSubscribers,
          "totalAmountWithCambio"
        );
        accumulatedAmountProvents += sumBy(t, "totalAmountWithCambio");
      }
      const itemsToMonths = Object.values(itensMonth);
      const _totalAmountWithCambio = itensMonth ? sumBy(itemsToMonths, "totalAmountWithCambio") : 0;
      const _totalAmountAported = _totalAmountWithCambio - accumulatedAmountProvents;
      let totalAmountBonificationMonth = 0;
      if (itensMonth && "totalAmountBonification" in itensMonth) {
        totalAmountBonificationMonth = (itensMonth == null ? void 0 : itensMonth.totalAmountBonification) || 0;
        delete _walletHistoricClone[year][month].totalAmountBonification;
      }
      if (year in _walletHistoricClone && month in _walletHistoricClone[year]) {
        _walletHistoricClone[year][month].walletResume = {
          amountProventSubscribers: accumulatedAmountProventsSubscribers,
          totalAmountInvest: _totalAmountWithCambio,
          totalAmountAported: _totalAmountAported - totalAmountBonificationMonth,
          totalAmountProvents: accumulatedAmountProvents,
          totalAmountProfitSales: 0,
          totalAmountBonification: totalAmountBonificationMonth,
          percEvolution: ((accumulatedAmountProvents || 1) + (accumulatedAmountProventsSubscribers || 1)) / _totalAmountAported * 100
        };
        if ("walletSales" in _walletHistoricClone[year][month]) {
          delete _walletHistoricClone[year][month].walletSales;
          const accumulatedProfitSales = calculateProfitSales(
            walletSales,
            year,
            month
          );
          _walletHistoricClone[year][month].walletResume.totalAmountProvents = accumulatedAmountProvents + accumulatedAmountProventsSubscribers;
          _walletHistoricClone[year][month].walletResume.accumulatedProfitSales = accumulatedProfitSales;
          _walletHistoricClone[year][month].walletResume.percEvolution = ((accumulatedAmountProvents || 1) + (accumulatedAmountProventsSubscribers || 1)) / _totalAmountAported * 100;
        }
      }
    });
  });
  map(_walletHistoricClone, (items, y) => {
    map(items, (item, m) => {
      const _nodes = Object.keys(item);
      if (_nodes.length > 1) {
        walletHistory[y][m] = item;
      }
    });
  });
  map(transactions, (t) => {
    t.forEach((item) => {
      let detail = dataBase.filter((d) => d.symbol === item.ticker);
      if ("tickerRef" in item && item.tickerRef !== item.ticker) {
        detail = dataBase.filter((d) => d.symbol === item.tickerRef);
      }
      if (detail && detail.length) {
        const d = detail[0];
        item.logourl = d.logourl;
        item.name = d.longName;
        item.type = d.type;
        item.segment = d.segment || null;
        item.sector = d.sectorActuation || null;
        item.subSector = d.subSector || null;
      }
    });
  });
};
var composeFinishPosition = (accumulatorTransactionsFull, ticker, pmBefore, item, originalAccumulatorTransactionsFull, pmBeforeOriginal, finishPosition) => {
  accumulatorTransactionsFull[ticker].totalAmount = 0;
  accumulatorTransactionsFull[ticker].totalQtd = 0;
  item.pmBefore = pmBefore[ticker] || 0;
  originalAccumulatorTransactionsFull[ticker].totalAmount = 0;
  originalAccumulatorTransactionsFull[ticker].totalQtd = 0;
  item.pmBeforeOriginal = pmBeforeOriginal[ticker] || 0;
  finishPosition.push({
    ticker,
    ...item
  });
};
var composeTransactionsWallet = (transactions, walletSubscribers, walletResume, walletSales, walletHistory, tickersList, processYear) => {
  const pmBefore = {};
  const pmBeforeOriginal = {};
  const accumulatorTransactionsFull = {};
  const originalAccumulatorTransactionsFull = {};
  const finishPosition = [];
  map(transactions, (y, year) => {
    if (!(year in walletHistory)) {
      walletHistory[year] = {};
    }
    map(y, (m, month) => {
      if (!(month in walletHistory[year])) {
        walletHistory[year] = { ...walletHistory[year], [month]: [] };
      }
      map(m, (t, ticker) => {
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
          };
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
          };
        }
        const transactionsOrdenate = orderBy(
          t,
          ["date", "movimentation"],
          ["asc", "asc"]
        );
        map(transactionsOrdenate, (item) => {
          if (item.ptax) {
            accumulatorTransactionsFull[ticker].ptaxList.push(item.ptax);
          }
          accumulatorTransactionsFull[ticker].movimentation.push(
            item.movimentation
          );
          const _totalAtual = Number(
            accumulatorTransactionsFull[ticker].totalQtd.toPrecision(8)
          );
          const _totalVendido = Number(item.quantity.toPrecision(8));
          switch (item.movimentation) {
            case MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA:
            case MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO:
            case MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO:
            case MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO:
              accumulatorTransactionsFull[ticker].totalAmount += item.amount;
              accumulatorTransactionsFull[ticker].totalQtd += item.quantity;
              pmBefore[ticker] = accumulatorTransactionsFull[ticker].totalAmount / accumulatorTransactionsFull[ticker].totalQtd;
              item.pmBefore = pmBefore[ticker] || 0;
              accumulatorTransactionsFull[ticker].pm = item.pmBefore;
              accumulatorTransactionsFull[ticker].pmBefore = item.pmBefore;
              originalAccumulatorTransactionsFull[ticker].movimentation.push(
                item.movimentation
              );
              originalAccumulatorTransactionsFull[ticker].totalAmount += item.original.amount;
              originalAccumulatorTransactionsFull[ticker].totalQtd += item.original.quantity;
              pmBeforeOriginal[ticker] = originalAccumulatorTransactionsFull[ticker].totalAmount / originalAccumulatorTransactionsFull[ticker].totalQtd;
              item.pmBeforeOriginal = pmBeforeOriginal[ticker] || 0;
              if (!tickersList.includes(item.ticker)) {
                tickersList.push(item.ticker);
              }
              if (item.movimentation === MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO || item.movimentation === MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO) {
                walletSubscribers.push(item);
              }
              if (item.movimentation === MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO) {
                walletResume.totalBonification += item.amount;
                accumulatorTransactionsFull[ticker].totalAmountBonification += item.quantity;
              }
              break;
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
                  );
                }
                accumulatorTransactionsFull[ticker].totalQtd -= item.quantity;
                accumulatorTransactionsFull[ticker].totalAmount = accumulatorTransactionsFull[ticker].totalQtd * accumulatorTransactionsFull[ticker].pm;
                item.pmBefore = accumulatorTransactionsFull[ticker].pm;
                originalAccumulatorTransactionsFull[ticker].totalQtd -= item.original.quantity;
                originalAccumulatorTransactionsFull[ticker].totalAmount = originalAccumulatorTransactionsFull[ticker].totalQtd * accumulatorTransactionsFull[ticker].pm;
                item.pmBeforeOriginal = accumulatorTransactionsFull[ticker].pm;
              } else {
                composeFinishPosition(
                  accumulatorTransactionsFull,
                  ticker,
                  pmBefore,
                  item,
                  originalAccumulatorTransactionsFull,
                  pmBeforeOriginal,
                  finishPosition
                );
              }
              if (item.movimentation === MOVIMENTATIONS_OPERATIONS_KEYS.VENDA_DIREITO_SUBSCRICAO) {
                walletSubscribers.push(item);
                walletSales.push(item);
                if ("tickerRef" in item) {
                  tickersList.push(item.tickerRef);
                }
              } else {
                walletSales.push(item);
              }
              break;
            default:
              break;
          }
        });
        accumulatorTransactionsFull[ticker].ptaxAverage = mean(
          accumulatorTransactionsFull[ticker].ptaxList.length ? accumulatorTransactionsFull[ticker].ptaxList : [0]
        );
        accumulatorTransactionsFull[ticker].pm = accumulatorTransactionsFull[ticker].totalAmount / accumulatorTransactionsFull[ticker].totalQtd;
        accumulatorTransactionsFull[ticker].pmBefore = pmBefore[ticker];
        if (accumulatorTransactionsFull[ticker].totalAmount <= 0) {
          delete accumulatorTransactionsFull[ticker];
        }
      });
      walletHistory[year][month] = cloneDeep(accumulatorTransactionsFull);
      walletHistory[year][month] = {
        ...walletHistory[year][month],
        finishPosition,
        totalAmountBonification: walletResume.totalBonification,
        walletSales: walletSales.filter(
          (o) => o.year === year && o.month === month
        )
      };
    });
  });
  const yearsAvailableHistory = Object.keys(walletHistory);
  const yearsStartAtCurrent = [];
  for (let index = yearsAvailableHistory.sort()[0]; index <= processYear; index++) {
    yearsStartAtCurrent.push(Number(index));
  }
  const yearsDiff = yearsStartAtCurrent.filter(
    (x) => !yearsAvailableHistory.includes(Number(x))
  );
  yearsDiff.map((year) => {
    if (!(year in walletHistory)) {
      const _indexMonth = Object.keys(walletHistory[year - 1]).pop();
      const currentYear = Number((0, import_moment_timezone2.default)().format("YYYY"));
      const currentMonth = Number((0, import_moment_timezone2.default)().format("MM"));
      const walletHistoryObjectMonth = {};
      if (year === currentYear) {
        for (let i = 1; i <= currentMonth; i++) {
          walletHistoryObjectMonth[i] = walletHistory[year - 1][_indexMonth];
        }
        walletHistory[year] = walletHistoryObjectMonth;
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
        };
      }
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calculateProfitSales,
  composeAtributesWallet,
  composeOperationSalesDefault,
  composeTransactionsWallet
});

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

// index.js
var index_exports = {};
__export(index_exports, {
  CLASS: () => CLASS,
  CLASS_EXTERNAL_LIST: () => CLASS_EXTERNAL_LIST,
  COLLECTION_NAME: () => COLLECTION_NAME,
  EVENTS: () => EVENTS,
  JOBS: () => JOBS,
  MOVIMENTATIONS_OPERATIONS_KEYS: () => MOVIMENTATIONS_OPERATIONS_KEYS,
  MOVIMENTATIONS_SUBSCRIBERS: () => MOVIMENTATIONS_SUBSCRIBERS,
  MOVIMENTATIONS_WITHOUT_SUBSCRIBERS: () => MOVIMENTATIONS_WITHOUT_SUBSCRIBERS,
  MYDASH_PREFIX: () => MYDASH_PREFIX,
  RENAME_TICKER_GOOGLE_SHEET: () => RENAME_TICKER_GOOGLE_SHEET,
  TABS: () => TABS,
  TRANSACTIONS: () => TRANSACTIONS,
  composeDateDefaultToShort: () => composeDateDefaultToShort,
  composeDateFromShortV2: () => composeDateFromShortV2,
  composeNumberTwoDecimal: () => composeNumberTwoDecimal,
  composeRanges: () => composeRanges,
  convertCurrencyDolar: () => convertCurrencyDolar,
  convertCurrencyReal: () => convertCurrencyReal2,
  convertDateTime: () => convertDateTime,
  generateIRPF: () => generateIRPF,
  getDataRange: () => getDataRange,
  getLastRow: () => getLastRow,
  getMonths: () => getMonths,
  getSheetId: () => getSheetId,
  getTypeByMainSearching: () => getTypeByMainSearching,
  mockAluguel2024: () => mockAluguel2024,
  mockBonification2024: () => mockBonification2024,
  mockBonificationProvent2024: () => mockBonificationProvent2024,
  mockEmpty2022: () => mockEmpty2022,
  mockFullData2022: () => mockFullData2022,
  mockFullData2023: () => mockFullData2023,
  mockFullData2024: () => mockFullData2024,
  mockRicardo2025: () => mockRicardo2025,
  mockRobert2023: () => mockRobert2023,
  mountList: () => mountList,
  mydash: () => mydash,
  renameTickerGoogleSheet: () => renameTickerGoogleSheet,
  strToFloat: () => strToFloat
});
module.exports = __toCommonJS(index_exports);

// constants.js
var JOBS = {
  IMPORT_PROCESS: "ImportProcess",
  IMPORT_PROCESS_CLEAN_FAIL: "ImportProcessCleanFail",
  INPLIT_AND_SPLIT_PROCESS: "SplitAndInplitProcess",
  WALLET_PROCESS: "WalletProcess",
  RESET_WALLET_PROCESS: "ResetWalletProcess",
  WALLET_RESTORE: "WalletRestore",
  PROCESS_DIVIDEND_NOTIFICATION: "ProcessDividendNotification"
};
var RENAME_TICKER_GOOGLE_SHEET = {
  "MATIC-POLYGON": "MATIC"
};
var TRANSACTIONS = {
  MOVIMENTATIONS_OPERATIONS: [
    "Bonifica\xE7\xE3o em Ativos",
    "Compra",
    "Compra Direitos de Subscri\xE7\xE3o",
    "Recibo de Subscri\xE7\xE3o em Andamento",
    "Venda",
    "Venda Direitos de Subscri\xE7\xE3o"
  ],
  PROVENTS_OPERATIONS: [
    "Aluguel",
    "Bonifica\xE7\xE3o em Fra\xE7\xF5es",
    "Dividendo",
    "JCP",
    "Rendimento",
    "Reembolso"
  ],
  BONIFICATION_IN_FRACTIONS: "Bonifica\xE7\xE3o em Fra\xE7\xF5es"
};
var COLLECTION_NAME = {
  USER: "user",
  EVENTS: "events",
  TRANSACTIONS: "transactions",
  PROVENTS: "provents",
  PROVENTS_SUBSCRIBERS: "provents_subscribers",
  IMPORT: "import",
  SUBSCRIBERS: "subscribe",
  SUBSCRIBERS_EVENTS: "subscribe_events",
  SPLIT_INPLIT: "split_inplit",
  AMORTIZATION: "amortizations",
  WALLET: "wallet",
  ANOTATIONS: "anotations",
  WALLET_TIMELINE: "wallet_timeline",
  WALLET_TIMELINE_IRPF: "wallet_irpf",
  WALLET_RESTORES: "wallet_restores",
  INVOICES: "invoices",
  OBJECTIVES: "objectives",
  CONFIGURATIONS: "configurations",
  CHANGELOG: "changelog",
  MYDASHBOARD: "mydashboard",
  TRANSACTIONS_FIXED: "transactions_fixed",
  BALANCER: "balancer"
};
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
var TABS = {
  INFORMACOES: "A. Informa\xE7\xF5es",
  B3: "B. B3",
  IMPORT: "C. Importar de Outra Vers\xE3o",
  DASHBOARD: "0. Dashboard",
  DASHBOARD_CONSOLIDADO: "0.1. Dashboard Consolidado",
  MEUS_ATIVOS: "1. Meus Ativos",
  LANCAMENTO_B3: "2. Lan\xE7amentos (B3)",
  LANCAMENTO_MANUAL: "2.1. Lan\xE7amentos (Manual)",
  LANCAMENTO_CDB: "2.2. Lan\xE7amentos (CDB/LCI/LCA/LC/RDB/DEB\xCANTURES)",
  EVOLUCAO_PATRIMONIAL: "2.3. Evolu\xE7\xE3o Patrimonial",
  PROVENTOS: "3. Proventos",
  AMORTIZACOES: "4. Amortiza\xE7\xF5es",
  CALENDARIO: "5. Calend\xE1rio de Dividendos",
  BALANCEAMENTO: "6. Balanceamento da Carteira",
  BALANCEAMENTO_ATIVO: "6.1. Balanceamento da Carteira por Ativo",
  SIMULADOR_PM: "6.2. Simulador de Novo Pre\xE7o M\xE9dio",
  PRECO_TETO: "7. Pre\xE7o Teto",
  MEUS_OBJETIVOS: "8. Meus Objetivos",
  VENDAS: "9. Vendas",
  DARF: "10. DARF",
  BENS_DIREITOS: "11. IR Bens e Direitos",
  ANOTACOES: "11.1. Anota\xE7\xF5es",
  BASE_DADOS: "12. Base de Dados",
  TABELA_DINAMICA: "99. Tabela Dinamica",
  TABELA_DINAMICA_CONSOLIDADO: "99. Tabela Dinamica Consolidado",
  CODIGOS_IRPF: "12.1. C\xF3digos IRPF",
  COTACAO: "99. Cota\xE7\xE3o",
  ALTAS: "99. Altas e Baixas",
  MOVIMENTACOES_CDB: "99. Movimenta\xE7\xF5es (CDB/LCI/LCA/LC/RDB)",
  MOVIMENTACOES: "99. Movimenta\xE7\xF5es"
};
var EVENTS = {
  IMPORT_TRANSATCION: "import_transaction",
  IMPORT_TRANSATCION_SHEET: "import_transaction_sheet",
  UPDATE_WALLET: "update_wallet",
  STATUS: {
    AWAIT: "await",
    PROCESSED: "processed",
    PROCESSING: "processing",
    FAIL: "fail",
    AWAIT_VALIDATE: "await_validate"
  }
};
var MOVIMENTATIONS_OPERATIONS_KEYS = {
  BONIFICACAO: "Bonifica\xE7\xE3o em Ativos",
  COMPRA: "Compra",
  VENDA: "Venda",
  COMPRA_DIREITO_SUBSCRICAO: "Compra Direitos de Subscri\xE7\xE3o",
  RECIBO_DIREITO_SUBSCRICAO: "Recibo de Subscri\xE7\xE3o em Andamento",
  VENDA_DIREITO_SUBSCRICAO: "Venda Direitos de Subscri\xE7\xE3o"
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
var MYDASH_PREFIX = {
  CRYPTO: "CRYPTO"
};

// irpf_to_pdf/index.js
var import_lodash4 = __toESM(require("lodash"), 1);

// irpf_to_pdf/composers.js
var import_lodash2 = __toESM(require("lodash"), 1);

// irpf_to_pdf/utils.js
var import_lodash = __toESM(require("lodash"), 1);
var { map } = import_lodash.default;
var hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function getOtherLastPosition(operations, year, initialPosition) {
  const listMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse();
  let lastRegister = {};
  for (let i = 13 - initialPosition; i < listMonths.length; i++) {
    if (Object.keys(operations[year][listMonths[i]]).length > 0) {
      lastRegister = {
        op: operations[year][listMonths[i]],
        year,
        month: listMonths[i]
      };
      break;
    }
  }
  return lastRegister;
}
function getLastOrFirstPositionYear(operations, year, sort = 1) {
  const listMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (sort === -1) {
    listMonths.reverse();
  }
  let lastRegister = {};
  for (let i = 0; i < listMonths.length; i++) {
    if (Object.keys(operations[year][listMonths[i]]).length > 0) {
      lastRegister = {
        op: operations[year][listMonths[i]],
        year,
        month: listMonths[i]
      };
      break;
    }
  }
  return lastRegister;
}
function sumAccumulator(operations, year, keySum, breakMonth = false) {
  let acc = 0;
  const op = operations[year];
  map(op, (month, indexMonth) => {
    if (Object.keys(month).length > 0) {
      if (breakMonth && breakMonth <= indexMonth) {
        acc += month[keySum];
      } else {
        acc += month[keySum];
      }
    }
  });
  return acc;
}
function subtractionLosses(valueA, valueB) {
  if (valueA >= valueB) {
    return 0;
  }
  return valueB - valueA;
}
function getNode(object, key) {
  if (hasOwn(object, key)) {
    return object[key];
  } else {
    return 0;
  }
}
function taxCal(value, percent) {
  if (value > 0) {
    return convertCurrencyReal(value * percent);
  }
  return convertCurrencyReal(0);
}
function convertCurrencyReal(value) {
  try {
    return value.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL"
    });
  } catch (error) {
    return "R$ 0,00";
  }
}
function getCodes(classe) {
  let group = "-";
  let cod = "-";
  let locale = "105 - Brasil";
  switch (classe) {
    case "ETF":
      group = "07";
      cod = "06";
      break;
    case "BDR":
      group = "04";
      cod = "04";
      break;
    case "Criptomoeda":
      group = "08";
      cod = "99";
      break;
    case "A\xE7\xE3o":
      group = "03";
      cod = "01";
      break;
    case "FI-INFRA":
      group = "07";
      cod = "99";
      break;
    case "FII":
      group = "07";
      cod = "03";
      break;
    case "Fiagro":
      group = "07";
      cod = "02";
      break;
    case "STOCK":
      group = "03";
      cod = "01";
      locale = "249 - Estados Unidos";
      break;
    case "REIT":
      group = "03";
      cod = "01";
      locale = "249 - Estados Unidos";
      break;
    case "ETF-EXTERIOR":
      group = "07";
      cod = "09";
      locale = "249 - Estados Unidos";
      break;
    case "Renda Fixa":
      group = "04";
      cod = "02";
      break;
    case "Renda Fixa - Outros":
      group = "04";
      cod = "02";
      break;
  }
  return {
    group,
    cod,
    locale
  };
}
function isUnit(ticker, classe, classeCompare = "A\xE7\xE3o") {
  if (classe !== classeCompare) {
    return false;
  }
  if (typeof ticker !== "string" || ticker.length < 3) {
    return false;
  }
  const upperTicker = ticker.toUpperCase();
  return upperTicker.endsWith("11");
}

// irpf_to_pdf/vars.js
var LIMIT_SWING_TRADE = 2e4;
var TYPE_OPERATIONS_SELL = {
  VENDA_DE_FII: "VENDA DE FII/FIAGRO",
  //
  DAY_TRADE: "DAY TRADE DE A\xC7\xC3O",
  //
  SWING_TRADE: "SWING TRADE DE A\xC7\xC3O",
  //
  VENDA_DE_ACAO_ESTRANGEIRA: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
  VENDA_DE_BDR: "VENDA DE BDR",
  //
  VENDA_DE_ETF: "VENDA DE ETF",
  //
  VENDA_DE_FI_INFRA: "VENDA DE FI INFRA",
  //
  VENDA_DE_CRIPTOMOEDA: "VENDA DE CRIPTOMOEDA",
  DIREITOS_DE_SUBSCRICAO: "DIREITOS DE SUBSCRI\xC7\xC3O"
  //
};
var MONTHS_LABEL = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Mar\xE7o",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro"
};
var CNPJ_B3 = "09.346.601/0001-25";
var NAME_B3 = "B3 S.A. \u2013 BRASIL, BOLSA, BALC\xC3O";
var DOC_DEFINITION_OPERATIONS = {
  OPERATIONS_FII: "OPERATIONS_FII",
  OPERATIONS_COMUNS_DAYTRADE: "OPERATIONS_COMUNS_DAYTRADE"
};

// irpf_to_pdf/composers.js
var { sum, map: map2, sumBy, cloneDeep, groupBy } = import_lodash2.default;
function composeOperationsFII(operations, yearAnalysis, lossesSalesFii) {
  let mountOperationsFII = 0;
  let mountLossOperationsFII = 0;
  let nameOp = "";
  map2(operations, (op, operationName) => {
    switch (operationName) {
      case TYPE_OPERATIONS_SELL.VENDA_DE_FII:
        nameOp = operationName;
        if (op.amountValues >= 0) {
          mountOperationsFII += op.amountValues;
        } else {
          mountLossOperationsFII += op.amountValues;
          mountOperationsFII += op.amountValues;
          if (hasOwn(lossesSalesFii, yearAnalysis)) {
            lossesSalesFii[yearAnalysis] += mountLossOperationsFII;
          } else {
            lossesSalesFii = {
              [yearAnalysis]: mountLossOperationsFII
            };
          }
        }
        break;
    }
  });
  return nameOp === TYPE_OPERATIONS_SELL.VENDA_DE_FII ? mountOperationsFII : null;
}
function composeTableCommonOperationAndDayTrade(operations) {
  const tableCommonOperationAndDayTradeProcessed = {};
  const arrayYears = Object.keys(operations);
  const firstYear = arrayYears.length > 0 ? arrayYears[0] : 0;
  map2(operations, (years, indexYear) => {
    tableCommonOperationAndDayTradeProcessed[indexYear] = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
      accumulatedCommon: 0,
      accumulatedTrade: 0
    };
    map2(years, (months, indexMonth) => {
      const ops = {
        commonList: [],
        dayTradeList: [],
        totalCommon: 0,
        totalTrade: 0
      };
      map2(months, (op, operationName) => {
        switch (operationName) {
          case TYPE_OPERATIONS_SELL.SWING_TRADE:
            if (op.amountTransaction > LIMIT_SWING_TRADE || op.amountValues < 0) {
              ops.commonList.push(op);
            }
            break;
          case `${TYPE_OPERATIONS_SELL.SWING_TRADE} UNIT`:
          // units são tributadas
          case TYPE_OPERATIONS_SELL.VENDA_DE_ETF:
          case TYPE_OPERATIONS_SELL.VENDA_DE_BDR:
          case TYPE_OPERATIONS_SELL.DIREITOS_DE_SUBSCRICAO:
            ops.commonList.push(op);
            break;
          case TYPE_OPERATIONS_SELL.DAY_TRADE:
            ops.dayTradeList.push(op);
            break;
        }
      });
      if (ops.commonList.length) {
        ops.totalCommon = ops.commonList.length ? sumBy(ops.commonList, "amountValues") : 0;
        ops.totalTrade = ops.commonList.length ? sumBy(ops.dayTradeList, "amountValues") : 0;
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth] = ops;
        calcAccumulatedMonth(
          indexYear,
          firstYear,
          indexMonth,
          tableCommonOperationAndDayTradeProcessed
        );
      }
    });
    calcAccumulatedYear(
      indexYear,
      firstYear,
      tableCommonOperationAndDayTradeProcessed
    );
  });
  return tableCommonOperationAndDayTradeProcessed;
}
function composeTableOperationsCriptos(operations) {
  const tableOperationsCriptosProcessed = {};
  const arrayYears = Object.keys(operations);
  const firstYear = arrayYears.length > 0 ? arrayYears[0] : 0;
  map2(operations, (years, indexYear) => {
    tableOperationsCriptosProcessed[indexYear] = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
      accumulatedTrade: 0,
      accumulatedCommon: 0
    };
    map2(years, (months, indexMonth) => {
      const ops = {
        commonList: [],
        dayTradeList: [],
        totalCommon: 0,
        totalTrade: 0
      };
      map2(months, (op, operationName) => {
        switch (operationName) {
          case TYPE_OPERATIONS_SELL.VENDA_DE_CRIPTOMOEDA:
            if (op.amountTransaction > LIMIT_SWING_TRADE) {
              ops.dayTradeList.push(op);
            } else {
              ops.commonList.push(op);
            }
            break;
        }
      });
      ops.totalCommon = sumBy(ops.commonList, "amountValues");
      ops.totalTrade = sumBy(ops.dayTradeList, "amountValues");
      tableOperationsCriptosProcessed[indexYear][indexMonth] = ops;
      calcAccumulatedMonth(
        indexYear,
        firstYear,
        indexMonth,
        tableOperationsCriptosProcessed
      );
    });
    calcAccumulatedYear(indexYear, firstYear, tableOperationsCriptosProcessed);
  });
  return tableOperationsCriptosProcessed;
}
function getAccumulatedCommonRecursiveValueMonths(node, indexYear, indexMonth, keySum) {
  const _selectNode = node[indexYear][indexMonth];
  if (indexMonth === 1) {
    if (!Object.keys(_selectNode).length) {
      return 0;
    }
  }
  if (Object.keys(_selectNode).length) {
    if (keySum === "totalTrade") {
      return _selectNode.accumulatedTrade + _selectNode[keySum];
    }
    return _selectNode.accumulatedCommon + _selectNode[keySum];
  }
  return getAccumulatedCommonRecursiveValueMonths(
    node,
    indexYear,
    indexMonth - 1,
    keySum
  );
}
function calcAccumulatedMonth(indexYear, firstYear, indexMonth, tableCommonOperationAndDayTradeProcessed) {
  const itemMonth = tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth];
  if (indexYear === firstYear) {
    if (indexMonth === "1") {
      tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth] = {
        ...itemMonth,
        accumulatedCommon: sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon",
          indexMonth
        ),
        accumulatedTrade: sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade",
          indexMonth
        )
      };
    } else {
      tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth] = {
        ...itemMonth,
        accumulatedCommon: getAccumulatedCommonRecursiveValueMonths(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          indexMonth - 1,
          "totalCommon"
        ),
        accumulatedTrade: getAccumulatedCommonRecursiveValueMonths(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          indexMonth - 1,
          "totalTrade"
        )
      };
    }
  } else {
    const _firstPosition = getLastOrFirstPositionYear(
      tableCommonOperationAndDayTradeProcessed,
      indexYear,
      1
    );
    if (String(_firstPosition.month) === String(indexMonth)) {
      const list = Object.keys(tableCommonOperationAndDayTradeProcessed);
      const oldYear = list.indexOf(indexYear);
      const oldYearIndex = Object.keys(
        tableCommonOperationAndDayTradeProcessed
      )[oldYear - 1];
      const _lastAccumulatorCommon = tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedCommon;
      const _lastAccumulatorTrade = tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedTrade;
      tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedCommon = _lastAccumulatorCommon + sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalCommon"
      );
      tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedTrade = _lastAccumulatorTrade + sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalTrade"
      );
    } else {
      const _pastPosition = getOtherLastPosition(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        indexMonth
      );
      if (_pastPosition.op.accumulatedCommon < 0) {
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedCommon = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
      } else {
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedCommon = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
      }
      if (_pastPosition.op.accumulatedTrade < 0) {
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedTrade = _pastPosition.op.accumulatedTrade + sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade"
        );
      } else {
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedTrade = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade"
        );
      }
    }
  }
  const acc = tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedCommon;
  const accTrader = tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedTrade;
  if (acc > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedCommon = 0;
  }
  if (accTrader > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth].accumulatedTrade = 0;
  }
}
function calcAccumulatedYear(indexYear, firstYear, tableCommonOperationAndDayTradeProcessed) {
  if (indexYear === firstYear) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon = sumAccumulator(
      tableCommonOperationAndDayTradeProcessed,
      indexYear,
      "totalCommon"
    );
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade = sumAccumulator(
      tableCommonOperationAndDayTradeProcessed,
      indexYear,
      "totalTrade"
    );
  } else {
    const list = Object.keys(tableCommonOperationAndDayTradeProcessed);
    const oldYear = list.indexOf(indexYear);
    const oldYearIndex = Object.keys(tableCommonOperationAndDayTradeProcessed)[oldYear - 1];
    if (tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedCommon < 0) {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon = tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedCommon + sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalCommon"
      );
    } else {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon = sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalCommon"
      );
    }
    if (tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedTrade < 0) {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade = tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedTrade + sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalTrade"
      );
    } else {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade = sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalTrade"
      );
    }
  }
  const acc = tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon;
  const accTrader = tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade;
  if (acc > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon = 0;
  }
  if (accTrader > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade = 0;
  }
}
function composeCommonOperationAndDayTrade(operations, yearAnalysis, monthAnalysis, operationsFull, monthsFilter = [], operationsGeneral) {
  if (!monthsFilter.includes(monthAnalysis)) {
    return null;
  }
  if (!operations.commonList.length && !operations.dayTradeList.length) {
    return null;
  }
  let negativePastCommon = 0;
  let negativePastTrade = 0;
  const indexAtual = monthsFilter.indexOf(monthAnalysis);
  const arrayYears = Object.keys(operationsFull);
  const firstYear = arrayYears.length > 0 ? Number(arrayYears[0]) : 0;
  const totalCommon = convertCurrencyReal(
    convertCurrencyReal(operations.totalCommon)
  );
  const totalTrade = convertCurrencyReal(
    convertCurrencyReal(operations.totalTrade)
  );
  if (yearAnalysis !== firstYear) {
    if (indexAtual === 0) {
      const indexLastYear = Object.keys(operationsGeneral).filter((i) => i < yearAnalysis).sort().pop();
      negativePastCommon = operationsGeneral[indexLastYear].accumulatedCommon;
      negativePastTrade = operationsGeneral[indexLastYear].accumulatedTrade;
    } else {
      negativePastCommon = operationsGeneral[yearAnalysis][monthsFilter[indexAtual - 1]].accumulatedCommon;
      negativePastTrade = operationsGeneral[yearAnalysis][monthsFilter[indexAtual - 1]].accumulatedTrade;
    }
  } else {
    if (indexAtual === 0) {
      negativePastCommon = 0;
      negativePastTrade = 0;
    } else {
      negativePastCommon = operationsGeneral[yearAnalysis][monthsFilter[indexAtual]].accumulatedCommon;
      negativePastTrade = operationsGeneral[yearAnalysis][monthsFilter[indexAtual]].accumulatedTrade;
    }
  }
  const baseCalcTemp = negativePastCommon >= operations.totalCommon ? 0 : operations.totalCommon + negativePastCommon;
  const baseCalcCommon = baseCalcTemp < 0 ? 0 : baseCalcTemp;
  const baseCalcTradeTemp = negativePastTrade >= operations.totalTrade ? 0 : operations.totalTrade + negativePastTrade;
  const baseCalcTrade = baseCalcTradeTemp < 0 ? 0 : baseCalcTradeTemp;
  const prejuizoCompensarComumTemp = negativePastCommon + operations.totalCommon;
  const prejuizoCompensarComum = prejuizoCompensarComumTemp >= 0 ? 0 : prejuizoCompensarComumTemp;
  const prejuizoCompensarTradeTemp = negativePastTrade + operations.totalTrade;
  const prejuizoCompensarTrade = prejuizoCompensarTradeTemp >= 0 ? 0 : prejuizoCompensarTradeTemp;
  const title = {
    pageBreak: "before",
    text: `

${MONTHS_LABEL[monthAnalysis]} - ${yearAnalysis}`,
    style: "title"
  };
  const content1 = {
    style: "tableOperation",
    table: {
      widths: [200, "*", "*"],
      body: [
        composeHeaderTable(["Resultados", "Opera\xE7\xF5es Comuns", "Day-Trade"]),
        [
          { text: "Mercado \xE0 Vista - A\xE7\xF5es", style: { color: "black" } },
          { text: totalCommon, style: { color: "blue", bold: true } },
          { text: totalTrade, style: { color: "blue", bold: true } }
        ]
      ]
    }
  };
  const content2 = {
    style: "tableOperation",
    table: {
      widths: [200, "*", "*"],
      body: [
        composeHeaderTable(["Resultados", "Opera\xE7\xF5es Comuns", "Day-Trade"]),
        [
          { text: "RESULTADO L\xCDQUIDO DO M\xCAS", style: { color: "black" } },
          { text: totalCommon, style: { color: "blue", bold: true } },
          {
            text: convertCurrencyReal(0),
            style: { color: "blue", bold: true }
          }
        ],
        [
          {
            text: "Resultado negativo at\xE9 o m\xEAs anterior",
            style: { color: "black" }
          },
          convertCurrencyReal(Math.abs(negativePastCommon)),
          convertCurrencyReal(negativePastTrade)
        ],
        [
          { text: "BASE DE C\xC1LCULO DO IMPOSTO", style: { color: "black" } },
          {
            text: convertCurrencyReal(baseCalcCommon),
            style: { color: "blue", bold: true }
          },
          {
            text: convertCurrencyReal(baseCalcTrade),
            style: { color: "blue", bold: true }
          }
        ],
        [
          { text: "Preju\xEDzo a compensar", style: { color: "black" } },
          convertCurrencyReal(Math.abs(prejuizoCompensarComum)),
          convertCurrencyReal(prejuizoCompensarTrade)
        ],
        [
          { text: "Al\xEDquota do imposto", style: { color: "black" } },
          { text: "15%", style: { color: "black" } },
          { text: "20%", style: { color: "black" } }
        ],
        [
          { text: "IMPOSTO DEVIDO", style: { color: "black" } },
          {
            text: taxCal(baseCalcCommon, 0.15),
            style: { color: "blue", bold: true }
          },
          {
            text: taxCal(baseCalcTrade, 0.2),
            style: { color: "blue", bold: true }
          }
        ]
      ]
    }
  };
  const content3 = {
    style: "tableOperation",
    table: {
      widths: ["*", "*"],
      body: [
        composeHeaderTable([{ text: "Consolida\xE7\xE3o do m\xEAs", colSpan: 2 }, {}]),
        [
          { text: "Total do imposto devido", style: { color: "black" } },
          {
            text: convertCurrencyReal(
              baseCalcCommon * 0.15 + baseCalcTrade * 0.2
            ),
            style: { color: "blue", bold: true }
          }
        ],
        [
          { text: "IR fonte de Day-Trade no M\xEAs", style: { color: "black" } },
          convertCurrencyReal(0)
        ],
        [
          {
            text: "IR fonte de Day-Trade nos meses anteriores",
            style: { color: "black" }
          },
          convertCurrencyReal(0)
        ],
        [
          {
            text: "IR fonte de Day-Trade a compensar",
            style: { color: "black" }
          },
          convertCurrencyReal(0)
        ],
        [
          {
            text: "IR fonte (Lei n\xBA 11.033/2004) no m\xEAs",
            style: { color: "black" }
          },
          convertCurrencyReal(0)
        ],
        [
          {
            text: "IR fonte (Lei n\xBA 11.033/2004) nos meses anteriores",
            style: { color: "black" }
          },
          convertCurrencyReal(0)
        ],
        [
          {
            text: "IR fonte (Lei n\xBA 11.033/2004) meses a compensar",
            style: { color: "black" }
          },
          convertCurrencyReal(0)
        ],
        [
          { text: "Imposto a pagar", style: { color: "black" } },
          {
            text: convertCurrencyReal(
              baseCalcCommon * 0.15 + baseCalcTrade * 0.2
            ),
            style: { color: "blue", bold: true }
          }
        ],
        [
          { text: "Imposto pago", style: { color: "black" } },
          convertCurrencyReal(baseCalcCommon * 0.15 + baseCalcTrade * 0.2)
        ]
      ]
    }
  };
  return { title, content1, content2, content3 };
}
function composeAmountOperations(operation, op) {
  if (op.ticker === "TAEE11") {
    console.log("debug");
  }
  const _amountTransactionToMonth = sum(operation.transactions);
  const _amountLoss = operation.values.filter((v) => v < 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const _amountValues = _amountTransactionToMonth > LIMIT_SWING_TRADE || isUnit(op.ticker, op.classe, CLASS.ACAO) ? sum(operation.values) : _amountLoss;
  operation.amountTransaction = _amountTransactionToMonth;
  operation.amountValues = op.operation === TYPE_OPERATIONS_SELL.SWING_TRADE ? _amountValues : sum(operation.values);
}
function mountSalesFiInfra(yearAnalysis, indexMonth, op, SUM_SWING_TRADE_FREE_99) {
  if (op.operation !== TYPE_OPERATIONS_SELL.VENDA_DE_FI_INFRA) {
    return null;
  }
  if (!hasOwn(SUM_SWING_TRADE_FREE_99, yearAnalysis)) {
    SUM_SWING_TRADE_FREE_99[yearAnalysis] = {
      [op.ticker]: {
        transactions: [op.transaction],
        values: [op.value],
        name: op.name,
        ticker: op.ticker,
        type: op.type,
        classe: op.classe,
        document_number_admin: op.document_number_admin,
        document_number_principal: op.document_number_principal
      }
    };
    composeAmountOperations(
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
      op
    );
  } else {
    if (hasOwn(SUM_SWING_TRADE_FREE_99[yearAnalysis], op.ticker)) {
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker].transactions.push(
        op.transaction
      );
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker].values.push(op.value);
      composeAmountOperations(
        SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
        op
      );
    } else {
      SUM_SWING_TRADE_FREE_99[yearAnalysis] = {
        ...SUM_SWING_TRADE_FREE_99[yearAnalysis],
        [op.ticker]: {
          transactions: [op.transaction],
          values: [op.value],
          name: op.name,
          ticker: op.ticker,
          type: op.type,
          classe: op.classe,
          document_number_admin: op.document_number_admin,
          document_number_principal: op.document_number_principal
        }
      };
      composeAmountOperations(
        SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
        op
      );
    }
  }
}
function composeOperations(operations, indexMonth, indexYear, op, SUM_SWING_TRADE_FREE_99, SUM_SWING_TRADE_UNIT) {
  mountSalesFiInfra(indexYear, indexMonth, op, SUM_SWING_TRADE_FREE_99);
  if (isUnit(op.ticker, op.classe, CLASS.ACAO)) {
    if (!hasOwn(SUM_SWING_TRADE_UNIT, indexYear)) {
      SUM_SWING_TRADE_UNIT[indexYear] = {
        [indexMonth]: {
          [op.operation]: {
            transactions: [op.transaction],
            values: [op.value]
          }
        }
      };
      composeAmountOperations(
        SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation],
        op
      );
    } else {
      if (!hasOwn(SUM_SWING_TRADE_UNIT[indexYear], indexMonth)) {
        SUM_SWING_TRADE_UNIT[indexYear][indexMonth] = {
          [op.operation]: {
            transactions: [op.transaction],
            values: [op.value]
          }
        };
        composeAmountOperations(
          SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation],
          op
        );
      } else {
        if (!hasOwn(SUM_SWING_TRADE_UNIT[indexYear][indexMonth], op.operation)) {
          SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation] = {
            transactions: [op.transaction],
            values: [op.value]
          };
          composeAmountOperations(
            SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation],
            op
          );
        } else {
          SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation].transactions.push(
            op.transaction
          );
          SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation].values.push(op.value);
          composeAmountOperations(
            SUM_SWING_TRADE_UNIT[indexYear][indexMonth][op.operation],
            op
          );
        }
      }
    }
    return null;
  }
  if (!hasOwn(operations, indexYear)) {
    operations[indexYear] = {
      [indexMonth]: {
        [op.operation]: {
          transactions: [op.transaction],
          values: [op.value]
        }
      }
    };
    composeAmountOperations(
      operations[indexYear][indexMonth][op.operation],
      op
    );
  } else {
    if (!hasOwn(operations[indexYear], indexMonth)) {
      operations[indexYear][indexMonth] = {
        [op.operation]: {
          transactions: [op.transaction],
          values: [op.value]
        }
      };
      composeAmountOperations(
        operations[indexYear][indexMonth][op.operation],
        op
      );
    } else {
      if (!hasOwn(operations[indexYear][indexMonth], op.operation)) {
        operations[indexYear][indexMonth][op.operation] = {
          transactions: [op.transaction],
          values: [op.value]
        };
        composeAmountOperations(
          operations[indexYear][indexMonth][op.operation],
          op
        );
      } else {
        operations[indexYear][indexMonth][op.operation].transactions.push(
          op.transaction
        );
        operations[indexYear][indexMonth][op.operation].values.push(op.value);
        composeAmountOperations(
          operations[indexYear][indexMonth][op.operation],
          op
        );
      }
    }
  }
  return operations;
}
function unionSwingTradeUnit(operations, SUM_SWING_TRADE_UNIT) {
  map2(operations, (year, indexYear) => {
    map2(year, (month, indexMonth) => {
      if (indexYear in SUM_SWING_TRADE_UNIT && indexMonth in SUM_SWING_TRADE_UNIT[indexYear]) {
        operations[indexYear][indexMonth] = {
          ...operations[indexYear][indexMonth],
          [`${TYPE_OPERATIONS_SELL.SWING_TRADE} UNIT`]: SUM_SWING_TRADE_UNIT[indexYear][indexMonth][TYPE_OPERATIONS_SELL.SWING_TRADE]
        };
      }
    });
  });
}
function composeSwingTradeFree(operations, SUM_SWING_TRADE_FREE) {
  map2(operations, (year, indexYear) => {
    let sumSwingTradeFree = 0;
    map2(
      year,
      (month) => map2(month, (operation, indexOp) => {
        if (indexOp === TYPE_OPERATIONS_SELL.SWING_TRADE) {
          if (operation.amountTransaction <= LIMIT_SWING_TRADE) {
            sumSwingTradeFree += operation.amountValues;
            SUM_SWING_TRADE_FREE[indexYear] = sumSwingTradeFree;
          }
        }
      })
    );
  });
}
function composeProvents(provents) {
  const externalProvents = provents && hasOwn(provents, "external") ? provents.external : null;
  if (provents && hasOwn(provents, "external")) {
    delete provents.external;
  }
  const sortProvents = Object.keys(provents).sort();
  const dividends = [];
  const jcp = [];
  const rendiments = [];
  const rendimentsJCP = [];
  sortProvents.forEach((item) => {
    if (provents[item].amountDividend) {
      dividends.push([
        "09",
        provents[item].document_number_principal,
        provents[item].name,
        convertCurrencyReal(provents[item].amountDividend)
      ]);
    }
    if (provents[item].amountJcp) {
      jcp.push([
        "10",
        provents[item].document_number_principal,
        provents[item].name,
        convertCurrencyReal(provents[item].amountJcp || 0)
      ]);
    }
    if (provents[item].amountRendiment) {
      rendiments.push([
        "99",
        provents[item].document_number_principal,
        provents[item].name,
        `Rendimentos de ${item} - (Administradora: ${provents[item].admin ? provents[item].admin : provents[item].document_number_principal})`,
        convertCurrencyReal(provents[item].amountRendiment || 0)
      ]);
    }
    if (provents[item].amountRendimentJCP) {
      rendimentsJCP.push([
        "06",
        provents[item].document_number_principal,
        provents[item].name,
        `Rendimentos tributados sobre juros recebidos de (${provents[item].name})`,
        convertCurrencyReal(provents[item].amountRendimentJCP)
      ]);
    }
  });
  return {
    dividends,
    jcp,
    rendiments,
    rendimentsJCP,
    external: externalProvents
  };
}
function composeRendimentsCdbs(cdbs, tds) {
  const sortProvents = Object.keys(cdbs).sort();
  const rendiments = [];
  const rendimentsFiltered = [];
  let agroupByDocumentNumber = {};
  sortProvents.forEach((item) => {
    const type = item.split("-").shift();
    if (cdbs[item].amountRendiment) {
      switch (type) {
        case "lci":
        case "lca":
        case "cra":
        case "cri":
          rendimentsFiltered.push({
            tipo: "12",
            document: cdbs[item].document_number_principal,
            name: cdbs[item].name,
            descricao: `Rendimentos tributados sobre juros recebidos de (${cdbs[item].name})`,
            valor: cdbs[item].amountRendiment
          });
          break;
        default:
          rendimentsFiltered.push({
            tipo: "06",
            document: cdbs[item].document_number_principal,
            name: cdbs[item].name,
            descricao: `Rendimentos tributados sobre juros recebidos de (${cdbs[item].name})`,
            valor: cdbs[item].amountRendiment
          });
          break;
      }
    }
  });
  agroupByDocumentNumber = groupBy(rendimentsFiltered, "document");
  map2(agroupByDocumentNumber, (item) => {
    const sum2 = sumBy(item, "valor");
    rendiments.push([
      item[0].tipo,
      item[0].document,
      item[0].name,
      item[0].descricao,
      convertCurrencyReal(sum2)
    ]);
  });
  rendiments.push(...tds);
  return {
    rendiments
  };
}
function composeRendimentsTds(tds) {
  const sortProvents = Object.keys(tds).sort();
  const rendiments = [];
  sortProvents.forEach((item) => {
    rendiments.push([
      "06",
      tds[item].document_number_principal,
      tds[item].name,
      `Rendimentos tributados sobre juros recebidos de (${tds[item].name})`,
      convertCurrencyReal(tds[item].amountRendiment)
    ]);
  });
  return {
    rendiments
  };
}
var getCodesCDB = (type) => {
  switch (type) {
    case "LCI":
    case "LCD":
    case "CRI":
    case "CRA":
    case "DEB\xCANTURE":
      return "03";
    case "CDB":
    case "RDB":
      return "02";
    case "OUTROS":
    case "LF":
      return "99";
  }
};
function composeBensDireitos(itensWalletFiltered) {
  const bens = [];
  itensWalletFiltered.forEach((item) => {
    bens.push([
      getCodes(item.classe).group,
      item.classe !== CLASS.RENDA_FIXA_OUTROS ? getCodes(item.classe).cod : getCodesCDB(item == null ? void 0 : item.type),
      getCodes(item.classe).locale,
      item.document_number_principal && item.document_number_principal !== "" ? item.document_number_principal : item.document_number_admin,
      { text: item.description, style: "description" },
      item.past_year,
      item.this_year,
      item.ticker,
      item.classe
    ]);
  });
  return bens;
}
function sanitizeDescriptionBens(txt = "", ticker) {
  return txt.replace(`(${ticker})`, "").trim();
}
function sanitizaTableBensCDB(bens = []) {
  const newBens = [];
  const cloneBens = cloneDeep(bens);
  cloneBens.forEach((b) => {
    if (b[8] === CLASS.RENDA_FIXA_OUTROS) {
      b[4] = {
        text: sanitizeDescriptionBens(b[4].text, b[7]),
        style: "description"
      };
    }
    b.pop();
    b.pop();
    newBens.push(b);
  });
  return newBens;
}
function composeHeaderTable(text = [], fillColor = "#300668", color = "white") {
  const headers = [];
  text.forEach((item) => {
    headers.push({
      text: item,
      fillColor,
      color,
      style: { alignment: "center" }
    });
  });
  return headers;
}
function composerExternalDividends(docDefinition, provents) {
  const dividendsConsolidated = {};
  if (hasOwn(provents, "external") && provents.external && Object.keys(provents.external).length > 0) {
    map2(provents.external, (ticker, symbol) => {
      dividendsConsolidated[symbol] = {
        lucroVenda: ticker.amountBuy,
        totalDividendos: ticker.amountDividend,
        impostoPago: ticker.amountTax
      };
    });
    const tablePdf = [];
    map2(dividendsConsolidated, (item, ticker) => {
      tablePdf.push([
        ticker,
        `${convertCurrencyReal((item == null ? void 0 : item.lucroVenda) || 0)} + ${convertCurrencyReal(
          (item == null ? void 0 : item.totalDividendos) || 0
        )}`,
        convertCurrencyReal(
          ((item == null ? void 0 : item.lucroVenda) || 0) + ((item == null ? void 0 : item.totalDividendos) || 0)
        ),
        convertCurrencyReal((item == null ? void 0 : item.impostoPago) || 0)
      ]);
    });
    const title = {
      pageBreak: "before",
      text: "Dividendos recebidos no exterior",
      style: "title"
    };
    const content1 = {
      text: [
        "\nOs ",
        {
          text: "dividendos recebidos nos Estados Unidos e/ou BDRs",
          style: "negrito"
        },
        " tem seu imposto de renda retido na fonte, mas devem ser declarados atrav\xE9s do Programa Oficial de Declara\xE7\xE3o (IRPF), somando lucros em vendas com proventos/cupons recebidos no exterior.\n\n",
        {
          text: "A Receita concentrou a emiss\xE3o exclusivamente no programa de declara\xE7\xE3o, portanto ser\xE1 emitido um DARF \xFAnico, somando ganhos no exterior e eventuais valores de IR gerados pelo pr\xF3prio programa da declara\xE7\xE3o. O c\xE1lculo final depender\xE1 de todas as informa\xE7\xF5es preenchidas no programa.\n\n"
        },
        {
          text: "A partir de 2024, ser\xE1 necess\xE1rio informar os ganhos recebidos no exterior (vendas, dividendos, cupons) diretamente na declara\xE7\xE3o, na ficha de bens e direitos, somente nos campos da se\xE7\xE3o APLICA\xC7\xC3O FINANCEIRA.\n\n",
          style: "negrito",
          color: "#e13709"
        },
        {
          text: "ATEN\xC7\xC3O: A se\xE7\xE3o LUCROS E DIVIDENDOS n\xE3o precisa ser preenchida, pois se refere a rendimentos de empresas offshore somente, mantenha zerada, conforme nosso informe. Nosso documento ir\xE1 mostrar na tabela quais dados dever\xE1 preencher nos novos campos do exemplo abaixo: \n\n",
          style: "negrito",
          color: "#e13709"
        }
      ]
    };
    const content2 = {
      style: "table",
      table: {
        widths: [70, "*", "*", "*"],
        body: [
          composeHeaderTable([
            "Ativo",
            "Lucro/Preju\xEDzo em vendas + proventos recebidos (R$)",
            "Lucro ou Preju\xEDzo (R$)",
            "Imposto pago no exterior (R$)"
          ]),
          ...tablePdf
        ]
      }
    };
    const content3 = {
      image: "print9",
      width: 505
    };
    docDefinition.content.push(title);
    docDefinition.content.push(content1);
    docDefinition.content.push(content2);
    docDefinition.content.push(content3);
  }
  return null;
}
function composeTaxExternal(docDefinition, provents) {
  if (hasOwn(provents, "external") && provents.external && Object.keys(provents.external).length > 0) {
    let taxAmount = 0;
    map2(provents.external, (item) => {
      taxAmount += item.amountTax;
    });
    const title = {
      pageBreak: "before",
      text: "Imposto Pago/Retido (IR a compensar ou retido no exterior)",
      style: "title"
    };
    const content1 = {
      text: "\nEsta se\xE7\xE3o ir\xE1 lhe demonstrar impostos j\xE1 retidos no exterior para demonstra\xE7\xE3o a Receita e/ou impostos retidos na fonte que podem ser compensados ao fim do ano.\n\n"
    };
    const content2 = {
      image: "print8",
      width: 505
    };
    const content3 = {
      text: "\nDados a declarar",
      style: "title"
    };
    const content4 = {
      style: "table",
      table: {
        widths: [340, "*"],
        body: [
          composeHeaderTable(["Imposto", "Valor"]),
          [
            {
              text: [
                { text: "02.", style: "negrito" },
                " Imposto pago no exterior pelo titular e pelos dependentes"
              ]
            },
            convertCurrencyReal(taxAmount)
          ]
        ]
      }
    };
    docDefinition.content.push(title);
    docDefinition.content.push(content1);
    docDefinition.content.push(content2);
    docDefinition.content.push(content3);
    docDefinition.content.push(content4);
    return null;
  }
  return null;
}
function composeTableOperationsFII(tableOperationsFII, operationsFII, year) {
  const tableData = [];
  map2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (mes) => {
    if (hasOwn(tableOperationsFII, year) && hasOwn(tableOperationsFII[year], mes)) {
      const value = getNode(operationsFII[year], mes);
      let fontColor = "blue";
      if (value < 0) {
        fontColor = "red";
      }
      tableData.push([
        tableOperationsFII[year][mes][0],
        tableOperationsFII[year][mes][1] !== 0 ? {
          text: convertCurrencyReal(getNode(operationsFII[year], mes)),
          style: { color: fontColor, bold: true }
        } : convertCurrencyReal(0),
        mes === 1 ? convertCurrencyReal(tableOperationsFII[year][mes][2]) : {
          text: convertCurrencyReal(tableOperationsFII[year][mes][2]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" }
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][3]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" }
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][4]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" }
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][5]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" }
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][6]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" }
        }
      ]);
    }
  });
  return tableData;
}

// irpf_to_pdf/renders.js
var import_lodash3 = __toESM(require("lodash"), 1);
var { map: map3, sumBy: sumBy2 } = import_lodash3.default;
function renderLow20kMonth(SUM_SWING_TRADE_FREE, year) {
  const lines = [];
  if (!hasOwn(SUM_SWING_TRADE_FREE, year)) {
    return [{}];
  }
  if (hasOwn(SUM_SWING_TRADE_FREE, year)) {
    lines.push([
      "20",
      hasOwn(SUM_SWING_TRADE_FREE, year) ? convertCurrencyReal(SUM_SWING_TRADE_FREE[year]) : convertCurrencyReal(0)
    ]);
  }
  const title = {
    text: "\n\nVendas abaixo de R$20.000,00 no m\xEAs",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*"],
      body: [composeHeaderTable(["Tipo", "Valor"]), ...lines]
    }
  };
  return [title, content1];
}
function renderCriptoLow35kMonth(operationsFull, SUM_SWING_TRADE_CRIPTO_FREE, year) {
  const tableOperationsCripto = composeTableOperationsCriptos(operationsFull);
  map3(tableOperationsCripto, (item, indexYear) => {
    const sum2 = [];
    map3(item, (month) => {
      if (hasOwn(month, "totalCommon")) {
        sum2.push(month.totalCommon);
      }
    });
    SUM_SWING_TRADE_CRIPTO_FREE[indexYear] = sumBy2(sum2);
  });
  const lines = [];
  if (!hasOwn(SUM_SWING_TRADE_CRIPTO_FREE, year)) {
    return [{}];
  }
  if (hasOwn(SUM_SWING_TRADE_CRIPTO_FREE, year)) {
    lines.push([
      "05",
      hasOwn(SUM_SWING_TRADE_CRIPTO_FREE, year) ? convertCurrencyReal(SUM_SWING_TRADE_CRIPTO_FREE[year]) : convertCurrencyReal(0)
    ]);
  }
  if (SUM_SWING_TRADE_CRIPTO_FREE[year] === 0) {
    return [{}];
  }
  const title = {
    text: "\n\nVendas em criptoativos abaixo de R$35.000,00 no m\xEAs",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*"],
      body: [composeHeaderTable(["Tipo", "Valor"]), ...lines]
    }
  };
  return [title, content1];
}
function renderRendimentsJCP(provents) {
  if (!provents.rendimentsJCP.length) {
    return [{}];
  }
  const title = {
    text: "\n\nRendimentos sobre JCP",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", "*", "*", "*"],
      body: [
        composeHeaderTable([
          "Tipo",
          "CNPJ",
          "Nome da fonte pagadora",
          "Descri\xE7\xE3o",
          "Valor"
        ]),
        ...provents.rendimentsJCP
      ]
    }
  };
  return [title, content1];
}
function renderResgateCDB(cdbs) {
  if (!cdbs.rendiments.length) {
    return [{}];
  }
  const title = {
    text: "\n\nRendimentos sobre resgate renda fixa CDB/LCs/RDB/OUTROS",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", "*", "*", "*"],
      body: [
        composeHeaderTable([
          "Tipo",
          "CNPJ",
          "Nome da fonte pagadora",
          "Descri\xE7\xE3o",
          "Valor"
        ]),
        ...cdbs.rendiments
      ]
    }
  };
  return [title, content1];
}
function renderBonifications(bonifications, bonificationsWithFractions) {
  if (!Object.keys(bonifications).length && !Object.keys(bonificationsWithFractions).length) {
    return [{}];
  }
  const listBonification = [];
  map3(bonificationsWithFractions, (item) => {
    listBonification.push([
      "18",
      item.cnpj,
      item.name,
      convertCurrencyReal(item.amount)
    ]);
  });
  if (bonificationsWithFractions) {
    map3(bonifications, (item, ticker) => {
      if (!hasOwn(bonificationsWithFractions, ticker)) {
        listBonification.push([
          "18",
          item.cnpj,
          item.name,
          convertCurrencyReal(item.amount)
        ]);
      }
    });
  } else {
    map3(bonifications, (item) => {
      listBonification.push([
        "18",
        item.cnpj,
        item.name,
        convertCurrencyReal(item.amount)
      ]);
    });
  }
  const title = {
    text: "Bonifica\xE7\xF5es",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", 200, "*"],
      body: [
        composeHeaderTable(["Tipo", "CNPJ", "Nome da fonte pagadora", "Valor"]),
        ...listBonification
      ]
    },
    pageBreak: "after"
  };
  return [title, content1];
}
function renderReembolso(reembolso) {
  if (!reembolso || !Object.keys(reembolso).length) {
    return [{}];
  }
  const listReembolso = [];
  let sumReembolso = 0;
  Object.keys(reembolso).forEach((item) => {
    sumReembolso += reembolso[item].amount;
  });
  listReembolso.push([
    "99",
    CNPJ_B3,
    NAME_B3,
    "Reembolso de proventos",
    convertCurrencyReal(sumReembolso)
  ]);
  const title = {
    text: "Reembolso (Proventos de ativos alugados - Doador)",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", 200, "*", "*"],
      body: [
        composeHeaderTable([
          "Tipo",
          "CNPJ",
          "Nome da fonte pagadora",
          "Descri\xE7\xE3o",
          "Valor"
        ]),
        ...listReembolso
      ]
    }
  };
  return [title, content1];
}
function renderRentals(rentals) {
  if (!rentals || !Object.keys(rentals).length) {
    return [{}];
  }
  const listRentals = [];
  let sumRetals = 0;
  Object.keys(rentals).forEach((item) => {
    sumRetals += rentals[item].amount;
  });
  listRentals.push(["06", CNPJ_B3, NAME_B3, convertCurrencyReal(sumRetals)]);
  const title = {
    text: "Alugu\xE9is",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", 200, "*"],
      body: [
        composeHeaderTable(["Tipo", "CNPJ", "Nome da fonte pagadora", "Valor"]),
        ...listRentals
      ]
    }
  };
  return [title, content1];
}
function renderDividends(provents) {
  if (!provents.dividends.length) {
    return [{}];
  }
  const title = {
    text: "Dividendos",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [30, "*", 200, "*"],
      body: [
        composeHeaderTable(["Tipo", "CNPJ", "Nome da fonte pagadora", "Valor"]),
        ...provents.dividends
      ]
    },
    pageBreak: "after"
  };
  return [title, content1];
}
function renderJCPs(provents) {
  if (!provents.jcp.length) {
    return [{}];
  }
  const title = {
    text: "Rendimentos sujeitos a tributa\xE7\xE3o exclusiva (Proventos tributados como JCP)",
    style: "title",
    pageBreak: "before"
  };
  const content1 = {
    text: [
      "\n\nEsta se\xE7\xE3o ir\xE1 lhe demonstrar quais ",
      { text: "rendimentos tiveram tributa\xE7\xE3o", style: "negrito" },
      " retida na fonte durante o ano, n\xE3o ser\xE1 necess\xE1rio pagar imposto adicional sobre eles, mas precisar\xE1 declar\xE1-los na se\xE7\xE3o de mesmo nome."
    ]
  };
  const content2 = {
    text: "\nItens contemplados no relat\xF3rio:",
    ul: ["Juros sobre capital", "Outros proventos tributados"]
  };
  const content3 = {
    text: "\nLocal e exemplo de preenchimento:\n",
    style: "subheader"
  };
  const content4 = {
    image: "print5",
    width: 505
  };
  const content5 = {
    text: [
      "\n\nPara cada linha da tabela abaixo efetue um lan\xE7amento atrav\xE9s do bot\xE3o ",
      { text: "'Novo'", style: "negrito" },
      ", preencha os dados da tabela e confirme em ",
      { text: "'OK'", style: "negrito" }
    ]
  };
  const content6 = {
    text: "\nJCP (juros sobre capital pr\xF3prio - valor l\xEDquido)",
    style: "title"
  };
  const content7 = {
    style: "table",
    table: {
      widths: [30, "*", "*", "*"],
      body: [
        composeHeaderTable(["Tipo", "CNPJ", "Nome da fonte pagadora", "Valor"]),
        ...provents.jcp
      ]
    }
  };
  return [
    title,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7
  ];
}
function renderCommonsOperations(docDefinition, year, operationsFull) {
  const title = {
    text: "Renda vari\xE1vel (Vendas de ativos no Brasil com DARF ou no preju\xEDzo)",
    style: "title",
    pageBreak: "before"
  };
  const content1 = {
    text: "\nEsta se\xE7\xE3o ir\xE1 lhe demonstrar quais resultados obteve na bolsa do brasil e como dever\xE1 declarar os lucros, preju\xEDzos e IR j\xE1 pago."
  };
  const content2 = {
    text: "\nOpera\xE7\xF5es Comuns / Day-Trade",
    style: "title"
  };
  const content3 = {
    text: [
      "\nAs opera\xE7\xF5es de venda envolvendo a\xE7\xF5es, op\xE7\xF5es, futuros, ETF e BDR ser\xE3o declaradas nessa se\xE7\xE3o e de forma mensal.Somente constam nessa se\xE7\xE3o suas vendas que foram",
      { text: " tributadas", style: "negrito" },
      " fora da isen\xE7\xE3o. Para vendas isentas, fa\xE7a o lan\xE7amento na se\xE7\xE3o Rendimentos Isentos conforme mencionado acima. Abaixo descrevemos todos os lan\xE7amentos que dever\xE1 fazer com base na apura\xE7\xE3o realizada na planilha de investimentos.",
      `

Opera\xE7\xF5es com fundos imobili\xE1rios n\xE3o entram nesta se\xE7\xE3o, caso vendeu FIIs durante o ano de ${year}, iremos demonstrar na se\xE7\xE3o "Opera\xE7\xF5es Fundos Investimento Imobili\xE1rio"

`,
      {
        text: "\nATEN\xC7\xC3O: Vendas de a\xE7\xF5es Units: independentemente do valor transacionado no m\xEAs, os ganhos auferidos podem estar sujeitos \xE0 tributa\xE7\xE3o.\n",
        style: "negrito",
        color: "#e13709"
      }
    ]
  };
  const content4 = {
    image: "print6",
    width: 505
  };
  const tableCommonOperationAndDayTrade = composeTableCommonOperationAndDayTrade(operationsFull);
  const tableCommonOperationAndDayTradeFiltered = {};
  map3(
    tableCommonOperationAndDayTrade,
    (year2, indexYear) => map3(year2, (month, indexMonth) => {
      if (Object.keys(month).length > 0) {
        if (hasOwn(tableCommonOperationAndDayTradeFiltered, indexYear)) {
          tableCommonOperationAndDayTradeFiltered[indexYear].push(indexMonth);
        } else {
          tableCommonOperationAndDayTradeFiltered[indexYear] = [indexMonth];
        }
      }
    })
  );
  const commonOperationsAnalised = [];
  const amountTransactions = [];
  map3(tableCommonOperationAndDayTrade[year], (month, indexMonth) => {
    const co = composeCommonOperationAndDayTrade(
      month,
      year,
      indexMonth,
      operationsFull,
      tableCommonOperationAndDayTradeFiltered[year],
      tableCommonOperationAndDayTrade
    );
    if (co) {
      commonOperationsAnalised.push(co.title);
      commonOperationsAnalised.push(co.content1);
      commonOperationsAnalised.push(co.content2);
      commonOperationsAnalised.push(co.content3);
      let amountTransactionSum = 0;
      if (TYPE_OPERATIONS_SELL.SWING_TRADE in operationsFull[year][indexMonth]) {
        amountTransactionSum += operationsFull[year][indexMonth][TYPE_OPERATIONS_SELL.SWING_TRADE].amountTransaction;
      }
      if (TYPE_OPERATIONS_SELL.DIREITOS_DE_SUBSCRICAO in operationsFull[year][indexMonth]) {
        amountTransactionSum += operationsFull[year][indexMonth][TYPE_OPERATIONS_SELL.DIREITOS_DE_SUBSCRICAO].amountTransaction;
      }
      if (TYPE_OPERATIONS_SELL.VENDA_DE_BDR in operationsFull[year][indexMonth]) {
        amountTransactionSum += operationsFull[year][indexMonth][TYPE_OPERATIONS_SELL.VENDA_DE_BDR].amountTransaction;
      }
      if (TYPE_OPERATIONS_SELL.VENDA_DE_ETF in operationsFull[year][indexMonth]) {
        amountTransactionSum += operationsFull[year][indexMonth][TYPE_OPERATIONS_SELL.VENDA_DE_ETF].amountTransaction;
      }
      amountTransactions.push({
        id: co.title.text,
        amountTransaction: amountTransactionSum
      });
    }
  });
  if (commonOperationsAnalised.length) {
    docDefinition.content.push(title);
    docDefinition.content.push(content1);
    docDefinition.content.push(content2);
    docDefinition.content.push(content3);
    docDefinition.content.push(content4);
    docDefinition.content = [
      ...docDefinition.content,
      ...commonOperationsAnalised
    ];
    docDefinition.amountTransactions = amountTransactions;
    docDefinition.operations.push({
      id: DOC_DEFINITION_OPERATIONS.OPERATIONS_COMUNS_DAYTRADE,
      ...content4,
      ...commonOperationsAnalised
    });
  }
}
function renderOperationsFII(operationsFull, operationsFII, lossesSalesFii, year, tableOperationsFII, docDefinition) {
  map3(
    operationsFull,
    (itemYear, indexYear) => map3(itemYear, (month, indexMonth) => {
      const co = composeOperationsFII(
        operationsFull[indexYear][indexMonth],
        indexYear,
        lossesSalesFii
      );
      if (co) {
        if (hasOwn(operationsFII, indexYear)) {
          operationsFII[indexYear][indexMonth] = co;
        } else {
          operationsFII[indexYear] = {
            [indexMonth]: co
          };
        }
      }
    })
  );
  if (!hasOwn(operationsFII, year)) {
    operationsFII[year] = {
      1: 0
    };
  }
  map3(
    operationsFII,
    (opYear, indexYear) => map3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (mes) => {
      if (mes === 1) {
        let sumLiquidWithNegativeOld = hasOwn(tableOperationsFII, indexYear - 1) ? tableOperationsFII[indexYear - 1][12][1] + tableOperationsFII[indexYear - 1][12][2] * -1 : 0;
        sumLiquidWithNegativeOld = sumLiquidWithNegativeOld > 0 ? 0 : sumLiquidWithNegativeOld * -1;
        const lossesOldYear = hasOwn(tableOperationsFII, indexYear - 1) ? sumLiquidWithNegativeOld : 0;
        const baseCalcTax = getNode(operationsFII[indexYear], mes) < 0 ? 0 : getNode(operationsFII[indexYear], mes);
        tableOperationsFII[indexYear] = {
          [mes]: [
            MONTHS_LABEL[mes].slice(0, 3),
            getNode(operationsFII[indexYear], mes),
            lossesOldYear,
            getNode(operationsFII[indexYear], mes) < 0 ? 0 : baseCalcTax,
            lossesOldYear,
            "20%",
            baseCalcTax - lossesOldYear <= 0 ? 0 : (baseCalcTax - lossesOldYear) * 0.2
          ]
        };
      } else {
        const lossesOldYear = subtractionLosses(
          tableOperationsFII[indexYear][mes - 1][1],
          tableOperationsFII[indexYear][mes - 1][2]
        );
        const baseCalcTax = getNode(operationsFII[indexYear], mes) < 0 ? 0 : getNode(operationsFII[indexYear], mes);
        tableOperationsFII[indexYear][mes] = [
          MONTHS_LABEL[mes].slice(0, 3),
          getNode(operationsFII[indexYear], mes),
          lossesOldYear,
          getNode(operationsFII[indexYear], mes) < 0 ? 0 : baseCalcTax,
          lossesOldYear,
          "20%",
          baseCalcTax - lossesOldYear <= 0 ? 0 : (baseCalcTax - lossesOldYear) * 0.2
        ];
      }
    })
  );
  const title = {
    pageBreak: "before",
    text: "Opera\xE7\xF5es Fundos de Investimentos Imobili\xE1rios (FII e FIAGROS)\n\n",
    style: "title"
  };
  const content1 = {
    text: [
      "As opera\xE7\xF5es de venda envolvendo ",
      {
        text: "fundos imobili\xE1rios",
        style: { "text-decorator": "underline", bold: true }
      },
      " ser\xE3o declaradas nessa se\xE7\xE3o e de forma mensal. Toda venda de fundo imobili\xE1rio \xE9 tributada, abaixo poder\xE1 verificar seus ganhos/preju\xEDzos apurados de acordo com seus lan\xE7amentos.\n\n"
    ]
  };
  const content2 = {
    image: "print7",
    width: 505
  };
  const content3 = {
    text: "\n"
  };
  const content4 = {
    style: "tableOperation",
    table: {
      widths: [30, "*", "*", "*", "*", "*", "*"],
      body: [
        composeHeaderTable([
          "M\xEAs",
          "Resultado l\xEDquido do m\xEAs",
          "Resultado negativo at\xE9 o m\xEAs anterior",
          "Base de c\xE1lculo do imposto",
          "Preju\xEDzo a compensar",
          "Al\xEDquota do imposto",
          "Imposto a pagar"
        ]),
        ...composeTableOperationsFII(tableOperationsFII, operationsFII, year)
      ]
    }
  };
  docDefinition.content.push(title);
  docDefinition.content.push(content1);
  docDefinition.content.push(content2);
  docDefinition.content.push(content3);
  docDefinition.content.push(content4);
  docDefinition.operations.push({
    id: DOC_DEFINITION_OPERATIONS.OPERATIONS_FII,
    ...content4
  });
}
function renderRendimentsIsentos(provents, SUM_SWING_TRADE_FREE_99, year) {
  if (!provents.rendiments.length && !hasOwn(SUM_SWING_TRADE_FREE_99, year)) {
    return [{}];
  }
  const gcapInfra = [];
  if (hasOwn(SUM_SWING_TRADE_FREE_99, year)) {
    map3(SUM_SWING_TRADE_FREE_99[year], (ticker) => {
      gcapInfra.push([
        "99",
        ticker.document_number_principal,
        ticker.name,
        `Ganho de capital na venda de ${ticker.ticker} - (Administradora: ${ticker.document_number_admin ? ticker.document_number_admin : ticker.document_number_principal})`,
        convertCurrencyReal(ticker.amountValues || 0)
      ]);
    });
  }
  const body = [...provents.rendiments, ...gcapInfra];
  const title = {
    text: "Rendimentos de (FII, FIAGRO e FI-INFRA)",
    style: "title"
  };
  const content1 = {
    style: "table",
    table: {
      widths: [20, "*", 100, "*", "*"],
      body: [
        composeHeaderTable([
          "Tipo",
          "CNPJ",
          "Nome da fonte pagadora",
          "Descri\xE7\xE3o",
          "Valor"
        ]),
        ...body
      ]
    }
  };
  return [title, content1];
}
function renderRendimentsPrint(provents, SUM_SWING_TRADE_FREE_99, year) {
  if (!provents.dividends.length && !provents.rendiments.length && !hasOwn(SUM_SWING_TRADE_FREE_99, year)) {
    return [{}];
  }
  const title = {
    text: "Rendimentos isentos e n\xE3o tribut\xE1veis (Vendas abaixo de 20mil, ativos isentos e dividendos)\n\n",
    style: "title",
    pageBreak: "before"
  };
  const content1 = {
    text: [
      {
        text: "Esta se\xE7\xE3o ir\xE1 lhe demonstrar quais rendimentos teve durante e o ano e foram "
      },
      {
        text: "isentos de imposto de renda",
        style: { "text-transform": "underline" }
      },
      { text: ", seja por benef\xEDcio fiscal ou limite de isen\xE7\xE3o.\n\n" }
    ]
  };
  const content2 = {
    text: "Itens contemplados no relat\xF3rio:\n",
    ul: [
      "Vendas mensais de a\xE7\xF5es abaixo de 20 mil reais (Brasil)",
      "Dividendos de a\xE7\xF5es",
      "Rendimentos de (FII, FIAGRO e FI-INFRA)",
      "Reembolso (dividendos recebidos com ativos alugados - doador)",
      "Vendas de ativos com benef\xEDcio fiscal\n\n"
    ]
  };
  const content3 = {
    text: "Local e exemplo de preenchimento:\n",
    style: "subheader"
  };
  const content4 = {
    image: "print4",
    width: 505
  };
  const content5 = {
    pageBreak: "before",
    text: [
      "Para cada linha da tabela abaixo efetue um lan\xE7amento atrav\xE9s do bot\xE3o ",
      { text: "'Novo'", style: "negrito" },
      ", preencha os dados da tabela e confirme em ",
      { text: "'OK'\n\n", style: "negrito" }
    ]
  };
  return [title, content1, content2, content3, content4, content5];
}

// irpf_to_pdf/docGenerate.js
function generatePdf(name, documentNumber, year, itensWalletFiltered, provents, bonifications, bonificationsWithFractions, SUM_SWING_TRADE_FREE_99, SUM_SWING_TRADE_FREE, operationsFull, SUM_SWING_TRADE_CRIPTO_FREE, rentals, operationsFII, lossesSalesFii, tableOperationsFII, reembolso, rendimentsCDB) {
  const bens = composeBensDireitos(itensWalletFiltered);
  const docDefinition = {
    content: [
      {
        stack: [
          { image: "ricardoinvesting", width: 150, height: 120 },
          {
            text: "myDashboard",
            link: "https://mydashboard.com.br/",
            color: "#815ae8"
          },
          { text: "Relat\xF3rio auxiliar para declara\xE7\xE3o de imposto de renda" },
          { text: `Ano calend\xE1rio: ${year}`, style: "subheader" }
        ],
        style: "header"
      },
      {
        text: [
          `${name || "<N\xE3o informado>"}
`,
          `CPF: ${documentNumber || "<N\xE3o informado>"}`
        ],
        style: { alignment: "right" },
        pageBreak: "after"
      },
      {
        text: "Escopo do relat\xF3rio\n\n",
        style: "title"
      },
      {
        text: "O relat\xF3rio auxiliar para Declara\xE7\xE3o de Imposto de Renda gerado pela nossa plataforma, tem por objetivo facilitar o preenchimento da declara\xE7\xE3o anual que todo investidor deve entregar para a Receita Federal do Brasil. O escopo que \xE9 atendido por esse relat\xF3rio ir\xE1 lhe auxiliar a preencher os seguintes dados em sua declara\xE7\xE3o:\n\n"
      },
      {
        ul: [
          `Bens e direitos (Posi\xE7\xE3o acion\xE1ria em 31/12/${year})`,
          "Rendimentos isentos e n\xE3o tribut\xE1veis (Vendas abaixo de R$20.000,00, ativos isentos e dividendos)",
          "Rendimentos sujeitos a tributa\xE7\xE3o exclusiva (Proventos tributados como JCP)",
          "Renda vari\xE1vel (Opera\xE7\xF5es comuns / Day-Trade / Fundos Imobili\xE1rios)",
          "Bonifica\xE7\xF5es",
          {
            text: "N\xE3o contempla ganho de capital em vendas de criptoativos acima de R$35.000,00",
            color: "red"
          }
        ]
      },
      {
        text: "\n\nIsen\xE7\xE3o de responsabilidade\n\n",
        style: "title"
      },
      {
        text: [
          "Toda a informa\xE7\xE3o contida no relat\xF3rio foi gerada com base nos dados informados pelo utilizador da planilha, ficando sob responsabilidade do investidor a confer\xEAncia dos dados cadastrados e o preenchimento da declara\xE7\xE3o de imposto de renda.",
          " Este relat\xF3rio",
          { text: " n\xE3o ser\xE1 sua \xFAnica fonte", style: { bold: true } },
          ` de consulta para preencher sua declara\xE7\xE3o, procure tamb\xE9m os informes fornecidos por outras institui\xE7\xF5es que geraram renda ou rendimentos durante o ano de ${year}.

Exemplo de outras informa\xE7\xF5es que dever\xE1 procurar para sua declara\xE7\xE3o:
`
        ]
      },
      {
        ul: [
          "Informe do banco onde possui conta corrente/poupan\xE7a para informa\xE7\xE3o de saldos e rendimentos",
          "Informe de seu empregador para declara\xE7\xE3o de remunera\xE7\xE3o anual e impostos retidos",
          "Rendimentos provenientes de alugu\xE9is, permutas etc"
        ],
        pageBreak: "after"
      },
      {
        text: "Instala\xE7\xE3o do programa\n\n",
        style: "title"
      },
      {
        text: [
          `O primeiro passo para a declara\xE7\xE3o do IRPF ${Number(year) + 1} pelo leitor \xE9 realizar o download do programa disponibilizado atrav\xE9s do site da Receita Federal do Brasil.
`,
          `Repare que o IRPF de ${Number(year) + 1} \xE9 referente ao fechamento de ${year} e a receita costuma disponibilizar o aplicativo para download pr\xF3ximo do final de fevereiro.`,
          "\nPode encontrar o link de instala\xE7\xE3o no site da Receita Federal ",
          {
            text: "[BAIXAR AQUI]",
            link: "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf",
            color: "#815ae8"
          },
          "\n A instala\xE7\xE3o do programa \xE9 r\xE1pida e f\xE1cil, ao abrir o instalador, ser\xE3o dados todos os passos para que o programa seja instalado adequadamente na sua m\xE1quina. Ap\xF3s abrir o programa, o investidor dever\xE1:\n\n"
        ]
      },
      {
        ol: [
          `Importar a declara\xE7\xE3o realizada no ano de ${Number(year) + 1} (compet\xEAncia ${year}), caso tenha declarado no ano anterior;
`,
          "Criar uma nova Declara\xE7\xE3o, caso seja a primeira vez declarando o imposto de renda\n\n"
        ]
      },
      {
        image: "print1",
        width: 505,
        pageBreak: "after"
      },
      {
        text: "Bens e direitos (Ativos sob sua cust\xF3dia)\n\n",
        style: "title"
      },
      {
        text: [
          `A obrigatoriedade das A\xE7\xF5es em Bens e Direitos existe caso tenha terminado o ano de ${year} com algum ativo em sua cust\xF3dia. Na declara\xE7\xE3o `,
          {
            text: "\xE9 necess\xE1rio informar todas as posi\xE7\xF5es",
            style: { bold: true }
          },
          ` em a\xE7\xF5es, op\xE7\xF5es, FII e ETF referentes ao dia 31/12/${year} na op\xE7\xE3o \u201CBens e Direitos\u201D.

`
        ]
      },
      {
        columns: [
          { text: 'Local da declara\xE7\xE3o Bens e Direitos"\n' },
          { text: "Exemplo de preenchimento" }
        ]
      },
      {
        columns: [
          { image: "print2", width: 255 },
          { image: "print3", width: 255 }
        ]
      },
      {
        text: [
          {
            text: "\n\nPara cada linha da tabela abaixo efetue um lan\xE7amento atrav\xE9s do bot\xE3o"
          },
          { text: " Novo", style: { bold: true } },
          " preencha os dados da tabela e confirme em ",
          { text: "'OK'\n\n", style: { bold: true } },
          `Abaixo inclu\xEDmos tamb\xE9m o custo de seus ativos em ${year - 1} de acordo com os lan\xE7amentos inseridos em mydashboard. Caso seus lan\xE7amentos de ${year - 1} n\xE3o estejam na planilha substitua os valores da coluna de 31/12/${year - 1} pelos valores que incluiu na declara\xE7\xE3o anterior.

`
        ],
        pageBreak: "after"
      },
      {
        text: "Ser\xE1 necess\xE1rio informar na se\xE7\xE3o de bens e direitos o grupo de bens, abaixo listamos o grupo e tamb\xE9m o c\xF3digo que ir\xE1 declarar seus ativos.\n",
        style: { bold: true }
      },
      {
        style: "table",
        table: {
          widths: ["auto", "auto", "auto", 100, 160, 60, 60],
          body: [
            composeHeaderTable([
              "Grupo",
              "C\xF3d.",
              "Local.",
              "CNPJ",
              "Discrimina\xE7\xE3o",
              `Situa\xE7\xE3o 31/12/${year - 1}`,
              `Situa\xE7\xE3o 31/12/${year}`
            ]),
            ...sanitizaTableBensCDB(bens)
          ]
        }
      },
      ...renderRendimentsPrint(provents, SUM_SWING_TRADE_FREE_99, year),
      ...renderBonifications(bonifications, bonificationsWithFractions),
      ...renderReembolso(reembolso),
      ...renderDividends(provents),
      ...renderRendimentsIsentos(provents, SUM_SWING_TRADE_FREE_99, year),
      ...renderLow20kMonth(SUM_SWING_TRADE_FREE, year),
      ...renderCriptoLow35kMonth(
        operationsFull,
        SUM_SWING_TRADE_CRIPTO_FREE,
        year
      ),
      ...renderJCPs(provents),
      ...renderRendimentsJCP(provents),
      ...renderResgateCDB(rendimentsCDB),
      ...renderRentals(rentals)
    ],
    pageMargin: [0, 0],
    defaultStyle: { alignment: "justify" },
    images: {
      ricardoinvesting: "https://i.ibb.co/WyLbmrt/logo-md.png",
      print1: "https://i.ibb.co/HG3hwv0/print-1.png",
      print2: "https://i.ibb.co/8zdSn3W/print-2.png",
      print3: "https://i.ibb.co/bs0HY4n/print-3.png",
      print4: "https://i.ibb.co/fk65Jw9/print4.png",
      print5: "https://i.ibb.co/G7Tm0mD/print-5.png",
      print6: "https://i.ibb.co/xSvNxT6/print-6.png",
      print7: "https://i.ibb.co/MggZg8Q/print-7.png",
      print8: "https://i.ibb.co/WDjfkTL/print-8.png",
      print9: "https://i.ibb.co/QjPv3Hx1/print-9.png"
    },
    styles: {
      table: {
        margin: [0, 5, 0, 15],
        fontSize: 10,
        alignment: "center"
      },
      tableOperation: {
        margin: [0, 5, 0, 15],
        fontSize: 10,
        alignment: "center",
        color: "#7f7f7f"
      },
      title: {
        fontSize: 15,
        bold: true
      },
      header: {
        fontSize: 18,
        bold: true,
        alignment: "right",
        margin: [0, 190, 0, 80]
      },
      subheader: {
        fontSize: 12
      },
      description: {
        fontSize: 9
      },
      negrito: {
        bold: true
      }
    },
    operations: [],
    amountTransactions: [],
    bens
  };
  renderCommonsOperations(docDefinition, year, operationsFull);
  renderOperationsFII(
    operationsFull,
    operationsFII,
    lossesSalesFii,
    year,
    tableOperationsFII,
    docDefinition
  );
  composeTaxExternal(docDefinition, provents);
  composerExternalDividends(docDefinition, provents);
  return docDefinition;
}

// irpf_to_pdf/index.js
var { map: map4, groupBy: groupBy2 } = import_lodash4.default;
function generateIRPF(yearChosen = 2022, nameChosen = "", documentNumberChosen = "", data = {}) {
  const operationsFull = {};
  let itensWalletFiltered = [];
  let provents = {};
  const year = yearChosen;
  const name = nameChosen.toUpperCase();
  const documentNumber = documentNumberChosen;
  const operationsFII = {};
  const tableOperationsFII = {};
  const lossesSalesFii = {};
  const SUM_SWING_TRADE_FREE = {};
  const SUM_SWING_TRADE_CRIPTO_FREE = {};
  const SUM_SWING_TRADE_FREE_99 = {};
  const SUM_SWING_TRADE_UNIT = {};
  let bonifications = {};
  let bonificationsWithFractions = {};
  let rentals = {};
  let reembolso = {};
  itensWalletFiltered = data == null ? void 0 : data.itensWalletFiltered;
  provents = composeProvents(data == null ? void 0 : data.provents);
  const rendimentsTD = composeRendimentsTds((data == null ? void 0 : data.tds) || {});
  const rendimentsCDB = composeRendimentsCdbs(
    (data == null ? void 0 : data.cdbs) || {},
    rendimentsTD.rendiments
  );
  bonifications = (data == null ? void 0 : data.bonifications) || {};
  bonificationsWithFractions = (data == null ? void 0 : data.bonificationsWithFractions) || {};
  rentals = (data == null ? void 0 : data.rentals) || {};
  reembolso = (data == null ? void 0 : data.reembolso) || {};
  map4(
    data.sells,
    (year2, indexYear) => map4(year2, (month, indexMonth) => {
      const filterOperations = groupBy2(month.operations, (x) => x.operation);
      map4(filterOperations, (ops) => {
        map4(ops, (op) => {
          composeOperations(
            operationsFull,
            indexMonth,
            indexYear,
            op,
            SUM_SWING_TRADE_FREE_99,
            SUM_SWING_TRADE_UNIT
          );
        });
      });
    })
  );
  unionSwingTradeUnit(operationsFull, SUM_SWING_TRADE_UNIT);
  composeSwingTradeFree(operationsFull, SUM_SWING_TRADE_FREE);
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
  );
  return pdfDefinition;
}

// irpf_to_pdf/mocks/fullData.js
var mockFullData2023 = {
  sells: {
    2022: {
      10: {
        operations: [
          {
            ticker: "VINO11",
            classe: "FII",
            name: "VINCI OFFICES",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.14000000000002188,
            transaction: 339.5
          },
          {
            classe: "FII",
            ticker: "XPPR11",
            name: "XP PROPERTIES",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -3.990000000000002,
            transaction: 314.65000000000003
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "CPLE6",
            name: "CIA PARANAENSE DE EN",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 49.530000000000015,
            transaction: 311.61
          },
          {
            ticker: "GARE12",
            classe: "FII",
            name: "GUARDIAN LOGISTICA F",
            type: "Renda Vari\xE1vel",
            value: 0.10000000000000009,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 3.2
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            ticker: "RZTR11",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            value: 0.719999999999942,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 543.5999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: 6.389134362000017,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 200.029052718
          }
        ]
      },
      8: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 60,
            transaction: 813.6
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "SANB4",
            name: "BANCO SANTANDER BRAS",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 2.340000000000014,
            transaction: 264.78000000000003
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 3.0299999999999994,
            transaction: 40.71
          }
        ]
      },
      10: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: 7.84391190825,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 618.15350685825
          },
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: -1.49351697989999,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 146.8625030235
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR12",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            value: 0.36,
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "ETH",
            classe: "Criptomoeda",
            name: "Ethereum",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 29.663266000000014,
            transaction: 179.41975699999998
          },
          {
            classe: "Criptomoeda",
            ticker: "BTC",
            name: "Bitcoin",
            type: "Renda Vari\xE1vel",
            value: 50.28499041720001,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "PETROLEO BRASILEIRO ",
            type: "Renda Vari\xE1vel",
            value: 447.89999999999986,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1265.6999999999998
          },
          {
            classe: "STOCK",
            ticker: "NVDA",
            name: "NVIDIA CORPORATION",
            type: "Renda Vari\xE1vel",
            value: 3.858369881040009,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 401.54350648104
          }
        ]
      }
    }
  },
  itensWallletFiltered: [
    {
      qtd: 15,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      investiment: "R$\xA0555,39",
      this_year: "R$\xA0555,39",
      averageCambio: "R$\xA00,00",
      name: "BANCO DO BRASIL SA",
      description: "(BBAS3) - 15 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA037,03 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0555,39",
      document_number_admin: "",
      document_number_principal: "00.000.000/0001-91",
      pm: "R$\xA037,03",
      past_year: "R$\xA0285,68"
    },
    {
      qtd: 100,
      ticker: "BEES3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0770,23",
      investiment: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      document_number_admin: "",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA07,70 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0770,23",
      pm: "R$\xA07,70",
      past_year: "R$\xA0144,87"
    },
    {
      qtd: 200,
      classe: "FII",
      ticker: "CPTS11",
      investiment: "R$\xA01.648,71",
      this_year: "R$\xA01.648,71",
      averageCambio: "R$\xA00,00",
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      description: "(CPTS11) - 200 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,24 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.648,71",
      document_number_admin: "",
      pm: "R$\xA08,24",
      past_year: "R$\xA0627,93"
    },
    {
      qtd: 17,
      classe: "A\xE7\xE3o",
      ticker: "CSMG3",
      this_year: "R$\xA0313,42",
      investiment: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      document_number_admin: "17.281.106/0001-03",
      document_number_principal: "17.281.106/0001-03",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE CIA SANEAMENTO DE MINAS GERAIS-COPASA MG, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. PRE\xC7O M\xC9DIO DE R$\xA018,44 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0313,42",
      pm: "R$\xA018,44",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 20,
      ticker: "CXSE3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0223,46",
      investiment: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. PRE\xC7O M\xC9DIO DE R$\xA011,17 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0223,46",
      document_number_admin: "22.543.331/0001-00",
      document_number_principal: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 206,
      ticker: "FGAA11",
      classe: "Fiagro",
      this_year: "R$\xA02.006,73",
      investiment: "R$\xA02.006,73",
      averageCambio: "R$\xA00,00",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      description: "(FGAA11) - 206 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,74 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.006,73",
      document_number_principal: "42.405.905/0001-91",
      document_number_admin: "",
      pm: "R$\xA09,74",
      past_year: "R$\xA0479,47"
    },
    {
      qtd: 154,
      classe: "FII",
      ticker: "GARE11",
      investiment: "R$\xA01.374,26",
      this_year: "R$\xA01.374,26",
      averageCambio: "R$\xA00,00",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      document_number_admin: "",
      description: "(GARE11) - 154 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA08,92 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.374,26",
      pm: "R$\xA08,92",
      past_year: "R$\xA0528,73"
    },
    {
      qtd: 43,
      ticker: "GGBR4",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0973,75",
      investiment: "R$\xA0973,75",
      averageCambio: "R$\xA00,00",
      name: "GERDAU SA PREFERENCE SHARES",
      description: "(GGBR4) - 43 A\xC7\xD5ES DE GERDAU SA PREFERENCE SHARES, CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. PRE\xC7O M\xC9DIO DE R$\xA022,65 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0973,75",
      document_number_principal: "33.611.500/0001-19",
      document_number_admin: "",
      pm: "R$\xA022,65",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 5,
      classe: "ETF-EXTERIOR",
      ticker: "JEPI",
      this_year: "R$\xA01.345,83",
      investiment: "R$\xA0275,88",
      averageCambio: "R$\xA04,88",
      name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
      document_number_principal: "",
      description: "(JEPI) - 5 A\xC7\xD5ES DE ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. PRE\xC7O M\xC9DIO DE $55.18 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $275.88 - (C\xC2MBIO DE R$ 4.8783)",
      document_number_admin: "",
      pm: "R$\xA055,18",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 175,
      classe: "FII",
      ticker: "KISU11",
      this_year: "R$\xA01.433,36",
      investiment: "R$\xA01.433,36",
      averageCambio: "R$\xA00,00",
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      description: "(KISU11) - 175 COTAS DE KILIMA FIC FDO. IMOB. SUNO 30, CNPJ: 36.669.660/0001-07, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. PRE\xC7O M\xC9DIO DE R$\xA08,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,36",
      document_number_principal: "36.669.660/0001-07",
      document_number_admin: "",
      pm: "R$\xA08,19",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 143,
      classe: "A\xE7\xE3o",
      ticker: "KLBN4",
      this_year: "R$\xA0544,38",
      investiment: "R$\xA0544,38",
      averageCambio: "R$\xA00,00",
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      document_number_admin: "",
      description: "(KLBN4) - 143 A\xC7\xD5ES DE KLABIN SA PREFERENCE SHARES, CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. PRE\xC7O M\xC9DIO DE R$\xA03,81 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0544,38",
      pm: "R$\xA03,81",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 147,
      ticker: "MXRF11",
      classe: "FII",
      investiment: "R$\xA01.528,43",
      this_year: "R$\xA01.528,43",
      averageCambio: "R$\xA00,00",
      name: "MAXI RENDA",
      document_number_admin: "",
      document_number_principal: "97.521.225/0001-25",
      description: "(MXRF11) - 147 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,40 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.528,43",
      pm: "R$\xA010,40",
      past_year: "R$\xA0565,94"
    },
    {
      qtd: 30,
      ticker: "PETR4",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0817,91",
      investiment: "R$\xA0817,91",
      averageCambio: "R$\xA00,00",
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      description: "(PETR4) - 30 A\xC7\xD5ES DE PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES, CNPJ: 33.000.167/0001-01, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PETR4. PRE\xC7O M\xC9DIO DE R$\xA027,26 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0817,91",
      document_number_principal: "33.000.167/0001-01",
      document_number_admin: "",
      pm: "R$\xA027,26",
      past_year: "R$\xA0566,15"
    },
    {
      qtd: 3.11541,
      ticker: "PLD",
      classe: "REIT",
      investiment: "R$\xA0361,67",
      this_year: "R$\xA01.794,67",
      averageCambio: "R$\xA04,96",
      name: "Prologis Inc",
      description: "(PLD) - 3.11541 A\xC7\xD5ES DE PROLOGIS INC, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. PRE\xC7O M\xC9DIO DE $116.09 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $361.67 - (C\xC2MBIO DE R$ 4.9622)",
      document_number_principal: "",
      document_number_admin: "",
      pm: "R$\xA0116,09",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 58,
      ticker: "RANI3",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0619,15",
      this_year: "R$\xA0619,15",
      averageCambio: "R$\xA00,00",
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_admin: "",
      description: "(RANI3) - 58 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM SA, CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA010,68 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0619,15",
      document_number_principal: "92.791.243/0001-03",
      pm: "R$\xA010,68",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 157,
      ticker: "RZAG11",
      classe: "Fiagro",
      investiment: "R$\xA01.494,05",
      this_year: "R$\xA01.494,05",
      averageCambio: "R$\xA00,00",
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      document_number_admin: "",
      description: "(RZAG11) - 157 COTAS DE FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB, CNPJ: 40.413.979/0001-44, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,52 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.494,05",
      pm: "R$\xA09,52",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 23,
      classe: "FII",
      ticker: "SARE11",
      investiment: "R$\xA01.365,09",
      this_year: "R$\xA01.365,09",
      averageCambio: "R$\xA00,00",
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      description: "(SARE11) - 23 COTAS DE SANTANDER RENDA DE ALUGU\xC9IS, CNPJ: 32.903.702/0001-71, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. PRE\xC7O M\xC9DIO DE R$\xA059,35 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.365,09",
      document_number_admin: "",
      pm: "R$\xA059,35",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 63,
      classe: "A\xE7\xE3o",
      ticker: "TAEE11",
      this_year: "R$\xA02.186,59",
      investiment: "R$\xA02.186,59",
      averageCambio: "R$\xA00,00",
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      description: "(TAEE11) - 63 A\xC7\xD5ES DE TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. PRE\xC7O M\xC9DIO DE R$\xA034,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.186,59",
      document_number_admin: "",
      pm: "R$\xA034,71",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 0.91,
      ticker: "TESOURO PREFIXADO 2025",
      classe: "Renda Fixa",
      this_year: "R$\xA0709,94",
      investiment: "R$\xA0709,94",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2025",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.91 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0709,94",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0780,16",
      past_year: "R$\xA0584,43"
    },
    {
      qtd: 1.88,
      ticker: "TESOURO PREFIXADO 2026",
      classe: "Renda Fixa",
      this_year: "R$\xA01.433,62",
      investiment: "R$\xA01.433,62",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2026",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 1.88 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,62",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0762,57",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 10,
      ticker: "TVRI11",
      classe: "FII",
      investiment: "R$\xA0898,76",
      this_year: "R$\xA0898,76",
      averageCambio: "R$\xA00,00",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      description: "(TVRI11) - 10 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA089,88 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0898,76",
      document_number_admin: "",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA089,88",
      past_year: "R$\xA0544,57"
    },
    {
      qtd: 131,
      ticker: "VGHF11",
      classe: "FII",
      this_year: "R$\xA01.214,41",
      investiment: "R$\xA01.214,41",
      averageCambio: "R$\xA00,00",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      description: "(VGHF11) - 131 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,27 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.214,41",
      document_number_principal: "36.771.692/0001-19",
      document_number_admin: "",
      pm: "R$\xA09,27",
      past_year: "R$\xA0326,67"
    },
    {
      qtd: 11,
      ticker: "VILG11",
      classe: "FII",
      investiment: "R$\xA01.082,02",
      this_year: "R$\xA01.082,02",
      averageCambio: "R$\xA00,00",
      name: "VINCI LOG\xCDSTICA",
      document_number_admin: "",
      description: "(VILG11) - 11 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA098,37 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.082,02",
      document_number_principal: "24.853.044/0001-22",
      pm: "R$\xA098,37",
      past_year: "R$\xA0394,48"
    },
    {
      qtd: 7,
      ticker: "VISC11",
      classe: "FII",
      this_year: "R$\xA0761,54",
      investiment: "R$\xA0761,54",
      averageCambio: "R$\xA00,00",
      name: "VINCI SHOPPING CENTERS",
      document_number_admin: "",
      description: "(VISC11) - 7 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0108,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0761,54",
      document_number_principal: "17.554.274/0001-25",
      pm: "R$\xA0108,79",
      past_year: "R$\xA0525,35"
    }
  ],
  provents: {
    BBAS3: {
      amountJcp: 46.76,
      rendiments: [],
      jcp: [
        3.9,
        4.49,
        8.34,
        4.31,
        8.34,
        4.26,
        8.75,
        4.37
      ],
      amountDividend: 7.389999999999999,
      dividends: [
        1.88,
        1.84,
        2.15,
        1.52
      ],
      name: "BANCO DO BRASIL SA",
      rendimentJCP: [
        0.08,
        0.04,
        0.17,
        0.04
      ],
      document_number_admin: "",
      document_number_principal: "00.000.000/0001-91",
      amountRendimentJCP: 0.33,
      amountRendiment: 0
    },
    SANB4: {
      amountJcp: 9.52,
      rendiments: [],
      amountDividend: 0,
      jcp: [
        3.06,
        3.23,
        3.23
      ],
      dividends: [],
      name: "BANCO SANTANDER BRASIL SA PREFERENCE SHARES",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "90.400.888/0001-42",
      amountRendiment: 0
    },
    VGHF11: {
      amountJcp: 0,
      rendiments: [
        3.24,
        3.9,
        5.6,
        5.6,
        6.72,
        6.16,
        6.72,
        11.52,
        11.52,
        13.1,
        13.1,
        14.41
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      document_number_principal: "36.771.692/0001-19",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 101.58999999999997
    },
    KISU11: {
      amountJcp: 0,
      rendiments: [
        1.26,
        4.5,
        5.1,
        5.11,
        5.67,
        7.28,
        8.32,
        7.28,
        7.28,
        7.8,
        13.12,
        13.12
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "36.669.660/0001-07",
      amountRendiment: 85.84
    },
    GGBR4: {
      amountJcp: 0,
      rendiments: [],
      amountDividend: 15.04,
      jcp: [],
      dividends: [
        15.04
      ],
      name: "GERDAU SA PREFERENCE SHARES",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "33.611.500/0001-19",
      amountRendiment: 0
    },
    RZAG11: {
      amountJcp: 0,
      rendiments: [
        4.32,
        4.59,
        13.12,
        13.32,
        16.21
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "40.413.979/0001-44",
      amountRendiment: 51.56
    },
    VISC11: {
      amountJcp: 0,
      rendiments: [
        4.25,
        4.1,
        4,
        4.1,
        4.1,
        4.1,
        4.25,
        4.25,
        4.6,
        4.6,
        5,
        7
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VINCI SHOPPING CENTERS",
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "17.554.274/0001-25",
      rendimentJCP: [],
      amountRendiment: 54.35
    },
    GARE11: {
      amountJcp: 0,
      rendiments: [
        4.51,
        4.77,
        5.16,
        5.24,
        5.33,
        10.16,
        12.62,
        12.62,
        12.93,
        12.93,
        12.93,
        12.93
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_admin: "",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_principal: "37.295.919/0001-60",
      amountRendiment: 112.13000000000002
    },
    CXSE3: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 2,
      dividends: [
        2
      ],
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_principal: "22.543.331/0001-00",
      document_number_admin: "22.543.331/0001-00",
      amountRendiment: 0
    },
    BBDC3: {
      amountJcp: 24.040000000000006,
      rendiments: [],
      jcp: [
        0.22,
        0.29,
        0.29,
        9.01,
        0.46,
        0.5,
        0.92,
        0.92,
        9.59,
        0.92,
        0.92
      ],
      amountDividend: 0,
      dividends: [],
      name: "BANCO BRADESCO SA",
      document_number_principal: "60.746.948/0001-12",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    VGHF12: {
      amountJcp: 0,
      rendiments: [
        1.72
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      rendimentJCP: [],
      document_number_principal: "36.771.692/0001-19",
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 1.72
    },
    MXRF11: {
      amountJcp: 0,
      rendiments: [
        5.6,
        6.16,
        6.72,
        6.72,
        6.72,
        6.72,
        6.72,
        6.72,
        6.16,
        11,
        11,
        11
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      document_number_admin: "",
      document_number_principal: "97.521.225/0001-25",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      amountRendiment: 91.24
    },
    BEES3: {
      amountJcp: 22.729999999999997,
      rendiments: [],
      jcp: [
        0.44,
        0.47,
        0.8,
        0.8,
        0.79,
        0.79,
        3.64,
        0.79,
        0.79,
        0.79,
        1.83,
        1.83,
        1.83,
        7.14
      ],
      amountDividend: 7.57,
      dividends: [
        7.57
      ],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      rendimentJCP: [],
      document_number_principal: "28.127.603/0001-78",
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0
    },
    TVRI11: {
      amountJcp: 0,
      rendiments: [
        5.52,
        5.4,
        5.4,
        5.4,
        5.4,
        5.4,
        5.4,
        5.4,
        5.4,
        5.4,
        9.1,
        9.1
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "14.410.722/0001-29",
      amountRendimentJCP: 0,
      amountRendiment: 72.32
    },
    KLBN4: {
      amountJcp: 5.65,
      rendiments: [],
      amountDividend: 12.16,
      jcp: [
        5.65
      ],
      dividends: [
        7.19,
        4.97
      ],
      name: "KLABIN SA PREFERENCE SHARES",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "89.637.490/0001-45",
      amountRendiment: 0
    },
    TAEE11: {
      amountJcp: 36.5,
      rendiments: [],
      amountDividend: 4.31,
      jcp: [
        5.34,
        31.16
      ],
      dividends: [
        2.82,
        0.75,
        0.74
      ],
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_admin: "",
      document_number_principal: "07.859.971/0001-30",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    PETR4: {
      amountJcp: 27.57,
      rendiments: [],
      amountDividend: 142.8,
      jcp: [
        1.2,
        17.05,
        9.32
      ],
      dividends: [
        30.4,
        26.08,
        16.62,
        8.34,
        28.4,
        6.27,
        17.23,
        9.46
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      rendimentJCP: [
        0.17,
        1,
        0.77,
        1.01
      ],
      amountRendimentJCP: 2.95,
      document_number_principal: "33.000.167/0001-01",
      document_number_admin: "",
      amountRendiment: 0
    },
    VILG11: {
      amountJcp: 0,
      rendiments: [
        2.8,
        4.02,
        3.18,
        3.9,
        4.02,
        7.7,
        7.7,
        7.7,
        7.7,
        7.7,
        7.48,
        7.15
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VINCI LOG\xCDSTICA",
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "24.853.044/0001-22",
      rendimentJCP: [],
      amountRendiment: 71.05000000000001
    },
    RANI3: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 5.08,
      dividends: [
        1.92,
        0.42,
        1.14,
        1.6
      ],
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    CPTS11: {
      amountJcp: 0,
      rendiments: [
        4.06,
        6,
        6.08,
        5.68,
        12.15,
        14.45,
        14.96,
        15.13,
        13.43,
        9.18,
        11.46,
        12.2
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "18.979.895/0001-13",
      amountRendiment: 124.78000000000002
    },
    RZTR11: {
      amountJcp: 0,
      rendiments: [
        4.3,
        5.95,
        9.35,
        9.35,
        9.35,
        11.9,
        11.9,
        11.9,
        11.9,
        15.4,
        19.6,
        19.6
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_admin: "",
      document_number_principal: "36.501.128/0001-86",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      amountRendiment: 140.5
    },
    external: {
      PLD: {
        cambioMonth: {
          5: 4.9097,
          8: 4.9806,
          11: 4.8676
        },
        amountDividend: 16.96,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 0,
        amountJcp: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          3.83,
          3.89,
          9.24
        ],
        name: "Prologis Inc",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          5: 5.4497670000000005,
          8: 5.528466000000001,
          11: 13.191196000000001
        },
        amountMonth: {
          5: 1.11,
          8: 1.11,
          11: 2.71
        },
        taxPerMonth: {
          5: 1.620201,
          8: 1.6435980000000001,
          11: 3.9573588
        },
        amountTax: 7.2211578
      },
      JEPI: {
        cambioMonth: {
          7: 4.7951,
          8: 4.9806,
          9: 4.8683,
          10: 5.0619,
          11: 4.8676
        },
        amountDividend: 22,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 0,
        amountJcp: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          1.97,
          4.69,
          4.92,
          5.11,
          5.31
        ],
        name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
        rendimentJCP: [],
        document_number_principal: "",
        dividendPerMonth: {
          7: 2.7811579999999996,
          8: 6.723809999999999,
          9: 7.059034999999999,
          10: 7.289135999999999,
          11: 7.593456000000001
        },
        taxPerMonth: {
          7: 0.815167,
          8: 2.042046,
          9: 2.142052,
          10: 2.1867408,
          11: 2.287772
        },
        amountMonth: {
          7: 0.58,
          8: 1.3499999999999999,
          9: 1.45,
          10: 1.44,
          11: 1.56
        },
        amountTax: 9.473777799999999
      }
    },
    FGAA11: {
      amountJcp: 0,
      rendiments: [
        7.14,
        7.14,
        6.63,
        7.84,
        8.58,
        14.7,
        21.45,
        21.45,
        21.45,
        19.8,
        20.81,
        19.91
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 176.9
    },
    SARE11: {
      amountJcp: 0,
      rendiments: [
        0.64,
        0.63,
        4.34,
        6.82,
        6.6,
        11.8,
        10,
        9.6,
        9,
        9,
        10.35
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_admin: "",
      document_number_principal: "32.903.702/0001-71",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 78.78
    },
    CSMG3: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 12.76,
      dividends: [
        12.76
      ],
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      rendimentJCP: [],
      document_number_admin: "17.281.106/0001-03",
      amountRendimentJCP: 0,
      document_number_principal: "17.281.106/0001-03",
      amountRendiment: 0
    }
  }
};
var mockFullData2022 = {
  sells: {
    2022: {
      10: {
        operations: [
          {
            ticker: "VINO11",
            classe: "FII",
            name: "VINCI OFFICES",
            type: "Renda Vari\xE1vel",
            value: 0.14000000000002188,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 339.5
          },
          {
            classe: "FII",
            ticker: "XPPR11",
            name: "XP PROPERTIES",
            type: "Renda Vari\xE1vel",
            value: -3.990000000000002,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 314.65000000000003
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "CPLE6",
            classe: "A\xE7\xE3o",
            name: "CIA PARANAENSE DE EN",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 49.530000000000015,
            transaction: 311.61
          },
          {
            ticker: "GARE12",
            classe: "FII",
            name: "GUARDIAN LOGISTICA F",
            type: "Renda Vari\xE1vel",
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            value: 0.10000000000000009,
            transaction: 3.2
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.719999999999942,
            transaction: 543.5999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: 6.389134362000017,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 200.029052718
          }
        ]
      },
      8: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            value: 60,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 813.6
          },
          {
            ticker: "SANB4",
            classe: "A\xE7\xE3o",
            name: "BANCO SANTANDER BRAS",
            type: "Renda Vari\xE1vel",
            value: 2.340000000000014,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 264.78000000000003
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 3.0299999999999994,
            transaction: 40.71
          }
        ]
      },
      10: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 7.84391190825,
            transaction: 618.15350685825
          },
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: -1.49351697989999,
            transaction: 146.8625030235
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "RZTR12",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            value: 0.36,
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "ETH",
            name: "Ethereum",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 29.663266000000014,
            transaction: 179.41975699999998
          },
          {
            classe: "Criptomoeda",
            ticker: "BTC",
            name: "Bitcoin",
            type: "Renda Vari\xE1vel",
            value: 50.28499041720001,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "PETROLEO BRASILEIRO ",
            type: "Renda Vari\xE1vel",
            value: 447.89999999999986,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1265.6999999999998
          },
          {
            ticker: "NVDA",
            classe: "STOCK",
            name: "NVIDIA CORPORATION",
            type: "Renda Vari\xE1vel",
            value: 3.858369881040009,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 401.54350648104
          }
        ]
      }
    }
  },
  itensWalletFiltered: [
    {
      qtd: 8,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      this_year: "R$\xA0285,68",
      investiment: "R$\xA0285,68",
      averageCambio: "R$\xA00,00",
      name: "BANCO DO BRASIL SA",
      description: "(BBAS3) - 8 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA035,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0285,68",
      document_number_admin: "",
      document_number_principal: "00.000.000/0001-91",
      pm: "R$\xA035,71",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 20,
      classe: "A\xE7\xE3o",
      ticker: "BBDC3",
      this_year: "R$\xA0265,43",
      investiment: "R$\xA0265,43",
      averageCambio: "R$\xA00,00",
      name: "BANCO BRADESCO SA",
      description: "(BBDC3) - 20 A\xC7\xD5ES DE BANCO BRADESCO SA, CNPJ: 60.746.948/0001-12, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBDC3. PRE\xC7O M\xC9DIO DE R$\xA013,27 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0265,43",
      document_number_principal: "60.746.948/0001-12",
      document_number_admin: "",
      pm: "R$\xA013,27",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 25,
      classe: "A\xE7\xE3o",
      ticker: "BEES3",
      this_year: "R$\xA0144,87",
      investiment: "R$\xA0144,87",
      averageCambio: "R$\xA00,00",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      description: "(BEES3) - 25 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA05,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0144,87",
      document_number_admin: "",
      pm: "R$\xA05,79",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 70,
      ticker: "CPTS11",
      classe: "FII",
      this_year: "R$\xA0627,93",
      investiment: "R$\xA0627,93",
      averageCambio: "R$\xA00,00",
      name: "CAPIT\xC2NIA SECURITIES II",
      description: "(CPTS11) - 70 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,97 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0627,93",
      document_number_principal: "18.979.895/0001-13",
      document_number_admin: "",
      pm: "R$\xA08,97",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 48,
      ticker: "FGAA11",
      classe: "Fiagro",
      investiment: "R$\xA0479,47",
      this_year: "R$\xA0479,47",
      averageCambio: "R$\xA00,00",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      description: "(FGAA11) - 48 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,99 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0479,47",
      document_number_principal: "42.405.905/0001-91",
      document_number_admin: "",
      pm: "R$\xA09,99",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 55,
      ticker: "GARE11",
      classe: "FII",
      this_year: "R$\xA0528,73",
      investiment: "R$\xA0528,73",
      averageCambio: "R$\xA00,00",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      description: "(GARE11) - 55 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA09,61 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0528,73",
      document_number_admin: "",
      document_number_principal: "37.295.919/0001-60",
      pm: "R$\xA09,61",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 56,
      ticker: "MXRF11",
      classe: "FII",
      investiment: "R$\xA0565,94",
      this_year: "R$\xA0565,94",
      averageCambio: "R$\xA00,00",
      name: "MAXI RENDA",
      document_number_admin: "",
      document_number_principal: "97.521.225/0001-25",
      description: "(MXRF11) - 56 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,11 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0565,94",
      pm: "R$\xA010,11",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 19,
      ticker: "PETR4",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0566,15",
      this_year: "R$\xA0566,15",
      averageCambio: "R$\xA00,00",
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      document_number_admin: "",
      document_number_principal: "33.000.167/0001-01",
      description: "(PETR4) - 19 A\xC7\xD5ES DE PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES, CNPJ: 33.000.167/0001-01, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PETR4. PRE\xC7O M\xC9DIO DE R$\xA029,80 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0566,15",
      pm: "R$\xA029,80",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 5,
      ticker: "RZTR11",
      classe: "FII",
      this_year: "R$\xA0519,16",
      investiment: "R$\xA0519,16",
      averageCambio: "R$\xA00,00",
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      description: "(RZTR11) - 5 COTAS DE FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX, CNPJ: 36.501.128/0001-86, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZTR11. PRE\xC7O M\xC9DIO DE R$\xA0103,83 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0519,16",
      document_number_principal: "36.501.128/0001-86",
      document_number_admin: "",
      pm: "R$\xA0103,83",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 15,
      classe: "A\xE7\xE3o",
      ticker: "SANB4",
      this_year: "R$\xA0219,50",
      investiment: "R$\xA0219,50",
      averageCambio: "R$\xA00,00",
      name: "BANCO SANTANDER BRASIL SA PREFERENCE SHARES",
      document_number_principal: "90.400.888/0001-42",
      description: "(SANB4) - 15 A\xC7\xD5ES DE BANCO SANTANDER BRASIL SA PREFERENCE SHARES, CNPJ: 90.400.888/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SANB4. PRE\xC7O M\xC9DIO DE R$\xA014,63 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0219,50",
      document_number_admin: "",
      pm: "R$\xA014,63",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 0.75,
      ticker: "TESOURO PREFIXADO 2025",
      classe: "Renda Fixa",
      investiment: "R$\xA0584,43",
      this_year: "R$\xA0584,43",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2025",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.75 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0584,43",
      document_number_principal: "62.169.875/0001-79",
      document_number_admin: "",
      pm: "R$\xA0779,24",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 6,
      classe: "FII",
      ticker: "TVRI11",
      investiment: "R$\xA0544,57",
      this_year: "R$\xA0544,57",
      averageCambio: "R$\xA00,00",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_admin: "",
      description: "(TVRI11) - 6 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA090,76 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0544,57",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA090,76",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 36,
      classe: "FII",
      ticker: "VGHF11",
      investiment: "R$\xA0326,67",
      this_year: "R$\xA0326,67",
      averageCambio: "R$\xA00,00",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      description: "(VGHF11) - 36 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,07 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0326,67",
      document_number_admin: "",
      document_number_principal: "36.771.692/0001-19",
      pm: "R$\xA09,07",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 4,
      classe: "FII",
      ticker: "VILG11",
      investiment: "R$\xA0394,48",
      this_year: "R$\xA0394,48",
      averageCambio: "R$\xA00,00",
      name: "VINCI LOG\xCDSTICA",
      document_number_admin: "",
      description: "(VILG11) - 4 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA098,62 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0394,48",
      document_number_principal: "24.853.044/0001-22",
      pm: "R$\xA098,62",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 5,
      ticker: "VISC11",
      classe: "FII",
      this_year: "R$\xA0525,35",
      investiment: "R$\xA0525,35",
      averageCambio: "R$\xA00,00",
      name: "VINCI SHOPPING CENTERS",
      document_number_principal: "17.554.274/0001-25",
      document_number_admin: "",
      description: "(VISC11) - 5 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0105,07 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0525,35",
      pm: "R$\xA0105,07",
      past_year: "R$\xA00,00"
    }
  ],
  provents: {
    TVRI11: {
      amountJcp: 0,
      rendiments: [
        0.92,
        3.68,
        5.52
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      amountRendimentJCP: 0,
      document_number_principal: "14.410.722/0001-29",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 10.120000000000001
    },
    BBAS3: {
      amountJcp: 6.66,
      rendiments: [],
      jcp: [
        4.31,
        2.35
      ],
      amountDividend: 1.36,
      dividends: [
        1.36
      ],
      name: "BANCO DO BRASIL SA",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "00.000.000/0001-91",
      amountRendiment: 0
    },
    BEES3: {
      amountJcp: 1.91,
      rendiments: [],
      jcp: [
        0.02,
        0.12,
        1.77
      ],
      amountDividend: 0,
      dividends: [],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "28.127.603/0001-78",
      rendimentJCP: [],
      amountRendiment: 0
    },
    PETR4: {
      amountJcp: 8.38,
      rendiments: [],
      amountDividend: 21.96,
      jcp: [
        8.38
      ],
      dividends: [
        21.96
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      rendimentJCP: [],
      document_number_principal: "33.000.167/0001-01",
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0
    },
    FGAA11: {
      amountJcp: 0,
      rendiments: [
        6.72
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "42.405.905/0001-91",
      amountRendimentJCP: 0,
      amountRendiment: 6.72
    },
    MXRF11: {
      amountJcp: 0,
      rendiments: [
        4,
        4.2,
        3.6
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "MAXI RENDA",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "97.521.225/0001-25",
      amountRendiment: 11.799999999999999
    },
    XPPR11: {
      amountJcp: 0,
      rendiments: [
        0.3
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "XP PROPERTIES",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "30.654.849/0001-40",
      amountRendiment: 0.3
    },
    VINO11: {
      amountJcp: 0,
      rendiments: [
        0.34
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VINCI OFFICES",
      document_number_principal: "12.516.185/0001-70",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0.34
    },
    RZTR11: {
      amountJcp: 0,
      rendiments: [
        3.75,
        6.25
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_admin: "",
      document_number_principal: "36.501.128/0001-86",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 10
    },
    CPTS11: {
      amountJcp: 0,
      rendiments: [
        3.3,
        3.15,
        5.1,
        2.59
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_admin: "",
      document_number_principal: "18.979.895/0001-13",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      amountRendiment: 14.139999999999999
    },
    GARE11: {
      amountJcp: 0,
      rendiments: [
        0.9,
        1.88,
        4.51
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 7.289999999999999
    }
  }
};
var mockFullData2024 = {
  sells: {
    2022: {
      10: {
        operations: [
          {
            classe: "FII",
            ticker: "VINO11",
            name: "VINCI OFFICES",
            type: "Renda Vari\xE1vel",
            value: 0.14000000000002188,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 339.5
          },
          {
            ticker: "XPPR11",
            classe: "FII",
            name: "XP PROPERTIES",
            type: "Renda Vari\xE1vel",
            value: -3.990000000000002,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 314.65000000000003
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "CPLE6",
            classe: "A\xE7\xE3o",
            name: "CIA PARANAENSE DE EN",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 49.530000000000015,
            transaction: 311.61
          },
          {
            ticker: "GARE12",
            classe: "FII",
            name: "GUARDIAN LOGISTICA F",
            type: "Renda Vari\xE1vel",
            value: 0.10000000000000009,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 3.2
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            value: 0.719999999999942,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 543.5999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: 6.389134362000017,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 200.029052718
          }
        ]
      },
      8: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 60,
            transaction: 813.6
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "SANB4",
            name: "BANCO SANTANDER BRAS",
            type: "Renda Vari\xE1vel",
            value: 2.340000000000014,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 264.78000000000003
          },
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            type: "Renda Vari\xE1vel",
            value: 3.0299999999999994,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 40.71
          }
        ]
      },
      10: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            value: 7.84391190825,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 618.15350685825
          },
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: -1.49351697989999,
            transaction: 146.8625030235
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "RZTR12",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            type: "Renda Vari\xE1vel",
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            value: 0.36,
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "ETH",
            classe: "Criptomoeda",
            name: "Ethereum",
            type: "Renda Vari\xE1vel",
            value: 29.663266000000014,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 179.41975699999998
          },
          {
            classe: "Criptomoeda",
            ticker: "BTC",
            name: "Bitcoin",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 50.28499041720001,
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "PETROLEO BRASILEIRO ",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 447.89999999999986,
            transaction: 1265.6999999999998
          },
          {
            ticker: "NVDA",
            classe: "STOCK",
            name: "NVIDIA CORPORATION",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            value: 3.858369881040009,
            transaction: 401.54350648104
          }
        ]
      }
    }
  },
  itensWalletFiltered: [
    {
      qtd: 19,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      this_year: "R$\xA0784,26",
      investiment: "R$\xA0784,26",
      averageCambio: "R$\xA00,00",
      name: "BANCO DO BRASIL SA",
      description: "(BBAS3) - 19 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA041,28 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0784,26",
      document_number_principal: "00.000.000/0001-91",
      document_number_admin: "",
      pm: "R$\xA041,28",
      past_year: "R$\xA0555,39"
    },
    {
      qtd: 100,
      ticker: "BEES3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0770,23",
      investiment: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      document_number_admin: "",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA07,70 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0770,23",
      pm: "R$\xA07,70",
      past_year: "R$\xA0770,23"
    },
    {
      qtd: 70,
      classe: "A\xE7\xE3o",
      ticker: "CMIG4",
      investiment: "R$\xA0799,78",
      this_year: "R$\xA0799,78",
      averageCambio: "R$\xA00,00",
      name: "Companhia Energ\xE9tica de Minas Gerais S.A.",
      document_number_principal: "17.155.730/0001-64",
      document_number_admin: "17.155.730/0001-64",
      description: "(CMIG4) - 70 A\xC7\xD5ES DE COMPANHIA ENERG\xC9TICA DE MINAS GERAIS S.A., CNPJ: 17.155.730/0001-64, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CMIG4. PRE\xC7O M\xC9DIO DE R$\xA011,43 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0799,78",
      pm: "R$\xA011,43",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 12,
      classe: "FI-INFRA",
      ticker: "CPTI11",
      investiment: "R$\xA01.196,71",
      this_year: "R$\xA01.196,71",
      averageCambio: "R$\xA00,00",
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      description: "(CPTI11) - 12 COTAS DE CAPI\xC2NIA INFRA, CNPJ: 38.065.012/0001-77, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. PRE\xC7O M\xC9DIO DE R$\xA099,73 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.196,71",
      document_number_admin: "",
      pm: "R$\xA099,73",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 200,
      ticker: "CPTS11",
      classe: "FII",
      investiment: "R$\xA01.648,71",
      this_year: "R$\xA01.648,71",
      averageCambio: "R$\xA00,00",
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      description: "(CPTS11) - 200 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,24 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.648,71",
      document_number_admin: "",
      pm: "R$\xA08,24",
      past_year: "R$\xA01.648,71"
    },
    {
      qtd: 17,
      ticker: "CSMG3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0313,42",
      investiment: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      document_number_admin: "17.281.106/0001-03",
      document_number_principal: "17.281.106/0001-03",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE CIA SANEAMENTO DE MINAS GERAIS-COPASA MG, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. PRE\xC7O M\xC9DIO DE R$\xA018,44 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0313,42",
      pm: "R$\xA018,44",
      past_year: "R$\xA0313,42"
    },
    {
      qtd: 20,
      ticker: "CXSE3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0223,46",
      investiment: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. PRE\xC7O M\xC9DIO DE R$\xA011,17 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0223,46",
      document_number_principal: "22.543.331/0001-00",
      document_number_admin: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      past_year: "R$\xA0223,46"
    },
    {
      qtd: 208,
      ticker: "FGAA11",
      classe: "Fiagro",
      investiment: "R$\xA02.024,58",
      this_year: "R$\xA02.024,58",
      averageCambio: "R$\xA00,00",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      description: "(FGAA11) - 208 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,73 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.024,58",
      document_number_admin: "",
      document_number_principal: "42.405.905/0001-91",
      pm: "R$\xA09,73",
      past_year: "R$\xA02.006,73"
    },
    {
      qtd: 154,
      classe: "FII",
      ticker: "GARE11",
      this_year: "R$\xA01.374,26",
      investiment: "R$\xA01.374,26",
      averageCambio: "R$\xA00,00",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      description: "(GARE11) - 154 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA08,92 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.374,26",
      document_number_admin: "",
      pm: "R$\xA08,92",
      past_year: "R$\xA01.374,26"
    },
    {
      qtd: 61,
      ticker: "GGBR4",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA01.365,36",
      investiment: "R$\xA01.365,36",
      averageCambio: "R$\xA00,00",
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_admin: "",
      description: "(GGBR4) - 61 A\xC7\xD5ES DE GERDAU SA PREFERENCE SHARES, CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. PRE\xC7O M\xC9DIO DE R$\xA022,38 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.365,36",
      document_number_principal: "33.611.500/0001-19",
      pm: "R$\xA022,38",
      past_year: "R$\xA0973,75"
    },
    {
      qtd: 38,
      classe: "A\xE7\xE3o",
      ticker: "GRND3",
      this_year: "R$\xA0239,96",
      investiment: "R$\xA0239,96",
      averageCambio: "R$\xA00,00",
      name: "GRENDENE SA",
      document_number_admin: "",
      document_number_principal: "89.850.341/0001-60",
      description: "(GRND3) - 38 A\xC7\xD5ES DE GRENDENE SA, CNPJ: 89.850.341/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GRND3. PRE\xC7O M\xC9DIO DE R$\xA06,31 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0239,96",
      pm: "R$\xA06,31",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 6.39818,
      ticker: "JEPI",
      classe: "ETF-EXTERIOR",
      investiment: "R$\xA0357,14",
      this_year: "R$\xA01.750,97",
      averageCambio: "R$\xA04,90",
      name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
      description: "(JEPI) - 6.39818 A\xC7\xD5ES DE ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. PRE\xC7O M\xC9DIO DE $55.82 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $357.14 - (C\xC2MBIO DE R$ 4.9028)",
      document_number_admin: "",
      document_number_principal: "",
      pm: "R$\xA055,82",
      past_year: "R$\xA01.345,83"
    },
    {
      qtd: 175,
      ticker: "KISU11",
      classe: "FII",
      this_year: "R$\xA01.433,36",
      investiment: "R$\xA01.433,36",
      averageCambio: "R$\xA00,00",
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      description: "(KISU11) - 175 COTAS DE KILIMA FIC FDO. IMOB. SUNO 30, CNPJ: 36.669.660/0001-07, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. PRE\xC7O M\xC9DIO DE R$\xA08,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,36",
      document_number_principal: "36.669.660/0001-07",
      document_number_admin: "",
      pm: "R$\xA08,19",
      past_year: "R$\xA01.433,36"
    },
    {
      qtd: 145,
      classe: "A\xE7\xE3o",
      ticker: "KLBN4",
      this_year: "R$\xA0552,97",
      investiment: "R$\xA0552,97",
      averageCambio: "R$\xA00,00",
      name: "KLABIN SA PREFERENCE SHARES",
      description: "(KLBN4) - 145 A\xC7\xD5ES DE KLABIN SA PREFERENCE SHARES, CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. PRE\xC7O M\xC9DIO DE R$\xA03,81 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0552,97",
      document_number_admin: "",
      document_number_principal: "89.637.490/0001-45",
      pm: "R$\xA03,81",
      past_year: "R$\xA0544,38"
    },
    {
      qtd: 149,
      ticker: "MXRF11",
      classe: "FII",
      this_year: "R$\xA01.548,96",
      investiment: "R$\xA01.548,96",
      averageCambio: "R$\xA00,00",
      name: "MAXI RENDA",
      document_number_admin: "",
      document_number_principal: "97.521.225/0001-25",
      description: "(MXRF11) - 149 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,40 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.548,96",
      pm: "R$\xA010,40",
      past_year: "R$\xA01.528,43"
    },
    {
      qtd: 3.11541,
      classe: "REIT",
      ticker: "PLD",
      investiment: "R$\xA0361,67",
      this_year: "R$\xA01.794,67",
      averageCambio: "R$\xA04,96",
      name: "Prologis Inc",
      document_number_principal: "",
      document_number_admin: "",
      description: "(PLD) - 3.11541 A\xC7\xD5ES DE PROLOGIS INC, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. PRE\xC7O M\xC9DIO DE $116.09 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $361.67 - (C\xC2MBIO DE R$ 4.9622)",
      pm: "R$\xA0116,09",
      past_year: "R$\xA01.794,67"
    },
    {
      qtd: 225,
      ticker: "RANI3",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA02.280,54",
      this_year: "R$\xA02.280,54",
      averageCambio: "R$\xA00,00",
      name: "IRANI PAPEL E EMBALAGEM SA",
      description: "(RANI3) - 225 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM SA, CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA010,14 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.280,54",
      document_number_admin: "",
      document_number_principal: "92.791.243/0001-03",
      pm: "R$\xA010,14",
      past_year: "R$\xA0619,15"
    },
    {
      qtd: 188,
      ticker: "RZAG11",
      classe: "Fiagro",
      this_year: "R$\xA01.762,07",
      investiment: "R$\xA01.762,07",
      averageCambio: "R$\xA00,00",
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      description: "(RZAG11) - 188 COTAS DE FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB, CNPJ: 40.413.979/0001-44, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,37 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.762,07",
      document_number_principal: "40.413.979/0001-44",
      document_number_admin: "",
      pm: "R$\xA09,37",
      past_year: "R$\xA01.494,05"
    },
    {
      qtd: 25,
      classe: "FII",
      ticker: "SARE11",
      this_year: "R$\xA01.454,78",
      investiment: "R$\xA01.454,78",
      averageCambio: "R$\xA00,00",
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      description: "(SARE11) - 25 COTAS DE SANTANDER RENDA DE ALUGU\xC9IS, CNPJ: 32.903.702/0001-71, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. PRE\xC7O M\xC9DIO DE R$\xA058,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.454,78",
      document_number_principal: "32.903.702/0001-71",
      document_number_admin: "",
      pm: "R$\xA058,19",
      past_year: "R$\xA01.365,09"
    },
    {
      qtd: 63,
      ticker: "TAEE11",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA02.186,59",
      this_year: "R$\xA02.186,59",
      averageCambio: "R$\xA00,00",
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_admin: "",
      document_number_principal: "07.859.971/0001-30",
      description: "(TAEE11) - 63 A\xC7\xD5ES DE TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. PRE\xC7O M\xC9DIO DE R$\xA034,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.186,59",
      pm: "R$\xA034,71",
      past_year: "R$\xA02.186,59"
    },
    {
      qtd: 0.04,
      ticker: "TESOURO IPCA+ COM JUROS SEMESTRAIS 2045",
      classe: "Renda Fixa",
      this_year: "R$\xA031,21",
      investiment: "R$\xA031,21",
      averageCambio: "R$\xA00,00",
      name: "TESOURO IPCA+ COM JUROS SEMESTRAIS 2045",
      document_number_admin: "",
      document_number_principal: "",
      description: "APLICA\xC7\xC3O EM TESOURO IPCA+ COM JUROS SEMESTRAIS 2045 NO CNPJ:  TOTALIZANDO 0.04 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA031,21",
      pm: "R$\xA0780,21",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 0.91,
      ticker: "TESOURO PREFIXADO 2025",
      classe: "Renda Fixa",
      investiment: "R$\xA0709,94",
      this_year: "R$\xA0709,94",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2025",
      document_number_principal: "62.169.875/0001-79",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.91 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0709,94",
      pm: "R$\xA0780,16",
      past_year: "R$\xA0709,94"
    },
    {
      qtd: 2.01,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2026",
      this_year: "R$\xA01.541,72",
      investiment: "R$\xA01.541,72",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2026",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 2.01 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.541,72",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0767,02",
      past_year: "R$\xA01.433,62"
    },
    {
      qtd: 0.11,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      this_year: "R$\xA0107,08",
      investiment: "R$\xA0107,08",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      document_number_principal: "62.169.875/0001-79",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.11 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0107,08",
      document_number_admin: "",
      pm: "R$\xA0973,43",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 0.29,
      classe: "Renda Fixa",
      ticker: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      this_year: "R$\xA0229,43",
      investiment: "R$\xA0229,43",
      averageCambio: "R$\xA00,00",
      name: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      description: "APLICA\xC7\xC3O EM TESOURO RENDA+ APOSENTADORIA EXTRA 2045 NO CNPJ:  TOTALIZANDO 0.29 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0229,43",
      document_number_admin: "",
      document_number_principal: "",
      pm: "R$\xA0791,13",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 10,
      ticker: "TVRI11",
      classe: "FII",
      investiment: "R$\xA0898,76",
      this_year: "R$\xA0898,76",
      averageCambio: "R$\xA00,00",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_admin: "",
      description: "(TVRI11) - 10 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA089,88 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0898,76",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA089,88",
      past_year: "R$\xA0898,76"
    },
    {
      qtd: 132,
      classe: "FII",
      ticker: "VGHF11",
      investiment: "R$\xA01.223,93",
      this_year: "R$\xA01.223,93",
      averageCambio: "R$\xA00,00",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      description: "(VGHF11) - 132 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,27 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.223,93",
      document_number_principal: "36.771.692/0001-19",
      document_number_admin: "",
      pm: "R$\xA09,27",
      past_year: "R$\xA01.214,41"
    },
    {
      qtd: 15,
      ticker: "VILG11",
      classe: "FII",
      this_year: "R$\xA01.462,61",
      investiment: "R$\xA01.462,61",
      averageCambio: "R$\xA00,00",
      name: "VINCI LOG\xCDSTICA",
      document_number_admin: "",
      document_number_principal: "24.853.044/0001-22",
      description: "(VILG11) - 15 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA097,51 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.462,61",
      pm: "R$\xA097,51",
      past_year: "R$\xA01.082,02"
    },
    {
      qtd: 7,
      classe: "FII",
      ticker: "VISC11",
      investiment: "R$\xA0761,54",
      this_year: "R$\xA0761,54",
      averageCambio: "R$\xA00,00",
      name: "VINCI SHOPPING CENTERS",
      document_number_admin: "",
      description: "(VISC11) - 7 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0108,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0761,54",
      document_number_principal: "17.554.274/0001-25",
      pm: "R$\xA0108,79",
      past_year: "R$\xA0761,54"
    }
  ],
  provents: {
    BBAS3: {
      amountJcp: 14.45,
      rendiments: [],
      amountDividend: 3.31,
      jcp: [
        7.82,
        6.63
      ],
      dividends: [
        3.31
      ],
      name: "BANCO DO BRASIL SA",
      rendimentJCP: [
        0.17
      ],
      amountRendimentJCP: 0.17,
      document_number_principal: "00.000.000/0001-91",
      document_number_admin: "",
      amountRendiment: 0
    },
    TVRI11: {
      amountJcp: 0,
      rendiments: [
        9.1,
        9.7,
        9.7
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      amountRendimentJCP: 0,
      document_number_principal: "14.410.722/0001-29",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 28.499999999999996
    },
    BEES3: {
      amountJcp: 7.6,
      rendiments: [],
      amountDividend: 0,
      jcp: [
        1.88,
        1.94,
        1.85,
        1.93
      ],
      dividends: [],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0
    },
    CPTI11: {
      amountJcp: 0,
      rendiments: [
        6.9,
        16.5
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "CAPI\xC2NIA INFRA",
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "38.065.012/0001-77",
      amountRendimentJCP: 0,
      amountRendiment: 23.4
    },
    MXRF12: {
      amountJcp: 0,
      rendiments: [
        0.82,
        1.84
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendimentJCP: 0,
      document_number_principal: "97.521.225/0001-25",
      amountRendiment: 2.66
    },
    KLBN4: {
      amountJcp: 3.74,
      rendiments: [],
      amountDividend: 5.05,
      jcp: [
        3.74
      ],
      dividends: [
        5.05
      ],
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_admin: "",
      document_number_principal: "89.637.490/0001-45",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      amountRendiment: 0
    },
    VGHF11: {
      amountJcp: 0,
      rendiments: [
        13.1,
        13.2,
        13.2
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "36.771.692/0001-19",
      amountRendiment: 39.5
    },
    PETR4: {
      amountJcp: 10.95,
      rendiments: [],
      amountDividend: 27.47,
      jcp: [
        10.95
      ],
      dividends: [
        7.29,
        20.18
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      rendimentJCP: [
        0.23,
        0.37
      ],
      amountRendimentJCP: 0.6,
      document_number_admin: "",
      document_number_principal: "33.000.167/0001-01",
      amountRendiment: 0
    },
    TAEE11: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 41.69,
      dividends: [
        41.69
      ],
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_admin: "",
      document_number_principal: "07.859.971/0001-30",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    VILG11: {
      amountJcp: 0,
      rendiments: [
        7.04,
        9,
        8.4
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VINCI LOG\xCDSTICA",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "24.853.044/0001-22",
      amountRendiment: 24.439999999999998
    },
    KISU11: {
      amountJcp: 0,
      rendiments: [
        14,
        13.12,
        13.12
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      rendimentJCP: [],
      document_number_principal: "36.669.660/0001-07",
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 40.239999999999995
    },
    RANI3: {
      amountJcp: 0,
      rendiments: [],
      amountDividend: 2.04,
      jcp: [],
      dividends: [
        2.04
      ],
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "92.791.243/0001-03",
      amountRendiment: 0
    },
    GGBR4: {
      amountJcp: 0,
      rendiments: [],
      amountDividend: 6,
      jcp: [],
      dividends: [
        6
      ],
      name: "GERDAU SA PREFERENCE SHARES",
      rendimentJCP: [],
      document_number_admin: "",
      document_number_principal: "33.611.500/0001-19",
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    RZAG11: {
      amountJcp: 0,
      rendiments: [
        17.71,
        17.16,
        17.16
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 52.03
    },
    RZTR11: {
      amountJcp: 0,
      rendiments: [
        15.4,
        11.9,
        11.9
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_principal: "36.501.128/0001-86",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 39.2
    },
    VISC11: {
      amountJcp: 0,
      rendiments: [
        7,
        7,
        7
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VINCI SHOPPING CENTERS",
      document_number_admin: "",
      amountRendimentJCP: 0,
      document_number_principal: "17.554.274/0001-25",
      rendimentJCP: [],
      amountRendiment: 21
    },
    CPTS11: {
      amountJcp: 0,
      rendiments: [
        13,
        14,
        15.2
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 42.2
    },
    GARE11: {
      amountJcp: 0,
      rendiments: [
        12.93,
        12.93,
        13.24
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_admin: "",
      document_number_principal: "37.295.919/0001-60",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 39.1
    },
    external: {
      JEPI: {
        cambioMonth: {
          0: 4.9391,
          1: 4.8759,
          2: 4.9704
        },
        amountDividend: 14.08,
        document_number_admin: "",
        amountRendimentJCP: 0,
        amountRendiment: 5.12,
        amountJcp: 0,
        rendiments: [
          5.12
        ],
        jcp: [],
        dividends: [
          7.41,
          6.67
        ],
        name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          0: 10.569674000000001,
          1: 7.3138499999999995,
          2: 9.543168
        },
        taxPerMonth: {
          0: 3.161024,
          1: 2.194155,
          2: 2.8828319999999996
        },
        amountMonth: {
          0: 2.14,
          1: 1.5,
          2: 1.92
        },
        amountTax: 6.043856
      }
    },
    FGAA11: {
      amountJcp: 0,
      rendiments: [
        22.66,
        22.66,
        20.8
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      amountRendiment: 66.12
    },
    MXRF11: {
      amountJcp: 0,
      rendiments: [
        13.64,
        12.4,
        14.7
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      amountRendimentJCP: 0,
      document_number_admin: "",
      document_number_principal: "97.521.225/0001-25",
      rendimentJCP: [],
      amountRendiment: 40.739999999999995
    },
    SARE11: {
      amountJcp: 0,
      rendiments: [
        10.35,
        9.2,
        8.28
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "32.903.702/0001-71",
      amountRendimentJCP: 0,
      amountRendiment: 27.83
    }
  }
};
var mockRobert2023 = {
  sells: {
    2022: {
      1: {
        operations: [
          {
            ticker: "HCTR11",
            classe: "FII",
            name: "HECTARE CE",
            document_number_principal: "30.248.180/0001-96",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 28.249999999999886,
            transaction: 3186.75
          },
          {
            classe: "FII",
            ticker: "DEVA11",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_principal: "37.087.810/0001-37",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 76.80000000000007,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2506.56
          },
          {
            classe: "FII",
            ticker: "HGLG11",
            name: "CSHG LOG\xCDSTICA",
            document_number_admin: "",
            document_number_principal: "11.728.688/0001-47",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 95.83999999999969,
            transaction: 2699.2
          },
          {
            classe: "FII",
            ticker: "XPML11",
            name: "XP MALLS",
            document_number_admin: "",
            document_number_principal: "28.757.546/0001-00",
            type: "Renda Vari\xE1vel",
            value: 6.599999999999966,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1433.8500000000001
          }
        ]
      },
      2: {
        operations: [
          {
            classe: "FII",
            ticker: "VSLH11",
            name: "VERSALHES RECEB\xCDVEIS",
            document_number_principal: "36.244.015/0001-42",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: -2.7000000000001023,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 880.1999999999999
          }
        ]
      },
      3: {
        operations: [
          {
            classe: "FII",
            ticker: "RECR11",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_admin: "13.486.793/0001-42",
            document_number_principal: "28.152.272/0001-26",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 59.51999999999998,
            transaction: 3238.4
          },
          {
            ticker: "CPTS11",
            classe: "FII",
            name: "CAPIT\xC2NIA SECURITIES",
            document_number_principal: "18.979.895/0001-13",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -1.7999999999998975,
            transaction: 3470.4
          },
          {
            classe: "FII",
            ticker: "CPTS11",
            name: "CAPIT\xC2NIA SECURITIES",
            document_number_admin: "",
            document_number_principal: "18.979.895/0001-13",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -48.95999999999998,
            transaction: 3474
          },
          {
            ticker: "DEVA11",
            classe: "FII",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_principal: "37.087.810/0001-37",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 10.79999999999984,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3962.7999999999997
          },
          {
            classe: "FII",
            ticker: "RECR11",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_principal: "28.152.272/0001-26",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 7.250000000000156,
            transaction: 2488.5
          },
          {
            classe: "FII",
            ticker: "DEVA11",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_principal: "37.087.810/0001-37",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0,
            transaction: 992.3000000000001
          },
          {
            classe: "FII",
            ticker: "CVBI11",
            name: "VBI CRI",
            document_number_principal: "28.729.197/0001-13",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 5.250000000000199,
            transaction: 3558.8
          }
        ]
      },
      4: {
        operations: [
          {
            classe: "FII",
            ticker: "HGRU11",
            name: "CSHG RENDA URBANA",
            document_number_principal: "29.641.226/0001-53",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.7800000000000296,
            transaction: 1494.0900000000001
          },
          {
            ticker: "MXRF11",
            classe: "FII",
            name: "MAXI RENDA",
            document_number_admin: "",
            document_number_principal: "97.521.225/0001-25",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -3.199999999999932,
            transaction: 792.8
          }
        ]
      },
      5: {
        operations: [
          {
            ticker: "DEVA11",
            classe: "FII",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_admin: "",
            document_number_principal: "37.087.810/0001-37",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -12.399999999999807,
            transaction: 1921.8000000000002
          },
          {
            classe: "FII",
            ticker: "DEVA11",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_principal: "37.087.810/0001-37",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 13.350000000000009,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1464
          },
          {
            classe: "FII",
            ticker: "CPTS11",
            name: "CAPIT\xC2NIA SECURITIES",
            document_number_principal: "18.979.895/0001-13",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: -9.20000000000016,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1880.3999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "DEVA11",
            classe: "FII",
            name: "DEVANT RECEB\xCDVEIS IM",
            document_number_admin: "",
            document_number_principal: "37.087.810/0001-37",
            type: "Renda Vari\xE1vel",
            value: 60.45000000000002,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1501.5
          },
          {
            classe: "FII",
            ticker: "KNSC11",
            name: "KINEA SECURITIES FDO",
            document_number_principal: "35.864.448/0001-38",
            document_number_admin: "62.418.140/0001-31",
            type: "Renda Vari\xE1vel",
            value: 0.7500000000000284,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2311
          }
        ]
      },
      8: {
        operations: [
          {
            ticker: "CPTS11",
            classe: "FII",
            name: "CAPIT\xC2NIA SECURITIES",
            document_number_admin: "",
            document_number_principal: "18.979.895/0001-13",
            type: "Renda Vari\xE1vel",
            value: -103.19999999999993,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3600
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "FI-INFRA",
            ticker: "CPTI11",
            name: "CAPI\xC2NIA INFRA",
            document_number_principal: "38.065.012/0001-77",
            document_number_admin: "59.281.253/0001-23",
            type: "Renda Vari\xE1vel",
            value: 0.9300000000000352,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3098.4500000000003
          },
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "FUNDO DE INVESTIMENT",
            document_number_admin: "",
            document_number_principal: "36.501.128/0001-86",
            type: "Renda Vari\xE1vel",
            value: 0.17999999999992156,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 601.26
          },
          {
            ticker: "RZTR11",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.7199999999996862,
            transaction: 2405.04
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "BODB11",
            classe: "FI-INFRA",
            name: "BOCAINA INFRA - FDO ",
            document_number_principal: "41.771.670/0001-99",
            document_number_admin: "59.281.253/0001-23",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 4.1999999999999105,
            transaction: 1944.6
          },
          {
            ticker: "URPR11",
            classe: "FII",
            name: "URCA PRIME RENDA",
            document_number_principal: "34.508.872/0001-87",
            document_number_admin: "22.610.500/0001-88",
            type: "Renda Vari\xE1vel",
            value: 1.3800000000000523,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 4651.06
          },
          {
            ticker: "BODB11",
            classe: "FI-INFRA",
            name: "BOCAINA INFRA - FDO ",
            document_number_admin: "59.281.253/0001-23",
            document_number_principal: "41.771.670/0001-99",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FI INFRA",
            value: 4.1999999999999105,
            transaction: 1944.6
          }
        ]
      }
    },
    2023: {
      1: {
        operations: [
          {
            classe: "Fiagro",
            ticker: "VGIA11",
            name: "VALORA CRA FDO INV N",
            document_number_principal: "41.081.088/0001-09",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 1.499999999999968,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1489.5
          }
        ]
      },
      3: {
        operations: [
          {
            ticker: "KDIF11",
            classe: "FI-INFRA",
            name: "KINEA INFRA - FDO IN",
            document_number_principal: "26.324.298/0001-89",
            document_number_admin: "62.418.140/0001-31",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FI INFRA",
            value: 2.6399999999999864,
            transaction: 749.9399999999999
          },
          {
            ticker: "SNAG11",
            classe: "Fiagro",
            name: "FIAGRO SUNO",
            document_number_principal: "28.152.777/0001-90",
            document_number_admin: "62.285.390/0001-40",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 2.0999999999999552,
            transaction: 2118.9
          },
          {
            ticker: "HSML11",
            classe: "FII",
            name: "HSI MALLS",
            document_number_admin: "62.318.407/0001-19",
            document_number_principal: "32.892.018/0001-31",
            type: "Renda Vari\xE1vel",
            value: -71.6099999999999,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 869.11
          },
          {
            classe: "FII",
            ticker: "BTLG11",
            name: "BTG PACTUAL LOG\xCDSTIC",
            document_number_admin: "59.281.253/0001-23",
            document_number_principal: "11.839.593/0001-09",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -241.18000000000004,
            transaction: 2883
          }
        ]
      },
      4: {
        operations: [
          {
            ticker: "KNSC11",
            classe: "FII",
            name: "KINEA SECURITIES FDO",
            document_number_admin: "62.418.140/0001-31",
            document_number_principal: "35.864.448/0001-38",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -23.12999999999994,
            transaction: 765
          },
          {
            ticker: "RECR11",
            classe: "FII",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_admin: "13.486.793/0001-42",
            document_number_principal: "28.152.272/0001-26",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -458.24999999999994,
            transaction: 1922
          },
          {
            ticker: "URPR11",
            classe: "FII",
            name: "URCA PRIME RENDA",
            document_number_admin: "22.610.500/0001-88",
            document_number_principal: "34.508.872/0001-87",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -183.73000000000002,
            transaction: 1695.75
          },
          {
            ticker: "CVBI11",
            classe: "FII",
            name: "VBI CRI",
            document_number_principal: "28.729.197/0001-13",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            value: -492.7999999999997,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3420
          },
          {
            classe: "FII",
            ticker: "KNSC11",
            name: "KINEA SECURITIES FDO",
            document_number_principal: "35.864.448/0001-38",
            document_number_admin: "62.418.140/0001-31",
            type: "Renda Vari\xE1vel",
            value: -12.639999999999986,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 687.92
          },
          {
            ticker: "RECR11",
            classe: "FII",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_principal: "28.152.272/0001-26",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            value: -140.39999999999992,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 811.7
          }
        ]
      },
      5: {
        operations: [
          {
            ticker: "KNSC11",
            classe: "FII",
            name: "KINEA SECURITIES FDO",
            document_number_admin: "62.418.140/0001-31",
            document_number_principal: "35.864.448/0001-38",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 6.800000000000068,
            transaction: 1758.1999999999998
          }
        ]
      },
      6: {
        operations: [
          {
            ticker: "SNAG11",
            classe: "Fiagro",
            name: "FIAGRO SUNO",
            document_number_principal: "28.152.777/0001-90",
            document_number_admin: "62.285.390/0001-40",
            type: "Renda Vari\xE1vel",
            value: 5.999999999999872,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3009
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "SNAG11",
            classe: "Fiagro",
            name: "FIAGRO SUNO",
            document_number_admin: "62.285.390/0001-40",
            document_number_principal: "28.152.777/0001-90",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.9999999999999787,
            transaction: 1002
          },
          {
            classe: "FII",
            ticker: "URPR11",
            name: "URCA PRIME RENDA",
            document_number_principal: "34.508.872/0001-87",
            document_number_admin: "22.610.500/0001-88",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 39.05999999999999,
            transaction: 2116.59
          }
        ]
      },
      8: {
        operations: [
          {
            ticker: "CVBI11",
            classe: "FII",
            name: "VBI CRI",
            document_number_admin: "13.486.793/0001-42",
            document_number_principal: "28.729.197/0001-13",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 1.8199999999999363,
            transaction: 677.9499999999999
          },
          {
            classe: "FI-INFRA",
            ticker: "KDIF11",
            name: "KINEA INFRA - FDO IN",
            document_number_admin: "62.418.140/0001-31",
            document_number_principal: "26.324.298/0001-89",
            type: "Renda Vari\xE1vel",
            value: 47.80000000000001,
            operation: "VENDA DE FI INFRA",
            transaction: 667.1500000000001
          },
          {
            ticker: "KNSC11",
            classe: "FII",
            name: "KINEA SECURITIES FDO",
            document_number_principal: "35.864.448/0001-38",
            document_number_admin: "62.418.140/0001-31",
            type: "Renda Vari\xE1vel",
            value: 24.65000000000005,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1510.11
          }
        ]
      },
      9: {
        operations: [
          {
            classe: "FII",
            ticker: "RECR11",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_principal: "28.152.272/0001-26",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            value: 16.899999999999977,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 934.9
          },
          {
            classe: "FII",
            ticker: "RECR11",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_principal: "28.152.272/0001-26",
            document_number_admin: "13.486.793/0001-42",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 3.2999999999999687,
            transaction: 1013.0999999999999
          }
        ]
      },
      10: {
        operations: [
          {
            classe: "FI-INFRA",
            ticker: "BODB11",
            name: "BOCAINA INFRA - FDO ",
            document_number_admin: "59.281.253/0001-23",
            document_number_principal: "41.771.670/0001-99",
            type: "Renda Vari\xE1vel",
            value: 35.69999999999985,
            operation: "VENDA DE FI INFRA",
            transaction: 1601.4
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "BTLG11",
            classe: "FII",
            name: "BTG PACTUAL LOG\xCDSTIC",
            document_number_principal: "11.839.593/0001-09",
            document_number_admin: "59.281.253/0001-23",
            type: "Renda Vari\xE1vel",
            value: 1.080000000000041,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3619.7999999999997
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "Fiagro",
            ticker: "SNAG11",
            name: "FIAGRO SUNO",
            document_number_principal: "28.152.777/0001-90",
            document_number_admin: "62.285.390/0001-40",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 1.589999999999966,
            transaction: 534.77
          },
          {
            classe: "FII",
            ticker: "CVBI11",
            name: "VBI CRI",
            document_number_admin: "13.486.793/0001-42",
            document_number_principal: "28.729.197/0001-13",
            type: "Renda Vari\xE1vel",
            value: 22.720000000000255,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 3039.36
          }
        ]
      },
      3: {
        operations: [
          {
            classe: "FII",
            ticker: "RECR11",
            name: "REC RECEB\xCDVEIS IMOBI",
            document_number_admin: "13.486.793/0001-42",
            document_number_principal: "28.152.272/0001-26",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: -18.88000000000011,
            transaction: 2827.52
          }
        ]
      }
    }
  },
  itensWalletFiltered: [
    {
      qtd: 30,
      ticker: "BTLG11",
      classe: "FII",
      this_year: "R$\xA03.002,90",
      investiment: "R$\xA03.002,90",
      averageCambio: "R$\xA00,00",
      name: "BTG PACTUAL LOG\xCDSTICA",
      document_number_admin: "59.281.253/0001-23",
      document_number_principal: "11.839.593/0001-09",
      description: "(BTLG11) - 30 COTAS DE BTG PACTUAL LOG\xCDSTICA, CNPJ: 59.281.253/0001-23, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BTLG11. PRE\xC7O M\xC9DIO DE R$\xA0100,10 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA03.002,90",
      pm: "R$\xA0100,10",
      past_year: "R$\xA05.051,20"
    },
    {
      qtd: 25,
      ticker: "CPTI11",
      classe: "FI-INFRA",
      this_year: "R$\xA02.428,92",
      investiment: "R$\xA02.428,92",
      averageCambio: "R$\xA00,00",
      name: "CAPI\xC2NIA INFRA",
      description: "(CPTI11) - 25 COTAS DE CAPI\xC2NIA INFRA, CNPJ: 59.281.253/0001-23, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. PRE\xC7O M\xC9DIO DE R$\xA097,16 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.428,92",
      document_number_admin: "59.281.253/0001-23",
      document_number_principal: "38.065.012/0001-77",
      pm: "R$\xA097,16",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 30,
      classe: "FII",
      ticker: "CVBI11",
      investiment: "R$\xA02.831,72",
      this_year: "R$\xA02.831,72",
      averageCambio: "R$\xA00,00",
      name: "VBI CRI",
      document_number_principal: "28.729.197/0001-13",
      description: "(CVBI11) - 30 COTAS DE VBI CRI, CNPJ: 13.486.793/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CVBI11. PRE\xC7O M\xC9DIO DE R$\xA094,39 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.831,72",
      document_number_admin: "13.486.793/0001-42",
      pm: "R$\xA094,39",
      past_year: "R$\xA05.028,35"
    },
    {
      qtd: 11,
      ticker: "HSML11",
      classe: "FII",
      this_year: "R$\xA0940,25",
      investiment: "R$\xA0940,25",
      averageCambio: "R$\xA00,00",
      name: "HSI MALLS",
      document_number_principal: "32.892.018/0001-31",
      document_number_admin: "62.318.407/0001-19",
      description: "(HSML11) - 11 COTAS DE HSI MALLS, CNPJ: 62.318.407/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: HSML11. PRE\xC7O M\xC9DIO DE R$\xA085,48 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0940,25",
      pm: "R$\xA085,48",
      past_year: "R$\xA01.567,72"
    },
    {
      qtd: 11,
      classe: "FI-INFRA",
      ticker: "IFRA11",
      this_year: "R$\xA01.127,14",
      investiment: "R$\xA01.127,14",
      averageCambio: "R$\xA00,00",
      name: "ITAU FICF INC INV INFRA RF CP",
      document_number_admin: "62.418.140/0001-31",
      description: "(IFRA11) - 11 COTAS DE ITAU FICF INC INV INFRA RF CP, CNPJ: 62.418.140/0001-31, C\xD3DIGO DE NEGOCIA\xC7\xC3O: IFRA11. PRE\xC7O M\xC9DIO DE R$\xA0102,47 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.127,14",
      document_number_principal: "34.633.510/0001-18",
      pm: "R$\xA0102,47",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 21,
      classe: "Fiagro",
      ticker: "KNCA11",
      investiment: "R$\xA02.172,40",
      this_year: "R$\xA02.172,40",
      averageCambio: "R$\xA00,00",
      name: "KINEA CR\xC9DITO AGRO FIAGRO-IMOBILI\xC1RIO",
      document_number_principal: "41.745.701/0001-37",
      document_number_admin: "62.418.140/0001-31",
      description: "(KNCA11) - 21 COTAS DE KINEA CR\xC9DITO AGRO FIAGRO-IMOBILI\xC1RIO, CNPJ: 62.418.140/0001-31, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KNCA11. PRE\xC7O M\xC9DIO DE R$\xA0103,45 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.172,40",
      pm: "R$\xA0103,45",
      past_year: "R$\xA02.068,91"
    },
    {
      qtd: 32,
      classe: "FII",
      ticker: "RECR11",
      investiment: "R$\xA02.846,62",
      this_year: "R$\xA02.846,62",
      averageCambio: "R$\xA00,00",
      name: "REC RECEB\xCDVEIS IMOBILI\xC1RIOS",
      document_number_principal: "28.152.272/0001-26",
      description: "(RECR11) - 32 COTAS DE REC RECEB\xCDVEIS IMOBILI\xC1RIOS, CNPJ: 13.486.793/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RECR11. PRE\xC7O M\xC9DIO DE R$\xA088,96 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.846,62",
      document_number_admin: "13.486.793/0001-42",
      pm: "R$\xA088,96",
      past_year: "R$\xA04.976,76"
    },
    {
      qtd: 249,
      ticker: "SNAG11",
      classe: "Fiagro",
      this_year: "R$\xA02.505,59",
      investiment: "R$\xA02.505,59",
      averageCambio: "R$\xA00,00",
      name: "FIAGRO SUNO",
      document_number_admin: "62.285.390/0001-40",
      document_number_principal: "28.152.777/0001-90",
      description: "(SNAG11) - 249 COTAS DE FIAGRO SUNO, CNPJ: 62.285.390/0001-40, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SNAG11. PRE\xC7O M\xC9DIO DE R$\xA010,06 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.505,59",
      pm: "R$\xA010,06",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 5,
      classe: "FII",
      ticker: "TRXF11",
      this_year: "R$\xA0512,65",
      investiment: "R$\xA0512,65",
      averageCambio: "R$\xA00,00",
      name: "TRX REAL ESTATE",
      document_number_principal: "28.548.288/0001-52",
      description: "(TRXF11) - 5 COTAS DE TRX REAL ESTATE, CNPJ: 13.486.793/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TRXF11. PRE\xC7O M\xC9DIO DE R$\xA0102,53 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0512,65",
      document_number_admin: "13.486.793/0001-42",
      pm: "R$\xA0102,53",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 38,
      classe: "FII",
      ticker: "URPR11",
      investiment: "R$\xA03.643,87",
      this_year: "R$\xA03.643,87",
      averageCambio: "R$\xA00,00",
      name: "URCA PRIME RENDA",
      document_number_admin: "22.610.500/0001-88",
      description: "(URPR11) - 38 COTAS DE URCA PRIME RENDA, CNPJ: 22.610.500/0001-88, C\xD3DIGO DE NEGOCIA\xC7\xC3O: URPR11. PRE\xC7O M\xC9DIO DE R$\xA095,89 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA03.643,87",
      document_number_principal: "34.508.872/0001-87",
      pm: "R$\xA095,89",
      past_year: "R$\xA02.999,99"
    }
  ],
  provents: {
    CPTI11: {
      amountJcp: 0,
      rendiments: [
        17
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      document_number_admin: "59.281.253/0001-23",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 17
    },
    KNCA11: {
      amountJcp: 0,
      rendiments: [
        5.6,
        26,
        21.6,
        28,
        22.6,
        28,
        25.8,
        22.2,
        24,
        22,
        22,
        20.02
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "KINEA CR\xC9DITO AGRO FIAGRO-IMOBILI\xC1RIO",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "62.418.140/0001-31",
      document_number_principal: "41.745.701/0001-37",
      amountRendiment: 267.82
    },
    URPR11: {
      amountJcp: 0,
      rendiments: [
        36.3,
        40,
        44.2,
        53.2,
        27.72,
        27.93,
        28.14,
        29,
        38.61,
        41.3,
        41.8
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "URCA PRIME RENDA",
      document_number_principal: "34.508.872/0001-87",
      amountRendimentJCP: 0,
      document_number_admin: "22.610.500/0001-88",
      rendimentJCP: [],
      amountRendiment: 408.20000000000005
    },
    SNAG11: {
      amountJcp: 0,
      rendiments: [
        12,
        24,
        9.6,
        8.48,
        48,
        12,
        12,
        12,
        10,
        2.12,
        11,
        13.52,
        27.39
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "FIAGRO SUNO",
      document_number_principal: "28.152.777/0001-90",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "62.285.390/0001-40",
      amountRendiment: 202.11
    },
    KDIF11: {
      amountJcp: 0,
      rendiments: [
        4.8,
        7.25,
        5,
        5,
        5,
        5
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "KINEA INFRA - FDO INV COTAS FDO INC. INV INF RF CP",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "62.418.140/0001-31",
      document_number_principal: "26.324.298/0001-89",
      amountRendiment: 32.05
    },
    BTLG11: {
      amountJcp: 0,
      rendiments: [
        37,
        37.74,
        37.74,
        14.8,
        14.8,
        14.8,
        15.2,
        15.2,
        15.99,
        19.76,
        25.84
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "BTG PACTUAL LOG\xCDSTICA",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "11.839.593/0001-09",
      document_number_admin: "59.281.253/0001-23",
      amountRendiment: 248.87
    },
    TRXF11: {
      amountJcp: 0,
      rendiments: [
        5,
        4.25,
        4.5,
        4.5,
        4.5,
        4.5,
        4.5,
        4.5
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "TRX REAL ESTATE",
      document_number_admin: "13.486.793/0001-42",
      rendimentJCP: [],
      document_number_principal: "28.548.288/0001-52",
      amountRendimentJCP: 0,
      amountRendiment: 36.25
    },
    BODB11: {
      amountJcp: 0,
      rendiments: [
        13,
        10.3,
        11,
        17.25,
        17.74,
        9.83,
        14.84,
        17.6
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "BOCAINA INFRA - FDO INV COTAS FDO INV INFRA RF CP",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "59.281.253/0001-23",
      document_number_principal: "41.771.670/0001-99",
      amountRendiment: 111.56
    },
    external: {
      PLD: {
        cambioMonth: {
          8: 4.9806
        },
        amountDividend: 1,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 0,
        amountJcp: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          1
        ],
        name: "Prologis Inc",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          8: 1.444374
        },
        taxPerMonth: {
          8: 0.448254
        },
        amountMonth: {
          8: 0.29000000000000004
        },
        amountTax: 0.448254
      },
      JEPI: {
        cambioMonth: {
          9: 4.8683,
          10: 5.0619,
          11: 4.8676
        },
        amountDividend: 5.25,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 0,
        amountJcp: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          1.37,
          1.88,
          2
        ],
        name: "JPMORGAN EQUITY PREMIUM INCOME ETF",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          9: 1.94732,
          10: 2.682807,
          11: 2.823208
        },
        taxPerMonth: {
          9: 0.5841959999999999,
          10: 0.809904,
          11: 0.8274920000000001
        },
        amountMonth: {
          9: 0.4,
          10: 0.53,
          11: 0.58
        },
        amountTax: 2.2215920000000002
      }
    },
    CVBI11: {
      amountJcp: 0,
      rendiments: [
        56.1,
        60.5,
        55,
        57.75,
        16.8,
        18.7,
        17.85,
        12.75,
        22.5,
        19.6,
        22.5,
        24
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VBI CRI",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "13.486.793/0001-42",
      document_number_principal: "28.729.197/0001-13",
      amountRendiment: 384.05000000000007
    },
    HSML11: {
      amountJcp: 0,
      rendiments: [
        12.6,
        14,
        15.54,
        7.4,
        7.4,
        8.14,
        8.14,
        8.14,
        8.14,
        8.14,
        8.14,
        8.14
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "HSI MALLS",
      document_number_principal: "32.892.018/0001-31",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_admin: "62.318.407/0001-19",
      amountRendiment: 113.92
    },
    RECR11: {
      amountJcp: 0,
      rendiments: [
        48.03,
        54.45,
        50.05,
        69.1,
        22.15,
        26.96,
        19.97,
        15.69,
        17.91,
        23.98,
        24.97,
        24.82
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "REC RECEB\xCDVEIS IMOBILI\xC1RIOS",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "28.152.272/0001-26",
      document_number_admin: "13.486.793/0001-42",
      amountRendiment: 398.0800000000001
    },
    KNSC11: {
      amountJcp: 0,
      rendiments: [
        32.9,
        38.48,
        32.19,
        38.85,
        19,
        5.25,
        8.8,
        7.7
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "KINEA SECURITIES FDO. DE INV. IMOB",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "35.864.448/0001-38",
      document_number_admin: "62.418.140/0001-31",
      amountRendiment: 183.17
    },
    IFRA11: {
      amountJcp: 0,
      rendiments: [
        5.35,
        10.8,
        10.8,
        10.8,
        11.99
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "ITAU FICF INC INV INFRA RF CP",
      amountRendimentJCP: 0,
      document_number_principal: "34.633.510/0001-18",
      document_number_admin: "62.418.140/0001-31",
      rendimentJCP: [],
      amountRendiment: 49.74
    }
  }
};
var mockEmpty2022 = {
  sells: {},
  itensWallletFiltered: [
    {
      qtd: 7,
      classe: "A\xE7\xE3o",
      ticker: "PETR4",
      investiment: "R$\xA060,00",
      this_year: "R$\xA060,00",
      averageCambio: "R$\xA00,00",
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      document_number_admin: "",
      description: "(PETR4) - 7 A\xC7\xD5ES DE PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES, CNPJ: 33.000.167/0001-01, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PETR4. PRE\xC7O M\xC9DIO DE R$\xA08,57 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA060,00",
      document_number_principal: "33.000.167/0001-01",
      pm: "R$\xA08,57",
      past_year: "R$\xA00,00"
    }
  ],
  provents: {}
};
var mockBonification2024 = {
  bonifications: {
    BBAS3: {
      name: "BANCO DO BRASIL SA",
      amount: 280,
      cnpj: "00.000.000/0001-91"
    }
  },
  itensWallletFiltered: [
    {
      qtd: 24,
      unitBonificationToYear: 5,
      ticker: "BBAS3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA01.064,26",
      investiment: "R$\xA01.064,26",
      averageCambio: "R$\xA00,00",
      description: "(BBAS3) - 24 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA044,34 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.064,26 (SENDO QUE 5 VIERAM DE BONIFICA\xC7\xD5ES)",
      document_number_admin: "",
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      pm: "R$\xA044,34",
      past_year: "R$\xA0555,39"
    },
    {
      unitBonificationToYear: 0,
      qtd: 100,
      ticker: "BEES3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0770,23",
      investiment: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA07,70 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0770,23 ",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      pm: "R$\xA07,70",
      past_year: "R$\xA0770,23"
    },
    {
      unitBonificationToYear: 0,
      qtd: 70,
      ticker: "CMIG4",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0799,78",
      this_year: "R$\xA0799,78",
      averageCambio: "R$\xA00,00",
      description: "(CMIG4) - 70 A\xC7\xD5ES DE COMPANHIA ENERG\xC9TICA DE MINAS GERAIS S.A., CNPJ: 17.155.730/0001-64, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CMIG4. PRE\xC7O M\xC9DIO DE R$\xA011,43 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0799,78 ",
      document_number_admin: "17.155.730/0001-64",
      name: "Companhia Energ\xE9tica de Minas Gerais S.A.",
      document_number_principal: "17.155.730/0001-64",
      pm: "R$\xA011,43",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 16,
      ticker: "CPTI11",
      classe: "FI-INFRA",
      this_year: "R$\xA01.599,31",
      investiment: "R$\xA01.599,31",
      averageCambio: "R$\xA00,00",
      description: "(CPTI11) - 16 COTAS DE CAPI\xC2NIA INFRA, CNPJ: 38.065.012/0001-77, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. PRE\xC7O M\xC9DIO DE R$\xA099,96 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.599,31 ",
      document_number_admin: "",
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      pm: "R$\xA099,96",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 200,
      ticker: "CPTS11",
      classe: "FII",
      investiment: "R$\xA01.648,71",
      this_year: "R$\xA01.648,71",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(CPTS11) - 200 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,24 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.648,71 ",
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      pm: "R$\xA08,24",
      past_year: "R$\xA01.648,71"
    },
    {
      unitBonificationToYear: 0,
      qtd: 17,
      ticker: "CSMG3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0313,42",
      investiment: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE CIA SANEAMENTO DE MINAS GERAIS-COPASA MG, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. PRE\xC7O M\xC9DIO DE R$\xA018,44 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0313,42 ",
      document_number_admin: "17.281.106/0001-03",
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      document_number_principal: "17.281.106/0001-03",
      pm: "R$\xA018,44",
      past_year: "R$\xA0313,42"
    },
    {
      qtd: 20,
      unitBonificationToYear: 0,
      ticker: "CXSE3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0223,46",
      investiment: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      document_number_admin: "22.543.331/0001-00",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. PRE\xC7O M\xC9DIO DE R$\xA011,17 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0223,46 ",
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      document_number_principal: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      past_year: "R$\xA0223,46"
    },
    {
      qtd: 575916e-8,
      unitBonificationToYear: 0,
      classe: "Criptomoeda",
      ticker: "ETH",
      investiment: "R$\xA0101,93",
      this_year: "R$\xA0101,93",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(ETH) - 0.00575916 UNIDADE DE ETHEREUM, C\xD3DIGO DE NEGOCIA\xC7\xC3O: ETH. PRE\xC7O M\xC9DIO DE R$\xA017.698,76 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0101,93 ",
      name: "Ethereum",
      document_number_principal: "",
      pm: "R$\xA017.698,76",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 208,
      ticker: "FGAA11",
      classe: "Fiagro",
      this_year: "R$\xA02.024,58",
      investiment: "R$\xA02.024,58",
      averageCambio: "R$\xA00,00",
      description: "(FGAA11) - 208 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,73 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.024,58 ",
      document_number_admin: "",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      pm: "R$\xA09,73",
      past_year: "R$\xA02.006,73"
    },
    {
      qtd: 154,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "GARE11",
      investiment: "R$\xA01.374,26",
      this_year: "R$\xA01.374,26",
      averageCambio: "R$\xA00,00",
      description: "(GARE11) - 154 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA08,92 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.374,26 ",
      document_number_admin: "",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      pm: "R$\xA08,92",
      past_year: "R$\xA01.374,26"
    },
    {
      qtd: 61,
      unitBonificationToYear: 0,
      ticker: "GGBR4",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA01.365,36",
      investiment: "R$\xA01.365,36",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(GGBR4) - 61 A\xC7\xD5ES DE GERDAU SA PREFERENCE SHARES, CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. PRE\xC7O M\xC9DIO DE R$\xA022,38 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.365,36 ",
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_principal: "33.611.500/0001-19",
      pm: "R$\xA022,38",
      past_year: "R$\xA0973,75"
    },
    {
      unitBonificationToYear: 0,
      qtd: 38,
      classe: "A\xE7\xE3o",
      ticker: "GRND3",
      investiment: "R$\xA0239,96",
      this_year: "R$\xA0239,96",
      averageCambio: "R$\xA00,00",
      description: "(GRND3) - 38 A\xC7\xD5ES DE GRENDENE SA, CNPJ: 89.850.341/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GRND3. PRE\xC7O M\xC9DIO DE R$\xA06,31 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0239,96 ",
      document_number_admin: "",
      name: "GRENDENE SA",
      document_number_principal: "89.850.341/0001-60",
      pm: "R$\xA06,31",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 6.39818,
      unitBonificationToYear: 0,
      classe: "ETF-EXTERIOR",
      ticker: "JEPI",
      this_year: "R$\xA01.750,97",
      investiment: "R$\xA0357,14",
      averageCambio: "R$\xA04,90",
      description: "(JEPI) - 6.39818 A\xC7\xD5ES DE ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. PRE\xC7O M\xC9DIO DE $55.82 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $357.14 - (C\xC2MBIO DE R$ 4.9028) ",
      document_number_admin: "",
      name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
      document_number_principal: "",
      pm: "R$\xA055,82",
      past_year: "R$\xA01.345,83"
    },
    {
      qtd: 175,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "KISU11",
      investiment: "R$\xA01.433,36",
      this_year: "R$\xA01.433,36",
      averageCambio: "R$\xA00,00",
      description: "(KISU11) - 175 COTAS DE KILIMA FIC FDO. IMOB. SUNO 30, CNPJ: 36.669.660/0001-07, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. PRE\xC7O M\xC9DIO DE R$\xA08,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,36 ",
      document_number_admin: "",
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      document_number_principal: "36.669.660/0001-07",
      pm: "R$\xA08,19",
      past_year: "R$\xA01.433,36"
    },
    {
      qtd: 145,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "KLBN4",
      this_year: "R$\xA0552,97",
      investiment: "R$\xA0552,97",
      averageCambio: "R$\xA00,00",
      description: "(KLBN4) - 145 A\xC7\xD5ES DE KLABIN SA PREFERENCE SHARES, CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. PRE\xC7O M\xC9DIO DE R$\xA03,81 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0552,97 ",
      document_number_admin: "",
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      pm: "R$\xA03,81",
      past_year: "R$\xA0544,38"
    },
    {
      qtd: 149,
      unitBonificationToYear: 0,
      ticker: "MXRF11",
      classe: "FII",
      this_year: "R$\xA01.548,96",
      investiment: "R$\xA01.548,96",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(MXRF11) - 149 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,40 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.548,96 ",
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      pm: "R$\xA010,40",
      past_year: "R$\xA01.528,43"
    },
    {
      unitBonificationToYear: 0,
      qtd: 3.11541,
      ticker: "PLD",
      classe: "REIT",
      this_year: "R$\xA01.794,67",
      investiment: "R$\xA0361,67",
      averageCambio: "R$\xA04,96",
      description: "(PLD) - 3.11541 A\xC7\xD5ES DE PROLOGIS INC, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. PRE\xC7O M\xC9DIO DE $116.09 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $361.67 - (C\xC2MBIO DE R$ 4.9622) ",
      document_number_admin: "",
      name: "Prologis Inc",
      document_number_principal: "",
      pm: "R$\xA0116,09",
      past_year: "R$\xA01.794,67"
    },
    {
      qtd: 225,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "RANI3",
      this_year: "R$\xA02.280,54",
      investiment: "R$\xA02.280,54",
      averageCambio: "R$\xA00,00",
      description: "(RANI3) - 225 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM SA, CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA010,14 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.280,54 ",
      document_number_admin: "",
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      pm: "R$\xA010,14",
      past_year: "R$\xA0619,15"
    },
    {
      qtd: 188,
      unitBonificationToYear: 0,
      classe: "Fiagro",
      ticker: "RZAG11",
      this_year: "R$\xA01.762,07",
      investiment: "R$\xA01.762,07",
      averageCambio: "R$\xA00,00",
      description: "(RZAG11) - 188 COTAS DE FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB, CNPJ: 40.413.979/0001-44, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,37 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.762,07 ",
      document_number_admin: "",
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      pm: "R$\xA09,37",
      past_year: "R$\xA01.494,05"
    },
    {
      unitBonificationToYear: 0,
      qtd: 14,
      ticker: "RZTR11",
      classe: "FII",
      this_year: "R$\xA01.266,81",
      investiment: "R$\xA01.266,81",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(RZTR11) - 14 COTAS DE FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX, CNPJ: 36.501.128/0001-86, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZTR11. PRE\xC7O M\xC9DIO DE R$\xA090,49 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.266,81 ",
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_principal: "36.501.128/0001-86",
      pm: "R$\xA090,49",
      past_year: "R$\xA01.266,81"
    },
    {
      qtd: 25,
      unitBonificationToYear: 0,
      ticker: "SARE11",
      classe: "FII",
      this_year: "R$\xA01.454,78",
      investiment: "R$\xA01.454,78",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(SARE11) - 25 COTAS DE SANTANDER RENDA DE ALUGU\xC9IS, CNPJ: 32.903.702/0001-71, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. PRE\xC7O M\xC9DIO DE R$\xA058,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.454,78 ",
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      pm: "R$\xA058,19",
      past_year: "R$\xA01.365,09"
    },
    {
      qtd: 63,
      unitBonificationToYear: 0,
      ticker: "TAEE11",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA02.186,59",
      this_year: "R$\xA02.186,59",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(TAEE11) - 63 A\xC7\xD5ES DE TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. PRE\xC7O M\xC9DIO DE R$\xA034,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.186,59 ",
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      pm: "R$\xA034,71",
      past_year: "R$\xA02.186,59"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.91,
      ticker: "TESOURO PREFIXADO 2025",
      classe: "Renda Fixa",
      this_year: "R$\xA0709,94",
      investiment: "R$\xA0709,94",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.91 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0709,94 ",
      name: "TESOURO PREFIXADO 2025",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0780,16",
      past_year: "R$\xA0709,94"
    },
    {
      unitBonificationToYear: 0,
      qtd: 2.01,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2026",
      this_year: "R$\xA01.541,72",
      investiment: "R$\xA01.541,72",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 2.01 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.541,72 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO 2026",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0767,02",
      past_year: "R$\xA01.433,62"
    },
    {
      qtd: 0.11,
      unitBonificationToYear: 0,
      ticker: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      classe: "Renda Fixa",
      investiment: "R$\xA0107,08",
      this_year: "R$\xA0107,08",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.11 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0107,08 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0973,43",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.86,
      ticker: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      classe: "Renda Fixa",
      this_year: "R$\xA0660,90",
      investiment: "R$\xA0660,90",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO RENDA+ APOSENTADORIA EXTRA 2045 NO CNPJ:  TOTALIZANDO 0.86 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0660,90 ",
      document_number_admin: "",
      name: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      document_number_principal: "",
      pm: "R$\xA0768,48",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 10,
      ticker: "TVRI11",
      classe: "FII",
      investiment: "R$\xA0898,76",
      this_year: "R$\xA0898,76",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(TVRI11) - 10 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA089,88 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0898,76 ",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA089,88",
      past_year: "R$\xA0898,76"
    },
    {
      qtd: 157,
      unitBonificationToYear: 0,
      ticker: "VGHF11",
      classe: "FII",
      investiment: "R$\xA01.452,26",
      this_year: "R$\xA01.452,26",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(VGHF11) - 157 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,25 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.452,26 ",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      document_number_principal: "36.771.692/0001-19",
      pm: "R$\xA09,25",
      past_year: "R$\xA01.214,41"
    },
    {
      unitBonificationToYear: 0,
      qtd: 15,
      classe: "FII",
      ticker: "VILG11",
      investiment: "R$\xA01.462,61",
      this_year: "R$\xA01.462,61",
      averageCambio: "R$\xA00,00",
      description: "(VILG11) - 15 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA097,51 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.462,61 ",
      document_number_admin: "",
      name: "VINCI LOG\xCDSTICA",
      document_number_principal: "24.853.044/0001-22",
      pm: "R$\xA097,51",
      past_year: "R$\xA01.082,02"
    },
    {
      qtd: 7,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "VISC11",
      investiment: "R$\xA0761,54",
      this_year: "R$\xA0761,54",
      averageCambio: "R$\xA00,00",
      description: "(VISC11) - 7 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0108,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0761,54 ",
      document_number_admin: "",
      name: "VINCI SHOPPING CENTERS",
      document_number_principal: "17.554.274/0001-25",
      pm: "R$\xA0108,79",
      past_year: "R$\xA0761,54"
    }
  ],
  provents: {
    BEES3: {
      amountJcp: 9.23,
      rendiments: [],
      amountDividend: 0,
      jcp: [
        1.88,
        1.94,
        1.85,
        1.93,
        1.63
      ],
      dividends: [],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 0
    },
    TVRI11: {
      amountJcp: 0,
      rendiments: [
        9.1,
        9.7,
        9.7,
        9.7
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_admin: "",
      amountRendimentJCP: 0,
      document_number_principal: "14.410.722/0001-29",
      rendimentJCP: [],
      amountRendiment: 38.199999999999996
    },
    BBAS3: {
      amountJcp: 14.45,
      rendiments: [],
      amountDividend: 3.31,
      jcp: [
        7.82,
        6.63
      ],
      dividends: [
        3.31
      ],
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      document_number_admin: "",
      amountRendimentJCP: 0.17,
      rendimentJCP: [
        0.17
      ],
      amountRendiment: 0
    },
    CPTI11: {
      amountJcp: 0,
      rendiments: [
        6.9,
        16.5,
        21
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "CAPI\xC2NIA INFRA",
      amountRendimentJCP: 0,
      document_number_principal: "38.065.012/0001-77",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 44.4
    },
    KLBN4: {
      amountJcp: 3.74,
      rendiments: [],
      amountDividend: 5.05,
      jcp: [
        3.74
      ],
      dividends: [
        5.05
      ],
      name: "KLABIN SA PREFERENCE SHARES",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "89.637.490/0001-45",
      amountRendiment: 0
    },
    MXRF12: {
      amountJcp: 0,
      rendiments: [
        0.82,
        1.84
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      document_number_principal: "97.521.225/0001-25",
      amountRendiment: 2.66
    },
    VGHF11: {
      amountJcp: 0,
      rendiments: [
        13.1,
        13.2,
        13.2,
        10.56
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      document_number_admin: "",
      amountRendimentJCP: 0,
      document_number_principal: "36.771.692/0001-19",
      rendimentJCP: [],
      amountRendiment: 50.06
    },
    PETR4: {
      amountJcp: 10.95,
      rendiments: [],
      amountDividend: 27.47,
      jcp: [
        10.95
      ],
      dividends: [
        7.29,
        20.18
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      amountRendimentJCP: 0.6,
      rendimentJCP: [
        0.23,
        0.37
      ],
      document_number_admin: "",
      document_number_principal: "33.000.167/0001-01",
      amountRendiment: 0
    },
    TAEE11: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 41.69,
      dividends: [
        41.69
      ],
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 0
    },
    KISU11: {
      amountJcp: 0,
      rendiments: [
        14,
        13.12,
        13.12,
        13.12
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      amountRendimentJCP: 0,
      document_number_principal: "36.669.660/0001-07",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 53.35999999999999
    },
    VILG11: {
      amountJcp: 0,
      rendiments: [
        7.04,
        9,
        8.4,
        8.7
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "VINCI LOG\xCDSTICA",
      document_number_admin: "",
      document_number_principal: "24.853.044/0001-22",
      rendimentJCP: [],
      amountRendimentJCP: 0,
      amountRendiment: 33.14
    },
    RANI3: {
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      amountDividend: 2.04,
      dividends: [
        2.04
      ],
      name: "IRANI PAPEL E EMBALAGEM SA",
      amountRendimentJCP: 0,
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "92.791.243/0001-03",
      amountRendiment: 0
    },
    GGBR4: {
      amountJcp: 0,
      rendiments: [],
      amountDividend: 6,
      jcp: [],
      dividends: [
        6
      ],
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_admin: "",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_principal: "33.611.500/0001-19",
      amountRendiment: 0
    },
    RZAG11: {
      amountJcp: 0,
      rendiments: [
        17.71,
        17.16,
        17.16,
        17.85
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_admin: "",
      document_number_principal: "40.413.979/0001-44",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      amountRendiment: 69.88
    },
    RZTR11: {
      amountJcp: 0,
      rendiments: [
        15.4,
        11.9,
        11.9,
        12.6
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      amountRendimentJCP: 0,
      document_number_principal: "36.501.128/0001-86",
      document_number_admin: "",
      rendimentJCP: [],
      amountRendiment: 51.800000000000004
    },
    GARE11: {
      amountJcp: 0,
      rendiments: [
        12.93,
        12.93,
        13.24,
        13.39
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      amountRendimentJCP: 0,
      document_number_principal: "37.295.919/0001-60",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 52.49
    },
    VISC11: {
      amountJcp: 0,
      rendiments: [
        7,
        7,
        7,
        7
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "VINCI SHOPPING CENTERS",
      document_number_admin: "",
      rendimentJCP: [],
      document_number_principal: "17.554.274/0001-25",
      amountRendimentJCP: 0,
      amountRendiment: 28
    },
    CPTS11: {
      amountJcp: 0,
      rendiments: [
        13,
        14,
        15.2,
        15.8
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_admin: "",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_principal: "18.979.895/0001-13",
      amountRendiment: 58
    },
    external: {
      PLD: {
        cambioMonth: {
          3: 4.9931
        },
        amountDividend: 10.44,
        document_number_admin: "",
        amountRendimentJCP: 0,
        amountRendiment: 0,
        amountJcp: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          10.44
        ],
        name: "Prologis Inc",
        rendimentJCP: [],
        document_number_principal: "",
        dividendPerMonth: {
          3: 14.929369
        },
        taxPerMonth: {
          3: 4.493790000000001
        },
        amountMonth: {
          3: 2.9899999999999998
        },
        amountTax: 4.493790000000001
      },
      JEPI: {
        cambioMonth: {
          0: 4.9391,
          1: 4.8759,
          2: 4.9704,
          3: 4.9931
        },
        amountDividend: 21.82,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 5.12,
        amountJcp: 0,
        rendiments: [
          5.12
        ],
        jcp: [],
        dividends: [
          7.41,
          6.67,
          7.74
        ],
        name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
        rendimentJCP: [],
        document_number_principal: "",
        dividendPerMonth: {
          0: 10.569674000000001,
          1: 7.3138499999999995,
          2: 9.543168,
          3: 11.034751
        },
        amountMonth: {
          0: 2.14,
          1: 1.5,
          2: 1.92,
          3: 2.21
        },
        taxPerMonth: {
          0: 3.161024,
          1: 2.194155,
          2: 2.8828319999999996,
          3: 3.295446
        },
        amountTax: 9.339302
      }
    },
    FGAA11: {
      amountJcp: 0,
      rendiments: [
        22.66,
        22.66,
        20.8,
        20.8
      ],
      amountDividend: 0,
      jcp: [],
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      rendimentJCP: [],
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 86.92
    },
    MXRF11: {
      amountJcp: 0,
      rendiments: [
        13.64,
        12.4,
        14.7,
        14.9
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "MAXI RENDA",
      rendimentJCP: [],
      document_number_principal: "97.521.225/0001-25",
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 55.63999999999999
    },
    SARE11: {
      amountJcp: 0,
      rendiments: [
        10.35,
        9.2,
        8.28,
        9
      ],
      jcp: [],
      amountDividend: 0,
      dividends: [],
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      amountRendimentJCP: 0,
      rendimentJCP: [],
      document_number_admin: "",
      amountRendiment: 36.83
    }
  },
  sells: {
    2022: {
      10: {
        operations: [
          {
            classe: "FII",
            ticker: "VINO11",
            name: "VINCI OFFICES",
            document_number_principal: "12.516.185/0001-70",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.05000000000002189,
            transaction: 339.5
          },
          {
            classe: "FII",
            ticker: "XPPR11",
            name: "XP PROPERTIES",
            document_number_admin: "",
            document_number_principal: "30.654.849/0001-40",
            type: "Renda Vari\xE1vel",
            value: -4.040000000000002,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 314.65000000000003
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "CPLE6",
            name: "CIA PARANAENSE DE EN",
            document_number_principal: "76.483.817/0001-20",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 49.44000000000001,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 311.61
          },
          {
            classe: "FII",
            ticker: "GARE12",
            name: "GUARDIAN LOGISTICA F",
            document_number_principal: "37.295.919/0001-60",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            value: 0.10000000000000009,
            transaction: 3.2
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "FUNDO DE INVESTIMENT",
            document_number_admin: "",
            document_number_principal: "36.501.128/0001-86",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE FII/FIAGRO",
            value: 0.559999999999942,
            transaction: 543.5999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            document_number_admin: "",
            document_number_principal: "",
            type: "Renda Vari\xE1vel",
            value: 3.1891343620000168,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 200.029052718
          }
        ]
      },
      8: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            value: 59.8,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 813.6
          },
          {
            ticker: "SANB4",
            classe: "A\xE7\xE3o",
            name: "BANCO SANTANDER BRAS",
            document_number_admin: "",
            document_number_principal: "90.400.888/0001-42",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 2.260000000000014,
            transaction: 264.78000000000003
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 2.9599999999999995,
            transaction: 40.71
          }
        ]
      },
      10: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 1.59391190825,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 618.15350685825
          },
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            document_number_admin: "",
            document_number_principal: "",
            type: "Renda Vari\xE1vel",
            value: -1.49351697989999,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 146.8625030235
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "RZTR12",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 0.36,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "ETH",
            name: "Ethereum",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 24.663266000000014,
            transaction: 179.41975699999998
          },
          {
            classe: "Criptomoeda",
            ticker: "BTC",
            name: "Bitcoin",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 45.28499041720001,
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            ticker: "PETR4",
            classe: "A\xE7\xE3o",
            name: "PETROLEO BRASILEIRO ",
            document_number_admin: "",
            document_number_principal: "33.000.167/0001-01",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 447.51999999999987,
            transaction: 1265.6999999999998
          },
          {
            ticker: "NVDA",
            classe: "STOCK",
            name: "NVIDIA CORPORATION",
            document_number_admin: "",
            document_number_principal: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            value: 3.858369881040009,
            transaction: 401.54350648104
          }
        ]
      }
    }
  }
};
var mockBonificationProvent2024 = {
  bonifications: {},
  itensWalletFiltered: [
    {
      unitBonificationToYear: 0,
      qtd: 38,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      this_year: "R$\xA0784,26",
      investiment: "R$\xA0784,26",
      averageCambio: "R$\xA00,00",
      description: "(BBAS3) - 38 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA020,64 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0784,26 ",
      document_number_admin: "",
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      pm: "R$\xA020,64",
      past_year: "R$\xA0555,39"
    },
    {
      qtd: 100,
      unitBonificationToYear: 0,
      ticker: "BEES3",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0770,23",
      investiment: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA07,70 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0770,23 ",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      pm: "R$\xA07,70",
      past_year: "R$\xA0770,23"
    },
    {
      qtd: 70,
      unitBonificationToYear: 0,
      ticker: "CMIG4",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0799,78",
      this_year: "R$\xA0799,78",
      averageCambio: "R$\xA00,00",
      description: "(CMIG4) - 70 A\xC7\xD5ES DE COMPANHIA ENERG\xC9TICA DE MINAS GERAIS S.A., CNPJ: 17.155.730/0001-64, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CMIG4. PRE\xC7O M\xC9DIO DE R$\xA011,43 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0799,78 ",
      document_number_admin: "17.155.730/0001-64",
      name: "Companhia Energ\xE9tica de Minas Gerais S.A.",
      document_number_principal: "17.155.730/0001-64",
      pm: "R$\xA011,43",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 16,
      unitBonificationToYear: 0,
      ticker: "CPTI11",
      classe: "FI-INFRA",
      this_year: "R$\xA01.599,31",
      investiment: "R$\xA01.599,31",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(CPTI11) - 16 COTAS DE CAPI\xC2NIA INFRA, CNPJ: 38.065.012/0001-77, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. PRE\xC7O M\xC9DIO DE R$\xA099,96 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.599,31 ",
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      pm: "R$\xA099,96",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 200,
      ticker: "CPTS11",
      classe: "FII",
      investiment: "R$\xA01.648,71",
      this_year: "R$\xA01.648,71",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(CPTS11) - 200 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,24 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.648,71 ",
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      pm: "R$\xA08,24",
      past_year: "R$\xA01.648,71"
    },
    {
      unitBonificationToYear: 0,
      qtd: 17,
      ticker: "CSMG3",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0313,42",
      this_year: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE CIA SANEAMENTO DE MINAS GERAIS-COPASA MG, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. PRE\xC7O M\xC9DIO DE R$\xA018,44 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0313,42 ",
      document_number_admin: "17.281.106/0001-03",
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      document_number_principal: "17.281.106/0001-03",
      pm: "R$\xA018,44",
      past_year: "R$\xA0313,42"
    },
    {
      qtd: 20,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "CXSE3",
      investiment: "R$\xA0223,46",
      this_year: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. PRE\xC7O M\xC9DIO DE R$\xA011,17 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0223,46 ",
      document_number_admin: "22.543.331/0001-00",
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      document_number_principal: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      past_year: "R$\xA0223,46"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.01450916,
      classe: "Criptomoeda",
      ticker: "ETH",
      investiment: "R$\xA0251,26",
      this_year: "R$\xA0251,26",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(ETH) - 0.01450916 UNIDADE DE ETHEREUM, C\xD3DIGO DE NEGOCIA\xC7\xC3O: ETH. PRE\xC7O M\xC9DIO DE R$\xA017.317,34 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0251,26 ",
      name: "Ethereum",
      document_number_principal: "",
      pm: "R$\xA017.317,34",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 208,
      ticker: "FGAA11",
      classe: "Fiagro",
      this_year: "R$\xA02.024,58",
      investiment: "R$\xA02.024,58",
      averageCambio: "R$\xA00,00",
      description: "(FGAA11) - 208 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,73 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.024,58 ",
      document_number_admin: "",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      pm: "R$\xA09,73",
      past_year: "R$\xA02.006,73"
    },
    {
      unitBonificationToYear: 0,
      qtd: 154,
      ticker: "GARE11",
      classe: "FII",
      this_year: "R$\xA01.374,26",
      investiment: "R$\xA01.374,26",
      averageCambio: "R$\xA00,00",
      description: "(GARE11) - 154 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA08,92 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.374,26 ",
      document_number_admin: "",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      pm: "R$\xA08,92",
      past_year: "R$\xA01.374,26"
    },
    {
      qtd: 61,
      unitBonificationToYear: 0,
      ticker: "GGBR4",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA01.365,36",
      this_year: "R$\xA01.365,36",
      averageCambio: "R$\xA00,00",
      description: "(GGBR4) - 61 A\xC7\xD5ES DE GERDAU SA PREFERENCE SHARES, CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. PRE\xC7O M\xC9DIO DE R$\xA022,38 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.365,36 ",
      document_number_admin: "",
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_principal: "33.611.500/0001-19",
      pm: "R$\xA022,38",
      past_year: "R$\xA0973,75"
    },
    {
      unitBonificationToYear: 0,
      qtd: 67,
      classe: "A\xE7\xE3o",
      ticker: "GRND3",
      investiment: "R$\xA0419,23",
      this_year: "R$\xA0419,23",
      averageCambio: "R$\xA00,00",
      description: "(GRND3) - 67 A\xC7\xD5ES DE GRENDENE SA, CNPJ: 89.850.341/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GRND3. PRE\xC7O M\xC9DIO DE R$\xA06,26 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0419,23 ",
      document_number_admin: "",
      name: "GRENDENE SA",
      document_number_principal: "89.850.341/0001-60",
      pm: "R$\xA06,26",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 6.39818,
      ticker: "JEPI",
      classe: "ETF-EXTERIOR",
      investiment: "R$\xA0357,14",
      this_year: "R$\xA01.750,97",
      averageCambio: "R$\xA04,90",
      description: "(JEPI) - 6.39818 A\xC7\xD5ES DE ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. PRE\xC7O M\xC9DIO DE $55.82 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $357.14 - (C\xC2MBIO DE R$ 4.9028) ",
      document_number_admin: "",
      name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
      document_number_principal: "",
      pm: "R$\xA055,82",
      past_year: "R$\xA01.345,83"
    },
    {
      unitBonificationToYear: 0,
      qtd: 175,
      classe: "FII",
      ticker: "KISU11",
      this_year: "R$\xA01.433,36",
      investiment: "R$\xA01.433,36",
      averageCambio: "R$\xA00,00",
      description: "(KISU11) - 175 COTAS DE KILIMA FIC FDO. IMOB. SUNO 30, CNPJ: 36.669.660/0001-07, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. PRE\xC7O M\xC9DIO DE R$\xA08,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,36 ",
      document_number_admin: "",
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      document_number_principal: "36.669.660/0001-07",
      pm: "R$\xA08,19",
      past_year: "R$\xA01.433,36"
    },
    {
      qtd: 145,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "KLBN4",
      this_year: "R$\xA0552,97",
      investiment: "R$\xA0552,97",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(KLBN4) - 145 A\xC7\xD5ES DE KLABIN SA PREFERENCE SHARES, CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. PRE\xC7O M\xC9DIO DE R$\xA03,81 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0552,97 ",
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      pm: "R$\xA03,81",
      past_year: "R$\xA0544,38"
    },
    {
      unitBonificationToYear: 0,
      qtd: 149,
      ticker: "MXRF11",
      classe: "FII",
      this_year: "R$\xA01.548,96",
      investiment: "R$\xA01.548,96",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(MXRF11) - 149 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,40 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.548,96 ",
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      pm: "R$\xA010,40",
      past_year: "R$\xA01.528,43"
    },
    {
      unitBonificationToYear: 0,
      qtd: 3.11541,
      classe: "REIT",
      ticker: "PLD",
      investiment: "R$\xA0361,67",
      this_year: "R$\xA01.794,67",
      averageCambio: "R$\xA04,96",
      description: "(PLD) - 3.11541 A\xC7\xD5ES DE PROLOGIS INC, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. PRE\xC7O M\xC9DIO DE $116.09 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $361.67 - (C\xC2MBIO DE R$ 4.9622) ",
      document_number_admin: "",
      name: "Prologis Inc",
      document_number_principal: "",
      pm: "R$\xA0116,09",
      past_year: "R$\xA01.794,67"
    },
    {
      qtd: 225,
      unitBonificationToYear: 0,
      ticker: "RANI3",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA02.280,54",
      this_year: "R$\xA02.280,54",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(RANI3) - 225 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM SA, CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA010,14 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.280,54 ",
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      pm: "R$\xA010,14",
      past_year: "R$\xA0619,15"
    },
    {
      unitBonificationToYear: 0,
      qtd: 188,
      ticker: "RZAG11",
      classe: "Fiagro",
      investiment: "R$\xA01.762,07",
      this_year: "R$\xA01.762,07",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(RZAG11) - 188 COTAS DE FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB, CNPJ: 40.413.979/0001-44, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,37 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.762,07 ",
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      pm: "R$\xA09,37",
      past_year: "R$\xA01.494,05"
    },
    {
      qtd: 14,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "RZTR11",
      this_year: "R$\xA01.266,81",
      investiment: "R$\xA01.266,81",
      averageCambio: "R$\xA00,00",
      description: "(RZTR11) - 14 COTAS DE FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX, CNPJ: 36.501.128/0001-86, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZTR11. PRE\xC7O M\xC9DIO DE R$\xA090,49 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.266,81 ",
      document_number_admin: "",
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_principal: "36.501.128/0001-86",
      pm: "R$\xA090,49",
      past_year: "R$\xA01.266,81"
    },
    {
      unitBonificationToYear: 0,
      qtd: 25,
      ticker: "SARE11",
      classe: "FII",
      this_year: "R$\xA01.454,78",
      investiment: "R$\xA01.454,78",
      averageCambio: "R$\xA00,00",
      description: "(SARE11) - 25 COTAS DE SANTANDER RENDA DE ALUGU\xC9IS, CNPJ: 32.903.702/0001-71, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. PRE\xC7O M\xC9DIO DE R$\xA058,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.454,78 ",
      document_number_admin: "",
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      pm: "R$\xA058,19",
      past_year: "R$\xA01.365,09"
    },
    {
      unitBonificationToYear: 0,
      qtd: 63,
      ticker: "TAEE11",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA02.186,59",
      investiment: "R$\xA02.186,59",
      averageCambio: "R$\xA00,00",
      description: "(TAEE11) - 63 A\xC7\xD5ES DE TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. PRE\xC7O M\xC9DIO DE R$\xA034,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.186,59 ",
      document_number_admin: "",
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      pm: "R$\xA034,71",
      past_year: "R$\xA02.186,59"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.91,
      ticker: "TESOURO PREFIXADO 2025",
      classe: "Renda Fixa",
      investiment: "R$\xA0709,94",
      this_year: "R$\xA0709,94",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.91 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0709,94 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO 2025",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0780,16",
      past_year: "R$\xA0709,94"
    },
    {
      unitBonificationToYear: 0,
      qtd: 2.01,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2026",
      investiment: "R$\xA01.541,72",
      this_year: "R$\xA01.541,72",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 2.01 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.541,72 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO 2026",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0767,02",
      past_year: "R$\xA01.433,62"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.11,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      investiment: "R$\xA0107,08",
      this_year: "R$\xA0107,08",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.11 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0107,08 ",
      name: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0973,43",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.86,
      classe: "Renda Fixa",
      ticker: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      this_year: "R$\xA0660,90",
      investiment: "R$\xA0660,90",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO RENDA+ APOSENTADORIA EXTRA 2045 NO CNPJ:  TOTALIZANDO 0.86 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0660,90 ",
      name: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      document_number_principal: "",
      pm: "R$\xA0768,48",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 10,
      ticker: "TVRI11",
      classe: "FII",
      investiment: "R$\xA0898,76",
      this_year: "R$\xA0898,76",
      averageCambio: "R$\xA00,00",
      description: "(TVRI11) - 10 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA089,88 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0898,76 ",
      document_number_admin: "",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA089,88",
      past_year: "R$\xA0898,76"
    },
    {
      unitBonificationToYear: 0,
      qtd: 157,
      ticker: "VGHF11",
      classe: "FII",
      this_year: "R$\xA01.452,26",
      investiment: "R$\xA01.452,26",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(VGHF11) - 157 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,25 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.452,26 ",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      document_number_principal: "36.771.692/0001-19",
      pm: "R$\xA09,25",
      past_year: "R$\xA01.214,41"
    },
    {
      unitBonificationToYear: 0,
      qtd: 15,
      ticker: "VILG11",
      classe: "FII",
      this_year: "R$\xA01.462,61",
      investiment: "R$\xA01.462,61",
      averageCambio: "R$\xA00,00",
      description: "(VILG11) - 15 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA097,51 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.462,61 ",
      document_number_admin: "",
      name: "VINCI LOG\xCDSTICA",
      document_number_principal: "24.853.044/0001-22",
      pm: "R$\xA097,51",
      past_year: "R$\xA01.082,02"
    },
    {
      unitBonificationToYear: 0,
      qtd: 7,
      classe: "FII",
      ticker: "VISC11",
      this_year: "R$\xA0761,54",
      investiment: "R$\xA0761,54",
      averageCambio: "R$\xA00,00",
      description: "(VISC11) - 7 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0108,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0761,54 ",
      document_number_admin: "",
      name: "VINCI SHOPPING CENTERS",
      document_number_principal: "17.554.274/0001-25",
      pm: "R$\xA0108,79",
      past_year: "R$\xA0761,54"
    }
  ],
  bonificationsWithFractions: {
    BBAS3: {
      name: "BANCO DO BRASIL SA",
      amount: 7.5,
      cnpj: "00.000.000/0001-91"
    }
  },
  provents: {
    BBAS3: {
      amountDividend: 3.31,
      amountRendimentJCP: 0.17,
      document_number_admin: "",
      amountRendiment: 0,
      bonification: [
        7.5
      ],
      amountJcp: 14.45,
      amountBonification: 7.5,
      rendiments: [],
      jcp: [
        7.82,
        6.63
      ],
      dividends: [
        3.31
      ],
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      rendimentJCP: [
        0.17
      ]
    },
    BEES3: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0,
      amountBonification: 0,
      bonification: [],
      amountJcp: 9.23,
      rendiments: [],
      jcp: [
        1.88,
        1.94,
        1.85,
        1.93,
        1.63
      ],
      dividends: [],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      rendimentJCP: []
    },
    TVRI11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 38.199999999999996,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [
        9.1,
        9.7,
        9.7,
        9.7
      ],
      jcp: [],
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      rendimentJCP: [],
      document_number_principal: "14.410.722/0001-29"
    },
    CPTI11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 44.4,
      bonification: [],
      amountBonification: 0,
      amountJcp: 0,
      rendiments: [
        6.9,
        16.5,
        21
      ],
      jcp: [],
      dividends: [],
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      rendimentJCP: []
    },
    MXRF12: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 2.66,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [
        0.82,
        1.84
      ],
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      rendimentJCP: []
    },
    KLBN4: {
      amountDividend: 5.05,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 0,
      amountJcp: 3.74,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [
        3.74
      ],
      dividends: [
        5.05
      ],
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      rendimentJCP: []
    },
    VGHF11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 50.06,
      bonification: [],
      amountBonification: 0,
      amountJcp: 0,
      rendiments: [
        13.1,
        13.2,
        13.2,
        10.56
      ],
      jcp: [],
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      rendimentJCP: [],
      document_number_principal: "36.771.692/0001-19"
    },
    TAEE11: {
      amountDividend: 41.69,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [],
      dividends: [
        41.69
      ],
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      rendimentJCP: []
    },
    PETR4: {
      amountDividend: 27.47,
      document_number_admin: "",
      amountRendimentJCP: 0.6,
      amountRendiment: 0,
      amountJcp: 10.95,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [
        10.95
      ],
      dividends: [
        7.29,
        20.18
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      document_number_principal: "33.000.167/0001-01",
      rendimentJCP: [
        0.23,
        0.37
      ]
    },
    KISU11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 53.35999999999999,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        14,
        13.12,
        13.12,
        13.12
      ],
      jcp: [],
      dividends: [],
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      rendimentJCP: [],
      document_number_principal: "36.669.660/0001-07"
    },
    VILG11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 33.14,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        7.04,
        9,
        8.4,
        8.7
      ],
      jcp: [],
      dividends: [],
      name: "VINCI LOG\xCDSTICA",
      document_number_principal: "24.853.044/0001-22",
      rendimentJCP: []
    },
    RANI3: {
      amountDividend: 2.04,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [],
      dividends: [
        2.04
      ],
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      rendimentJCP: []
    },
    GGBR4: {
      amountDividend: 6,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 0,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [],
      jcp: [],
      dividends: [
        6
      ],
      name: "GERDAU SA PREFERENCE SHARES",
      rendimentJCP: [],
      document_number_principal: "33.611.500/0001-19"
    },
    RZAG11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 69.88,
      amountJcp: 0,
      bonification: [],
      amountBonification: 0,
      rendiments: [
        17.71,
        17.16,
        17.16,
        17.85
      ],
      jcp: [],
      dividends: [],
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      rendimentJCP: []
    },
    VISC11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 28,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [
        7,
        7,
        7,
        7
      ],
      jcp: [],
      dividends: [],
      name: "VINCI SHOPPING CENTERS",
      rendimentJCP: [],
      document_number_principal: "17.554.274/0001-25"
    },
    RZTR11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 51.800000000000004,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        15.4,
        11.9,
        11.9,
        12.6
      ],
      jcp: [],
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      rendimentJCP: [],
      document_number_principal: "36.501.128/0001-86"
    },
    CPTS11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 58,
      amountJcp: 0,
      bonification: [],
      amountBonification: 0,
      rendiments: [
        13,
        14,
        15.2,
        15.8
      ],
      jcp: [],
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      rendimentJCP: []
    },
    GARE11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 52.49,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        12.93,
        12.93,
        13.24,
        13.39
      ],
      jcp: [],
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      rendimentJCP: [],
      document_number_principal: "37.295.919/0001-60"
    },
    external: {
      PLD: {
        cambioMonth: {
          3: 4.9931
        },
        amountDividend: 10.44,
        document_number_admin: "",
        amountRendimentJCP: 0,
        amountRendiment: 0,
        amountJcp: 0,
        bonification: [],
        amountBonification: 0,
        rendiments: [],
        jcp: [],
        dividends: [
          10.44
        ],
        name: "Prologis Inc",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          3: 14.929369
        },
        taxPerMonth: {
          3: 4.493790000000001
        },
        amountMonth: {
          3: 2.9899999999999998
        },
        amountTax: 4.493790000000001
      },
      JEPI: {
        cambioMonth: {
          0: 4.9391,
          1: 4.8759,
          2: 4.9704,
          3: 4.9931
        },
        amountDividend: 21.82,
        amountRendimentJCP: 0,
        document_number_admin: "",
        amountRendiment: 5.12,
        amountJcp: 0,
        bonification: [],
        amountBonification: 0,
        rendiments: [
          5.12
        ],
        jcp: [],
        dividends: [
          7.41,
          6.67,
          7.74
        ],
        name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          0: 10.569674000000001,
          1: 7.3138499999999995,
          2: 9.543168,
          3: 11.034751
        },
        taxPerMonth: {
          0: 3.161024,
          1: 2.194155,
          2: 2.8828319999999996,
          3: 3.295446
        },
        amountMonth: {
          0: 2.14,
          1: 1.5,
          2: 1.92,
          3: 2.21
        },
        amountTax: 9.339302
      }
    },
    FGAA11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 86.92,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        22.66,
        22.66,
        20.8,
        20.8
      ],
      jcp: [],
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      rendimentJCP: [],
      document_number_principal: "42.405.905/0001-91"
    },
    MXRF11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 55.63999999999999,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [
        13.64,
        12.4,
        14.7,
        14.9
      ],
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      rendimentJCP: []
    },
    SARE11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 36.83,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [
        10.35,
        9.2,
        8.28,
        9
      ],
      jcp: [],
      dividends: [],
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      rendimentJCP: []
    }
  },
  sells: {
    2022: {
      10: {
        operations: [
          {
            ticker: "VINO11",
            classe: "FII",
            name: "VINCI OFFICES",
            document_number_admin: "",
            document_number_principal: "12.516.185/0001-70",
            type: "Renda Vari\xE1vel",
            value: 0.05000000000002189,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 339.5
          },
          {
            ticker: "XPPR11",
            classe: "FII",
            name: "XP PROPERTIES",
            document_number_principal: "30.654.849/0001-40",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: -4.040000000000002,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 314.65000000000003
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "CPLE6",
            classe: "A\xE7\xE3o",
            name: "CIA PARANAENSE DE EN",
            document_number_principal: "76.483.817/0001-20",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 49.44000000000001,
            transaction: 311.61
          },
          {
            ticker: "GARE12",
            classe: "FII",
            name: "GUARDIAN LOGISTICA F",
            document_number_admin: "",
            document_number_principal: "37.295.919/0001-60",
            type: "Renda Vari\xE1vel",
            value: 0.10000000000000009,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 3.2
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "FUNDO DE INVESTIMENT",
            document_number_admin: "",
            document_number_principal: "36.501.128/0001-86",
            type: "Renda Vari\xE1vel",
            value: 0.559999999999942,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 543.5999999999999
          }
        ]
      },
      7: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 3.1891343620000168,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 200.029052718
          }
        ]
      },
      8: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            value: 59.8,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 813.6
          },
          {
            ticker: "SANB4",
            classe: "A\xE7\xE3o",
            name: "BANCO SANTANDER BRAS",
            document_number_admin: "",
            document_number_principal: "90.400.888/0001-42",
            type: "Renda Vari\xE1vel",
            value: 2.260000000000014,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 264.78000000000003
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "BANCO BRADESCO SA",
            document_number_principal: "60.746.948/0001-12",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 2.9599999999999995,
            transaction: 40.71
          }
        ]
      },
      10: {
        operations: [
          {
            ticker: "MATIC-POLYGON",
            classe: "Criptomoeda",
            name: "Polygon",
            document_number_admin: "",
            document_number_principal: "",
            type: "Renda Vari\xE1vel",
            operation: "VENDA DE CRIPTOMOEDA",
            value: 1.59391190825,
            transaction: 618.15350685825
          },
          {
            classe: "Criptomoeda",
            ticker: "MATIC-POLYGON",
            name: "Polygon",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: -1.49351697989999,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 146.8625030235
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR12",
            name: "FUNDO DE INVESTIMENT",
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 0.36,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "ETH",
            classe: "Criptomoeda",
            name: "Ethereum",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 24.663266000000014,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 179.41975699999998
          },
          {
            ticker: "BTC",
            classe: "Criptomoeda",
            name: "Bitcoin",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 45.28499041720001,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "PETROLEO BRASILEIRO ",
            document_number_admin: "",
            document_number_principal: "33.000.167/0001-01",
            type: "Renda Vari\xE1vel",
            operation: "SWING TRADE DE A\xC7\xC3O",
            value: 447.51999999999987,
            transaction: 1265.6999999999998
          },
          {
            ticker: "NVDA",
            classe: "STOCK",
            name: "NVIDIA CORPORATION",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 3.858369881040009,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 401.54350648104
          }
        ]
      }
    }
  }
};
var mockAluguel2024 = {
  bonifications: {
    GGBR4: {
      name: "GERDAU SA PREFERENCE SHARES",
      amount: 138.5677956,
      cnpj: "33.611.500/0001-19"
    }
  },
  itensWalletFiltered: [
    {
      unitBonificationToYear: 0,
      qtd: 38,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      this_year: "R$\xA0784,26",
      investiment: "R$\xA0784,26",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(BBAS3) - 38 A\xC7\xD5ES DE BANCO DO BRASIL SA, CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA020,64 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0784,26 ",
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      pm: "R$\xA020,64",
      past_year: "R$\xA0555,39"
    },
    {
      qtd: 100,
      unitBonificationToYear: 0,
      ticker: "BEES3",
      classe: "A\xE7\xE3o",
      investiment: "R$\xA0770,23",
      this_year: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANESTES SA BANCO DO ESTADO ESPRT SANTO, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. PRE\xC7O M\xC9DIO DE R$\xA07,70 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0770,23 ",
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      pm: "R$\xA07,70",
      past_year: "R$\xA0770,23"
    },
    {
      qtd: 70,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "CMIG4",
      this_year: "R$\xA0799,78",
      investiment: "R$\xA0799,78",
      averageCambio: "R$\xA00,00",
      description: "(CMIG4) - 70 A\xC7\xD5ES DE COMPANHIA ENERG\xC9TICA DE MINAS GERAIS S.A., CNPJ: 17.155.730/0001-64, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CMIG4. PRE\xC7O M\xC9DIO DE R$\xA011,43 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0799,78 ",
      document_number_admin: "17.155.730/0001-64",
      name: "Companhia Energ\xE9tica de Minas Gerais S.A.",
      document_number_principal: "17.155.730/0001-64",
      pm: "R$\xA011,43",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 16,
      ticker: "CPTI11",
      classe: "FI-INFRA",
      this_year: "R$\xA01.599,31",
      investiment: "R$\xA01.599,31",
      averageCambio: "R$\xA00,00",
      description: "(CPTI11) - 16 COTAS DE CAPI\xC2NIA INFRA, CNPJ: 38.065.012/0001-77, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. PRE\xC7O M\xC9DIO DE R$\xA099,96 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.599,31 ",
      document_number_admin: "",
      name: "CAPI\xC2NIA INFRA",
      document_number_principal: "38.065.012/0001-77",
      pm: "R$\xA099,96",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 200,
      unitBonificationToYear: 0,
      ticker: "CPTS11",
      classe: "FII",
      investiment: "R$\xA01.648,71",
      this_year: "R$\xA01.648,71",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(CPTS11) - 200 COTAS DE CAPIT\xC2NIA SECURITIES II, CNPJ: 18.979.895/0001-13, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. PRE\xC7O M\xC9DIO DE R$\xA08,24 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.648,71 ",
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      pm: "R$\xA08,24",
      past_year: "R$\xA01.648,71"
    },
    {
      qtd: 17,
      unitBonificationToYear: 0,
      classe: "A\xE7\xE3o",
      ticker: "CSMG3",
      investiment: "R$\xA0313,42",
      this_year: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE CIA SANEAMENTO DE MINAS GERAIS-COPASA MG, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. PRE\xC7O M\xC9DIO DE R$\xA018,44 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0313,42 ",
      document_number_admin: "17.281.106/0001-03",
      name: "CIA SANEAMENTO DE MINAS GERAIS-COPASA MG",
      document_number_principal: "17.281.106/0001-03",
      pm: "R$\xA018,44",
      past_year: "R$\xA0313,42"
    },
    {
      unitBonificationToYear: 0,
      qtd: 20,
      classe: "A\xE7\xE3o",
      ticker: "CXSE3",
      this_year: "R$\xA0223,46",
      investiment: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      document_number_admin: "22.543.331/0001-00",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. PRE\xC7O M\xC9DIO DE R$\xA011,17 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0223,46 ",
      name: "CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A.",
      document_number_principal: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      past_year: "R$\xA0223,46"
    },
    {
      qtd: 0.01766016,
      unitBonificationToYear: 0,
      classe: "Criptomoeda",
      ticker: "ETH",
      this_year: "R$\xA0301,78",
      investiment: "R$\xA0301,78",
      averageCambio: "R$\xA00,00",
      description: "(ETH) - 0.01766016 UNIDADE DE ETHEREUM, C\xD3DIGO DE NEGOCIA\xC7\xC3O: ETH. PRE\xC7O M\xC9DIO DE R$\xA017.088,30 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0301,78 ",
      document_number_admin: "",
      name: "Ethereum",
      document_number_principal: "",
      pm: "R$\xA017.088,30",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 208,
      unitBonificationToYear: 0,
      ticker: "FGAA11",
      classe: "Fiagro",
      investiment: "R$\xA02.024,58",
      this_year: "R$\xA02.024,58",
      averageCambio: "R$\xA00,00",
      description: "(FGAA11) - 208 COTAS DE FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO, CNPJ: 42.405.905/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. PRE\xC7O M\xC9DIO DE R$\xA09,73 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.024,58 ",
      document_number_admin: "",
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      document_number_principal: "42.405.905/0001-91",
      pm: "R$\xA09,73",
      past_year: "R$\xA02.006,73"
    },
    {
      qtd: 154,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "GARE11",
      investiment: "R$\xA01.374,26",
      this_year: "R$\xA01.374,26",
      averageCambio: "R$\xA00,00",
      description: "(GARE11) - 154 COTAS DE GUARDIAN LOGISTICA FDO. INVEST. IMOB., CNPJ: 37.295.919/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. PRE\xC7O M\xC9DIO DE R$\xA08,92 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.374,26 ",
      document_number_admin: "",
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      pm: "R$\xA08,92",
      past_year: "R$\xA01.374,26"
    },
    {
      unitBonificationToYear: 12,
      qtd: 73,
      classe: "A\xE7\xE3o",
      ticker: "GGBR4",
      investiment: "R$\xA01.503,93",
      this_year: "R$\xA01.503,93",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(GGBR4) - 73 A\xC7\xD5ES DE GERDAU SA PREFERENCE SHARES, CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. PRE\xC7O M\xC9DIO DE R$\xA020,60 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.503,93 (SENDO QUE 12 VIERAM DE BONIFICA\xC7\xD5ES)",
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_principal: "33.611.500/0001-19",
      pm: "R$\xA020,60",
      past_year: "R$\xA0973,75"
    },
    {
      unitBonificationToYear: 0,
      qtd: 67,
      classe: "A\xE7\xE3o",
      ticker: "GRND3",
      investiment: "R$\xA0419,23",
      this_year: "R$\xA0419,23",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(GRND3) - 67 A\xC7\xD5ES DE GRENDENE SA, CNPJ: 89.850.341/0001-60, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GRND3. PRE\xC7O M\xC9DIO DE R$\xA06,26 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0419,23 ",
      name: "GRENDENE SA",
      document_number_principal: "89.850.341/0001-60",
      pm: "R$\xA06,26",
      past_year: "R$\xA00,00"
    },
    {
      qtd: 6.39818,
      unitBonificationToYear: 0,
      ticker: "JEPI",
      classe: "ETF-EXTERIOR",
      this_year: "R$\xA01.750,97",
      investiment: "R$\xA0357,14",
      averageCambio: "R$\xA04,90",
      description: "(JEPI) - 6.39818 A\xC7\xD5ES DE ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. PRE\xC7O M\xC9DIO DE $55.82 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $357.14 - (C\xC2MBIO DE R$ 4.9028) ",
      document_number_admin: "",
      name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
      document_number_principal: "",
      pm: "R$\xA055,82",
      past_year: "R$\xA01.345,83"
    },
    {
      unitBonificationToYear: 0,
      qtd: 175,
      classe: "FII",
      ticker: "KISU11",
      investiment: "R$\xA01.433,36",
      this_year: "R$\xA01.433,36",
      averageCambio: "R$\xA00,00",
      description: "(KISU11) - 175 COTAS DE KILIMA FIC FDO. IMOB. SUNO 30, CNPJ: 36.669.660/0001-07, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. PRE\xC7O M\xC9DIO DE R$\xA08,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.433,36 ",
      document_number_admin: "",
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      document_number_principal: "36.669.660/0001-07",
      pm: "R$\xA08,19",
      past_year: "R$\xA01.433,36"
    },
    {
      unitBonificationToYear: 0,
      qtd: 145,
      ticker: "KLBN4",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA0552,97",
      investiment: "R$\xA0552,97",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(KLBN4) - 145 A\xC7\xD5ES DE KLABIN SA PREFERENCE SHARES, CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. PRE\xC7O M\xC9DIO DE R$\xA03,81 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0552,97 ",
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      pm: "R$\xA03,81",
      past_year: "R$\xA0544,38"
    },
    {
      qtd: 149,
      unitBonificationToYear: 0,
      ticker: "MXRF11",
      classe: "FII",
      this_year: "R$\xA01.548,96",
      investiment: "R$\xA01.548,96",
      averageCambio: "R$\xA00,00",
      description: "(MXRF11) - 149 COTAS DE MAXI RENDA, CNPJ: 97.521.225/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA010,40 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.548,96 ",
      document_number_admin: "",
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      pm: "R$\xA010,40",
      past_year: "R$\xA01.528,43"
    },
    {
      unitBonificationToYear: 0,
      qtd: 3.11541,
      classe: "REIT",
      ticker: "PLD",
      this_year: "R$\xA01.794,67",
      investiment: "R$\xA0361,67",
      averageCambio: "R$\xA04,96",
      document_number_admin: "",
      description: "(PLD) - 3.11541 A\xC7\xD5ES DE PROLOGIS INC, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. PRE\xC7O M\xC9DIO DE $116.09 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $361.67 - (C\xC2MBIO DE R$ 4.9622) ",
      name: "Prologis Inc",
      document_number_principal: "",
      pm: "R$\xA0116,09",
      past_year: "R$\xA01.794,67"
    },
    {
      unitBonificationToYear: 0,
      qtd: 225,
      classe: "A\xE7\xE3o",
      ticker: "RANI3",
      this_year: "R$\xA02.280,54",
      investiment: "R$\xA02.280,54",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(RANI3) - 225 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM SA, CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA010,14 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.280,54 ",
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      pm: "R$\xA010,14",
      past_year: "R$\xA0619,15"
    },
    {
      unitBonificationToYear: 0,
      qtd: 188,
      ticker: "RZAG11",
      classe: "Fiagro",
      this_year: "R$\xA01.762,07",
      investiment: "R$\xA01.762,07",
      averageCambio: "R$\xA00,00",
      description: "(RZAG11) - 188 COTAS DE FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB, CNPJ: 40.413.979/0001-44, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,37 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.762,07 ",
      document_number_admin: "",
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      pm: "R$\xA09,37",
      past_year: "R$\xA01.494,05"
    },
    {
      qtd: 14,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "RZTR11",
      investiment: "R$\xA01.266,81",
      this_year: "R$\xA01.266,81",
      averageCambio: "R$\xA00,00",
      description: "(RZTR11) - 14 COTAS DE FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX, CNPJ: 36.501.128/0001-86, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZTR11. PRE\xC7O M\xC9DIO DE R$\xA090,49 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.266,81 ",
      document_number_admin: "",
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_principal: "36.501.128/0001-86",
      pm: "R$\xA090,49",
      past_year: "R$\xA01.266,81"
    },
    {
      unitBonificationToYear: 0,
      qtd: 25,
      ticker: "SARE11",
      classe: "FII",
      investiment: "R$\xA01.454,78",
      this_year: "R$\xA01.454,78",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(SARE11) - 25 COTAS DE SANTANDER RENDA DE ALUGU\xC9IS, CNPJ: 32.903.702/0001-71, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. PRE\xC7O M\xC9DIO DE R$\xA058,19 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.454,78 ",
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      document_number_principal: "32.903.702/0001-71",
      pm: "R$\xA058,19",
      past_year: "R$\xA01.365,09"
    },
    {
      unitBonificationToYear: 0,
      qtd: 63,
      ticker: "TAEE11",
      classe: "A\xE7\xE3o",
      this_year: "R$\xA02.186,59",
      investiment: "R$\xA02.186,59",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(TAEE11) - 63 A\xC7\xD5ES DE TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. PRE\xC7O M\xC9DIO DE R$\xA034,71 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA02.186,59 ",
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      pm: "R$\xA034,71",
      past_year: "R$\xA02.186,59"
    },
    {
      qtd: 0.91,
      unitBonificationToYear: 0,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2025",
      investiment: "R$\xA0709,94",
      this_year: "R$\xA0709,94",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.91 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0709,94 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO 2025",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0780,16",
      past_year: "R$\xA0709,94"
    },
    {
      qtd: 2.01,
      unitBonificationToYear: 0,
      ticker: "TESOURO PREFIXADO 2026",
      classe: "Renda Fixa",
      this_year: "R$\xA01.541,72",
      investiment: "R$\xA01.541,72",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 2.01 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.541,72 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO 2026",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0767,02",
      past_year: "R$\xA01.433,62"
    },
    {
      qtd: 0.11,
      unitBonificationToYear: 0,
      ticker: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      classe: "Renda Fixa",
      this_year: "R$\xA0107,08",
      investiment: "R$\xA0107,08",
      averageCambio: "R$\xA00,00",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035 NO CNPJ: 62.169.875/0001-79 TOTALIZANDO 0.11 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0107,08 ",
      document_number_admin: "",
      name: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
      document_number_principal: "62.169.875/0001-79",
      pm: "R$\xA0973,43",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 0.86,
      classe: "Renda Fixa",
      ticker: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      investiment: "R$\xA0660,90",
      this_year: "R$\xA0660,90",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "APLICA\xC7\xC3O EM TESOURO RENDA+ APOSENTADORIA EXTRA 2045 NO CNPJ:  TOTALIZANDO 0.86 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0660,90 ",
      name: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
      document_number_principal: "",
      pm: "R$\xA0768,48",
      past_year: "R$\xA00,00"
    },
    {
      unitBonificationToYear: 0,
      qtd: 10,
      classe: "FII",
      ticker: "TVRI11",
      this_year: "R$\xA0898,76",
      investiment: "R$\xA0898,76",
      averageCambio: "R$\xA00,00",
      document_number_admin: "",
      description: "(TVRI11) - 10 COTAS DE TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D, CNPJ: 14.410.722/0001-29, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TVRI11. PRE\xC7O M\xC9DIO DE R$\xA089,88 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0898,76 ",
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_principal: "14.410.722/0001-29",
      pm: "R$\xA089,88",
      past_year: "R$\xA0898,76"
    },
    {
      unitBonificationToYear: 0,
      qtd: 159,
      classe: "FII",
      ticker: "VGHF11",
      this_year: "R$\xA01.470,33",
      investiment: "R$\xA01.470,33",
      averageCambio: "R$\xA00,00",
      description: "(VGHF11) - 159 COTAS DE VALORA HEDGE FUND FDO. INV. IMOB., CNPJ: 36.771.692/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. PRE\xC7O M\xC9DIO DE R$\xA09,25 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.470,33 ",
      document_number_admin: "",
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      document_number_principal: "36.771.692/0001-19",
      pm: "R$\xA09,25",
      past_year: "R$\xA01.214,41"
    },
    {
      qtd: 15,
      unitBonificationToYear: 0,
      ticker: "VILG11",
      classe: "FII",
      this_year: "R$\xA01.462,61",
      investiment: "R$\xA01.462,61",
      averageCambio: "R$\xA00,00",
      description: "(VILG11) - 15 COTAS DE VINCI LOG\xCDSTICA, CNPJ: 24.853.044/0001-22, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VILG11. PRE\xC7O M\xC9DIO DE R$\xA097,51 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.462,61 ",
      document_number_admin: "",
      name: "VINCI LOG\xCDSTICA",
      document_number_principal: "24.853.044/0001-22",
      pm: "R$\xA097,51",
      past_year: "R$\xA01.082,02"
    },
    {
      qtd: 7,
      unitBonificationToYear: 0,
      classe: "FII",
      ticker: "VISC11",
      investiment: "R$\xA0761,54",
      this_year: "R$\xA0761,54",
      averageCambio: "R$\xA00,00",
      description: "(VISC11) - 7 COTAS DE VINCI SHOPPING CENTERS, CNPJ: 17.554.274/0001-25, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VISC11. PRE\xC7O M\xC9DIO DE R$\xA0108,79 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0761,54 ",
      document_number_admin: "",
      name: "VINCI SHOPPING CENTERS",
      document_number_principal: "17.554.274/0001-25",
      pm: "R$\xA0108,79",
      past_year: "R$\xA0761,54"
    }
  ],
  bonificationsWithFractions: {},
  provents: {
    BEES3: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 0,
      amountRental: 0,
      amountJcp: 9.23,
      bonification: [],
      amountBonification: 0,
      rendiments: [],
      jcp: [
        1.88,
        1.94,
        1.85,
        1.93,
        1.63
      ],
      dividends: [],
      name: "BANESTES SA BANCO DO ESTADO ESPRT SANTO",
      document_number_principal: "28.127.603/0001-78",
      rendimentJCP: []
    },
    BBAS3: {
      amountDividend: 3.31,
      amountRendimentJCP: 0.17,
      document_number_admin: "",
      rentals: [
        0.44,
        1
      ],
      amountRendiment: 0,
      amountRental: 1.44,
      amountJcp: 14.45,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [
        7.82,
        6.63
      ],
      dividends: [
        3.31
      ],
      name: "BANCO DO BRASIL SA",
      document_number_principal: "00.000.000/0001-91",
      rendimentJCP: [
        0.17
      ]
    },
    TVRI11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      rentals: [],
      amountRendiment: 38.199999999999996,
      amountRental: 0,
      bonification: [],
      amountBonification: 0,
      amountJcp: 0,
      rendiments: [
        9.1,
        9.7,
        9.7,
        9.7
      ],
      jcp: [],
      dividends: [],
      name: "TIVIO RENDA IMOBILI\xC1RIA FUNDO DE INVESTIMENTO IMOBILI\xC1RIO\u201D",
      document_number_principal: "14.410.722/0001-29",
      rendimentJCP: []
    },
    CPTI11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 44.4,
      rentals: [],
      amountRental: 0,
      bonification: [],
      amountBonification: 0,
      amountJcp: 0,
      rendiments: [
        6.9,
        16.5,
        21
      ],
      jcp: [],
      dividends: [],
      name: "CAPI\xC2NIA INFRA",
      rendimentJCP: [],
      document_number_principal: "38.065.012/0001-77"
    },
    MXRF12: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      rentals: [],
      amountRendiment: 2.66,
      amountRental: 0,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        0.82,
        1.84
      ],
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      document_number_principal: "97.521.225/0001-25",
      rendimentJCP: []
    },
    KLBN4: {
      amountDividend: 5.05,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 0,
      rentals: [],
      amountRental: 0,
      amountBonification: 0,
      bonification: [],
      amountJcp: 3.74,
      rendiments: [],
      jcp: [
        3.74
      ],
      dividends: [
        5.05
      ],
      name: "KLABIN SA PREFERENCE SHARES",
      document_number_principal: "89.637.490/0001-45",
      rendimentJCP: []
    },
    VGHF11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 50.06,
      rentals: [],
      amountRental: 0,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        13.1,
        13.2,
        13.2,
        10.56
      ],
      jcp: [],
      dividends: [],
      name: "VALORA HEDGE FUND FDO. INV. IMOB.",
      rendimentJCP: [],
      document_number_principal: "36.771.692/0001-19"
    },
    TAEE11: {
      amountDividend: 41.69,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 0,
      rentals: [],
      amountRental: 0,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [],
      dividends: [
        41.69
      ],
      name: "TRANSMISSORA ALIANCA ENERGIA ELETRICA SA BRAZILIAN UNITS",
      document_number_principal: "07.859.971/0001-30",
      rendimentJCP: []
    },
    PETR4: {
      amountDividend: 27.47,
      amountRendimentJCP: 0.6,
      document_number_admin: "",
      amountRendiment: 0,
      rentals: [],
      amountRental: 0,
      bonification: [],
      amountBonification: 0,
      amountJcp: 10.95,
      rendiments: [],
      jcp: [
        10.95
      ],
      dividends: [
        7.29,
        20.18
      ],
      name: "PETROLEO BRASILEIRO SA PETROBRAS PREFERENCE SHARES",
      rendimentJCP: [
        0.23,
        0.37
      ],
      document_number_principal: "33.000.167/0001-01"
    },
    KISU11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 53.35999999999999,
      amountRental: 0,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        14,
        13.12,
        13.12,
        13.12
      ],
      jcp: [],
      dividends: [],
      name: "KILIMA FIC FDO. IMOB. SUNO 30",
      rendimentJCP: [],
      document_number_principal: "36.669.660/0001-07"
    },
    VILG11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 33.14,
      amountRental: 0,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [
        7.04,
        9,
        8.4,
        8.7
      ],
      jcp: [],
      dividends: [],
      name: "VINCI LOG\xCDSTICA",
      document_number_principal: "24.853.044/0001-22",
      rendimentJCP: []
    },
    RANI3: {
      amountDividend: 2.04,
      amountRendimentJCP: 0,
      document_number_admin: "",
      rentals: [],
      amountRendiment: 0,
      amountRental: 0,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [],
      jcp: [],
      dividends: [
        2.04
      ],
      name: "IRANI PAPEL E EMBALAGEM SA",
      document_number_principal: "92.791.243/0001-03",
      rendimentJCP: []
    },
    GGBR4: {
      amountDividend: 6,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 0,
      amountRental: 0,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [],
      jcp: [],
      dividends: [
        6
      ],
      name: "GERDAU SA PREFERENCE SHARES",
      document_number_principal: "33.611.500/0001-19",
      rendimentJCP: []
    },
    RZAG11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      rentals: [],
      amountRendiment: 69.88,
      amountRental: 0,
      amountJcp: 0,
      amountBonification: 0,
      bonification: [],
      rendiments: [
        17.71,
        17.16,
        17.16,
        17.85
      ],
      jcp: [],
      dividends: [],
      name: "FDO INV CADEIAS PROD AGRO RIZA AGRO FIAGRO IMOB",
      document_number_principal: "40.413.979/0001-44",
      rendimentJCP: []
    },
    GARE11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      amountRendiment: 52.49,
      rentals: [],
      amountRental: 0,
      amountBonification: 0,
      bonification: [],
      amountJcp: 0,
      rendiments: [
        12.93,
        12.93,
        13.24,
        13.39
      ],
      jcp: [],
      dividends: [],
      name: "GUARDIAN LOGISTICA FDO. INVEST. IMOB.",
      document_number_principal: "37.295.919/0001-60",
      rendimentJCP: []
    },
    VISC11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 28,
      amountRental: 0,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        7,
        7,
        7,
        7
      ],
      jcp: [],
      dividends: [],
      name: "VINCI SHOPPING CENTERS",
      document_number_principal: "17.554.274/0001-25",
      rendimentJCP: []
    },
    RZTR11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 51.800000000000004,
      rentals: [],
      amountRental: 0,
      amountJcp: 0,
      bonification: [],
      amountBonification: 0,
      rendiments: [
        15.4,
        11.9,
        11.9,
        12.6
      ],
      jcp: [],
      dividends: [],
      name: "FUNDO DE INVESTIMENTO IMOBILI\xC1RIO RIZA TERRAX",
      document_number_principal: "36.501.128/0001-86",
      rendimentJCP: []
    },
    CPTS11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      amountRendiment: 58,
      rentals: [],
      amountRental: 0,
      bonification: [],
      amountJcp: 0,
      amountBonification: 0,
      rendiments: [
        13,
        14,
        15.2,
        15.8
      ],
      jcp: [],
      dividends: [],
      name: "CAPIT\xC2NIA SECURITIES II",
      document_number_principal: "18.979.895/0001-13",
      rendimentJCP: []
    },
    external: {
      PLD: {
        cambioMonth: {
          3: 4.9931
        },
        amountDividend: 10.44,
        document_number_admin: "",
        amountRendimentJCP: 0,
        amountRendiment: 0,
        rentals: [],
        amountRental: 0,
        amountJcp: 0,
        amountBonification: 0,
        bonification: [],
        rendiments: [],
        jcp: [],
        dividends: [
          10.44
        ],
        name: "Prologis Inc",
        document_number_principal: "",
        rendimentJCP: [],
        dividendPerMonth: {
          3: 14.929369
        },
        amountMonth: {
          3: 2.9899999999999998
        },
        taxPerMonth: {
          3: 4.493790000000001
        },
        amountTax: 4.493790000000001
      },
      JEPI: {
        cambioMonth: {
          0: 4.9391,
          1: 4.8759,
          2: 4.9704,
          3: 4.9931
        },
        amountDividend: 21.82,
        document_number_admin: "",
        amountRendimentJCP: 0,
        rentals: [],
        amountRendiment: 5.12,
        amountRental: 0,
        bonification: [],
        amountJcp: 0,
        amountBonification: 0,
        rendiments: [
          5.12
        ],
        jcp: [],
        dividends: [
          7.41,
          6.67,
          7.74
        ],
        name: "ETF J P MORGAN EXCHANGE TRADED FUND TRUST JPMORGAN EQUITY PREMIUM INCOME ETF",
        rendimentJCP: [],
        document_number_principal: "",
        dividendPerMonth: {
          0: 10.569674000000001,
          1: 7.3138499999999995,
          2: 9.543168,
          3: 11.034751
        },
        taxPerMonth: {
          0: 3.161024,
          1: 2.194155,
          2: 2.8828319999999996,
          3: 3.295446
        },
        amountMonth: {
          0: 2.14,
          1: 1.5,
          2: 1.92,
          3: 2.21
        },
        amountTax: 9.339302
      }
    },
    FGAA11: {
      amountDividend: 0,
      amountRendimentJCP: 0,
      document_number_admin: "",
      rentals: [],
      amountRendiment: 86.92,
      amountRental: 0,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        22.66,
        22.66,
        20.8,
        20.8
      ],
      jcp: [],
      dividends: [],
      name: "FG/AGRO FDO DE INVEST - FIAGRO - IMOBILI\xC1RIO",
      rendimentJCP: [],
      document_number_principal: "42.405.905/0001-91"
    },
    MXRF11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 55.63999999999999,
      amountRental: 0,
      amountJcp: 0,
      bonification: [],
      amountBonification: 0,
      rendiments: [
        13.64,
        12.4,
        14.7,
        14.9
      ],
      jcp: [],
      dividends: [],
      name: "MAXI RENDA",
      rendimentJCP: [],
      document_number_principal: "97.521.225/0001-25"
    },
    SARE11: {
      amountDividend: 0,
      document_number_admin: "",
      amountRendimentJCP: 0,
      rentals: [],
      amountRendiment: 36.83,
      amountRental: 0,
      amountBonification: 0,
      amountJcp: 0,
      bonification: [],
      rendiments: [
        10.35,
        9.2,
        8.28,
        9
      ],
      jcp: [],
      dividends: [],
      name: "SANTANDER RENDA DE ALUGU\xC9IS",
      rendimentJCP: [],
      document_number_principal: "32.903.702/0001-71"
    }
  },
  rentals: {
    BBAS3: {
      name: "BANCO DO BRASIL SA",
      amount: 1.44,
      cnpj: "00.000.000/0001-91"
    }
  },
  sells: {
    2023: {
      5: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            value: -4.5,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 813.6
          }
        ]
      },
      6: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            value: -176.2,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 813.6
          }
        ]
      },
      11: {
        operations: [
          {
            ticker: "RZTR12",
            classe: "FII",
            name: "FUNDO DE INVESTIMENT",
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 0.36,
            operation: "DIREITOS DE SUBSCRI\xC7\xC3O",
            transaction: 0.36
          }
        ]
      },
      12: {
        operations: [
          {
            ticker: "BBDC3",
            classe: "A\xE7\xE3o",
            name: "BANCO BRADESCO SA",
            document_number_admin: "",
            document_number_principal: "60.746.948/0001-12",
            type: "Renda Vari\xE1vel",
            value: 250,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 21e3
          },
          {
            classe: "Criptomoeda",
            ticker: "ETH",
            name: "Ethereum",
            document_number_admin: "",
            document_number_principal: "",
            type: "Renda Vari\xE1vel",
            value: 24.663266000000014,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 179.41975699999998
          },
          {
            classe: "Criptomoeda",
            ticker: "BTC",
            name: "Bitcoin",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 45.28499041720001,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 152.2149887118
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "PETROLEO BRASILEIRO ",
            document_number_principal: "33.000.167/0001-01",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 447.51999999999987,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 21e3
          },
          {
            ticker: "NVDA",
            classe: "STOCK",
            name: "NVIDIA CORPORATION",
            document_number_principal: "",
            document_number_admin: "",
            type: "Renda Vari\xE1vel",
            value: 3.858369881040009,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 401.54350648104
          }
        ]
      }
    }
  }
};
var mockRicardo2025 = {
  sells: {
    2022: {
      10: {
        operations: [
          {
            classe: "FII",
            ticker: "XPPR11",
            name: "Xp Properties Fundo De Investimento Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -3.8901999999999997,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 314.6,
            document_number_principal: "30.654.849/0001-40",
            document_number_admin: "22.610.500/0001-88"
          },
          {
            classe: "FII",
            ticker: "VINO11",
            name: "Vinci Corporate Fundo De Investimento Imobiliario",
            type: "Renda Vari\xE1vel",
            value: 0.1298,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 339.41,
            document_number_principal: "12.516.185/0001-70",
            document_number_admin: "13.486.793/0001-42"
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "CPLE6",
            name: "Companhia Paranaense de Energia - COPEL",
            type: "Renda Vari\xE1vel",
            value: 49.58819999999999,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 311.52000000000004,
            document_number_principal: "76.483.817/0001-20",
            document_number_admin: null
          }
        ]
      }
    },
    2023: {
      5: {
        operations: [
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "Fundo De Investimento Imobiliario Riza Terrax",
            type: "Renda Vari\xE1vel",
            value: 0.521,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 543.4399999999999,
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "45.246.410/0001-55"
          }
        ]
      },
      7: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.MATIC",
            name: "MATIC",
            type: "Renda Vari\xE1vel",
            value: 2.9924999999999997,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 196.829052718,
            document_number_principal: null,
            document_number_admin: null
          }
        ]
      },
      8: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "BBDC3",
            name: "Banco Bradesco S.A.",
            type: "Renda Vari\xE1vel",
            value: 63.0188,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 854.4499999999999,
            document_number_principal: "60.746.948/0001-12",
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "SANB4",
            name: "Banco Santander (Brasil) S.A.",
            type: "Renda Vari\xE1vel",
            value: 2.1601999999999997,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 264.62000000000006,
            document_number_principal: "90.400.888/0001-42",
            document_number_admin: null
          }
        ]
      },
      10: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.MATIC",
            name: "MATIC",
            type: "Renda Vari\xE1vel",
            value: 0.8156999999999996,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 611.90350685825,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.MATIC",
            name: "MATIC",
            type: "Renda Vari\xE1vel",
            value: -1.6827,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 146.8625030235,
            document_number_principal: null,
            document_number_admin: null
          }
        ]
      },
      11: {
        operations: []
      },
      12: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.BTC",
            name: "Bitcoin",
            type: "Renda Vari\xE1vel",
            value: 45.285,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 147.2149887118,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.ETH",
            name: "Ethereum",
            type: "Renda Vari\xE1vel",
            value: 24.6598,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 174.41975699999998,
            document_number_principal: null,
            document_number_admin: null
          }
        ]
      }
    },
    2024: {
      2: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "Petr\xF3leo Brasileiro S.A. - Petrobras",
            type: "Renda Vari\xE1vel",
            value: 447.029,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1264.9399999999996,
            document_number_principal: "33.000.167/0001-01",
            document_number_admin: null
          },
          {
            classe: "STOCK",
            ticker: "NVDA",
            name: "NVIDIA Corporation",
            type: "Renda Vari\xE1vel",
            value: 0.797,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 80.79,
            document_number_principal: void 0,
            document_number_admin: void 0
          }
        ]
      },
      7: {
        operations: [
          {
            classe: "Renda Fixa",
            ticker: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
            name: "TESOURO PREFIXADO COM JUROS SEMESTRAIS 2035",
            type: "Renda Fixa",
            value: -11.0423,
            operation: "RENDA FIXA",
            transaction: 96.04,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: "62.169.875/0001-79"
          }
        ]
      },
      8: {
        operations: [
          {
            classe: "Renda Fixa",
            ticker: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
            name: "TESOURO RENDA+ APOSENTADORIA EXTRA 2045",
            type: "Renda Fixa",
            value: 26.767,
            operation: "RENDA FIXA",
            transaction: 1000.977,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: "62.169.875/0001-79"
          }
        ]
      },
      9: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "GRND3",
            name: "Grendene S.A.",
            type: "Renda Vari\xE1vel",
            value: 30.2438,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1741.73,
            document_number_principal: "89.850.341/0001-60",
            document_number_admin: null
          }
        ]
      },
      10: {
        operations: [
          {
            classe: "FII",
            ticker: "TVRI11",
            name: "BB Progressivo II Fundo de Investimento Imobili\xE1rio - FII",
            type: "Renda Vari\xE1vel",
            value: 68.75,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 967.51,
            document_number_principal: "14.410.722/0001-29",
            document_number_admin: "00.066.670/0001-00"
          },
          {
            classe: "FII",
            ticker: "VISC11",
            name: "Vinci Shopping Centers Fundo Investimento Imobiliario - Fii",
            type: "Renda Vari\xE1vel",
            value: -45.3698,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 716.17,
            document_number_principal: "17.554.274/0001-25",
            document_number_admin: "13.486.793/0001-42"
          },
          {
            classe: "FII",
            ticker: "VILG11",
            name: "Vinci Logistica Fundo Investimento Imobiliario FII",
            type: "Renda Vari\xE1vel",
            value: -245.4804,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1813.79,
            document_number_principal: "24.853.044/0001-22",
            document_number_admin: "13.486.793/0001-42"
          }
        ]
      }
    },
    2025: {
      1: {
        operations: [
          {
            classe: "Renda Fixa",
            ticker: "TESOURO PREFIXADO 2025",
            name: "TESOURO PREFIXADO 2025",
            type: "Renda Fixa",
            value: 169.1937,
            operation: "RENDA FIXA",
            transaction: 879.1437000000001,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: "62.169.875/0001-79"
          }
        ]
      },
      3: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.BTC",
            name: "Bitcoin",
            type: "Renda Vari\xE1vel",
            value: 4.8616,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 302.70869999999996,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "REIT",
            ticker: "PLD",
            name: "PROLOGIS INC.",
            type: "Renda Vari\xE1vel",
            value: 32.9466,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 564.932005,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "ETF-EXTERIOR",
            ticker: "JEPI",
            name: "JPMORGAN EQUITY PREMIUM INCOME ETF - JEPI",
            type: "Renda Vari\xE1vel",
            value: 11.6249,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 414.2648841,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "CXSE3",
            name: "Caixa Seguridade Participa\xE7\xF5es S.A.",
            type: "Renda Vari\xE1vel",
            value: 77.94,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 301.3246,
            document_number_principal: "22.543.331/0001-00",
            document_number_admin: null
          }
        ]
      },
      4: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "KLBN4",
            name: "Klabin S.A.",
            type: "Renda Vari\xE1vel",
            value: -11.7183,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 741.6714699999999,
            document_number_principal: "89.637.490/0001-45",
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "BEES3",
            name: "BANCO BANESTES",
            type: "Renda Vari\xE1vel",
            value: 70.77,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 840.7897,
            document_number_principal: "28.127.603/0001-78",
            document_number_admin: null
          },
          {
            classe: "FII",
            ticker: "SARE11",
            name: "Santander Renda De Alugueis Fundo Investimento Imobiliarios",
            type: "Renda Vari\xE1vel",
            value: -254.15,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2379.405,
            document_number_principal: "32.903.702/0001-71",
            document_number_admin: "62.318.407/0001-19"
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "TAEE11",
            name: "TAESA",
            type: "Renda Vari\xE1vel",
            value: 26.4485,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 2280.9296,
            document_number_principal: "07.859.971/0001-30",
            document_number_admin: null
          },
          {
            classe: "FII",
            ticker: "GARE11",
            name: "Guardian Logistica Fundo De Investimento Imobiliario",
            type: "Renda Vari\xE1vel",
            value: 8.856,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2125.8684,
            document_number_principal: "37.295.919/0001-60",
            document_number_admin: "62.232.889/0001-90"
          }
        ]
      },
      5: {
        operations: [
          {
            classe: "ETF-EXTERIOR",
            ticker: "SCHD",
            name: "Schwab US Dividend Equity",
            type: "Renda Vari\xE1vel",
            value: -7.0689,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 199.99999999820002,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "ETF-EXTERIOR",
            ticker: "QQQM",
            name: "INVESCO NASDAQ 100 ETF",
            type: "Renda Vari\xE1vel",
            value: 3.6972,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 262.57312533545996,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "ETF-EXTERIOR",
            ticker: "VOO",
            name: "VANGUARD S&P 500 ETF",
            type: "Renda Vari\xE1vel",
            value: 7.3099,
            operation: "VENDA DE A\xC7\xC3O ESTRANGEIRA",
            transaction: 528.589953553714,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "Renda Fixa",
            ticker: "TESOURO PREFIXADO 2026",
            name: "TESOURO PREFIXADO 2026",
            type: "Renda Fixa",
            value: 244.39339999999999,
            operation: "RENDA FIXA",
            transaction: 1786.1133999999997,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: null
          },
          {
            classe: "Renda Fixa",
            ticker: "TESOURO PREFIXADO 2027",
            name: "TESOURO PREFIXADO 2027",
            type: "Renda Fixa",
            value: 131.3132,
            operation: "RENDA FIXA",
            transaction: 3100.1173,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: null
          },
          {
            classe: "FII",
            ticker: "KISU11",
            name: "Kilima Fundo De Investimento Em Cotas De Fundos Imobiliarios Suno 30",
            type: "Renda Vari\xE1vel",
            value: -242.256,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1973.4078,
            document_number_principal: "36.669.660/0001-07",
            document_number_admin: "13.486.793/0001-42"
          },
          {
            classe: "FII",
            ticker: "CPTS11",
            name: "Capitania Securities II Fundo Investimento Imobiliario FII",
            type: "Renda Vari\xE1vel",
            value: -139.1314,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2240.2798000000003,
            document_number_principal: "18.979.895/0001-13",
            document_number_admin: "59.281.253/0001-23"
          },
          {
            classe: "FII",
            ticker: "VGHF11",
            name: "Valora Hedge Fund Fundo De Investimento Imobiliario - Fii",
            type: "Renda Vari\xE1vel",
            value: -334.7575,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 2009.2369999999999,
            document_number_principal: "36.771.692/0001-19",
            document_number_admin: "62.232.889/0001-90"
          },
          {
            classe: "FI-INFRA",
            ticker: "CPTI11",
            name: "Capitania Infra Fic Fi Infra Rf Cp",
            type: "Renda Vari\xE1vel",
            value: -140.4886,
            operation: "VENDA DE FI INFRA",
            transaction: 1937.9554,
            document_number_principal: "38.065.012/0001-77",
            document_number_admin: "38.065.012/0001-77"
          },
          {
            classe: "Fiagro",
            ticker: "FGAA11",
            name: "FG/Agro Fundo De Investimento Nas Cadeias Produtivas Agroindustriais - Fiagro-Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -47.827,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1137.5,
            document_number_principal: "42.405.905/0001-91",
            document_number_admin: "13.486.793/0001-42"
          }
        ]
      },
      6: {
        operations: [
          {
            classe: "Fiagro",
            ticker: "FGAA11",
            name: "FG/Agro Fundo De Investimento Nas Cadeias Produtivas Agroindustriais - Fiagro-Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -65.58,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1757.9999999999998,
            document_number_principal: "42.405.905/0001-91",
            document_number_admin: "13.486.793/0001-42"
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "GGBR4",
            name: "Gerdau S.A.",
            type: "Renda Vari\xE1vel",
            value: -462.6591,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1692.3268,
            document_number_principal: "33.611.500/0001-19",
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "RANI3",
            name: "Irani Papel e Embalagem S.A.",
            type: "Renda Vari\xE1vel",
            value: -193.3236,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1239.71,
            document_number_principal: "92.791.243/0001-03",
            document_number_admin: null
          }
        ]
      },
      7: {
        operations: [
          {
            classe: "A\xE7\xE3o",
            ticker: "PETR4",
            name: "Petr\xF3leo Brasileiro S.A. - Petrobras",
            type: "Renda Vari\xE1vel",
            value: 135.5196,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 3975.6857999999997,
            document_number_principal: "33.000.167/0001-01",
            document_number_admin: null
          }
        ]
      },
      8: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.ETH",
            name: "Ethereum",
            type: "Renda Vari\xE1vel",
            value: 188.1456076,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 739.4155596,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "FII",
            ticker: "RZTR11",
            name: "Fundo De Investimento Imobiliario Riza Terrax",
            type: "Renda Vari\xE1vel",
            value: 45.05,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1528.7677,
            document_number_principal: "36.501.128/0001-86",
            document_number_admin: "45.246.410/0001-55"
          },
          {
            classe: "FII",
            ticker: "HGLG11",
            name: "Cshg Logistica - Fundo De Investimento Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -38.62,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1519.7199999999998,
            document_number_principal: "11.728.688/0001-47",
            document_number_admin: "61.809.182/0001-30"
          },
          {
            classe: "FII",
            ticker: "HGLG11",
            name: "Cshg Logistica - Fundo De Investimento Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -50.336,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1975.506,
            document_number_principal: "11.728.688/0001-47",
            document_number_admin: "61.809.182/0001-30"
          },
          {
            classe: "Fiagro",
            ticker: "RZAG11",
            name: "Fundo De Investimento Nas Cadeias Produtivas Agroindustriais Riza Agro - Fiagro - Imobiliario",
            type: "Renda Vari\xE1vel",
            value: -54.315,
            operation: "VENDA DE FII/FIAGRO",
            transaction: 1480.3298,
            document_number_principal: "40.413.979/0001-44",
            document_number_admin: "45.246.410/0001-55"
          }
        ]
      },
      9: {
        operations: [
          {
            classe: "FI-INFRA",
            ticker: "CPTI11",
            name: "Capitania Infra Fic Fi Infra Rf Cp",
            type: "Renda Vari\xE1vel",
            value: -255.246,
            operation: "VENDA DE FI INFRA",
            transaction: 2455.7859,
            document_number_principal: "38.065.012/0001-77",
            document_number_admin: "38.065.012/0001-77"
          },
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.SOL",
            name: "Solana USD",
            type: "Renda Vari\xE1vel",
            value: 52.0171,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 345.095825016,
            document_number_principal: null,
            document_number_admin: null
          }
        ]
      },
      10: {
        operations: [
          {
            classe: "Criptomoeda",
            ticker: "CRYPTO.SOL",
            name: "Solana USD",
            type: "Renda Vari\xE1vel",
            value: 72.9184,
            operation: "VENDA DE CRIPTOMOEDA",
            transaction: 937.739518674,
            document_number_principal: null,
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "CSMG3",
            name: "Companhia de Saneamento de Minas Gerais",
            type: "Renda Vari\xE1vel",
            value: 319.8295,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 633.06,
            document_number_principal: "17.281.106/0001-03",
            document_number_admin: null
          },
          {
            classe: "A\xE7\xE3o",
            ticker: "CMIG4",
            name: "Companhia Energ\xE9tica de Minas Gerais - CEMIG",
            type: "Renda Vari\xE1vel",
            value: 158.1624,
            operation: "SWING TRADE DE A\xC7\xC3O",
            transaction: 1471.3585,
            document_number_principal: "17.155.730/0001-64",
            document_number_admin: null
          }
        ]
      },
      11: {
        operations: [
          {
            classe: "Renda Fixa",
            ticker: "TESOURO PREFIXADO 2028",
            name: "TESOURO PREFIXADO 2028",
            type: "Renda Fixa",
            value: 11.596,
            operation: "RENDA FIXA",
            transaction: 152.54800000000003,
            document_number_principal: "(Verifique na sua corretora/banco)",
            document_number_admin: "62.169.875/0001-79"
          }
        ]
      }
    }
  },
  itensWalletFiltered: [
    {
      qtd: 215,
      classe: "A\xE7\xE3o",
      ticker: "BBAS3",
      investiment: "R$\xA04.944,95",
      averageCambio: "R$\xA00,00",
      name: "Banco do Brasil S.A.",
      description: "(BBAS3) - 215 A\xC7\xD5ES DE BANCO DO BRASIL S.A., CNPJ: 00.000.000/0001-91, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BBAS3. PRE\xC7O M\xC9DIO DE R$\xA023,00 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA04.944,95 ",
      document_number_principal: "00.000.000/0001-91",
      document_number_admin: "00.000.000/0001-91",
      pm: "R$\xA023,00",
      this_year: "R$\xA04.944,95",
      past_year: "R$\xA01.893,23",
      group: "03",
      code: "01"
    },
    {
      qtd: 100,
      classe: "A\xE7\xE3o",
      ticker: "BEES3",
      investiment: "R$\xA0770,23",
      averageCambio: "R$\xA00,00",
      name: "BANCO BANESTES",
      description: "(BEES3) - 100 A\xC7\xD5ES DE BANCO BANESTES, CNPJ: 28.127.603/0001-78, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BEES3. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "28.127.603/0001-78",
      document_number_admin: "28.127.603/0001-78",
      pm: "R$\xA07,70",
      this_year: "R$0,00",
      past_year: "R$\xA0770,23",
      group: "03",
      code: "01"
    },
    {
      qtd: 131,
      classe: "A\xE7\xE3o",
      ticker: "CMIG4",
      investiment: "R$\xA01.302,99",
      averageCambio: "R$\xA00,00",
      name: "Companhia Energ\xE9tica de Minas Gerais - CEMIG",
      description: "(CMIG4) - 131 A\xC7\xD5ES DE COMPANHIA ENERG\xC9TICA DE MINAS GERAIS - CEMIG, CNPJ: 17.155.730/0001-64, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CMIG4. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "17.155.730/0001-64",
      document_number_admin: "17.155.730/0001-64",
      pm: "R$\xA09,95",
      this_year: "R$0,00",
      past_year: "R$\xA01.302,99",
      group: "03",
      code: "01"
    },
    {
      qtd: 17,
      classe: "A\xE7\xE3o",
      ticker: "CSMG3",
      investiment: "R$\xA0313,42",
      averageCambio: "R$\xA00,00",
      name: "Companhia de Saneamento de Minas Gerais",
      description: "(CSMG3) - 17 A\xC7\xD5ES DE COMPANHIA DE SANEAMENTO DE MINAS GERAIS, CNPJ: 17.281.106/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CSMG3. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "17.281.106/0001-03",
      document_number_admin: "17.281.106/0001-03",
      pm: "R$\xA018,44",
      this_year: "R$0,00",
      past_year: "R$\xA0313,42",
      group: "03",
      code: "01"
    },
    {
      qtd: 20,
      classe: "A\xE7\xE3o",
      ticker: "CXSE3",
      investiment: "R$\xA0223,46",
      averageCambio: "R$\xA00,00",
      name: "Caixa Seguridade Participa\xE7\xF5es S.A.",
      description: "(CXSE3) - 20 A\xC7\xD5ES DE CAIXA SEGURIDADE PARTICIPA\xC7\xD5ES S.A., CNPJ: 22.543.331/0001-00, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CXSE3. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "22.543.331/0001-00",
      document_number_admin: "22.543.331/0001-00",
      pm: "R$\xA011,17",
      this_year: "R$0,00",
      past_year: "R$\xA0223,46",
      group: "03",
      code: "01"
    },
    {
      qtd: 106,
      classe: "A\xE7\xE3o",
      ticker: "GGBR4",
      investiment: "R$\xA02.072,24",
      averageCambio: "R$\xA00,00",
      name: "Gerdau S.A.",
      description: "(GGBR4) - 106 A\xC7\xD5ES DE GERDAU S.A., CNPJ: 33.611.500/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GGBR4. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "33.611.500/0001-19",
      document_number_admin: "33.611.500/0001-19",
      pm: "R$\xA019,55",
      this_year: "R$0,00",
      past_year: "R$\xA02.072,24",
      group: "03",
      code: "01"
    },
    {
      qtd: 165,
      classe: "A\xE7\xE3o",
      ticker: "KLBN4",
      investiment: "R$\xA0620,20",
      averageCambio: "R$\xA00,00",
      name: "Klabin S.A.",
      description: "(KLBN4) - 165 A\xC7\xD5ES DE KLABIN S.A., CNPJ: 89.637.490/0001-45, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KLBN4. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "89.637.490/0001-45",
      document_number_admin: "89.637.490/0001-45",
      pm: "R$\xA03,76",
      this_year: "R$0,00",
      past_year: "R$\xA0620,20",
      group: "03",
      code: "01"
    },
    {
      qtd: 30,
      classe: "A\xE7\xE3o",
      ticker: "PETR4",
      investiment: "R$\xA0817,91",
      averageCambio: "R$\xA00,00",
      name: "Petr\xF3leo Brasileiro S.A. - Petrobras",
      description: "(PETR4) - 30 A\xC7\xD5ES DE PETR\xD3LEO BRASILEIRO S.A. - PETROBRAS, CNPJ: 33.000.167/0001-01, C\xD3DIGO DE NEGOCIA\xC7\xC3O: PETR4. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "33.000.167/0001-01",
      document_number_admin: "33.000.167/0001-01",
      pm: "R$\xA027,26",
      this_year: "R$0,00",
      past_year: "R$0,00",
      group: "03",
      code: "01"
    },
    {
      qtd: 4.76575,
      classe: "REIT",
      ticker: "PLD",
      investiment: "R$\xA02.757,38",
      averageCambio: "R$\xA05,18",
      name: "PROLOGIS INC.",
      description: "(PLD) - 4.76575 A\xC7\xD5ES DE PROLOGIS INC., C\xD3DIGO DE NEGOCIA\xC7\xC3O: PLD. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA0111,63",
      this_year: "R$0,00",
      past_year: "R$\xA02.757,38",
      group: "03",
      code: "01"
    },
    {
      qtd: 405,
      classe: "A\xE7\xE3o",
      ticker: "RANI3",
      investiment: "R$\xA03.495,85",
      averageCambio: "R$\xA00,00",
      name: "Irani Papel e Embalagem S.A.",
      description: "(RANI3) - 405 A\xC7\xD5ES DE IRANI PAPEL E EMBALAGEM S.A., CNPJ: 92.791.243/0001-03, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RANI3. PRE\xC7O M\xC9DIO DE R$\xA08,63 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA03.495,85 ",
      document_number_principal: "92.791.243/0001-03",
      document_number_admin: "92.791.243/0001-03",
      pm: "R$\xA08,63",
      this_year: "R$\xA03.495,85",
      past_year: "R$\xA04.410,33",
      group: "03",
      code: "01"
    },
    {
      qtd: 65,
      classe: "A\xE7\xE3o",
      ticker: "TAEE11",
      investiment: "R$\xA02.255,05",
      averageCambio: "R$\xA00,00",
      name: "TAESA",
      description: "(TAEE11) - 65 A\xC7\xD5ES DE TAESA, CNPJ: 07.859.971/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: TAEE11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "07.859.971/0001-30",
      document_number_admin: "07.859.971/0001-30",
      pm: "R$\xA034,69",
      this_year: "R$0,00",
      past_year: "R$\xA02.255,05",
      group: "03",
      code: "01"
    },
    {
      qtd: 0.9100000000000001,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2025",
      investiment: "R$\xA0709,95",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2025",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2025 NO CNPJ: 74.014.747/0001-35 TOTALIZANDO 0,910000 UNIDADE, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35",
      pm: "R$\xA0780,16",
      this_year: "R$0,00",
      past_year: "R$\xA0709,95",
      group: "04",
      code: "02"
    },
    {
      qtd: 2.01,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2026",
      investiment: "R$\xA01.541,72",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2026",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2026 NO CNPJ: 74.014.747/0001-35 TOTALIZANDO 2,010000 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35",
      pm: "R$\xA0767,02",
      this_year: "R$0,00",
      past_year: "R$\xA01.541,72",
      group: "04",
      code: "02"
    },
    {
      qtd: 2.7129999999999996,
      classe: "Renda Fixa",
      ticker: "TESOURO PREFIXADO 2027",
      investiment: "R$\xA02.087,88",
      averageCambio: "R$\xA00,00",
      name: "TESOURO PREFIXADO 2027",
      description: "APLICA\xC7\xC3O EM TESOURO PREFIXADO 2027 NO CNPJ: 74.014.747/0001-35 TOTALIZANDO 2,713000 UNIDADES, COM CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35",
      pm: "R$\xA0769,58",
      this_year: "R$0,00",
      past_year: "R$\xA02.087,88",
      group: "04",
      code: "02"
    },
    {
      qtd: 24,
      classe: "FI-INFRA",
      ticker: "CPTI11",
      investiment: "R$\xA02.366,90",
      averageCambio: "R$\xA00,00",
      name: "Capitania Infra Fic Fi Infra Rf Cp",
      description: "(CPTI11) - 24 COTAS DE CAPITANIA INFRA FIC FI INFRA RF CP, CNPJ: 38.065.012/0001-77, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTI11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "38.065.012/0001-77",
      document_number_admin: "38.065.012/0001-77",
      pm: "R$\xA098,62",
      this_year: "R$0,00",
      past_year: "R$\xA02.366,90",
      group: "07",
      code: "99"
    },
    {
      qtd: 280,
      classe: "FII",
      ticker: "CPTS11",
      investiment: "R$\xA02.243,08",
      averageCambio: "R$\xA00,00",
      name: "Capitania Securities II Fundo Investimento Imobiliario FII",
      description: "(CPTS11) - 280 COTAS DE CAPITANIA SECURITIES II FUNDO INVESTIMENTO IMOBILIARIO FII, CNPJ: 59.281.253/0001-23, C\xD3DIGO DE NEGOCIA\xC7\xC3O: CPTS11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "59.281.253/0001-23",
      document_number_admin: "59.281.253/0001-23",
      pm: "R$\xA08,01",
      this_year: "R$0,00",
      past_year: "R$\xA02.243,08",
      group: "07",
      code: "03"
    },
    {
      qtd: 260,
      classe: "Fiagro",
      ticker: "FGAA11",
      investiment: "R$\xA02.459,46",
      averageCambio: "R$\xA00,00",
      name: "FG/Agro Fundo De Investimento Nas Cadeias Produtivas Agroindustriais - Fiagro-Imobiliario",
      description: "(FGAA11) - 260 COTAS DE FG/AGRO FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS - FIAGRO-IMOBILIARIO, CNPJ: 13.486.793/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: FGAA11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "13.486.793/0001-42",
      document_number_admin: "13.486.793/0001-42",
      pm: "R$\xA09,46",
      this_year: "R$0,00",
      past_year: "R$\xA02.459,46",
      group: "07",
      code: "02"
    },
    {
      qtd: 210,
      classe: "FII",
      ticker: "GARE11",
      investiment: "R$\xA01.863,07",
      averageCambio: "R$\xA00,00",
      name: "Guardian Logistica Fundo De Investimento Imobiliario",
      description: "(GARE11) - 210 COTAS DE GUARDIAN LOGISTICA FUNDO DE INVESTIMENTO IMOBILIARIO, CNPJ: 62.232.889/0001-90, C\xD3DIGO DE NEGOCIA\xC7\xC3O: GARE11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "62.232.889/0001-90",
      document_number_admin: "62.232.889/0001-90",
      pm: "R$\xA08,87",
      this_year: "R$0,00",
      past_year: "R$\xA01.863,07",
      group: "07",
      code: "03"
    },
    {
      qtd: 23,
      classe: "FII",
      ticker: "HGLG11",
      investiment: "R$\xA03.585,06",
      averageCambio: "R$\xA00,00",
      name: "Cshg Logistica - Fundo De Investimento Imobiliario",
      description: "(HGLG11) - 23 COTAS DE CSHG LOGISTICA - FUNDO DE INVESTIMENTO IMOBILIARIO, CNPJ: 61.809.182/0001-30, C\xD3DIGO DE NEGOCIA\xC7\xC3O: HGLG11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "61.809.182/0001-30",
      document_number_admin: "61.809.182/0001-30",
      pm: "R$\xA0155,87",
      this_year: "R$0,00",
      past_year: "R$\xA03.585,06",
      group: "07",
      code: "03"
    },
    {
      qtd: 7.22171,
      classe: "ETF-EXTERIOR",
      ticker: "JEPI",
      investiment: "R$\xA02.043,00",
      averageCambio: "R$\xA05,07",
      name: "JPMORGAN EQUITY PREMIUM INCOME ETF - JEPI",
      description: "(JEPI) - 7.22171 A\xC7\xD5ES DE JPMORGAN EQUITY PREMIUM INCOME ETF - JEPI, C\xD3DIGO DE NEGOCIA\xC7\xC3O: JEPI. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA055,75",
      this_year: "R$0,00",
      past_year: "R$\xA02.043,00",
      group: "07",
      code: "09"
    },
    {
      qtd: 264,
      classe: "FII",
      ticker: "KISU11",
      investiment: "R$\xA02.102,80",
      averageCambio: "R$\xA00,00",
      name: "Kilima Fundo De Investimento Em Cotas De Fundos Imobiliarios Suno 30",
      description: "(KISU11) - 264 COTAS DE KILIMA FUNDO DE INVESTIMENTO EM COTAS DE FUNDOS IMOBILIARIOS SUNO 30, CNPJ: 13.486.793/0001-42, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KISU11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "13.486.793/0001-42",
      document_number_admin: "13.486.793/0001-42",
      pm: "R$\xA07,97",
      this_year: "R$0,00",
      past_year: "R$\xA02.102,80",
      group: "07",
      code: "03"
    },
    {
      qtd: 2,
      classe: "FII",
      ticker: "KNCR11",
      investiment: "R$\xA0209,36",
      averageCambio: "R$\xA00,00",
      name: "Kinea Rendimentos Imobili\xE1rios Fundo de Investimento Imobili\xE1rio - FII",
      description: "(KNCR11) - 2 COTAS DE KINEA RENDIMENTOS IMOBILI\xC1RIOS FUNDO DE INVESTIMENTO IMOBILI\xC1RIO - FII, CNPJ: 62.418.140/0001-31, C\xD3DIGO DE NEGOCIA\xC7\xC3O: KNCR11. PRE\xC7O M\xC9DIO DE R$\xA0104,68 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0209,36 ",
      document_number_principal: "62.418.140/0001-31",
      document_number_admin: "62.418.140/0001-31",
      pm: "R$\xA0104,68",
      this_year: "R$\xA0209,36",
      past_year: "R$\xA00,00",
      group: "07",
      code: "03"
    },
    {
      qtd: 551,
      classe: "FII",
      ticker: "MXRF11",
      investiment: "R$\xA05.366,49",
      averageCambio: "R$\xA00,00",
      name: "Maxi Renda Fundo De Investimento Imobiliaro - FII",
      description: "(MXRF11) - 551 COTAS DE MAXI RENDA FUNDO DE INVESTIMENTO IMOBILIARO - FII, CNPJ: 59.281.253/0001-23, C\xD3DIGO DE NEGOCIA\xC7\xC3O: MXRF11. PRE\xC7O M\xC9DIO DE R$\xA09,74 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA05.366,49 ",
      document_number_principal: "59.281.253/0001-23",
      document_number_admin: "59.281.253/0001-23",
      pm: "R$\xA09,74",
      this_year: "R$\xA05.366,49",
      past_year: "R$\xA02.631,60",
      group: "07",
      code: "03"
    },
    {
      qtd: 218,
      classe: "Fiagro",
      ticker: "RZAG11",
      investiment: "R$\xA01.972,30",
      averageCambio: "R$\xA00,00",
      name: "Fundo De Investimento Nas Cadeias Produtivas Agroindustriais Riza Agro - Fiagro - Imobiliario",
      description: "(RZAG11) - 218 COTAS DE FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS RIZA AGRO - FIAGRO - IMOBILIARIO, CNPJ: 45.246.410/0001-55, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZAG11. PRE\xC7O M\xC9DIO DE R$\xA09,05 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.972,30 ",
      document_number_principal: "45.246.410/0001-55",
      document_number_admin: "45.246.410/0001-55",
      pm: "R$\xA09,05",
      this_year: "R$\xA01.972,30",
      past_year: "R$\xA02.162,34",
      group: "07",
      code: "02"
    },
    {
      qtd: 20,
      classe: "FII",
      ticker: "RZTR11",
      investiment: "R$\xA01.767,04",
      averageCambio: "R$\xA00,00",
      name: "Fundo De Investimento Imobiliario Riza Terrax",
      description: "(RZTR11) - 20 COTAS DE FUNDO DE INVESTIMENTO IMOBILIARIO RIZA TERRAX, CNPJ: 45.246.410/0001-55, C\xD3DIGO DE NEGOCIA\xC7\xC3O: RZTR11. PRE\xC7O M\xC9DIO DE R$\xA088,35 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA01.767,04 ",
      document_number_principal: "45.246.410/0001-55",
      document_number_admin: "45.246.410/0001-55",
      pm: "R$\xA088,35",
      this_year: "R$\xA01.767,04",
      past_year: "R$\xA02.559,45",
      group: "07",
      code: "03"
    },
    {
      qtd: 500,
      classe: "FII",
      ticker: "SARE11",
      investiment: "R$\xA02.634,17",
      averageCambio: "R$\xA00,00",
      name: "Santander Renda De Alugueis Fundo Investimento Imobiliarios",
      description: "(SARE11) - 500 COTAS DE SANTANDER RENDA DE ALUGUEIS FUNDO INVESTIMENTO IMOBILIARIOS, CNPJ: 62.318.407/0001-19, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SARE11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "62.318.407/0001-19",
      document_number_admin: "62.318.407/0001-19",
      pm: "R$\xA05,27",
      this_year: "R$0,00",
      past_year: "R$\xA02.634,17",
      group: "07",
      code: "03"
    },
    {
      qtd: 6.70470353,
      classe: "ETF-EXTERIOR",
      ticker: "SCHD",
      investiment: "R$\xA01.032,18",
      averageCambio: "R$\xA05,63",
      name: "Schwab US Dividend Equity",
      description: "(SCHD) - 6.70470353 A\xC7\xD5ES DE SCHWAB US DIVIDEND EQUITY, C\xD3DIGO DE NEGOCIA\xC7\xC3O: SCHD. PRE\xC7O M\xC9DIO DE $27.35 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE $183.37 - (C\xC2MBIO DE R$\xA05,63) ",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA027,35",
      this_year: "R$\xA01.032,18",
      past_year: "R$\xA00,00",
      group: "07",
      code: "09"
    },
    {
      qtd: 250,
      classe: "FII",
      ticker: "VGHF11",
      investiment: "R$\xA02.278,06",
      averageCambio: "R$\xA00,00",
      name: "Valora Hedge Fund Fundo De Investimento Imobiliario - Fii",
      description: "(VGHF11) - 250 COTAS DE VALORA HEDGE FUND FUNDO DE INVESTIMENTO IMOBILIARIO - FII, CNPJ: 62.232.889/0001-90, C\xD3DIGO DE NEGOCIA\xC7\xC3O: VGHF11. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: "62.232.889/0001-90",
      document_number_admin: "62.232.889/0001-90",
      pm: "R$\xA09,11",
      this_year: "R$0,00",
      past_year: "R$\xA02.278,06",
      group: "07",
      code: "03"
    },
    {
      qtd: 40050999999999997e-20,
      classe: "Criptomoeda",
      ticker: "CRYPTO.BTC",
      investiment: "R$\xA0199,99",
      averageCambio: "R$\xA00,00",
      name: "Bitcoin",
      description: "(BTC) - 0.00040050999999999997 UNIDADE DE BITCOIN, C\xD3DIGO DE NEGOCIA\xC7\xC3O: BTC. PRE\xC7O M\xC9DIO DE R$\xA0499.334,29 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0199,99 ",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA0499.334,29",
      this_year: "R$\xA0199,99",
      past_year: "R$\xA00,00",
      group: "08",
      code: "99"
    },
    {
      qtd: 336.99142062,
      classe: "Criptomoeda",
      ticker: "CRYPTO.DOGE",
      investiment: "R$\xA0414,37",
      averageCambio: "R$\xA00,00",
      name: "Doge Coin",
      description: "(DOGE) - 336.99142062 UNIDADES DE DOGE COIN, C\xD3DIGO DE NEGOCIA\xC7\xC3O: DOGE. PRE\xC7O M\xC9DIO DE R$\xA01,23 E CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$\xA0414,37 ",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA01,23",
      this_year: "R$\xA0414,37",
      past_year: "R$\xA00,00",
      group: "08",
      code: "99"
    },
    {
      qtd: 0.02730016,
      classe: "Criptomoeda",
      ticker: "CRYPTO.ETH",
      investiment: "R$\xA0451,27",
      averageCambio: "R$\xA00,00",
      name: "Ethereum",
      description: "(ETH) - 0.02730016 UNIDADE DE ETHEREUM, C\xD3DIGO DE NEGOCIA\xC7\xC3O: ETH. CUSTO TOTAL DE AQUISI\xC7\xC3O DE R$0,00 (POSI\xC7\xC3O ENCERRADA)",
      document_number_principal: null,
      document_number_admin: null,
      pm: "R$\xA016.529,94",
      this_year: "R$0,00",
      past_year: "R$\xA0451,27",
      group: "08",
      code: "99"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251106-20261106-pos-fixado-115-cdi",
      investiment: "R$\xA0101,39",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251106-20261106-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0101,39",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0101,39",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251114-20261114-pos-fixado-115-cdi",
      investiment: "R$\xA050,51",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251114-20261114-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA050,51",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA050,51",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251118-20261218-pos-fixado-115-cdi",
      investiment: "R$\xA0155,48",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251118-20261218-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0155,48",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0155,48",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251127-20261227-pos-fixado-115-cdi",
      investiment: "R$\xA0503,00",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251127-20261227-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0503,00",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0503,00",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251129-20261229-pos-fixado-115-cdi",
      investiment: "R$\xA0251,20",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251129-20261229-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0251,20",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0251,20",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251203-20261203-pos-fixado-115-cdi",
      investiment: "R$\xA0301,08",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251203-20261203-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0301,08",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0301,08",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251204-20261204-pos-fixado-115-cdi",
      investiment: "R$\xA0250,75",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251204-20261204-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA0250,75",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA0250,75",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    },
    {
      qtd: 1,
      classe: "Renda Fixa - Outros",
      ticker: "rdb-turbo---nubank-20251205-20261205-pos-fixado-115-cdi",
      investiment: "R$\xA050,12",
      averageCambio: "R$\xA00,00",
      name: "TURBO - Nubank",
      description: "(rdb-turbo---nubank-20251205-20261205-pos-fixado-115-cdi) APLICA\xC7\xC3O EM RDB-TURBO - NUBANK CNPJ: 18.236.120/0001-58 COM SALDO DE R$\xA050,12",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58",
      pm: "R$\xA00,00",
      this_year: "R$\xA050,12",
      past_year: "R$\xA00,00",
      type: "RDB",
      group: "04",
      code: "02"
    }
  ],
  provents: {
    RZAG11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        28.8,
        42.5,
        22,
        22,
        28.32,
        25.96,
        28.32,
        42.5,
        42.5,
        21.25,
        42.5
      ],
      amountRendiment: 346.65,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Fundo De Investimento Nas Cadeias Produtivas Agroindustriais Riza Agro - Fiagro - Imobiliario",
      document_number_principal: "40.413.979/0001-44",
      document_number_admin: "45.246.410/0001-55"
    },
    BBAS3: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        10.88
      ],
      amountDividend: 10.88,
      jcp: [
        10.131999999999998,
        23.324,
        32.08070000000001,
        8.6445
      ],
      amountJcp: 74.18120000000002,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [
        0.5579999999999999,
        0.248
      ],
      amountRendimentJCP: 0.8059999999999999,
      name: "Banco do Brasil S.A.",
      document_number_principal: "00.000.000/0001-91",
      document_number_admin: null
    },
    HGLG11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        25.3,
        25.3,
        25.3,
        25.3,
        25.3,
        25.3,
        25.3,
        25.3
      ],
      amountRendiment: 202.40000000000003,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Cshg Logistica - Fundo De Investimento Imobiliario",
      document_number_principal: "11.728.688/0001-47",
      document_number_admin: "61.809.182/0001-30"
    },
    BEES3: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [
        2.02,
        2.04,
        2.04,
        1.93,
        2.02
      ],
      amountJcp: 10.05,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "BANCO BANESTES",
      document_number_principal: "28.127.603/0001-78",
      document_number_admin: null
    },
    FGAA11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        27.3,
        28.6,
        37.95,
        28.6,
        29.9
      ],
      amountRendiment: 152.35000000000002,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "FG/Agro Fundo De Investimento Nas Cadeias Produtivas Agroindustriais - Fiagro-Imobiliario",
      document_number_principal: "42.405.905/0001-91",
      document_number_admin: "13.486.793/0001-42"
    },
    SARE11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        11.5,
        10,
        13,
        13
      ],
      amountRendiment: 47.5,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Santander Renda De Alugueis Fundo Investimento Imobiliarios",
      document_number_principal: "32.903.702/0001-71",
      document_number_admin: "62.318.407/0001-19"
    },
    CPTS11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        24.76,
        21,
        22.5,
        24.16,
        25.67
      ],
      amountRendiment: 118.09,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Capitania Securities II Fundo Investimento Imobiliario FII",
      document_number_principal: "18.979.895/0001-13",
      document_number_admin: "59.281.253/0001-23"
    },
    PETR4: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        38.24
      ],
      amountDividend: 38.24,
      jcp: [
        47.957,
        15.388399999999999
      ],
      amountJcp: 63.3454,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Petr\xF3leo Brasileiro S.A. - Petrobras",
      document_number_principal: "33.000.167/0001-01",
      document_number_admin: null
    },
    GARE11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        18.59,
        19.32,
        18.59,
        19.92
      ],
      amountRendiment: 76.42,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Guardian Logistica Fundo De Investimento Imobiliario",
      document_number_principal: "37.295.919/0001-60",
      document_number_admin: "62.232.889/0001-90"
    },
    CSMG3: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        0.6,
        3.01
      ],
      amountDividend: 3.61,
      jcp: [
        6.4736,
        5.33205,
        4.32055,
        6.25685
      ],
      amountJcp: 22.38305,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Companhia de Saneamento de Minas Gerais",
      document_number_principal: "17.281.106/0001-03",
      document_number_admin: null
    },
    CPTI11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        30,
        24,
        53,
        30,
        26,
        26,
        30,
        30,
        24
      ],
      amountRendiment: 273,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Capitania Infra Fic Fi Infra Rf Cp",
      document_number_principal: "38.065.012/0001-77",
      document_number_admin: "38.065.012/0001-77"
    },
    TAEE11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [
        38.37
      ],
      amountReembolso: 38.37,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "TAESA",
      document_number_principal: "07.859.971/0001-30",
      document_number_admin: null
    },
    external: {
      JEPI: {
        amountBuy: 58.984661923399926,
        rentals: [],
        amountRental: 0,
        bonification: [],
        amountBonification: 0,
        dividends: [
          9.943303636677799,
          12.047315194580401,
          9.470685956904902
        ],
        amountDividend: 31.4613047881631,
        jcp: [],
        amountJcp: 0,
        rendiments: [],
        amountRendiment: 0,
        rendimentJCP: [],
        amountRendimentJCP: 0,
        name: "JPMORGAN EQUITY PREMIUM INCOME ETF - JEPI",
        document_number_principal: null,
        document_number_admin: null,
        amountTax: 13.48266516,
        dividendPerMonth: {
          1: 17.2103982545804,
          2: 14.2042888166778,
          3: 13.529282876904901
        },
        taxPerMonth: {
          1: 5.16308306,
          2: 4.26098518,
          3: 4.05859692
        },
        cambioMonth: {
          1: 6.0394,
          2: 6.0371,
          3: 5.7099
        },
        amountMonth: {
          1: 17.2103982545804,
          2: 14.2042888166778,
          3: 13.529282876904901
        }
      },
      SCHD: {
        amountBuy: -40.163084774922254,
        rentals: [],
        amountRental: 0,
        bonification: [],
        amountBonification: 0,
        dividends: [
          4.5791985898309475,
          4.607495694619281,
          10.16741587176734
        ],
        amountDividend: 19.35411015621757,
        jcp: [],
        amountJcp: 0,
        rendiments: [],
        amountRendiment: 0,
        rendimentJCP: [],
        amountRendimentJCP: 0,
        name: "Schwab US Dividend Equity",
        document_number_principal: null,
        document_number_admin: null,
        amountTax: 8.2948252,
        dividendPerMonth: {
          4: 14.525055751767338,
          6: 6.582459434619281,
          9: 6.541420169830948
        },
        taxPerMonth: {
          4: 4.35763988,
          6: 1.9749637400000002,
          9: 1.96222158
        },
        cambioMonth: {
          4: 5.7082,
          6: 5.4302,
          9: 5.3922
        },
        amountMonth: {
          4: 14.525055751767338,
          6: 6.582459434619281,
          9: 6.541420169830948
        }
      },
      PLD: {
        amountBuy: 170.76793271967017,
        rentals: [],
        amountRental: 0,
        bonification: [],
        amountBonification: 0,
        dividends: [
          16.69934443192
        ],
        amountDividend: 16.69934443192,
        jcp: [],
        amountJcp: 0,
        rendiments: [],
        amountRendiment: 0,
        rendimentJCP: [],
        amountRendimentJCP: 0,
        name: "PROLOGIS INC.",
        document_number_principal: null,
        document_number_admin: null,
        amountTax: 4.43835506,
        dividendPerMonth: {
          1: 21.13769949192
        },
        taxPerMonth: {
          1: 4.43835506
        },
        cambioMonth: {
          1: 6.0394
        },
        amountMonth: {
          1: 21.13769949192
        }
      },
      VOO: {
        amountBuy: 41.81585851036107,
        rentals: [],
        amountRental: 0,
        bonification: [],
        amountBonification: 0,
        dividends: [
          7.232289399999999
        ],
        amountDividend: 7.232289399999999,
        jcp: [],
        amountJcp: 0,
        rendiments: [],
        amountRendiment: 0,
        rendimentJCP: [],
        amountRendimentJCP: 0,
        name: "VANGUARD S&P 500 ETF",
        document_number_principal: null,
        document_number_admin: null,
        amountTax: 3.0995526,
        dividendPerMonth: {
          4: 10.331842
        },
        taxPerMonth: {
          4: 3.0995526
        },
        cambioMonth: {
          4: 5.7082
        },
        amountMonth: {
          4: 10.331842
        }
      },
      QQQM: {
        amountBuy: 21.14922172578349,
        rentals: [],
        amountRental: 0,
        bonification: [],
        amountBonification: 0,
        dividends: [
          1.3350522763188002
        ],
        amountDividend: 1.3350522763188002,
        jcp: [],
        amountJcp: 0,
        rendiments: [],
        amountRendiment: 0,
        rendimentJCP: [],
        amountRendimentJCP: 0,
        name: "INVESCO NASDAQ 100 ETF",
        document_number_principal: null,
        document_number_admin: null,
        amountTax: 0.5719616399999999,
        dividendPerMonth: {
          3: 1.9070139163188002
        },
        taxPerMonth: {
          3: 0.5719616399999999
        },
        cambioMonth: {
          3: 5.7082
        },
        amountMonth: {
          3: 1.9070139163188002
        }
      }
    },
    KLBN4: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        1.46
      ],
      amountDividend: 1.46,
      jcp: [
        4.917
      ],
      amountJcp: 4.917,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Klabin S.A.",
      document_number_principal: "89.637.490/0001-45",
      document_number_admin: null
    },
    GGBR4: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        13.32,
        10.6
      ],
      amountDividend: 23.92,
      jcp: [],
      amountJcp: 0,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Gerdau S.A.",
      document_number_principal: "33.611.500/0001-19",
      document_number_admin: null
    },
    MXRF11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        46.8,
        49.8,
        50.5,
        45.7,
        27.9,
        33.3,
        26,
        45.9,
        27.9,
        54.3,
        38.5
      ],
      amountRendiment: 446.59999999999997,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Maxi Renda Fundo De Investimento Imobiliaro - FII",
      document_number_principal: "97.521.225/0001-25",
      document_number_admin: "59.281.253/0001-23"
    },
    RZTR11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        34,
        17,
        35.7,
        35.7,
        35.7,
        35.7,
        31.9,
        30.45,
        17,
        17,
        35.7
      ],
      amountRendiment: 325.85,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Fundo De Investimento Imobiliario Riza Terrax",
      document_number_principal: "36.501.128/0001-86",
      document_number_admin: "45.246.410/0001-55"
    },
    RANI3: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        43.9,
        35.42,
        101.07,
        182.91,
        18
      ],
      amountDividend: 381.29999999999995,
      jcp: [],
      amountJcp: 0,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Irani Papel e Embalagem S.A.",
      document_number_principal: "92.791.243/0001-03",
      document_number_admin: null
    },
    VGHF11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        22.77,
        22.77,
        22.5,
        22.5,
        23.31
      ],
      amountRendiment: 113.85,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Valora Hedge Fund Fundo De Investimento Imobiliario - Fii",
      document_number_principal: "36.771.692/0001-19",
      document_number_admin: "62.232.889/0001-90"
    },
    KISU11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        18.48,
        19.6,
        19.6,
        17.68,
        18.48
      ],
      amountRendiment: 93.84,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Kilima Fundo De Investimento Em Cotas De Fundos Imobiliarios Suno 30",
      document_number_principal: "36.669.660/0001-07",
      document_number_admin: "13.486.793/0001-42"
    },
    CXSE3: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        6.2
      ],
      amountDividend: 6.2,
      jcp: [],
      amountJcp: 0,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [
        0.03
      ],
      amountRendimentJCP: 0.03,
      name: "Caixa Seguridade Participa\xE7\xF5es S.A.",
      document_number_principal: "22.543.331/0001-00",
      document_number_admin: null
    },
    KNCR11: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [],
      amountDividend: 0,
      jcp: [],
      amountJcp: 0,
      rendiments: [
        2.66
      ],
      amountRendiment: 2.66,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Kinea Rendimentos Imobili\xE1rios Fundo de Investimento Imobili\xE1rio - FII",
      document_number_principal: "16.706.958/0001-32",
      document_number_admin: "62.418.140/0001-31"
    },
    CMIG4: {
      amountBuy: 0,
      rentals: [],
      amountRental: 0,
      reembolso: [],
      amountReembolso: 0,
      bonification: [],
      amountBonification: 0,
      dividends: [
        43.48
      ],
      amountDividend: 43.48,
      jcp: [
        5.236,
        10.912300000000002,
        9.24205,
        6.375
      ],
      amountJcp: 31.765350000000005,
      rendiments: [],
      amountRendiment: 0,
      rendimentJCP: [],
      amountRendimentJCP: 0,
      name: "Companhia Energ\xE9tica de Minas Gerais - CEMIG",
      document_number_principal: "17.155.730/0001-64",
      document_number_admin: null
    }
  },
  reembolso: {
    TAEE11: {
      name: "TAESA",
      amount: 38.37,
      cnpj: "07.859.971/0001-30"
    }
  },
  cdbs: {
    "rdb-turbo---nubank-20250814-20260818-pos-fixado-115-cdi": {
      rendiments: [
        0
      ],
      amountRendiment: 0,
      name: "TURBO - Nubank",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58"
    },
    "rdb-turbo---nubank-20250807-20260829-pos-fixado-115-cdi": {
      rendiments: [
        1.73
      ],
      amountRendiment: 1.73,
      name: "TURBO - Nubank",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58"
    },
    "rdb-turbo---nubank-20250820-20260820-pos-fixado-115-cdi": {
      rendiments: [
        5.83
      ],
      amountRendiment: 5.83,
      name: "TURBO - Nubank",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58"
    },
    "rdb-turbo---nubank-20250807-20260729-pos-fixado-115-cdi": {
      rendiments: [
        3.47
      ],
      amountRendiment: 3.47,
      name: "TURBO - Nubank",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58"
    },
    "rdb-mydashboard-nubank-20250401-20260924-pos-fixado-100-cdi": {
      rendiments: [
        12.76
      ],
      amountRendiment: 12.76,
      name: "Mydashboard-Nubank",
      document_number_principal: "18.236.120/0001-58",
      document_number_admin: "18.236.120/0001-58"
    }
  },
  tds: {
    "TESOURO PREFIXADO 2025": {
      rendiments: [
        169.19370000000026
      ],
      amountRendiment: 169.19370000000026,
      name: "TESOURO PREFIXADO 2025",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35"
    },
    "TESOURO PREFIXADO 2026": {
      rendiments: [
        250.56339999999992
      ],
      amountRendiment: 250.56339999999992,
      name: "TESOURO PREFIXADO 2026",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35"
    },
    "TESOURO PREFIXADO 2027": {
      rendiments: [
        134.95321014717194
      ],
      amountRendiment: 134.95321014717194,
      name: "TESOURO PREFIXADO 2027",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35"
    },
    "TESOURO PREFIXADO 2028": {
      rendiments: [
        11.596000000000032
      ],
      amountRendiment: 11.596000000000032,
      name: "TESOURO PREFIXADO 2028",
      document_number_principal: "74.014.747/0001-35",
      document_number_admin: "74.014.747/0001-35"
    }
  }
};

// functions/index.js
var import_moment_timezone = __toESM(require("moment-timezone"), 1);
function getMonths(cod) {
  const months = {
    0: "janeiro",
    1: "fevereiro",
    2: "mar\xE7o",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro"
  };
  return months[cod];
}
function composeRanges(sheetNames, sheetRanges) {
  const ranges = [];
  sheetNames.forEach((element, i) => {
    ranges.push(`${element}!${sheetRanges[i]}`);
  });
  return ranges;
}
async function getDataRange(lastRow, initialColNameForLastRow, initialNumberColForLastRow, initialColName, initialColNameNumber, endColName, getRange, sheetId, sheetName) {
  let rangeString = initialColNameForLastRow + initialNumberColForLastRow + ":" + initialColNameForLastRow + lastRow;
  const values = await getRange(sheetId, `${sheetName}!${rangeString}`);
  rangeString = initialColName + initialColNameNumber + ":" + endColName + (values.length + (sheetName === TABS.MOVIMENTACOES ? 1 : 3));
  const dataRows = await getRange(sheetId, `${sheetName}!${rangeString}`);
  return dataRows;
}
function getLastRow(sheetName, docInfo) {
  let lastRow = 0;
  for (let i = 0; i < docInfo.sheets.length; i++) {
    if (docInfo.sheets[i].properties.title === sheetName) {
      lastRow = docInfo.sheets[i].properties.gridProperties.rowCount;
      break;
    }
  }
  return lastRow;
}
function composeDateDefaultToShort(dateDefault) {
  const year = dateDefault.split("/").pop();
  const month = dateDefault.split("/")[1];
  const day = dateDefault.split("/")[0];
  return `${year}${month}${day}`;
}
function composeDateFromShortV2(shortDate) {
  const year = shortDate.slice(0, 4);
  const month = shortDate.slice(4, 6);
  const day = shortDate.slice(6, 8);
  return `${year}-${month}-${day}T03:00:00.000Z`;
}
var mountList = (result, array, withDocId = false) => {
  if (!result.empty) {
    result.forEach((doc) => {
      const createTime = import_moment_timezone.default.unix(doc.createTime._seconds).format("YYYY-MM-DD");
      if (withDocId) {
        array.push({ ...doc.data(), docId: doc.id, createTime });
      } else {
        array.push({ ...doc.data(), createTime });
      }
    });
    return array;
  }
  return [];
};
var convertDateTime = (date) => {
  return import_moment_timezone.default.unix(date).format("YYYY/MM/DD HH:mm:ss");
};
var getSheetId = (url) => {
  const split = url.split("/");
  return split[5];
};
var getTypeByMainSearching = (type) => {
  switch (type) {
    case 13:
      return CLASS.REIT;
    case 12:
      return CLASS.STOCK;
    case 901:
      return CLASS.ETF_EUA;
    case 22:
      return CLASS.FI_INFRA;
    case 24:
      return CLASS.FIAGRO;
    case 2:
      return CLASS.FII;
    case 1:
      return CLASS.ACAO;
    case 6:
      return CLASS.ETF;
    case 4:
      return CLASS.BDR;
    case 100:
      return CLASS.CRIPTOMOEDA;
    default:
      return null;
  }
};
function strToFloat(str) {
  if (str) {
    return Number(str.replaceAll(".", "").replaceAll(",", "."));
  }
  return null;
}
var renameTickerGoogleSheet = (ticker) => {
  if (ticker in RENAME_TICKER_GOOGLE_SHEET) {
    return RENAME_TICKER_GOOGLE_SHEET[ticker];
  }
  return ticker;
};
var composeNumberTwoDecimal = (number) => {
  if (number <= 9) {
    return `0${number}`;
  }
  return number;
};
function convertCurrencyReal2(value, currency = true, isCript = false, customDecimal = 6) {
  if (currency) {
    return (value || 0).toLocaleString("pt-br", {
      minimumFractionDigits: isCript ? customDecimal : 2,
      style: "currency",
      currency: "BRL"
    });
  }
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: isCript ? customDecimal : 2
  });
}
function convertCurrencyDolar(value, currency = true, isCript = false, customDecimal = 6) {
  if (currency) {
    return (value || 0).toLocaleString("en-US", {
      minimumFractionDigits: isCript ? customDecimal : 2,
      style: "currency",
      currency: "USD"
    });
  }
  return value.toLocaleString("en-US", {
    minimumFractionDigits: isCript ? customDecimal : 2
  });
}
var mydash = () => {
  const log = (message) => {
    const staging = process.env.STAGING === "true";
    return staging ? console.log(message) : null;
  };
  const normalizeBRDate = (stringDate) => {
    try {
      const currentDate = (0, import_moment_timezone.default)(stringDate, "DD/MM/YYYY").tz("America/Sao_Paulo").toISOString();
      const shortDate = (0, import_moment_timezone.default)(currentDate).format("YYYYMMDD");
      return { currentDate, shortDate };
    } catch {
      return {
        currentDate: null,
        shortDate: null
      };
    }
  };
  const sanitizeTickerName = (ticker) => ticker.replace("CRYPTO.", "");
  const delay = async (d = 200) => {
    return await new Promise((resolve) => setTimeout(() => resolve("delay"), d));
  };
  return {
    log,
    normalizeBRDate,
    sanitizeTickerName,
    delay
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CLASS,
  CLASS_EXTERNAL_LIST,
  COLLECTION_NAME,
  EVENTS,
  JOBS,
  MOVIMENTATIONS_OPERATIONS_KEYS,
  MOVIMENTATIONS_SUBSCRIBERS,
  MOVIMENTATIONS_WITHOUT_SUBSCRIBERS,
  MYDASH_PREFIX,
  RENAME_TICKER_GOOGLE_SHEET,
  TABS,
  TRANSACTIONS,
  composeDateDefaultToShort,
  composeDateFromShortV2,
  composeNumberTwoDecimal,
  composeRanges,
  convertCurrencyDolar,
  convertCurrencyReal,
  convertDateTime,
  generateIRPF,
  getDataRange,
  getLastRow,
  getMonths,
  getSheetId,
  getTypeByMainSearching,
  mockAluguel2024,
  mockBonification2024,
  mockBonificationProvent2024,
  mockEmpty2022,
  mockFullData2022,
  mockFullData2023,
  mockFullData2024,
  mockRicardo2025,
  mockRobert2023,
  mountList,
  mydash,
  renameTickerGoogleSheet,
  strToFloat
});
/**
 * @preserve
 * Desenvolvimento: Ricardo Alvarenga
 * Contato: ricardoinvesting10@gmail.com
 * Youtube: https://www.youtube.com/@ricardoinvesting
 * PIX: ricardoinvesting10@gmail.com
 *             _                   _       _                     _   _
    ____      (_)                 | |     (_)                   | | (_)
   / __ \ _ __ _  ___ __ _ _ __ __| | ___  _ _ ____   _____  ___| |_ _ _ __   __ _
  / / _` | '__| |/ __/ _` | '__/ _` |/ _ \| | '_ \ \ / / _ \/ __| __| | '_ \ / _` |
 | | (_| | |  | | (_| (_| | | | (_| | (_) | | | | \ V /  __/\__ \ |_| | | | | (_| |
  \ \__,_|_|  |_|\___\__,_|_|  \__,_|\___/|_|_| |_|\_/ \___||___/\__|_|_| |_|\__, |
   \____/                                                                     __/ |
                                                                             |___/
 * @endpreserve
 */

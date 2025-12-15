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

// functions/index.js
var functions_exports = {};
__export(functions_exports, {
  composeDateDefaultToShort: () => composeDateDefaultToShort,
  composeDateFromShortV2: () => composeDateFromShortV2,
  composeNumberTwoDecimal: () => composeNumberTwoDecimal,
  composeRanges: () => composeRanges,
  convertCurrencyDolar: () => convertCurrencyDolar,
  convertCurrencyReal: () => convertCurrencyReal,
  convertDateTime: () => convertDateTime,
  getDataRange: () => getDataRange,
  getLastRow: () => getLastRow,
  getMonths: () => getMonths,
  getSheetId: () => getSheetId,
  getTypeByMainSearching: () => getTypeByMainSearching,
  mountList: () => mountList,
  mydash: () => mydash,
  renameTickerGoogleSheet: () => renameTickerGoogleSheet,
  strToFloat: () => strToFloat
});
module.exports = __toCommonJS(functions_exports);
var import_moment_timezone = __toESM(require("moment-timezone"), 1);

// constants.js
var RENAME_TICKER_GOOGLE_SHEET = {
  "MATIC-POLYGON": "MATIC"
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

// functions/index.js
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
function convertCurrencyReal(value, currency = true, isCript = false, customDecimal = 6) {
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
  composeDateDefaultToShort,
  composeDateFromShortV2,
  composeNumberTwoDecimal,
  composeRanges,
  convertCurrencyDolar,
  convertCurrencyReal,
  convertDateTime,
  getDataRange,
  getLastRow,
  getMonths,
  getSheetId,
  getTypeByMainSearching,
  mountList,
  mydash,
  renameTickerGoogleSheet,
  strToFloat
});

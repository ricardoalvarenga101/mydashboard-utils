const moment = require("moment-timezone");
const { CLASS } = require("./constants");

/**
 * Retorna a descrição do mes a partir de seu código
 * @param {Number} cod código do mês
 * @returns
 */
function getMonths(cod) {
  const months = {
    0: "janeiro",
    1: "fevereiro",
    2: "março",
    3: "abril",
    4: "maio",
    5: "junho",
    6: "julho",
    7: "agosto",
    8: "setembro",
    9: "outubro",
    10: "novembro",
    11: "dezembro",
  };
  return months[cod];
}

/**
 * Compoe o range de uma google sheet
 */
function composeRanges(sheetNames, sheetRanges) {
  const ranges = [];
  sheetNames.forEach((element, i) => {
    ranges.push(`${element}!${sheetRanges[i]}`);
  });
  return ranges;
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
async function getDataRange(
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
    ":" +
    initialColNameForLastRow +
    lastRow;
  const values = await getRange(sheetId, `${sheetName}!${rangeString}`);
  rangeString =
    initialColName +
    initialColNameNumber +
    ":" +
    endColName +
    (values.length + 1);
  const dataRows = await getRange(sheetId, `${sheetName}!${rangeString}`);
  return dataRows;
}

/**
 * Retorna a ultima linha de uma google sheet
 * @param {*} sheetName 
 * @param {*} docInfo 
 * @returns 
 */
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

/**
 * Formata a data padrão para uma shortDate <YYYYMMDD>
 * @param {*} dateDefault 
 * @returns 
 */
function composeDateDefaultToShort(dateDefault) {
  const year = dateDefault.split("/").pop()
  const month = dateDefault.split("/")[1]
  const day = dateDefault.split("/")[0]
  return `${year}${month}${day}`
}

/**
 * Formata uma shortDate em uma data padrão
 * @param {*} shortDate 
 * @returns 
 */
function composeDateFromShort(shortDate) {
  const year = shortDate.slice(0, 4);
  const month = shortDate.slice(4, 6);
  return new Date(year, month - 1, 1).toISOString();
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
        .format("YYYY-MM-DD");
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

/**
 * Converte uma data padrão para uma datetime <YYYY/MM/DD HH:mm:ss>
 * @param {*} date 
 * @returns 
 */
const convertDateTime = (date) => {
  return moment.unix(date).format("YYYY/MM/DD HH:mm:ss");
};

/**
 * Retorna o id de uma url google sheet
 * @param {*} url 
 * @returns 
 */
const getSheetId = (url) => {  
  const split = url.split("/");
  return split[5];
};

/**
 * Retorna uma classe de um ativo a partir de seu tipo
 * @param {*} type 
 * @returns 
 */
const getTypeByMainSearching = (type) => {
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

/**
 * Converte um numero string para float
 * @param {*} str 
 * @returns 
 */
function strToFloat(str) {
  if (str) {
    return Number(str.replaceAll(".", "").replaceAll(",", "."));
  }
}

module.exports = {
  strToFloat,
  getTypeByMainSearching,
  getMonths,
  composeRanges,
  getLastRow,
  composeDateFromShort,
  composeDateDefaultToShort,
  getDataRange,
  mountList,
  convertDateTime,
  getSheetId,  
};

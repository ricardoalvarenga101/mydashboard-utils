/**
 * ############### utils ###############
 */

const { map } = require("lodash");

/**
 * Retorna a outra ultima posição
 * @param {*} operations
 * @param {*} year
 * @param {*} initialPosition
 * @returns
 */
function getOtherLastPosition(operations, year, initialPosition) {
  const listMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse();
  let lastRegister = {};
  for (let i = 13 - initialPosition; i < listMonths.length; i++) {
    if (Object.keys(operations[year][listMonths[i]]).length > 0) {
      lastRegister = {
        op: operations[year][listMonths[i]],
        year,
        month: listMonths[i],
      };
      break;
    }
  }
  return lastRegister;
}

/**
 * Retorna a ultima posição do ano
 * @param {*} operations
 * @param {*} year
 * @param {*} sort
 * @returns
 */
function getLastOrFirstPositionYear(operations, year, sort = 1) {
  let listMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (sort === -1) {
    listMonths.reverse();
  }
  let lastRegister = {};
  for (let i = 0; i < listMonths.length; i++) {
    if (Object.keys(operations[year][listMonths[i]]).length > 0) {
      lastRegister = {
        op: operations[year][listMonths[i]],
        year,
        month: listMonths[i],
      };
      break;
    }
  }
  return lastRegister;
}

/**
 * Soma o acumulado das operações
 * @param {*} operations
 * @param {*} year
 * @param {*} keySum
 * @param {*} breakMonth
 * @returns
 */
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
/**
 * Subtrai as perdas
 * @param {*} valueA
 * @param {*} valueB
 * @returns
 */
function subtractionLosses(valueA, valueB) {
  if (valueA >= valueB) {
    return 0;
  }
  return valueB - valueA;
}

/**
 * Retorna um nó
 * @param {*} object
 * @param {*} key
 * @returns
 */
function getNode(object, key) {
  if (object.hasOwnProperty(key)) {
    return object[key];
  } else {
    return 0;
  }
}
/**
 * Calcula a taxa
 * @param {*} value
 * @param {*} percent
 * @returns
 */
function taxCal(value, percent) {
  if (value > 0) {
    return convertCurrencyReal(value * percent);
  }
  return convertCurrencyReal(0);
}
/**
 * Converte valor para real R$
 * @param {*} value
 * @returns
 */
function convertCurrencyReal(value) {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
}

function convertCurrencyRealWithoutCoin(value) {
  return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

/**
 * Retorna código das operações junto a receita federal
 * @param {*} classe
 * @returns
 */
function getCodes(classe) {
  let group = "-";
  let cod = "-";
  let locale = "105 - Brasil";

  switch (classe) {
    case "Criptomoeda":
      group = "08";
      cod = "99";
      break;
    case "Ação":
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
    locale,
  };
}

module.exports = {
  convertCurrencyReal,
  getCodes,
  sumAccumulator,
  getLastOrFirstPositionYear,
  getOtherLastPosition,
  taxCal,
  getNode,
  subtractionLosses,
  convertCurrencyRealWithoutCoin,
};

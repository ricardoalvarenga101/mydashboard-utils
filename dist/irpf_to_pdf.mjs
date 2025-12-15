// irpf_to_pdf/index.js
import lodash4 from "lodash";

// irpf_to_pdf/composers.js
import lodash2 from "lodash";

// irpf_to_pdf/utils.js
import lodash from "lodash";
var { map } = lodash;
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
import moment from "moment-timezone";

// irpf_to_pdf/composers.js
var { sum, map: map2, sumBy, cloneDeep, groupBy } = lodash2;
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
import lodash3 from "lodash";
var { map: map3, sumBy: sumBy2 } = lodash3;
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
var { map: map4, groupBy: groupBy2 } = lodash4;
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
export {
  generateIRPF
};
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

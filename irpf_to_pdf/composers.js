const { sum, map, sumBy, cloneDeep, groupBy } = require("lodash");
const {
  convertCurrencyReal,
  getCodes,
  sumAccumulator,
  getLastOrFirstPositionYear,
  getOtherLastPosition,
  taxCal,
  getNode,
} = require("./utils");
const {
  TYPE_OPERATIONS_SELL,
  LIMIT_SWING_TRADE,
  MONTHS_LABEL,
} = require("./vars");
const { CLASS } = require("../index");

/**
 * Compoe operações em FII
 * @param {*} operations
 * @param {*} yearAnalysis
 * @param {*} lossesSalesFii
 * @returns
 */
function composeOperationsFII(operations, yearAnalysis, lossesSalesFii) {
  let mountOperationsFII = 0;
  let mountLossOperationsFII = 0;
  let nameOp = "";

  map(operations, (op, operationName) => {
    switch (operationName) {
      case TYPE_OPERATIONS_SELL.VENDA_DE_FII:
        nameOp = operationName;
        if (op.amountValues >= 0) {
          mountOperationsFII += op.amountValues;
        } else {
          mountLossOperationsFII += op.amountValues;
          mountOperationsFII += op.amountValues;
          if (lossesSalesFii.hasOwnProperty(yearAnalysis)) {
            lossesSalesFii[yearAnalysis] += mountLossOperationsFII;
          } else {
            lossesSalesFii = {
              [yearAnalysis]: mountLossOperationsFII,
            };
          }
        }
        break;
    }
  });

  return nameOp === TYPE_OPERATIONS_SELL.VENDA_DE_FII
    ? mountOperationsFII
    : null;
}

/**
 * Monta a tabela de operações e daytrade
 * @param {*} operations
 * @returns
 */
function composeTableCommonOperationAndDayTrade(operations) {
  let tableCommonOperationAndDayTradeProcessed = {};
  const arrayYears = Object.keys(operations);
  const firstYear = arrayYears.length > 0 ? arrayYears[0] : 0;

  map(operations, (years, indexYear) => {
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
      accumulatedTrade: 0,
    };

    map(years, (months, indexMonth) => {
      let ops = {
        commonList: [],
        dayTradeList: [],
        totalCommon: 0,
        totalTrade: 0,
      };
      map(months, (op, operationName) => {
        switch (operationName) {
          case TYPE_OPERATIONS_SELL.SWING_TRADE:
            // comuns, acima de 20k para acoes ou prejuizo
            if (
              op.amountTransaction > LIMIT_SWING_TRADE ||
              op.amountValues < 0
            ) {
              ops.commonList.push(op);
            }
            break;
          case TYPE_OPERATIONS_SELL.VENDA_DE_ETF:
          case TYPE_OPERATIONS_SELL.VENDA_DE_BDR:
          case TYPE_OPERATIONS_SELL.DIREITOS_DE_SUBSCRICAO:
            // communs independente de valor
            ops.commonList.push(op);
            break;
          case TYPE_OPERATIONS_SELL.DAY_TRADE:
            // day trade
            ops.dayTradeList.push(op);
            break;
        }
      });
      if (ops.commonList.length) {
        ops.totalCommon = ops.commonList.length
          ? sumBy(ops.commonList, "amountValues")
          : 0;
        ops.totalTrade = ops.commonList.length
          ? sumBy(ops.dayTradeList, "amountValues")
          : 0;
        tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth] = ops;
        // calculando accumulado do mês
        calcAccumulatedMonth(
          indexYear,
          firstYear,
          indexMonth,
          tableCommonOperationAndDayTradeProcessed
        );
      }
    });
    // calculando accumulado no ano
    calcAccumulatedYear(
      indexYear,
      firstYear,
      tableCommonOperationAndDayTradeProcessed
    );
  });
  return tableCommonOperationAndDayTradeProcessed;
}

/**
 * Compoe a tabela de operações em criptos
 * @param {*} operations
 * @returns
 */
function composeTableOperationsCriptos(operations) {
  let tableOperationsCriptosProcessed = {};
  const arrayYears = Object.keys(operations);
  const firstYear = arrayYears.length > 0 ? arrayYears[0] : 0;

  map(operations, (years, indexYear) => {
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
      accumulatedCommon: 0,
    };

    map(years, (months, indexMonth) => {
      let ops = {
        commonList: [],
        dayTradeList: [],
        totalCommon: 0,
        totalTrade: 0,
      };
      map(months, (op, operationName) => {
        switch (operationName) {
          case TYPE_OPERATIONS_SELL.VENDA_DE_CRIPTOMOEDA:
            // comuns, acima de 35k para acoes ou prejuizo
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
      // calculando accumulado do mês
      calcAccumulatedMonth(
        indexYear,
        firstYear,
        indexMonth,
        tableOperationsCriptosProcessed
      );
    });
    // calculando accumulado no ano
    calcAccumulatedYear(indexYear, firstYear, tableOperationsCriptosProcessed);
  });
  return tableOperationsCriptosProcessed;
}

function getAccumulatedCommonRecursiveValueMonths(
  node,
  indexYear,
  indexMonth,
  keySum
) {
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

function calcAccumulatedMonth(
  indexYear,
  firstYear,
  indexMonth,
  tableCommonOperationAndDayTradeProcessed
) {
  const itemMonth =
    tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth];
  if (indexYear === firstYear) {
    if (indexMonth === "1") {
      // é o primeiro mês
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
        ),
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
        ),
      };
    }
  } else {
    const _firstPosition = getLastOrFirstPositionYear(
      tableCommonOperationAndDayTradeProcessed,
      indexYear,
      1
    );
    if (_firstPosition.month == indexMonth) {
      // verifica é a primeira operação do ano
      const list = Object.keys(tableCommonOperationAndDayTradeProcessed);
      const oldYear = list.indexOf(indexYear);
      const oldYearIndex = Object.keys(
        tableCommonOperationAndDayTradeProcessed
      )[oldYear - 1];

      const _lastAccumulatorCommon =
        tableCommonOperationAndDayTradeProcessed[oldYearIndex]
          .accumulatedCommon;
      const _lastAccumulatorTrade =
        tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedTrade;
      // existe acumulado mes anterior negativo COMMON
      tableCommonOperationAndDayTradeProcessed[indexYear][
        indexMonth
      ].accumulatedCommon =
        _lastAccumulatorCommon +
        sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
      tableCommonOperationAndDayTradeProcessed[indexYear][
        indexMonth
      ].accumulatedTrade =
        _lastAccumulatorTrade +
        sumAccumulator(
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
      // existe acumulado mes anterior negativo COMMON

      if (_pastPosition.op.accumulatedCommon < 0) {
        tableCommonOperationAndDayTradeProcessed[indexYear][
          indexMonth
        ].accumulatedCommon = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
      } else {
        tableCommonOperationAndDayTradeProcessed[indexYear][
          indexMonth
        ].accumulatedCommon = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
      }
      // existe acumulado mes anterior negativo TRADER
      if (_pastPosition.op.accumulatedTrade < 0) {
        tableCommonOperationAndDayTradeProcessed[indexYear][
          indexMonth
        ].accumulatedTrade =
          _pastPosition.op.accumulatedTrade +
          sumAccumulator(
            tableCommonOperationAndDayTradeProcessed,
            indexYear,
            "totalTrade"
          );
      } else {
        tableCommonOperationAndDayTradeProcessed[indexYear][
          indexMonth
        ].accumulatedTrade = sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade"
        );
      }
    }
  }
  const acc =
    tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth]
      .accumulatedCommon;
  const accTrader =
    tableCommonOperationAndDayTradeProcessed[indexYear][indexMonth]
      .accumulatedTrade;
  if (acc > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear][
      indexMonth
    ].accumulatedCommon = 0;
  }
  if (accTrader > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear][
      indexMonth
    ].accumulatedTrade = 0;
  }
}

function calcAccumulatedYear(
  indexYear,
  firstYear,
  tableCommonOperationAndDayTradeProcessed
) {
  if (indexYear === firstYear) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon =
      sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalCommon"
      );
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade =
      sumAccumulator(
        tableCommonOperationAndDayTradeProcessed,
        indexYear,
        "totalTrade"
      );
  } else {
    // existe acumulado ano anterior negativo COMMON
    const list = Object.keys(tableCommonOperationAndDayTradeProcessed);
    const oldYear = list.indexOf(indexYear);
    const oldYearIndex = Object.keys(tableCommonOperationAndDayTradeProcessed)[
      oldYear - 1
    ];
    if (
      tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedCommon <
      0
    ) {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon =
        tableCommonOperationAndDayTradeProcessed[oldYearIndex]
          .accumulatedCommon +
        sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
    } else {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon =
        sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalCommon"
        );
    }

    // existe acumulado ano anterior negativo TRADER
    if (
      tableCommonOperationAndDayTradeProcessed[oldYearIndex].accumulatedTrade <
      0
    ) {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade =
        tableCommonOperationAndDayTradeProcessed[oldYearIndex]
          .accumulatedTrade +
        sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade"
        );
    } else {
      tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade =
        sumAccumulator(
          tableCommonOperationAndDayTradeProcessed,
          indexYear,
          "totalTrade"
        );
    }
  }
  const acc =
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon;
  const accTrader =
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade;
  if (acc > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedCommon = 0;
  }
  if (accTrader > 0) {
    tableCommonOperationAndDayTradeProcessed[indexYear].accumulatedTrade = 0;
  }
}

/**
 * Compoe operacoes comuns e daytrade
 * @param {*} operations
 * @param {*} yearAnalysis
 * @param {*} monthAnalysis
 * @param {*} operationsFull
 * @param {*} monthsFilter
 * @param {*} operationsGeneral
 * @returns
 */
function composeCommonOperationAndDayTrade(
  operations,
  yearAnalysis,
  monthAnalysis,
  operationsFull,
  monthsFilter = [],
  operationsGeneral
) {
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
    // se for diferente do ano inicial de investimento
    if (indexAtual === 0) {
      // se for a primeira operação do ano
      const indexLastYear = Object.keys(operationsGeneral)
        .filter((i) => i < yearAnalysis)
        .sort()
        .pop();
      negativePastCommon = operationsGeneral[indexLastYear].accumulatedCommon;
      negativePastTrade = operationsGeneral[indexLastYear].accumulatedTrade;
    } else {
      negativePastCommon =
        operationsGeneral[yearAnalysis][monthsFilter[indexAtual - 1]]
          .accumulatedCommon;
      negativePastTrade =
        operationsGeneral[yearAnalysis][monthsFilter[indexAtual - 1]]
          .accumulatedTrade;
    }
  } else {
    if (indexAtual === 0) {
      // se for a primeira operação do ano
      negativePastCommon = 0;
      negativePastTrade = 0;
    } else {
      negativePastCommon =
        operationsGeneral[yearAnalysis][monthsFilter[indexAtual]]
          .accumulatedCommon;
      negativePastTrade =
        operationsGeneral[yearAnalysis][monthsFilter[indexAtual]]
          .accumulatedTrade;
    }
  }

  const baseCalcTemp =
    negativePastCommon >= operations.totalCommon
      ? 0
      : operations.totalCommon + negativePastCommon;
  const baseCalcCommon = baseCalcTemp < 0 ? 0 : baseCalcTemp;
  const baseCalcTradeTemp =
    negativePastTrade >= operations.totalTrade
      ? 0
      : operations.totalTrade + negativePastTrade;
  const baseCalcTrade = baseCalcTradeTemp < 0 ? 0 : baseCalcTradeTemp;
  const prejuizoCompensarComumTemp =
    negativePastCommon + operations.totalCommon;
  const prejuizoCompensarComum =
    prejuizoCompensarComumTemp >= 0 ? 0 : prejuizoCompensarComumTemp;
  const prejuizoCompensarTradeTemp = negativePastTrade + operations.totalTrade;
  const prejuizoCompensarTrade =
    prejuizoCompensarTradeTemp >= 0 ? 0 : prejuizoCompensarTradeTemp;

  const title = {
    pageBreak: "before",
    text: `\n\n${MONTHS_LABEL[monthAnalysis]} - ${yearAnalysis}`,
    style: "title",
  };

  const content1 = {
    style: "tableOperation",
    table: {
      widths: [200, "*", "*"],
      body: [
        composeHeaderTable(["Resultados", "Operações Comuns", "Day-Trade"]),
        [
          { text: "Mercado à Vista - Ações", style: { color: "black" } },
          { text: totalCommon, style: { color: "blue", bold: true } },
          { text: totalTrade, style: { color: "blue", bold: true } },
        ],
      ],
    },
  };

  // Alíquotas 15% e 20%
  const content2 = {
    style: "tableOperation",
    table: {
      widths: [200, "*", "*"],
      body: [
        composeHeaderTable(["Resultados", "Operações Comuns", "Day-Trade"]),
        [
          { text: "RESULTADO LÍQUIDO DO MÊS", style: { color: "black" } },
          { text: totalCommon, style: { color: "blue", bold: true } },
          {
            text: convertCurrencyReal(0),
            style: { color: "blue", bold: true },
          },
        ],
        [
          {
            text: "Resultado negativo até o mês anterior",
            style: { color: "black" },
          },
          convertCurrencyReal(Math.abs(negativePastCommon)),
          convertCurrencyReal(negativePastTrade),
        ],
        [
          { text: "BASE DE CÁLCULO DO IMPOSTO", style: { color: "black" } },
          {
            text: convertCurrencyReal(baseCalcCommon),
            style: { color: "blue", bold: true },
          },
          {
            text: convertCurrencyReal(baseCalcTrade),
            style: { color: "blue", bold: true },
          },
        ],
        [
          { text: "Prejuízo a compensar", style: { color: "black" } },
          convertCurrencyReal(Math.abs(prejuizoCompensarComum)),
          convertCurrencyReal(prejuizoCompensarTrade),
        ],
        [
          { text: "Alíquota do imposto", style: { color: "black" } },
          { text: "15%", style: { color: "black" } },
          { text: "20%", style: { color: "black" } },
        ],
        [
          { text: "IMPOSTO DEVIDO", style: { color: "black" } },
          {
            text: taxCal(baseCalcCommon, 0.15),
            style: { color: "blue", bold: true },
          },
          {
            text: taxCal(baseCalcTrade, 0.2),
            style: { color: "blue", bold: true },
          },
        ],
      ],
    },
  };

  const content3 = {
    style: "tableOperation",
    table: {
      widths: ["*", "*"],
      body: [
        composeHeaderTable([{ text: "Consolidação do mês", colSpan: 2 }, {}]),
        [
          { text: "Total do imposto devido", style: { color: "black" } },
          {
            text: convertCurrencyReal(
              baseCalcCommon * 0.15 + baseCalcTrade * 0.2
            ),
            style: { color: "blue", bold: true },
          },
        ],
        [
          { text: "IR fonte de Day-Trade no Mês", style: { color: "black" } },
          convertCurrencyReal(0),
        ],
        [
          {
            text: "IR fonte de Day-Trade nos meses anteriores",
            style: { color: "black" },
          },
          convertCurrencyReal(0),
        ],
        [
          {
            text: "IR fonte de Day-Trade a compensar",
            style: { color: "black" },
          },
          convertCurrencyReal(0),
        ],
        [
          {
            text: "IR fonte (Lei nº 11.033/2004) no mês",
            style: { color: "black" },
          },
          convertCurrencyReal(0),
        ],
        [
          {
            text: "IR fonte (Lei nº 11.033/2004) nos meses anteriores",
            style: { color: "black" },
          },
          convertCurrencyReal(0),
        ],
        [
          {
            text: "IR fonte (Lei nº 11.033/2004) meses a compensar",
            style: { color: "black" },
          },
          convertCurrencyReal(0),
        ],
        [
          { text: "Imposto a pagar", style: { color: "black" } },
          {
            text: convertCurrencyReal(
              baseCalcCommon * 0.15 + baseCalcTrade * 0.2
            ),
            style: { color: "blue", bold: true },
          },
        ],
        [
          { text: "Imposto pago", style: { color: "black" } },
          convertCurrencyReal(baseCalcCommon * 0.15 + baseCalcTrade * 0.2),
        ],
      ],
    },
  };
  return { title, content1, content2, content3 };
}

/**
 * Monta o total das operações
 * @param {*} operation
 */
function composeAmountOperations(operation, op) {
  const _amountTransactionToMonth = sum(operation.transactions);
  const _amountLoss = operation.values
    .filter((v) => v < 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const _amountValues =
    _amountTransactionToMonth > LIMIT_SWING_TRADE
      ? sum(operation.values)
      : _amountLoss;
  operation["amountTransaction"] = _amountTransactionToMonth;
  operation["amountValues"] =
    op.operation === TYPE_OPERATIONS_SELL.SWING_TRADE
      ? _amountValues
      : sum(operation.values);
}

/**
 * Monta vendas de fi infra
 * @param {*} yearAnalysis
 * @param {*} indexMonth
 * @param {*} op
 * @returns
 */
function mountSalesFiInfra(
  yearAnalysis,
  indexMonth,
  op,
  SUM_SWING_TRADE_FREE_99
) {
  if (op.operation !== TYPE_OPERATIONS_SELL.VENDA_DE_FI_INFRA) {
    return null;
  }
  if (!SUM_SWING_TRADE_FREE_99.hasOwnProperty(yearAnalysis, indexMonth, op)) {
    // nao tem o ano
    SUM_SWING_TRADE_FREE_99[yearAnalysis] = {
      [op.ticker]: {
        transactions: [op.transaction],
        values: [op.value],
        name: op.name,
        ticker: op.ticker,
        type: op.type,
        classe: op.classe,
        document_number_admin: op.document_number_admin,
        document_number_principal: op.document_number_principal,
      },
    };
    composeAmountOperations(
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
      op
    );
  } else {
    if (SUM_SWING_TRADE_FREE_99[yearAnalysis].hasOwnProperty(op.ticker)) {
      // se tem o ticker
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker].transactions.push(
        op.transaction
      );
      SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker].values.push(op.value);
      composeAmountOperations(
        SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
        op
      );
    } else {
      // não tem o ticker
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
          document_number_principal: op.document_number_principal,
        },
      };
      composeAmountOperations(
        SUM_SWING_TRADE_FREE_99[yearAnalysis][op.ticker],
        op
      );
    }
  }
}

/**
 * Compoe as operações
 * @param {*} operations
 * @param {*} indexMonth
 * @param {*} indexYear
 * @param {*} op
 * @returns
 */
function composeOperations(
  operations,
  indexMonth,
  indexYear,
  op,
  SUM_SWING_TRADE_FREE_99
) {
  mountSalesFiInfra(indexYear, indexMonth, op, SUM_SWING_TRADE_FREE_99);
  if (!operations.hasOwnProperty(indexYear)) {
    operations[indexYear] = {
      [indexMonth]: {
        [op.operation]: {
          transactions: [op.transaction],
          values: [op.value],
        },
      },
    };
    composeAmountOperations(
      operations[indexYear][indexMonth][op.operation],
      op
    );
  } else {
    if (!operations[indexYear].hasOwnProperty(indexMonth)) {
      operations[indexYear][indexMonth] = {
        [op.operation]: {
          transactions: [op.transaction],
          values: [op.value],
        },
      };
      composeAmountOperations(
        operations[indexYear][indexMonth][op.operation],
        op
      );
    } else {
      if (!operations[indexYear][indexMonth].hasOwnProperty(op.operation)) {
        operations[indexYear][indexMonth][op.operation] = {
          transactions: [op.transaction],
          values: [op.value],
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

/**
 * Compoe as operações de swing trade abaixo de 20k
 * @param {*} operations
 * @param {*} SUM_SWING_TRADE_FREE
 */
function composeSwingTradeFree(operations, SUM_SWING_TRADE_FREE) {
  map(operations, (year, indexYear) => {
    let sumSwingTradeFree = 0;
    map(year, (month) =>
      map(month, (operation, indexOp) => {
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

/**
 * Compoe os proventos
 * @param {*} provents
 * @returns
 */
function composeProvents(provents) {
  const externalProvents =
    provents && provents.hasOwnProperty("external") ? provents.external : null;
  if (provents && provents.hasOwnProperty("external")) {
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
        convertCurrencyReal(provents[item].amountDividend),
      ]);
    }
    if (provents[item].amountJcp) {
      jcp.push([
        "10",
        provents[item].document_number_principal,
        provents[item].name,
        convertCurrencyReal(provents[item].amountJcp || 0),
      ]);
    }

    if (provents[item].amountRendiment) {
      rendiments.push([
        "99",
        provents[item].document_number_principal,
        provents[item].name,
        `Rendimentos de ${item} - (Administradora: ${
          provents[item].admin
            ? provents[item].admin
            : provents[item].document_number_principal
        })`,
        convertCurrencyReal(provents[item].amountRendiment || 0),
      ]);
    }
    if (provents[item].amountRendimentJCP) {
      rendimentsJCP.push([
        "06",
        provents[item].document_number_principal,
        provents[item].name,
        `Rendimentos tributados sobre juros recebidos de (${provents[item].name})`,
        convertCurrencyReal(provents[item].amountRendimentJCP),
      ]);
    }
  });
  return {
    dividends,
    jcp,
    rendiments,
    rendimentsJCP,
    external: externalProvents,
  };
}

/**
 * Compoe os rendimentos de resgate cdbs e tesouro direto
 * @param {*} cdbs
 * @param {*} tds
 * @returns
 */
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
            valor: cdbs[item].amountRendiment,
          });
          break;

        default:
          rendimentsFiltered.push({
            tipo: "06",
            document: cdbs[item].document_number_principal,
            name: cdbs[item].name,
            descricao: `Rendimentos tributados sobre juros recebidos de (${cdbs[item].name})`,
            valor: cdbs[item].amountRendiment,
          });
          break;
      }
    }
  });
  agroupByDocumentNumber = groupBy(rendimentsFiltered, "document");
  map(agroupByDocumentNumber, (item) => {
    const sum = sumBy(item, "valor");
    rendiments.push([
      item[0].tipo,
      item[0].document,
      item[0].name,
      item[0].descricao,
      convertCurrencyReal(sum),
    ]);
  });
  rendiments.push(...tds);
  return {
    rendiments,
  };
}

/**
 * Compoe os rendimentos de resgate de tesouro direto
 * @param {*} tds
 * @returns
 */
function composeRendimentsTds(tds) {
  const sortProvents = Object.keys(tds).sort();
  const rendiments = [];

  sortProvents.forEach((item) => {
    const type = item.split("-").shift();

    rendiments.push([
      "06",
      tds[item].document_number_principal,
      tds[item].name,
      `Rendimentos tributados sobre juros recebidos de (${tds[item].name})`,
      convertCurrencyReal(tds[item].amountRendiment),
    ]);
  });
  return {
    rendiments,
  };
}

const getCodesCDB = (type) => {
  switch (type) {
    case "LCI":
    case "LCD":
    case "CRI":
    case "CRA":
    case "DEBÊNTURE":
      return "03";
    case "CDB":
    case "RDB":
      return "02";
    case "OUTROS":
    case "LF":
      return "99";
  }
};

/**
 * Compoe bens e direitos da carteira
 * @param {*} itensWalletFiltered
 * @returns
 */
function composeBensDireitos(itensWalletFiltered) {
  const bens = [];
  itensWalletFiltered.forEach((item) => {
    bens.push([
      getCodes(item.classe).group,
      item.classe !== CLASS.RENDA_FIXA_OUTROS
        ? getCodes(item.classe).cod
        : getCodesCDB(item?.type),
      getCodes(item.classe).locale,
      item.document_number_principal && item.document_number_principal !== ""
        ? item.document_number_principal
        : item.document_number_admin,
      { text: item.description, style: "description" },
      item.past_year,
      item.this_year,
      item.ticker,
      item.classe,
    ]);
  });

  return bens;
}

/**
 * Sanitiza descrição de bens e direitos para cdbs
 * @param {*} txt
 * @param {*} ticker
 * @returns
 */
function sanitizeDescriptionBens(txt = "", ticker) {
  return txt.replace(`(${ticker})`, "").trim();
}

function sanitizaTableBensCDB(bens = []) {
  const newBens = [];
  const cloneBens = cloneDeep(bens);
  cloneBens.forEach((b, i) => {
    if (b[8] === CLASS.RENDA_FIXA_OUTROS) {
      b[4] = {
        text: sanitizeDescriptionBens(b[4].text, b[7]),
        style: "description",
      };
    }
    b.pop();
    b.pop();
    newBens.push(b);
  });
  return newBens;
}

/**
 * Compose headers das tabelas
 * @param {*} text
 * @param {*} fillColor
 * @param {*} color
 * @returns
 */
function composeHeaderTable(text = [], fillColor = "#300668", color = "white") {
  const headers = [];
  text.forEach((item) => {
    headers.push({
      text: item,
      fillColor,
      color,
      style: { alignment: "center" },
    });
  });
  return headers;
}

function composerExternalDividends(docDefinition, provents) {
  const dividendsConsolidated = {};
  if (
    provents.hasOwnProperty("external") &&
    provents["external"] &&
    Object.keys(provents["external"]).length > 0
  ) {
    const table = {
      dividends: {
        1: { values: [], amount: 0 },
        2: { values: [], amount: 0 },
        3: { values: [], amount: 0 },
        4: { values: [], amount: 0 },
        5: { values: [], amount: 0 },
        6: { values: [], amount: 0 },
        7: { values: [], amount: 0 },
        8: { values: [], amount: 0 },
        9: { values: [], amount: 0 },
        10: { values: [], amount: 0 },
        11: { values: [], amount: 0 },
        12: { values: [], amount: 0 },
      },
      tax: {
        1: { values: [], amount: 0 },
        2: { values: [], amount: 0 },
        3: { values: [], amount: 0 },
        4: { values: [], amount: 0 },
        5: { values: [], amount: 0 },
        6: { values: [], amount: 0 },
        7: { values: [], amount: 0 },
        8: { values: [], amount: 0 },
        9: { values: [], amount: 0 },
        10: { values: [], amount: 0 },
        11: { values: [], amount: 0 },
        12: { values: [], amount: 0 },
      },
    };

    map(provents.external, (ticker, symbol) => {
      // map(ticker.dividendPerMonth, (value, month) => {
      //   const currentMonth = Number(month);
      //   if (currentMonth <= 12) {
      //     table.dividends[currentMonth].values.push(value);
      //     table.dividends[currentMonth].amount = sum(
      //       table.dividends[currentMonth].values
      //     );
      //   }
      // });
      // map(ticker.taxPerMonth, (value, month) => {
      //   const currentMonth = Number(month);
      //   if (currentMonth <= 12) {
      //     table.tax[currentMonth].values.push(value);
      //     table.tax[currentMonth].amount = sum(table.tax[currentMonth].values);
      //   }
      // });
      dividendsConsolidated[symbol] = {
        lucroVenda: ticker.amountBuy,
        totalDividendos: ticker.amountDividend,
        impostoPago: ticker.amountTax,
      };
    });

    const tablePdf = [];
    // map(table.dividends, (mes, indexMonth) => {
    //   if (mes.values.length) {
    //     tablePdf.push([
    //       MONTHS_LABEL[indexMonth],
    //       convertCurrencyReal(table.dividends[indexMonth].amount),
    //       convertCurrencyReal(table.tax[indexMonth].amount),
    //     ]);
    //   }
    // });

    map(dividendsConsolidated, (item, ticker) => {
      tablePdf.push([
        ticker,
        `${convertCurrencyReal(item.lucroVenda)} + ${convertCurrencyReal(
          item.totalDividendos
        )}`,
        convertCurrencyReal(item.lucroVenda + item.totalDividendos),
        convertCurrencyReal(item.impostoPago),
      ]);
    });

    const title = {
      pageBreak: "before",
      text: "Dividendos recebidos no exterior",
      style: "title",
    };
    const content1 = {
      text: [
        "\nOs ",
        {
          text: "dividendos recebidos nos Estados Unidos e/ou BDRs",
          style: "negrito",
        },
        " tem seu imposto de renda retido na fonte, mas devem ser declarados através do Programa Oficial de Declaração (IRPF), somando lucros em vendas com proventos/cupons recebidos no exterior.\n\n",
        {
          text: "A Receita concentrou a emissão exclusivamente no programa de declaração, portanto será emitido um DARF único, somando ganhos no exterior e eventuais valores de IR gerados pelo próprio programa da declaração. O cálculo final dependerá de todas as informações preenchidas no programa.\n\n",
        },
        {
          text: "A partir de 2024, será necessário informar os ganhos recebidos no exterior (vendas, dividendos, cupons) diretamente na declaração, na ficha de bens e direitos, somente nos campos da seção APLICAÇÃO FINANCEIRA.\n\n",
          style: "negrito",
          color: "#e13709",
        },
        {
          text: "ATENÇÃO: A seção LUCROS E DIVIDENDOS não precisa ser preenchida, pois se refere a rendimentos de empresas offshore somente, mantenha zerada, conforme nosso informe. Nosso documento irá mostrar na tabela quais dados deverá preencher nos novos campos do exemplo abaixo: \n\n",
          style: "negrito",
          color: "#e13709",
        },
      ],
    };

    const content2 = {
      style: "table",
      table: {
        widths: [70, "*", "*", "*"],
        body: [
          composeHeaderTable([
            "Ativo",
            "Lucro/Prejuízo em vendas + proventos recebidos (R$)",
            "Lucro ou Prejuízo (R$)",
            "Imposto pago no exterior (R$)",
          ]),
          ...tablePdf,
        ],
      },
    };

    const content3 = {
      image: "print9",
      width: 505,
    };

    docDefinition.content.push(title);
    docDefinition.content.push(content1);
    docDefinition.content.push(content2);
    docDefinition.content.push(content3);
  }
  return null;
}

function composeTaxExternal(docDefinition, provents) {
  if (
    provents.hasOwnProperty("external") &&
    provents["external"] &&
    Object.keys(provents["external"]).length > 0
  ) {
    let taxAmount = 0;
    map(provents["external"], (item) => {
      taxAmount += item.amountTax;
    });
    const title = {
      pageBreak: "before",
      text: "Imposto Pago/Retido (IR a compensar ou retido no exterior)",
      style: "title",
    };
    const content1 = {
      text: "\nEsta seção irá lhe demonstrar impostos já retidos no exterior para demonstração a Receita e/ou impostos retidos na fonte que podem ser compensados ao fim do ano.\n\n",
    };

    const content2 = {
      image: "print8",
      width: 505,
    };
    const content3 = {
      text: "\nDados a declarar",
      style: "title",
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
                " Imposto pago no exterior pelo titular e pelos dependentes",
              ],
            },
            convertCurrencyReal(taxAmount),
          ],
        ],
      },
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

/**
 * Compoe a tabela de operações em FII
 * @returns
 */
function composeTableOperationsFII(tableOperationsFII, operationsFII, year) {
  const table_data = [];
  map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (mes) => {
    if (
      tableOperationsFII.hasOwnProperty(year) &&
      tableOperationsFII[year].hasOwnProperty(mes)
    ) {
      const value = getNode(operationsFII[year], mes);
      let fontColor = "blue";
      if (value < 0) {
        fontColor = "red";
      }

      table_data.push([
        tableOperationsFII[year][mes][0],
        tableOperationsFII[year][mes][1] !== 0
          ? {
              text: convertCurrencyReal(getNode(operationsFII[year], mes)),
              style: { color: fontColor, bold: true },
            }
          : convertCurrencyReal(0),
        mes === 1
          ? convertCurrencyReal(tableOperationsFII[year][mes][2])
          : {
              text: convertCurrencyReal(tableOperationsFII[year][mes][2]),
              style: { color: "#7f7f7f", fillColor: "#d3d3d3" },
            },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][3]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" },
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][4]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" },
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][5]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" },
        },
        {
          text: convertCurrencyReal(tableOperationsFII[year][mes][6]),
          style: { color: "#7f7f7f", fillColor: "#d3d3d3" },
        },
      ]);
    }
  });
  return table_data;
}

module.exports = {
  composeOperations,
  composeProvents,
  composeRendimentsCdbs,
  composeRendimentsTds,
  composeSwingTradeFree,
  composeHeaderTable,
  composeBensDireitos,
  composeTaxExternal,
  composerExternalDividends,
  composeTableOperationsCriptos,
  composeTableCommonOperationAndDayTrade,
  composeCommonOperationAndDayTrade,
  composeOperationsFII,
  composeTableOperationsFII,
  sanitizaTableBensCDB,
};

const { map, groupBy } = require("lodash");
const {
  composeProvents,
  composeRendimentsCdbs,
  composeRendimentsTds,
  composeOperations,
  composeSwingTradeFree,
} = require("./composers");
const { generatePdf } = require("./docGenerate");
// const { mockFullData2022 } = require("./mocks/fullData");

/**
 * Gerar relatório irpf
 * @param {*} yearChosen
 * @param {*} nameChosen
 * @param {*} documentNumberChosen
 * @param {*} data
 * @returns
 */
function generateIRPF(
  yearChosen = 2022,
  nameChosen = "",
  documentNumberChosen = "",
  data = {}
) {
  let operationsFull = {};
  let itensWalletFiltered = [];
  let provents = {};
  let year = yearChosen;
  let name = nameChosen.toUpperCase();
  let document_number = documentNumberChosen;
  let operationsFII = {};
  let tableOperationsFII = {};
  let lossesSalesFii = {};
  let SUM_SWING_TRADE_FREE = {};
  let SUM_SWING_TRADE_CRIPTO_FREE = {};
  let SUM_SWING_TRADE_FREE_99 = {};
  let bonifications = {};
  let bonificationsWithFractions = {};
  let rentals = {};
  let reembolso = {};

  itensWalletFiltered = data?.itensWalletFiltered;
  provents = composeProvents(data?.provents);
  rendimentsTD = composeRendimentsTds(data?.tds || {});
  rendimentsCDB = composeRendimentsCdbs(
    data?.cdbs || {},
    rendimentsTD.rendiments
  );
  bonifications = data?.bonifications || {};
  bonificationsWithFractions = data?.bonificationsWithFractions || {};
  rentals = data?.rentals || {};
  reembolso = data?.reembolso || {};

  // console.log("Provents", provents);
  // console.log("Bonificaçoes + fraçõe", bonificationsWithFractions);
  // console.log("Aluguel", rentals);

  map(data.sells, (year, indexYear) =>
    map(year, (month, indexMonth) => {
      const filterOperations = groupBy(month.operations, (x) => x.operation);
      map(filterOperations, (ops) => {
        map(ops, (op) => {
          composeOperations(
            operationsFull,
            indexMonth,
            indexYear,
            op,
            SUM_SWING_TRADE_FREE_99
          );
        });
      });
    })
  );

  composeSwingTradeFree(operationsFull, SUM_SWING_TRADE_FREE);
  pdfDefinition = generatePdf(
    name,
    document_number,
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
// console.log(generateIRPF(2022, "Heitor", "01204488752", mockFullData2022));
module.exports = { generateIRPF };

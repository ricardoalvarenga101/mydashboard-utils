const {
  composeHeaderTable,
  composeBensDireitos,
  composeTaxExternal,
  composerExternalDividends,
  sanitizaTableBensCDB,
} = require("./composers");
const {
  renderRendimentsPrint,
  renderBonifications,
  renderDividends,
  renderRendimentsIsentos,
  renderLow20kMonth,
  renderCriptoLow35kMonth,
  renderJCPs,
  renderRendimentsJCP,
  renderResgateCDB,
  renderRentals,
  renderCommonsOperations,
  renderOperationsFII,
  renderReembolso,
} = require("./renders");

/**
 * Gera o json pdf
 * @param {*} name
 * @param {*} document_number
 * @param {*} year
 * @param {*} itensWalletFiltered
 * @param {*} provents
 * @param {*} bonifications
 * @param {*} bonificationsWithFractions
 * @param {*} SUM_SWING_TRADE_FREE_99
 * @param {*} SUM_SWING_TRADE_FREE
 * @param {*} operationsFull
 * @param {*} SUM_SWING_TRADE_CRIPTO_FREE
 * @param {*} rentals
 * @param {*} operationsFII
 * @param {*} lossesSalesFii
 * @param {*} tableOperationsFII
 * @returns
 */
function generatePdf(
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
) {
  const bens = composeBensDireitos(itensWalletFiltered);
  const docDefinition = {
    content: [
      {
        stack: [
          { image: "ricardoinvesting", width: 150, height: 150 },
          {
            text: "myDashboard",
            link: "https://mydashboard.com.br/",
            color: "#815ae8",
          },
          { text: "Relatório auxiliar para declaração de imposto de renda" },
          { text: `Ano calendário: ${year}`, style: "subheader" },
        ],
        style: "header",
      },
      {
        text: [
          `${name || "<Não informado>"}\n`,
          `CPF: ${document_number || "<Não informado>"}`,
        ],
        style: { alignment: "right" },
        pageBreak: "after",
      },
      {
        text: "Escopo do relatório\n\n",
        style: "title",
      },
      {
        text: "O relatório auxiliar para Declaração de Imposto de Renda gerado pela nossa plataforma, tem por objetivo facilitar o preenchimento da declaração anual que todo investidor deve entregar para a Receita Federal do Brasil. O escopo que é atendido por esse relatório irá lhe auxiliar a preencher os seguintes dados em sua declaração:\n\n",
      },
      {
        ul: [
          `Bens e direitos (Posição acionária em 31/12/${year})`,
          "Rendimentos isentos e não tributáveis (Vendas abaixo de R$20.000,00, ativos isentos e dividendos)",
          "Rendimentos sujeitos a tributação exclusiva (Proventos tributados como JCP)",
          "Renda variável (Operações comuns / Day-Trade / Fundos Imobiliários)",
          "Bonificações",
          {
            text: "Não contempla ganho de capital em vendas de criptoativos acima de R$35.000,00",
            color: "red",
          },
          {
            text: "Não contempla ganho de capital nas vendas de ativos do exterior",
            color: "red",
          },
        ],
      },
      {
        text: "\n\nIsenção de responsabilidade\n\n",
        style: "title",
      },
      {
        text: [
          "Toda a informação contida no relatório foi gerada com base nos dados informados pelo utilizador da planilha, ficando sob responsabilidade do investidor a conferência dos dados cadastrados e o preenchimento da declaração de imposto de renda.",
          " Este relatório",
          { text: " não será sua única fonte", style: { bold: true } },
          ` de consulta para preencher sua declaração, procure também os informes fornecidos por outras instituições que geraram renda ou rendimentos durante o ano de ${year}.\n\nExemplo de outras informações que deverá procurar para sua declaração:\n`,
        ],
      },
      {
        ul: [
          "Informe do banco onde possui conta corrente/poupança para informação de saldos e rendimentos",
          "Informe de seu empregador para declaração de remuneração anual e impostos retidos",
          "Rendimentos provenientes de aluguéis, permutas etc",
        ],
        pageBreak: "after",
      },
      {
        text: "Instalação do programa\n\n",
        style: "title",
      },
      {
        text: [
          `O primeiro passo para a declaração do IRPF ${
            Number(year) + 1
          } pelo leitor é realizar o download do programa disponibilizado através do site da Receita Federal do Brasil.\n`,
          `Repare que o IRPF de ${
            Number(year) + 1
          } é referente ao fechamento de ${year} e a receita costuma disponibilizar o aplicativo para download próximo do final de fevereiro.`,
          "\nPode encontrar o link de instalação no site da Receita Federal ",
          {
            text: "[BAIXAR AQUI]",
            link: "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf",
            color: "#815ae8",
          },
          "\n A instalação do programa é rápida e fácil, ao abrir o instalador, serão dados todos os passos para que o programa seja instalado adequadamente na sua máquina. Após abrir o programa, o investidor deverá:\n\n",
        ],
      },
      {
        ol: [
          `Importar a declaração realizada no ano de ${
            Number(year) + 1
          } (competência ${year}), caso tenha declarado no ano anterior;\n`,
          "Criar uma nova Declaração, caso seja a primeira vez declarando o imposto de renda\n\n",
        ],
      },
      {
        image: "print1",
        width: 505,
        pageBreak: "after",
      },
      {
        text: "Bens e direitos (Ativos sob sua custódia)\n\n",
        style: "title",
      },
      {
        text: [
          `A obrigatoriedade das Ações em Bens e Direitos existe caso tenha terminado o ano de ${year} com algum ativo em sua custódia. Na declaração `,
          {
            text: "é necessário informar todas as posições",
            style: { bold: true },
          },
          ` em ações, opções, FII e ETF referentes ao dia 31/12/${year} na opção \“Bens e Direitos\”.\n\n`,
        ],
      },
      {
        columns: [
          { text: 'Local da declaração Bens e Direitos"\n' },
          { text: "Exemplo de preenchimento" },
        ],
      },
      {
        columns: [
          { image: "print2", width: 255 },
          { image: "print3", width: 255 },
        ],
      },
      {
        text: [
          {
            text: "\n\nPara cada linha da tabela abaixo efetue um lançamento através do botão",
          },
          { text: " Novo", style: { bold: true } },
          " preencha os dados da tabela e confirme em ",
          { text: "'OK'\n\n", style: { bold: true } },
          `Abaixo incluímos também o custo de seus ativos em ${
            year - 1
          } de acordo com os lançamentos inseridos em mydashboard. Caso seus lançamentos de ${
            year - 1
          } não estejam na planilha substitua os valores da coluna de 31/12/${
            year - 1
          } pelos valores que incluiu na declaração anterior.\n\n`,
        ],
        pageBreak: "after",
      },
      {
        text: "Será necessário informar na seção de bens e direitos o grupo de bens, abaixo listamos o grupo e também o código que irá declarar seus ativos.\n",
        style: { bold: true },
      },
      {
        style: "table",
        table: {
          widths: ["auto", "auto", "auto", 100, 160, 60, 60],
          body: [
            composeHeaderTable([
              "Grupo",
              "Cód.",
              "Local.",
              "CNPJ",
              "Discriminação",
              `Situação 31/12/${year - 1}`,
              `Situação 31/12/${year}`,
            ]),
            ...sanitizaTableBensCDB(bens),
          ],
        },
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
      ...renderRentals(rentals),
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
      print9: "https://i.ibb.co/QjPv3Hx1/print-9.png",
    },
    styles: {
      table: {
        margin: [0, 5, 0, 15],
        fontSize: 10,
        alignment: "center",
      },
      tableOperation: {
        margin: [0, 5, 0, 15],
        fontSize: 10,
        alignment: "center",
        color: "#7f7f7f",
      },
      title: {
        fontSize: 15,
        bold: true,
      },
      header: {
        fontSize: 18,
        bold: true,
        alignment: "right",
        margin: [0, 190, 0, 80],
      },
      subheader: {
        fontSize: 12,
      },
      description: {
        fontSize: 9,
      },
      negrito: {
        bold: true,
      },
    },
    operations: [],
    amountTransactions: [],
    bens,
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
  // console.log('gerado', docDefinition)

  return docDefinition;
}

// function downloadPdf() {
//   pdfMake.createPdf(pdfDefinition).open();
// }

module.exports = {
  generatePdf,
};

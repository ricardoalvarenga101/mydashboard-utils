var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
  TRANSACTIONS: () => TRANSACTIONS
});
module.exports = __toCommonJS(index_exports);
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
  TRANSACTIONS
});

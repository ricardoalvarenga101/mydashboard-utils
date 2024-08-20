const JOBS = {
  IMPORT_PROCESS: "ImportProcess",
  IMPORT_PROCESS_CLEAN_FAIL: "ImportProcessCleanFail",
  INPLIT_AND_SPLIT_PROCESS: "SplitAndInplitProcess",
  WALLET_PROCESS: "WalletProcess",
};

const TRANSACTIONS = {
  MOVIMENTATIONS_OPERATIONS: [
    "Bonificação em Ativos",
    "Compra",
    "Compra Direitos de Subscrição",
    "Recibo de Subscrição em Andamento",
    "Venda",
    "Venda Direitos de Subscrição",
  ],
  PROVENTS_OPERATIONS: [
    "Aluguel",
    "Bonificação em Frações",
    "Dividendo",
    "JCP",
    "Rendimento",
  ],
};

const COLLECTION_NAME = {
  USER: "user",
  EVENTS: "events",
  TRANSACTIONS: "transactions",
  PROVENTS: "provents",
  PROVENTS_SUBSCRIBERS: "provents_subscribers",
  IMPORT: "import",
  SUBSCRIBERS: "subscribe",
  SUBSCRIBERS_EVENTS: "subscribe_events",
  SPLIT_INPLIT: "split_inplit",
  AMORTIZATION: 'amortizations',
  WALLET: 'wallet'
};

const CLASS = {
  ACAO: "Ação",
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
  RENDA_FIXA_OUTROS: "Renda Fixa - Outros",
};

const TABS = {
  INFORMACOES: "A. Informações",
  B3: "B. B3",
  IMPORT: "C. Importar de Outra Versão",
  DASHBOARD: "0. Dashboard",
  DASHBOARD_CONSOLIDADO: "0.1. Dashboard Consolidado",
  MEUS_ATIVOS: "1. Meus Ativos",
  LANCAMENTO_B3: "2. Lançamentos (B3)",
  LANCAMENTO_MANUAL: "2.1. Lançamentos (Manual)",
  LANCAMENTO_CDB: "2.2. Lançamentos (CDB/LCI/LCA/LC/RDB/DEBÊNTURES)",
  EVOLUCAO_PATRIMONIAL: "2.3. Evolução Patrimonial",
  PROVENTOS: "3. Proventos",
  AMORTIZACOES: "4. Amortizações",
  CALENDARIO: "5. Calendário de Dividendos",
  BALANCEAMENTO: "6. Balanceamento da Carteira",
  BALANCEAMENTO_ATIVO: "6.1. Balanceamento da Carteira por Ativo",
  SIMULADOR_PM: "6.2. Simulador de Novo Preço Médio",
  PRECO_TETO: "7. Preço Teto",
  MEUS_OBJETIVOS: "8. Meus Objetivos",
  VENDAS: "9. Vendas",
  DARF: "10. DARF",
  BENS_DIREITOS: "11. IR Bens e Direitos",
  ANOTACOES: "11.1. Anotações",
  BASE_DADOS: "12. Base de Dados",
  TABELA_DINAMICA: "99. Tabela Dinamica",
  TABELA_DINAMICA_CONSOLIDADO: "99. Tabela Dinamica Consolidado",
  CODIGOS_IRPF: "12.1. Códigos IRPF",
  COTACAO: "99. Cotação",
  ALTAS: "99. Altas e Baixas",
  MOVIMENTACOES_CDB: "99. Movimentações (CDB/LCI/LCA/LC/RDB)",
  MOVIMENTACOES: "99. Movimentações",
};

const EVENTS = {
  IMPORT_TRSANSATCION: "import_transaction",
  IMPORT_TRSANSATCION_SHEET: "import_transaction_sheet",
  SPLIT_AND_INPLIT: "split_and_inplit",
  STATUS: {
    AWAIT: "await",
    PROCESSED: "processed",
    PROCESSING: "processing",
    FAIL: "fail",
    AWAIT_VALIDATE: "await_validate",
  },
};

const MOVIMENTATIONS_OPERATIONS_KEYS = {
  BONIFICACAO: "Bonificação em Ativos",
  COMPRA: "Compra",
  VENDA: "Venda",
  COMPRA_DIREITO_SUBSCRICAO: "Compra Direitos de Subscrição",
  RECIBO_DIREITO_SUBSCRICAO: "Recibo de Subscrição em Andamento",
  VENDA_DIREITO_SUBSCRICAO: "Venda Direitos de Subscrição",
};

const MOVIMENTATIONS_SUBSCRIBERS = [
  MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA_DIREITO_SUBSCRICAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.VENDA_DIREITO_SUBSCRICAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.RECIBO_DIREITO_SUBSCRICAO,
];

const CLASS_EXTERNAL_LIST = [
  CLASS.ETF_EUA,
  CLASS.REIT,
  CLASS.STOCK,
];

const MOVIMENTATIONS_WITHOUT_SUBSCRIBERS = [
  MOVIMENTATIONS_OPERATIONS_KEYS.BONIFICACAO,
  MOVIMENTATIONS_OPERATIONS_KEYS.COMPRA,
  MOVIMENTATIONS_OPERATIONS_KEYS.VENDA,
];

module.exports = {
  TABS,
  COLLECTION_NAME,
  CLASS,
  EVENTS,
  JOBS,
  TRANSACTIONS,
  MOVIMENTATIONS_OPERATIONS_KEYS,
  MOVIMENTATIONS_SUBSCRIBERS,
  CLASS_EXTERNAL_LIST,
  MOVIMENTATIONS_WITHOUT_SUBSCRIBERS,
};

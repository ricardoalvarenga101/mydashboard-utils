const JOBS = {
  IMPORT_PROCESS: 'ImportProcess',
  IMPORT_PROCESS_CLEAN_FAIL: 'ImportProcessCleanFail'
}

const TRANSACTIONS = {
  MOVIMENTATIONS_OPERATIONS: ["Bonificação em Ativos", "Compra", "Compra Direitos de Subscrição", "Recibo de Subscrição em Andamento", "Venda", "Venda Direitos de Subscrição"],
  PROVENTS_OPERATIONS: ["Aluguel", "Bonificação em Frações", "Dividendo", "JCP", "Rendimento"]
}

const COLLECTION_NAME = {
  USER: 'user',
  EVENTS: 'events',
  TRANSACTIONS: 'transactions',
  PROVENTS: 'provents',
  IMPORT: 'import',
  SUBSCRIBERS: 'subscribe',
  SUBSCRIBERS_EVENTS: 'subscribe_events',
}

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
  "INFORMACOES": "A. Informações",
  "B3": "B. B3",
  "IMPORT": "C. Importar de Outra Versão",
  "DASHBOARD": "0. Dashboard",
  "DASHBOARD_CONSOLIDADO": "0.1. Dashboard Consolidado",
  "MEUS_ATIVOS": "1. Meus Ativos",
  "LANCAMENTO_B3": "2. Lançamentos (B3)",
  "LANCAMENTO_MANUAL": "2.1. Lançamentos (Manual)",
  "LANCAMENTO_CDB": "2.2. Lançamentos (CDB/LCI/LCA/LC/RDB/DEBÊNTURES)",
  "EVOLUCAO_PATRIMONIAL": "2.3. Evolução Patrimonial",
  "PROVENTOS": "3. Proventos",
  "AMORTIZACOES": "4. Amortizações",
  "CALENDARIO": "5. Calendário de Dividendos",
  "BALANCEAMENTO": "6. Balanceamento da Carteira",
  "BALANCEAMENTO_ATIVO": "6.1. Balanceamento da Carteira por Ativo",
  "SIMULADOR_PM": "6.2. Simulador de Novo Preço Médio",
  "PRECO_TETO": "7. Preço Teto",
  "MEUS_OBJETIVOS": "8. Meus Objetivos",
  "VENDAS": "9. Vendas",
  "DARF": "10. DARF",
  "BENS_DIREITOS": "11. IR Bens e Direitos",
  "ANOTACOES": "11.1. Anotações",
  "BASE_DADOS": "12. Base de Dados",
  "TABELA_DINAMICA": "99. Tabela Dinamica",
  "TABELA_DINAMICA_CONSOLIDADO": "99. Tabela Dinamica Consolidado",
  "CODIGOS_IRPF": "12.1. Códigos IRPF",
  "COTACAO": "99. Cotação",
  "ALTAS": "99. Altas e Baixas",
  "MOVIMENTACOES_CDB": "99. Movimentações (CDB/LCI/LCA/LC/RDB)",
  "MOVIMENTACOES": "99. Movimentações",
}

const EVENTS = {
  IMPORT_TRSANSATCION: 'import_transaction',
  IMPORT_TRSANSATCION_SHEET: 'import_transaction_sheet',
  STATUS: {
    AWAIT: 'await',
    PROCESSED: 'processed',
    PROCESSING: 'processing',
    FAIL: 'fail'
  }
}

module.exports = {
  PAGE_PATH_IGNORES,
  TABS,
  COLLECTION_NAME,
  CLASS,
  EVENTS,
  JOBS,
  TRANSACTIONS
}
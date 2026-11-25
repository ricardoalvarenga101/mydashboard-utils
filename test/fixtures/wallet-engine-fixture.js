/**
 * Fixtures enxutas e representativas para os testes de contrato das funções de
 * data/posição/código CDB centralizadas (`getFullShortDates`,
 * `getFinishPositionsCDB`, `getCodesCDB` e `getLastAvailablePositionWallet`).
 *
 * Retornam objetos novos a cada chamada, garantindo isolamento entre execuções.
 */

/**
 * Data de referência fixa usada nos goldens de `getFullShortDates` (função
 * dependente de `new Date()`). Mantém o teste determinístico independentemente
 * de quando for executado.
 */
export const REFERENCE_NOW = new Date(2026, 10, 25) // 25/11/2026 (local)

/**
 * Histórico de carteira (shape `{ ano: { mes: { ticker: {...}, walletResume }}}`)
 * usado por `getFullShortDates` e `getLastAvailablePositionWallet`.
 */
export function buildWalletHistoryFixture () {
  return {
    2024: {
      3: {
        PETR4: { ticker: 'PETR4', totalQtd: 100, totalAmount: 2500 },
        walletResume: { totalAmountInvest: 2500 }
      },
      5: {
        PETR4: { ticker: 'PETR4', totalQtd: 110, totalAmount: 2700 },
        BOVA11: { ticker: 'BOVA11', totalQtd: 10, totalAmount: 200 },
        walletResume: { totalAmountInvest: 2900 }
      }
    }
  }
}

/**
 * Histórico de CDB (shape `{ ano: { mes: { ticker: {...}, finishPosition: [...] }}}`)
 * usado por `getFinishPositionsCDB`.
 */
export function buildCdbHistoryFixture () {
  return {
    2024: {
      3: {
        CDB1: { ticker: 'CDB1', totalAmount: 1000 },
        finishPosition: [
          { ticker: 'CDB1', year: '2024', month: '3', totalAmount: 1000 }
        ]
      },
      6: {
        CDB2: { ticker: 'CDB2', totalAmount: 500 },
        finishPosition: [
          { ticker: 'CDB2', year: '2024', month: '6', totalAmount: 500 },
          { ticker: 'CDB3', year: '2024', month: '6', totalAmount: 300 }
        ]
      }
    }
  }
}

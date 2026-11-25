# mydashboard-utils

Biblioteca de utilidades, constantes e regras de carteira compartilhadas do
projeto **myDashboard**. Centraliza o código comum entre `ri-api`, `worker-api` e
`ri-webapp`, evitando duplicação e divergência de implementação entre serviços.

## Instalação

```bash
npm install mydashboard-utils
```

## Subpaths

O pacote expõe subpaths independentes, permitindo importar apenas o que cada
consumidor precisa (menos código no bundle):

| Subpath | Conteúdo | Uso no front |
|---------|----------|--------------|
| `mydashboard-utils` | Constantes (`CLASS`, `EVENTS`, ...) + re-exports (inclui mocks `fullData`) | evitar (arrasta mocks) |
| `mydashboard-utils/functions` | Helpers puros + funções de data/posição/código CDB | ✅ recomendado |
| `mydashboard-utils/wallet` | Núcleo financeiro de carteira | ✅ recomendado |
| `mydashboard-utils/irpf_to_pdf` | Composição do relatório IRPF | evitar |

> No front, importe de `functions` e `wallet` (subpaths leves). Evite o root `.`
> (arrasta os mocks `fullData`) e o `irpf_to_pdf` (lógica de composição do IRPF).

## Uso rápido

### ESM

```js
import { CLASS } from 'mydashboard-utils'
import { getFullShortDates, getCodesCDB } from 'mydashboard-utils/functions'
import { composeTransactionsWallet } from 'mydashboard-utils/wallet'
import { generateIRPF } from 'mydashboard-utils/irpf_to_pdf'
```

### CommonJS

```js
const { CLASS } = require('mydashboard-utils')
const { getFullShortDates } = require('mydashboard-utils/functions')
const { composeTransactionsWallet } = require('mydashboard-utils/wallet')
const { generateIRPF } = require('mydashboard-utils/irpf_to_pdf')
```

## Subpath `functions` — helpers e funções de carteira

- **Formatação/data**: `convertCurrencyReal`, `convertCurrencyDolar`,
  `composeDateFromShortV2`, `composeDateDefaultToShort`, `composeNumberTwoDecimal`,
  `convertDateTime`, `strToFloat`.
- **Planilha/coleções**: `mountList`, `getDataRange`, `getLastRow`, `getSheetId`,
  `composeRanges`.
- **Tipos/atributos**: `getTypeByMainSearching`, `getMonths`, `renameTickerGoogleSheet`,
  `sanitizeDescriptionBens`, `extractUserId`, `mydash`.
- **Carteira/data/posição/código CDB**:
  - `getFullShortDates(walletHistory, now?)` — lista de `YYYYMM` desde o início dos investimentos.
  - `getFinishPositionsCDB(historic)` — posições finalizadas de CDB.
  - `getCodesCDB(type)` — código de classe de renda fixa para o IRPF (`'03'`, `'02'` ou `'99'`).
  - `getLastAvailablePositionWallet(walletHistory)` — última posição válida, retorna `{ lastRegisterHistorycWallet, lastYear, lastMonth }`.

## Subpath `wallet` — núcleo financeiro

- `composeTransactionsWallet(...)` — custódia e preço médio.
- `composeAtributesWallet(...)` — atributos + `walletResume`.
- `calculateProfitSales(...)` — lucro acumulado de vendas.
- `composeOperationSalesDefault(classe, operation?)` — operação de venda padrão.

## Subpath `irpf_to_pdf` — relatório IRPF

- `generateIRPF(yearChosen, nameChosen, documentNumberChosen, data)` — monta a definição do relatório.

## Build, testes e consumo local

Veja [`README.dev.md`](./README.dev.md).

Resumo:

```bash
npm install
npm run build   # gera dist/ (ESM + CJS por subpath)
npm test        # testes de contrato (node --test)
```

## Publicação

```bash
npm version <patch|minor|major>
npm publish
```

O script `prepare` executa `npm run build` automaticamente antes de publicar. Os
arquivos publicados são definidos pelo campo `files` do `package.json`
(`dist`, `docs`, `README.md`).

## Licença

MIT

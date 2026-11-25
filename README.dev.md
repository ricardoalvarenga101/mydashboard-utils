# mydashboard-utils — Developer Guide

Este README é para desenvolvedores do pacote. Contém instruções sobre estrutura, build, testes ESM/CJS e como consumir localmente sem publicar uma versão.

## Estrutura relevante do repositório

```
mydashboard-utils/
├─ constants.js
├─ index.js
├─ functions/
│  └─ index.js
├─ wallet/
│  ├─ index.js
│  └─ wallet-business.js
├─ irpf_to_pdf/
│  ├─ index.js
│  └─ composers.js
├─ test/            # fixtures e testes de contrato (node --test)
├─ scripts/         # geradores de golden outputs
├─ esbuild.config.mjs
├─ package.json
└─ dist/            # gerado pelo build
```

## Preparação

1. Instale dependências do projeto:

```bash
npm install
```

## Build — gerar ESM (.mjs) e CJS (.cjs) por subpath

O script `esbuild.config.mjs` cria builds separados para as entradas `index`, `functions`, `wallet` e `irpf_to_pdf`. Os bundles têm `lodash` e `moment-timezone` externalizados para reduzir o tamanho dos artefatos.

Execute:

```bash
npm run build
```

Saída esperada `dist/`:

```
index.mjs index.cjs functions.mjs functions.cjs wallet.mjs wallet.cjs irpf_to_pdf.mjs irpf_to_pdf.cjs
```

### Observações de build

- O `esbuild.config.mjs` define explicitamente as entradas para evitar colisões de nomes de saída.
- `external: ['lodash', 'moment-timezone']` faz com que esses pacotes não sejam empacotados no bundle — ficam declarados em `dependencies` e são resolvidos automaticamente pelo consumidor.

## Testes rápidos

### 1) Testar arquivos CJS gerados diretamente

```bash
# depois do build
node -e "console.log(require('./dist/functions.cjs'))"
node -e "console.log(require('./dist/irpf_to_pdf.cjs').generateIRPF ? 'generateIRPF ok' : 'missing')"
```

### 2) Testar imports ESM (Node >=14 com suporte a .mjs)

```bash
node --input-type=module -e "import('./dist/functions.mjs').then(m=>console.log(Object.keys(m)))"
```

## Como consumir localmente sem publicar

Duas opções úteis:

### A) `npm pack` (recomendado para testar como o pacote será instalado)

```bash
# gera um arquivo tarball: mydashboard-utils-<versao>.tgz
npm pack

# no projeto consumidor
npm install /caminho/para/mydashboard-utils/mydashboard-utils-<versao>.tgz
```

### B) `npm link` (útil para dev iterativo)

```bash
# no mydashboard-utils
npm link

# no projeto consumidor
npm link mydashboard-utils
```

> Observação: quando usar local link/pack, certifique-se de que o projeto consumidor tenha as dependências externalizadas (`lodash`, `moment-timezone`) instaladas.

## Importar apenas subpaths (reduz bundle no consumidor)

- CommonJS:
```js
const { getFullShortDates, getCodesCDB } = require('mydashboard-utils/functions')
const { composeTransactionsWallet } = require('mydashboard-utils/wallet')
const { generateIRPF } = require('mydashboard-utils/irpf_to_pdf')
```

- ESM:
```js
import { getFullShortDates, getCodesCDB } from 'mydashboard-utils/functions'
import { composeTransactionsWallet } from 'mydashboard-utils/wallet'
import { generateIRPF } from 'mydashboard-utils/irpf_to_pdf'
```

## Publicação

O `package.json` já define:

- `"files": ["dist", "docs", "README.md"]` — artefatos publicados.
- `"prepare": "npm run build"` — build automático antes de publicar.

Para publicar:

```bash
npm version <patch|minor|major>
npm publish
```

## Debugging de problemas comuns

- `ERR_PACKAGE_PATH_NOT_EXPORTED`: confirme o campo `exports` em `package.json` e se o pacote está realmente instalado (teste com `npm pack` + `npm install <tgz>`).
- `Two output files share the same path but have different contents`: entradas com nomes conflitantes — use o mapeamento explícito de entradas no `esbuild.config.mjs`.
- Dependências faltando: `lodash` e `moment-timezone` são externalizadas do bundle, mas declaradas em `dependencies` — o `npm install` as instala automaticamente no consumidor.


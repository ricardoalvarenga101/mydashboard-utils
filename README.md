# mydashboard-utils

Biblioteca de utilidades e constantes usada pelo projeto myDashboard.

Propósito resumido
- Fornecer constantes compartilhadas (tabs, nomes de collections, códigos, etc.).
- Exportar funções utilitárias reutilizáveis (normalização de datas, formatações, helpers de planilha, etc.).
- Disponibilizar um motor para geração de IRPF (função `generateIRPF`) usado pelo módulo `irpf_to_pdf`.

Uso rápido
- CommonJS:
```js
const functions = require('mydashboard-utils/functions')
const { generateIRPF } = require('mydashboard-utils/irpf_to_pdf')
```
- ESM:
```js
import functions from 'mydashboard-utils/functions'
import { generateIRPF } from 'mydashboard-utils/irpf_to_pdf'
```

Notas importantes
- Os artefatos consumíveis ficam em `dist/` (gerados pelo build). O `package.json` já exporta subpaths (`"./*"`) apontando para `dist/*.mjs` e `dist/*.cjs`.
- Dependências pesadas como `lodash` e `moment-timezone` são externalizadas no build: o projeto consumidor deve instalar essas dependências se for usar os submódulos.

Para instruções completas de desenvolvimento, build e testes locais veja `README.dev.md`.

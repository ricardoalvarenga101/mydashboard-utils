# Contrato do `lsData`

Referência canônica do shape de dados compartilhado entre front (`ri-webapp`), back (`ri-api`) e worker (`worker-api`).

**Fonte canônica:** `ri-webapp/src/mock/lsData.json`.

O objeto `lsData` é o estado completo da carteira do usuário, produzido pela API (`calculateCurrentWallet`), gravado em cache pelo worker e enriquecido/consumido pelo front (`getDataSync`).

## Chaves top-level

| Chave | Tipo | Formato |
|-------|------|---------|
| `lastMonth` | `number` | Último mês processado da carteira (1–12) |
| `lastYear` | `number` | Último ano processado da carteira |
| `walletHistory` | `object` | `{ [ano]: { [mes]: { [ticker]: {...} } } }` — histórico mensal de custódia/preço médio por ticker |
| `walletResume` | `object` | Resumo consolidado da carteira (ver [walletResume](#walletresume)) |
| `walletRentals` | `array` | Aluguéis recebidos (FIIs) |
| `walletReembolso` | `array` | Reembolsos recebidos |
| `adjustedTransactions` | `object` | `{ [docId]: { adjustedQuantity, adjustedUnitPrice, adjustedAmount } }` — ajustes manuais de transações |
| `adjustedProvents` | `object` | `{ [docId]: { adjustedQuantity, adjustedUnitPrice, adjustedAmount } }` — ajustes manuais de proventos |
| `walletSales` | `array` | Vendas realizadas (ver [walletSales](#walletsales)) |
| `provents` | `object` | `{ [ticker]: array }` — proventos por ticker (ver [proventos](#proventos)) |
| `proventsSubscribers` | `object` | `{ [ticker]: array }` — proventos de direitos de subscrição por ticker |
| `dataBase` | `array` | Base de dados de ativos (nome, logo, tipo, setor etc.) |
| `calendarEvents` | `object` | `{ calendarEventsData: array, defaultSelected: number }` — calendário de dividendos |
| `walletRendiments` | `array` | `{ year, shortDate, date, investiment, provent, percent }` — evolução de rendimentos |
| `walletRendimentsByClasse` | `object` | `{ [classe]: array }` — rendimentos agrupados por classe de ativo |
| `walletSubscribers` | `array` | Direitos de subscrição em carteira |
| `walletAmortizations` | `array` | Amortizações registradas |
| `transactions` | `array` | Transações de ativos (ver [transações](#transações)) |
| `transactionsCdb` | `array` | Transações de CDB/renda fixa (ver [transações-cdb](#transações-cdb)) |
| `tickersTransactions` | `array` | Lista de tickers com transações |
| `walletSplitAndInplit` | `array` | Eventos de split/inplit |
| `walletUpdate` | `array` | Atualizações de carteira pendentes |
| `quotes` | `array` | Cotações atuais (ver [quotes](#quotes)) |
| `lastUpdatedAt` | `string` | Timestamp da última atualização |
| `cdbHistory` | `object` | `{ [ano]: { [mes]: { [chaveCdb]: {...} } } }` — histórico de CDBs |
| `cdbSales` | `object` | `{ [ano]: { [chaveCdb]: array } }` — vendas de CDBs por ano |
| `userId` | `string` | Identificador do usuário |
| `indiceRendiments` | `object` | `{ cdiHistorical, ipcaHistorical, firstYear, firstMonth }` — índices de referência |
| `balancerConfig` | `object` | `{ balancer: { [classe]: string }, tolerance: number }` — configuração de balanceamento |
| `expires` | `number` | Timestamp de expiração do cache local (front) |
| `id` | `number` | Identificador local do registro no IndexedDB (front) |

## Formatos detalhados

### `walletHistory`

Histórico mensal de custódia e preço médio. Cada item (por ticker) contém:

```
movimentation, ticker, totalAmount, totalQtd, totalAmountBonification,
ptaxAverage, ptaxList, pm, pmBefore, logourl, name, type, segment, sector,
subSector, totalAmountWithCambio, totalAmountVariationWithCambio
```

Além dos tickers, cada mês pode conter chaves especiais:

- `finishPosition` — posições encerradas no mês
- `walletResume` — resumo do mês
- `walletSales` — vendas do mês
- `totalAmountBonification` — bonificações do mês

### `walletResume`

```
totalAmountInvest, totalAmountAported, totalAmountProvents, totalBonification,
totalBonificationWithAmortization, totalProfitSales, amountPatrimony,
totalAmountWithVariation, amountSales, amountProventSubscribers
```

### `transações`

```
ticker, movimentation, movimentationSales, quantity, date, unitPrice, taxes,
emolumento, irrf, ptax, amount, shortDate, docId, createTime, year, month,
logourl, name, type, segment, sector, subSector
```

### `walletSales`

```
date, unitPrice, amount, pmBeforeOriginal, ticker, movimentation, quantity,
movimentationSales, docId, taxes, irrf, ptax, importId, pmBefore, shortDate,
createTime, year, month, original, logourl, name, type, segment, sector,
subSector, yearAndMonth, amountProfitSales
```

### `proventos`

```
date, unitPrice, amount, ticker, movimentation, quantity, unitPriceLiquid,
docId, irrf, ptax, importId, totalLiquid, shortDate, createTime, year, month,
name, logourl, type, segment, sector, subSector, totalAmountWithCambio
```

### `transações-cdb`

```
ticker, movimentation, movimentationSales, date, endDate, unitPrice, emissor,
typeTitle, formaTitle, indexadorTitle, taxaTitle, type, jurosTitle, tax, irrf,
documentNumber, shortDate, shortDateExpire, docId, createTime, quantity, taxes,
emolumento, ptax, amount, year, month, logourl
```

### `quotes`

```
symbol, logourl, regularMarketPrice, type, updatedAt, docsData, dividendsData,
regularMarketPriceYesterday, dy, pl, variation12M, pvp, vpa
```

## Chaves enriquecidas no front

As chaves a seguir são adicionadas pelo front (não produzidas pelo back):

- `indiceRendiments` — índices de referência (CDI/IPCA)
- `balancerConfig` — configuração de balanceamento
- `expires` — expiração do cache local
- `id` — registro no IndexedDB
